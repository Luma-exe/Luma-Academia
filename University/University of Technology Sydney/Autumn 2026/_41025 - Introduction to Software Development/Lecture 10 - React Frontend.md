
> [!faq] About this Lecture 
> Class: 41025
> Subject: #introductionToSoftwareDevelopment
> Date: 30/04/2025 
> Topics: 

> [!info] Topic Overview This week introduces **React** as a replacement for the plain HTML/JS frontend. The focus is on component-based UI, client-side routing, hooks (`useState`, `useEffect`), and connecting to the existing backend via `fetch`.

---

## What is React?

- A **JavaScript library** for building user interfaces (not a full framework)
- Uses a **virtual DOM** — React manages its own in-memory representation of the DOM, then efficiently syncs changes to the real DOM (improves rendering performance)
- Promotes **reusable UI components** → modular, maintainable code
- Can be **gradually integrated** into existing projects — no need to refactor everything at once

> [!warning] Limitations React is **not** ideal for:
> 
> - Simple static websites (adds unnecessary complexity)
> - Server-Side Rendering (SSR) out of the box — requires Next.js or similar

---

## Installation & Setup

### Prerequisites

- Install **Node.js** → [nodejs.org/en/download](https://nodejs.org/en/download)
- This also installs **npm** (Node Package Manager) automatically

### Create a Vite + React Project

```bash
npm create vite@latest <project-name> --template react
```

> [!note] What is Vite? **Vite** is the development environment and build orchestrator. It:
> 
> - Provides a fast development server
> - Optimises the build output
> - Does **not** affect how you write core React code

### Install Dependencies

```bash
npm install --prefix ./frontend-react
```

- Reads `package.json` and installs everything in `dependencies` and `devDependencies` into `node_modules/`
- **Share** `package.json` and `package-lock.json` with teammates — **do not share** `node_modules/`
- `package-lock.json` locks exact package versions → ensures consistency across environments

### Run the Dev Server

```bash
npm --prefix ./frontend-react run dev
```

- Starts the project in **development mode** via the `"dev": "vite"` script defined in `package.json`

---

## Project Folder Structure

```
week11/
├── frontend-react/
│   ├── src/                        # All source code lives here
│   │   ├── main.jsx                # Runtime entry point — bootstraps React
│   │   ├── App.jsx                 # Root component — defines routes
│   │   ├── assets/
│   │   │   └── style.css           # Global stylesheet
│   │   └── components/             # Individual reusable UI components
│   ├── node_modules/               # Auto-generated; do NOT commit to git
│   ├── index.html                  # Browser entry point
│   ├── package.json                # Project config & dependency list
│   └── package-lock.json           # Locks exact dependency versions
└── backend/                        # Unchanged from previous weeks
```

---

## Key Files Explained

### `index.html` — Browser Entry Point

- The **first file** the browser loads
- Contains `<div id="root"></div>` — the mount point where React renders everything
- Points to React via:

```html
<script type="module" src="/src/main.jsx"></script>
```

- Vite looks for `index.html` in the **root folder**

---

### `main.jsx` — Runtime Entry Point

- Bootstraps React; the browser cannot understand JSX or ES module imports on its own
- Gets the DOM container from `index.html` and hands it to React

```jsx
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
```

|Element|Purpose|
|---|---|
|`document.getElementById('root')`|Finds the `<div id="root">` in `index.html`|
|`createRoot(...)`|Creates a React root — tells React where to render|
|`<App />`|Renders the top-level component|
|`<StrictMode>`|Development-only wrapper; detects unsafe lifecycles, deprecated APIs, etc.|

---

### `App.jsx` — Root Component & Router

- Defines **client-side routing** — mapping URL paths to components
- Uses `react-router-dom`

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/"                    element={<Home />} />
                <Route path="/login"               element={<Login />} />
                <Route path="/register"            element={<Register />} />
                <Route path="/welcome"             element={<Welcome />} />
                <Route path="/register-successful" element={<RegisterSuccessful />} />
                <Route path="/project-status"      element={<ProjectStatus />} />
                <Route path="/project-dashboard"   element={<ProjectDashboard />} />
                <Route path="/project-form"        element={<ProjectForm />} />
                <Route path="/logout"              element={<Logout />} />
            </Routes>
        </Router>
    );
}

export default App;
```

|Element|Purpose|
|---|---|
|`<Router>`|Wraps the app to enable client-side routing (no page reloads)|
|`<Routes>`|Container for all route definitions|
|`<Route path="..." element={...} />`|Maps a URL path to a React component|

---

## React Components

### Functional Component Structure

A component is a **reusable piece of UI** — a plain JavaScript function that returns JSX.

```jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    // --- State ---
    const [something, setSomething] = React.useState(''); // '' = string default; false = boolean default

    // --- Navigation ---
    const navigate = useNavigate();

    // --- Event Handlers (sync with user actions) ---
    const handleRegister = async (event) => {
        event.preventDefault();
        // form submission logic here
    };

    // --- Data Fetching ---
    const loadSomething = async () => {
        try {
            const response = await fetch("URL", { /* options */ });
            const data = await response.json();
            setSomething(data.something.someattribute);
        } catch (err) {
            console.error(err);
        }
    };

    // --- Side Effects ---
    React.useEffect(() => {
        loadSomething();
    }, [/* dependencies */]);

    // --- Render ---
    return (
        /* JSX goes here — must be wrapped in a single parent element */
    );
}

export default Register;
```

### Exports

```jsx
export default Register;
```

- `export` — makes this module shareable with other files
- `default` — marks this as the **primary export** of the file
- Import in `App.jsx` with:

```jsx
import Register from './components/Register.jsx';
```

---

## React Hooks

> [!important] Hook Rules
> 
> 1. Only call hooks at the **top level** — never inside loops, conditions, or nested functions
> 2. Only call hooks from **React function components**

### `useState` — State Management

```jsx
const [value, setValue] = React.useState(initialValue);
```

- Adds **state variables** to a functional component
- Provides a setter function to update the value
- When state updates, React **re-renders** the component
- Use when a component needs to **remember data across re-renders** that affects the UI

|Initial value|Use case|
|---|---|
|`''`|String (e.g., input field value)|
|`false`|Boolean (e.g., toggle visibility)|
|`[]`|Array (e.g., list of items)|
|`null`|Optional object|

### `useEffect` — Side Effects

```jsx
React.useEffect(() => {
    loadSomething();
}, [dependencies]);
```

- Runs **after** the component renders
- Used for: data fetching, manually modifying the DOM, subscriptions — anything that interacts with systems **outside** the current component
- The `dependencies` array controls when the effect re-runs:

|Dependencies|Behaviour|
|---|---|
|`[]` (empty array)|Runs **once** on mount only|
|`[val1, val2]`|Runs on mount AND whenever `val1` or `val2` changes|
|_(omitted)_|Runs after **every** render — avoid unless necessary|

> [!warning] Why wrap `loadSomething` in `useEffect`? Calling `loadSomething()` directly in the component body would trigger it on **every render**, causing infinite loops or duplicate API calls. `useEffect` prevents this.

---

## JSX Syntax Notes

### Single Parent Element

All returned JSX must be wrapped in **one** parent element:

```jsx
// Option 1 — div wrapper
return (
    <div>
        <h1>Hello</h1>
        <p>World</p>
    </div>
);

// Option 2 — Fragment shorthand (preferred; doesn't add DOM element)
return (
    <>
        <h1>Hello</h1>
        <p>World</p>
    </>
);
```

### Conditional Rendering

```jsx
{showLoginLink && <Link to='/login'>Already have an account? Login here</Link>}
```

- Uses JavaScript **logical AND** (`&&`)
- If `showLoginLink` is `true` → renders the `<Link>`
- If `showLoginLink` is `false` → renders nothing

### React `<Link>` (Client-Side Navigation)

```jsx
import { Link } from 'react-router-dom';

<Link to="/login">Go to Login</Link>
```

- Navigates without **reloading the page** (vs `<a href="...">` which does a full reload)
- Can link to both internal React routes and external URLs

### HTML → JSX Conversion

When porting existing `.html` files to `.jsx`:

- Use the tool: [transform.tools/html-to-jsx](https://transform.tools/html-to-jsx)
- **Remove** everything inside `<head></head>` — React components only return body content
- Wrap the return in `<>...</>` or a `<div>`
- Replace `class` with `className`, `for` with `htmlFor`, etc.

---

## Event Handlers

- Handle **user-initiated actions** (button clicks, form submissions, input changes)
- Defined as functions inside the component

```jsx
const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submit (page reload)
    // your logic here
};

return <button onClick={handleSubmit}>Submit</button>;
```

> [!note] `event.preventDefault()` Essential for form submissions — stops the browser's default behaviour of reloading the page on submit.

---

## Connecting to the Backend

Data fetching uses the standard `fetch` API inside an `async` function, called within `useEffect`:

```jsx
const loadProjects = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/projects', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        setProjects(data);           // update state → triggers re-render
    } catch (err) {
        console.error('Failed to load projects:', err);
    }
};

React.useEffect(() => {
    loadProjects();
}, []);              // [] = run once on component mount
```

---

## Key Concepts Summary

|Concept|What it does|
|---|---|
|**Component**|Reusable function that returns JSX|
|**Props**|Data passed into a component as function arguments|
|**State (`useState`)**|Data a component remembers across re-renders|
|**Effect (`useEffect`)**|Runs after render; used for fetching, subscriptions, DOM ops|
|**Virtual DOM**|React's in-memory DOM copy; diffs changes before updating real DOM|
|**JSX**|HTML-like syntax in JavaScript; compiled by Vite/Babel|
|**Client-side routing**|URL changes handled by JS, not the server|
|**`react-router-dom`**|Library providing `<Router>`, `<Routes>`, `<Route>`, `<Link>`, `useNavigate`|

---

## Tools & References

|Tool / Resource|Purpose|
|---|---|
|[nodejs.org](https://nodejs.org/en/download)|Install Node.js + npm|
|`npm create vite@latest`|Scaffold a new React project|
|[transform.tools/html-to-jsx](https://transform.tools/html-to-jsx)|Convert existing HTML to JSX|
|`npm run dev`|Start Vite development server|
|ESLint|Code quality checking (included in default Vite React template)|

---

## Connections to Other Topics

- **Backend (Express/Node)** — unchanged from previous weeks; React calls it via `fetch`
- **HTML/CSS** — converted to JSX; CSS files imported directly into components
- **REST API** — `fetch` calls map to the same endpoints built in earlier weeks
- **`package.json`** — same concept as in backend Node projects

---

> [!tip] Exam / Assignment Hints
> 
> - Know the **purpose of each file**: `index.html`, `main.jsx`, `App.jsx`, component files
> - Understand **why** `useEffect` wraps data fetches (prevents infinite loops)
> - Know the **two hook rules** (top-level only, function components only)
> - Be able to explain the difference between **state** (data that causes re-renders) and **props** (data passed in)
> - React is a **library**, not a framework — know what that distinction means