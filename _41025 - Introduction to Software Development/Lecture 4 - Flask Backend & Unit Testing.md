> [!faq] About this Lecture 
> Class: 41025
> Subject: #introductionToSoftwareDevelopment
> Date: 12/03/2025 
> Topics: 

## Setup

### Virtual Environments (`venv`)

The `venv` module is a **built-in Python module** (Python 3.3+) that creates **isolated Python environments**, each with their own independent set of installed packages.

```bash
# Create a venv (run from weekX/ folder)
python -m venv <venv_folder_name>

# Activate (bash/zsh)
source <venv_folder_name>/Scripts/activate

# Deactivate
deactivate
```

> **Convention:** Create the venv inside `weekX/` so it sits alongside `backend/`. Add `**/venv/` to `.gitignore` — never commit the venv folder.

---

### Running Python Scripts as Modules

**Problem:** Python resolves relative paths from the **current working directory (CWD)**, not from the script's location. This causes import and file-access errors if you run scripts from the wrong directory.

**Solution:** Run scripts **as modules** using the `-m` flag.

**Steps:**
1. Add an empty `__init__.py` to the `backend/` folder (marks it as a Python package)
2. From `weekX/`, run:
   ```bash
   python -m backend.app
   ```

This ensures consistent path resolution regardless of where you invoke it.

---

## Flask Backend

### What is Flask?

[Flask](https://flask.palletsprojects.com/en/stable/) is a **lightweight, micro web framework** for Python, designed for building web applications and APIs quickly.

- Supports Python 3.9+
- Install into your active venv:
  ```bash
  pip install Flask
  ```

---

### Minimal Backend — No Framework (for comparison)

Using only Python's built-in `http.server` library:

```python
from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class Handler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path == "/welcome":
            length = int(self.headers["Content-Length"])
            data = json.loads(self.rfile.read(length))
            name = data.get("name")

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()

            self.wfile.write(
                json.dumps({
                    "status": "success",
                    "message": f"Hello, {name}!"
                }).encode()
            )

if __name__ == "__main__":
    HTTPServer(("127.0.0.1", 8080), Handler).serve_forever()
```

**How it works:**

| Part | Purpose |
|---|---|
| Subclass `BaseHTTPRequestHandler` | Define `do_GET`, `do_POST`, etc. to handle HTTP methods |
| `self.path` | The requested API endpoint (e.g., `/welcome`) |
| `self.headers` | HTTP headers sent by the client |
| `self.rfile` | The raw request body (read as bytes) |
| `self.send_response(200)` | Set HTTP status code |
| `self.send_header(...)` + `self.end_headers()` | Add response headers |
| `self.wfile.write(...)` | Send response body to client |
| `HTTPServer(("127.0.0.1", 8080), Handler).serve_forever()` | Start server and listen for requests |

---

### Equivalent Flask App

```python
from flask import Flask, request

app = Flask(__name__)

@app.route('/welcome', methods=["POST"])
def welcome():
    data = request.json
    username = data.get("name")
    return {"status": "success", "message": f"Hello, {username}!"}, 200

if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=8080)
```

**How Flask simplifies things:**

| Flask feature | What it does |
|---|---|
| `app = Flask(__name__)` | Creates the Flask application instance |
| `@app.route('/welcome', methods=["POST"])` | Maps URL endpoint `/welcome` to the `welcome()` function for POST requests |
| `request.json` | Automatically parses the JSON request body — no manual byte reading or `json.loads()` needed |
| `return {...}, 200` | Returns a JSON response with HTTP status code 200 |

> **Note on decorators:** `@app.route(...)` is equivalent to `app.route("/welcome", methods=["POST"])(welcome)`. A decorator only applies to the function **immediately below it**.

---

### Running the Flask App

```bash
python -m backend.app
```

`app.run()` options:

| Option | Effect |
|---|---|
| `debug=True` | Enables auto-reload on code changes + detailed error tracebacks in browser |
| `host="127.0.0.1"` | Server listens only on localhost (not accessible from other machines) |
| `port=8080` | Port number; full URL becomes `http://127.0.0.1:8080/` |

> `app.run()` uses Flask's **built-in development server** — not suitable for production.

---

### Important Caveat: GET vs POST

> According to the HTTP specification, **GET requests should not include a body**. Flask does not reliably process a payload in a GET request. If you need to send data in the request body, use a **POST endpoint** instead.

---

## Unit Testing

### What is Unit Testing?

**Unit testing** validates isolated pieces of source code (a single function, method, class, or small module) to confirm they behave as expected.

- Performed at the **unit level** — contrasts with integration or system-level testing
- Written and run by the **developer who writes the code**
- Each test case is **isolated** — starts from a clean, known state, independent of other tests

---

### Project Bidding — Example Domain

The sample unit tests use a **project bidding algorithm** (in `week5/backend/project_bidding.py`):

**Rules:**
- Each student has **10 bids** and can nominate themselves to **1 project**
- Students distribute bids across three categories: **technical**, **communication**, **innovation**
- Each project defines **weights** for each category
- Scoring formula:

$$\text{weighted\_bids} = \sum_{i} \text{weight}_i \times \text{bid}_i$$

Where $i \in \{\text{technical}, \text{communication}, \text{innovation}\}$

- Each project has a **maximum number of students** (default: 6)
- Students are **ranked by `weighted_bids`** and the top $X$ students ($X \leq \text{max}$) are assigned to the project

---

### Python's `unittest` Framework

Python's built-in `unittest` module provides tools for creating and running automated unit tests.

**Test file:** `week5/backend/test_project_bidding.py`

#### Structure

```python
import unittest

class TestAllocation(unittest.TestCase):

    def setUp(self):
        # Runs BEFORE each test method
        # e.g., create 3 projects and 20 users

    def tearDown(self):
        # Runs AFTER each test method
        # e.g., remove all students, projects, registrations, allocations

    def test_registration_success(self):
        # Test case — must start with test_
        ...

    def test_registration_failure(self):
        ...
```

**Lifecycle per test:**
$$\texttt{setUp()} \rightarrow \texttt{test\_method()} \rightarrow \texttt{tearDown()}$$

#### Test Discovery

`unittest` automatically discovers methods starting with `test_`:

```bash
# Run all tests in a folder
python -m unittest discover -s <folder-name>

# Custom file pattern
python -m unittest discover -p "test*.py"
```

#### Naming Convention

```
test_<functionality>_<success|failure>
```

Examples: `test_registration_success`, `test_allocation_failure`

#### Assertions

| Assertion | Checks |
|---|---|
| `assertEqual(actual, expected)` | `actual == expected` |
| `assertTrue(condition)` | `condition` is `True` |
| `assertIn(value, collection)` | `value` exists in `collection` |

---

### Test Coverage

Coverage requirements depend on **risk, business needs, quality, and regulatory requirements**:

| Test Level | Focus |
|---|---|
| **Unit tests** | Core business logic (isolated functions/classes) |
| **Integration (API) tests** | Key workflows, most-used paths |
| **End-to-end (E2E) tests** | Core user flows |

> **ISD Assignment note:** You are required to demonstrate testing in the project, but the extent of coverage is **not assessed**.

---

## Common Vulnerabilities & Mitigations

> Security is a complex topic. ISD covers a high-level overview of common application-level vulnerabilities.

### Application-Level Vulnerabilities

#### Cross-Site Scripting (XSS)

- **What it is:** Untrusted user input is injected into a web page without sanitisation, allowing attackers to execute **malicious JavaScript** in a victim's browser
- **Mitigation:**
  - Input validation and **output escaping on the backend**
  - Validate input formats, limit accepted parameters, set max parameter counts
  - Reject unnecessary data in HTTP requests
  - Modern browsers support some HTML5 input validation natively (note: this can complicate E2E testing)

#### SQL Injection

- **What it is:** User input is directly embedded into SQL queries, allowing attackers to manipulate the database (read, modify, delete data)
- **Mitigation:**
  - Use an **ORM framework** like [SQLAlchemy](https://www.sqlalchemy.org/) — interacts with databases through Python objects rather than raw SQL strings
  - Use **parameterised queries** (never string-concatenate user input into SQL)

---

### Infrastructure & Network Vulnerabilities

**Man-in-the-Middle (MITM):**
- An attacker intercepts and potentially alters communication between client and server without either party knowing
- Mitigated with HTTPS/TLS encryption

**Misconfiguration vulnerabilities:**
- Exposed database ports or unsecured cloud storage can allow unauthorised access
- Enforce proper **network restrictions** and **access controls**

> **Week 9 connection:** When connecting frontend and backend, session management moves from **frontend `sessionStorage`** to **backend session storage + frontend cookies** for improved security.

---

## Request Handling Efficiency

### In Code

- Use **efficient algorithms and database queries**
- Limit individual request cost:
  - Prevent large payloads
  - Apply **rate limiting** per user/IP (typically on the backend)
- Use **async/await** for non-blocking I/O
- **Reuse** database or API connections instead of creating a new one per request

### Infrastructure

- Use **production-grade web servers**: Nginx, Apache (not Flask's built-in dev server)
- Leverage cloud services for:
  - **Load balancers** — distribute traffic across multiple servers
  - **Auto-scaling** — spin up additional instances under load
  - **Firewalls** — control inbound/outbound traffic
  - **DDoS protection** — absorb and filter attack traffic

---

## Connections to Other Topics

- **Week 3:** Feature branches and PRs used to submit backend implementation
- **Week 4:** Frontend JS (`fetch`) will call these Flask endpoints
- **Week 7:** Server-side validation of all user input (security-critical)
- **Week 9:** Full frontend-backend integration; session storage → backend sessions + cookies

