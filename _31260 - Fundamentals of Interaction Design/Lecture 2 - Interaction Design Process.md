
> [!faq] About this Lecture 
> Class: 31260
> Subject: #fundamentalsOfInteractionDesign 
> Date: 26/02/2025 
> Topics: #design #usability #affordances #signifiers #constraints

## 1. What Is **Design**?  

### 1.1 Plain‑English Introduction  
Design is **the act of planning and creating something that solves a problem**. Think of it as drawing a map before you start a road trip – you sketch, prototype, or build a model first so you know the route works before you drive.  

### 1.2 Formal Definition  
> **Design** = *a purposeful construction (sketch, prototype, or finished product) that improves an existing situation by solving a brief (a description of the problem to be solved).*  

### 1.3 Explain Every Part  

| Term | Meaning (plain English) |
|------|--------------------------|
| **Construction** | The making of a tangible or digital artifact (e.g., a sketch, a cardboard model, a software mock‑up). |
| **Improvement** | Changing something from “how it is now” to a “better version”. |
| **Brief** | A short written statement that tells the designer *what* problem needs solving and *any constraints* (budget, time, users, etc.). |
| **Prototype** | A low‑fidelity (quick, cheap) version used to test ideas. |
| **Sketch** | A hand‑drawn or digital outline that captures the shape or flow of an idea. |
| **Finished design** | The final, polished product ready for release (e.g., a graphic, an app screen). |
| **Problem‑solving activity** | Any step that moves you from “I have a problem” to “I have a solution”. |

### 1.4 Fully Worked Example – From Brief to Sketch  

**Scenario:** Your brief says: *“Create a portable notebook holder that reduces the weight of carrying a 2 kg textbook.”*  

1. **Identify the existing situation** – A student carries a 2 kg textbook in a regular backpack.  
2. **Define the preferred situation** – The textbook is held in a lightweight holder that adds only 0.2 kg.  

**Step 1 – Sketch a concept**  
- Draw a rectangular frame that fits the book (30 cm × 20 cm × 2 cm).  
- Add two side straps (5 cm wide).  

**Step 2 – Estimate material weight**  
- Assume cardboard density = 0.6 g / cm³.  
- Volume of frame = (30 × 20 × 2) cm³ = 1 200 cm³.  
- Weight = 1 200 cm³ × 0.6 g/cm³ = 720 g = **0.72 kg**.  

**Step 3 – Compare to brief**  
- Desired added weight ≤ 0.2 kg, but our cardboard holder adds 0.72 kg → **Too heavy**.  

**Step 4 – Iterate** (choose lighter material)  
- Switch to thin foam board density = 0.2 g / cm³.  
- New weight = 1 200 cm³ × 0.2 g/cm³ = 240 g = **0.24 kg**.  

**Result:** The foam‑board prototype meets the brief’s weight limit (0.24 kg ≈ 0.2 kg).  

> **What the answer means:** We have a concrete, low‑cost prototype that satisfies the brief’s weight limit.  

### 1.5 Connections  
- **Remember how we said** a design is a *simulation* before the final product – the foam‑board prototype is that simulation.  
- **Similar to** the “sketch → prototype → finished design” pipeline we’ll see later in the **Design Thinking** process.  

### 1.6 One‑Sentence Summary  
Design is the purposeful creation of a sketch, prototype, or final product that improves an existing situation by solving a defined brief.  

### 1.7 Exam Hints & Common Mistakes  

> **⚠️ Exam Hint:** Always state the *existing* and *preferred* situation before you start sketching.  
> **Common mistake:** Treating a prototype as the final design – remember a prototype is only for testing, not for release.  

---  

## 2. **Design as a Simulation**  

### 2.1 Plain‑English Introduction  
Before you build the real thing, you **simulate** (imitate) it with a model or sketch so you can see if it works.  

### 2.2 Formal Definition  
> **Simulation** = *a representation (digital or physical) of a future product used to explore its behavior before actual production.*  

### 2.3 Explain Every Part  

| Symbol | Explanation |
|--------|--------------|
| **Model** | A simplified version that captures essential features (size, shape, interaction). |
| **Imitation** | Copying the look or function without full functionality. |
| **Explore behavior** | Test how the design reacts to user actions, loads, etc. |

### 2.4 Fully Worked Example – Digital Wireframe Simulation  

**Task:** Simulate a mobile app screen for a “Well‑being Tracker”.  

1. **Choose a tool** – Figma (free design software).  
2. **Create a frame** – 360 px × 640 px (standard phone size).  
3. **Add UI elements** –  
   - Header (height = 50 px) → “My Well‑being”.  
   - Three buttons (width = 300 px, height = 60 px) labeled *Mood*, *Exercise*, *Sleep*.  

**Calculate total pixel area used by buttons:**  

- Area of one button = 300 px × 60 px = 18 000 px².  
- Three buttons → 3 × 18 000 px² = **54 000 px²**.  

**Interpretation:** Buttons occupy 54 000 px² of the 230 400 px² screen (≈ 23 %).  

> **Result:** The wireframe shows that buttons take a reasonable portion of the screen, confirming the layout works before any coding.  

### 2.5 Connections  
- **Link to** the **Figma** tool mentioned in the brief (Section 3).  
- **Similar to** the low‑fidelity prototype we built in Section 1.4.  

### 2.6 One‑Sentence Summary  
A simulation is a quick, low‑cost model that lets designers test ideas before building the real product.  

### 2.7 Exam Hints & Common Mistakes  

> **⚠️ Exam Hint:** State the purpose of the simulation (e.g., “to test layout density”).  
> **Common mistake:** Forgetting to measure the simulation (e.g., not counting pixel area).  

---  

## 3. **Design as a Prototype**  

### 3.1 Plain‑English Introduction  
A **prototype** is a *working, but not final*, version of a product that you can touch, click, or test.  

### 3.2 Formal Definition  
> **Prototype** = *a tangible or digital artifact that implements enough features of the intended design to allow user testing and feedback.*  

### 3.3 Explain Every Part  

| Part | Meaning |
|------|---------|
| **Tangible** | Physical (e.g., cardboard, 3‑D printed). |
| **Digital** | Screen‑based (e.g., clickable mock‑up). |
| **Enough features** | Only the core functions needed to evaluate the concept. |
| **User testing** | Real people interact with the prototype and give feedback. |

### 3.4 Fully Worked Example – Low‑Fidelity Paper Prototype  

**Goal:** Test the “Backpack with built‑in book holder” from Section 1.4.  

1. **Materials:** A4 paper, scissors, tape, marker.  
2. **Build steps:**  
   - Cut a rectangle 30 cm × 20 cm (front panel).  
   - Fold a 2 cm flap to simulate the book slot.  
   - Attach two 5 cm straps using tape.  

3. **Measure total weight:**  
   - Paper density ≈ 0.08 g / cm³.  
   - Volume = 30 × 20 × 0.2 cm (paper thickness) = 120 cm³.  
   - Weight = 120 cm³ × 0.08 g/cm³ = **9.6 g** ≈ 0.01 kg.  

4. **User test:** Ask a peer to place a 2 kg textbook into the slot.  

5. **Feedback:** Peer reports the slot is too shallow; needs 3 cm depth.  

6. **Iterate:** Redraw slot to 3 cm depth, recalculate weight:  

   - New volume = 30 × 20 × 0.3 cm = 180 cm³.  
   - New weight = 180 cm³ × 0.08 g/cm³ = **14.4 g** ≈ 0.014 kg.  

**Result:** The revised paper prototype still adds negligible weight (< 0.02 kg) and meets the user’s depth requirement.  

> **Interpretation:** The prototype helped us discover a usability issue (slot depth) before any expensive materials were used.  

### 3.5 Connections  
- **Relates to** the **iteration** concept (Section 5).  
- **Uses** the **sketching** stage (Section 4).  

### 3.6 One‑Sentence Summary  
A prototype is a testable version of a design that lets you gather real user feedback before final production.  

### 3.7 Exam Hints & Common Mistakes  

> **⚠️ Exam Hint:** Always state what *features* the prototype includes and why those are enough for testing.  
> **Common mistake:** Building a high‑fidelity prototype too early, wasting time and resources.  

---  

## 4. **Design as a Sketch**  

### 4.1 Plain‑English Introduction  
A **sketch** is a quick, hand‑drawn picture that captures the shape, layout, or flow of an idea.  

### 4.2 Formal Definition  
> **Sketch** = *a low‑detail visual representation (paper or digital) used to explore form, layout, or interaction early in the design process.*  

### 4.3 Explain Every Part  

| Element | Plain‑English Meaning |
|---------|-----------------------|
| **Low‑detail** | No fine shading, colors, or exact measurements – just the gist. |
| **Visual representation** | Shows what the product *looks like* or *how it works*. |
| **Explore** | Allows rapid changes; you can erase and redraw. |

### 4.4 Fully Worked Example – Sketching a Mobile Dashboard  

1. **Draw a rectangle** 10 cm × 18 cm (paper size).  
2. **Divide into three horizontal bands** (each 5 cm high) for *Header*, *Content*, *Footer*.  
3. **Add icons** – draw simple circles (≈ 0.5 cm radius) for *Home*, *Search*, *Profile*.  

**Count elements:**  

- Total circles = 3 (icons).  
- Each circle area = π × (0.5 cm)² ≈ 3.14 × 0.25 cm² = **0.785 cm²**.  
- All icons area = 3 × 0.785 cm² = **2.355 cm²**.  

**Interpretation:** The icons occupy a tiny fraction of the total screen (180 cm²), confirming they won’t dominate the layout.  

### 4.5 Connections  
- **Sketches** become **low‑fidelity prototypes** (Section 3).  
- **Sketches** are the first step before moving to **digital wireframes in Figma** (Section 2).  

### 4.6 One‑Sentence Summary  
A sketch is a quick, low‑detail drawing that helps you explore a design’s shape and layout early on.  

### 4.7 Exam Hints & Common Mistakes  

> **⚠️ Exam Hint:** Mention why you chose the layout (e.g., “to separate navigation from content”).  
> **Common mistake:** Treating a sketch as a final design – always keep it rough and editable.  

---  

## 5. **Design as an Improvement on Something (Problem‑Solving Activity)**  

### 5.1 Plain‑English Introduction  
Design is **solving a problem** by making something *better* than what already exists.  

### 5.2 Formal Definition  
> **Improvement** = *the measurable change that moves a product or service from its current state toward a defined, better state.*  

### 5.3 Explain Every Part  

| Term | Meaning |
|------|---------|
| **Current state** | How the product works today (e.g., heavy textbooks). |
| **Better state** | Desired outcome (e.g., lighter, portable holder). |
| **Measurable change** | Something you can count (weight reduction, time saved). |

### 5.4 Fully Worked Example – Reducing Time to Find a Book  

**Current situation:** A student spends **5 minutes** searching a bookshelf for a textbook.  

**Goal:** Reduce search time by **60 %**.  

1. **Calculate target time:**  
   - Desired reduction = 5 min × 0.60 = **3 min**.  
   - Target time = 5 min − 3 min = **2 min**.  

2. **Design solution:** Add a **QR‑code label** on each book that links to a digital catalogue.  

3. **Estimate time saved per scan:**  
   - Scanning QR code = **5 seconds**.  
   - Looking up catalogue = **10 seconds**.  
   - Total = **15 seconds** ≈ **0.25 min**.  

4. **Compare to target:**  
   - New time = 0.25 min (scan) + 0.5 min (walking to shelf) = **0.75 min**.  
   - Reduction = 5 min − 0.75 min = **4.25 min** (85 % reduction).  

**Result:** The QR‑code system exceeds the 60 % goal, improving the user’s experience.  

### 5.5 Connections  
- **Links to** the **brief** concept (Section 6).  
- **Shows** how **quantitative research** (time measurement) can validate an improvement (Section 9).  

### 5.6 One‑Sentence Summary  
Design improves an existing situation by creating a measurable, better outcome that solves a defined problem.  

### 5.7 Exam Hints & Common Mistakes  

> **⚠️ Exam Hint:** Always express improvement as a percentage or absolute number.  
> **Common mistake:** Forgetting to define the *baseline* (current state) before measuring improvement.  

---  

## 6. **Brief & Solution**  

### 6.1 Plain‑English Introduction  
A **brief** tells you *what* problem to solve and *what* constraints exist. A **solution** is the answer you create to satisfy that brief.  

### 6.2 Formal Definition  

- **Brief** = *a concise document that outlines the design problem, target users, constraints, and success criteria.*  
- **Solution** = *the design artifact(s) that meet the brief’s requirements.*  

### 6.3 Explain Every Part  

| Brief Element | Explanation |
|---------------|-------------|
| **Problem statement** | What is wrong now? |
| **Target users** | Who will use the design? |
| **Constraints** | Limits on cost, time, materials, technology. |
| **Success criteria** | How we will know the design works (e.g., “≤ 0.2 kg added weight”). |

| Solution Element | Explanation |
|------------------|-------------|
| **Artifact** | The actual product (prototype, sketch, digital mock‑up). |
| **Evidence of success** | Test results, user feedback, metrics. |

### 6.4 Fully Worked Example – Writing a Brief  

**Problem:** Students carry heavy textbooks (average 2 kg each).  

**Target users:** University undergraduates (age 18‑25).  

**Constraints:**  
- Material cost ≤ £5 per unit.  
- Added weight ≤ 0.2 kg.  

**Success criteria:**  
- User can lift the holder + book with one hand.  
- Weight measured ≤ 0.2 kg.  

**Solution (prototype):** Foam‑board holder (see Section 1.4).  

**Test result:** Measured weight = 0.24 kg → **fails** weight criterion.  

**Iterate:** Switch to thin aluminum sheet (density = 2.7 g / cm³, thickness = 0.1 cm).  

- Volume = 30 × 20 × 0.1 cm³ = 60 cm³.  
- Weight = 60 cm³ × 2.7 g/cm³ = 162 g = **0.162 kg**.  

**Now the solution meets the brief.**  

### 6.5 Connections  
- **Brief** is the starting point for **iteration** (Section 5).  
- **Solution** becomes the **prototype** (Section 3).  

### 6.6 One‑Sentence Summary  
A brief defines the problem and limits; a solution is the design that satisfies those requirements.  

### 6.7 Exam Hints & Common Mistakes  

> **⚠️ Exam Hint:** Always list *all* four brief elements before proposing a solution.  
> **Common mistake:** Ignoring constraints (e.g., cost) when evaluating a solution.  

---  

## 7. **Prototyping Stage & Sketching**  

### 7.1 Plain‑English Introduction  
The **prototyping stage** is where you turn sketches into testable models. **Sketching** is the quick drawing that feeds the prototype.  

### 7.2 Formal Definition  

- **Prototyping stage** = *the phase in the design process where low‑ to high‑fidelity artifacts are built for user testing.*  
- **Sketching** = *the act of drawing ideas on paper or a digital canvas to explore form and interaction.*  

### 7.3 Explain Every Part  

| Part | Meaning |
|------|---------|
| **Low‑fidelity** | Rough, cheap, often paper or cardboard. |
| **High‑fidelity** | Detailed, close to final look (colors, interactions). |
| **Figma** | A cloud‑based design tool for creating high‑fidelity UI mock‑ups. |
| **Iteration** | Repeating sketch → prototype → test → improve. |

### 7.4 Fully Worked Example – From Sketch to High‑Fidelity Mock‑up  

**Step 1 – Sketch (low‑fidelity):**  
- Hand‑draw a phone screen with three buttons (see Section 4).  

**Step 2 – Build low‑fidelity prototype:**  
- Cut cardstock to 9 cm × 16 cm, glue printed button labels.  

**Step 3 – Test with a peer:**  
- Peer clicks each button (paper‑based “press” simulation).  
- Feedback: Buttons too close together.  

**Step 4 – Refine sketch:**  
- Increase button spacing to 2 cm apart.  

**Step 5 – Create high‑fidelity mock‑up in Figma:**  

| Parameter | Value |
|-----------|-------|
| Frame size | 360 px × 640 px |
| Button width | 300 px |
| Button height | 60 px |
| Button vertical spacing | 30 px (instead of 10 px) |
| Colors | Primary: #0066CC, Background: #F5F5F5 |

**Step 6 – Export assets:**  
- Export PNG of each button (size 300 × 60 px).  

**Step 7 – Validate:**  
- Measure total vertical space used:  
  - Header = 50 px  
  - 3 × (60 px + 30 px spacing) = 270 px  
  - Footer = 50 px  
  - Total = 50 + 270 + 50 = **370 px** (≈ 58 % of screen height).  

**Result:** The high‑fidelity mock‑up respects the spacing feedback and is ready for interactive prototyping.  

### 7.5 Connections  
- **Sketching** feeds directly into **low‑fi prototyping** (Section 3).  
- **Figma** is the tool for **high‑fi** work (Section 2).  

### 7.6 One‑Sentence Summary  
The prototyping stage turns sketches into testable models, moving from cheap paper versions to polished digital mock‑ups.  

### 7.7 Exam Hints & Common Mistakes  

> **⚠️ Exam Hint:** Show the progression: sketch → low‑fi → feedback → high‑fi.  
> **Common mistake:** Skipping the low‑fi test and jumping straight to high‑fi, which wastes time if major issues are missed.  

---  

## 8. **Human‑Centered Design (HCD)**  

### 8.1 Plain‑English Introduction  
**Human‑Centered Design** means **designing with real people** at every step, not just for them. It’s a two‑way conversation: designers listen, users test, designers improve.  

### 8.2 Formal Definition  
> **Human‑Centered Design** = *a design approach that involves users throughout the process (empathize, define, ideate, prototype, test) to ensure solutions meet real needs.*  

### 8.3 Explain Every Part  

| Phase | What it means |
|-------|----------------|
| **Empathize** | Understand users’ feelings, motivations, and pain points (via interviews, observations). |
| **Define** | Turn insights into a clear problem statement. |
| **Ideate** | Generate many ideas (divergent thinking). |
| **Prototype** | Build low‑ to high‑fidelity versions to explore ideas. |
| **Test** | Let users try the prototypes and give feedback. |

### 8.4 Fully Worked Example – Empathy Interview & Persona Creation  

**Step 1 – Conduct interview (qualitative):**  
- Ask “What frustrates you about studying at home?”  
- Participant says: *“I lose track of time and end up feeling stressed.”*  

**Step 2 – Code the response:**  
- Tag = **Time‑Management Frustration**.  

**Step 3 – Aggregate (quantitative count):**  
- 5 out of 8 participants mention time‑management → **62.5 %**.  

**Step 4 – Create persona:**  

| Attribute | Value |
|-----------|-------|
| **Name** | Alex (27 y, graduate student) |
| **Goal** | Finish assignments on schedule. |
| **Frustration** | Loses track of time → stress. |
| **Needs** | Simple visual timer and break reminders. |

**Step 5 – Use persona in design:**  
- Design a **“Study‑Timer”** widget for the well‑being app.  

**Step 6 – Prototype & test:**  
- Low‑fi paper mock‑up of timer button.  
- User test: Alex finds the button intuitive, suggests a color change.  

**Result:** The HCD loop produced a feature directly tied to a real user need.  

### 8.5 Connections  
- **Empathy** links to **quantitative vs. qualitative research** (Section 9).  
- **Persona** is an artifact used later in **storyboards** (Section 12).  

### 8.6 One‑Sentence Summary  
Human‑Centered Design puts real users at the heart of every design step, ensuring solutions truly meet their needs.  

### 8.7 Exam Hints & Common Mistakes  

> **⚠️ Exam Hint:** Always cite at least one direct user quote when defining the problem.  
> **Common mistake:** Skipping the **Define** phase and jumping straight to ideation, which leads to unfocused solutions.  

---  

## 9. **Quantitative vs. Qualitative Research**  

### 9.1 Plain‑English Introduction  
**Quantitative research** gives you numbers (how many, how often). **Qualitative research** tells you *why* and *how* people feel.  

### 9.2 Formal Definitions  

- **Quantitative research** = *the systematic collection of numerical data that can be statistically analyzed.*  
- **Qualitative research** = *the collection of non‑numerical data (words, images, observations) that reveal meanings, motivations, and experiences.*  

### 9.3 Explain Every Part  

| Aspect | Quantitative | Qualitative |
|--------|--------------|-------------|
| **Data type** | Numbers (counts, percentages). | Text, audio, video, images. |
| **Tools** | Surveys with check‑boxes, analytics logs. | Interviews, focus groups, diaries, photographs. |
| **Goal** | Measure *what* and *how much*. | Understand *why* and *how*. |
| **Analysis** | Statistics (mean, median, %). | Thematic coding, narrative analysis. |

### 9.4 Fully Worked Example – Mixed‑Methods Study  

**Goal:** Evaluate a new “Well‑being Dashboard” app.  

#### Quantitative Part  

1. **Survey** of 20 users: “How often do you open the app per day?”  
2. **Responses:** 5 × 0, 8 × 1, 4 × 2, 3 × 3.  

**Calculate average usage:**  

\[
\text{Mean} = \frac{(5\cdot0)+(8\cdot1)+(4\cdot2)+(3\cdot3)}{20}
= \frac{0+8+8+9}{20}
= \frac{25}{20}
= 1.25 \text{ times per day}
\]

**Result:** Users open the app on average **1.25 times/day**.  

#### Qualitative Part  

1. **Interview** 3 users about “Why do you open the app?”  
2. **Answers:**  
   - *User A*: “When I feel stressed, I check my mood score.”  
   - *User B*: “I log my sleep after waking up.”  
   - *User C*: “I forget to open it, so I set a reminder.”  

3. **Thematic coding:**  
   - **Stress‑relief** (1 mention)  
   - **Sleep tracking** (1 mention)  
   - **Reminder need** (1 mention)  

**Interpretation:** While usage frequency is modest, users value the app for stress and sleep monitoring, suggesting we should highlight those features.  

### 9.5 Connections  
- **Quantitative** gives the **baseline metric** (1.25 times/day) used in the **brief** (Section 6).  
- **Qualitative** feeds the **empathy** stage of HCD (Section 8).  

### 9.6 One‑Sentence Summary  
Quantitative research provides numbers; qualitative research explains the reasons behind those numbers.  

### 9.7 Exam Hints & Common Mistakes  

> **⚠️ Exam Hint:** Always present at least one statistic *and* one user quote when answering a mixed‑methods question.  
> **Common mistake:** Treating qualitative data as “just anecdotes” without systematic coding.  

---  

## 10. **Artifacts & Tools**  

### 10.1 Plain‑English Introduction  
**Artifacts** are the tangible outputs (sketches, personas, storyboards). **Tools** are the software or physical items we use to create them (Figma, paper, Miro).  

### 10.2 Formal Definitions  

- **Artifact** = *any created object that represents a design idea (e.g., persona, storyboard, prototype).*  
- **Tool** = *the medium or software used to produce an artifact.*  

### 10.3 Explain Every Part  

| Artifact | Example & Purpose |
|----------|-------------------|
| **Persona** | A fictional user profile that guides design decisions. |
| **Problem scenario** | A short narrative (≈ 300 words) describing a user’s current pain point. |
| **Future use scenario** | A narrative showing how the user would interact with the new solution. |
| **Storyboard** | A series of drawings that illustrate a user’s journey step‑by‑step. |
| **Usability report** | Document summarizing test results, issues, and recommendations. |
| **Design‑in‑action video** | A short video (like a Kickstarter pitch) that demonstrates the final solution. |

| Tool | Example & Use |
|------|---------------|
| **Figma** | Digital UI design, high‑fidelity mock‑ups, interactive prototypes. |
| **Miro** | Online whiteboard for affinity diagramming, empathy maps. |
| **Paper & pen** | Low‑fi sketching, quick idea capture. |
| **Camera** | Recording usability tests for later analysis. |

### 10.4 Fully Worked Example – Creating a Persona (Quantitative + Qualitative Data)  

1. **Collect data:**  
   - Quantitative: 12 participants, 8 female, 4 male.  
   - Qualitative: Common quote – “I wish I could track my mood without opening an app every day.”  

2. **Select dominant segment:**  
   - Female, age 25‑35, works from home.  

3. **Build persona:**  

| Field | Value |
|-------|-------|
| **Name** | Maya (29 y, remote graphic designer) |
| **Goal** | Maintain mental health while juggling projects. |
| **Frustration** | Too many apps; wants a quick mood check. |
| **Need** | One‑tap mood widget on desktop. |
| **Quote** | “I need something that fits into my workflow, not another distraction.” |

4. **Use persona:**  
   - Design a **desktop widget** (low‑fi paper prototype).  
   - Test with Maya‑type user → positive feedback.  

**Result:** The persona guided a focused design solution.  

### 10.5 Connections  
- **Persona** is created during the **empathize** phase (Section 8).  
- **Storyboard** will later illustrate the **user journey** (Section 12).  

### 10.6 One‑Sentence Summary  
Artifacts are the concrete outputs of design; tools are the means we use to create them.  

### 10.7 Exam Hints & Common Mistakes  

> **⚠️ Exam Hint:** When asked to produce a persona, always include a direct user quote.  
> **Common mistake:** Forgetting to tie the artifact back to a specific research insight.  

---  

## 11. **Interaction Design Process**  

### 11.1 Plain‑English Introduction  
**Interaction design** is about shaping *how users and digital products communicate*—the steps they take, the feedback they receive, and the overall experience.  

### 11.2 Formal Definition  
> **Interaction Design Process** = *a cyclical series of stages (understand → define → ideate → prototype → test) that focus on the behavior of users with digital systems.*  

### 11.3 Explain Every Part  

| Stage | What you do (plain English) |
|-------|-----------------------------|
| **Understand** | Learn who the users are and what they need (research). |
| **Define** | Write a clear problem statement. |
| **Ideate** | Generate many possible solutions (brainstorm). |
| **Prototype** | Build low‑ to high‑fidelity models. |
| **Test** | Observe real users interacting, collect feedback. |
| **Iterate** | Refine the design based on test results; repeat. |

### 11.4 Fully Worked Example – Designing a “Break‑Reminder” Feature  

1. **Understand** – Survey 15 remote workers; 10 say they forget to take breaks.  
2. **Define** – “Create a non‑intrusive reminder that prompts a 5‑minute break every 90 minutes.”  
3. **Ideate** – Brainstorm three ideas:  
   - Pop‑up notification.  
   - Subtle sound cue.  
   - Animated icon in the corner.  
4. **Prototype (low‑fi)** – Sketch three screen mock‑ups on paper, each showing one idea.  
5. **Test** – Ask 3 users to interact with each sketch (paper‑based “click” simulation).  
   - Feedback: Pop‑up feels interruptive; sound cue is ignored; icon is liked.  
6. **Iterate** – Refine icon design, add tooltip “Time for a short stretch!”.  

**Result:** The final high‑fidelity prototype (in Figma) shows the icon with tooltip, ready for implementation.  

### 11.5 Connections  
- **Iterative** nature mirrors **Human‑Centered Design** (Section 8).  
- **Quantitative** data (survey) informs the **understand** stage.  

### 11.6 One‑Sentence Summary  
Interaction design is a repeatable cycle that shapes how users act with digital products, constantly improving through testing.  