"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ObsidianSyncPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  serverUrl: "192.168.1.x:8080",
  authToken: "",
  deviceId: "",
  enabled: true,
  uploadOnConnect: false,
  downloadOnConnect: true
};
var ObsidianSyncPlugin = class extends import_obsidian.Plugin {
  settings;
  ws = null;
  clientId = null;
  reconnectTimer = null;
  reconnectDelay = 1e3;
  intentionalClose = false;
  /**
   * Paths currently being written by a remote change.
   * Vault event handlers check this set and skip sending those paths back to
   * avoid an echo loop.
   */
  pendingRemoteWrites = /* @__PURE__ */ new Set();
  statusBar;
  // ── Lifecycle ───────────────────────────────────────────────────────────────
  async onload() {
    await this.loadSettings();
    if (!this.settings.deviceId) {
      this.settings.deviceId = crypto.randomUUID();
      await this.saveSettings();
    }
    this.statusBar = this.addStatusBarItem();
    this.setStatus("disconnected");
    this.addSettingTab(new SyncSettingTab(this.app, this));
    this.registerVaultEvents();
    if (this.settings.enabled) {
      this.connect();
    }
    this.addCommand({
      id: "reconnect",
      name: "Reconnect to sync server",
      callback: () => {
        this.reconnectDelay = 1e3;
        this.disconnect();
        this.connect();
      }
    });
  }
  onunload() {
    this.disconnect(true);
  }
  // ── Settings ────────────────────────────────────────────────────────────────
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  // ── WebSocket connection ─────────────────────────────────────────────────────
  connect() {
    if (!this.settings.serverUrl || !this.settings.authToken) {
      new import_obsidian.Notice("HomeSync: Configure server URL and token in settings.");
      return;
    }
    this.intentionalClose = false;
    this.setStatus("connecting");
    let url = this.settings.serverUrl.trim();
    if (!/^wss?:\/\//i.test(url)) url = "ws://" + url;
    try {
      this.ws = new WebSocket(url);
    } catch {
      this.setStatus("disconnected");
      this.scheduleReconnect();
      return;
    }
    this.ws.onopen = () => {
      this.ws.send(
        JSON.stringify({
          type: "auth",
          token: this.settings.authToken,
          deviceId: this.settings.deviceId
        })
      );
    };
    this.ws.onmessage = (ev) => {
      try {
        const msg = JSON.parse(ev.data);
        this.handleInbound(msg);
      } catch {
      }
    };
    this.ws.onclose = () => {
      this.clientId = null;
      this.setStatus("disconnected");
      if (!this.intentionalClose) {
        this.scheduleReconnect();
      }
    };
    this.ws.onerror = () => {
    };
  }
  disconnect(intentional = false) {
    this.intentionalClose = intentional;
    if (this.reconnectTimer !== null) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.setStatus("disconnected");
  }
  scheduleReconnect() {
    if (this.intentionalClose) return;
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.connect();
    }, this.reconnectDelay);
    this.reconnectDelay = Math.min(this.reconnectDelay * 2, 3e4);
  }
  // ── Inbound messages ─────────────────────────────────────────────────────────
  handleInbound(msg) {
    switch (msg.type) {
      case "auth_ok":
        this.clientId = msg.clientId;
        this.reconnectDelay = 1e3;
        this.setStatus("connected");
        new import_obsidian.Notice("HomeSync: Connected \u2713");
        void this.runInitialSync();
        break;
      case "auth_fail":
        new import_obsidian.Notice("HomeSync: Authentication failed \u2014 check your token.");
        this.disconnect(true);
        break;
      case "file_change":
        void this.applyRemoteChange(msg);
        break;
      case "initial_sync_response":
        void this.applyInitialSyncResponse(msg);
        break;
      case "pong":
        break;
      default:
        break;
    }
  }
  // ── Initial sync ──────────────────────────────────────────────────────────────
  /**
   * Called once after successful authentication.
   *
   * - If "Download on connect" is on: ask the server for its snapshot.
   *   The server replies with initial_sync_response and we apply any files
   *   that are missing or older than the server's copy.
   *
   * - If "Upload on connect" is on: read every file in the vault and send it
   *   to the server so other devices (and future server snapshots) are current.
   *   Files are processed in small batches to avoid freezing Obsidian.
   */
  async runInitialSync() {
    if (this.settings.downloadOnConnect) {
      new import_obsidian.Notice("HomeSync: Requesting initial snapshot from server\u2026");
      this.ws.send(JSON.stringify({ type: "initial_sync_request" }));
    }
    if (this.settings.uploadOnConnect) {
      await this.uploadVaultToServer();
    }
  }
  /**
   * Server replied with its full file snapshot.
   * We only write a file if the server's copy is NEWER than ours (or we don't
   * have it at all). This means no data is ever overwritten with older content.
   */
  async applyInitialSyncResponse(msg) {
    const files = msg.files ?? [];
    if (files.length === 0) {
      new import_obsidian.Notice("HomeSync: Server snapshot is empty \u2014 nothing to download.");
      return;
    }
    let applied = 0;
    let skipped = 0;
    for (const { path: rawPath, content, mtime } of files) {
      const filePath = (0, import_obsidian.normalizePath)(rawPath);
      const existing = this.app.vault.getAbstractFileByPath(filePath);
      if (existing instanceof import_obsidian.TFile) {
        if (mtime <= existing.stat.mtime) {
          skipped++;
          continue;
        }
      }
      try {
        const bytes = base64ToArrayBuffer(content);
        await this.withRemoteWrite(filePath, async () => {
          const current = this.app.vault.getAbstractFileByPath(filePath);
          if (current instanceof import_obsidian.TFile) {
            await this.app.vault.modifyBinary(current, bytes);
          } else {
            await this.ensureFolders(filePath);
            await this.app.vault.createBinary(filePath, bytes);
          }
        });
        applied++;
      } catch (err) {
        console.error(`[ObsidianSync] Initial sync failed for "${filePath}":`, err);
      }
    }
    new import_obsidian.Notice(
      `HomeSync: Initial download complete \u2014 ${applied} updated, ${skipped} already up to date.`
    );
  }
  /**
   * Walk the entire vault and send every file to the server in batches of 10.
   * The server runs each file through the normal last-write-wins check, so
   * only files newer than what the server already knows are stored.
   */
  async uploadVaultToServer() {
    if (!this.isConnected()) return;
    const allFiles = this.app.vault.getFiles();
    new import_obsidian.Notice(`HomeSync: Uploading vault (${allFiles.length} files)\u2026`);
    const BATCH_SIZE = 10;
    let uploaded = 0;
    for (let i = 0; i < allFiles.length; i += BATCH_SIZE) {
      const batch = allFiles.slice(i, i + BATCH_SIZE);
      const items = [];
      for (const file of batch) {
        try {
          const bytes = await this.app.vault.readBinary(file);
          const content = arrayBufferToBase64(bytes);
          items.push({ path: file.path, content, mtime: file.stat.mtime });
          uploaded++;
        } catch {
        }
      }
      if (items.length > 0 && this.isConnected()) {
        this.ws.send(JSON.stringify({ type: "initial_sync_data", files: items }));
      }
      await new Promise((resolve) => setTimeout(resolve, 20));
    }
    new import_obsidian.Notice(`HomeSync: Upload complete \u2014 ${uploaded} files sent to server.`);
  }
  // ── Apply remote changes ──────────────────────────────────────────────────────
  async applyRemoteChange(msg) {
    const { event, content, oldPath } = msg;
    const normalized = (0, import_obsidian.normalizePath)(msg.path);
    try {
      switch (event) {
        case "create":
        case "modify": {
          if (content === null) return;
          const bytes = base64ToArrayBuffer(content);
          await this.withRemoteWrite(normalized, async () => {
            const existing = this.app.vault.getAbstractFileByPath(normalized);
            if (existing instanceof import_obsidian.TFile) {
              await this.app.vault.modifyBinary(existing, bytes);
            } else {
              await this.ensureFolders(normalized);
              await this.app.vault.createBinary(normalized, bytes);
            }
          });
          break;
        }
        case "delete": {
          await this.withRemoteWrite(normalized, async () => {
            const file = this.app.vault.getAbstractFileByPath(normalized);
            if (file) await this.app.vault.trash(file, false);
          });
          break;
        }
        case "rename": {
          if (!oldPath) return;
          const normalizedOld = (0, import_obsidian.normalizePath)(oldPath);
          this.pendingRemoteWrites.add(normalizedOld);
          this.pendingRemoteWrites.add(normalized);
          try {
            const file = this.app.vault.getAbstractFileByPath(normalizedOld);
            if (file) {
              await this.ensureFolders(normalized);
              await this.app.vault.rename(file, normalized);
            }
          } finally {
            setTimeout(() => {
              this.pendingRemoteWrites.delete(normalizedOld);
              this.pendingRemoteWrites.delete(normalized);
            }, 300);
          }
          break;
        }
      }
    } catch (err) {
      console.error("[ObsidianSync] Failed to apply remote change:", err);
    }
  }
  /**
   * Marks `filePath` as pending, runs `fn`, then clears the mark after 300 ms.
   * The 300 ms grace period ensures the vault event triggered by the write
   * has already fired before the path is removed from the set.
   */
  async withRemoteWrite(filePath, fn) {
    this.pendingRemoteWrites.add(filePath);
    try {
      await fn();
    } finally {
      setTimeout(() => this.pendingRemoteWrites.delete(filePath), 300);
    }
  }
  async ensureFolders(filePath) {
    const parts = filePath.split("/");
    parts.pop();
    let current = "";
    for (const part of parts) {
      current = current ? `${current}/${part}` : part;
      if (!this.app.vault.getAbstractFileByPath(current)) {
        await this.app.vault.createFolder(current).catch(() => {
        });
      }
    }
  }
  // ── Vault events → outbound sends ────────────────────────────────────────────
  registerVaultEvents() {
    this.registerEvent(
      this.app.vault.on("create", (file) => {
        if (file instanceof import_obsidian.TFile && !this.pendingRemoteWrites.has(file.path)) {
          void this.sendChange("create", file);
        }
      })
    );
    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        if (file instanceof import_obsidian.TFile && !this.pendingRemoteWrites.has(file.path)) {
          void this.sendChange("modify", file);
        }
      })
    );
    this.registerEvent(
      this.app.vault.on("delete", (file) => {
        if (file instanceof import_obsidian.TFile && !this.pendingRemoteWrites.has(file.path)) {
          this.sendChangeDelete(file.path, file.stat?.mtime ?? Date.now());
        }
      })
    );
    this.registerEvent(
      this.app.vault.on("rename", (file, oldPath) => {
        if (file instanceof import_obsidian.TFile && !this.pendingRemoteWrites.has(file.path) && !this.pendingRemoteWrites.has(oldPath)) {
          void this.sendChangeRename(file, oldPath);
        }
      })
    );
  }
  // ── Outbound helpers ──────────────────────────────────────────────────────────
  async sendChange(event, file) {
    if (!this.isConnected()) return;
    try {
      const bytes = await this.app.vault.readBinary(file);
      const content = arrayBufferToBase64(bytes);
      const msg = {
        type: "file_change",
        event,
        path: file.path,
        content,
        mtime: file.stat.mtime
      };
      this.ws.send(JSON.stringify(msg));
    } catch (err) {
      console.error("[ObsidianSync] Failed to send change:", err);
    }
  }
  sendChangeDelete(filePath, mtime) {
    if (!this.isConnected()) return;
    const msg = {
      type: "file_change",
      event: "delete",
      path: filePath,
      content: null,
      mtime
    };
    this.ws.send(JSON.stringify(msg));
  }
  async sendChangeRename(file, oldPath) {
    if (!this.isConnected()) return;
    try {
      const bytes = await this.app.vault.readBinary(file);
      const content = arrayBufferToBase64(bytes);
      const msg = {
        type: "file_change",
        event: "rename",
        path: file.path,
        oldPath,
        content,
        mtime: file.stat.mtime
      };
      this.ws.send(JSON.stringify(msg));
    } catch (err) {
      console.error("[ObsidianSync] Failed to send rename:", err);
    }
  }
  isConnected() {
    return this.ws !== null && this.ws.readyState === WebSocket.OPEN && this.clientId !== null;
  }
  // ── Status bar ────────────────────────────────────────────────────────────────
  setStatus(state) {
    const labels = {
      connected: "\u27F3 Sync: Connected",
      disconnected: "\u2717 Sync: Disconnected",
      connecting: "\u2026 Sync: Connecting"
    };
    this.statusBar.setText(labels[state]);
    this.statusBar.setAttribute("aria-label", labels[state]);
  }
};
var SyncSettingTab = class extends import_obsidian.PluginSettingTab {
  plugin;
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "HomeSync" });
    containerEl.createEl("p", {
      text: "Made by Luma",
      cls: "setting-item-description"
    });
    new import_obsidian.Setting(containerEl).setName("Server URL").setDesc("IP and port of your home server \u2014 e.g. 192.168.1.10:8080 (ws:// is added automatically)").addText(
      (text) => text.setPlaceholder("192.168.1.x:8080").setValue(this.plugin.settings.serverUrl).onChange(async (value) => {
        this.plugin.settings.serverUrl = value.trim();
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Auth Token").setDesc("Must match authToken in server/config.json").addText((text) => {
      text.setPlaceholder("your-secret-token").setValue(this.plugin.settings.authToken).onChange(async (value) => {
        this.plugin.settings.authToken = value.trim();
        await this.plugin.saveSettings();
      });
      text.inputEl.type = "password";
    });
    new import_obsidian.Setting(containerEl).setName("Device ID").setDesc("Auto-generated unique ID for this device (read-only)").addText(
      (text) => text.setValue(this.plugin.settings.deviceId).setDisabled(true)
    );
    new import_obsidian.Setting(containerEl).setName("Enable Sync").setDesc("Toggle real-time syncing on or off").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.enabled).onChange(async (value) => {
        this.plugin.settings.enabled = value;
        await this.plugin.saveSettings();
        if (value) {
          this.plugin.disconnect();
          this.plugin.connect();
        } else {
          this.plugin.disconnect(true);
        }
      })
    );
    containerEl.createEl("h3", { text: "Initial Sync" });
    containerEl.createEl("p", {
      text: "Use these options the first time you set up a new device, or after the server has been wiped. Turn them off again after the first successful connection.",
      cls: "setting-item-description"
    });
    new import_obsidian.Setting(containerEl).setName("Download server snapshot on connect").setDesc(
      "When you connect, download every file the server knows about. Files are only written if the server copy is newer than your local copy."
    ).addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.downloadOnConnect).onChange(async (value) => {
        this.plugin.settings.downloadOnConnect = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Upload this vault to server on connect").setDesc(
      "When you connect, send every file in your vault to the server. Enable this on the device that has the most up-to-date copy of your notes."
    ).addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.uploadOnConnect).onChange(async (value) => {
        this.plugin.settings.uploadOnConnect = value;
        await this.plugin.saveSettings();
      })
    );
  }
};
function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
function base64ToArrayBuffer(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7XG4gIEFwcCxcbiAgTm90aWNlLFxuICBQbHVnaW4sXG4gIFBsdWdpblNldHRpbmdUYWIsXG4gIFNldHRpbmcsXG4gIFRBYnN0cmFjdEZpbGUsXG4gIFRGaWxlLFxuICBub3JtYWxpemVQYXRoLFxufSBmcm9tICdvYnNpZGlhbic7XG5cbi8vIFx1MjUwMFx1MjUwMCBUeXBlcyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuaW50ZXJmYWNlIFN5bmNTZXR0aW5ncyB7XG4gIHNlcnZlclVybDogc3RyaW5nO1xuICBhdXRoVG9rZW46IHN0cmluZztcbiAgZGV2aWNlSWQ6IHN0cmluZztcbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgLyoqIFVwbG9hZCB0aGlzIGRldmljZSdzIHZhdWx0IHRvIHRoZSBzZXJ2ZXIgd2hlbiBmaXJzdCBjb25uZWN0aW5nLiAqL1xuICB1cGxvYWRPbkNvbm5lY3Q6IGJvb2xlYW47XG4gIC8qKiBEb3dubG9hZCB0aGUgc2VydmVyJ3Mgc25hcHNob3QgYW5kIGFwcGx5IG1pc3Npbmcvb2xkZXIgZmlsZXMgb24gY29ubmVjdC4gKi9cbiAgZG93bmxvYWRPbkNvbm5lY3Q6IGJvb2xlYW47XG59XG5cbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IFN5bmNTZXR0aW5ncyA9IHtcbiAgc2VydmVyVXJsOiAnMTkyLjE2OC4xLng6ODA4MCcsXG4gIGF1dGhUb2tlbjogJycsXG4gIGRldmljZUlkOiAnJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgdXBsb2FkT25Db25uZWN0OiBmYWxzZSxcbiAgZG93bmxvYWRPbkNvbm5lY3Q6IHRydWUsXG59O1xuXG50eXBlIFN5bmNFdmVudCA9ICdjcmVhdGUnIHwgJ21vZGlmeScgfCAnZGVsZXRlJyB8ICdyZW5hbWUnO1xuXG5pbnRlcmZhY2UgRmlsZUNoYW5nZU1lc3NhZ2Uge1xuICB0eXBlOiAnZmlsZV9jaGFuZ2UnO1xuICBldmVudDogU3luY0V2ZW50O1xuICBwYXRoOiBzdHJpbmc7XG4gIG9sZFBhdGg/OiBzdHJpbmc7XG4gIC8qKiBCYXNlNjQtZW5jb2RlZCBmaWxlIGNvbnRlbnQsIG9yIG51bGwgZm9yIGRlbGV0ZSBldmVudHMuICovXG4gIGNvbnRlbnQ6IHN0cmluZyB8IG51bGw7XG4gIG10aW1lOiBudW1iZXI7XG4gIGZyb21DbGllbnRJZD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEF1dGhPa01lc3NhZ2Uge1xuICB0eXBlOiAnYXV0aF9vayc7XG4gIGNsaWVudElkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJbml0aWFsU3luY1Jlc3BvbnNlTWVzc2FnZSB7XG4gIHR5cGU6ICdpbml0aWFsX3N5bmNfcmVzcG9uc2UnO1xuICBmaWxlczogQXJyYXk8eyBwYXRoOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZzsgbXRpbWU6IG51bWJlciB9Pjtcbn1cblxuaW50ZXJmYWNlIEluYm91bmRNZXNzYWdlIHtcbiAgdHlwZTogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgUGx1Z2luIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnNpZGlhblN5bmNQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzZXR0aW5ncyE6IFN5bmNTZXR0aW5ncztcblxuICBwcml2YXRlIHdzOiBXZWJTb2NrZXQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBjbGllbnRJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgcmVjb25uZWN0VGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgcmVjb25uZWN0RGVsYXkgPSAxMDAwO1xuICBwcml2YXRlIGludGVudGlvbmFsQ2xvc2UgPSBmYWxzZTtcblxuICAvKipcbiAgICogUGF0aHMgY3VycmVudGx5IGJlaW5nIHdyaXR0ZW4gYnkgYSByZW1vdGUgY2hhbmdlLlxuICAgKiBWYXVsdCBldmVudCBoYW5kbGVycyBjaGVjayB0aGlzIHNldCBhbmQgc2tpcCBzZW5kaW5nIHRob3NlIHBhdGhzIGJhY2sgdG9cbiAgICogYXZvaWQgYW4gZWNobyBsb29wLlxuICAgKi9cbiAgcHJpdmF0ZSBwZW5kaW5nUmVtb3RlV3JpdGVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgcHJpdmF0ZSBzdGF0dXNCYXIhOiBIVE1MRWxlbWVudDtcblxuICAvLyBcdTI1MDBcdTI1MDAgTGlmZWN5Y2xlIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xuXG4gICAgLy8gR2VuZXJhdGUgYSBzdGFibGUgZGV2aWNlIElEIG9uIGZpcnN0IGxvYWRcbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZGV2aWNlSWQpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MuZGV2aWNlSWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXR1c0JhciA9IHRoaXMuYWRkU3RhdHVzQmFySXRlbSgpO1xuICAgIHRoaXMuc2V0U3RhdHVzKCdkaXNjb25uZWN0ZWQnKTtcblxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgU3luY1NldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcbiAgICB0aGlzLnJlZ2lzdGVyVmF1bHRFdmVudHMoKTtcblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3JlY29ubmVjdCcsXG4gICAgICBuYW1lOiAnUmVjb25uZWN0IHRvIHN5bmMgc2VydmVyJyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVjb25uZWN0RGVsYXkgPSAxMDAwO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgb251bmxvYWQoKSB7XG4gICAgdGhpcy5kaXNjb25uZWN0KHRydWUpO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIFNldHRpbmdzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpKTtcbiAgfVxuXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIFdlYlNvY2tldCBjb25uZWN0aW9uIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIGNvbm5lY3QoKSB7XG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLnNlcnZlclVybCB8fCAhdGhpcy5zZXR0aW5ncy5hdXRoVG9rZW4pIHtcbiAgICAgIG5ldyBOb3RpY2UoJ0hvbWVTeW5jOiBDb25maWd1cmUgc2VydmVyIFVSTCBhbmQgdG9rZW4gaW4gc2V0dGluZ3MuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW50ZW50aW9uYWxDbG9zZSA9IGZhbHNlO1xuICAgIHRoaXMuc2V0U3RhdHVzKCdjb25uZWN0aW5nJyk7XG5cbiAgICAvLyBBdXRvLXByZXBlbmQgd3M6Ly8gaWYgdXNlciBvbWl0dGVkIHRoZSBzY2hlbWVcbiAgICBsZXQgdXJsID0gdGhpcy5zZXR0aW5ncy5zZXJ2ZXJVcmwudHJpbSgpO1xuICAgIGlmICghL153c3M/OlxcL1xcLy9pLnRlc3QodXJsKSkgdXJsID0gJ3dzOi8vJyArIHVybDtcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLndzID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgdGhpcy5zZXRTdGF0dXMoJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgdGhpcy5zY2hlZHVsZVJlY29ubmVjdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMud3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgdGhpcy53cyEuc2VuZChcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHR5cGU6ICAgICAnYXV0aCcsXG4gICAgICAgICAgdG9rZW46ICAgIHRoaXMuc2V0dGluZ3MuYXV0aFRva2VuLFxuICAgICAgICAgIGRldmljZUlkOiB0aGlzLnNldHRpbmdzLmRldmljZUlkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgdGhpcy53cy5vbm1lc3NhZ2UgPSAoZXY6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbXNnOiBJbmJvdW5kTWVzc2FnZSA9IEpTT04ucGFyc2UoZXYuZGF0YSBhcyBzdHJpbmcpO1xuICAgICAgICB0aGlzLmhhbmRsZUluYm91bmQobXNnKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBJZ25vcmUgbWFsZm9ybWVkIG1lc3NhZ2VzXG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMud3Mub25jbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2xpZW50SWQgPSBudWxsO1xuICAgICAgdGhpcy5zZXRTdGF0dXMoJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgaWYgKCF0aGlzLmludGVudGlvbmFsQ2xvc2UpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVJlY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLndzLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAvLyBvbmNsb3NlIGZpcmVzIGltbWVkaWF0ZWx5IGFmdGVyOyByZWNvbm5lY3QgaXMgaGFuZGxlZCB0aGVyZVxuICAgIH07XG4gIH1cblxuICBkaXNjb25uZWN0KGludGVudGlvbmFsID0gZmFsc2UpIHtcbiAgICB0aGlzLmludGVudGlvbmFsQ2xvc2UgPSBpbnRlbnRpb25hbDtcbiAgICBpZiAodGhpcy5yZWNvbm5lY3RUaW1lciAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVjb25uZWN0VGltZXIpO1xuICAgICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLndzKSB7XG4gICAgICB0aGlzLndzLmNsb3NlKCk7XG4gICAgICB0aGlzLndzID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0dXMoJ2Rpc2Nvbm5lY3RlZCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBzY2hlZHVsZVJlY29ubmVjdCgpIHtcbiAgICBpZiAodGhpcy5pbnRlbnRpb25hbENsb3NlKSByZXR1cm47XG4gICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IG51bGw7XG4gICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9LCB0aGlzLnJlY29ubmVjdERlbGF5KTtcbiAgICAvLyBFeHBvbmVudGlhbCBiYWNrb2ZmOiAxIHMgXHUyMTkyIDIgcyBcdTIxOTIgNCBzIFx1MjAyNiBjYXBwZWQgYXQgMzAgc1xuICAgIHRoaXMucmVjb25uZWN0RGVsYXkgPSBNYXRoLm1pbih0aGlzLnJlY29ubmVjdERlbGF5ICogMiwgMzBfMDAwKTtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBJbmJvdW5kIG1lc3NhZ2VzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIHByaXZhdGUgaGFuZGxlSW5ib3VuZChtc2c6IEluYm91bmRNZXNzYWdlKSB7XG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgY2FzZSAnYXV0aF9vayc6XG4gICAgICAgIHRoaXMuY2xpZW50SWQgICAgICAgPSAobXNnIGFzIHVua25vd24gYXMgQXV0aE9rTWVzc2FnZSkuY2xpZW50SWQ7XG4gICAgICAgIHRoaXMucmVjb25uZWN0RGVsYXkgPSAxMDAwOyAvLyByZXNldCBiYWNrb2ZmIG9uIHN1Y2Nlc3NmdWwgYXV0aFxuICAgICAgICB0aGlzLnNldFN0YXR1cygnY29ubmVjdGVkJyk7XG4gICAgICAgIG5ldyBOb3RpY2UoJ0hvbWVTeW5jOiBDb25uZWN0ZWQgXHUyNzEzJyk7XG4gICAgICAgIHZvaWQgdGhpcy5ydW5Jbml0aWFsU3luYygpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnYXV0aF9mYWlsJzpcbiAgICAgICAgbmV3IE5vdGljZSgnSG9tZVN5bmM6IEF1dGhlbnRpY2F0aW9uIGZhaWxlZCBcdTIwMTQgY2hlY2sgeW91ciB0b2tlbi4nKTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KHRydWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZmlsZV9jaGFuZ2UnOlxuICAgICAgICB2b2lkIHRoaXMuYXBwbHlSZW1vdGVDaGFuZ2UobXNnIGFzIHVua25vd24gYXMgRmlsZUNoYW5nZU1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaW5pdGlhbF9zeW5jX3Jlc3BvbnNlJzpcbiAgICAgICAgdm9pZCB0aGlzLmFwcGx5SW5pdGlhbFN5bmNSZXNwb25zZShtc2cgYXMgdW5rbm93biBhcyBJbml0aWFsU3luY1Jlc3BvbnNlTWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb25nJzpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBJbml0aWFsIHN5bmMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbmNlIGFmdGVyIHN1Y2Nlc3NmdWwgYXV0aGVudGljYXRpb24uXG4gICAqXG4gICAqIC0gSWYgXCJEb3dubG9hZCBvbiBjb25uZWN0XCIgaXMgb246IGFzayB0aGUgc2VydmVyIGZvciBpdHMgc25hcHNob3QuXG4gICAqICAgVGhlIHNlcnZlciByZXBsaWVzIHdpdGggaW5pdGlhbF9zeW5jX3Jlc3BvbnNlIGFuZCB3ZSBhcHBseSBhbnkgZmlsZXNcbiAgICogICB0aGF0IGFyZSBtaXNzaW5nIG9yIG9sZGVyIHRoYW4gdGhlIHNlcnZlcidzIGNvcHkuXG4gICAqXG4gICAqIC0gSWYgXCJVcGxvYWQgb24gY29ubmVjdFwiIGlzIG9uOiByZWFkIGV2ZXJ5IGZpbGUgaW4gdGhlIHZhdWx0IGFuZCBzZW5kIGl0XG4gICAqICAgdG8gdGhlIHNlcnZlciBzbyBvdGhlciBkZXZpY2VzIChhbmQgZnV0dXJlIHNlcnZlciBzbmFwc2hvdHMpIGFyZSBjdXJyZW50LlxuICAgKiAgIEZpbGVzIGFyZSBwcm9jZXNzZWQgaW4gc21hbGwgYmF0Y2hlcyB0byBhdm9pZCBmcmVlemluZyBPYnNpZGlhbi5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgcnVuSW5pdGlhbFN5bmMoKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZG93bmxvYWRPbkNvbm5lY3QpIHtcbiAgICAgIG5ldyBOb3RpY2UoJ0hvbWVTeW5jOiBSZXF1ZXN0aW5nIGluaXRpYWwgc25hcHNob3QgZnJvbSBzZXJ2ZXJcdTIwMjYnKTtcbiAgICAgIHRoaXMud3MhLnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnaW5pdGlhbF9zeW5jX3JlcXVlc3QnIH0pKTtcbiAgICAgIC8vIFJlc3BvbnNlIGlzIGhhbmRsZWQgYnkgYXBwbHlJbml0aWFsU3luY1Jlc3BvbnNlIGJlbG93XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MudXBsb2FkT25Db25uZWN0KSB7XG4gICAgICBhd2FpdCB0aGlzLnVwbG9hZFZhdWx0VG9TZXJ2ZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VydmVyIHJlcGxpZWQgd2l0aCBpdHMgZnVsbCBmaWxlIHNuYXBzaG90LlxuICAgKiBXZSBvbmx5IHdyaXRlIGEgZmlsZSBpZiB0aGUgc2VydmVyJ3MgY29weSBpcyBORVdFUiB0aGFuIG91cnMgKG9yIHdlIGRvbid0XG4gICAqIGhhdmUgaXQgYXQgYWxsKS4gVGhpcyBtZWFucyBubyBkYXRhIGlzIGV2ZXIgb3ZlcndyaXR0ZW4gd2l0aCBvbGRlciBjb250ZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBhcHBseUluaXRpYWxTeW5jUmVzcG9uc2UobXNnOiBJbml0aWFsU3luY1Jlc3BvbnNlTWVzc2FnZSkge1xuICAgIGNvbnN0IGZpbGVzID0gbXNnLmZpbGVzID8/IFtdO1xuICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIG5ldyBOb3RpY2UoJ0hvbWVTeW5jOiBTZXJ2ZXIgc25hcHNob3QgaXMgZW1wdHkgXHUyMDE0IG5vdGhpbmcgdG8gZG93bmxvYWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGFwcGxpZWQgPSAwO1xuICAgIGxldCBza2lwcGVkID0gMDtcblxuICAgIGZvciAoY29uc3QgeyBwYXRoOiByYXdQYXRoLCBjb250ZW50LCBtdGltZSB9IG9mIGZpbGVzKSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IG5vcm1hbGl6ZVBhdGgocmF3UGF0aCk7XG4gICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmaWxlUGF0aCk7XG5cbiAgICAgIGlmIChleGlzdGluZyBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgIC8vIE9ubHkgb3ZlcndyaXRlIGlmIHNlcnZlciBjb3B5IGlzIHN0cmljdGx5IG5ld2VyXG4gICAgICAgIGlmIChtdGltZSA8PSBleGlzdGluZy5zdGF0Lm10aW1lKSB7XG4gICAgICAgICAgc2tpcHBlZCsrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gYmFzZTY0VG9BcnJheUJ1ZmZlcihjb250ZW50KTtcbiAgICAgICAgYXdhaXQgdGhpcy53aXRoUmVtb3RlV3JpdGUoZmlsZVBhdGgsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZpbGVQYXRoKTtcbiAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnlCaW5hcnkoY3VycmVudCwgYnl0ZXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmVuc3VyZUZvbGRlcnMoZmlsZVBhdGgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlQmluYXJ5KGZpbGVQYXRoLCBieXRlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYXBwbGllZCsrO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtPYnNpZGlhblN5bmNdIEluaXRpYWwgc3luYyBmYWlsZWQgZm9yIFwiJHtmaWxlUGF0aH1cIjpgLCBlcnIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ldyBOb3RpY2UoXG4gICAgICBgSG9tZVN5bmM6IEluaXRpYWwgZG93bmxvYWQgY29tcGxldGUgXHUyMDE0ICR7YXBwbGllZH0gdXBkYXRlZCwgJHtza2lwcGVkfSBhbHJlYWR5IHVwIHRvIGRhdGUuYFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogV2FsayB0aGUgZW50aXJlIHZhdWx0IGFuZCBzZW5kIGV2ZXJ5IGZpbGUgdG8gdGhlIHNlcnZlciBpbiBiYXRjaGVzIG9mIDEwLlxuICAgKiBUaGUgc2VydmVyIHJ1bnMgZWFjaCBmaWxlIHRocm91Z2ggdGhlIG5vcm1hbCBsYXN0LXdyaXRlLXdpbnMgY2hlY2ssIHNvXG4gICAqIG9ubHkgZmlsZXMgbmV3ZXIgdGhhbiB3aGF0IHRoZSBzZXJ2ZXIgYWxyZWFkeSBrbm93cyBhcmUgc3RvcmVkLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyB1cGxvYWRWYXVsdFRvU2VydmVyKCkge1xuICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCgpKSByZXR1cm47XG4gICAgY29uc3QgYWxsRmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRGaWxlcygpO1xuICAgIG5ldyBOb3RpY2UoYEhvbWVTeW5jOiBVcGxvYWRpbmcgdmF1bHQgKCR7YWxsRmlsZXMubGVuZ3RofSBmaWxlcylcdTIwMjZgKTtcblxuICAgIGNvbnN0IEJBVENIX1NJWkUgPSAxMDtcbiAgICBsZXQgdXBsb2FkZWQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxGaWxlcy5sZW5ndGg7IGkgKz0gQkFUQ0hfU0laRSkge1xuICAgICAgY29uc3QgYmF0Y2ggPSBhbGxGaWxlcy5zbGljZShpLCBpICsgQkFUQ0hfU0laRSk7XG4gICAgICBjb25zdCBpdGVtczogQXJyYXk8eyBwYXRoOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZzsgbXRpbWU6IG51bWJlciB9PiA9IFtdO1xuXG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgYmF0Y2gpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBieXRlcyAgID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZEJpbmFyeShmaWxlKTtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXJyYXlCdWZmZXJUb0Jhc2U2NChieXRlcyk7XG4gICAgICAgICAgaXRlbXMucHVzaCh7IHBhdGg6IGZpbGUucGF0aCwgY29udGVudCwgbXRpbWU6IGZpbGUuc3RhdC5tdGltZSB9KTtcbiAgICAgICAgICB1cGxvYWRlZCsrO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyBTa2lwIHVucmVhZGFibGUgZmlsZXNcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCAmJiB0aGlzLmlzQ29ubmVjdGVkKCkpIHtcbiAgICAgICAgdGhpcy53cyEuc2VuZChKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdpbml0aWFsX3N5bmNfZGF0YScsIGZpbGVzOiBpdGVtcyB9KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFlpZWxkIHRvIHRoZSBVSSB0aHJlYWQgYmV0d2VlbiBiYXRjaGVzXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMCkpO1xuICAgIH1cblxuICAgIG5ldyBOb3RpY2UoYEhvbWVTeW5jOiBVcGxvYWQgY29tcGxldGUgXHUyMDE0ICR7dXBsb2FkZWR9IGZpbGVzIHNlbnQgdG8gc2VydmVyLmApO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIEFwcGx5IHJlbW90ZSBjaGFuZ2VzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIHByaXZhdGUgYXN5bmMgYXBwbHlSZW1vdGVDaGFuZ2UobXNnOiBGaWxlQ2hhbmdlTWVzc2FnZSkge1xuICAgIGNvbnN0IHsgZXZlbnQsIGNvbnRlbnQsIG9sZFBhdGggfSA9IG1zZztcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplUGF0aChtc2cucGF0aCk7XG5cbiAgICB0cnkge1xuICAgICAgc3dpdGNoIChldmVudCkge1xuICAgICAgICBjYXNlICdjcmVhdGUnOlxuICAgICAgICBjYXNlICdtb2RpZnknOiB7XG4gICAgICAgICAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgICBjb25zdCBieXRlcyA9IGJhc2U2NFRvQXJyYXlCdWZmZXIoY29udGVudCk7XG4gICAgICAgICAgYXdhaXQgdGhpcy53aXRoUmVtb3RlV3JpdGUobm9ybWFsaXplZCwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgobm9ybWFsaXplZCk7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmcgaW5zdGFuY2VvZiBURmlsZSkge1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnlCaW5hcnkoZXhpc3RpbmcsIGJ5dGVzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuZW5zdXJlRm9sZGVycyhub3JtYWxpemVkKTtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlQmluYXJ5KG5vcm1hbGl6ZWQsIGJ5dGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2RlbGV0ZSc6IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLndpdGhSZW1vdGVXcml0ZShub3JtYWxpemVkLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKG5vcm1hbGl6ZWQpO1xuICAgICAgICAgICAgaWYgKGZpbGUpIGF3YWl0IHRoaXMuYXBwLnZhdWx0LnRyYXNoKGZpbGUsIGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3JlbmFtZSc6IHtcbiAgICAgICAgICBpZiAoIW9sZFBhdGgpIHJldHVybjtcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVkT2xkID0gbm9ybWFsaXplUGF0aChvbGRQYXRoKTtcbiAgICAgICAgICAvLyBNYXJrIGJvdGggcGF0aHMgc28gbmVpdGhlciB0cmlnZ2VycyBhbiBvdXRib3VuZCBzZW5kXG4gICAgICAgICAgdGhpcy5wZW5kaW5nUmVtb3RlV3JpdGVzLmFkZChub3JtYWxpemVkT2xkKTtcbiAgICAgICAgICB0aGlzLnBlbmRpbmdSZW1vdGVXcml0ZXMuYWRkKG5vcm1hbGl6ZWQpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKG5vcm1hbGl6ZWRPbGQpO1xuICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5lbnN1cmVGb2xkZXJzKG5vcm1hbGl6ZWQpO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZW5hbWUoZmlsZSwgbm9ybWFsaXplZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdSZW1vdGVXcml0ZXMuZGVsZXRlKG5vcm1hbGl6ZWRPbGQpO1xuICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdSZW1vdGVXcml0ZXMuZGVsZXRlKG5vcm1hbGl6ZWQpO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tPYnNpZGlhblN5bmNdIEZhaWxlZCB0byBhcHBseSByZW1vdGUgY2hhbmdlOicsIGVycik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1hcmtzIGBmaWxlUGF0aGAgYXMgcGVuZGluZywgcnVucyBgZm5gLCB0aGVuIGNsZWFycyB0aGUgbWFyayBhZnRlciAzMDAgbXMuXG4gICAqIFRoZSAzMDAgbXMgZ3JhY2UgcGVyaW9kIGVuc3VyZXMgdGhlIHZhdWx0IGV2ZW50IHRyaWdnZXJlZCBieSB0aGUgd3JpdGVcbiAgICogaGFzIGFscmVhZHkgZmlyZWQgYmVmb3JlIHRoZSBwYXRoIGlzIHJlbW92ZWQgZnJvbSB0aGUgc2V0LlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyB3aXRoUmVtb3RlV3JpdGUoZmlsZVBhdGg6IHN0cmluZywgZm46ICgpID0+IFByb21pc2U8dm9pZD4pIHtcbiAgICB0aGlzLnBlbmRpbmdSZW1vdGVXcml0ZXMuYWRkKGZpbGVQYXRoKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZm4oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnBlbmRpbmdSZW1vdGVXcml0ZXMuZGVsZXRlKGZpbGVQYXRoKSwgMzAwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGVuc3VyZUZvbGRlcnMoZmlsZVBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IHBhcnRzID0gZmlsZVBhdGguc3BsaXQoJy8nKTtcbiAgICBwYXJ0cy5wb3AoKTsgLy8gZHJvcCBmaWxlbmFtZVxuICAgIGxldCBjdXJyZW50ID0gJyc7XG4gICAgZm9yIChjb25zdCBwYXJ0IG9mIHBhcnRzKSB7XG4gICAgICBjdXJyZW50ID0gY3VycmVudCA/IGAke2N1cnJlbnR9LyR7cGFydH1gIDogcGFydDtcbiAgICAgIGlmICghdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGN1cnJlbnQpKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihjdXJyZW50KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgLy8gRm9sZGVyIG1heSBoYXZlIGJlZW4gY3JlYXRlZCBieSBhIGNvbmN1cnJlbnQgb3BlcmF0aW9uIFx1MjAxNCBzYWZlIHRvIGlnbm9yZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDAgVmF1bHQgZXZlbnRzIFx1MjE5MiBvdXRib3VuZCBzZW5kcyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICBwcml2YXRlIHJlZ2lzdGVyVmF1bHRFdmVudHMoKSB7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAudmF1bHQub24oJ2NyZWF0ZScsIChmaWxlOiBUQWJzdHJhY3RGaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgIXRoaXMucGVuZGluZ1JlbW90ZVdyaXRlcy5oYXMoZmlsZS5wYXRoKSkge1xuICAgICAgICAgIHZvaWQgdGhpcy5zZW5kQ2hhbmdlKCdjcmVhdGUnLCBmaWxlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAudmF1bHQub24oJ21vZGlmeScsIChmaWxlOiBUQWJzdHJhY3RGaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgIXRoaXMucGVuZGluZ1JlbW90ZVdyaXRlcy5oYXMoZmlsZS5wYXRoKSkge1xuICAgICAgICAgIHZvaWQgdGhpcy5zZW5kQ2hhbmdlKCdtb2RpZnknLCBmaWxlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAudmF1bHQub24oJ2RlbGV0ZScsIChmaWxlOiBUQWJzdHJhY3RGaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgIXRoaXMucGVuZGluZ1JlbW90ZVdyaXRlcy5oYXMoZmlsZS5wYXRoKSkge1xuICAgICAgICAgIHRoaXMuc2VuZENoYW5nZURlbGV0ZShmaWxlLnBhdGgsIGZpbGUuc3RhdD8ubXRpbWUgPz8gRGF0ZS5ub3coKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKCdyZW5hbWUnLCAoZmlsZTogVEFic3RyYWN0RmlsZSwgb2xkUGF0aDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiZcbiAgICAgICAgICAhdGhpcy5wZW5kaW5nUmVtb3RlV3JpdGVzLmhhcyhmaWxlLnBhdGgpICYmXG4gICAgICAgICAgIXRoaXMucGVuZGluZ1JlbW90ZVdyaXRlcy5oYXMob2xkUGF0aClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdm9pZCB0aGlzLnNlbmRDaGFuZ2VSZW5hbWUoZmlsZSwgb2xkUGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBPdXRib3VuZCBoZWxwZXJzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIHByaXZhdGUgYXN5bmMgc2VuZENoYW5nZShldmVudDogJ2NyZWF0ZScgfCAnbW9kaWZ5JywgZmlsZTogVEZpbGUpIHtcbiAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQoKSkgcmV0dXJuO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBieXRlcyAgID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZEJpbmFyeShmaWxlKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhcnJheUJ1ZmZlclRvQmFzZTY0KGJ5dGVzKTtcbiAgICAgIGNvbnN0IG1zZzogRmlsZUNoYW5nZU1lc3NhZ2UgPSB7XG4gICAgICAgIHR5cGU6ICdmaWxlX2NoYW5nZScsXG4gICAgICAgIGV2ZW50LFxuICAgICAgICBwYXRoOiAgICBmaWxlLnBhdGgsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIG10aW1lOiAgIGZpbGUuc3RhdC5tdGltZSxcbiAgICAgIH07XG4gICAgICB0aGlzLndzIS5zZW5kKEpTT04uc3RyaW5naWZ5KG1zZykpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignW09ic2lkaWFuU3luY10gRmFpbGVkIHRvIHNlbmQgY2hhbmdlOicsIGVycik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZW5kQ2hhbmdlRGVsZXRlKGZpbGVQYXRoOiBzdHJpbmcsIG10aW1lOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IG1zZzogRmlsZUNoYW5nZU1lc3NhZ2UgPSB7XG4gICAgICB0eXBlOiAgICAnZmlsZV9jaGFuZ2UnLFxuICAgICAgZXZlbnQ6ICAgJ2RlbGV0ZScsXG4gICAgICBwYXRoOiAgICBmaWxlUGF0aCxcbiAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICBtdGltZSxcbiAgICB9O1xuICAgIHRoaXMud3MhLnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnKSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNlbmRDaGFuZ2VSZW5hbWUoZmlsZTogVEZpbGUsIG9sZFBhdGg6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCgpKSByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGJ5dGVzICAgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkQmluYXJ5KGZpbGUpO1xuICAgICAgY29uc3QgY29udGVudCA9IGFycmF5QnVmZmVyVG9CYXNlNjQoYnl0ZXMpO1xuICAgICAgY29uc3QgbXNnOiBGaWxlQ2hhbmdlTWVzc2FnZSA9IHtcbiAgICAgICAgdHlwZTogICAgJ2ZpbGVfY2hhbmdlJyxcbiAgICAgICAgZXZlbnQ6ICAgJ3JlbmFtZScsXG4gICAgICAgIHBhdGg6ICAgIGZpbGUucGF0aCxcbiAgICAgICAgb2xkUGF0aCxcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgbXRpbWU6ICAgZmlsZS5zdGF0Lm10aW1lLFxuICAgICAgfTtcbiAgICAgIHRoaXMud3MhLnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbT2JzaWRpYW5TeW5jXSBGYWlsZWQgdG8gc2VuZCByZW5hbWU6JywgZXJyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzQ29ubmVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLndzICE9PSBudWxsICYmXG4gICAgICB0aGlzLndzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOICYmXG4gICAgICB0aGlzLmNsaWVudElkICE9PSBudWxsXG4gICAgKTtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBTdGF0dXMgYmFyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIHByaXZhdGUgc2V0U3RhdHVzKHN0YXRlOiAnY29ubmVjdGVkJyB8ICdkaXNjb25uZWN0ZWQnIHwgJ2Nvbm5lY3RpbmcnKSB7XG4gICAgY29uc3QgbGFiZWxzOiBSZWNvcmQ8dHlwZW9mIHN0YXRlLCBzdHJpbmc+ID0ge1xuICAgICAgY29ubmVjdGVkOiAgICAnXHUyN0YzIFN5bmM6IENvbm5lY3RlZCcsXG4gICAgICBkaXNjb25uZWN0ZWQ6ICdcdTI3MTcgU3luYzogRGlzY29ubmVjdGVkJyxcbiAgICAgIGNvbm5lY3Rpbmc6ICAgJ1x1MjAyNiBTeW5jOiBDb25uZWN0aW5nJyxcbiAgICB9O1xuICAgIHRoaXMuc3RhdHVzQmFyLnNldFRleHQobGFiZWxzW3N0YXRlXSk7XG4gICAgdGhpcy5zdGF0dXNCYXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWxzW3N0YXRlXSk7XG4gIH1cbn1cblxuLy8gXHUyNTAwXHUyNTAwIFNldHRpbmdzIFRhYiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuY2xhc3MgU3luY1NldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcGx1Z2luOiBPYnNpZGlhblN5bmNQbHVnaW47XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogT2JzaWRpYW5TeW5jUGx1Z2luKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnSG9tZVN5bmMnIH0pO1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdwJywge1xuICAgICAgdGV4dDogJ01hZGUgYnkgTHVtYScsXG4gICAgICBjbHM6ICdzZXR0aW5nLWl0ZW0tZGVzY3JpcHRpb24nLFxuICAgIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnU2VydmVyIFVSTCcpXG4gICAgICAuc2V0RGVzYygnSVAgYW5kIHBvcnQgb2YgeW91ciBob21lIHNlcnZlciBcdTIwMTQgZS5nLiAxOTIuMTY4LjEuMTA6ODA4MCAod3M6Ly8gaXMgYWRkZWQgYXV0b21hdGljYWxseSknKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJzE5Mi4xNjguMS54OjgwODAnKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zZXJ2ZXJVcmwpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2VydmVyVXJsID0gdmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdBdXRoIFRva2VuJylcbiAgICAgIC5zZXREZXNjKCdNdXN0IG1hdGNoIGF1dGhUb2tlbiBpbiBzZXJ2ZXIvY29uZmlnLmpzb24nKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+IHtcbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcigneW91ci1zZWNyZXQtdG9rZW4nKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRoVG9rZW4pXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0aFRva2VuID0gdmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHRleHQuaW5wdXRFbC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICAgIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnRGV2aWNlIElEJylcbiAgICAgIC5zZXREZXNjKCdBdXRvLWdlbmVyYXRlZCB1bmlxdWUgSUQgZm9yIHRoaXMgZGV2aWNlIChyZWFkLW9ubHkpJylcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmRldmljZUlkKS5zZXREaXNhYmxlZCh0cnVlKVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0VuYWJsZSBTeW5jJylcbiAgICAgIC5zZXREZXNjKCdUb2dnbGUgcmVhbC10aW1lIHN5bmNpbmcgb24gb3Igb2ZmJylcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmVuYWJsZWQpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5jb25uZWN0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5kaXNjb25uZWN0KHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnSW5pdGlhbCBTeW5jJyB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgIHRleHQ6XG4gICAgICAgICdVc2UgdGhlc2Ugb3B0aW9ucyB0aGUgZmlyc3QgdGltZSB5b3Ugc2V0IHVwIGEgbmV3IGRldmljZSwgb3IgYWZ0ZXIgdGhlIHNlcnZlciBoYXMgYmVlbiB3aXBlZC4gJyArXG4gICAgICAgICdUdXJuIHRoZW0gb2ZmIGFnYWluIGFmdGVyIHRoZSBmaXJzdCBzdWNjZXNzZnVsIGNvbm5lY3Rpb24uJyxcbiAgICAgIGNsczogJ3NldHRpbmctaXRlbS1kZXNjcmlwdGlvbicsXG4gICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdEb3dubG9hZCBzZXJ2ZXIgc25hcHNob3Qgb24gY29ubmVjdCcpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgJ1doZW4geW91IGNvbm5lY3QsIGRvd25sb2FkIGV2ZXJ5IGZpbGUgdGhlIHNlcnZlciBrbm93cyBhYm91dC4gJyArXG4gICAgICAgICdGaWxlcyBhcmUgb25seSB3cml0dGVuIGlmIHRoZSBzZXJ2ZXIgY29weSBpcyBuZXdlciB0aGFuIHlvdXIgbG9jYWwgY29weS4nXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kb3dubG9hZE9uQ29ubmVjdClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kb3dubG9hZE9uQ29ubmVjdCA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdVcGxvYWQgdGhpcyB2YXVsdCB0byBzZXJ2ZXIgb24gY29ubmVjdCcpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgJ1doZW4geW91IGNvbm5lY3QsIHNlbmQgZXZlcnkgZmlsZSBpbiB5b3VyIHZhdWx0IHRvIHRoZSBzZXJ2ZXIuICcgK1xuICAgICAgICAnRW5hYmxlIHRoaXMgb24gdGhlIGRldmljZSB0aGF0IGhhcyB0aGUgbW9zdCB1cC10by1kYXRlIGNvcHkgb2YgeW91ciBub3Rlcy4nXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy51cGxvYWRPbkNvbm5lY3QpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudXBsb2FkT25Db25uZWN0ID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxufVxuXG4vLyBcdTI1MDBcdTI1MDAgQ29kZWMgaGVscGVycyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0Jhc2U2NChidWZmZXI6IEFycmF5QnVmZmVyKTogc3RyaW5nIHtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICBsZXQgYmluYXJ5ID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMuYnl0ZUxlbmd0aDsgaSsrKSB7XG4gICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pO1xuICB9XG4gIHJldHVybiBidG9hKGJpbmFyeSk7XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQXJyYXlCdWZmZXIoYmFzZTY0OiBzdHJpbmcpOiBBcnJheUJ1ZmZlciB7XG4gIGNvbnN0IGJpbmFyeSA9IGF0b2IoYmFzZTY0KTtcbiAgY29uc3QgYnl0ZXMgID0gbmV3IFVpbnQ4QXJyYXkoYmluYXJ5Lmxlbmd0aCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmluYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgYnl0ZXNbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gYnl0ZXMuYnVmZmVyO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBU087QUFlUCxJQUFNLG1CQUFpQztBQUFBLEVBQ3JDLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULGlCQUFpQjtBQUFBLEVBQ2pCLG1CQUFtQjtBQUNyQjtBQWdDQSxJQUFxQixxQkFBckIsY0FBZ0QsdUJBQU87QUFBQSxFQUNyRDtBQUFBLEVBRVEsS0FBdUI7QUFBQSxFQUN2QixXQUEwQjtBQUFBLEVBQzFCLGlCQUF1RDtBQUFBLEVBQ3ZELGlCQUFpQjtBQUFBLEVBQ2pCLG1CQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9uQixzQkFBc0Isb0JBQUksSUFBWTtBQUFBLEVBRXRDO0FBQUE7QUFBQSxFQUlSLE1BQU0sU0FBUztBQUNiLFVBQU0sS0FBSyxhQUFhO0FBR3hCLFFBQUksQ0FBQyxLQUFLLFNBQVMsVUFBVTtBQUMzQixXQUFLLFNBQVMsV0FBVyxPQUFPLFdBQVc7QUFDM0MsWUFBTSxLQUFLLGFBQWE7QUFBQSxJQUMxQjtBQUVBLFNBQUssWUFBWSxLQUFLLGlCQUFpQjtBQUN2QyxTQUFLLFVBQVUsY0FBYztBQUU3QixTQUFLLGNBQWMsSUFBSSxlQUFlLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDckQsU0FBSyxvQkFBb0I7QUFFekIsUUFBSSxLQUFLLFNBQVMsU0FBUztBQUN6QixXQUFLLFFBQVE7QUFBQSxJQUNmO0FBRUEsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixVQUFVLE1BQU07QUFDZCxhQUFLLGlCQUFpQjtBQUN0QixhQUFLLFdBQVc7QUFDaEIs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
