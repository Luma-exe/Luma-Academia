
> [!faq] About this Lecture 
> Class: 31268
> Subject: #webSystems
> Date: 19/03/2025 
> Topics: #web #html #css

## What is CSS?

- **CSS (Cascading Style Sheets)** — a styling language used to control the appearance and layout of HTML elements on a webpage
- Enables consistent, reusable styling across multiple pages
- Enhances both development efficiency and user experience
- Maintained primarily by the **World Wide Web Consortium (W3C)**

---

## CSS Version History

|Version|Year|Status|Key Features|
|---|---|---|---|
|CSS1|1996|Obsolete|Basic styles: fonts, colours, text alignment|
|CSS2|1998|Obsolete|Media types, positioning, advanced styling|
|CSS2.1|2011|Obsolete|Refined CSS2, clarified specs, fixed inconsistencies|
|CSS3|2012|**Current**|Animations, transitions, media queries, flexible/responsive layouts|
|CSS4|N/A|Proposed|Advanced selectors, not fully specified or widely adopted|

> CSS3 is **modularized** — enabling continuous updates and new features independently per module

---

## Why Separate Structure from Presentation?

- **Best Practice → Separate HTML structure from CSS presentation**
- HTML alone is insufficient for organising and designing complex layouts

### Reasons for Separation

- Variety of **devices** with different resolutions (desktop, mobile, tablet)
- Variety of **rendering methods** (printing, parsing structured data via XHTML/XML)
- Variety of **media types** (text, PDF, images, audio, video)
- Variety of **access methods** (AI text-to-voice, streaming video, embedded PDF)

### Benefits of Using CSS

|Benefit|Description|
|---|---|
|**Separation of Concerns**|HTML (structure) and CSS (design) kept separate → easier management|
|**Improved Maintainability**|One CSS file change updates styling across all linked pages|
|**Consistency Across Pages**|Uniform look and feel → better user experience|
|**Accessibility & Flexibility**|Responsive design adapts to various screen sizes|
|**Enhanced Performance**|External CSS files are cached by browsers → downloaded only once|
|**Device-Specific Styles**|Media queries define styles per device/resolution|

---

## CSS Governance & Contributors

- **W3C** — primary standards body; ensures cross-browser and cross-device compatibility
- **Browser Vendors** — Google (Chrome), Mozilla (Firefox), Apple (Safari), Microsoft (Edge) implement specs and propose features
- **Web Developers** — shape CSS via feedback, bug reports, frameworks/libraries (e.g. Bootstrap)
- **Community Contributions** — open-source tools, preprocessors (SASS, LESS), frameworks

---

## HTML Structure vs. Presentation

html

```html
<!DOCTYPE html>          <!-- Tells browser to interpret as HTML5 -->
<html>
  <head>
    <style>
      /* 1. Embedded CSS */
    </style>
    <link rel="stylesheet" href="styles.css">  <!-- 2. Linked CSS -->
  </head>
  <body>
    <h1 style="color: red;">Heading</h1>  <!-- 3. Inline CSS -->
  </body>
</html>
```

|Element|Role|
|---|---|
|`<!DOCTYPE html>`|Declares HTML5; ensures consistent browser display|
|`<html>`|Root element wrapping all content|
|`<head>`|Contains metadata and external resource links (CSS, etc.)|
|`<body>`|Main visible content: text, images, videos, links|

---

## CSS Syntax

css

```css
Selector {
    property: value;
    property: value;
    /* ... */
}
```

- **Selector** — specifies which HTML element(s) to style (by tag, class, ID, attribute, or position)
- **Declaration Block** — one or more `property: value` pairs inside `{}`
- **Property** — what to style (e.g. `color`, `font-size`, `margin`)
- **Value** — how to style it (e.g. `red`, `16px`, `10px`)

---

## CSS Selectors

Four main types:

### Tag Selector

- Targets **all instances** of a specific HTML tag

css

```css
p {
    color: #264653;
    font-size: 18px;
}
```

html

```html
<p>This text is styled using p-tag CSS rules</p>
<p>p-tag CSS rules apply to all p-tags in the web page</p>
```

### Class Selector

- Targets elements with a specific `class` attribute
- Prefixed with a **dot** `.`
- Can be applied to **multiple different tags**

css

```css
.highlight {
    color: yellow;
    font-size: 18px;
}
```

html

```html
<h1 class="highlight">Styled using class selector</h1>
<p class="highlight">Any HTML tag can use the class attribute</p>
```

### ID Selector

- Targets element(s) with a specific `id` attribute
- Prefixed with a **hash** `#`
- Should be used for **unique elements**

css

```css
#header {
    font-size: 24px;
    color: blue;
}
```

html

```html
<h1 id="header">Styled using # id header</h1>
<p id="header">Any HTML tag can use the id attribute</p>
```

### Inline Selector

- Directly styles an element using the `style` attribute within its HTML tag

html

```html
<h1 style="color: red;">Inline Styled Heading</h1>
<p style="color: blue; font-size: 18px;">This is inline-styled text.</p>
```

---

## Nested Selectors

- CSS allows targeting elements **within** specific elements by creating a hierarchy
- Nesting follows the HTML document structure

css

```css
/* Tag Selector */
h1 {
    color: blue;
    font-size: 24px;
}

/* Class nested within another class */
.container .intro {
    color: green;
    font-size: 18px;
}

/* ID Selector with nested class */
#unique-box {
    background-color: lightgray;
    padding: 10px;
}

#unique-box .content {
    color: darkblue;
}

#unique-box .highlight {
    color: red;
    font-weight: bold;
}
```

> **Rule of Thumb:** `inline` > `id` > `class` — and styles apply to the **innermost** tag

---

## CSS Cascade — Order of Precedence

When conflicting rules exist, the **cascade** determines which style wins:

|Priority|Source|
|---|---|
|1 (Lowest)|Browser Default settings|
|2|User settings in Browser|
|3|Linked External CSS|
|4|Imported CSS|
|5|Embedded CSS|
|6|Inline CSS|
|7 (Highest)|HTML Tag attributes|

> ⚠️ Developers must consider precedence order when designing HTML with nested tags

---

## Implementing CSS — Four Methods

### 1. Inline CSS

- Directly adds CSS styles within the `style` attribute of an HTML tag
- **Use case:** quick, one-off element adjustments

html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home Page</title>
</head>
<body>
    <h1 style="color: red;">Inline Styled Heading</h1>
    <p style="color: blue; font-size: 18px;">This is inline-styled text.</p>
</body>
</html>
```

### 2. Embedded (Internal) CSS

- Defines CSS within a `<style>` tag inside `<head>`
- Styles apply to **that page only**

html

```html
<head>
    <style>
        /* Tag selectors */
        p {
            font-size: 16px;
            color: #333;
        }
        span {
            color: #555;
            font-weight: bold;
            background-color: yellow;
        }
        /* Class selector */
        .pagelink {
            color: #4CAF50;
            font-weight: bold;
        }
        /* ID selector */
        #submitBtn {
            background-color: #008CBA;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
        }
    </style>
</head>
```

### 3. Linked (External) CSS ✅ Recommended

- Links to an external `.css` file using `<link>` in `<head>`
- Ideal for applying the same styles **across multiple pages**
- **Best practice** for styling websites and improving CSS code reusability

html

```html
<head>
    <link rel="stylesheet" href="css/index.css">
</head>
```

css

```css
/* css/index.css */
body {
    font-family: 'Roboto', sans-serif;
    background-color: #4f4f50;
    margin: 0;
    padding: 20px;
}
p {
    font-size: 16px;
    color: white;
}
h1 {
    color: white;
}
```

### 4. Imported CSS

- Imports one CSS file into another using `@import`
- Useful for **organising styles**, but typically **slower in performance**
- Only the main CSS file needs to be linked to HTML

css

```css
/* index.css */
@import url('style.css');

p {
    font-size: 22px;
    color: white;
    font-weight: bold;
}
```

css

```css
/* style.css */
body {
    background-color: darkgray;
    font-family: Arial, sans-serif;
}
h1 {
    color: cyan;
}
```

html

```html
<!-- HTML only links index.css -->
<link rel="stylesheet" href="css/index.css">
```

---

## CSS Examples

### Display Property

Controls how elements are rendered on the webpage:

|Value|Behaviour|
|---|---|
|`block`|Full width available; starts on a new line|
|`inline`|Only takes necessary width; no new line|
|`inline-block`|Like inline, but allows setting width and height|
|`none`|Element not displayed; takes up no space|

css

```css
.container {
    padding: 20px;
    background-color: #f0f0f0;
}

.block-div {
    display: block;         /* Takes full width, starts on new line */
    background-color: lightcoral;
    padding: 10px;
    margin: 10px 0;
}

.inline-span {
    display: inline;        /* Only takes up as much width as necessary */
    color: blue;
    font-weight: bold;
}
```

html

```html
<div class="container">
    <h1>Display Property Example</h1>
    <p>This is a <span class="inline-span">span</span> inside a paragraph.</p>
    <div class="block-div">This is a block div.</div>
    <p>This paragraph follows the block div.</p>
</div>
```

---

### Position Property

Controls how elements are placed in the document flow:

|Value|Behaviour|
|---|---|
|`static`|Default; follows normal document flow|
|`relative`|Offset from its normal position; doesn't affect other elements|
|`absolute`|Removed from flow; positioned relative to nearest positioned ancestor|
|`fixed`|Removed from flow; positioned relative to viewport; stays fixed on scroll|
|`sticky`|Toggles between relative and fixed depending on scroll position|

css

```css
.relative-box {
    position: relative;
    background-color: lightblue;
    width: 200px;
    height: 100px;
    margin: 20px;
}

.absolute-box {
    position: absolute;
    background-color: lightgreen;
    width: 200px;
    height: 100px;
    top: 50px;
    left: 20px;
}

.fixed-box {
    position: fixed;
    background-color: lightcoral;
    width: 200px;
    height: 100px;
    bottom: 20px;
    left: 20px;
}

.sticky-box {
    position: sticky;
    background-color: rgb(233, 233, 2);
    width: 200px;
    height: 100px;
    top: 0;
}
```

**Behaviour Summary:**

- **Relative** → adjusts without affecting other elements
- **Absolute** → overlaps other elements; anchored to nearest positioned ancestor (or `body`)
- **Fixed** → always visible at the same viewport position (e.g. bottom-left corner)
- **Sticky** → behaves as relative until it hits the viewport edge, then becomes fixed

---

### Navigation Bar

A nav bar is a key UI element providing quick access to site sections. Typically appears at the top or side of the page.

**Key Points:**

- **Purpose** — enhances UX with quick access to sections
- **Structure** — built using HTML lists (`<ul>` and `<li>`)
- **Design** — visually consistent with the site theme
- **Responsiveness** — adapts to devices; may use collapsible menus
- **Accessibility** — usable for all users including those with disabilities

css

```css
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.navbar {
    background-color: #333;
}

.navbar ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.navbar li {
    display: inline;     /* Horizontal layout */
}

.navbar a {
    color: white;
    text-decoration: none;
    padding: 14px 20px;
    display: inline-block;   /* Makes entire area clickable */
}

.navbar a:hover {
    background-color: #555;
}
```

html

````html
<nav class="navbar">
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
```

> Can be enhanced with drop-down menus or mobile responsiveness

---

### Effects and Animation

- Example project: **Animated Traffic Lights** using HTML + CSS + JS
- Source: [github.com/Georges034302/trafficlights](https://github.com/Georges034302/trafficlights)
- Project structure:
```
trafficlights/
├── css/
│   └── index.css
├── js/
│   └── index.js
└── index.html
````

---

## Key Terminology Reference

|Term|Definition|
|---|---|
|**HTTP**|Hypertext Transfer Protocol — allows devices to exchange information over the internet|
|**HTML**|HyperText Markup Language — standard language for creating web pages|
|**CSS**|Cascading Style Sheets — defines layout and style of HTML content|
|**XML**|Markup language for structured data exchange between server and web apps|
|**JSON**|Lightweight data-interchange format; used in APIs|
|**XHTML**|Combines HTML and XML for more rigorous web documents|
|**`<div>`**|Container tag to group content for styling or scripting|
|**`<head>`**|HTML container for metadata and resource links|
|**Hyperlink**|Used to navigate between web pages|

---

## Further Resources

|Resource|URL|
|---|---|
|W3Schools CSS Tutorial|[https://www.w3schools.com/css/](https://www.w3schools.com/css/)|
|MDN CSS Tutorial|[https://developer.mozilla.org/en-US/docs/Learn/CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)|
|Web Dev CSS|[https://web.dev/learn/css](https://web.dev/learn/css)|

---

## Connections to Other Topics

- **HTML** → structure that CSS styles
- **JavaScript** → adds interactivity to HTML/CSS pages (see Traffic Lights example)
- **Bootstrap** → CSS framework built on top of these fundamentals
- **SASS / LESS** → CSS preprocessors that extend CSS functionality
- **Responsive Design** → uses CSS media queries (introduced in CSS3)
- **React / Vite** → modern frontend tools that still rely on CSS fundamentals (e.g. Tailwind CSS)