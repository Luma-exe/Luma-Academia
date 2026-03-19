
> [!faq] About this Lecture 
> Class: 41025
> Subject: #introductionToSoftwareDevelopment
> Date: 12/03/2025 
> Topics:  #git #github 

## Git

> Git is an open-source, industry-standard version control system for tracking changes in source code.

### Initialisation

- Run `git init` inside the project root folder to create an empty repository
  - This adds a `.git/` folder containing all metadata and history Git needs
- **Always run Git commands from the project root** (the folder containing `.git/`)
- Avoid nested Git folders (a repo inside another repo)

### Configuration

Set your identity so you are identified as the author of commits:

```bash
git config user.name "<your-name>"
git config user.email "<your-email>"

# Add --global to apply across all repositories
git config --global user.name "<your-name>"
git config --global user.email "<your-email>"
```

> **Exam/Assignment hint:** Use your full official name and UTS email so markers can clearly identify you.

---

### `.gitignore`

A `.gitignore` file tells Git which files/folders to **intentionally not track**.

**Use it for:**
- Local-only development files
- Logs and temporary files
- Virtual environments (`venv/`, `node_modules/`)
- Compiled code and caches
- OS/language-specific files
- Files with sensitive data (API keys, passwords)
- Dependencies that can be reinstalled

**Key behaviour:**
- If a file is **already tracked** and you later add it to `.gitignore`, remove it from the index with:
  ```bash
  git rm --cached <file-name>
  ```

**Common patterns:**

| Pattern | Matches |
|---|---|
| `**/old*` | Any file/folder starting with "old" at any depth |
| `**/e2e_testrunner/` | All `e2e_testrunner/` folders |
| `**/welcome.py` | Files named `welcome.py` at any depth |
| `local_stuffs/` | Only `local_stuffs/` folder in the repo root |
| `**/venv/` | Virtual environment folders at any depth |
| `**/node_modules/` | Node.js dependency folders |
| `.vscode/` | VS Code settings folder in repo root |
| `**/__pycache__/`, `.pytest_cache/` | Python and test cache folders |
| `*.env` | Environment variable files |

Reference: [gitignore docs](https://git-scm.com/docs/gitignore)

---

### `README.md`

The `README.md` is the front page of your repository.

**Should include:**
- Project title and description
- Installation steps
- Usage instructions
- Technologies used
- Contribution guidelines
- License details

**For assignments, also include:**
- Branch information
- Dependencies
- Instructions to run the project (markers must be able to follow them directly)

---

### Key Concepts

#### Branch

- Branches exist both **locally** and **remotely**
- **`main`/`master`** — stable or default production code
- **Feature branches** — used to develop individual features in isolation
- A **tracking branch** is a local branch linked to a remote branch

**Useful commands:**
```bash
git switch <branch-name>          # Switch branches (modern syntax)
git checkout <branch-name>        # Switch branches (older syntax)
git cherry-pick <commit-hash>     # Apply a specific commit from another branch
```

---

#### Commit

Commits are **snapshots** of your project at a point in time.

- Identified by a unique **hash** (first few characters are usually sufficient)
- Commits include: message, author, date, and line-by-line diffs

**Committing:**
```bash
git commit -m "short description"          # Inline message
git commit                                  # Opens Vim editor for longer message
```

**Commit message convention:** `type(scope): description`
- Example: `implement(login): add server-side validation for user login`

**Viewing commits:**
```bash
git log                                         # Full log
git log --oneline --graph --decorate --all      # Visual graph view
git show <commit-hash>                          # Show details of a specific commit
```

---

#### The Three Areas

| Area | Description |
|---|---|
| **Working Directory** | Files you are currently editing. One per repo, based on `HEAD` |
| **Staging Area (Index)** | Files added with `git add`, ready to be committed |
| **Local Repository** | History of all committed snapshots |

```bash
git add <file>       # Move to staging area
git commit           # Move from staging to local repository
git status           # Check current state of all three areas
```

---

#### `HEAD`

- `HEAD` is a **pointer to your current working commit** — the commit your working directory and index are based on
- There is always **exactly one `HEAD`** in a repository at any time
- `HEAD` is a **local reference** — unaffected by remote changes until you push/pull

---

#### Push

```bash
git push                              # Upload committed changes to remote
git push -u origin <branch-name>      # Push and set upstream tracking branch
```

- The remote is conventionally called **`origin`**
- The **upstream branch** is the remote branch associated with your local branch
  - Used by `git pull`, `git push`, `git status`

---

#### Diverging Branches

Your branch is **diverged** when:
- Your local branch has commits the remote does not have **AND**
- The remote branch has commits your local branch does not have

**Common causes:**
- You committed locally while someone else pushed to the same remote branch
- A pull request was merged into the shared branch

**Resolving with merge (preserves full history):**
```bash
git merge <branch-name>
```

1. Git attempts to auto-combine changes
2. If the **same lines** were changed in both branches → Git pauses and marks **conflict markers**
3. Manually edit conflicted files — keep the changes you want, then **delete all markers**:
   - `<<<<<<<` (your changes)
   - `=======` (separator)
   - `>>>>>>>` (incoming changes)
4. Stage the resolved files: `git add <file>`
5. Complete the merge: `git commit`

Reference: [Git Cheat Sheet](https://git-scm.com/cheat-sheet)

---

## GitHub

> GitHub is an enterprise-hosted remote platform for collaboration.

### Authentication via SSH Key

```bash
# 1. Generate an SSH key pair (ed25519 is a modern, secure algorithm)
ssh-keygen -t ed25519 -C <label>

# 2. Copy your public key (~/.ssh/id_ed25519.pub) to your GitHub account

# 3. If you get "fatal: Could not read from remote repository"
ssh-keyscan github.com >> ~/.ssh/known_hosts
# Appends GitHub's public SSH key to known_hosts
```

---

### Cloning a Repository

```bash
git clone <url> <folder-name>
```

- Clones the **entire repository** including all branches and full commit history
- Only **checks out one branch** (`main` or `master`) by default
- Other branches exist as **remote tracking branches** only
- To create a local branch from a remote one:
  ```bash
  git checkout feature/login
  # Creates local branch tracking origin/feature/login
  ```

---

### Adding a Remote to an Existing Local Repo

```bash
git remote add <name> <url>
# <name> is typically "origin"

# Push to remote and set upstream tracking
git push -u <remote> <local-branch>:<remote-branch>
# -u is shorthand for --upstream
```

---

### Pull Requests (PRs)

A Pull Request is a **proposal to merge code changes** into a project. It is a GitHub feature (not Git itself).

**Industry standard workflow:**
1. Work is done on a **separate feature branch**, never directly on `main`
2. Push the feature branch to the remote
3. Open a PR to merge the feature branch into `main`
4. GitHub typically enforces **code review** before merging
5. If there are conflicts, **resolve them** and push the fixes to the same feature branch (the PR auto-updates)

**Key behaviours:**
- A PR **tracks the branch as it evolves** — new commits pushed to the branch are automatically included in the open PR
- After Developer A's PR merges into `main`, Developer B must:
  ```bash
  git fetch origin main
  git merge origin/main    # Into their own feature branch
  ```

---

## GitHub Projects

> GitHub Projects is a project management tool for planning, tracking, and managing development work.

### Features

- **Board view** — Kanban-style task management
- **Table view** — spreadsheet-style overview
- **Roadmap view** — Gantt chart for timelines
- Assign issues to team members and track progress
- Access all issues via the **GitHub REST API** for custom analysis

> **Assignment hint:** Individual contributions are tracked using the GitHub REST API during marking.

---

### User Stories

- Represented as **GitHub Issues**
- Include:
  - **Priority** — High (H), Medium (M), Low (L)
  - **Estimate** — Fibonacci scale (1, 2, 3, 5, 8, …)
  - **Assignee**
  - **Release** (as a milestone)
  - **Iteration**, start/end dates
- Use custom **labels** for iteration, feature category, etc.

---

### Acceptance Criteria

- Represented as **sub-issues** under a user story issue
- Each sub-issue has its own unique issue number

---

## Development Traceability

Linking commits, PRs, and tests back to issues creates a **traceable audit trail** of development work.

### Closing Issues via Commits/PRs

Use these **keywords + issue number** in a commit message or PR description to **automatically close** the issue when merged:

| Keyword | Variants |
|---|---|
| `close` | `closes`, `closed` |
| `fix` | `fixes`, `fixed` |
| `resolve` | `resolves`, `resolved` |

**Examples:**
```
Closes #40
Fixes #12
Resolves #7
```

### Best Practices

- A PR should ideally contain **one complete user story** (implementation + tests)
- Reference issues and sub-issues in **test commits** to link tests to user stories
- Use `Closes #<n>` in the **PR description** (not just the commit) to auto-close the issue when the PR is merged
- Multiple issues can be closed in one PR description:
  ```
  Closes #40
  Closes #41
  ```

---

## Connections to Other Topics

- **Week 4+:** Feature branches used for every user story
- **Week 5+:** Backend code committed and linked to issues via PRs
- **Individual contribution tracking:** GitHub REST API used in marking
