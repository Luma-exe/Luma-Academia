
> [!faq] About this Lecture 
> Class: 31260
> Subject: #fundamentalsOfInteractionDesign 
> Date: 2/04/2025 
> Topics: #design 

**Incomplete Missing Part 2**

## Recap — What We've Covered So Far

Building up to this lecture, the course has covered:

- How people think about and perceive their interactions with interfaces, particularly visual ones
- How design principles, laws of visual perception, and usability principles affect understanding and discoverability — and can both support and hinder users achieving their goals
- How to use research publications to explore a design problem space
- How to conduct user interviews to understand user situations and goals
- How to analyse user research through Affinity Diagramming
- How to represent users and imagine how they use a solution via conceptual models (personas, scenarios)

---

## Lecture Overview

- Conceptualising interaction
- Mental models
- Conceptual models
- Interaction types

---

## Conceptualising Interaction

Once you have a solid understanding of the **problem space** (e.g. "wellbeing at home"), you can begin to conceptualise the design of the interactive experience.

**Interaction design** is concerned with:

- **Input / output** — what goes into and comes out of the system
- **"How do I…?"** — how users figure out what to do and how to do it
- The loop of: _feel → do → [system] → feel → do..._

---

## Mental Models

### Definition

> Mental models are deeply-held **internal images** of how the world works — images that limit us to familiar ways of thinking and acting. Very often, we are not consciously aware of our mental models or the effects they have on our behavior. — Senge, P.M. (1990). _The Fifth Discipline._ NY: Doubleday Currency

In short: **generalisations about how things around us work/function.**

### Key Characteristics

Mental models are:

- **Personal** — unique to each individual user
- **Partial** — users rarely have a complete picture
- **Uncertain** — users may not be sure if their model is correct
- **Dynamic** — mental models change with experience and use

Because of this, for the same device, different users may understand its functions in completely different ways and to different levels of depth.

### Mental Models and Technology Use

- Each user brings their **own** mental model to any task or tool
- A user's mental model **updates** as they gain more experience with a product
- The implication for design: we cannot assume all users think about a system the same way

### Mental Models and Design

The central design aim is to:

> **Design systems to match what people already know**, so they can learn to use new systems more easily.

This directly connects to principles already studied:

|Framework|Relevant Principle|
|---|---|
|Design Principles (Norman, 1988)|Affordances and mapping|
|Usability Principles (Preece et al., 1994)|Reduce cognitive load; maintain consistency and clarity|
|Usability Principles (Sommerville, 1995)|Consistency and user familiarity|
|Usability Principles (Macaulay, 1995)|Consistency and naturalness|
|Usability Heuristics (Nielsen, 2021)|Match between system and real world|

**User Familiarity (Sommerville, 1995):**

> The interface should use terms and concepts drawn from the experience of the target users.

**Match Between System and Real World (Nielsen/NNGroup, 2024):**

> Designers should endeavour to mirror the language and concepts users would find in the real world.

### Problems With Mental Models

Users can develop **wrong or incomplete** mental models of how devices work. Common characteristics of faulty mental models:

- Poor and often incomplete
- Easily confused by similar-looking systems
- Based on inappropriate analogies
- Even rooted in superstition (e.g. "the more I push the button, the faster it responds")
- Lead to frustrating behaviours: mashing keys, repeated clicking, etc.

### Mental Model Exercises (Lecture Examples)

**Exercise 1 — Thermostat:** You get home late, your place is steaming hot, you want to cool it down as fast as possible.

- Option A: Set thermostat as low as it goes (15°C)?
- Option B: Set it to your desired temperature (22°C)?

_Most people choose A — but thermostats don't work faster when set lower. This is a faulty mental model._

**Exercise 2 — Pedestrian Crossing Button:** You're late and need to cross the road. The light just turned green for traffic.

- Option A: The more I push the button, the quicker the light changes
- Option B: Just once is enough — it's designed that way

_Option A is a very common faulty mental model._

**Key insight:** Mental models are not always accurate, but they drive user behaviour regardless.

---

## Conceptual Models

### The Limitation of Mental Models for Designers

While mental models belong to individual users and are useful for describing existing knowledge, they are **not directly useful for interaction designers** — you can't design a mental model, you can only influence one.

### Definition

> In Interaction Design, **Conceptual Models** are systematisations of processes, or representations of how tasks **should be carried out** — abstractions of things in the real world.

They may be thought of as the ideal "mental model" of how the system functions — the designer's planned version.

### What Conceptual Models Do

- Provide users with a **high-level understanding** of how a design works
- Allow designers to **match** how the design works with users' existing mental models → more usable and intuitive products
- Help users **develop the right mental models** over time
- Are shaped through the application of **design and usability principles**

### The Designer–Interface–User Relationship

```
Designer                Interface               User
   |                        |                    |
[Conceptual Model]  →  [Designs a        →   [Tests &
(the plan for           representation]       interprets]
 the design)                ↑                    |
                    [Synthesis of         [Mental Model]
                      research]           (how user sees it)
```

_(Based on: Mental and Conceptual Models in design, Alana Brajdic, UX Collective)_

The designer communicates their conceptual model **via design principles** → this shapes how the interface is built → which in turn shapes and trains the user's mental model.

### Real-World Examples

|User's Mental Model|Designer's Conceptual Model|
|---|---|
|Filling up a physical shopping trolley|Dragging an item into a virtual trolley in a shopping app|
|Writing an appointment in a paper diary|Saving an event in a digital calendar app|
|Playing physical tennis (swinging a racket)|Wii controller as a virtual racket in Wii Sports Tennis|

### Steps in Formulating a Conceptual Model

1. What will users be **doing** when carrying out their activities?
2. How will the **system support** these activities?
3. What kind of **interface metaphor**, if any, will be appropriate?
4. What kinds of **interaction types** will be used? (instructing, conversing, manipulating, exploring)

> Always keep in mind how the **user will understand** the underlying conceptual model when making design decisions.

### Conceptual Model Exercise (Complete at Home)

The pedestrian crossing button scenario raises these design/usability violations:

- **Affordances:** Buttons are for pushing — so users expect pushing = result
- **Feedback:** Is the system even working after I press it?
- **Visibility of system status:** How long do I have to wait?
- **Constraints:** Nothing stops me from pressing it multiple times
- **Mapping / match with real world:** I push → I expect to receive → but there's no proportional relationship

_Task: Design a conceptual model that retrains the mental model of "the more I push, the faster the light changes."_

---

## Interaction Types

### Modes, Modalities, and Types

When studying human ↔ technology interaction, we are interested in:

|Term|Meaning|
|---|---|
|**Modes of interaction**|The way systems interpret our inputs|
|**Modalities of interaction**|The mediums we have for input and output|
|**Types of interaction**|What we actually _do_ with the system|

### Definition of Interaction Types

> "Another way of conceptualizing the design space is in terms of the interaction types that will underlie the user experience. Essentially, these are the ways a person interacts with a product or application." — Preece et al. (2015), _Interaction Design: Beyond Human-Computer Interaction_, pp. 47–48

**Preece et al. propose four main interaction types:**

### The Four Interaction Types

#### Instructing

- **Definition:** Issuing commands using system input channels such as keys, buttons, and menus; selecting options
- **Best for:** Quick, efficient interaction; repetitive actions performed on multiple objects
- **Examples:** Telling the time, printing/attaching a file, sending mail, turning Bluetooth on, voice commands like "dim the lights" or "volume up"
- **Devices:** Keyboards, voice assistants (command mode), ULO interactive surveillance camera

#### Conversing

- **Definition:** Underlying model is a two-way conversation with another human — not just obeying orders, but matching as a partner
- **Best for:** Children, people who are less comfortable with technology, people with specific access needs, specialised applications (phone services, voice UIs)
- **Examples:** Siri, Google Assistant, Alexa, chatbots
- **Key difference from Instructing:** More back-and-forth; system responds contextually rather than just executing a discrete command
- **Reference:** Cathy Pearl, _Designing Voice User Interfaces_

#### Manipulating

- **Definition:** Effecting or operating objects in a virtual or physical space — moving, dragging, pushing, opening, closing, etc.
- **Best for:** "Doing" types of tasks — designing, drawing, flying, driving, resizing windows
- **Examples:** Dragging a file to the recycling bin, arcade games, opening a door, gesture-based interfaces
- **Examples in media:** Minority Report gesture-based UI (2002), MagixTable interactive tabletop, touchscreen design apps

#### Exploring

- **Definition:** Moving through a virtual or physical environment, discovering and learning things
- **Best for:** Navigation, discovery, learning through environment
- **Examples:** Navigating 3D virtual worlds, Google Maps Street View, adventure games, VR environments
- **Devices/Examples:** Oculus Rift VR headset, Google Maps Immersive View (AI-based), Assassin's Creed Odyssey open world

### Which Interaction Type Is Best?

|Interaction Type|Best Suited For|
|---|---|
|Manipulating (direct manipulation)|"Doing" tasks — designing, drawing, flying, driving, window management|
|Instructing|Repetitive tasks — spell checking, file management|
|Conversing|Children, technophobes, users with access needs, specialised apps (SIRI, phone services)|
|Hybrid|Complex applications (harder to learn but more powerful)|

> Hybrid interaction types are often employed but can be **harder to learn**.

### Interaction Types × Interaction Modalities

Interaction types (the _what_) combine with interaction modalities (the _how/format_):

|Modalities|Description|
|---|---|
|**Visual**|Screen-based output|
|**Audio**|Sound-based input/output|
|**Tactile**|Touch and haptic feedback|
|**Kinaesthetic**|Full body movement|

Many combinations are possible. The guiding principle:

> **The right interaction type is always the one that best supports the user experience.**

---

## Key Relationships Between Concepts

```
Mental Model (user's internal understanding)
        ↕  [Designer tries to bridge the gap]
Conceptual Model (designer's systematised plan)
        ↓  [Expressed through]
Interaction Types + Modalities
        ↓  [Delivered via]
Interface (affordances, feedback, constraints, mapping, visibility)
        ↓  [Shapes and updates]
Mental Model (user's improved understanding over time)
```

---

## References

- Senge, P.M. (1990). _The Fifth Discipline: The Art and Practice of the Learning Organization._ NY: Doubleday Currency
- Preece, J., Rogers, Y., & Sharp, H. (2015). _Interaction Design: Beyond Human-Computer Interaction_ (4th ed.) — Chapter 2
- Sommerville, I. (1995). _Software Engineering_ (5th ed.). Addison Wesley Longman
- Nielsen Norman Group. (2024). _Ten Usability Heuristics._ [https://www.nngroup.com/articles/ten-usability-heuristics/](https://www.nngroup.com/articles/ten-usability-heuristics/)
- NNGroup video on Mental Models: [https://www.nngroup.com/videos/mental-models/](https://www.nngroup.com/videos/mental-models/)
- Brajdic, A. _Mental and Conceptual Models in Design._ UX Collective

---

## Connections to Other Topics

- **Affordances & Mapping** (Norman) — directly support or undermine mental model formation
- **Usability Heuristics** (Nielsen) — "match between system and real world" is essentially about aligning conceptual models with mental models
- **Affinity Diagramming** — used to surface patterns in user mental models from interview data
- **Personas & Scenarios** — tools for communicating user mental models to the design team
- **AT3 Design Stages** — this lecture sits in the **Ideate** phase; conceptual models are a key ideation output before prototyping