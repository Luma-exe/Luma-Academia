
> [!faq] About this Lecture 
> Class: 41025
> Subject: #introductionToSoftwareDevelopment
> Date: 16/04/2025 
> Topics: 

## JavaScript `fetch` for HTTP Requests

The `fetch` API allows the frontend to send HTTP requests to backend APIs. It replaces older approaches like `XMLHttpRequest`.

### Key anatomy of a `fetch` call

```javascript
fetch("http://127.0.0.1:8080/auth/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    credentials: "include" // tells the browser to include cookies with the request
})
```

- `method` — HTTP verb (`"POST"`, `"GET"`, etc.)
- `headers` — must include `"Content-Type": "application/json"` when sending JSON
- `body` — the payload, serialised with `JSON.stringify()`
- `credentials: "include"` — critical for cross-origin cookie handling (see [[#Cookie + Session Pattern]])

### Handling responses

`fetch` returns a **Promise**, so responses are handled via `.then()` chaining:

```javascript
.then((response) => response.json())   // parse the raw Response as JSON
.then((data) => {
    // data.status  → "success" or "error"
    // data.message → human-readable string from the backend

    if (data.status === "success") {
        window.location.href = "welcome.html"; // redirect on success
    } else if (data.message === "Email doesn't exist. Please register.") {
        emailError.textContent = "The email address you entered isn't connected to an account.";
        emailError.style.display = "block";
        document.getElementById("email").focus();
    } else if (data.message === "Incorrect password.") {
        passwordError.textContent = "The password that you've entered is incorrect.";
        passwordError.style.display = "block";
        document.getElementById("password").focus();
    }
})
.catch((error) => console.error("Error:", error)); // network-level errors only
```

> **Important distinction:**
> - `.then()` handles **application-level** errors (wrong password, unknown email) — the server responded but said "no"
> - `.catch()` handles **network/request-level** failures (server down, CORS rejection, no internet)

---

## Why Not `sessionStorage`?

In earlier weeks, `sessionStorage` was used to pass user data between pages. This is **insecure** for sensitive data:

| Property | `sessionStorage` | Cookie + Backend Session |
|---|---|---|
| Accessible by JS? | Yes — fully readable | No — `HttpOnly` flag blocks JS |
| Vulnerable to XSS? | Yes — attacker can read it directly | Partially — cookie is hidden from JS, but attacker can still *use* the session |
| Stored where? | Browser only | Signed cookie on browser; session data decoded by Flask per-request |
| Recommended for? | Non-sensitive UI state only | Authenticated user identity |

> **XSS (Cross-Site Scripting):** An attack where malicious JavaScript is injected into a page and can read `sessionStorage` or perform actions as the logged-in user.

---

## Cookie + Backend Session Pattern

### How it works — conceptual overview

1. User submits login credentials via `fetch` with `credentials: "include"`
2. Flask verifies credentials and creates a **session object** (`session["user_name"] = ...`)
3. Flask signs the session data using `SECRET_KEY` and stores it **in a client-side cookie**
4. The cookie is sent to the browser with `HttpOnly` flag set — JavaScript cannot read it
5. On every subsequent request, the browser automatically sends the cookie
6. Flask re-verifies the signature and reconstructs the `session` object

> **Note:** By default, Flask uses **client-side sessions** (the whole session dict is in the cookie). Server-side session storage (using Redis/database) is more secure but out of scope for ISD.

### Setting up Flask sessions — `app.py`

```python
app.secret_key = "session-secret-key"  # Required: signs the session cookie

app.config.update(
    SESSION_COOKIE_HTTPONLY=True,   # JS cannot read the cookie via document.cookie
    SESSION_COOKIE_SECURE=False,    # Allow HTTP for local dev (set True in production with HTTPS)
)

# CORS configuration
# - Allows cross-origin requests from the frontend origin only
# - supports_credentials=True is required to allow cookies across origins
CORS(app,
    resources={r"/*": {"origins": "http://127.0.0.1:8000"}},
    supports_credentials=True)
```

> **`localhost` vs `127.0.0.1`:** Flask and the browser treat these as **different origins**. Always use `http://127.0.0.1:8000` (not `localhost`) for the frontend when CORS is configured this way.

### Storing session data on login — `auth_controller.py`

```python
session.clear()                        # Clear any pre-existing session for this user
session["user_name"]  = user.name      # Store user's name
session["user_email"] = user.email     # Store user's email
```

### Retrieving user identity — `/auth/me` endpoint

```python
@auth_bp.route("/me", methods=["GET"])
def me():
    if "user_name" not in session:
        return jsonify({"status": "error", "message": "Not logged in"}), 401
    return jsonify({
        "status": "success",
        "user": {
            "name":  session["user_name"],
            "email": session["user_email"],
        }
    }), 200
```

Called from the frontend welcome page to **confirm identity** and control access:

```javascript
fetch("http://127.0.0.1:8080/auth/me", {
    method: "GET",
    credentials: "include",  // browser sends the session cookie with this request
})
```

### Logout — `/auth/logout` endpoint

```python
@auth_bp.route("/logout", methods=["GET"])
def logout():
    session.clear()
    return jsonify({"status": "success", "message": "Logged out successfully"}), 200
```

Called by the frontend when the user clicks the logout button. Clears all session data server-side.

---

## DOM Manipulation with JavaScript

Used on `welcome.html` to **conditionally render UI elements** based on authentication state (e.g. only show the logout button if the user is logged in).

```javascript
// Dynamically create and append a logout button
const logoutBtn = document.createElement("button");
logoutBtn.id = "logoutBtn";
logoutBtn.textContent = "Logout";
mainContainer.appendChild(logoutBtn);  // adds button to the DOM inside mainContainer
```

Key methods:
- `document.createElement(tag)` — creates a new DOM element in memory
- `element.appendChild(child)` — inserts it as the last child of `element`
- `element.textContent` — sets the visible text content of the element
- `element.id` — assigns an ID for later selection

---

## UML Sequence Diagrams

A **sequence diagram** shows the time-ordered flow of messages between participants in a system interaction.

### Required components

- **External actor** — the initiating entity (e.g. the user/browser)
- **Lifelines** — vertical dashed lines representing each participant over time
- **Messages** — horizontal arrows between lifelines showing requests and responses
- **Sequence fragments** (combined fragments) — structured sections such as:
  - `alt` — alternative/branching (like if/else)
  - `loop` — repeated behaviour
  - `opt` — optional behaviour

### Example use case

The login flow from this lecture is a classic sequence diagram scenario:

```
Browser → Flask: POST /auth/login (credentials)
Flask → Flask: verify credentials, session.clear(), session["user_name"] = ...
Flask → Browser: Set-Cookie: session=<signed_data>; HttpOnly
Browser → Flask: GET /auth/me (cookie auto-attached)
Flask → Browser: {status: "success", user: {...}}
Browser → Flask: GET /auth/logout
Flask → Flask: session.clear()
Flask → Browser: {status: "success"}
```

> **Reference:** [Visual Paradigm Sequence Diagram Guide](https://www.visual-paradigm.com/learning/handbooks/software-design-handbook/sequence-diagram.jsp)
> **Miro example** provided by lecturer for login flow.

---

## Security Considerations

### `HttpOnly` cookies
- Prevents JavaScript from accessing the cookie via `document.cookie`
- **Mitigates** cookie theft via XSS — attacker cannot read the token
- **Does not fully prevent** XSS — attacker can still perform actions as the authenticated user

### `SECRET_KEY` caveat
- If `app.secret_key` changes, **all active sessions become invalid** immediately (signatures no longer verify)
- Production systems implement **key rotation** (multiple valid signing keys simultaneously)

### Client-side vs server-side sessions

| | Client-side (Flask default) | Server-side (Flask-Session + Redis/DB) |
|---|---|---|
| Session data stored | In the signed cookie | On the server; only a session ID in cookie |
| Security | Lower — data visible in cookie (though signed) | Higher — data never leaves the server |
| Scope for ISD | ✅ Used in this course | ❌ Out of scope |
| Production use | Uncommon for sensitive apps | Standard practice |

### Secure website design checklist (mentioned by instructor)
- HTTPS in production
- Input validation and output encoding
- Secure cookie flags (`HttpOnly`, `Secure`, `SameSite`)

---

## Extensions (Further Reading)

### Server-Side Rendering (SSR)
- HTML is generated **on the server**, not in the browser
- Reduces client-side JavaScript execution
- Improves SEO (crawlers receive fully-rendered HTML)
- Supported by frameworks like **Next.js** (`getServerSideProps`)

### Production-grade session management
- **Flask-Session** with Redis or a database backend
- **Django** — has integrated authentication/session handling
- **Next.js** — modern full-stack framework with built-in auth patterns

---

## Summary of Files Changed This Week

- `logout.html` — logout page
- `register_successful.html` — confirms successful student registration
- `welcome.html` — student page shown after login (includes identity check via `/auth/me`)
- `app.py` — session config, CORS, blueprint registration

---

## Connections to Other Topics

- [[Week 4 — Frontend sessionStorage]] — the insecure approach replaced by this pattern
- [[MVC Architecture]] — `auth_controller.py` lives in the Controller layer; blueprints (`auth_bp`) organise routes
- [[DAL and Blueprints]] — `auth_bp` is registered in `app.py` with `url_prefix="/auth"`
- [[Web Security — CIA Triad]] — this lecture directly addresses **Confidentiality** (protecting session data)
- [[HTML + CSS]] — `document.createElement` and `appendChild` extend what you build stati