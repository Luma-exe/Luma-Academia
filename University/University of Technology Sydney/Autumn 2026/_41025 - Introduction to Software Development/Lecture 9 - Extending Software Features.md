
> [!faq] About this Lecture 
> Class: 41025
> Subject: #introductionToSoftwareDevelopment
> Date: 30/04/2025 
> Topics: 

## Overview

This lecture extends the frontend of a full-stack application, introducing:

- A **modular, function-based code structure** for scalability and readability
- **Role-based access control** (admin vs. student)
- **Asynchronous update handling** and race condition avoidance
- **End-to-end (E2E) testing** with Python Selenium

---

## Modular Function-Based Code Structure

### Why Modularise?

As a codebase grows, placing all logic inside a single `DOMContentLoaded` block becomes unmanageable. Splitting into named, purpose-specific functions improves:

- Readability
- Reusability
- Testability

### Three Function Categories

|Category|Purpose|Common Patterns|
|---|---|---|
|**Handlers**|Respond to events (user actions, system events)|`handleCreateProject()`, `handleLogout()`|
|**Data-fetching**|Retrieve data from APIs or backend services|Uses `fetch(...)`, often `async/await`|
|**Rendering**|Create or modify DOM elements|Uses `document.createElement(...)`|

### Recommended File Structure

New files introduced: `project-dashboard.html` and `project-dashboard.js`

### Structural Template

```javascript
document.addEventListener("DOMContentLoaded", async () => {
  // --- Element references ---
  const dashboard = document.getElementById("project-dashboard");
  const tableBody = document.getElementById("project-table-body");
  const searchInput = document.getElementById("project-search");
  const logoutBtn = document.getElementById("logoutBtn");

  let allProjects = [];
  let role = null;

  /* =========================
   FUNCTIONS
   ========================= */

  // Data-fetching
  async function fetchUserRole() { ... }
  async function loadProjects() { ... }

  // Handlers
  function handleCreateProject() { ... }
  async function handleLogout() { ... }
  function handleSearchInput(event) { ... }
  async function handleViewProject(projectName) { ... }
  function handleEditProject(projectName) { ... }
  async function handleRemoveProject(projectName) { ... }

  // Rendering
  function renderProjects(projects) { ... }
  function setupAdminUI() { ... }

  /* =========================
   SHARED HTML ELEMENTS
   ========================= */
  logoutBtn.addEventListener("click", handleLogout);
  searchInput.addEventListener("input", handleSearchInput);

  /* =========================
   CONDITIONAL RENDERING
   ========================= */
  await fetchUserRole();  // Must complete before role-based rendering
  setupAdminUI();

  /* =========================
   LISTING ALL PROJECTS
   ========================= */
  await loadProjects();
});
```

> **Important:** Functions can be defined outside of `DOMContentLoaded`, but must only be _called_ after the relevant DOM elements exist.

---

## Role-Based Access Control

### Fetching the User Role

```javascript
let role = null;

async function fetchUserRole() {
    try {
        const response = await fetch("http://127.0.0.1:8080/auth/me", {
            credentials: "include"   // sends session cookies
        });
        const data = await response.json();
        role = data.user.name;       // stores role in outer scope variable
    } catch (err) {
        console.error("Failed to fetch role:", err);
    }
}
```

- `credentials: "include"` — required to send session cookies cross-origin
- `role` is stored in the outer scope so all functions can access it

### Conditional Rendering by Role

```javascript
await fetchUserRole();   // wait for role to be set

if (role === "admin") {
    renderCreateMode();      // admin sees create/edit/delete UI
} else {
    renderSomethingElse();   // student sees read-only UI
}
```

- Uses `await` to guarantee role is known before any UI renders
- Admin and student share the same page; UI differs based on `role`

### Admin: Creating a Project

```javascript
async function handleCreateProject() {
    formError.textContent = "";

    const projectName = projectNameInput.value.trim();
    const clientName = clientNameInput.value.trim();

    try {
        fetch("http://127.0.0.1:8080/projects/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "admin-secret-key"   // admin auth header
            },
            body: JSON.stringify({
                name: projectName,
                client: clientName,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.status !== "success") {
                alert("Error creating project: " + data.message);
                return;
            }
        });

        alert("Project created successfully!");
        // Reset all form inputs
        projectNameInput.value = "";
        clientNameInput.value = "";
        projectNewNameInput.value = "";
        clientNewNameInput.value = "";

    } catch (err) {
        console.error("Error creating project:", err);
    }
}
```

### Admin: Rendering the Create Form

```javascript
function renderCreateMode() {
    // Show create fields
    projectNameInput.style.display = "block";
    projectNameTr.style.display = "table-row";
    clientNameInput.style.display = "block";
    clientNameTr.style.display = "table-row";

    // Hide update fields
    projectNewNameInput.style.display = "none";
    projectNewNameTr.style.display = "none";
    clientNewNameInput.style.display = "none";
    clientNewNameTr.style.display = "none";

    // Show/hide buttons
    createBtn.style.display = "inline-block";
    updateBtn.style.display = "none";

    createBtn.addEventListener("click", handleCreateProject);
}
```

---

## Handling Asynchronous Updates

### Async Project Loading

Load and re-render the project list on demand:

```javascript
async function loadProjects() {
    try {
        const response = await fetch("http://127.0.0.1:8080/projects/list");
        const data = await response.json();

        if (data.status !== "success") return;

        allProjects = data.projects;    // update shared state
        renderProjects(allProjects);    // re-render DOM
    } catch (err) {
        console.error("Error loading projects:", err);
    }
}
```

Call `loadProjects()`:

- On initial page load
- After any create, update, or delete operation

### Polling for Continuous Updates

To automatically refresh the list every 5 seconds:

```javascript
setInterval(loadProjects, 5000);
```

> Use polling carefully — it increases server load. Prefer event-driven updates where possible.

---

## Race Conditions

### What is a Race Condition?

A race condition occurs when asynchronous operations complete in an **unpredictable order**, causing logic that depends on a previous result to run before that result is available.

### Buggy Example — Race Condition

```javascript
let role = null;

// fetch is async — role is NOT set by the time the if-check runs
fetch("http://127.0.0.1:8080/auth/me", { credentials: "include" })
.then(response => response.json())
.then(data => {
    if (data.status === "success") {
        role = data.user.name;
    } else {
        console.error("Failed to fetch role:", data.message);
    }
})

// BUG: role is still null here — the fetch hasn't finished
if (role === "admin") { ... }
```

**Why it fails:** `fetch` is asynchronous. The `if (role === "admin")` check runs immediately after calling `fetch`, before the `.then()` chain resolves. `role` is still `null`.

### Correct Pattern — Nest Logic Inside `.then()`

```javascript
let role = null;

fetch("http://127.0.0.1:8080/auth/me", { credentials: "include" })
.then(response => response.json())
.then(data => {
    if (data.status === "success") {
        role = data.user.name;
        if (role === "admin") {
            // Safe: role is guaranteed to be set here
            renderCreateMode();
        }
    } else {
        console.error("Failed to fetch role:", data.message);
    }
})
```

**Or use `async/await`** (cleaner and recommended):

```javascript
await fetchUserRole();   // waits for fetch to complete
if (role === "admin") {
    setupAdminUI();      // safe to access role now
}
```

> **Key Rule:** Never rely on a variable set inside a `.then()` block from code that runs _after_ the `.then()` chain but _before_ it resolves.

---

## End-to-End (E2E) Testing

### What is E2E Testing?

End-to-end testing verifies the **complete behaviour** of a full-stack application by simulating real user interactions through the browser.

- Tests the frontend as users actually experience it
- Catches integration bugs missed by unit tests
- Runs against a live (local) server

### Selenium

**Selenium** is an industry-standard E2E testing framework. It:

- Uses **browser drivers** to open real browsers (e.g., Chrome)
- Simulates user actions: typing, clicking, form submission, navigation
- Supports Python, JavaScript, and others
- In ISD, only **Python Selenium** is studied

**Requirements:**

- The target browser must be installed on the machine
- The frontend server must be running

### Required Python Imports

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
```

### Core Selenium API

|Code|Purpose|
|---|---|
|`driver = webdriver.Chrome()`|Open Chrome browser with default settings|
|`driver.get("http://localhost:8000/register.html")`|Navigate to a URL|
|`driver.find_element(By.ID, "register-form")`|Select element by HTML `id` attribute|
|`element.click()`|Simulate a mouse click|
|`form.submit()`|Submit a form|

### Test Structure with `unittest`

One test class per HTML page. Use `setUp()` to initialise and `tearDown()` to clean up.

```python
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestRegister(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:8000/register.html")
        self.form = self.driver.find_element(By.ID, "register-form")

    def tearDown(self):
        self.driver.quit()
        super().tearDown()

    def test_name_empty(self):
        # Check the ToS box if not already checked
        tos_checkbox = self.form.find_element(By.ID, "tos-checkbox")
        if not tos_checkbox.is_selected():
            tos_checkbox.click()

        # Submit the form with no fields filled
        self.form.submit()

        # Wait up to 5s for the error message to appear
        form_error = WebDriverWait(self.driver, 5).until(
            EC.visibility_of_element_located((By.ID, "form-error"))
        )

        # Assert the error text matches expected output
        self.assertEqual(
            form_error.text,
            "Please enter all required fields."
        )
```

Run tests with:

```bash
python -m unittest frontend/tests/e2e/test_login_e2e.py
```

### `WebDriverWait` — Waiting for Async DOM Changes

Used to **pause test execution** until a condition is met (up to a timeout):

```python
# Wait until element is visible
WebDriverWait(self.driver, 5).until(
    EC.visibility_of_element_located((By.ID, "form-error"))
)
```

**Custom lambda conditions:**

```python
# Wait until welcome-message has non-empty text
WebDriverWait(self.driver, 5).until(
    lambda d: d.find_element(By.ID, "welcome-message").text != ""
)
```

- `d` refers to `self.driver` (injected by `WebDriverWait`)
- The condition is re-evaluated repeatedly until it returns `True` or times out

### HTML5 Validation Caveat

> **Exam-relevant gotcha:** HTML5 form validation is handled by the browser and may conflict with custom error messages in Selenium tests.

**Example problem:**

- A `<input type="password">` field left empty triggers a browser-generated alert ("Please fill in this field.")
- Your test expects the custom JS alert ("Please enter your password.")
- The test **fails** because Chrome intercepts the submit with its own validation UI first

**Workaround used in ISD:**

- Change `type="password"` → `type="text"` to bypass browser validation during testing

---

## Summary of Code Changes

|File|Changes|
|---|---|
|`auth_controller.py`, `auth.py`|Backend session storage; retrieve/clear user identity|
|`login.js`, `login.html`|Role selection on login; password input changed to `text` for E2E testing; backend session storage|
|`logout.js`|Clears backend session via `fetch`|
|`test_login_e2e.py`, `test_register_e2e.py`|E2E test scripts|
|`welcome.html`, `welcome.js`|Shows link to project dashboard if no project found|
|`project-form.html`, `project-form.js`|Admin: create and update a project|
|`project-dashboard.html`, `project-dashboard.js`|Shared page; students: view/search; admin: view/search/create/edit/delete; delete removes all allocations|
|`project-status.html`, `project-status.js`|Shared page; students: self-assign to one project; admin: assign/remove students|

---

## Key Concepts Summary

|Concept|Definition|
|---|---|
|**Modular functions**|Organising code into handler, data-fetching, and rendering functions for readability and reuse|
|**Role-based access**|Rendering different UI based on the authenticated user's role (admin vs. student)|
|**Race condition**|Bug where async code runs before a dependency has resolved, producing incorrect state|
|**Async/await**|JavaScript syntax for writing async code that reads synchronously; prevents race conditions when used correctly|
|**E2E testing**|Testing the full user-facing behaviour of an application via a real browser|
|**Selenium**|Python/JS framework for E2E testing; simulates browser user interactions|
|**`WebDriverWait`**|Selenium utility that pauses test execution until a DOM condition is satisfied|
|**Polling**|Using `setInterval` to repeatedly fetch data at a fixed interval|

---

## Connections to Other Topics

- **Week prior:** Basic `fetch` API usage, login/logout flow, session management
- **Unit testing:** `unittest` module is shared with E2E testing structure
- **Backend (auth):** `/auth/me` endpoint used for role fetching; session cookies managed server-side
- **HTML forms:** HTML5 validation behaviour affects E2E test design