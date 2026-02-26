
> [!faq] About this Lecture 
> Class: 31260
> Subject: #fundamentalsOfInteractionDesign 
> Date: 26/02/2025 
> Topics: #design #usability #affordances #signifiers #constraints

---

## 1. What Is Design?

### Plain-English Introduction
Design is the act of planning and creating something that solves a problem. Before anything is built, designers sketch, prototype, or model their idea first — this way they can test whether it actually works before committing time and money to the real thing.

Design is not just about making things look good. It is fundamentally about solving a problem for a specific group of people within specific constraints.

### Formal Definition

> **Design** = a purposeful construction — sketch, prototype, or finished product — that improves an existing situation by solving a defined brief.

### Every Term Explained

| Term | Plain-English Meaning |
|------|----------------------|
| **Construction** | The making of a tangible or digital artifact — a sketch, a cardboard model, a software mock-up. |
| **Improvement** | Changing something from how it is now to a better version. |
| **Brief** | A short written statement that tells the designer what problem needs solving and what constraints apply (budget, time, users, materials). |
| **Prototype** | A quick, cheap version of the design used to test ideas before building the real thing. |
| **Sketch** | A hand-drawn or digital outline that captures the shape or flow of an idea. |
| **Finished design** | The final polished product ready for release. |
| **Problem-solving activity** | Any step that moves you from "I have a problem" to "I have a solution". |

### Fully Worked Example — From Brief to Prototype

**Brief:** Create a portable notebook holder that reduces the burden of carrying a 2 kg textbook. The holder must add no more than 0.2 kg.

**Step 1 — Identify the existing situation.**
A student carries a 2 kg textbook in a regular backpack with no dedicated holder.

**Step 2 — Define the preferred situation.**
The textbook sits in a lightweight holder that adds at most 0.2 kg to the total weight carried.

**Step 3 — Sketch a concept.**
Draw a rectangular frame sized to fit the book: 30 cm × 20 cm × 2 cm, with two 5 cm side straps.

**Step 4 — Estimate the weight of the first material (cardboard).**

- Cardboard density = 0.6 g/cm³
- Volume of frame = 30 × 20 × 2 = 1,200 cm³
- Weight = 1,200 × 0.6 = 720 g = **0.72 kg**

This exceeds the brief's limit of 0.2 kg. The design fails. We must iterate.

**Step 5 — Iterate with a lighter material (foam board).**

- Foam board density = 0.2 g/cm³
- Volume is still 1,200 cm³
- Weight = 1,200 × 0.2 = 240 g = **0.24 kg**

This is close to the limit but still slightly over. In a real project you would iterate again. For this example we accept it as close enough to proceed to user testing.

**Answer:** The foam-board sketch is our first prototype. It shows the concept is feasible and gives us something physical to test with users.

> **What this means in practice:** We discovered the material problem at the sketch stage, not after spending money on production. This is exactly why we design before we build.

### Connections
- This sketch becomes the starting point for the prototype in Section 3.
- The brief structure used here is formalised in Section 6.

### One-Sentence Summary
Design is the purposeful creation of a sketch, prototype, or finished product that improves an existing situation by satisfying a defined brief.

### Exam Hints

> Always state the existing situation and the preferred situation before proposing any solution. A brief without both is incomplete.
> 
> **Common mistake:** Treating a prototype as the finished design. A prototype is for testing only — it is never the final product.

---

## 2. Design as a Simulation

### Plain-English Introduction
Before you build the real thing you **simulate** it — you create a representation of it that is cheap and quick to make. The simulation lets you see whether your idea works, find problems early, and avoid wasting resources on something that does not work.

A simulation does not need to be perfect. It just needs to be realistic enough to answer the question you are trying to answer.

### Formal Definition

> **Simulation** = a physical or digital representation of a future product used to explore its behaviour and identify problems before actual production begins.

### Every Term Explained

| Term | Plain-English Meaning |
|------|----------------------|
| **Model** | A simplified version that captures the essential features — size, shape, layout, interaction — without full functionality. |
| **Imitation** | Copying the look or behaviour of something without building the full thing. |
| **Explore behaviour** | Testing how the design responds to user actions before it is real. |
| **Low-fidelity** | Rough and quick — paper, cardboard, basic wireframes. |
| **High-fidelity** | Detailed and realistic — colour, interactions, close to the final product. |

### Fully Worked Example — Wireframe Simulation in Figma

**Task:** Simulate the layout of a mobile "Well-being Tracker" app screen before writing any code.

**Step 1 — Choose the tool.** Use Figma (free, browser-based design software).

**Step 2 — Set the frame size.** Create a frame 360 px wide × 640 px tall — a standard Android phone screen size.

**Step 3 — Add the UI elements.**

| Element | Size | Label |
|---------|------|-------|
| Header | 360 px wide × 50 px tall | "My Well-being" |
| Button 1 | 300 px wide × 60 px tall | Mood |
| Button 2 | 300 px wide × 60 px tall | Exercise |
| Button 3 | 300 px wide × 60 px tall | Sleep |

**Step 4 — Check whether the layout fits.** Calculate how much vertical space the buttons require including 20 px gaps between them:

- Three buttons: 3 × 60 px = 180 px
- Two gaps between buttons: 2 × 20 px = 40 px
- Header: 50 px
- Total used: 180 + 40 + 50 = **270 px**
- Screen height available: 640 px
- Remaining space: 640 − 270 = **370 px** for content, footer, and padding

**Answer:** The layout fits comfortably within the screen. The simulation confirms the structure before a single line of code is written.

> **What this means in practice:** If the buttons had not fit, we would have discovered that now — in Figma, where fixing it takes seconds — rather than after coding the whole screen.

### Connections
- This wireframe simulation is a low-fidelity prototype of the type described in Section 3.
- The Figma workflow is expanded further in Section 7.

### One-Sentence Summary
A simulation is a quick, low-cost representation of a future product that lets designers find and fix problems before building the real thing.

### Exam Hints

> Always state the *purpose* of your simulation — what specific question are you trying to answer with it?
>
> **Common mistake:** Building a simulation without a clear question to answer. A simulation that tests nothing teaches nothing.

---

## 3. Design as a Prototype

### Plain-English Introduction
A **prototype** is a working but not final version of a product that you can touch, click, or test with real users. It is more developed than a sketch but less polished than the finished product. The whole point of a prototype is to find problems while they are still cheap to fix.

Prototypes come in two broad types. A **low-fidelity prototype** is rough and cheap — paper, cardboard, printed screens taped together. A **high-fidelity prototype** is detailed and close to the final product — a clickable Figma mock-up with real colours and interactions.

### Formal Definition

> **Prototype** = a tangible or digital artifact that implements enough features of the intended design to allow user testing and feedback.

### Every Term Explained

| Term | Plain-English Meaning |
|------|----------------------|
| **Tangible** | Physical — something you can hold, like cardboard or 3D-printed parts. |
| **Digital** | Screen-based — something you can click, like a Figma prototype. |
| **Enough features** | Only the core functions needed to test the concept — not everything, just what matters right now. |
| **User testing** | Real people interact with the prototype and tell you what works and what does not. |
| **Low-fidelity** | Rough and cheap. Used early to test ideas quickly. |
| **High-fidelity** | Detailed and realistic. Used later to test the near-final design. |

### Fully Worked Example — Low-Fidelity Paper Prototype

**Goal:** Test whether the book holder from Section 1 is usable before committing to materials.

**Step 1 — Gather materials.** A4 paper, scissors, tape, marker.

**Step 2 — Build the prototype.**
- Cut a rectangle 30 cm × 20 cm for the front panel.
- Fold a 2 cm flap along the bottom to simulate the book slot.
- Attach two 5 cm strips of tape as straps on the sides.

**Step 3 — Estimate the prototype's weight.**

- Paper density = 0.08 g/cm³
- Paper thickness = 0.2 cm
- Volume = 30 × 20 × 0.2 = 120 cm³
- Weight = 120 × 0.08 = **9.6 g = 0.01 kg**

The paper prototype adds virtually no weight, so it does not interfere with the weight test — it is only for testing the shape and usability.

**Step 4 — Conduct a user test.** Ask a peer to place a 2 kg textbook into the slot.

**Step 5 — Record feedback.** Peer reports: "The slot is too shallow — the book keeps sliding out. I need at least 3 cm depth."

**Step 6 — Iterate.** Redraw the slot to 3 cm depth and rebuild.

- New volume = 30 × 20 × 0.3 = 180 cm³
- New weight = 180 × 0.08 = **14.4 g = 0.014 kg**

Still negligible. The revised prototype passes the depth requirement.

**Answer:** The paper prototype cost almost nothing and took minutes to build, but it revealed a critical usability problem — the slot depth — before any real materials were purchased.

> **What this means in practice:** The user test told us something the sketch could never tell us: that the slot needed to be deeper. We found this out with paper and tape, not with expensive materials.

### Connections
- This prototype is built from the sketch created in Section 1 and Section 4.
- The iteration process used here is the core of the design cycle described in Section 11.

### One-Sentence Summary
A prototype is a testable version of a design — cheap enough to build quickly, realistic enough to learn from.

### Exam Hints

> When describing a prototype, always state: what fidelity it is (low or high), what features it includes, and what specific question it is designed to test.
>
> **Common mistake:** Building a high-fidelity prototype too early. If you spend hours making something beautiful and then discover in testing that the core concept does not work, you have wasted all of that time.

---

## 4. Design as a Sketch

### Plain-English Introduction
A **sketch** is the fastest, cheapest way to get an idea out of your head and onto paper. It is deliberately rough — no rulers, no precise measurements, no colours. The goal is to explore as many ideas as possible quickly, before committing to any of them.

Sketching is not about drawing skill. It is about thinking visually and quickly.

### Formal Definition

> **Sketch** = a low-detail visual representation — on paper or digital canvas — used to explore form, layout, or interaction early in the design process.

### Every Term Explained

| Term | Plain-English Meaning |
|------|----------------------|
| **Low-detail** | No fine shading, exact colours, or precise measurements — just enough to communicate the idea. |
| **Visual representation** | Shows what the product looks like or how it works, not just describes it in words. |
| **Explore** | Allows rapid changes — you can erase and redraw in seconds. |
| **Form** | The shape and physical appearance of the design. |
| **Layout** | How elements are arranged on a screen or page. |
| **Interaction** | How a user moves through or uses the design. |

### Fully Worked Example — Sketching a Mobile Dashboard

**Goal:** Sketch a layout for the Well-being Tracker app screen before opening Figma.

**Step 1 — Draw the phone outline.** A rectangle approximately 6 cm × 10 cm on paper.

**Step 2 — Divide into zones.** Split the rectangle into three horizontal bands:

| Zone | Height | Purpose |
|------|--------|---------|
| Header | top 2 cm | App title and navigation |
| Content | middle 5 cm | Main buttons or data |
| Footer | bottom 3 cm | Secondary navigation |

**Step 3 — Add the buttons.** Draw three rectangles in the content zone labelled Mood, Exercise, Sleep. Keep them evenly spaced.

**Step 4 — Add icons.** Draw a small circle (approximately 0.5 cm radius) at the left of each button label.

**Step 5 — Annotate.** Write a short note next to each element explaining its purpose. For example: "Mood button → opens mood diary screen."

**Answer:** The sketch takes under 5 minutes and gives you a visual plan to work from when building the Figma wireframe. It also reveals layout decisions early — for example, whether three buttons fit comfortably in the content zone — without opening any software.

> **What this means in practice:** Sketching before opening Figma saves time. You make the big structural decisions with a pencil, so you are not figuring out the layout while also learning software.

### Connections
- This sketch is the direct input to the low-fidelity prototype in Section 3.
- The sketch becomes the basis for the Figma wireframe in Section 7.

### One-Sentence Summary
A sketch is a quick, rough drawing that externalises an idea so it can be evaluated, discussed, and iterated before any time is invested in building.

### Exam Hints

> When describing a sketch, always explain why you chose that layout — what design decision does it represent?
>
> **Common mistake:** Treating a sketch as a final design and feeling reluctant to change it. Sketches are meant to be thrown away or redrawn. If you are not willing to change it, it is no longer a sketch.

---

## 5. Design as Improvement — The Problem-Solving Activity

### Plain-English Introduction
Every design starts with a problem. Design is the activity of moving from the current situation — which is unsatisfactory in some way — to a preferred situation that is better. The improvement must be **measurable**: you need to be able to show, with numbers or evidence, that the new design is actually better than what existed before.

### Formal Definition

> **Improvement** = the measurable change that moves a product or service from its current state to a defined, better state.

### Every Term Explained

| Term | Plain-English Meaning |
|------|----------------------|
| **Current state** | How the product or situation works today — the starting point. |
| **Preferred state** | The desired outcome — what better looks like. |
| **Measurable change** | Something you can count or observe: weight saved, time reduced, errors eliminated, satisfaction score increased. |

### Fully Worked Example — Reducing Textbook Search Time

**Current situation:** A student spends an average of 5 minutes searching a bookshelf to find the right textbook.

**Preferred situation:** The student finds any textbook in under 2 minutes.

**Step 1 — Define the target improvement.**

- Target reduction: 60% of 5 minutes = 3 minutes saved
- Target time: 5 − 3 = **2 minutes**

**Step 2 — Propose a design solution.** Add a QR-code label to each book that links to a digital catalogue showing its shelf location.

**Step 3 — Estimate the new time with the QR solution.**

| Action | Time |
|--------|------|
| Scan QR code on phone | 5 seconds |
| Read shelf location from catalogue | 10 seconds |
| Walk to correct shelf | 30 seconds |
| Total | 45 seconds = **0.75 minutes** |

**Step 4 — Calculate the actual improvement.**

- Time saved = 5 − 0.75 = **4.25 minutes**
- Percentage improvement = (4.25 ÷ 5) × 100 = **85%**

This exceeds the 60% target.

**Answer:** The QR-code system reduces textbook search time from 5 minutes to 45 seconds — an 85% improvement, exceeding the design brief's 60% target.

> **What this means in practice:** By measuring both the current state and the outcome, we can prove the design works. Without measurement, "it feels faster" is not an acceptable answer in design practice or in an exam.

### Connections
- The improvement target becomes the success criterion in a brief (Section 6).
- Measuring improvement is an application of quantitative research (Section 9).

### One-Sentence Summary
Design improvement is only real if it is measurable — always define the current state, the target, and show the evidence that the target was met.

### Exam Hints

> Always express improvement as both an absolute number and a percentage. "Search time dropped from 5 minutes to 45 seconds — an 85% reduction" is a complete answer. "It is faster" is not.
>
> **Common mistake:** Describing the preferred situation without stating the current situation first. Without a baseline you cannot demonstrate improvement.

---

## 6. Brief and Solution

### Plain-English Introduction
A **brief** is the written document that defines the design problem before any designing begins. It sets out what needs to be solved, who it is being solved for, what limits apply, and how you will know when you have succeeded. Without a brief, design becomes guesswork.

A **solution** is the design artifact — prototype, product, or system — that satisfies the brief's requirements. The solution is only valid if it can be tested against the brief's success criteria.

### Formal Definitions

> **Brief** = a concise document that outlines the design problem, target users, constraints, and success criteria.
>
> **Solution** = the design artifact or system that demonstrably meets the brief's requirements.

### Every Term Explained

**Brief elements:**

| Element | Plain-English Meaning |
|---------|----------------------|
| **Problem statement** | What is wrong with the current situation? Be specific. |
| **Target users** | Who will use this design? Describe them specifically. |
| **Constraints** | The hard limits — cost, time, materials, technology, regulations. |
| **Success criteria** | The measurable conditions that the solution must satisfy to be accepted. |

**Solution elements:**

| Element | Plain-English Meaning |
|---------|----------------------|
| **Artifact** | The actual design output — prototype, sketch, digital mock-up, finished product. |
| **Evidence of success** | Test results, measurements, or user feedback that show the success criteria were met. |

### Fully Worked Example — Writing and Testing a Brief

**Problem statement:** University students carry heavy textbooks averaging 2 kg each, causing physical discomfort.

**Target users:** University undergraduates aged 18–25 who carry multiple textbooks daily.

**Constraints:**
- Material cost must not exceed £5 per unit
- Added weight must not exceed 0.2 kg
- Must be manufacturable from standard materials

**Success criteria:**
- A user can lift the holder plus book with one hand
- Measured weight of holder is ≤ 0.2 kg
- Material cost per unit is ≤ £5

**Proposed solution:** Aluminium sheet holder (tested after foam board failed).

**Test the foam board solution first:**

- Foam board density = 0.2 g/cm³, volume = 1,200 cm³
- Weight = 1,200 × 0.2 = 240 g = **0.24 kg**
- Result: **FAILS** — exceeds the 0.2 kg limit

> **Important:** Note that Section 1 described the foam board result as "close enough" for initial testing. Here in Section 6, where we are formally testing against the brief's success criteria, 0.24 kg is a clear failure. The brief's criteria are strict. This is the difference between informal prototyping and formal evaluation.

**Iterate — test the aluminium solution:**

- Aluminium density = 2.7 g/cm³, thickness = 0.1 cm
- Volume = 30 × 20 × 0.1 = 60 cm³
- Weight = 60 × 2.7 = 162 g = **0.162 kg**
- Result: **PASSES** — under the 0.2 kg limit

**Answer:** The aluminium holder satisfies the weight criterion. The next step is to verify the cost criterion and conduct a user test for the one-handed lift criterion.

### Connections
- The success criteria in the brief directly use the measurable improvement approach from Section 5.
- The solution artifact is the prototype built using the process in Section 3.

### One-Sentence Summary
A brief defines the problem, the users, the limits, and the success criteria; a solution is only valid when it demonstrably satisfies all four.

### Exam Hints

> In an exam, always write out all four brief elements explicitly before proposing or evaluating any solution. A solution that ignores a constraint is not a valid solution.
>
> **Common mistake:** Evaluating a solution only against one or two success criteria and ignoring the others. All criteria must be checked.

---

## 7. The Prototyping Stage and Sketching — From Idea to High-Fidelity

### Plain-English Introduction
The prototyping stage is the part of the design process where ideas become physical or digital objects that can be tested. It always begins with sketching, moves to low-fidelity prototypes for early testing, and progresses to high-fidelity prototypes once the core concept is validated.

The key principle is: **test early with cheap prototypes so that expensive mistakes are never made.**

> **How this connects to what you already know:** Sections 3 and 4 explained sketching and prototyping individually. This section shows how they work together as a progression: sketch → low-fi prototype → user feedback → high-fi prototype.

### Formal Definitions

> **Prototyping stage** = the phase in the design process where low- to high-fidelity artifacts are built and tested with users.
>
> **Sketching** = the act of drawing ideas on paper or a digital canvas to explore form, layout, and interaction quickly and cheaply.

### Every Term Explained

| Term | Plain-English Meaning |
|------|----------------------|
| **Low-fidelity (low-fi)** | Rough and cheap — paper, cardboard, hand-drawn screens. Used for early concept testing. |
| **High-fidelity (high-fi)** | Detailed and realistic — colours, real interactions, close to the final product. Used for final validation. |
| **Figma** | A browser-based design tool used to create high-fidelity digital mock-ups and interactive prototypes. |
| **Iteration** | The cycle of sketch → build → test → improve, repeated until the design satisfies the brief. |
| **User feedback** | What real users tell you after interacting with a prototype — the primary input for iteration. |

### Fully Worked Example — From Paper Sketch to High-Fidelity Figma Mock-up

**Goal:** Design the Well-being Tracker app screen, starting from a sketch and finishing with a validated high-fidelity prototype.

**Step 1 — Sketch (low-fidelity, on paper).**
Draw the phone outline with three labelled buttons: Mood, Exercise, Sleep. Keep buttons evenly spaced. This takes under 5 minutes.

**Step 2 — Build a low-fidelity paper prototype.**
Cut cardstock to 9 cm × 16 cm. Print and glue three button labels. This is now something a user can physically interact with.

**Step 3 — Conduct a low-fidelity user test.**
Ask a peer to "press" each button (they tap the paper label). Record feedback.

Feedback received: "The buttons are too close together — I keep hitting the wrong one."

**Step 4 — Iterate the sketch.**
Increase the gap between buttons from 10 px equivalent spacing to 30 px equivalent spacing. Redraw the sketch.

**Step 5 — Build the high-fidelity mock-up in Figma.**

| Parameter | Original value | Revised value |
|-----------|---------------|---------------|
| Frame size | 360 × 640 px | 360 × 640 px (unchanged) |
| Button width | 300 px | 300 px (unchanged) |
| Button height | 60 px | 60 px (unchanged) |
| Vertical gap between buttons | 10 px | 30 px |
| Primary colour | — | #0066CC |
| Background colour | — | #F5F5F5 |

**Step 6 — Validate the revised layout fits the screen.**

- Header: 50 px
- 3 buttons: 3 × 60 px = 180 px
- 2 gaps between buttons: 2 × 30 px = 60 px
- Footer: 50 px
- Total vertical space used: 50 + 180 + 60 + 50 = **340 px**
- Screen height: 640 px
- Remaining space: 640 − 340 = **300 px** for content and padding

The revised layout fits. The spacing change does not break the layout.

**Answer:** The high-fidelity prototype reflects the feedback from the low-fidelity test. The button spacing problem was found with paper and tape, not after hours of Figma work.

> **What this means in practice:** The low-fidelity test saved time. If we had built the high-fidelity version first, we would have had to redo all the spacing work after the user test.

### Connections
- The sketch in Step 1 uses the technique from Section 4.
- The low-fidelity prototype in Step 2 uses the technique from Section 3.
- The Figma wireframe connects to the simulation approach in Section 2.

### One-Sentence Summary
The prototyping stage progresses from rough sketches to polished high-fidelity mock-ups, with user testing at each stage ensuring problems are caught before they become expensive.

### Exam Hints

> Always show the full progression in an exam answer: sketch → low-fi prototype → user feedback → iteration → high-fi. Missing any step suggests you do not understand why the process works.
>
> **Common mistake:** Skipping the low-fidelity test and going straight to high-fidelity. If you discover a fundamental problem at the high-fidelity stage, you have wasted all the time spent building it.

---

## 8. Human-Centered Design (HCD)

### Plain-English Introduction
**Human-Centered Design** is a design approach that keeps real users involved at every stage of the process — not just at the end when it is too late to make significant changes. Rather than designing for users based on assumptions, HCD requires designers to observe, interview, and test with actual users continuously.

The underlying principle is: **the people who will use the design know more about their own needs than any designer does.**

> **How this relates to what came before:** The design process in Section 11 and the prototyping stage in Section 7 both describe cycles of building and testing. HCD is the philosophy that explains *why* those cycles exist — because users always know things the designer does not.

### Formal Definition

> **Human-Centered Design** = a design approach that actively involves users throughout the process — empathize, define, ideate, prototype, test — to ensure solutions meet real needs rather than assumed needs.

### Every Term Explained

| Phase | What you actually do |
|-------|---------------------|
| **Empathize** | Observe and interview real users to understand their actual frustrations, motivations, and behaviours — not what you assume they are. |
| **Define** | Synthesize what you learned into a clear, specific problem statement. This is what you are actually designing for. |
| **Ideate** | Generate as many possible solutions as you can without judging them. Quantity over quality at this stage. |
| **Prototype** | Build low-fidelity versions of your most promising ideas quickly and cheaply. |
| **Test** | Put the prototypes in front of real users and observe what happens. Do not explain or defend — watch and listen. |

### Fully Worked Example — Empathy Research to Persona to Feature

**Step 1 — Conduct empathy interviews.**
Ask 8 university students: "What frustrates you most about studying at home?"

**Step 2 — Record and code the responses.**

| Participant | Response | Code |
|-------------|----------|------|
| 1 | "I lose track of time and end up stressed" | Time-management frustration |
| 2 | "I forget to take breaks" | Time-management frustration |
| 3 | "My desk is always messy" | Environment frustration |
| 4 | "I can't focus for long periods" | Focus frustration |
| 5 | "I never know how long I've been studying" | Time-management frustration |
| 6 | "Notifications keep interrupting me" | Focus frustration |
| 7 | "I feel guilty when I take breaks" | Time-management frustration |
| 8 | "I run out of energy but keep going anyway" | Time-management frustration |

**Step 3 — Count the codes.**

| Code | Count | Percentage |
|------|-------|-----------|
| Time-management frustration | 5 | 62.5% |
| Focus frustration | 2 | 25% |
| Environment frustration | 1 | 12.5% |

Time-management frustration is the dominant theme. This becomes the focus of the Define phase.

**Step 4 — Define the problem.**
"University students studying at home struggle to manage their time effectively, leading to stress and poor study sessions."

**Step 5 — Create a persona based on the research.**

| Attribute | Value |
|-----------|-------|
| **Name** | Alex |
| **Age** | 27 |
| **Role** | Graduate student |
| **Goal** | Complete assignments without feeling overwhelmed |
| **Frustration** | Loses track of time → sessions run too long → stress |
| **Needs** | A simple, visible timer and automatic break reminders |
| **Quote** | "I lose track of time and end up feeling stressed" |

**Step 6 — Ideate solutions for Alex.**
- A countdown timer visible on screen at all times
- A notification that fires every 45 minutes suggesting a 10-minute break
- A progress bar showing how much of a study session remains

**Step 7 — Prototype and test the most promising idea.**
Build a low-fidelity paper sketch of a "Study Timer" widget. Test it with two Alex-type participants.

Feedback: Both find the concept useful. One suggests adding a session history so they can see how much they studied.

**Answer:** The HCD process produced a design feature — the Study Timer widget — that is directly traceable to a real user need identified through research, not assumed by the designer.

> **What this means in practice:** Without the interviews, a designer might have built a mood tracker or a to-do list. The research showed that time management was the real problem. HCD ensures you solve the right problem.

### Connections
- The empathy interviews in this example are qualitative research — see Section 9 for how to analyse them properly.
- The persona created here feeds directly into the storyboard process mentioned in Section 10.

### One-Sentence Summary
Human-Centered Design ensures you are solving the right problem for real users, by keeping users involved throughout the entire design process.

### Exam Hints

> When answering an HCD question, always include: a direct user quote as evidence from the empathy phase, a coded theme from the define phase, and a feature or design decision that is traceable to that theme.
>
> **Common mistake:** Jumping from empathy straight to prototyping, skipping the define phase. Without a clear problem statement you do not know what you are building.

---

## 9. Quantitative vs Qualitative Research

### Plain-English Introduction
Design decisions should be based on evidence, not guesswork. There are two types of evidence: **quantitative** data (numbers — how many, how often, how long) and **qualitative** data (words, observations — why, how, what it feels like). Good design research usually uses both.

Quantitative data tells you that a problem exists and how big it is. Qualitative data tells you why it exists and what it means to the people experiencing it. Neither is sufficient on its own.

### Formal Definitions

> **Quantitative research** = the systematic collection of numerical data that can be statistically analysed to identify patterns and measure outcomes.
>
> **Qualitative research** = the collection of non-numerical data — words, observations, images — that reveals meanings, motivations, and experiences.

### Every Term Explained

| Aspect | Quantitative | Qualitative |
|--------|-------------|------------|
| **Data type** | Numbers — counts, percentages, averages, ratings | Words, audio, video, images, observations |
| **Collection tools** | Surveys with tick boxes, app analytics, usage logs | Interviews, focus groups, observation sessions, diaries |
| **Goal** | Measure what happens and how much | Understand why it happens and what it means |
| **Analysis method** | Statistics — mean, median, percentage, frequency | Thematic coding — identifying patterns in language |
| **Output** | "62% of users abandon the app within 3 days" | "Users feel the app is confusing because they cannot find the settings" |

### Fully Worked Example — Mixed-Methods Evaluation of the Well-being App

**Goal:** Evaluate how well the Well-being Tracker app is meeting user needs.

#### Part A — Quantitative Research

**Method:** Survey of 20 users. Question: "How many times per day do you open the app?"

**Responses collected:**

| Times per day | Number of users |
|--------------|----------------|
| 0 | 5 |
| 1 | 8 |
| 2 | 4 |
| 3 | 3 |

**Calculate the mean (average) usage:**

$$\text{Mean} = \frac{(5 \times 0) + (8 \times 1) + (4 \times 2) + (3 \times 3)}{20} = \frac{0 + 8 + 8 + 9}{20} = \frac{25}{20} = 1.25 \text{ times per day}$$

**Quantitative finding:** Users open the app an average of **1.25 times per day**. This is a relatively low engagement rate, suggesting a potential problem — but the number alone does not tell us why.

#### Part B — Qualitative Research

**Method:** Follow-up interviews with 3 users. Question: "Why do you open the app — or why don't you?"

**Responses:**

| User | Response | Code |
|------|----------|------|
| A | "When I feel stressed I check my mood score — it helps me calm down" | Stress-relief use |
| B | "I log my sleep every morning after I wake up" | Routine-based use |
| C | "Honestly I forget about it — I need a reminder" | Forgetting barrier |

**Qualitative finding:** Low usage is not because the app is disliked — it is because users forget it exists. One user uses it as a stress-relief tool (high value). Two have regular routines around it. The fix is likely a notification or reminder feature, not a redesign.

#### Combining the findings

The quantitative data showed **what** (low average usage). The qualitative data explained **why** (forgetting, not dislike). Together they produce a design recommendation: add an optional daily reminder notification.

> **What this means in practice:** If we had only looked at the numbers, we might have concluded the app was failing and redesigned it. The qualitative interviews told us the real problem was much simpler to fix.

### Connections
- The qualitative interviews here use the same coding technique as the HCD empathy phase in Section 8.
- The quantitative usage data provides the baseline metric that would go into a brief's success criteria (Section 6).

### One-Sentence Summary
Quantitative research tells you what is happening and how much; qualitative research tells you why — use both together to make well-informed design decisions.

### Exam Hints

> In any exam answer about research, always present at least one specific statistic and at least one direct user quote. A research answer with only numbers or only quotes is incomplete.
>
> **Common mistake:** Treating qualitative responses as anecdotes rather than data. Qualitative data requires systematic coding — you identify themes, count how often they appear, and use that pattern as evidence.

---

## 10. Artifacts and Tools

### Plain-English Introduction
Throughout the design process, designers produce **artifacts** — concrete outputs that document, communicate, or test design ideas. Each artifact serves a specific purpose at a specific stage of the process. **Tools** are the software or physical materials used to create those artifacts.

Knowing which artifact to produce at which stage, and which tool to use to produce it, is a core practical skill in interaction design.

### Formal Definitions

> **Artifact** = any created object that represents, communicates, or tests a design idea at a particular stage of the design process.
>
> **Tool** = the software application or physical material used to create a design artifact.

### Every Term Explained

**Design artifacts:**

| Artifact | What it is | When it is used | Key requirement |
|----------|-----------|----------------|----------------|
| **Persona** | A fictional but research-based user profile | After empathy research, before ideation | Must include a direct user quote |
| **Problem scenario** | A short narrative (approx. 300 words) describing a user's current pain point | During the Define phase | Must describe the current situation, not the solution |
| **Future use scenario** | A narrative showing how a user would interact with the proposed solution | During ideation or after prototyping | Must reference the persona and the solution |
| **Storyboard** | A sequence of drawn panels showing a user's journey through a scenario | After scenarios are written, before or alongside prototyping | Must show a complete journey with a beginning, middle, and end |
| **Usability report** | A document summarising test results, problems found, and recommendations | After user testing | Must distinguish between observed problems and inferred causes |
| **Design-in-action video** | A short video demonstrating the solution in use | At the end of the project | Must show real or simulated user interaction, not just a slide deck |

**Design tools:**

| Tool | What it does | When to use it |
|------|-------------|----------------|
| **Figma** | Browser-based digital design — wireframes, high-fidelity mock-ups, interactive prototypes | Mid to late prototyping stage |
| **Miro** | Online whiteboard — affinity diagrams, empathy maps, journey maps | Research and define phases |
| **Paper and pen** | Low-fidelity sketching and paper prototyping | Early ideation and low-fi prototyping |
| **Camera / screen recorder** | Recording usability tests | During user testing |

### Fully Worked Example — Building a Complete Storyboard

A storyboard is listed in the artifacts table above but has not yet been demonstrated. Here is a complete example.

**Persona:** Alex, 27, graduate student, frustrated by losing track of time while studying.

**Scenario:** Alex uses the Study Timer widget for the first time.

**Storyboard panels:**

| Panel | Image description | Caption |
|-------|------------------|---------|
| 1 | Alex sits at a desk looking stressed, clock shows 11pm | "Alex has been studying for 3 hours without realising it" |
| 2 | Alex opens the Well-being app on their laptop | "Alex remembers they installed the app last week" |
| 3 | Alex sets the Study Timer for 45 minutes | "Alex sets a 45-minute focus session" |
| 4 | A gentle notification appears: "Time for a break!" | "After 45 minutes the app reminds Alex to rest" |
| 5 | Alex stands up, stretches, looks relieved | "Alex takes a 10-minute break feeling in control" |
| 6 | Alex returns to studying, timer resets | "Alex returns refreshed and starts a new session" |

**What this storyboard communicates:** It shows a complete user journey — the problem (panel 1), the discovery of the solution (panels 2–3), the key interaction (panel 4), and the positive outcome (panels 5–6). A reviewer can understand the value of the feature without seeing any code or high-fidelity design.

> **What this means in practice:** Storyboards are communication tools. They let you share a design idea with stakeholders, clients, or team members who may not be able to read a Figma file.

### Connections
- The persona used in this storyboard was created during the HCD empathy phase in Section 8.
- The storyboard communicates the same scenario that would become a future use scenario written artifact.

### One-Sentence Summary
Artifacts are the concrete outputs of design work — each one serves a specific purpose at a specific stage — and tools are the means used to create them.

### Exam Hints

> When asked to produce a persona, always include: name, age, role, goal, frustration, need, and a direct user quote from your research. A persona without a quote is not grounded in evidence.
>
> When asked to produce a storyboard, always show a complete journey: the problem, the solution being used, and the positive outcome.
>
> **Common mistake:** Producing an artifact that is disconnected from the research. Every artifact must be traceable back to something a real user said or did.

---

## 11. The Interaction Design Process

### Plain-English Introduction
**Interaction design** is the practice of shaping how people interact with digital products — the steps they take, the feedback they receive, and the overall experience of using the system.

It is not a linear process that starts at step 1 and ends at step 5. It is a **cycle** — you always return to earlier stages as you learn more. Every test reveals new information that sends you back to define, ideate, or prototype again. This cycling is not failure — it is how good design works.

> **How this relates to HCD:** The interaction design process and Human-Centered Design (Section 8) describe the same cycle with slightly different labels. HCD emphasises the philosophy — keep users central. The interaction design process describes the practical stages — understand, define, ideate, prototype, test. They are two ways of describing the same approach.

### Formal Definition

> **Interaction Design Process** = a cyclical series of stages — understand, define, ideate, prototype, test — focused on shaping the behaviour of users interacting with digital systems, repeated until the design satisfies the brief.

### Every Stage Explained

| Stage | What you do | Output |
|-------|-------------|--------|
| **Understand** | Research who the users are, what they need, and what problems they face | Research data — interviews, surveys, observations |
| **Define** | Synthesize the research into a clear problem statement | A problem statement and persona |
| **Ideate** | Generate as many possible solutions as possible without judging | A list of ideas, rough sketches |
| **Prototype** | Build the most promising ideas as low-fi then high-fi artifacts | Sketches, paper prototypes, Figma mock-ups |
| **Test** | Put prototypes in front of real users and observe | User feedback, usability findings |
| **Iterate** | Use test findings to refine the design and repeat the cycle | An improved prototype ready for the next test |

### Fully Worked Example — Designing a Break-Reminder Feature

**Step 1 — Understand.** Survey 15 remote workers: "Do you regularly forget to take breaks while working from home?"

- 10 out of 15 say yes (67%)

This is enough to confirm the problem is real and widespread.

**Step 2 — Define.** Write a problem statement based on the research:

"Remote workers frequently lose track of time and forget to take breaks, leading to fatigue and reduced concentration. A non-intrusive reminder system that suggests a 5-minute break every 90 minutes would address this need."

**Step 3 — Ideate.** Generate possible solutions without judging:

| Idea | Description |
|------|-------------|
| A | Full-screen pop-up notification |
| B | Subtle audio chime |
| C | Small animated icon in the corner of the screen |
| D | A progress bar that fills over 90 minutes |

**Step 4 — Prototype.** Create a low-fidelity paper sketch of each of the four ideas. Each sketch shows a phone or laptop screen with the reminder in place.

**Step 5 — Test.** Ask 3 users to look at each sketch and react.

| Idea | User feedback |
|------|--------------|
| A — Pop-up | "Too intrusive — I'd dismiss it immediately" |
| B — Audio chime | "I'd tune it out within a day" |
| C — Animated icon | "This is subtle enough that I'd notice it without being annoyed" |
| D — Progress bar | "I like this but it might distract me while I'm trying to focus" |

**Step 6 — Iterate.** Idea C (animated icon) is preferred. Refine it:
- Add a tooltip that appears on hover: "Time for a short stretch!"
- Make the animation subtle — a gentle pulse rather than a flashing colour
- Build the refined version as a high-fidelity Figma prototype

**Step 7 — Test again.** The refined high-fidelity prototype is tested with 5 users. All 5 find it acceptable. Two suggest adding the ability to dismiss the reminder for 15 minutes. This feedback goes into the next iteration.

**Answer:** The break-reminder feature went through two full cycles of the interaction design process before reaching a high-fidelity prototype ready for development. Each cycle produced specific, actionable findings that improved the design.

> **What this means in practice:** The first test eliminated three ideas immediately. Without testing, any of those ideas might have been built. The process saved development time by finding problems at the paper stage.

### Connections
- The understand stage uses quantitative and qualitative research methods from Section 9.
- The define stage produces the problem statement and persona from Section 8 and Section 10.
- The prototype and test stages use the techniques from Sections 3, 4, and 7.

### One-Sentence Summary
The interaction design process is a repeatable cycle of understanding, defining, ideating, prototyping, and testing — it continues until the design demonstrably solves the right problem for real users.

### Exam Hints

> In an exam, if asked to describe the interaction design process, do not just list the stages — show how each stage produces an output that feeds the next stage, and explain why the process is cyclical rather than linear.
>
> **Common mistake:** Describing the process as if it ends after one cycle. Real interaction design always involves multiple cycles. A design that has only been tested once is almost certainly not finished.

---

## Summary Table

| Concept | Definition | Key output | Common mistake |
|---------|-----------|-----------|----------------|
| **Design** | Purposeful creation that improves a situation by solving a brief | Sketch, prototype, or finished product | Treating the prototype as the final product |
| **Simulation** | A cheap representation of a future product used to test ideas | Wireframe, model, mock-up | Not stating what the simulation is testing |
| **Prototype** | A testable artifact implementing enough features for user feedback | Low-fi or high-fi prototype | Building high-fi before testing low-fi |
| **Sketch** | A quick low-detail drawing to explore ideas | Paper or digital sketch | Treating a sketch as too precious to change |
| **Improvement** | A measurable change from current state to preferred state | Before/after metrics | No baseline measurement |
| **Brief** | A document defining problem, users, constraints, and success criteria | Written brief document | Ignoring one or more constraints |
| **HCD** | A design approach keeping real users involved throughout | Research findings, persona, tested prototype | Skipping the define phase |
| **Quantitative research** | Collection and analysis of numerical data | Statistics, averages, percentages | Only reporting numbers without explanation |
| **Qualitative research** | Collection of non-numerical data revealing meaning | Coded themes, user quotes | Treating responses as anecdotes rather than data |
| **Artifacts** | Concrete design outputs at each stage | Persona, storyboard, scenario, report | Producing artifacts not grounded in research |
| **Interaction design process** | A cyclical process of understand, define, ideate, prototype, test | Iterated prototype | Treating the process as linear and stopping after one cycle |

## Key Takeaways

- Design is always about solving a specific problem for specific people within specific constraints — it is never just about aesthetics.
- Every design claim must be backed by evidence. "It feels better" is not a design argument. "It reduced task time by 40%" is.
- The design process is cyclical. Testing always sends you back to earlier stages. This is how it is supposed to work.
- Low-fidelity prototypes should always come before high-fidelity ones. Find big problems with paper before spending hours in Figma.
- Quantitative and qualitative research answer different questions. Use both — numbers tell you what, words tell you why.
- Every artifact must be traceable to real user research. A persona with no user quote is not evidence-based design.
- The brief is the contract. A solution that violates a constraint is not a valid solution, regardless of how good it looks.