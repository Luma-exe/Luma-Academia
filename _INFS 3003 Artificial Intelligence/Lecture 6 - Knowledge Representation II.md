
> [!faq] About this Lecture
> Class: INFS3003
> Subject: #artificalIntelligence
> Topics: #coding 
> Date: 2025-09-14 at 21:23

## Limitations of Propositional Logic in The Real World

### Real World Components

In the real world, we encounter:

- **Objects**: people, houses, numbers, etc.
- **Properties**: red, round, wet, etc.
- **Relations**: bigger than, inside, part of, etc.
- **Functions**: father of, best friend, etc.

### Examples of Real World Complexity

**Example 1:** "Evil King John ruled England in 1200"

- Objects: John, England, 1200
- Relation: ruled during
- Properties: evil, king

**Example 2:** "One plus two equals three"

- Objects: one, two, three, one plus two
- Relation: equals
- Function: plus

### Propositional Logic Limitations

**Key Characteristics of Propositional Logic:**

- **Declarative**: knowledge and inference are separate, and inference is entirely domain independent
- **Compositional**: the meaning of a sentence is a function of the meaning of its parts

**Critical Observation:** Propositional Logic is not expressive enough to represent real world knowledge effectively.

## First-Order Logic Syntax

### Core Concept

First-order Logic assumes that the world consists of objects with certain relations among them that do or do not hold.

**Models** for first-order logic are configured by a **domain**, which is a set of objects the domain contains.

### New Syntactic Elements

First-order logic introduces:

- **Three new symbols:**
    - Constant symbols
    - Predicate symbols
    - Function symbols
- **One new Term**
- **A different definition of atomic sentence**
- **Two new Quantifiers**

### Symbols and Interpretations

#### Constant Symbols

Stand for real-world objects:

- `A` refers to an object A
- `Peter` refers to a person named Peter

#### Predicate Symbols

Stand for properties of objects and relations between objects:

- `Round(A)`: represents a property of object A (A is round)
- `Brother(John, Peter)`: represents brotherhood relation between John and Peter

#### Function Symbols

Stand for functions:

- `BrotherOf(John) = Peter`: given John as input to function `BrotherOf()`, the output is Peter

**Key Difference:** Predicates vs Functions

- Predicates express relationships or properties (true/false)
- Functions return specific objects

#### Interpretation Rules

Each model includes an **interpretation** that specifies exactly which objects, relations and functions are referred to by the constant, predicate, and function symbols.

**Important Notes:**

- Not all objects need a name (constant symbols)
- One object could have multiple names

**Example Interpretations for 'Crown & King' domain:**

_Interpretation 1:_

- `Richard` refers to Richard the Lionheart
- `Brother` refers to the brotherhood relation
- `LeftLeg` refers to the 'left leg' function for a person

_Interpretation 2:_

- `Richard` refers to the crown
- `John` refers to King John's left leg

### Terms

**Definition:** A term is a logical expression that refers to an object, used to express a complex object.

#### Types of Terms

**Simple Terms:**

- Each constant and variable are terms

**Complex Terms:**

- Given a list of terms `t₁, t₂, ..., tₙ` (n ≥ 1) and a function `f`, then `f(t₁, t₂, ..., tₙ)` is a term

#### Purpose of Complex Terms

We create new terms for objects without creating many new constant symbols because in the real world, many objects are commonly possessed by other objects.

**Example:**

- Constant: `Peter`
- Express "Peter's left leg":
    - Method 1: Define new constant `Peter_Left_Leg`
    - Method 2: Introduce function `LeftLegOf()`, then `LeftLegOf(Peter)`

**Advantage of Method 2:** Can express any person's left leg using `LeftLegOf(x)` where `x` is a variable.

### Sentences

#### Atomic Sentences

A Predicate Symbol optionally followed by a parenthesized list of Terms:

- `Brother(Peter, John)`
- `Married(Father(Richard), Mother(Richard))`

#### Complex Sentences

Constructed by connecting atomic sentences using logical connectives:

- `Brother(John, Peter) ∧ Sister(Sue, Robin)`

**Formation Rules:**

- If `S` is a sentence, then `¬S` is a complex sentence
- If `S₁` and `S₂` are complex sentences, then `S₁ ∧ S₂`, `S₁ ∨ S₂` and `S₁ ⇒ S₂` are complex sentences
- If `S` is a complex sentence, then `∀xS(x)` and `∃xS(x)` are complex sentences

### Quantifiers

#### Universal Quantifier (∀)

**Purpose:** Makes statements about every object

- Pronounced "for all"
- **Format:** `∀x P`, where `x` is a variable for an object class and `P` is any logical sentence
- **Semantics:** P is true for every object x

**Examples:**

```
All humans are mortal: ∀x Human(x) ⇒ Mortal(x)
All cats are mammals: ∀x Cat(x) ⇒ Mammal(x)
If Spot has a sister, then this sister is a cat: ∀x Sister(x, Spot) ⇒ Cat(x)
```

**Why Implication (⇒) works well with ∀:**

Consider: `∀x King(x) ⇒ Person(x)` (All kings are persons)

For this to be true, `King(x) ⇒ Person(x)` must be true under all interpretations:

- `x → Richard the Lionheart`: makes `King(x)` false → implication true
- `x → King John`: makes both `King(x)` and `Person(x)` true → implication true
- `x → Richard's left leg`: makes `King(x)` false → implication true
- `x → John's left leg`: makes `King(x)` false → implication true
- `x → the Crown`: makes `King(x)` false → implication true

Since `P ⇒ Q` is true when P is false OR both P and Q are true, all interpretations make the implication true.

**Why Conjunction (∧) is NOT good for ∀:**

`∀x King(x) ∧ Person(x)` would mean everything is both a king AND a person, which is overly strong and typically false.

#### Existential Quantifier (∃)

**Purpose:** Makes statements about some objects

- Pronounced "there exists ... such that"
- **Format:** `∃x P`, where `x` is a variable for an object class and `P` is any logical sentence
- **Semantics:** P is true for at least one object x

**Examples:**

```
There exists a student who is unemployed: ∃x Student(x) ∧ Unemployed(x)
Queen Victoria has a crown on her head: ∃x Crown(x) ∧ OnHead(x, Victoria)
```

**Why Conjunction (∧) works well with ∃:**

Consider: `∃x Crown(x) ∧ OnHead(x, John)` (King John has a crown on his head)

This needs to be true for at least one interpretation:

- `x → Richard the Lionheart`: makes `Crown(x)` false
- `x → King John`: makes `Crown(x)` false
- `x → Richard's left leg`: makes `Crown(x)` false
- `x → John's left leg`: makes `Crown(x)` false
- `x → the Crown`: makes both `Crown(x)` and `OnHead(x, John)` true

Since at least one interpretation makes the conjunction true, the existential statement is satisfied.

**Why Implication (⇒) is NOT good for ∃:**

`∃x Crown(x) ⇒ OnHead(x, John)` would be too weak - it's true whenever any object fails to satisfy the premise, which doesn't say much.

#### Connection between ∀ and ∃

Because ∀ is a conjunction over the universe of objects and ∃ is a disjunction, they obey De Morgan's rules:

|First-Order Logic Equivalence|Propositional Logic Analogy|
|---|---|
|`∀x¬P ≡ ¬∃xP`|`¬P ∧ ¬Q ≡ ¬(P ∨ Q)`|
|`¬∀xP ≡ ∃x¬P`|`¬(P ∧ Q) ≡ ¬P ∨ ¬Q`|
|`∀xP ≡ ¬∃x¬P`|`P ∧ Q ≡ ¬(¬P ∨ ¬Q)`|
|`∃xP ≡ ¬∀x¬P`|`P ∨ Q ≡ ¬(¬P ∧ ¬Q)`|

**Example:** "All people like ice cream" is equivalent to "No one does not like ice cream":

```
∀x Likes(x, Icecream) ⇔ ¬∃x ¬Likes(x, Icecream)
```

#### Nested Quantifiers

Use multiple ∀ and ∃ in one sentence to express complex relationships:

```
Brothers are siblings: ∀x,y Brother(x,y) ⇒ Sibling(x,y)
Everybody loves somebody: ∀x∃y Loves(x,y)
There is someone who is loved by everyone: ∃y∀x Loves(x,y)
```

**Order Matters:**

- `∀x(∃y Loves(x,y))`: Everyone has the property that they love someone
- `∃y(∀x Loves(x,y))`: Someone has the property of being loved by everybody

## First-Order Logic Semantics

### Core Principle

The semantics of first-order logic borrow almost the same rules from propositional logic:

- Truth value of simple and complex sentences
- Models of a sentence and of a set of sentences
- Entailment from a set of sentences to a sentence

### Truth Values

#### Single Sentences

A single sentence is true if and only if the interpretation of a model is true.

**Example:** `Brother(John, Tom)` is true if and only if in the domain, persons called John and Tom are brothers.

#### Complex Sentences

Truth values follow the same rules as propositional logic:

- `S₁ ∧ S₂ → T` iff `S₁ → T` and `S₂ → T`
- `S₁ ∨ S₂ → T` iff `S₁ → T` or `S₂ → T`
- `¬S → T` iff `S → F`
- `∀x P(x) → T` iff for all terms `{t₁, ..., tₙ}`, `P(tᵢ) → T` (i ≥ 1)
- `∃x P(x) → T` iff there exists a term `t ∈ {t₁, ..., tₙ}`, `P(t) → T`

### Models

**Definition:** If a sentence has true truth-value in an interpretation I, then I is called a **model** of this sentence.

**Example:** `I = {Brother(John, Tom), ¬Brother(John, Peter)}` is a model of `Brother(John, Tom)`, but not a model of `Brother(John, Peter)`.

**For Set of Sentences:** Let S be a set of sentences. If every sentence of S has true truth-value in an interpretation M, then M is called a model of S.

**Example:** `S = {P(A) ∨ P(B), Q(A) ⇒ Q(B)}`. Then interpretation `M = {P(A), ¬P(B), ¬Q(A), Q(B)}` is a model of S.

### Entailment

**Definition:** Let S be a set of sentences, and φ is a sentence. S entails φ, denoted as `S ⊨ φ`, if each model of S is also a model of φ.

**Example:** Given `S = {P(A), P(B), ∀x P(x) ⇒ Q(x)}`, we have:

- `S ⊨ Q(A)`
- `S ⊨ Q(B)`

**Proof of S ⊨ Q(A):**

1. `s₁`: `P(A) ∈ S`
2. `s₂`: `s₁`, A is a constant argument to function P()
3. `s₃`: `∀x P(x) ⇒ Q(x) ∈ S`
4. `s₄`: `s₃`, substitute x by A: `P(A) ⇒ Q(A)`
5. `s₅`: `s₁`, `s₄`, Modus Ponens: From `P(A)` and `P(A) ⇒ Q(A)`, conclude `Q(A)`

## Using First-Order Logic

### Knowledge Representation Process

To use first-order logic to represent domain knowledge, translate natural language knowledge to first-order logic language.

### Kinship Domain Example

**Knowledge Base Rules:**

```
(1) One's mother is one's female parent:
    ∀x,y Mother(x) = y ⇔ Female(y) ∧ Parent(x,y)

(2) One's husband is one's male spouse:
    ∀x,y Husband(x,y) ⇔ Male(y) ∧ Spouse(x,y)

(3) Male and female are disjoint categories:
    ∀x Male(x) ⇔ ¬Female(x)

(4) Parent and child are inverse relations:
    ∀x,y Parent(x,y) ⇔ Child(y,x)

(5) A grandparent is a parent of one's parent:
    ∀x,y Grandparent(x,y) ⇔ ∃z Parent(x,z) ∧ Parent(z,y)

(6) A sibling is another child of one's parents:
    ∀x,y Sibling(x,y) ⇔ x ≠ y ∧ ∃z Parent(z,x) ∧ Parent(z,y)
```

### Practical Application

**Given Facts (Interpretation):**

```
F = {Parent(Charles, William), Male(Charles), Spouse(Kim, Charles)}
```

**Knowledge Base:**

```
KB = F ∪ {(1), (2), (3), (4), (5), (6)}
```

**Derivable Conclusions:**

- `KB ⊨ Husband(Kim, Charles)`
- `KB ⊨ ¬Female(Charles)`
- `KB ⊨ Child(William, Charles)`

### Key Study Points

**Critical Concepts to Master:**

1. **Syntax vs Semantics**: Understanding the difference between logical structure and meaning
2. **Quantifier Usage**: When to use ∀ vs ∃, and appropriate connectives
3. **Term Construction**: Building complex terms using functions
4. **Model Theory**: Understanding interpretations, models, and entailment
5. **Knowledge Translation**: Converting natural language to formal logic

**Common Pitfalls:**

- Using conjunction with universal quantifiers inappropriately
- Using implication with existential quantifiers inappropriately
- Misunderstanding quantifier scope and ordering
- Confusing predicates with functions

**Exam Focus Areas:**

- Translating natural language statements to first-order logic
- Determining truth values under different interpretations
- Proving entailments using logical rules
- Understanding the relationship between ∀ and ∃ quantifiers