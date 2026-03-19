
> [!faq] About this Lecture 
> Class: 41025
> Subject: #introductionToSoftwareDevelopment
> Date: 12/03/2025 
> Topics: #javascript #html #css

## Static Webpages with HTML

HTML (HyperText Markup Language) defines the **structure and content** of a web page using **elements** created with tags.

### Default File — `index.html`

When a web server receives a request for a **directory path** (e.g., `http://localhost:8080/`), it automatically serves `index.html` by default.

### Basic HTML Template

```html
<!doctype html>
<html>
  <head>
    <title>Home</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="content-container">
      <h1>Project Management System</h1>
      <nav>
        <a href="index.html">Home</a>
        <a href="register.html">Register</a>
      </nav>
      <img
        src="sunflower.jfif"
        alt="A beautiful sunflower"
        title="Click to download this sunflower"
        class="main-item"
      />
    </div>
  </body>
</html>
```

### HTML Element Reference

| Element | Purpose |
|---|---|
| `<!doctype html>` | Declares HTML5 document type; ensures standards mode rendering |
| `<html>` | Root element — all other elements are nested inside |
| `<head>` | Metadata: page title, linked stylesheets, scripts (not visible to user) |
| `<body>` | All visible page content |
| `<title>` | Text shown in the browser tab or window title bar |
| `<link rel="stylesheet" href="style.css" />` | Links an external CSS file; `rel` = relationship, `href` = path |
| `<div class="content-container">` | Generic container for grouping/styling; `class` targets CSS rules |
| `<h1>` | Main heading (highest priority heading) |
| `<nav>` | Defines a navigation section with links |
| `<img src="..." alt="..." title="..." class="..."/>` | Inserts image; `src` = path, `alt` = screen reader/fallback text, `title` = hover tooltip |

Full reference: [MDN HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)

---

## File Organisation & Running the Frontend

### Folder Structure

```
weekX/
  frontend/
    index.html
    register.html
    welcome.html
    logout.html
    style.css
    register.js
    welcome.js
```

> **Convention:** All HTML files go in the `frontend/` folder. Commands are run from the `weekX/` folder.

### Starting the Local Dev Server

```bash
python -m http.server 8000 --directory frontend/
```

- `-m http.server` — runs Python's built-in HTTP server as a module
- `8000` — port number
- `--directory frontend/` — serves files from the `frontend/` folder

Then open: `http://127.0.0.1:8000`

---

## JavaScript for Element Behaviours

JavaScript controls **behaviour** of HTML elements — what happens when buttons are clicked, forms submitted, or pages loaded.

### Script Tag Placement

```html
<body>
  <!-- ... your HTML content ... -->
  <script src="register.js"></script>
</body>
```

> Place `<script>` at the **end of `<body>`** so all DOM elements are loaded before the script runs.

---

### User Registration — Full Walkthrough

#### `register.html` — The Form

```html
<form id="register-form">
  <input type="text" id="name" required />
  <input type="email" id="email" required />
  <input type="checkbox" id="tosCheckbox" name="option1" value="yes" required />
  <button type="submit">Register</button>
</form>
<script src="register.js"></script>
```

- `id="register-form"` — used by JS to find this element
- `required` — enables **client-side validation** (browser checks before submitting)
- `type="checkbox"` with `required` — browser checks the box is ticked before submit

#### Core `register.js` Structure

```js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("register-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop form from auto-submitting (required)

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // do something with name and email
  });
});
```

**Key concepts explained:**

| Code | Meaning |
|---|---|
| `document.addEventListener("DOMContentLoaded", fn)` | Runs `fn` when the entire DOM is fully loaded and parsed |
| `document.getElementById("register-form")` | Finds the element with `id="register-form"` |
| `document.getElementById("name").value` | Gets the current value typed into the input with `id="name"` |
| `form.addEventListener("submit", fn)` | Runs `fn` when the form is submitted |
| `event.preventDefault()` | Prevents the browser's default action (sending data to server + page reload) |
| **Callback function** | An unnamed `function() {}` passed as an argument, called later when the event fires |

---

### Client-Side Validation

- Used to **improve user experience** and reduce unnecessary server load
- **Not a security measure** — always validate critical data on the server side too
- Adding `required` to an input → browser checks it before allowing submit
- Other checks: type validation, pattern matching (see Week 9 for examples)

> **Security note:** Security-critical validation must be done **server-side** (Week 7+).

---

### Method 1 — Passing Data via URL Query Parameters

Query parameters are appended to the URL: `http://example.com/page?name=Jane&age=55`

```js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("register-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name.trim() === "" || email.trim() === "") {
      alert("Please enter your name and email.");
    } else {
      window.location.href = `welcome.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
    }
  });
});
```

**Key concepts:**

| Code | Meaning |
|---|---|
| `name.trim()` | Removes leading/trailing whitespace from the input string |
| `alert("...")` | Shows a browser popup message |
| `window.location.href = "..."` | Redirects the browser to a new URL |
| `` `welcome.html?name=${...}` `` | **Template literal** — embeds variables directly into a string using `${}` |
| `encodeURIComponent(name)` | Makes the value URL-safe (encodes spaces, `&`, `?`, etc.) |

**Retrieving parameters on `welcome.html`:**

```js
document.addEventListener("DOMContentLoaded", function () {
  const welcomeMessage = document.getElementById("welcome-message");

  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const email = params.get("email");

  if (welcomeMessage) {
    if (name) {
      welcomeMessage.textContent = `Welcome, ${name}! Your email is ${email}.`;
    } else {
      welcomeMessage.textContent = "Please register!";
    }
  }
});
```

> **Limitation:** Query parameters are **visible in the URL and browser history** — unsuitable for sensitive or complex data.

---

### Method 2 — Passing Data via `sessionStorage`

`sessionStorage` stores data for the **current browser tab session** only. Cleared when the tab is closed.

**`register.js` — storing data:**

```js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("register-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const user = { "name": name, "email": email };
    sessionStorage.setItem("user", JSON.stringify(user)); // store as JSON string
    window.location.href = "welcome.html";
  });
});
```

**`welcome.js` — retrieving data:**

```js
document.addEventListener("DOMContentLoaded", function () {
  const welcomeMessage = document.getElementById("welcome-message");
  const logoutButton = document.getElementById("logoutBtn");

  const user = JSON.parse(sessionStorage.getItem("user")); // parse back to object

  if (user) {
    welcomeMessage.textContent = `Welcome, ${user.name}! Your email is ${user.email}.`;
  } else {
    welcomeMessage.textContent = "Please register!";
  }

  logoutButton.addEventListener("click", function () {
    sessionStorage.clear(); // remove all session data on logout
    window.location.href = "logout.html";
  });
});
```

**Key methods:**

| Method | Description |
|---|---|
| `sessionStorage.setItem("key", value)` | Store a value (must be a string — use `JSON.stringify` for objects) |
| `sessionStorage.getItem("key")` | Retrieve a stored value |
| `JSON.stringify(obj)` | Convert a JS object to a JSON string |
| `JSON.parse(str)` | Convert a JSON string back to a JS object |
| `sessionStorage.clear()` | Remove **all** data from session storage (use on logout) |

---

### `localStorage` vs `sessionStorage`

| Feature | `sessionStorage` | `localStorage` |
|---|---|---|
| Persists after tab close | No | Yes |
| Persists after browser close | No | Yes |
| Persists after computer restart | No | Yes |
| Scope | Current tab only | All tabs, same origin |

---

## Managing Asynchronous Operations in JavaScript

### Why Async Matters

JavaScript is **single-threaded** — it can only do one thing at a time.

- **Synchronous** long operations (network requests, file I/O, timers) would **block everything** — the UI freezes, no user interaction possible
- **Asynchronous functions** allow other code to keep running while waiting
- The **order of completion is not guaranteed** → potential **race conditions**

---

### Callbacks

A **callback** is a function passed as an argument to another function, to be called later when an operation completes.

```js
function createAudioFileAsync(audioSettings, callback) {
  setTimeout(function () {
    callback(result); // called after 1 second
  }, 1000);
}
```

- `setTimeout` is a built-in **async function**
  - First argument: the function to run after the delay
  - Second argument: delay in milliseconds
- Suitable for: HTTP requests, database access, user input, timers

---

### Promises

A **Promise** is an object representing the **eventual completion or failure** of an async operation.

Instead of passing callbacks into functions, you **attach callbacks to the Promise** using:

| Method | When it runs |
|---|---|
| `.then(onFulfilled, onRejected)` | When the Promise settles (success or failure) |
| `.catch(onRejected)` | Only on rejection (failure) |
| `.finally(onFinally)` | Always runs regardless of outcome (no access to value/reason) |

```js
promise
  .then(value => console.log("Success:", value))
  .catch(error => console.error("Error:", error))
  .finally(() => console.log("Done"));
```

**Comparison — callback style vs Promise style:**

```js
// Callback style
createAudioFileAsync(audioSettings, successCallback, failureCallback);

// Promise style
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

---

### Chaining Promises

For sequential async operations where each depends on the previous result:

**Callback hell (avoid this):**

```js
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

**Promise chain (preferred):**

```js
doSomething()
  .then(result => doSomethingElse())       // doSomethingElse is independent of result
  .then(newResult => doThirdThing(newResult)) // doThirdThing depends on newResult
  .then(finalResult => console.log(finalResult))
  .catch(failureCallback);
```

- Each async function returns a Promise
- `.then()` waits for the Promise to resolve and passes the resolved value to the next `.then()`

---

### `async` / `await`

`async/await` is syntactic sugar built on top of Promises — cleaner and easier to read.

```js
async function runTasks() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch (err) {
    failureCallback(err);
  }
}
```

- `async` — declares an async function (always returns a Promise)
- `await` — pauses execution inside the function until the Promise resolves; only usable inside `async` functions
- `try/catch` — handles errors from any `await`ed operation

---

### Race Conditions

A **race condition** occurs when two or more async operations compete, and behaviour depends on which finishes first.

**Common causes:**
- Concurrent async calls modifying shared state
- Event handlers firing in unpredictable order
- DOM updates depending on async results
- `setTimeout`/`setInterval` conflicting with async code

**Strategies to avoid:**
- Use `await` to **sequence** async operations
- **Chain Promises** instead of firing them independently

---

## Styling with Plain CSS

Link your CSS file in the `<head>`:

```html
<head>
  <title>Account Page</title>
  <link rel="stylesheet" href="style.css" />
</head>
```

---

### Element Selector

Targets **all elements** of a given tag type:

```css
h1 {
  color: #0000FF;        /* text colour */
  font-size: 40px;       /* text size */
  text-align: center;    /* horizontal alignment within parent */
  margin-bottom: 20px;   /* space below the element */
}
```

**Descendant selector** — targets elements only when inside a specific parent:

```css
nav a {
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
  color: #007bff;
}
/* Styles <a> elements only when inside a <nav> element */
```

---

### Class Selector

Targets all elements sharing a **class name** (reusable across elements and pages):

```css
.content-container {
  background: white;
  padding: 30px 40px;            /* inner space (top/bottom left/right) */
  border-radius: 8px;            /* rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* shadow: x-offset y-offset blur colour */
  width: 600px;
  text-align: center;
}
```

---

### ID Selector

Targets **one unique element** by its `id`:

```css
.content-container #project-search {
  margin-bottom: 12px;  /* space below */
  padding: 6px;         /* inner space */
  width: 100%;          /* full width of parent */
}
/* Targets element with id="project-search" inside .content-container */
```

- IDs must be **unique per page**
- IDs can be reused **across different pages**

---

### CSS Specificity & Cascading Rules

CSS rules can override each other. The order of precedence:

1. **More specific selectors** win over less specific ones
   - ID > Class > Element
2. **Same specificity** → the **last rule** in the CSS file wins (source order)
3. `!important` overrides almost everything else:
   ```css
   color: blue !important;
   ```
4. Some properties **inherit** from parent elements unless explicitly overridden

---

## Tools & References

| Resource | Link |
|---|---|
| MDN HTML Elements | [developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements) |
| MDN CSS Reference | [developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) |
| Tailwind CSS | [tailwindcss.com](https://tailwindcss.com/) — modern utility-first CSS framework |
| Figma | [figma.com](https://www.figma.com/) — visual UI design tool that can generate HTML/CSS |

---

## Connections to Other Topics

- **Week 3:** Feature branches + PRs used to develop and submit each feature
- **Week 5:** Backend integration — `fetch()` API uses Promises/async-await
- **Week 7:** Server-side validation of form data (security-critical checks)
- **Week 9:** Advanced client-side validation with type/pattern checks
