
> [!faq] About this Lecture 
> Class: 31260
> Subject: #fundamentalsOfInteractionDesign 
> Date: 10/03/2025 
> Topics: #design 

## Overview

- Cognition
- Perception
    - Visual perception & Gestalt laws
    - Metaphors & Skeuomorphism
    - Auditory perception
    - Tactile perception

---

## Cognition

### Definition

> Cognition is a series of processes whereby the **sensory input is transformed, reduced, elaborated, stored, recovered and used** by the human.

### Cognition Across Disciplines

**In Science:**

- Includes attention of working memory, comprehension, language production, calculating, reasoning, problem solving, and decision making
- Brain regions: Reptilian Brain (survive/react/repeat), Midbrain (feel/remember/interact), Neocortex (talk/think/move/create/learn)

**In Psychology & Cognitive Science:**

- Refers to the **information processing** of an individual's psychological functions

**In Social Psychology:**

- Social cognition explains attitudes, attribution, and group dynamics — thinking about and understanding other people

### Why is Cognition Important in Design?

Understanding cognition explains why some systems work and others fail for certain types of people. People:

- Are capable of remarkable feats
- Can perceive and respond rapidly to external stimuli
- Can solve complex problems
- Can coordinate actions with others

**But behaviour is also highly variable due to:**

- Lapses in concentration
- Changes of mood, motivation, and emotion
- Prejudices and fears
- Errors and misjudgements

### Designing with Cognition in Mind

Understanding cognition can inform:

- **Layout** of interactive information (menus, web pages)
- **Choice of graphical representations** (icons, animations)
- **Which interaction modalities to use** (speech, gesture, touch, voice)

---

## Human Sensory Inputs

### The Five Core Senses

|Sense|Description|
|---|---|
|Vision|Perceiving objects through the eyes|
|Touch|The first sense humans develop|
|Smell|Via nostrils used for breathing and smelling|
|Taste|Perception of flavour in the mouth and throat|
|Hearing|Perception of sound|

### Additional Senses (Beyond the Core Five)

- **Vestibular sense** — balance and spatial orientation
- **Proprioception** — awareness of body position and movement
- Together these "help round out our ability to connect and interact with the world around us"

---

## The Feedback Loop: An Interactive Dialogue

### Core Concept

> Interaction is a **purposed DIALOGUE** between systems and users through acting, processing, and sensing. Interactive products contain _"embedded electronics that respond to people's actions"_ — Rogers et al., 2011

### The Loop Explained

```
HUMAN ←→ SYSTEM
Senses ←── Displays
Effectors ──→ Sensors
Perception / Memory / Cognition / Action ←→ Memory / Processing
```

**Human side:**

- **Input:** Information enters via senses (sight, hearing, touch, smell, taste)
- **Output:** Effects on surroundings via body **effectors** (hands, voice, motion)

**System side:**

- **Input:** Captures user actions via **sensors** (keyboards, microphones, knobs, biometric sensors)
- **Output:** Presents information via **displays** (screens, sound, motion, lights, aromas)

### In IxD, Focus is Primarily On

- Visual, audible, and tactile sensory inputs/outputs
- (Though olfactory and gustatory are emerging options)

### Interaction Terminology

- **Modes of interaction** — how systems interpret our inputs
- **Modalities of interaction** — the mediums available for input & output
- **Types of interaction** — what we do with the system
- _(Covered in detail in Week 5)_

---

## Sensory Data Types in IxD

### Visible Data

- **What we see** — screens, displays, visual interfaces
- **What the system sees** — cameras, computer vision, gesture recognition
- _Example: transparent display overlaying physical product (55" FHD Transparent display)_

### Audible Data

- **What we hear** — system outputs sound
- **What the system hears** — microphones, voice recognition
- _Example: Smart speaker with voice assistant_

**How hearing works:**

1. Sound waves enter the outer ear and travel to the eardrum
2. Eardrum vibrates and sends vibrations to three bones in the middle ear
3. Bones amplify vibrations and send to the inner ear (cochlea); hair cells release neurochemical messengers
4. Auditory nerve carries electrical signals to the brain for interpretation

### Tactile Data

- **What we feel** — haptic feedback, vibration, texture
- **What the system feels** — pressure sensors, touch screens, force sensing
- _Examples: Braille pad by Sebastien Delorme; Vibrotactile feedback gloves (cutaneous sense); Interactive force-sensing rehabilitation tiles_

### Gustatory Data

- **What we taste** and **what the system "tastes"**
- _Examples:_
    - **Vocktail** (Ranasinghe et al., 2017) — virtual cocktail pairing digital taste, smell, and colour sensations using silver electrodes simulating sour, bitter, and salty tastes
    - **Digital Taste Simulator** — Nimesha Ranasinghe
    - **Electrode-embedded chopsticks** — simulating saltiness

### Olfactory Data

- **What we smell** and **what the system smells/emits**
- _Examples:_
    - Interactive Scent Library at World of Coca-Cola
    - FeelReal VR scent mask (smell-o-vision add-on for VR headsets)
    - Oil-blending ambient scent device (networked app-controlled)
    - Interactive Scenting Kiosk (43", Aroma 360º)

---

## Two Key Areas of Perception in IxD

1. **Visual Perception** (including Gestalt Principles and Metaphors)
2. **Auditory Perception**

---

## Visual Perception: Gestalt Principles

### Definition

> **Gestalt** (German: _"pattern" or "configuration"_) is a Psychology term meaning **"unified whole"**. It refers to theories of visual perception developed by German psychologists in the 1920s.

These theories describe how people tend to **organise visual elements into groups or unified wholes**.

> Gestalt principles describe how the human eye **perceives** visual elements and play a large role in making interfaces **usable and easy to understand**.

### All 10 Gestalt Principles

#### Principle 1: Law of Prägnanz (Simplicity)

> People will perceive and interpret ambiguous or complex images as the **simplest form(s) possible**.

- We prefer things that are clear, simple, and ordered
- When confronted with complex shapes, we reorganise them into simpler components or a simpler whole
- _Example: Olympic rings — perceived as five separate circles, not one complex interlocking shape_

**Design implication:** Keep UI designs as simple as possible; users will naturally try to reduce complexity.

---

#### Principle 2: Closure

> When seeing a complex arrangement of elements, we tend to look for a **single, recognisable pattern**.

- Our eye fills in missing information to form a complete figure
- We combine parts to form a simpler whole (opposite direction to Prägnanz)
- _Examples: WWF panda logo; Pac-Man-like shapes forming a triangle_

**Design implication:** Incomplete shapes/logos can still be recognised — useful for minimalist icon design.

---

#### Principle 3: Symmetry and Order

> People tend to perceive objects as **symmetrical shapes that form around their centre**.

- Our eyes look for symmetry and order
- Symmetry takes **precedence over proximity**
- _Example: Three pairs of `{ }` brackets — perceived as 3 pairs (symmetry) not 6 individual items (proximity)_

**Design implication:** Use symmetry to communicate information quickly and clearly.

---

#### Principle 4: Figure/Ground

> Elements are perceived as either **figure** (element in focus) or **ground** (background on which the figure rests).

- The relationship can be **stable** (easy to determine) or **unstable** (ambiguous)
- Smaller object = figure; larger object = ground
- Convex shapes tend to be perceived as figure over concave shapes
- _Examples: Rubin's vase (faces vs. vase); Hero & Villain poster series by Simon C Page_

**Design implication:** Ensure clear figure/ground separation in UI to avoid visual confusion.

---

#### Principle 5: Uniform Connectedness

> Elements that are **visually connected** are perceived as more related than elements with no connection.

- Lines connecting elements imply relationship — lines don't even need to touch the elements
- This is considered the **strongest** Gestalt grouping principle
- _Example: Square connected to circle by a line — the pair is seen as more related than two separate squares or two separate circles_

**Design implication:** Use lines, borders, or visual links to show relationships between UI elements.

---

#### Principle 6: Common Regions

> Elements are perceived as part of a group if they are located **within the same closed region**.

- Everything inside an enclosure = related; everything outside = separate
- Placing elements on a different background colour also creates common regions
- _Example: Westpac banking app — items within a card are perceived as grouped_

**Design implication:** Use cards, boxes, and background colours to group related content.

---

#### Principle 7: Proximity

> Objects that are **closer together** are perceived as more related than objects that are further apart.

- Elements positioned close together are seen as a group, not individuals
- Especially true when elements in the group are closer to each other than to any outside elements
- _Example: Adidas logo — three stripes close together form a unified mark_

**Design implication:** Use spacing intentionally; items placed near each other imply relationship.

---

#### Principle 8: Parallelism and Relatedness

> Elements that are **parallel** to each other are seen as more related than elements that are not parallel.

- Lines are often interpreted as pointing or moving in a direction
- Parallel lines are seen as pointing/moving in the same direction → thus related
- _Example: Three parallel horizontal lines grouped together vs. isolated diagonal lines_

**Design implication:** Use parallel alignment to imply that elements belong to the same category.

---

#### Principle 9: Similarity

> Elements that share **similar characteristics** are perceived as more related than those that don't.

- Characteristics include: colour, shape, size, texture, orientation, etc.
- When viewers see similar characteristics, they perceive elements as related
- _Examples: Red circles among black circles draw the eye and imply a grouping_

**Design implication:** Use consistent visual styling for related elements; use contrast to differentiate categories.

---

#### Principle 10: Focal Points

> Elements with a **point of interest, emphasis, or difference** will capture and hold the viewer's attention.

- Our attention is drawn toward **contrast** — the element that is unlike the others
- _Example: One red square among many black circles immediately draws attention_
- Technique: Making items "pop" with a drop shadow

**Design implication:** Use contrast, colour, shape difference, or shadows to direct user attention to key UI elements (e.g. CTA buttons).

---

### Gestalt Principles Summary Table

|#|Principle|One-Line Summary|
|---|---|---|
|1|Law of Prägnanz|We see the simplest possible form|
|2|Closure|We fill in gaps to complete shapes|
|3|Symmetry & Order|We see symmetrical pairs around a centre|
|4|Figure/Ground|We separate foreground from background|
|5|Uniform Connectedness|Visual links = strong relationship signal|
|6|Common Regions|Elements in same enclosure = grouped|
|7|Proximity|Closer = more related|
|8|Parallelism|Parallel = moving in same direction = related|
|9|Similarity|Shared traits = perceived as related|
|10|Focal Points|Contrast captures attention|

> 📺 **Recommended:** _The Gestalt Principles for User Interface Design_ — NN Group video series (9 parts)

---

## Metaphors in Interaction Design

### Definition

> **Metaphor:** _"a thing regarded as representative or symbolic of something else, especially something abstract"_ — Oxford English Dictionary

### Role of Metaphors in IxD

- Familiar metaphors help users **understand the unfamiliar**
- The entire computer desktop was built on the metaphor of the **physical office**
    - Desktop → physical desk surface
    - Documents → paper files
    - Folders → manila folders
    - Paper bin/trash → waste bin
- _Historical example: STAR Interface, XEROX 1981 — introduced the physical office metaphor to computing_

### Do Metaphors Die?

- Some metaphors outlive the physical objects they reference
- _Example: The floppy disk → save icon → USB icon → cloud icon (still evolving)_
- Even users who have never seen a floppy disk still understand the save icon — the metaphor has become **symbolic**

---

## Skeuomorphism in Interaction Design

### Definition

> **Skeuomorph:** _"an element of a graphical user interface which mimics a physical object"_ — Oxford English Dictionary

### How it Works

- A skeuomorph gives users **immediate knowledge** about how to interact with an interface
- It replicates the appearance of a physical object in digital form
- _Example: Apple's calculator app evolution — from a photo-realistic calculator to a flat design_

### Examples

- Apple's iBooks app (2010) — bookshelf metaphor with wooden shelves
- iOS 6 vs iOS 7 — shift from skeuomorphic to flat design
- Susan Kare's early Apple icons — trash can, floppy disk, document, bomb
- Windows folder icon ↔ physical Manila folder

### Advantages and Disadvantages

**Advantages:**

- Immediate learnability — users already know how to use the physical counterpart
- Reduces cognitive load for new users

**Disadvantages:**

- Literal confusion — does the house icon take me to a _house_ or a _home page_?
- Photo-realistic representations can be misleading
- Replicating analogue in digital form can be limiting/ironic
- May constrain new digital-native interaction paradigms

### The Digital Aesthetic Question

> Replicating analogue in digital form is ironic. One day someone will develop something new with a **digital aesthetic**.

- What does a purely digital aesthetic look like?
- _Examples referenced: The Matrix, TRON (gmunk.com)_

---

## Auditory Perception

### Definition

> **Auditory perception (hearing):** the ability to **perceive sounds** by detecting vibrations — changes in the pressure of the surrounding medium through time — through an organ such as the ear.

### Audible Spectrum

- Humans can hear sounds in the range of **20 Hz – 20 kHz**
- The highest note on a piano is approximately **4 kHz**

### Three Features of Sound Waves

|Feature|Perceived As|
|---|---|
|Amplitude|Volume|
|Frequency|Pitch|
|Duration|Length of time sound lasts|

### How Interactive Products Use Auditory Perception

Audio in interactive products aids **usability** in these areas:

- **Ambience** — background sound to set mood/context
- **Sound Effects** — event feedback (e.g. Mario jump, coin collect)
- **Auditory Feedback** — confirmation of user actions (e.g. Mac startup sound, Windows startup chime)
- **Music** — emotional engagement
- **Speech/Voice** — communication and instruction

### Sound Thinking: Types of Sound in Design

- **Real** — actual recordings of real-world sounds
- **Hyper-real / Surreal** — exaggerated or impossible sounds
- **Psychological / Emotive** — designed to trigger emotions
- **Metaphorical / Figurative** — sounds that represent abstract concepts
- **Symbolic / Subliminal** — sounds with learned or embedded meaning

### Sound Skeuomorph

> A **sound skeuomorph** is a sound element of a user interface that **mimics** the real world.

_Examples: Camera shutter sound on smartphones, keyboard click sounds on touchscreens_

> 📺 **Recommended (watch at home):** _The Psychology Behind the World's Most Recognisable Sounds_ — WIRED (YouTube)

---

## Tactile Perception

### Definition

> **Tactile perception (touch perception):** the brain's ability to understand (perceive) information coming from the **skin**, particularly the skin on the **hands**.

### Tangible User Interfaces (TUIs)

Physical objects that interact with digital systems, engaging tactile perception:

**Examples:**

- **Reactable (2017)** — electronic musical instrument with tabletop tangible UI developed at Universitat Pompeu Fabra, Barcelona (Sergi Jordà, Marcos Alonso, Martin Kaltenbrunner, Günter Geiger)
    - Physical objects placed on a table control sound synthesis and music
- **inFORM (2013)** — Tangible Media Group, MIT (Leithinger, Follmer, Hiroshi Ishii)
    - A shape-display table allowing remote physical collaboration — objects and hands can be represented physically in a remote location
- **Ableton Push 3 Controller** — grid-based tactile music controller
- **Braille pad** (Sebastien Delorme) — tactile reading device for visually impaired users
- **Vibrotactile feedback gloves** — use the cutaneous (skin) sense to convey information

---

## Multi-Sensorial Experiences

### Cognitive Augmentation Through Multiple Senses

**Example: Sense.Seat**

- An interactive piece of furniture leveraging **multisensorial priming** and embedded interaction
- Demonstrates how combining tactile, auditory, and visual inputs can augment the user's cognitive experience
- Source: [Vimeo — Sense.Seat](https://vimeo.com/294945533)

---

## Key Connections and Relationships

```
Cognition
  └── Shaped by sensory inputs (vision, hearing, touch, smell, taste, vestibular, proprioception)
       └── Perception
            ├── Visual Perception
            │    ├── Gestalt Principles (organising visual elements)
            │    └── Metaphors & Skeuomorphism (leveraging prior knowledge)
            ├── Auditory Perception
            │    └── Sound types, spectrum, skeuomorphs
            └── Tactile Perception
                 └── TUIs, haptics, vibrotactile feedback
```

---

## References and Tools Mentioned

|Resource|Type|
|---|---|
|Rogers et al. (2011)|Textbook citation — interactive products definition|
|Gestalt principles (1920s German psychologists)|Foundational theory|
|Oxford English Dictionary|Definitions of metaphor and skeuomorph|
|Susan Kare (Apple/Facebook icons)|Historical design example|
|STAR Interface, XEROX 1981|Historical HCI example|
|Reactable — Universitat Pompeu Fabra|TUI research example|
|inFORM — MIT Tangible Media Group|TUI research example|
|Vocktail — Ranasinghe et al., MM'17|Gustatory HCI research|
|Sense.Seat|Multisensorial IxD example|
|NN Group — Gestalt Principles Video Series|Recommended viewing|
|WIRED — Psychology of Recognisable Sounds|Recommended viewing|
|[gmunk.com](https://gmunk.com)|Digital aesthetic reference (TRON)|
|Bongers et al., TEI 2014|Interactive Rehabilitation Tiles paper|