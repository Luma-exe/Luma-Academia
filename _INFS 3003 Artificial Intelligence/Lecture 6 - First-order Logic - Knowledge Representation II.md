
> [!faq] About this Lecture
> Class: INFS3003
> Subject: #artificalIntelligence
> Topics: #coding 
> Date: 2025-09-05 at 09:23

## Propositional Logic Limitations in The Real World

### Real World Components

The real world contains complex structures that propositional logic struggles to represent:

- **Objects**: people, houses, numbers, etc.
- **Properties**: red, round, wet, etc.
- **Relations**: bigger than, inside, part of, etc.
- **Functions**: father of, best friend, etc.

### Examples of Real World Knowledge

**Example 1**: "Evil King John ruled England in 1200"

- Objects: John, England, 1200
- Relation: ruled during
- Properties: evil, king

**Example 2**: "One plus two equals three"

- Objects: one, two, three, one plus two
- Relation: equals
- Function: plus

### Propositional Logic Recap

Propositional logic assumes facts that either hold (true) or do not hold (false):

- **Declarative**: knowledge and inference are separate, inference is domain independent
- **Compositional**: sentence meaning is a function of its parts' meanings

**Key Limitation**: Propositional Logic is not expressive enough to represent real world knowledge effectively.

## First-order Logic Syntax

### Core Concept

First-order Logic assumes the world consists of objects with certain relations among them that do or do not hold.

- Models are configured by a **domain** (set of objects the domain contains)

### New Syntactic Elements

First-order logic introduces several new elements beyond propositional logic:

#### Three New Symbols

1. **Constant symbols**
2. **Predicate symbols**
3. **Function symbols**

#### Additional Elements

- One new **Term** type
- Different definition of **atomic sentence**
- Two new **Quantifiers**

### Symbols and Interpretations

#### Constant Symbols

Stand for real-world objects:

- `A` refers to an object A
- `Peter` refers to a person named Peter

#### Predicate Symbols

Stand for properties of objects and relations between objects:

- `Round(A)`: object A is round (property)
- `Brother(John, Peter)`: John and Peter are brothers (relation)

#### Function Symbols

Stand for functions:

- `BrotherOf(John) = Peter`: given John as input to function BrotherOf(), output is Peter

**Important**: Note the difference between predicates and functions

- Predicates express relationships/properties (true/false)
- Functions return objects

#### Interpretation Flexibility

Each model includes an interpretation specifying which objects, relations, and functions are referred to by symbols.

**Key Points**:

- Not all objects need a name (constant symbols)
- One object could have multiple names

**Example Interpretations for 'Crown & King'**:

_Interpretation 1_:

- Richard → Richard the Lionheart
- Brother → brotherhood relation
- LeftLeg → 'left leg' function for a person

_Interpretation 2_:

- Richard → the crown
- John → King John's left leg

### Terms

#### Definition

A **term** is a logical expression that refers to an object, used to express complex objects.

#### Types of Terms

**Simple terms**: Each constant and variable are terms

**Complex terms**: Given terms t₁, t₂, ..., tₙ (n ≥ 1) and function f:

```
f(t₁, t₂, ..., tₙ) is a term
```

#### Purpose and Advantages

Terms allow creation of new object references without creating many new constant symbols.

**Example**:

- Constant: `Peter`
- Express "Peter's left leg":
    - Method 1: Define new constant `PeterLeftLeg`
    - Method 2: Use function `LeftLegOf(Peter)`

**Advantage of Method 2**: Can express any person's left leg using `LeftLegOf(x)` where x is a variable.

### Atomic and Complex Sentences

#### Atomic Sentences

A predicate symbol optionally followed by a parenthesized list of terms:

```
Brother(Peter, John)
Married(Father(Richard), Mother(Richard))
```

#### Complex Sentences

Constructed by connecting atomic sentences using logical connectives:

```
Brother(John, Peter) ∧ Sister(Sue, Robin)
```

**Formation Rules**:

- If S is a sentence, then S is a complex sentence
- If S₁ and S₂ are complex sentences, then S₁ ∧ S₂, S₁ ∨ S₂, and S₁ ⇒ S₂ are complex sentences
- If S is a complex sentence, then ¬S is a complex sentence
- If S is a complex sentence, then ∀xS(x) and ∃xS(x) are complex sentences

## Quantifiers

### Universal Quantifier (∀)

#### Basic Concept

Universal quantification makes statements about **every** object.

- **Pronunciation**: "for all"
- **Format**: `∀x P`, where x is a variable and P is any logical sentence
- **Semantics**: P is true for every object x

#### Examples

```
All humans are mortal:
∀x Human(x) ⇒ Mortal(x)

All cats are mammals:
∀x Cat(x) ⇒ Mammal(x)

If Spot has a sister, then this sister is a cat:
∀x Sister(x, Spot) ⇒ Cat(x)
```

#### Why Implication (⇒) Works Well with ∀

**Example**: `∀x King(x) ⇒ Person(x)` denotes 'All kings are persons'

**Verification Process**:

1. Must guarantee `∀x King(x) ⇒ Person(x)` is always true
2. Check `King(x) ⇒ Person(x)` under all interpretations:
    - x → Richard the Lionheart: makes King(x) false
    - x → King John: makes both King(x) and Person(x) true
    - x → Richard's left leg: makes King(x) false
    - x → John's left leg: makes King(x) false
    - x → the Crown: makes King(x) false
3. Since P ⇒ Q is true when P is false OR both P and Q are true
4. All interpretations make `King(x) ⇒ Person(x)` true
5. Therefore `∀x King(x) ⇒ Person(x)` correctly denotes 'All kings are persons'

#### Why Conjunction (∧) Usually Doesn't Work with ∀

**Problem**: ∧ with ∀ leads to overly strong statements

**Example**: What if we use `∀x King(x) ∧ Person(x)`?

- Only one interpretation (x → King John) makes both King(x) and Person(x) true
- P ∧ Q requires both P and Q to be true
- Therefore `∀x King(x) ∧ Person(x)` is not always true

### Existential Quantifier (∃)

#### Basic Concept

Existential quantification makes statements about **some** objects.

- **Pronunciation**: "there exists ... such that"
- **Format**: `∃x P`, where x is a variable and P is any logical sentence
- **Semantics**: P is true for at least one object x

#### Examples

```
There exists a student who is unemployed:
∃x Student(x) ∧ Unemployed(x)

Queen Victoria has a crown on her head:
∃x Crown(x) ∧ OnHead(x, Victoria)
```

#### Why Conjunction (∧) Works Well with ∃

**Example**: `∃x Crown(x) ∧ OnHead(x, John)` denotes 'King John has a crown on his head'

**Verification Process**:

1. Must guarantee `∃x Crown(x) ∧ OnHead(x, John)` is true
2. Check if `Crown(x) ∧ OnHead(x, John)` is true for at least one interpretation:
    - x → Richard the Lionheart: makes Crown(x) false
    - x → King John: makes Crown(x) false
    - x → Richard's left leg: makes Crown(x) false
    - x → John's left leg: makes Crown(x) false
    - x → the Crown: makes both Crown(x) and OnHead(x, John) true
3. Since P ∧ Q is true when both P and Q are true
4. At least one interpretation (x → the Crown) makes the statement true
5. Therefore the existential statement is satisfied

#### Why Implication (⇒) Usually Doesn't Work with ∃

**Problem**: ⇒ with ∃ leads to very weak statements

**Example**: `∃x Crown(x) ⇒ OnHead(x, John)`

- P ⇒ Q is true when P is false OR both P and Q are true
- All five interpretations make this true (mostly because Crown(x) is false)
- This doesn't meaningfully express that John has a crown

### Connection Between ∀ and ∃

Because ∀ is a conjunction over the universe and ∃ is a disjunction, they follow De Morgan's rules:

|First-order Logic Equivalence|Propositional Logic Analogy|
|---|---|
|`∀x¬P ≡ ¬∃xP`|`¬P ∧ ¬Q ≡ ¬(P ∨ Q)`|
|`¬∀xP ≡ ∃x¬P`|`¬(P ∧ Q) ≡ ¬P ∨ ¬Q`|
|`∀xP ≡ ¬∃x¬P`|`P ∧ Q ≡ ¬(¬P ∨ ¬Q)`|
|`∃xP ≡ ¬∀x¬P`|`P ∨ Q ≡ ¬(¬P ∧ ¬Q)`|

**Example**: 'All people like ice cream' ≡ 'No one does not like ice cream':

```
∀x Likes(x, Icecream) ⇔ ¬∃x ¬Likes(x, Icecream)
```

### Nested Quantifiers

Multiple quantifiers in one sentence express complex relationships:

```
Brothers are siblings:
∀x,y Brother(x, y) ⇒ Sibling(x, y)

Everybody loves somebody:
∀x∃y Loves(x, y)

There is someone who is loved by everyone:
∃y∀x Loves(x, y)
```

#### Order Importance

Quantifier order significantly affects meaning:

```
∀x(∃y Loves(x, y))
Everyone has the property that they love someone

∃y(∀x Loves(x, y))  
Someone has the property of being loved by everybody
```

## First-order Logic Semantics

### Overview

First-order logic semantics borrow almost the same rules from propositional logic:

- Truth value of simple and complex sentences
- Models of a sentence and of a set of sentences
- Entailment from a set of sentences to a sentence

### Truth Value of Single Sentences

A single sentence is true if and only if the interpretation of a model is true.

**Example**: `Brother(John, Tom)` is true (`Brother(John, Tom) → ⊤`) if and only if in the domain, John and Tom are actually brothers.

### Truth Value of Complex Sentences

Complex sentences follow the same rules as propositional logic:

```
S₁ ∧ S₂ → ⊤ iff S₁ → ⊤ and S₂ → ⊤
S₁ ∨ S₂ → ⊤ iff S₁ → ⊤ or S₂ → ⊤  
¬S → ⊤ iff S → ⊥
∀x P(x) → ⊤ iff for all terms {t₁, ..., tₙ}, P(tᵢ) → ⊤ (i ≥ 1)
∃x P(x) → ⊤ iff there exists a term t ∈ {t₁, ..., tₙ}, P(t) → ⊤
```

**Example**: If `Brother(John, Tom) → ⊤` and `Brother(John, Peter) → ⊥`, then:

- `Brother(John, Tom) ∧ Brother(John, Peter) → ⊥`
- `Brother(John, Tom) ∨ Brother(John, Peter) → ⊤`

### Models of Sentences

#### Single Sentence Model

If a sentence has ⊤ (true) truth-value in interpretation I, then I is called a **model** of this sentence.

**Example**: `I = {Brother(John, Tom), ¬Brother(John, Peter)}` is a model of `Brother(John, Tom)`, but not of `Brother(John, Peter)`.

#### Set of Sentences Model

If every sentence in set S has ⊤ truth-value in interpretation M, then M is called a **model** of S.

**Example**: `S = {P(A) ∨ P(B), Q(A) ⇒ Q(B)}` Then `M = {P(A), ¬P(B), ¬Q(A), Q(B)}` is a model of S.

### Entailment in First-order Logic

#### Definition

Set S **entails** sentence φ, denoted `S ⊨ φ`, if each model of S is also a model of φ.

#### Example with Proof

Given `S = {P(A), P(B), ∀x P(x) ⇒ Q(x)}`:

- `S ⊨ Q(A)`
- `S ⊨ Q(B)`

**Proof of S ⊨ Q(A)**:

1. `s₁: P(A) ∈ S`
2. `s₂: s₁, A is a constant argument to function P()`
3. `s₃: ∀x P(x) ⇒ Q(x) ∈ S`
4. `s₄: s₃, substitute x by A → P(A) ⇒ Q(A)`
5. `s₅: s₁, s₄, Modus Ponens → P(A), P(A) ⇒ Q(A) ∴ Q(A)`

## Using First-order Logic

### Knowledge Translation Process

To use first-order logic effectively, translate natural language knowledge into first-order logic statements.

### Kinship Domain Example

#### Knowledge Base Rules

```
(1) One's mother is one's female parent:
∀x,y Mother(x) = y ⇔ Female(y) ∧ Parent(x, y)

(2) One's husband is one's male spouse:  
∀x,y Husband(x, y) ⇔ Male(y) ∧ Spouse(x, y)

(3) Male and female are disjoint categories:
∀x Male(x) ⇔ ¬Female(x)

(4) Parent and child are inverse relations:
∀x,y Parent(x, y) ⇔ Child(y, x)

(5) A grandparent is a parent of one's parent:
∀x,y Grandparent(x, y) ⇔ ∃z Parent(x, z) ∧ Parent(z, y)

(6) A sibling is another child of one's parents:
∀x,y Sibling(x, y) ⇔ x ≠ y ∧ ∃z Parent(z, x) ∧ Parent(z, y)
```

#### Practical Application

**Given Facts (Interpretation)**:

```
F = {Parent(Charles, William), Male(Charles), Spouse(Kim, Charles)}
```

**Knowledge Base**:

```
KB = F ∪ {(1), (2), (3), (4), (5), (6)}
```

**Derivable Conclusions**:

- `KB ⊨ Husband(Kim, Charles)`
- `KB ⊨ ¬Female(Charles)`
- `KB ⊨ Child(William, Charles)`

### Key Advantages of First-order Logic

1. **Expressiveness**: Can represent complex relationships and properties
2. **Generalization**: Universal and existential quantifiers allow general statements
3. **Inference**: Supports logical reasoning and deduction
4. **Modularity**: Knowledge can be expressed as separate, reusable rules
5. **Domain Independence**: Same logical framework applies across different domains