
> [!faq] About this Lecture 
> Class: 41025
> Subject: #introductionToSoftwareDevelopment
> Date: 12/03/2025 
> Topics: #agile #software-engineering #UML #OOP #github #user-stories #project-management

## Agile Methodology

### Overview
Agile is an iterative approach to software development and project management. The workshop uses a **case study project brief** as its running example throughout all exercises.

### Core Tools
- **Miro Board** — used for visual documentation, theory mapping, and team collaboration
  - Set up with your UTS email
  - Can create a Miro team for group assignments
  - Used for: constraints/risks mapping, user story maps

---

## User Stories

### Definition
User stories are the **fundamental unit of agile projects**. They:
- Are expressed from the **end user's perspective**
- Focus on **what** is needed, not **how** it is built

### Template
```
As a <someone>, I want to <perform an action>, so that I can <achieve a goal>
```

### Key Attributes of a User Story
- **Acceptance Criteria** — conditions that must be met for the story to be "done"
- **Estimate** — sizing/effort for the story
- **Priority** — order of importance
- **Release & Iteration** — which sprint/release it belongs to
- **Feature** — the feature group it belongs to

### INVEST Criteria (Good User Story Checklist)

| Criterion | Description |
|-----------|-------------|
| **Independent** | Can be developed and delivered on its own, without depending on other stories |
| **Negotiable** | The goal should be clear; implementation details are negotiable |
| **Valuable** | Provides real value to the end user or customer |
| **Estimable** | Can be reasonably sized and estimated for effort and complexity |
| **Properly Sized** | Small enough to complete in a single iteration |
| **Testable** | Has clear acceptance criteria |

> 💡 **Exam/Practice Hint:** When writing user stories, always verify against ALL six INVEST criteria. A story that fails even one criterion needs to be revised.

---

## Non-Functional Requirements (NFRs)

- NFRs are **also expressed as user stories** in agile
- Examples: performance, security, scalability, accessibility
- These should be developed alongside functional user stories for the case study

---

## User Story Map

### Purpose
- Organises user stories by **features/tasks** (columns) and **priority** (rows)
- Used to **plan releases and iterations**

### Structure
```
Feature 1        | Feature 2        | Feature 3
─────────────────┼──────────────────┼───────────────
Story (High Pri) | Story (High Pri) | Story
─────────────────┼──────────────────┼───────────────
Story (Med Pri)  | Story (Med Pri)  |
─────────────────┼──────────────────┼───────────────
Story (Low Pri)  |                  |
```
- **Rows** represent release/iteration cuts
- **Columns** represent user activities or features

---

## Software Design — Object-Oriented Programming (OOP)

> ⚠️ **Prerequisite:** This section assumes prior learning in OOP.

### Four Pillars of OOP

- **Encapsulation** — bundling data and methods that operate on that data within a class; restricting direct access to some components
- **Abstraction** — hiding complex implementation details, exposing only what is necessary
- **Polymorphism** — the ability of different objects to respond to the same interface/method in different ways
- **Inheritance** — a class (child) can acquire properties and behaviours from another class (parent)

> 📌 **Context:** Only a **few classes** are needed for this course's backend (Python). Coverage is limited.

---

## UML Class Diagrams

### What is UML?
**Unified Modeling Language (UML)** is a standardised, general-purpose visual modelling language used to:
- Visualise system structure and behaviour
- Specify and document software systems
- Serve as a **blueprint for coding**

### Class Diagram Components

#### Classes
- **Class Name:** Written in `CamelCase`
- **Attributes:** `name : type` with visibility modifier
- **Methods:** `methodName(parameters) : returnType` with visibility modifier

#### Visibility Modifiers

| Symbol | Visibility |
|--------|-----------|
| `+` | Public |
| `#` | Protected |
| `-` | Private |
| `~` | Package |

### Relationships

| Relationship | Description | Arrow Style | Implementation |
|---|---|---|---|
| **Association** | One class uses/knows another (holds reference) | Solid line → (uni-directional) | Class attributes |
| **Dependency** | Temporary usage | Dashed line → (dependent → supplier) | Method parameter, local variable, static call |
| **Generalization / Inheritance** | "Is-a" relationship | Solid line with hollow triangle △ → parent | Class inheritance |
| **Realization** | Interface implementation | Dashed line with hollow triangle △ → interface | Interface |
| **Aggregation** | Weak "has-a"; parts can live without whole | Solid line with hollow diamond ◇ → whole | Independently created objects referenced by another class |
| **Composition** | Strong "has-a"; parts cannot exist without whole | Solid line with filled diamond ◆ → whole | Objects created and owned by another; lifecycle is bound together |

> 💡 **Key distinction:** Aggregation vs Composition
> - **Aggregation:** "A department has employees" — employees exist independently
> - **Composition:** "A house has rooms" — rooms cannot exist without the house

### Multiplicity Notation

| Notation | Meaning |
|----------|---------|
| `1` | Exactly one |
| `0..1` | Zero or one (optional) |
| `*` | Many (unbounded) |
| `0..*` | Zero or many |
| `1..*` | One or more |
| `n` | Exactly $n$ |
| `m..n` | Between $m$ and $n$ |

### Example UML Class Diagram (Conceptual)
```
┌──────────────────┐        ┌──────────────────┐
│    Customer      │        │     Order        │
├──────────────────┤  1..*  ├──────────────────┤
│ - id : int       │◄───────│ - orderId : int  │
│ - name : String  │        │ - date : Date    │
├──────────────────┤        ├──────────────────┤
│ + placeOrder()   │        │ + getTotal()     │
└──────────────────┘        └──────────────────┘
```
- One `Customer` can have one or more `Order`s
- `Order` has an association back to `Customer`

### Diagramming Tools
- **Visual Paradigm (Community Version)** — recommended; good alignment with UML terms
- Other diagramming tools are acceptable

---

## GitHub & GitHub Projects

### Setup Steps
1. Create a GitHub account with your **UTS email**
2. Set up a **shared repo** for the workshop
3. Create a **GitHub Project** linked to the repo
4. Add user stories as **Issues** (this is called "planning user stories")
5. Set up a **shared repo in GitHub Classroom** for assignments (invites sent in Week 4)

### Workflow: User Stories → GitHub Issues
```
Write User Story → Create Issue in GitHub → Add to Project Board → Assign to Iteration
```

### Why GitHub Projects?
- Tracks progress visually (Kanban-style)
- Links issues (user stories) to code commits
- Supports agile sprint planning

---

## Key Connections Between Topics
```
User Stories ──────────► GitHub Issues ──────────► Sprint/Iteration Planning
     │
     ▼
User Story Map ──────────► Feature/Release Planning
     
OOP Concepts ──────────► UML Class Diagram ──────────► Backend Code (Python)
```

---

## Tools Summary

| Tool | Purpose | Setup Required |
|------|---------|---------------|
| **Miro** | Visual documentation, story maps, diagrams | UTS email account |
| **Visual Paradigm (Community)** | UML class diagrams | Free download |
| **GitHub** | Version control, issue tracking, project management | UTS email account |
| **GitHub Classroom** | Assignment submission and collaboration | Invite in Week 4 |

---

## References & Further Reading
- UML specification: unified modelling language standard
- GitHub Docs: [https://docs.github.com](https://docs.github.com)
- Miro: [https://miro.com](https://miro.com)
- Visual Paradigm Community: [https://www.visual-paradigm.com](https://www.visual-paradigm.com)