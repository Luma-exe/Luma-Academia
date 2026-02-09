
> [!faq] About this Lecture
> Class: INFS3003
> Subject: #artificalIntelligence
> Topics: #coding 
> Date: 2025-09-14 at 22:40

## First-order Logic Review

### Core Components

First-order logic is a formal system for representing the real world through:

- **Objects:** Entities in the domain
- **Relations:** Relationships between objects
- **Functions:** Mappings from objects to objects

### Syntax Elements

- **Terms and sentences:** Basic building blocks
- **Symbols:**
    - Variables (x, y, z)
    - Constants (specific objects)
    - Predicate symbols (relationships)
    - Function symbols (mappings)
- **Connectives:** ¬, ∧, ∨, ⇒, ⇔
- **Quantifiers:** ∀ (universal), ∃ (existential)

### Semantics

- **Universe:** Domain of discourse
- **Interpretations:** Assignments of meaning to symbols
- **Models:** Interpretations that satisfy sentences
- **Entailment:** Logical consequence relationship

### Example Representation

```
Computer science students must enrol in Programming subject:
∀x Study(x, CS) ⇒ Enrol(x, Programming)
```

## Inference Rules from Propositional Logic

### Modus Ponens

```
α, α ⇒ β
---------
    β
```

### And-elimination

```
α₁ ∧ α₂ ∧ ... ∧ αₙ
------------------  (1 ≤ i ≤ n, n ≥ 2)
        αᵢ
```

### And-introduction

```
α₁, α₂, ..., αₙ
----------------  (n ≥ 2)
α₁ ∧ α₂ ∧ ... ∧ αₙ
```

### Or-introduction

```
       αᵢ
------------------  (1 ≤ i ≤ n, n ≥ 2)
α₁ ∨ α₂ ∨ ... ∨ αₙ
```

## Inference Rules Involving Quantifiers

### Substitution in First-order Logic

The major difference from propositional logic is the presence of quantifiers, which require substitution operations.

**Substitution notation:** `SUBST(θ, α)` applies substitution θ to sentence α

**Example:**

```
SUBST({x/Sam, y/Pam}, Likes(x, y)) = Likes(Sam, Pam)
```

where `{x/Sam, y/Pam}` is θ and `Likes(x, y)` is α

### Universal Elimination/Instantiation (∀-elimination)

**Rule:**

```
∀v α
--------------
SUBST({v/g}, α)
```

where:

- v is a variable
- g is a ground term (term without variables)
- α is a sentence

**Example:**

```
∀x Likes(x, Icecream)
------------------------
Likes(Ben, Icecream)
```

**Key property:** Universal elimination can be applied multiple times to the same axiom to produce different consequences.

### Existential Elimination/Instantiation (∃-elimination)

**Rule:**

```
∃v α
--------------
SUBST({v/k}, α)
```

where:

- v is a variable
- k is a new constant (does not occur elsewhere in KB)
- α is a sentence

**Example:**

```
∃x Kill(x, Victim)
------------------
Kill(Murderer, Victim)
```

**Key properties:**

- The new constant ('Murderer') must not occur elsewhere in the KB
- Existential elimination needs only be applied once
- The existentially quantified sentence can be discarded after elimination

### Existential Introduction (∃-introduction)

**Rule:**

```
α
--------------------
∃v SUBST({G/v}, α)
```

where:

- Variable v does not occur in α
- G is a ground term in α

**Example:**

```
Likes(Jerry, Icecream)
----------------------
∃x Likes(x, Icecream)
```

## Proof Examples

### Proof Procedure Format

Given a knowledge base KB, to prove `KB ⊢ α`:

1. **S₁:** Sᵢ ∈ KB (premises from knowledge base)
2. **Sₙ:** Sₙ = α (goal statement)
3. **Sᵢ (1 < i < n):** Either Sᵢ ∈ KB, or derived from previous statements using inference rules

### Example 1: Universal Elimination

**Given:** `KB = {∀x P(x) ⇒ Q(x), P(C)}` **Prove:** `KB ⊢ Q(C)`

**Proof:**

```
(1) S₁: P(C) ∈ KB
(2) S₂: ∀x P(x) ⇒ Q(x) ∈ KB
(3) S₃: S₁, S₂ and ∀-elimination:
    ∀x P(x) ⇒ Q(x)
    SUBST({x/C}, P(x) ⇒ Q(x)) = P(C) ⇒ Q(C)
(4) S₄: S₁, S₃ and Modus Ponens:
    P(C), P(C) ⇒ Q(C)
    ----------------------
    Q(C)
```

### Example 2: Existential Elimination

**Given:** `KB = {∃x P(x), ∀x P(x) ⇒ Q(x)}` **Prove:** `KB ⊢ Q(A)`

**Proof:**

```
(1) S₁: ∃x P(x) ∈ KB
(2) S₂: S₁ and ∃-elimination:
    ∃x P(x)
    SUBST({x/A}, P(x)) = P(A)
(3) S₃: ∀x P(x) ⇒ Q(x) ∈ KB
(4) S₄: S₃ and ∀-elimination:
    ∀x P(x) ⇒ Q(x)
    SUBST({x/A}, P(x) ⇒ Q(x)) = P(A) ⇒ Q(A)
(5) S₅: S₄, S₂ and Modus Ponens:
    P(A), P(A) ⇒ Q(A)
    ------------------
    Q(A)
```

### Example 3: Existential Introduction

**Given:** `KB = {P(A)}` **Prove:** `KB ⊢ ∃x P(x) ∨ Q(x)`

**Proof:**

```
(1) S₁: P(A) ∈ KB
(2) S₂: S₁ and Or-introduction:
    P(A)
    -----------
    P(A) ∨ Q(A)
(3) S₃: S₂ and ∃-introduction:
    P(A) ∨ Q(A)
    ∃x SUBST({A/x}, P(A) ∨ Q(A)) = ∃x P(x) ∨ Q(x)
```

### Complex Example: The West-Nono Scenario

**Scenario:**

- It is a crime for an American to sell weapons to hostile nations
- The country Nono, an enemy of America, has some missiles
- All of its missiles were sold to it by Colonel West, who is American

**Goal:** Prove Colonel West is a criminal

**Knowledge Base:**

```
(1) ∀x,y,z American(x) ∧ Weapon(y) ∧ Nation(z) ∧ Hostile(z) ∧ Sells(x,y,z) ⇒ Criminal(x)
(2) ∃x Owns(Nono,x) ∧ Missile(x)
(3) ∀x Owns(Nono,x) ∧ Missile(x) ⇒ Sells(West,Nono,x)
(4) ∀x Missile(x) ⇒ Weapon(x)
(5) ∀x Enemy(x,America) ⇒ Hostile(x)
(6) American(West)
(7) Nation(Nono)
(8) Enemy(Nono,America)
(9) Nation(America)
```

**Proof (abbreviated key steps):**

```
(1) S₁: ∃x Owns(Nono,x) ∧ Missile(x) ∈ KB(2)
(2) S₂: S₁ and ∃-elimination: Owns(Nono,M1) ∧ Missile(M1)
(3) S₃: S₂ and And-elimination: Owns(Nono,M1)
(4) S₄: S₂ and And-elimination: Missile(M1)
(5) S₅: ∀x Missile(x) ⇒ Weapon(x) ∈ KB(4)
(6) S₆: S₅ and ∀-elimination: Missile(M1) ⇒ Weapon(M1)
(7) S₇: S₄, S₆ and Modus Ponens: Weapon(M1)
...
(23) S₂₃: S₂₂, S₁₅ and Modus Ponens: Criminal(West)
```

**Result:** `KB ⊢ Criminal(West)`

## Forward and Backward Chaining

### Forward Chaining

**Definition:** Data-driven reasoning that starts from known facts and derives new conclusions.

**Algorithm Steps:**

1. Start from known facts (in knowledge base)
2. Trigger all rules whose premises are satisfied
3. Add the conclusions to the known facts
4. Repeat steps 1-3 until the query is answered or no new fact is added

**Characteristics:**

- Bottom-up approach
- Generates all possible conclusions
- May derive irrelevant facts

### Backward Chaining

**Definition:** Goal-driven reasoning that works backward from the goal/query through rules to find supporting facts.

**Characteristics:**

- Top-down tree construction
- Focuses only on goal-relevant reasoning
- More efficient for specific queries

### Example: Horse Breeding KB

**Knowledge Base:**

```
(1) Horse(Comet)
(2) Horse(Prancer)
(3) Parent(Comet, Dasher)
(4) Parent(Comet, Prancer)
(5) Fast(Prancer)
(6) Parent(Dasher, Thunder)
(7) Fast(Thunder)
(8) Horse(Thunder)
(9) Horse(Dasher)
(10) ∀x,y Horse(x) ∧ Parent(x,y) ∧ Fast(y) ⇒ Valuable(x)
```

**Forward Chaining Example:** To prove `KB ⊢ Valuable(Comet)` and `KB ⊢ Valuable(Dasher)`:

1. KB(10) is satisfied with `{x/Comet, y/Prancer}` and `{x/Dasher, y/Thunder}`
2. Add to KB:
    - `Horse(Comet) ∧ Parent(Comet,Prancer) ∧ Fast(Prancer) ⇒ Valuable(Comet)`
    - `Horse(Dasher) ∧ Parent(Dasher,Thunder) ∧ Fast(Thunder) ⇒ Valuable(Dasher)`

**Backward Chaining Example:** To prove `KB ⊢ Valuable(Comet)`:

```
Valuable(Comet)
    |
    ├── Horse(Comet) [T]
    ├── Parent(Comet,y)
    │   ├── {y/Dasher} [F - Fast(Dasher) not in KB]
    │   └── {y/Prancer} [T]
    └── Fast(y)
        └── {y/Prancer} [T]
```

### Limitations of Forward and Backward Chaining

**Incompleteness:** Both approaches are incomplete for general first-order logic

- **Restricted format:** Only work with rules of the form `∀x P₁(x) ∧ ... ∧ Pₙ(x) ⇒ Q(x)`
- **No negation:** Cannot handle rules like `∀x ¬P(x) ⇒ Q(x)`

## Resolution Proof

### Why Resolution?

**Advantages:**

- Provides new knowledge through substitution
- **Complete proof method** (guarantees finding a proof if one exists)
- Handles full first-order logic including negation

### Resolution Rule Format

**Basic Resolution:**

```
α ∨ β, ¬β ∨ γ
--------------
    α ∨ γ
```

**With Substitution:**

```
P(x) ∨ Q(x), ¬Q(y) ∨ R(z)
---------------------------  θ = {y/x}
       P(x) ∨ R(z)
```

### Proof by Contradiction

**Key Principle:** `KB ⊢ α` if and only if `KB ∪ {¬α}` is inconsistent

**Method:** Resolution proves `KB ⊨ α` by:

1. Adding `¬α` to KB
2. Converting to CNF (Conjunctive Normal Form)
3. Applying resolution until deriving the empty clause (contradiction)

### Conjunctive Normal Form (CNF)

**Definition:** A formula of the form `C₁ ∧ C₂ ∧ ... ∧ Cₙ` where each `Cᵢ` is a disjunction of literals:

```
P₁ ∨ P₂ ∨ ... ∨ Pₖ
```

**Example:** `(P(a) ∨ ¬Q(b)) ∧ (P(b) ∨ Q(a))` is in CNF

### Conversion Rules to CNF

#### 1. Implication Elimination

```
P ⇒ Q ≡ ¬P ∨ Q
```

#### 2. Move Negation Inwards

```
¬∀x P ≡ ∃x ¬P
¬∃x P ≡ ∀x ¬P
```

#### 3. Standardize Variables

Avoid variable name conflicts:

```
∃x P(x) ∨ ∃x Q(x) ≡ ∃x P(x) ∨ ∃y Q(y)
∀x P(x) ∨ ∃x Q(x) ≡ ∀x P(x) ∨ ∃y Q(y)
```

#### 4. Skolemization

Remove existential quantifiers using Skolem functions:

```
∀x∃y P(x,y) ≡ ∀x P(x,F(x))
```

- Replace existentially quantified variable with a function of all universally quantified variables in whose scope it appears
- Preserves satisfiability (not semantic equivalence)

#### 5. Drop Universal Quantifiers

Universal quantifiers can be dropped (variables remain):

```
∀x P(x,F(x)) becomes P(x,F(x))
```

#### 6. Additional Rules

```
¬(A ∧ B) ≡ ¬A ∨ ¬B
¬(A ∨ B) ≡ ¬A ∧ ¬B
(A ∧ B) ∨ C ≡ (A ∨ C) ∧ (B ∨ C)
¬¬A ≡ A
∀x A ∀y B ≡ ∀x,y (A ∧ B)
(∀x A) ∧ B ≡ ∀x (A ∧ B), if x does not occur in B
(∃x A) ∧ B ≡ ∃x (A ∧ B), if x does not occur in B
```

### CNF Conversion Example

**Original:** `∀x (P(x) ∧ ∀y∃x (¬Q(x,y) ⇒ R(a,x,y)))`

**Step-by-step conversion:**

```
(1) Implication elimination:
    ∀x (P(x) ∧ ∀y∃x (¬¬Q(x,y) ∨ R(a,x,y)))

(2) Variable renaming:
    ∀x (P(x) ∧ ∀y∃u (¬¬Q(u,y) ∨ R(a,u,y)))

(3) Double negation:
    ∀x (P(x) ∧ ∀y∃u (Q(u,y) ∨ R(a,u,y)))

(4) Quantifier rewriting:
    ∀x,y (P(x) ∧ ∃u (Q(u,y) ∨ R(a,u,y)))

(5) Final form:
    ∀x,y∃u (P(x) ∧ (Q(u,y) ∨ R(a,u,y)))
```

### Resolution Proof Procedure

**To prove `KB ⊢ α`:**

1. **Add negation:** `KB' = KB ∪ {¬α}`
2. **Convert to CNF:** Translate each sentence in KB' to CNF
3. **Remove quantifiers:**
    - Drop ∀-quantifiers
    - Skolemize ∃-quantifiers
4. **Apply resolution:** Use resolution rule to derive contradiction
5. **Conclude:** If contradiction derived, then `KB ⊢ α`

### Complete Resolution Example

**Knowledge Base:**

```
(1) A₁: ∀x Cat(x) ⇒ Animal(x)
(2) A₂: ∃x Dog(x) ∧ Owns(Jack,x)
(3) A₃: ∀x(∃y Dog(y) ∧ Owns(x,y)) ⇒ AnimalLover(x)
(4) A₄: ∀x AnimalLover(x) ⇒ (∀y Animal(y) ⇒ ¬Kills(x,y))
(5) A₅: Kills(Jack,Tuna) ∨ Kills(Curiosity,Tuna)
(6) A₆: Cat(Tuna)
```

**Goal:** Prove `KB ⊢ Kills(Curiosity,Tuna)`

**Step 1:** `KB' = KB ∪ {¬Kills(Curiosity,Tuna)}`

**Step 2: CNF Conversion:**

```
(1) A'₁: ¬Cat(x) ∨ Animal(x)
(2) A'₂: Dog(f(Jack)) ∧ Owns(Jack,f(Jack))
(3) A'₃: ¬Dog(f(Jack)) ∨ ¬Owns(x,f(Jack)) ∨ AnimalLover(x)
(4) A'₄: ¬AnimalLover(x) ∨ ¬Animal(y) ∨ ¬Kills(x,y)
(5) A'₅: Kills(Jack,Tuna) ∨ Kills(Curiosity,Tuna)
(6) A'₆: Cat(Tuna)
(7) A₇: ¬Kills(Curiosity,Tuna)
```

**Step 3: Resolution Proof:**

```
(1) S₁: Dog(f(Jack)) ∧ Owns(Jack,f(Jack)) ∈ KB'
(2) S₂: S₁ and And-elimination: Dog(f(Jack))
(3) S₃: ¬Dog(f(Jack)) ∨ ¬Owns(x,f(Jack)) ∨ AnimalLover(x) ∈ KB'
(4) S₄: S₂, S₃ and Resolution Rule: ¬Owns(x,f(Jack)) ∨ AnimalLover(x)
(5) S₅: S₁ and And-elimination: Owns(Jack,f(Jack))
(6) S₆: S₄, S₅ and Resolution Rule with θ = {x/Jack}: AnimalLover(Jack)
(7) S₇: ¬AnimalLover(x) ∨ ¬Animal(y) ∨ ¬Kills(x,y) ∈ KB'
(8) S₈: S₆, S₇ and Resolution Rule with θ = {x/Jack}: ¬Animal(y) ∨ ¬Kills(Jack,y)
(9) S₉: ¬Cat(x) ∨ Animal(x) ∈ KB'
(10) S₁₀: S₈, S₉ and Resolution Rule with θ = {x/y}: ¬Cat(y) ∨ ¬Kills(Jack,y)
(11) S₁₁: Kills(Jack,Tuna) ∨ Kills(Curiosity,Tuna) ∈ KB'
(12) S₁₂: S₁₀, S₁₁ and Resolution Rule with θ = {y/Tuna}: ¬Cat(Tuna) ∨ Kills(Curiosity,Tuna)
(13) S₁₃: Cat(Tuna) ∈ KB'
(14) S₁₄: S₁₂, S₁₃ and Resolution Rule: Kills(Curiosity,Tuna)
(15) S₁₅: ¬Kills(Curiosity,Tuna) ∈ KB'
(16) S₁₆: S₁₄ and S₁₅ derive contradiction
```

**Conclusion:** `KB ⊢ Kills(Curiosity,Tuna)`

## Key Takeaways

### Inference Method Comparison

|Method|Completeness|Format Requirements|Best Use Case|
|---|---|---|---|
|Forward Chaining|Incomplete|Horn clauses only|Data-driven reasoning|
|Backward Chaining|Incomplete|Horn clauses only|Goal-driven queries|
|Resolution|Complete|Full FOL (via CNF)|General theorem proving|

### Important Concepts for Exams

1. **Quantifier elimination rules** and when to apply them
2. **CNF conversion** - essential for resolution
3. **Substitution notation** and variable binding
4. **Proof construction** using formal inference rules
5. **Resolution completeness** - why it's preferred for automated reasoning

### Practical Applications

- **Automated theorem proving**
- **Logic programming** (Prolog)
- **Expert systems**
- **Database query optimization**
- **Program verification**