
> [!faq] About this Lecture
> Class: INFS3003
> Subject: #artificalIntelligence
> Topics: #coding 
> Date: 2025-10-27 at 12:55

## Final Exam Information

### Exam Format

- **Type**: Semi-open-book exam
- **Allowed Materials**: One A4 sheet of paper with handwritten notes on one side only
- **Duration**: 2 hours
- **Total Questions**: 8 (no multiple choice)

### Question Distribution

- **Search**: 3 questions
- **Knowledge Representation**: 3 questions
- **Planning**: 1 question
- **Machine Learning**: 1 question

---

## Search

### Breadth First Search (BFS)

#### Key Concept

BFS explores nodes level by level, expanding all nodes at depth d before moving to depth d+1.

#### Algorithm Characteristics

- Uses a **Queue** (FIFO - First In, First Out)
- Explores nodes in order of their distance from start
- Complete and optimal for unweighted graphs

#### BFS Algorithm Steps

1. Initialize queue with start node
2. While queue is not empty:
    - Dequeue front node
    - If goal node, return solution
    - Add all unexpanded children to back of queue
3. Process nodes level by level

#### Example Trace

````
Initial: Queue = [n0]
Step 1: Expand n0 → Queue = [n1, n2]
Step 2: Expand n1 → Queue = [n2, n3, n4]
Step 3: Expand n2 → Queue = [n3, n4, n5, n6]
Continue until goal found
````

---

### Depth First Search (DFS)

#### Key Concept
DFS explores as far as possible along each branch before backtracking.

#### Algorithm Characteristics
- Uses a **Stack** (LIFO - Last In, First Out)
- Explores deeply before exploring broadly
- Not optimal, may find suboptimal solutions

#### Example Trace
```
Initial: Stack = [n0]
Step 1: Expand n0 → Stack = [n1, n2]
Step 2: Expand n2 → Stack = [n1, n3, n4]
Step 3: Expand n4 → Stack = [n1, n3]
Continue with depth-first expansion
```

---

### A* Search

#### Core Formula
```
f(n) = g(n) + h(n)
```

#### Component Definitions
- **g(n)**: Path cost from start node to node n (actual cost incurred)
- **h(n)**: Heuristic function - estimated cost from node n to goal
- **f(n)**: Evaluation function - estimated cost of cheapest solution through node n

#### Objective
Minimize f(n) = g(n) + h(n) to find the optimal path

#### Visual Representation
```
[Start] --g(n)--> [Node n] --h(n)--> [Goal]
         actual cost    estimated cost
```

#### Key Properties
- **Admissible Heuristic**: h(n) never overestimates actual cost
- **Optimal**: Finds shortest path if heuristic is admissible
- **Complete**: Always finds solution if one exists

---

### Minimax Search Algorithm

#### Purpose
Determines optimal strategy for MAX player in two-player, zero-sum games.

#### Basic Concept
- **MAX** tries to maximize utility
- **MIN** tries to minimize utility
- Algorithm assumes both players play optimally

#### Simple Two-Step Game Example
```
              [Initial State]
                   |
        +---------+---------+
        |                   |
     [S1: u=3]          [S2: u=2]    ← MAX chooses
        |                   |
    +---+---+           +---+---+
    |       |           |       |
[S3: u=3][S4: u=3]  [S5: u=3][S6: u=2] ← MIN chooses
```

**Decision Process**:
1. MAX chooses S1 because u(S1) = 3 > u(S2) = 2
2. MIN then chooses S3 or S4 (both have utility 3)
3. Final path: S0 → S1 → S3/S4

#### Five-Step Minimax Algorithm

**Step 1**: Generate complete game tree to terminal states

**Step 2**: Apply utility function to each terminal state

**Step 3**: Back up values from terminal states one level up
- MAX nodes: take maximum of children
- MIN nodes: take minimum of children

**Step 4**: Continue backing up values layer by layer toward root

**Step 5**: At root, MAX chooses move leading to highest backed-up value

---

## Knowledge Representation

### Propositional Logic

#### Syntax Components

**Logical Constants**:
- `True`, `False`

**Propositional Symbols**:
- `P`, `Q`, `R`, etc.

**Logical Connectives**:
- `∧` (AND)
- `∨` (OR)
- `⇒` (IMPLIES)
- `⇔` (IFF - if and only if)
- `¬` (NOT)

**Parentheses**: `(`, `)`

#### Valid Sentence Examples
```
A ∨ B
(A ∨ (B ∧ C)) ⇒ C
(A ∨ B) ⇒ C
```

#### Invalid Sentence Example
```
A ∧ ∨B  ← Missing operand
```

---

#### Semantics - Truth Tables

**Basic Connectives Truth Values**:
```
P | Q | P∧Q | P∨Q | P⇒Q | P⇔Q | ¬P
--|---|-----|-----|-----|-----|----
F | F |  F  |  F  |  T  |  T  | T
F | T |  F  |  T  |  T  |  F  | T
T | F |  F  |  T  |  F  |  F  | F
T | T |  T  |  T  |  T  |  T  | F
```

---

#### Sentence Validity

**Example Proof**: (P ⇒ Q) ⇔ (¬P ∨ Q)
```
P | Q | P⇒Q | ¬P | ¬P∨Q | (P⇒Q)⇔(¬P∨Q)
--|---|-----|-------|------|---------------
F | F |  T  |   T   |  T   |      T
F | T |  T  |   T   |  T   |      T
T | F |  F  |   F   |  F   |      T
T | T |  T  |   F   |  T   |      T
```

**Result**: Valid (true in all models)

---

#### Sentences and Models

**Model Definition**: A model is an interpretation where a sentence is true.

**Example - Language with 3 Variables**:
```
Language L = {P, Q, R}
Total interpretations = 2³ = 8

All possible interpretations:
P | Q | R
--|---|---
T | T | T
T | T | F
T | F | T
T | F | F
F | T | T
F | T | F
F | F | T
F | F | F
```

**Model Example**:
- Interpretation I = {P, ¬Q, ¬R}
- Formula: P ∨ Q
- I is a model of P ∨ Q because P ∨ Q evaluates to True in I

**Model Count for P ∨ Q**: 6 models
- Any interpretation where (P, Q) is NOT (F, F)

**Question**: Is I a model of P ∧ Q?
- Answer: No, because P ∧ Q = (T, F) = F in interpretation I

---

#### Entailment and Inference

##### Entailment (⊨): Semantic relationship

Entailment is about **meaning and truth in all possible models**.  
It says that one statement logically follows from another.  
If `α ⊨ β`, then every time `α` is true, `β` must also be true — there’s no model where `α` is true and `β` is false.

```
α ⊨ β  
means: In every model where α is true, β is also true  
M(α) ⊆ M(β)  (the set of models of α is contained within those of β)
```

##### Knowledge Base Entailment:

This applies the same idea to a **set of known facts and rules** (the Knowledge Base).  
If the knowledge base logically entails a statement, that statement must be true in every model where the KB is true.

```
KB ⊨ α means:
When all sentences in KB are true, α must be true
```

Example:  
If the KB says

- `All humans are mortal`
- `Socrates is a human`  
    then `KB ⊨ Socrates is mortal`.

It’s truth-based reasoning — not about proof steps but about what must be true in all interpretations of the KB.

##### Inference (⊢): Syntactic procedure

Inference is about **deriving** conclusions from the KB using formal **rules** (not checking all models). It’s the _mechanical proof process_ side of logic.

```
KB ⊢ α means:
α can be derived from KB using inference rules
```

Example rule (Modus Ponens):

```
P,  P ⇒ Q  
----------
     Q
```

If an inference system is **sound**, everything it derives (⊢) is also true (⊨).  
If it’s **complete**, it can derive everything that’s true according to entailment.

**In short:**
- ⊨ means “must be true” (semantic, about truth in all models)
- ⊢ means “can be proved” (syntactic, about what can be derived by rules)
- A good logical system makes ⊨ and ⊢ line up perfectly.

---

#### Inference Rules
From the top we can infer the bottom

**Modus Ponens**:
```
P, P ⇒ Q
---------
    Q
```

**And-Elimination**:
```
P ∧ Q      P ∧ Q
-----  OR  -----
  P          Q
```

**And-Introduction**:
```
P, Q
------
P ∧ Q
```

**Or-Introduction**:
```
  P        Q
-----  OR -----
P ∨ Q    P ∨ Q
```

---

#### Propositional Logic Proof

**Formal Definition**: KB ⊢ α if there exists a finite sequence S₁, S₂, ..., Sₙ such that:

1. **S₁ ∈ KB** (starts with known fact)
2. **Sₙ = α** (ends with goal)
3. **For any Sᵢ (2 ≤ i < n)**, either:
   - Sᵢ ∈ KB, OR
   - Sᵢ is derived by inference rule from S₁, ..., Sᵢ₋₁

---

### First-Order Logic

#### Symbols and Interpretations

**Constant Symbols**: Represent objects
```
A         → object A
Peter     → person named Peter
```

**Predicate Symbols**: Represent properties and relations
```
Round(A)                → A is round (property)
Brother(John, Peter)    → John and Peter are brothers (relation)
```

**Function Symbols**: Represent functions
```
BrotherOf(John) = Peter → Peter is a brother of John
```

**Key Difference**:
- **Predicates**: Return True/False
- **Functions**: Return objects

---

#### Terms

**Definition**: Logical expression referring to an object

**Simple Terms**: Constants and variables
```
John, x, A
```

**Complex Terms**: Functions applied to terms
```
f(t₁, t₂, ..., tₙ)

Examples:
Father(Richard)
BrotherOf(John)
```

**Purpose**: Create new object references without defining many constant symbols
- Real-world objects often possessed by other objects
- Avoid repetitive constant creation

---

#### Atomic and Complex Sentences

**Atomic Sentences**: Predicate + optional terms
```
Brother(Peter, John)
Married(Father(Richard), Mother(Richard))
```

**Complex Sentences**: Connected atomic sentences

**Construction Rules**:
1. If S is a sentence, ¬S is a complex sentence
2. If S₁ and S₂ are complex, then S₁ ∧ S₂, S₁ ∨ S₂, S₁ ⇒ S₂ are complex
3. If S is complex, then ∀xS(x) and ∃xS(x) are complex

**Example**:
```
Brother(John, Peter) ∧ Sister(Sue, Robin)
```

---

#### Universal Quantifier (∀)

**Format**: ∀x P
- Pronounced: "for all"
- x: variable for object class
- P: any logical sentence

**Semantics**: P is true for every object x

**Examples**:

All humans are mortal:
```
∀x Human(x) ⇒ Mortal(x)
```

All cats are mammals:
```
∀x Cat(x) ⇒ Mammal(x)
```

If Spot has a sister, that sister is a cat:
```
∀x Sister(x, Spot) ⇒ Cat(x)
```

---

#### Existential Quantifier (∃)

**Format**: ∃x P
- Pronounced: "there exists ... such that"
- x: variable for object class
- P: any logical sentence

**Semantics**: P is true for at least one object x

**Examples**:

There exists an unemployed student:
```
∃x Student(x) ∧ Unemployed(x)
```

Queen Victoria has a crown on her head:
```
∃x Crown(x) ∧ OnHead(x, Victoria)
```

---

#### Connection Between ∀ and ∃ (De Morgan's Rules)

**Equivalences**:
```
First-Order Logic              Propositional Analog
--------------------------------------------------
∀x¬P ≡ ¬∃xP                   ¬P ∧ ¬Q ≡ ¬(P ∨ Q)
¬∀xP ≡ ∃x¬P                   ¬(P ∧ Q) ≡ ¬P ∨ ¬Q
∀xP ≡ ¬∃x¬P                   P ∧ Q ≡ ¬(¬P ∨ ¬Q)
∃xP ≡ ¬∀x¬P                   P ∨ Q ≡ ¬(¬P ∧ ¬Q)
```

**Example**: "All people like icecream" ≡ "No one does not like icecream"
```
∀x Likes(x, Icecream) ⇔ ¬∃x ¬Likes(x, Icecream)
```

---

#### Truth Values of Complex Sentences

**Rules**:
```
S₁ ∧ S₂ → ⊤  iff  S₁ → ⊤ AND S₂ → ⊤
S₁ ∨ S₂ → ⊤  iff  S₁ → ⊤ OR S₂ → ⊤
¬S → ⊤       iff  S → ⊥
∀x P(x) → ⊤  iff  for all terms {t₁, ..., tₙ}, P(tᵢ) → ⊤
∃x P(x) → ⊤  iff  there exists term t ∈ {t₁, ..., tₙ}, P(t) → ⊤
```

**Example**:
Given:
- Brother(John, Tom) → ⊤
- Brother(John, Peter) → ⊥

Then:
```
Brother(John, Tom) ∧ Brother(John, Peter) → ⊥
Brother(John, Tom) ∨ Brother(John, Peter) → ⊤
```

---
 
#### Models in First-Order Logic

**Single Sentence Model**:
- Interpretation I is a model of sentence if sentence has ⊤ truth-value in I

**Example**:
```
I = {Brother(John, Tom), ¬Brother(John, Peter)}

I is a model of: Brother(John, Tom) ✓
I is NOT a model of: Brother(John, Peter) ✗
```

**Set of Sentences Model**:
- Interpretation M is a model of set S if every sentence in S has ⊤ truth-value in M

**Example**:
```
S = {P(A) ∨ P(B), Q(A) ⇒ Q(B)}
M = {P(A), ¬P(B), ¬Q(A), Q(B)}

Check: P(A) ∨ P(B) → ⊤ (P(A) is true)
Check: Q(A) ⇒ Q(B) → ⊤ (F ⇒ T = T)
Therefore: M is a model of S ✓
```

---

#### Entailment in First-Order Logic

**Definition**: S ⊨ φ means each model of S is also a model of φ

**Example**:
```
Given: S = {P(A), P(B), ∀x P(x) ⇒ Q(x)}
Then: S ⊨ Q(A) and S ⊨ Q(B)
```

**Proof of S ⊨ Q(A)**:
```
1. s₁: P(A) ∈ S                              (given)
2. s₂: A is a constant argument to P()       (from s₁)
3. s₃: ∀x P(x) ⇒ Q(x) ∈ S                   (given)
4. s₄: Substitute x by A: P(A) ⇒ Q(A)       (from s₃)
5. s₅: Apply Modus Ponens:
       P(A), P(A) ⇒ Q(A)
       -----------------
              Q(A)
```

---

#### Universal Elimination/Instantiation

**Rule**:
```
∀v α
---------------
SUBST({v/g}, α)
```
Where:
- v: variable
- g: ground term (term without variables)
- α: sentence

**Example**:
```
∀x Likes(x, Icecream)
-------------------------------------------
SUBST({x/Ben}, Likes(x, Icecream)) = Likes(Ben, Icecream)
```

**Note**: Can be applied multiple times to produce many consequences

---

#### Existential Elimination/Instantiation

**Elimination Rule**:
```
∃v α
---------------
SUBST({v/k}, α)
```
Where:
- v: variable
- k: **new constant** (not occurring elsewhere in KB)
- α: sentence

**Example**:
```
∃x Kill(x, Victim)
-------------------------------------------------
SUBST({x/Murderer}, Kill(x, Victim)) = Kill(Murderer, Victim)
```

**Important**:
- 'Murderer' is a new constant created for this purpose
- Apply only once, then discard existentially quantified sentence

---

#### Existential Introduction

**Rule**:
```
α
-----------------------
∃v SUBST({G/v}, α) = ∃v α
```
Where:
- v: variable not occurring in α
- G: ground term in α

**Example**:
```
Likes(Jerry, Icecream)
------------------------------------------------------------
∃x SUBST({Jerry/x}, Likes(Jerry, Icecream)) = ∃x Likes(x, Icecream)
```

---

#### Forward Chaining

**Algorithm Steps**:
1. Start from known facts in KB
2. Trigger all rules whose premises are satisfied
3. Add conclusions to known facts
4. Repeat steps 1-3 until:
   - Query is answered, OR
   - No new facts are added

**Definition**: Query is the statement to be proved or derived

**Characteristics**:
- Data-driven (bottom-up)
- Starts from facts, moves toward goal
- Incomplete for full first-order logic

---

#### Backward Chaining

**Algorithm Concept**:
- Work backward from goal/query
- Chain through rules to find supporting facts
- Top-down tree construction
- Search for path connecting ground term with query statement

**Characteristics**:
- Goal-driven
- Starts from query, moves toward facts
- Incomplete for full first-order logic

---

#### Forward and Backward Chaining Limitations

**Incompleteness**: Only work with Horn clauses
```
∀x P₁(x) ∧ ... ∧ Pₙ(x) ⇒ Q(x)
```

**Completeness Definition**: Algorithm guarantees finding solution when one exists

**Restriction**: Negation not allowed in premises
```
∀x ¬P(x) ⇒ Q(x)  ← Cannot be used
```

---

#### Resolution Rule

**Purpose**:
- Gives new knowledge by substitution
- **Complete** proof method (guaranteed to find solution if exists)

**Format**:
```
α ∨ β, ¬β ∨ γ
--------------
    α ∨ γ
```

**Example with Substitution**:
```
P(x) ∨ Q(x), ¬Q(y) ∨ R(z)
--------------------------  with θ = {y/x}
      P(x) ∨ R(z)
```

---

#### Resolution - Proof by Contradiction

**Key Idea**: KB ⊢ α iff KB ∪ {¬α} is inconsistent

**Method**: Prove KB ⊨ α by proving KB ∪ {¬α} is unsatisfiable
- Derive the empty clause (contradiction)
- This makes resolution complete

**Inconsistent Knowledge Base**: No model exists for KB

**Examples**:
1. KB = {P(a), ¬P(a)} is inconsistent
2. KB ⊢ α iff KB ∪ {¬α} is inconsistent

---

#### Conjunctive Normal Form (CNF)

**Definition**: C₁ ∧ C₂ ∧ ... ∧ Cₙ is CNF if each Cᵢ has form:
```
P₁ ∨ P₂ ∨ ... ∨ Pₖ
```
Where each Pⱼ is:
- Atomic sentence, OR
- Negation of atomic sentence

**Example**:
```
(P(a) ∨ ¬Q(b)) ∧ (P(b) ∨ Q(a))  ← Valid CNF
```

---

#### Resolution Proof Procedure

**To Prove KB ⊢ α**:

**Step 1**: Add ¬α to KB
```
KB' = KB ∪ {¬α}
```

**Step 2**: Translate each sentence in KB' to prenex CNF

**Step 3**: Eliminate ∀-quantifiers from each sentence

**Step 4**: Eliminate ∃-quantifiers using Skolemisation
```
Example:
∀x Person(x) ⇒ ∃y Heart(y) ∧ Has(x, y)

Becomes:
∀x Person(x) ⇒ Heart(f(x)) ∧ Has(x, f(x))
```

**Step 5**: Use resolution rule to prove KB' is inconsistent
- Show proof sequence: S₁, S₂, ..., Sₙ
- Where Sₙ = False (empty clause)

---

## Planning

### Planning Domain Definition Language (PDDL)

#### Overview

**Purpose**: Solution for representing planning problems formally

**Types**:
- **Basic PDDL**: Handles classical planning domains
- **Extended PDDL**: Handles non-classical domains
  - Continuous
  - Partially observable
  - Concurrent
  - Multi-agent

**Key Components**:
1. State
2. Action schema
3. Result

---

#### State in PDDL

**Definition**: Conjunction of ground atomic fluents

**Ground**: No variables
**Fluent**: Aspect of world that changes over time
**Ground Atomic**: Single predicate with constant arguments only

**PDDL Database Semantics**:

1. **Closed-World Assumption**: Any unmentioned fluents are false
2. **Unique Names Assumption**: Truck₁ and Truck₂ are distinct

**Valid State Examples**:
```
Poor ∧ Unknown  ✓
```

**Invalid State Examples**:
```
¬Poor                    ✗  (negation not allowed)
At(Truck₁, x)           ✗  (contains variable)
At(Spouse(Alice), Sydney) ✗  (contains function symbol)
```

---

#### Action Schema in PDDL

**Components**:
1. Action name
2. List of variables
3. Precondition (conjunction of literals)
4. Effect (conjunction of literals)

**Note**: Precondition provides background knowledge to avoid unnecessary actions

**Example - Fly Action Schema**:
```
Action(Fly(p, from, to),
    PRECOND: At(p, from) ∧ Plane(p) ∧ Airport(from) ∧ Airport(to)
    EFFECT: ¬At(p, from) ∧ At(p, to))
```

---

#### Ground Action

**Definition**: Variable-free action with constants assigned

**Example**:
Given: p = P₁, from = SFO, to = JFK
```
Action(Fly(P₁, SFO, JFK),
    PRECOND: At(P₁, SFO) ∧ Plane(P₁) ∧ 
             Airport(SFO) ∧ Airport(JFK)
    EFFECT: ¬At(P₁, SFO) ∧ At(P₁, JFK))
```

---

#### Action Applicability

**Definition**: Ground action a is applicable in state s, denoted a ∈ ACTION(s), if:
```
s ⊨ PRECOND(a)
```

**Meaning**: Every positive literal in precondition is in s, and every negated literal is not in s

**Example**:
```
∀p, from, to Fly(p, from, to) ∈ ACTION(s) ⇔
    s ⊨ (At(p, from) ∧ Plane(p) ∧ Airport(from) ∧ Airport(to))
```

---

#### Action Result

**Formula**:
```
RESULT(s, a) = s' = (s - DEL(a)) ∪ ADD(a)
```

**Process**:
1. Start with state s
2. Remove fluents in delete list: DEL(a) = negative literals in effects
3. Add fluents in add list: ADD(a) = positive literals in effects

**Example**:
```
S₀ = At(P₁, SFO) ∧ Plane(P₁) ∧ Airport(SFO) ∧ Airport(JFK)

Action(Fly(P₁, SFO, JFK),
    PRECOND: At(P₁, SFO) ∧ Plane(P₁) ∧ Airport(SFO) ∧ Airport(JFK)
    EFFECT: ¬At(P₁, SFO) ∧ At(P₁, JFK))

RESULT(S₀, Fly(P₁, SFO, JFK)) = 
    Plane(P₁) ∧ Airport(SFO) ∧ Airport(JFK) ∧ At(P₁, JFK)
```

---

## Machine Learning

### Supervised Learning

#### Formal Definition

**Given**:
- Training set with N input-output pairs: (xᵢ, yᵢ), i ∈ [1, N]
- xᵢ: feature vector
- yᵢ: ground truth (label)
- Unknown function f where yᵢ = f(xᵢ)

**Goal**: Discover function h that approximates true function f

**Hypothesis/Model**:
- h is a hypothesis about f
- h comes from hypothesis space H
- Good algorithm finds best h from H to approximate f

---

#### Performance Evaluation

**Training Phase Metrics**:

**Bias**: Measures systematic error
- How much expected prediction of h differs from true function f
- How far predictions are from ground truth on average
- **High bias → Underfitting**

**Variance**: Measures stability
- How much h's predictions change across different training sets
- How sensitive model is to particular sample
- **High variance → Overfitting**

**Test Phase Metrics**:

**Accuracy**: Evaluated using test set

**Test Set Requirements**:
1. **Same dimension as training set**: Each sample contains feature vector and label
   - Why? Must evaluate on same type of data model was trained on
2. **Disjoint from training set**: No overlap with training data
   - Why? Ensures unbiased evaluation of generalization

---

#### Underfitting vs Overfitting

**Underfitting (High Bias)**:
- Model too simple
- Fails to capture underlying patterns
- Poor performance on both training and test data
- Example: Linear model for non-linear data

**Good Fit**:
- Captures underlying patterns
- Generalizes well to new data
- Similar performance on training and test data

**Overfitting (High Variance)**:
- Model too complex
- Memorizes training data including noise
- Excellent training performance, poor test performance
- Example: High-degree polynomial fitting noise

**Visual Pattern**:
```
Underfitting: Simple curve, misses data patterns
Good Fit: Smooth curve, follows general trend
Overfitting: Complex curve, passes through all training points
```

---

### Decision Trees

#### Basic Concept

**Definition**: Representation of function mapping attribute vector to single output value (decision/label)

**Structure**:
- Internal nodes: Tests on attributes
- Branches: Outcomes of tests
- Leaf nodes: Class labels or decisions

**Example Decision Tree**:
```
           [Outlook]
          /    |    \
    Sunny/  Overcast  \Rainy
        /       |       \
   [Humidity] [Yes]  [Wind]
     /    \           /    \
  High   Normal    Weak   Strong
   /        \       /        \
 [No]      [Yes]  [Yes]     [No]
```

**Application**: Classification and regression tasks

**Advantages**:
- Interpretable
- Handles non-linear relationships
- No data normalization needed

---

### Unsupervised Learning - Clustering

#### What is Clustering?

**Informal Definition**: Finding natural groupings among objects without external knowledge (labels)

**Objectives**:
- **High intra-cluster similarity**: Objects within cluster are similar
- **Low inter-cluster similarity**: Objects in different clusters are dissimilar

#### Formal k-Clustering Definition

**Given**:
- Dataset X = {x₁, ..., xₙ} with n instances
- Similarity measurement dist for calculating distance between pairs

**k-Clustering**: Partition C = {C₁, ..., Cₖ} such that:
```
(i)   Cᵢ ≠ ∅               (no empty clusters)
(ii)  Cᵢ ∩ Cⱼ = ∅, i ≠ j   (disjoint clusters)
(iii) ∪ᵢ₌₁ᵏ Cᵢ = X          (covers all data)
(iv)  Minimize: Σᵢ₌₁ᵏ Σₓ∈Cⱼ dist(x, cᵢ)
````

Where cᵢ is the center of cluster Cᵢ

---

#### Lloyd's Algorithm for k-Means Clustering

**Iterative Process**:

**Step 1 - Initialization**:

- Randomly pick k instances as initial cluster centroids

**Step 2 - Assignment**:

- Assign each remaining instance to closest centroid
- Forms k clusters

**Step 3 - Update**:

- Calculate mean of each cluster
- New means become new centroids

**Step 4 - Termination**:

- Repeat Steps 2-3 until centroids stop changing
- Convergence achieved

**Algorithm Characteristics**:

- Simple and efficient
- May converge to local optimum
- Sensitive to initial centroid selection
- Works well for spherical clusters

---

## Study Tips for Exam

### Key Areas to Focus

**Search**:

- Know BFS vs DFS differences (queue vs stack)
- Understand A* evaluation function components
- Practice Minimax tree evaluation

**Knowledge Representation**:

- Master truth table construction
- Understand model vs interpretation
- Practice inference rules and proofs
- Know quantifier transformations
- Understand resolution procedure steps

**Planning**:

- Memorize PDDL state requirements
- Understand action schema components
- Practice RESULT calculations

**Machine Learning**:

- Know bias-variance tradeoff
- Understand underfitting vs overfitting
- Know k-means clustering steps

### Exam Strategy

1. Bring well-organized A4 reference sheet
2. Include key formulas and algorithms
3. Practice proof techniques
4. Work through example problems
5. Pay attention to definitions and formal notations