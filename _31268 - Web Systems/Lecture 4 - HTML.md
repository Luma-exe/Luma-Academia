
> [!faq] About this Lecture 
> Class: 31268
> Subject: #webSystems
> Date: 12/03/2025 
> Topics: #web #html #css

## The Web — Core Concepts

### Key Terminology

|Term|Definition|
|---|---|
|**WWW**|World Wide Web|
|**Server**|Central computer that provides information to multiple client computers|
|**Client**|Computer operated by a user that connects with a server every time it acquires information|
|**Network**|Group of interconnected computers exchanging information|
|**Internet**|Communication system connecting computers around the world|
|**Protocol**|Set of rules outlining how computers connect and communicate|
|**HTTP**|HyperText Transfer Protocol — allows devices to exchange information and media over the Internet|
|**Browser**|Software application that runs on computers, retrieves information, and displays content to users|
|**Website**|Set of web-pages identified by a unique domain name, running on a web-server, retrieved and displayed by a browser|
|**Domain Name**|Unique name that identifies a website and locates it on a server|
|**IP Address**|Unique identifier assigned to devices on a network, enabling communication over the Internet or local networks|

---

## How the Web Works

### Server Architecture Layers

A web server is composed of three layers:

- **Hardware layer** — motherboard, CPU, RAM, storage, power supply
- **OS layer** — Windows, Linux, or macOS running on the hardware
- **Program layer** — HTTP server / web server program running on the OS

### Client-Server Communication Flow

The browser and server communicate via a 5-step cycle:

```
1. Client types URL in browser         (e.g. http://index.html)
2. Browser builds an HTTP request
3. Server (HTTP server) accepts and reads the request
4. Server returns a response           (HTML page or data)
5. Browser reads and displays the response
```

> **Key concept:** Every time you visit a webpage, this full request-response cycle occurs.

### Web Content Management (3 Types)

Web servers handle requests and produce responses in three ways:

- **Static files** — serve pre-existing files (HTML, CSS, JS, Images, PDF, Video…)
- **Dynamic generation** — generate files programmatically (PHP, Spring Boot, …)
- **CMS** — generate files via Content Management Systems (Joomla, Drupal, WordPress…)

---

## Web Page Content Types

### Plain Text

- Simple, unformatted text files
- Served directly to the browser or downloadable via a link
- _Example:_ A file listing all European cities

### Images

- Graphics files in formats like JPEG, PNG, or GIF
- Embedded in a web page or downloadable via a link
- _Example:_ `https://example.com/image.jpg`

### Audio and Video

- Multimedia formats: MP4, AVI (video) or MP3, WAV (audio)
- Embedded in a web page or downloadable via a link
- _Example:_

html

```html
<video src="video.mp4" controls></video>
```

### Binary

- Non-text files: PDFs, executables, or compressed files
- May display in-browser (PDF) or prompt a download
- _Example:_ `https://example.com/report.pdf`

### Structured Markup Languages

#### XML (eXtensible Markup Language)

- Used to **structure data** for exchange between server and web applications

xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<students>
    <student>
        <id>1</id>
        <name>John Doe</name>
        <major>Computer Science</major>
    </student>
    <student>
        <id>2</id>
        <name>Jane Smith</name>
        <major>Biology</major>
    </student>
</students>
```

#### JSON (JavaScript Object Notation)

- Lightweight data-interchange format
- Mostly used in **APIs** for data exchange between server and web applications

json

```json
{
    "students": [
        {
            "id": 1,
            "name": "John Doe",
            "major": "Computer Science"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "major": "Biology"
        }
    ]
}
```

### CSS (Cascading Style Sheets)

- Defines the **layout and style** of HTML content
- Often linked externally to the HTML file
- Controls: colours, borders, padding, margins, positioning, etc.

### JavaScript (JS)

- Adds **interactive features** to web pages
- Examples: animations, form validations, dynamic content
- Executed on the **client side** (in the browser)

---

## XHTML

**XHTML** (Extensible Hypertext Markup Language) combines HTML and XML for more rigorous, structured web documents.

### XHTML Key Characteristics

|Characteristic|Description|
|---|---|
|**XML Syntax Compliance**|All tags must be properly nested, closed, and written in lowercase|
|**Well-formedness & Structure**|Documents must be well-formed; requires a DOCTYPE declaration|
|**Attribute Value Quotation**|All attribute values must be enclosed in quotes|
|**Self-Closing Tags**|Empty tags like `<br>` must be self-closed: `<br />`|
|**Error Handling**|More stringent than HTML — improperly formed documents may not render|
|**Backward Compatibility**|Compatible with HTML while supporting XML namespaces and internationalisation|

### XHTML Practical Example — XML Data Parsed into HTML Table

html

```html
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Student Data</title>
</head>
<body>
    <h1>Student Information</h1>
    <script type="text/javascript">
        var xmlData = `
            <students>
                <student>
                    <name>John Doe</name>
                    <age>20</age>
                    <grade>D</grade>
                </student>
                <student>
                    <name>Jane Smith</name>
                    <age>22</age>
                    <grade>HD</grade>
                </student>
            </students>`;

        function parseXML(xml) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xml, "text/xml");
            var students = xmlDoc.getElementsByTagName("student");
            var tableContent = "";

            for (var i = 0; i < students.length; i++) {
                var name  = students[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                var age   = students[i].getElementsByTagName("age")[0].childNodes[0].nodeValue;
                var grade = students[i].getElementsByTagName("grade")[0].childNodes[0].nodeValue;
                tableContent += `<tr><td>${name}</td><td>${age}</td><td>${grade}</td></tr>`;
            }
            document.getElementById("studentTable").innerHTML = tableContent;
        }

        window.onload = function() { parseXML(xmlData); };
    </script>

    <table border="1">
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
        </tr>
        <tbody id="studentTable"></tbody>
    </table>
</body>
</html>
```

> **Key points of this example:**
> 
> - The document follows XHTML strict rules (DOCTYPE, lowercase tags, closed tags)
> - `parseXML()` processes XML data embedded directly in the HTML via a JS string
> - `DOMParser` parses the XML string into a traversable document
> - Data is dynamically injected into a table via `innerHTML`

---

## Web Development & HTML

**Web development** involves the creation and maintenance of websites and web applications, encompassing web design, coding, and server management.

### HTML Key Characteristics

|Characteristic|Description|
|---|---|
|**Structural Markup**|Organises content using headings, paragraphs, etc.|
|**Semantic Tags**|`<header>`, `<footer>`, `<article>` enhance accessibility|
|**Hyperlinks**|Enables navigation between pages and external sites|
|**Multimedia Support**|Embeds images, audio, and video|
|**Forms and Input**|Text fields, checkboxes, buttons for user interaction|
|**Cross-Browser**|Consistent rendering across different browsers|

---

## HTML Structure

### Minimal Valid HTML Page

html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
</head>
<body>
    <h1>Welcome to Web Systems</h1>
</body>
</html>
```

### Element Syntax

html

```html
<tagname>Content goes here...</tagname>
```

Every element: **start-tag → content → end-tag**

---

## HTML Basic Elements

### Heading Tags (6 levels, largest to smallest)

html

```html
<h1>Heading size 1</h1>
<h2>Heading size 2</h2>
<h3>Heading size 3</h3>
<h4>Heading size 4</h4>
<h5>Heading size 5</h5>
<h6>Heading size 6</h6>
```

### Text Content Tags

html

```html
<p>Text paragraph</p>
<pre>Pre-formatted paragraph — preserves whitespace and line breaks</pre>
<br/>             <!-- Self-closing: creates an empty break line -->
<title>Page title</title>
```

> **`<pre>` tag:** Preserves formatted style exactly as written — useful for code, spacing-sensitive text, or ASCII art.

---

## HTML Text Formatting

html

```html
<b>bold text</b>
<u>underscore text</u>
<i>Italic text</i>
<strong>Important text</strong>    <!-- Semantic bold -->
<em>Emphasized text</em>           <!-- Semantic italic -->
<mark>Marked text</mark>           <!-- Yellow highlight -->
<small>Small text</small>
<del>Deleted text</del>            <!-- Strikethrough -->
<ins>Inserted text</ins>           <!-- Underlined inserted content -->
<sub>Subscript text</sub>          <!-- e.g. X[1] renders as X₁ -->
<sup>Superscript text</sup>        <!-- e.g. Y3 renders as Y³ -->
```

### Visual Output Summary

|Tag|Renders As|
|---|---|
|`<b>`|**bold**|
|`<i>`|_italic_|
|`<u>`|underlined|
|`<strong>`|**Important**|
|`<em>`|_Emphasized_|
|`<mark>`|highlighted|
|`<small>`|small text|
|`<del>`|~~deleted~~|
|`<ins>`|inserted (underlined)|
|`<sub>`|X1X_{1} X1​|
|`<sup>`|Y3Y^{3} Y3|

---

## HTML Lists

### Unordered List (bullet points)

html

```html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>
```

### Ordered List (numbered)

html

```html
<ol>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ol>
```

### Description List (term + definition)

html

```html
<dl>
    <dt>Car</dt>
        <dd>- BMW</dd>
        <dd>- Audi</dd>
    <dt>Truck</dt>
        <dd>- Volvo</dd>
</dl>
```

|Tag|Role|
|---|---|
|`<dl>`|Description list container|
|`<dt>`|Description term (the label)|
|`<dd>`|Description detail / definition|

---

## HTML Tables

### Table Element Reference

|Tag / Attribute|Purpose|
|---|---|
|`<table>`|Creates the table|
|`<thead>`|Header section — groups header rows|
|`<tbody>`|Main body section — groups data rows|
|`<tfoot>`|Footer section — often totals or closing remarks|
|`<th>`|Header cell — **bold and centred** by default|
|`<tr>`|Table row|
|`<td>`|Standard data cell|
|`<caption>`|Title/label displayed above the table|
|`colspan="N"`|Extends a cell across N columns (merges cells)|

### Full Example — Student Grades Table

html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Information</title>
</head>
<body>
    <table border="1" width="30%">
        <caption>Student Grades Table</caption>
        <thead>
            <tr>
                <th colspan="2">Name</th>   <!-- spans 2 columns -->
                <th>Age</th>
                <th>Grade</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2">John Doe</td>
                <td>20</td>
                <td>A</td>
            </tr>
            <tr>
                <td colspan="2">Jane Smith</td>
                <td>22</td>
                <td>B</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4">End of Student Information</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```

> **Key points:**
> 
> - `border="1"` adds visible cell borders
> - `width="30%"` sets table width relative to the page
> - `colspan="2"` merges two columns into one cell
> - `<tfoot>` with `colspan="4"` spans all 4 columns

---

## HTML Div

The `<div>` tag is a **container element** used to group content for styling or scripting.

### Div Key Characteristics

|Characteristic|Description|
|---|---|
|**Block-Level Element**|Starts on new line; takes full available width|
|**Styling Capabilities**|Styled with CSS: background colour, borders, padding, margins|
|**Content Organisation**|Groups related content; keeps HTML manageable|
|**JavaScript Manipulation**|Can be targeted with JS to show/hide sections dynamically|
|**Flexibility**|Can hold any HTML content — text, images, forms, nested elements|
|**No Semantic Meaning**|Unlike `<header>`, `<footer>`, `<article>` — `<div>` conveys no document role|

### 4-Step Process for Using Div with CSS

```
Step 1: Create a parent div-container
Step 2: Add children div-tags inside the parent
Step 3: Define styles in CSS (<style> tag or external .css file)
Step 4: Link div-containers to CSS using class or id attributes
```

### Traffic Lights Example

html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vertical Circles</title>
    <style>
        .container {
            background-color: black;
            width: 150px;
            padding: 20px;
        }
        .circle {
            width: 100px;
            height: 100px;
            border-radius: 50%;    /* makes div circular */
            margin: 10px auto;
        }
        .circle1 { background-color: red; }
        .circle2 { background-color: orange; }
        .circle3 { background-color: green; }
    </style>
</head>
<body>
    <div class="container">
        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div>
    </div>
</body>
</html>
```

> **Note:** CSS `border-radius: 50%` on a square `<div>` produces a circle.

---

## HTML Links (Hyperlinks)

### Syntax

html

```html
<a href="URL">Click me</a>
```

### Best Practice — Web Application Navigation

- Landing page should always be `index.html`
- Use links from `index.html` to navigate to other pages
- **Every page** should have a "go back home" link to `index.html`

### Multi-Page Example

**index.html:**

html

```html
<h1>Home page</h1>
<ul>
    <li><a href="page1.html">Go to page 1</a></li>
    <li><a href="page2.html">Go to page 2</a></li>
</ul>
```

**page1.html:**

html

```html
<h1>This is page 1</h1>
<p><a href="index.html">Go back home</a></p>
```

**page2.html:**

html

```html
<h1>This is page 2</h1>
<p><a href="index.html">Go back home</a></p>
```

---

## HTML Images

### Syntax

html

```html
<img src="image_or_URL" alt="Alternative display text" width="…" height="…"/>
```

|Attribute|Purpose|
|---|---|
|`src`|Path to the image file or URL of the image|
|`alt`|Text shown if image fails to load; used by screen readers|
|`width`|Width in pixels or percentage|
|`height`|Height in pixels or percentage|

### Example

html

```html
<body>
    <h1>World Cup Celebration</h1>
    <img src="World-Cup.jpg" alt="World Cup Trophy" width="300">
    <p>This is an iconic image of the World Cup trophy.</p>
</body>
```

> **Note:** `<img>` is a **self-closing** tag — no `</img>` closing tag needed.

---

## HTML Head Container

The `<head>` section sets up **metadata** and **linked resources** that apply across the entire page.

### Head Elements Reference

|Element|Purpose|
|---|---|
|`<title>`|Sets browser tab/title bar text|
|`<meta charset="UTF-8">`|Defines character encoding — ensures correct text display|
|`<meta name="description">`|Page description for search engine previews|
|`<link rel="stylesheet">`|Links to an external CSS file|
|`<script>`|Embeds or links JavaScript files|
|`<base>`|Sets a base URL for all relative URLs on the page|

### Example Head Section

html

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A student information web page">
    <title>Student Portal</title>
    <link rel="stylesheet" href="styles.css">
    <script src="app.js"></script>
</head>
```

> **Instructor note:** The next lecture covers CSS in detail — how CSS designs HTML pages and how `<link rel="stylesheet">` connects an external `.css` file to HTML.

---

## Quick Reference — All Common HTML Tags

html

```html
<!-- Document Structure -->
<!DOCTYPE html>
<html lang="en">...</html>
<head>...</head>
<body>...</body>

<!-- Headings (h1 = largest, h6 = smallest) -->
<h1> <h2> <h3> <h4> <h5> <h6>

<!-- Text Content -->
<p>paragraph</p>
<pre>preformatted text</pre>
<br/>   <!-- line break (self-closing) -->

<!-- Formatting -->
<b>     <u>     <i>     <strong>  <em>
<mark>  <small> <del>   <ins>
<sub>   <sup>

<!-- Lists -->
<ul><li>...</li></ul>                      <!-- unordered -->
<ol><li>...</li></ol>                      <!-- ordered -->
<dl><dt>term</dt><dd>detail</dd></dl>      <!-- description -->

<!-- Tables -->
<table border="1" width="X%">
    <caption>Title</caption>
    <thead><tr><th colspan="N">Header</th></tr></thead>
    <tbody><tr><td>Data</td></tr></tbody>
    <tfoot><tr><td colspan="N">Footer</td></tr></tfoot>
</table>

<!-- Layout / Grouping -->
<div class="name">...</div>

<!-- Links -->
<a href="URL">link text</a>

<!-- Images (self-closing) -->
<img src="file.jpg" alt="description" width="300"/>

<!-- Head-only elements -->
<title>  <meta>  <link rel="stylesheet" href="...">  <script src="...">  <base>
```

---

## Connections to Other Topics

- **CSS** _(next lecture)_ — styling and layout; connected via `<link rel="stylesheet" href="styles.css">`
- **JavaScript** — client-side interactivity; embedded via `<script>` or linked externally
- **XML / JSON** — structured data formats used with APIs and web applications
- **HTTP / Web Servers** — the protocol and infrastructure that delivers HTML to browsers
- **XHTML** — stricter, XML-compliant version of HTML; important for understanding web standards

---

## Resources

|Resource|URL|
|---|---|
|Australian Signals Directorate (ACSC)|[https://www.cyber.gov.au/learn-basics](https://www.cyber.gov.au/learn-basics)|
|W3Schools HTML Tutorial|[https://www.w3schools.com/html](https://www.w3schools.com/html)|
|MDN — Structuring HTML|[https://developer.mozilla.org/en-US/docs/Learn/HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)|