
> [!faq] About this Lecture 
> Class: 31260
> Subject: #fundamentalsOfInteractionDesign 
> Date: 30/04/2025 
> Topics: #design 

## Overview

This lecture covers two main topics:

- **Part 1:** Effects and issues caused by bad design — specifically Information Overload, Navigation Mystery, and Friction in user interaction
- **Part 2:** AT2 Practical examination details, rules, and preparation guidance

> "Good design, when it's done well, becomes invisible. It's only when it's done poorly that we notice it." — Jared Spool, Usability Expert and Researcher

---

# Part 1 — Overload, Mystery & Friction

## Why Bad Design Matters

- A poorly designed interface is often the **direct cause of user error and low productivity**
- Users judge a system **by its interface rather than its functionality** — even if the system works well underneath
- Bad interface design is a primary reason why **software systems are abandoned or never used**

The three main manifestations of poor design covered in this lecture:

- Information Overload
- Navigation Mystery
- Friction in user interaction

> **Key principle:** Whether a design choice violates or complies with design/usability principles **depends on the context of use** — context determines whether something is a flaw or a feature.

---

## Information Overload

### Definition

> An **excess of information** available to a user when they are trying to complete a task or make a decision.

- Hinders the decision-making process, resulting in limited or no decision being made
- Designers have a responsibility to **prevent** information overload from affecting user experience

### Consequences

- Causes **cognitive overload** — users cannot efficiently process everything presented
- Leads to **information anxiety** — a form of stress caused not only by too much information, but also by **large amounts of irrelevant information**
- Users may abandon the task entirely or make poor decisions

### Real-World Example

- **Sydney parking signs** — cluttered with rules, time ranges, and conditions stacked together, making it extremely difficult to determine whether parking is permitted at a given moment
- Redesigned by Nikki Sylianteng into a visual, colour-coded format that communicates the same information far more clearly

### When Might Overload Be Intentional or Useful?

- In some contexts, comprehensive information display is necessary (e.g. professional dashboards, air traffic control, medical monitoring)
- **Discussion point:** Can you think of situations where showing a large volume of information is actually the right design choice?

### Best Practices — Avoiding Information Overload

**Understand users first:**

- Determine what your users actually need before deciding what to display

**Use visuals over text when conveying large amounts of information:**

- Charts, icons, and diagrams communicate faster than paragraphs

**Apply Reduce Cognitive Load (Preece, Sommerville & Macaulay, 1994 — Usability Design Principles):**

|Technique|Description|
|---|---|
|**Chunking (Categorisation)**|Group related items together so users process clusters, not individual items|
|**Progressive Disclosure**|Show only what is needed at each step; reveal more on demand|
|**Eliminate Non-Essential Details**|Strip away anything that doesn't serve the user's current goal|
|**Avoid Visual Clutter**|Whitespace, alignment, and hierarchy keep interfaces readable|
|**Build on Existing Knowledge**|Leverage familiarity — use conventions users already understand|

---

## Navigation Mystery

### Definition

> When the **destination or result of an action is not disclosed** until the user fully interacts with a trigger element (e.g. a link, button, or icon).

- Reduces **discoverability** of navigation elements
- Adds **cognitive load** — users must guess what will happen before they commit to an action
- Violates Norman's principle of **visibility** and the usability principle of **learnability**

### Real-World Example — Bad Mystery

- An **architecture firm website** where the entire home page is a blank screen with no labels — a cursor appears on hover but nothing else indicates what clicking will do
- Users have no idea where they will be taken or what will be shown

### Real-World Example — Good Practice

- **Interaction Design Foundation course cards** — links are clearly labelled with "View Course" buttons, and hover states show "Go to Course"
- Most well-designed GUIs follow this convention consistently

### When Is Mystery Useful or Expected?

Mystery can be a **deliberate and positive design choice** in the right context:

- **Open world games** (e.g. GTA, Gangstar Vegas) — designed as non-linear environments where players discover content through exploration
- The mystery of "what's around this corner?" is a core part of the experience and **user expectation**
- **Easter eggs** in software, surprise rewards in games, or mystery box mechanics all leverage mystery intentionally

> The key distinction: mystery is acceptable when users **expect and want** it, and when it does not prevent them from completing their primary goal.

### Best Practices — Avoiding Navigation Mystery

- **Always label your links** — users dislike clicking mystery links because it adds cognitive load
- Use clear, descriptive button text (e.g. "Download PDF" not just "Click here")
- Provide **hover states** or **tooltips** that reveal destination or action before commitment
- **Exception:** Use mystery intentionally only when it is a core part of the user experience and the user has opted into that experience (e.g. games, interactive art)

---

## Friction in User Interaction

### Definition

> **Anything that prevents users from accomplishing their goals or getting things done.**

### Bad Friction

- Presents critical violations of Design and Usability Principles
- Examples of bad friction:
    - Hard-to-locate buttons
    - Complicated checkout forms with too many steps
    - Unnecessary animations that are time-consuming, distracting, or physically in the way
- Usually results from **"overdesign"** — prioritising catchy interaction styles, aesthetics, or new technologies over usability
- Leads to **detrimental UX** even if the individual design choices seem interesting in isolation

**Real-World Example — Bad Friction:**

- **KLM's iFly50.com** — a travel destination exploration site that required users to scroll sideways and click-and-hold to display results, making the experience exhausting and unintuitive

### Positive Friction

> **Positive friction** is intentionally added friction that **dissuades users from performing an action** or **prevents them from making bad decisions**.

- Confirmation dialogs before irreversible actions (e.g. "Are you sure you want to delete?")
- Notice that in well-designed confirmation dialogs, the **most prominent/safe option** (e.g. Cancel) is visually dominant, not the destructive action
- Forces the user to pause and reconsider: _"Was this really what I wanted to do?"_

### Friction in Game Design

- Game designers **deliberately use friction** to foster exploration and learning
- Friction transforms from pain points into **exciting challenges** — obstacles, puzzles, difficulty curves
- Without friction, games would be trivial and unengaging: _"Where would the fun be, otherwise?"_

> **Important for AT2:** In the Practical, you will be asked to identify where Design Principles have been **purposely violated** to add friction to a game — making it more interesting and engaging. Understanding the difference between bad friction and good/intentional friction is essential.

### When to Use Friction

|Type|Context|Effect|
|---|---|---|
|**Bad friction**|Unintentional, results from poor design choices|Frustrates users, reduces task completion|
|**Positive friction**|Protecting users from irreversible or harmful actions|Prompts reflection, prevents errors|
|**Game friction**|Deliberate design for challenge and engagement|Creates enjoyment, exploration, learning|

> Use **extreme caution** when purposely adding friction — it must serve a clear user benefit. Friction added for aesthetics or novelty is almost always bad friction.

---

## Summary — The Three Issues

|Issue|Core Problem|Design Principle Violated|Fix|
|---|---|---|---|
|**Information Overload**|Too much or irrelevant information|Reduce Cognitive Load|Chunk, progressive disclosure, eliminate clutter|
|**Navigation Mystery**|Undisclosed link/action destinations|Visibility, Learnability|Label all links; clear affordances|
|**Bad Friction**|Obstacles preventing goal completion|Usability, Efficiency|Simplify flows; remove unnecessary steps|

---

# Part 2 — AT2 Practical

> ⚠️ **Gen AI is strictly prohibited** in the Practical. Any suspicion of use will be reported for misconduct.

## Key Details

|Item|Detail|
|---|---|
|**Weight**|30% of final grade|
|**Due**|23:59 Friday, Week 10|
|**Access**|Canvas → Assignments → Assessment 2 → Practical|
|**Opens**|1 PM Monday, Week 9|
|**Duration**|11 days (auto-closes on due date)|
|**Format**|Quiz mode, open book|
|**Structure**|3 main sections, 15 sub-questions, 30 points total|
|**Answer types**|Short and long written answers + annotated images|
|**Extensions**|No simple extensions — Special Consideration only|

---

## What the Practical Tests

The Practical will require you to apply knowledge from across the subject. Key areas to review:

- **Norman's Design Principles** (Weeks 1 & 2)
- **Usability Design Principles** — Preece, Sommerville & Macaulay (Week 2)
- **Nielsen's Usability Heuristics** (Week 2)
- **Interaction Types / Styles** (Week 6)
- **Input / Output Technologies** (Week 6)
- **Immersion and Engagement** (Week 8)
- **Overload, Mystery & Friction** (Week 9 — this lecture)
- **How to analyse, apply and assess** Design and Usability Principles through text and annotated drawings

### Content Reference by Week

|Week|Topic|
|---|---|
|Weeks 1 & 2|Design Principles|
|Week 2|Usability Principles & Heuristics|
|Week 3|Design Process|
|Week 4|Human Sensory I/O, Cognition & Perception, Gestalt Principles, Metaphors|
|Week 6|Mental & Conceptual Models, Input & Output Methods and Technologies|
|Week 8|Immersion and Engagement|
|Week 9|Overload, Mystery & Friction|

---

## The Topic: Arcade Games

- The Practical centres on **interactive arcade games** observed and played firsthand
- You are **required to visit a game arcade** before completing the Practical
- Nearby Sydney options (all close to UTS):

|Venue|Location|
|---|---|
|Timezone|Central Park Mall|
|Fortress|Central Park Mall|
|iPlay|Broadway Shopping Centre|
|Timezone Haymarket|Haymarket|

- Observe games **firsthand as a player and as an observer**
- Pay attention to input/output devices, interaction types, design principles in action, friction, immersion, etc.

---

## Rules — This Is an Examination

The Practical is subject to UTS Student Rules (Sections 9 and 16).

### NOT Allowed

- Oral, visual, or written communication with anyone (in person or electronically)
- Sharing or receiving answers/content with/from other students
- Using any work produced by another student
- Using Generative AI or AI-powered tools in any form (including language support tools)

### Allowed

- Communicating with the Teaching Team via Canvas Discussions Q&A and Weeks 9 & 10 tutorials (no email questions)
- Accessing and using subject lecture/tutorial slides, your own notes, the textbook
- Accessing web and published material
- Preparation activities (studying, visiting arcades before opening)
- Using a drawing device (analogue or digital)
- Using a camera-enabled device

---

## Annotated Photos — What's Expected

**Correct format:**

- A photo **taken by you** of a real arcade game or element
- Supported by simple highlights (e.g. circles, arrows) drawn on the photo
- Short **analytical descriptions** of key elements that explain what they mean in design terms

**Incorrect format:**

- A photo with only component labels (e.g. "Drum" with an arrow) — this shows identification, not analysis
- Any photo not taken by you
- Images without analysis/annotation

**Good annotation example:**

> _"A physical drum is used for input. Mapping of strike zones could help the player know where to hit, improving clarity."_ — This references **Mapping** (Norman's Design Principle) and explains the design implication

---

## Annotated Drawings — What's Expected

**Expected:**

- Clearly hand-drawn by you
- Clean and legible
- **Comprehensive annotations** with design analysis (not just labels)
- Some colour is encouraged but not required
- "Stick people" are completely fine — artistic skill is not being assessed

**Prohibited:**

- Any AI assistance in any form — even if only part of the drawing was AI-generated

> See the document **"EXAMPLES OF HAND-MADE DRAWINGS FOR AT2 PRACTICAL"** in the Canvas Assignment page for reference
> 