
> [!faq] About this Lecture
> Class: INFS3003
> Subject: #artificalIntelligence
> Topics: #coding 
> Date: 2025-09-28 at 16:29
## Ontologies, Categories and Objects

### Limitations of First-Order Logic

**Key Challenge**: First-Order Logic doesn't fully represent the real world in two major areas:

1. **Abstract Concepts**
    
    - Events
    - Time
    - Beliefs
2. **Dynamic Object Creation**
    
    - Example: We define a general "book" object with material, shape, title, content, authorship
    - **Problem**: How do we define a new specific book (e.g., "Zhigang's New Book")?
    - **Question**: Do we create a new object called "Zhigang New Book" or use another approach?

### Ontologies

**Ontological Engineering**: The process of representing abstract concepts in a structured way.

**Upper Ontology**: A general framework of concepts that provides:

- Convention of drawing graphs with general concepts at the top
- More specific concepts below them
- Foundation where details of different object types can be filled in later

**Analogy**: Similar to object-oriented programming frameworks:

- First define a class for general concepts
- Then instantiate when specific items belonging to the general class are needed

### Categories and Objects

#### Categories Definition

**Category**: Represents a class of objects that share common properties and attributes.

**Examples**:

- We say "buy a chair" rather than "buy a particular chair CH01"
- Interaction with the world occurs at the object level
- Reasoning tasks occur at the category level
- Categories help make predictions about objects once classified

#### Two Representation Approaches in First-Order Logic

1. **Predicate Approach**:
    
    ```
    Basketball(b): b is a basketball
    ```
    
2. **Object Approach**:
    
    ```
    Member(b, Basketball): b is a member of Basketball
    ```
    

#### Subcategories/Subsets/Subclasses

**Subcategory**: A subset of a given category where members share common properties that distinguish them from other members of the parent category.

**Example**:

- Given category "Balls"
- Form subcategory "Basketball" of "Balls"
- Notation: `Subset(Basketball, Balls)`

**Knowledge Organization Through Inheritance**:

```
∀x, y Subclass(x, y) ∧ Property(y) ⇒ Property(x)
```

**Example**:

- All food is edible
- Fruit is a subclass of food
- Therefore, fruit is edible (edibility inherited from food category)

**Taxonomic Hierarchy**: Subclass relations organize categories into a taxonomy.

#### Category Examples and Relationships

**Object Membership**:

```
Ball₁ ∈ Basketballs
or
Member(Ball₁, Basketballs)
```

**Category Subclass Relationship**:

```
Basketballs ⊆ Balls
or
Subclass(Basketballs, Balls)
```

**Properties of Category Members**:

```
∀x ∈ Basketballs ⇒ Round(x)
or
∀x Member(x, Basketballs) ⇒ Round(x)
```

**Recognition by Properties**:

```
Orange(x) ∧ Round(x) ∧ Diameter(x) = 9.5" ∧ x ∈ Balls ⇒ x ∈ Basketballs
```

**Category-Level Properties**:

```
Dogs ∈ DomesticatedSpecies
```

### Advanced Category Concepts

#### Disjoint Categories

**Definition**: Two or more categories are disjoint if they have no common members.

```
Disjoint(x, y) ⇔ ¬∃z z ∈ x ∧ z ∈ y
```

**Alternative Definition**:

```
Disjoint(s) ⇔ ∀c₁, c₂ c₁ ⊂ s ∧ c₂ ⊂ s ∧ c₁ ≠ c₂ ⇒ Intersection(c₁, c₂) = ∅
```

where `s` is a class of categories.

**Example**: `Disjoint({Animals, Vegetables})`

#### Exhaustive Decomposition

**Definition**: The process of partitioning a set (or category) into a collection of subsets such that every element of the original set belongs to at least one subset.

```
ExhaustiveDecomposition(s, c₁) ⇔ (∀x x ∈ c₁ ⇔ ∃c₂ (c₂ ⊂ s) ∧ (x ∈ c₂))
```

**Interpretation**: If `s` is an exhaustive decomposition of `c₁`, then for each element of `c₁`, there must be a category `c₂` in `s` such that the element is in `c₂`.

**Example**:

```
ExhaustiveDecomposition({Americans, Canadians, Mexicans}, NorthAmericans)
```

#### Partition

**Definition**: An exhaustive decomposition of disjoint sets.

```
Partition(s, c) ⇔ Disjoint(s) ∧ ExhaustiveDecomposition(s, c)
```

**Example**:

```
Partition({Animals, Plants, Fungi, Protista, Monera}, LivingThings)
```

#### Defining Categories with Necessary and Sufficient Conditions

**Example Using Human Categories**:

Given partitions:

- `Partition(s₁ = {Married, Unmarried}, c = Human)`
- `Partition(s₂ = {Adults, Non-adults}, c = Human)`
- `Partition(s₃ = {Females, Males}, c = Human)`

**Define Bachelor Category**:

```
x ∈ Bachelor ⇔ (Unmarried(x)) ∧ (x ∈ Adults) ∧ (x ∈ Males)
```

#### Part-Whole Relations

**PartOf Relation**: Reflects the real-world idea that one object can be part of another.

**Properties**:

- **Transitive**: `PartOf(x, y) ∧ PartOf(y, z) ⇒ PartOf(x, z)`
- **Reflexive**: `PartOf(x, x)`

**Examples**:

- `PartOf(Australia, Earth)`
- `PartOf(WSU, AustralianUniversities)`

**Hierarchical Organization**: Objects can be grouped into PartOf hierarchies similar to subcategory hierarchies.

#### Composite Objects with Structure

**Example - Biped Definition**:

```
∃l₁, l₂, b Leg(l₁) ∧ Leg(l₂) ∧ Body(b) ∧
Biped(a) ⇒ PartOf(l₁, a) ∧ PartOf(l₂, a) ∧ PartOf(b, a) ∧
Attached(l₁, b) ∧ Attached(l₂, b) ∧ (l₁ ≠ l₂) ∧
∀l₃ Leg(l₃) ∧ PartOf(l₃, a) ⇒ (l₃ = l₁ ∨ l₃ = l₂)
```

#### BunchOf Function

**Purpose**: Define composite objects with definite parts but no particular structure (e.g., bag of oranges).

**Definition**: `BunchOf(s)` is the smallest object satisfying:

```
∀x x ∈ s ⇒ PartOf(x, BunchOf(s))
```

and

```
∀y (∀x x ∈ s ⇒ PartOf(x, y)) ⇒ PartOf(Bunch(s), y)
```

**Example**:

- `BunchOf({Apple₁, Apple₂, Apple₃})` - composite object with three apples as parts
- Note: `s = {Apple₁, Apple₂, Apple₃}` is one composite object
- Since `Apple₁ ∈ s`, then `Apple₁` must be part of object `y = BunchOf(s)`

### Measurements

#### Quantitative Measures

**Measure Objects**: Values assigned to properties, represented with a units function taking a number as argument.

**Examples**:

```
Diameter(Basketballs) = Inches(9.5)
```

Where:

- `Diameter` - function
- `Basketballs` - constant
- `=` - equity predicate
- `Inches` - units function
- `9.5` - constant

**Additional Examples**:

```
ListPrice(Basketballs₁₂) = $(19)
Weight(BunchOf({Apple₁, Apple₂, Apple₃})) = Grams(2)
d ∈ Days ⇒ Duration(d) = Hours(24)
```

#### Qualitative Measures

**Comparison Using Ordering**: For non-quantitative measures, we can still compare them using ordering symbols.

**Examples**:

```
e₁ ∈ Exercises ∧ e₂ ∈ Exercises ∧ Author(Norvig, e₁) ∧ 
Author(Russell, e₂) ⇒ Difficult(e₁) > Difficult(e₂)
```

```
e₁ ∈ Exercises ∧ e₂ ∈ Exercises ∧ Difficult(e₁) > Difficult(e₂) ⇒ 
ExpectedScore(e₁) < ExpectedScore(e₂)
```

### Objects: Things and Stuff

#### Count vs Mass Objects

**Count Objects (Things)**:

- May be counted
- If cut in half, don't get two objects
- Example: a disk

```
b ∈ CountObject ∧ PartOf(p, b) ⇒ p ∉ Object
```

**Mass Objects (Stuff)**:

- May not be counted
- If cut in half, any part remains the same object type
- Example: butter

```
b ∈ MassObject ∧ PartOf(p, b) ⇒ p ∈ Object
```

#### Property Types

**Extrinsic Properties**: Not retained under subdivision

- Examples: weight, length, shape

**Intrinsic Properties**: Belong to the very substance of the object, rather than the object as a whole

- Examples: density, flavor, color, ownership

---

## Events

### Event Objects

**Definition**: Time-serial and abstract objects.

**Types**:

1. **Continuous Actions/Events** (Simple case):
    
    - Example: bathtub is empty → filling the bathtub → bathtub is full
2. **Simultaneous Actions/Events** (Complicated case):
    
    - Example: brushing teeth while waiting for bathtub to fill

### Event Calculus

**Purpose**: Handle cases involving simultaneous actions using three object types:

#### Core Objects

1. **Fluent**: Object referring to the fact of a state
    
    - Example: `At(Shankar, WSU)` (Shankar is at WSU)
2. **Event**: Object modeling real-world changes over time
    
    - Example: `Flying` event can initiate or terminate fluents
3. **Time Point**: Object referring to specific time point when conducting an action
    

#### Event Calculus Predicates

**Complete Set of Predicates**:

- `t₁ < t₂`: Time point t₁ occurs before time t₂
- `T(f, t₁, t₂)`: Fluent f is true for all times between t₁ and t₂
- `Happens(e, t₁, t₂)`: Event e starts at time t₁ and ends at time t₂
- `Initiates(e, f, t)`: Event e causes f to be true at time t
- `Terminates(e, f, t)`: Event e causes fluent f to cease to be true at time t
- `Initiated(f, t₁, t₂)`: Fluent f becomes true at some point between t₁ and t₂
- `Terminated(f, t₁, t₂)`: Fluent f ceases to be true at some point between t₁ and t₂

#### Event Calculus Example

**Flying Event Description**:

```
E = [Flying(a, here, there) ∧ Happens(E, t₁, t₂) 
⇒ Terminates(E, At(a, here), t₁) ∧ Initiates(E, At(a, there), t₂)]
```

#### Event Calculus Axioms

**Axiom 1**:

```
Happens(e, t₁, t₃) ∧ Initiates(e, f, t₂) ∧ ¬Terminated(f, t₂, t₄) ∧ t₁ ≤ t₂ ≤ t₃ ≤ t₄ 
⇒ T(f, t₂, t₄)
```

Where:

```
Terminated(f, t₃, t₅) ⇔ ∃e, t₂, t₃, t₄ Happens(e, t₂, t₄) ∧ Terminates(e, f, t₃) ∧ t₁ ≤ t₂ ≤ t₃ ≤ t₄ ≤ t₅
```

**Axiom 2**:

```
Happens(e, t₁, t₃) ∧ Terminates(e, f, t₂) ∧ ¬Initiated(f, t₂, t₄) ∧ t₁ ≤ t₂ ≤ t₃ ≤ t₄ 
⇒ ¬T(f, t₂, t₄)
```

Where:

```
Initiated(f, t₃, t₅) ⇔ ∃e, t₂, t₃, t₄ Happens(e, t₂, t₄) ∧ Initiates(e, f, t₃) ∧ t₁ ≤ t₂ ≤ t₃ ≤ t₄ ≤ t₅
```

### Process Types

#### Discrete Event

**Definition**: Instantaneous occurrences that cause immediate changes in system state.

#### Liquid Event (Process)

**Definition**: Any event that happens over an interval also happens over any subinterval.

```
e ∈ Processes ∧ Happens(e, t₁, t₄) ∧ t₁ ≤ t₂ ≤ t₃ ≤ t₄ ⇒ Happens(e, t₂, t₃)
```

### Time Representation

#### Time Interval Types

**Partition**:

```
Partition({Moments, ExtendedIntervals}, Intervals)
```

**Moments**:

```
i ∈ Moments ⇔ Duration(i) = Seconds(0)
```

**Extended Intervals**:

```
Interval(i) ⇒ Duration(i) = (Time(End(i)) - Time(Begin(i)))
```

#### Time Interval Relations

**Predicates**:

- `Meet(i, j) ⇔ End(i) = Begin(j)`
- `Before(i, j) ⇔ End(i) < Begin(j)`
- `After(j, i) ⇔ Before(i, j)`
- `During(i, j) ⇔ Begin(j) < Begin(i) < End(i) < End(j)`
- `Overlap(i, j) ⇔ Begin(i) < Begin(j) < End(i) < End(j)`
- `Starts(i, j) ⇔ Begin(i) = Begin(j)`
- `Finishes(i, j) ⇔ End(i) = End(j)`
- `Equals(i, j) ⇔ Begin(i) = Begin(j) ∧ End(i) = End(j)`

**Examples**:

- `Meet(ReignOf(GeorgeVI), ReignOf(ElizabethII))`
- `During(LunchTime, WorkHour)`

---

## Reasoning with Default Information

### Problem with Classical Logic

**Monotonic Reasoning Issue**: Classical logic reasoning is monotonic.

**Definition**: If `KB ⊨ α`, then for any satisfiable sentence `β`, `KB ∪ {β} ⊨ α`

- Meaning: Increasing knowledge base will not affect knowledge we already knew

#### Problematic Example

**Original Knowledge Base**:

- `Bird(x) ⇒ Fly(x)`
- `Emu(x) ⇒ Bird(x)`
- `Emu(x) ⇒ ¬Fly(x)`
- `Bird(Tweety)`

**Result**: `KB ⊨ Fly(Tweety)`

**Problem**: Later we learn `Emu(Tweety)` and add it to KB

- **Result**: KB becomes inconsistent!

### Circumscription Solution

#### Core Idea

**Minimization**: Specify particular predicates that are assumed to be "as false as possible"

- False for every object except those for which they are known to be true

#### Bird-Fly Example Solution

**Replace**: `Bird(x) ⇒ Fly(x)`  
**With**: `Bird(x) ∧ ¬Abnormal(x) ⇒ Fly(x)`

**Key Points**:

- `Abnormal` is to be circumscribed
- Assume `¬Abnormal(x)` unless `Abnormal(x)` is known to be true
- Keep `Abnormal`'s true value as minimal as possible

**Add**: `Emu(x) ⇒ Abnormal(x)` to specify the circumscription

#### Updated Knowledge Base

**Contents**:

- `Bird(x) ∧ ¬Abnormal(x) ⇒ Fly(x)` [updated knowledge]
- `Emu(x) ⇒ Abnormal(x)` [newly added knowledge]
- `Emu(x) ⇒ Bird(x)` [from original KB]
- `Bird(Bunky)` [newly added knowledge]
- `Emu(Tweety)` [from original KB]

#### Results

**Expected**:

- `KB ⊨ Bird(Tweety)` and `KB ⊭ Fly(Tweety)` ✓

**Unexpected**:

- `KB ⊭ Fly(Bunky)` ✗
- **Reason**: Under circumscription, we didn't say `Bird(x) ⇒ ¬Abnormal(x)`!

---

## Case Study: Internet Shopping

### System Overview

**Basic Architecture**:

- **Input**: Product description from buyer
- **Process**: Shopping agent searches internet
- **Output**: Offers from web pages

**Environment**: World Wide Web (WWW)

### Agent's Knowledge Base

#### Online Store Information

**Store Definitions**:

```
Amazon ∈ OnlineStores ∧ Homepage(Amazon, "amazon.com")
Ebay ∈ OnlineStores ∧ Homepage(Ebay, "ebay.com")
ExampleStore ∈ OnlineStores ∧ Homepage(ExampleStore, "example.com")
```

#### Relevance Determination

**Page Relevance**:

```
Relevant(page, query) ⇔
[∃store, home store ∈ OnlineStores ∧ Homepage(store, home)] ∧
[∃url, url₂ RelevantChain(home, url₂, query) ∧ Link(url₂, url) ∧
page = Contents(url)]
```

**Note**: Since answers are normally not on home pages, we need `RelevantChain`.

#### Relevant Chain Definition

```
RelevantChain(start, end, query) ⇔
(start = end) ∨
[∃u, text LinkText(start, u, text) ∧
RelevantCategoryName(query, text) ∧
RelevantChain(u, end, query)]
```

#### Category Name Relevance

**Problem**: How to define `RelevantCategoryName(query, text)`?

**Cases**:

1. Text and query name the same category (e.g., "notebooks" and "laptops")
2. Text names a supercategory (e.g., "computers")
3. Text names a subcategory (e.g., "ultralight notebooks")

**Solution**:

```
RelevantCategoryName(query, text) ⇔
∃c₁, c₂ Name(query, c₁) ∧ Name(text, c₂) ∧ (c₁ ⊆ c₂ ∨ c₂ ⊆ c₁)
```

### Task Implementation

#### Information Extraction

**Example Input**: Page on example.com with text: "IBM ThinkBook 970. Our price: $399.00"

**Generated Formula**:

```
∃c, offer c ∈ LaptopComputers ∧ offer ∈ ProductOffers ∧
Manufacturer(c, IBM) ∧ Model(c, ThinkBook970) ∧
ScreenSize(c, Inches(14)) ∧ ScreenType(c, ColorLCD) ∧
MemorySize(c, Gigabytes(2)) ∧ CPUSpeed(c, GHz(1.2)) ∧
URL(offer, "example.com/computers/34356.html") ∧
Price(offer, $(399)) ∧ Date(offer, Today)
```

#### Offer Comparison

**Decision Making**: Required after getting buyer preferences.

**Example Comparison**:

- **A**: 1.4 GHz CPU, 2GB RAM, 250GB disk, $299
- **B**: 1.2 GHz CPU, 2GB RAM, 350GB disk, $500
- **C**: 1.2 GHz CPU, 2GB RAM, 250GB disk, $399

**Analysis**:

- A is preferred over C in all aspects (clear choice)
- Comparison between A and B is not clear (trade-off between CPU speed vs. disk space vs. price)

---

## Key Concepts Summary

### Critical Definitions

- **Ontological Engineering**: Representing abstract concepts systematically
- **Category**: Class of objects sharing common properties
- **Fluent**: Object referring to state facts in event calculus
- **Circumscription**: Making predicates "as false as possible" except where known true

### Important Relationships

- **PartOf**: Transitive and reflexive relation for object composition
- **Subclass**: Organizes categories into taxonomic hierarchies
- **Disjoint**: Categories with no common members
- **Partition**: Exhaustive decomposition of disjoint sets

### Problem-Solving Approaches

1. **Use upper ontologies** for general concept frameworks
2. **Apply event calculus** for time-based reasoning
3. **Implement circumscription** for default reasoning
4. **Structure knowledge bases** using categories and inheritance

### Practical Applications

- **Internet shopping agents**: Knowledge representation for product search and comparison
- **Temporal reasoning**: Event calculus for simultaneous actions
- **Default reasoning**: Handling exceptions in logical systems
- **Ontology design**: Structuring knowledge for AI systems