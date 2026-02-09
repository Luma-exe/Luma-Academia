
> [!faq] About this Lecture
> Class: INFS3003
> Subject: #artificalIntelligence
> Topics: #coding 
> Date: 2025-08-27 at 00:37

## Knowledge-based Agents

### Background

- **Intelligent Action = Knowledge Representation + Search**
- Real World → Knowledge (through Agent's representation) → Goal (through search/generate actions)

### Basic Concepts of Knowledge Representation

**Core Definitions:**

- **Sentence**: represents some assertion about the world
- **Axiom**: sentence being given without being derived from other sentences
- **Knowledge representation language**: A formal language used to express knowledge
- **Knowledge base (KB)**: A set of sentences represented by the knowledge representation language
- **Inference**: A mechanism used to determine what follows from the knowledge base

**Relationship Diagram:**

- Language symbols ↔ Object in the real world
- sentences ↔ Knowledge

### Example with Natural Language

Given knowledge base KB = {Sentence A, Sentence B} where:

- **Sentence A**: "if Jane is interested in logic, then Jane will enroll in unit AI"
- **Sentence B**: "Jane is interested in logic"
- **Inference**: "Jane will enrol in unit AI"

### How Knowledge-based Agents Work

Agent interacts with Real World through:

- **percept** (input from real world)
- **tell** (agent updates KB)
- **ask** (agent queries KB)
- **Action** (output to achieve goal)

### Building a Knowledge Base

**Declarative approach:**

1. Starting with an empty KB
2. → Agent designer TELLs sentences one by one to the agent
3. → Agent knows what to do

**Procedural approach:**

- Agent designer encodes desirable behaviours directly as program code

### Levels of Knowledge-based Agents

- **Knowledge level**: The most abstract level, which describes the agent by saying what it knows - agent's understanding of the world
- **Logic level**: The level at which the knowledge is encoded into sentences using formal logic and rules
- **Implementation level**: The agent's architecture (implementation details, e.g., data structures)

## Representation, Reasoning and Logic

### Knowledge Sources

Knowledge could come from two sources:

1. Agent produces sentences based on the observation of the real world
2. Pre-defined sentences from the real world directly (could be knowledge produced by the agent designer)

### Knowledge Representation Languages

**Types of representation languages:**

- Programming languages
- Natural languages
- Logic languages
- Knowledge graphs

**Comparison Example (4×4 world with pits):**

- **Programming languages**: Use arrays like world[1,3]="Pit"
    - Problem: Cannot represent incomplete information like "there is a pit either in cell [2,2] or [3,1]"
- **Natural language**: Not precise enough, e.g., "I am not sure if there exists a pit in the world, but I think there is one"
- **Logical languages**: Precise with clear syntax and semantics

### Sentences and Models

**Key Concepts:**

- **Syntax**: defines the rules of constructing sentences
- **Semantics**: defines the truth of sentences
- **Model**: A possible world/interpretation where sentences can be evaluated

**Example:**

- x ≥ y: represent a relationship between x and y (syntax)
- If x ≥ y is False if x is a smaller number than y so x < y (semantics)

**Model as Interpretation:** For language L = {P, Q, R}, there are 8 different interpretations:

|P|Q|R|
|---|---|---|
|T|T|T|
|T|T|F|
|T|F|T|
|T|F|F|
|F|T|T|
|F|T|F|
|F|F|T|
|F|F|F|

**Model Satisfaction:**

- If a sentence α is true in model m, we say that m **satisfies** α or m **is a model of** α
- M(α) denotes the set of all models of α

**Examples:**

- Consider interpretation I = {P, ¬Q, ¬R}. Formula P ∨ Q is true in I, so I is a model of P ∨ Q
- P ∨ Q has 6 models (as long as (P, Q) is not (F, F))
- I is not a model of P ∧ Q since (P, Q) is (T, F) making P ∧ Q false

### Reasoning

**Purpose:**

- **Reasoning (inference) helps us to build new knowledge!**

**Process:**

```
input α → Algorithm ← KB → output {Yes/No}
```

- If output is "Yes": KB ⊢ α
- If output is "No": KB ⊬ α

### Entailment and Inference

**Entailment** (semantic relation):

- α ⊨ β: α entails β, if and only if in every model where α is true, β is also true
- The truth of α guarantees the truth of β, so M(α) ⊆ M(β)
- KB ⊨ α: KB entails α if, in given models, every sentence in KB is true, then α is also true

**Inference** (syntactic procedure):

- KB ⊢ α: if α can be derived from KB using logical rules
- Inference is like finding a needle (α) in a haystack (all consequences of KB)
- Entailment is like the needle being in the haystack

### Soundness and Completeness

**Soundness (truth-preserving):**

- An inference algorithm that derives only entailed sentences
- If KB ⊢ α, then we must have KB ⊨ α

**Completeness:**

- An inference algorithm can derive any sentence that is entailed
- If KB ⊨ α, then we can guarantee KB ⊢ α

**Ideal Goal:** KB ⊨ α if and only if KB ⊢ α

### Validity and Satisfiability

**Valid sentence:**

- True in ALL models
- Example: "There is a pit in cell [1,1] or there is not a pit in cell [1,1]"

**Satisfiable sentence:**

- True in SOME models
- Example: "There is a pit in cell [1,1]"

### Logical Inference

**Importance of validity:**

- Inference rules work because they are valid
- Example: "if A then B" with A allows us to derive B because this inference pattern is valid

**Components of Logic:**

- **Formal system**: language syntax and language semantics
- **Proof theory**: a set of rules for inference

## Propositional Logic

### Syntax

**Symbols:**

- **Logical constants**: True and False
- **Propositional symbols**: P, Q, R, ...
- **Logical connectives**: ∧, ∨, ⇒, ⇔ and ¬
- **Parentheses**: ( and )

**Grammar Rules:**

```
Sentence → AtomicSentence | ComplexSentence
AtomicSentence → True | False | P | Q | R | ...
ComplexSentence → ( Sentence )
                | ¬ Sentence  
                | Sentence ∧ Sentence
                | Sentence ∨ Sentence
                | Sentence ⇒ Sentence
                | Sentence ⇔ Sentence

OPERATOR PRECEDENCE: ¬, ∧, ∨, ⇒, ⇔
```

**Examples:**

- A ∨ B, (A ∨ (B ∧ C)) ⇒ C, (A ∨ B) ⇒ C are sentences
- A ∧ ∨B is not a sentence

### Semantics

**Truth Table for Basic Connectives:**

|P|Q|¬P|P∧Q|P∨Q|P⇒Q|P⇔Q|
|---|---|---|---|---|---|---|
|false|false|true|false|false|true|true|
|false|true|true|false|true|true|false|
|true|false|false|false|true|false|false|
|true|true|false|true|true|true|true|

### Standard Logical Equivalences

```
(α ∧ β) ≡ (β ∧ α)                    commutativity of ∧
(α ∨ β) ≡ (β ∨ α)                    commutativity of ∨  
((α ∧ β) ∧ γ) ≡ (α ∧ (β ∧ γ))        associativity of ∧
((α ∨ β) ∨ γ) ≡ (α ∨ (β ∨ γ))        associativity of ∨
¬(¬α) ≡ α                           double-negation elimination
(α ⇒ β) ≡ (¬β ⇒ ¬α)                 contraposition
(α ⇒ β) ≡ (¬α ∨ β)                  implication elimination
(α ⇔ β) ≡ ((α ⇒ β) ∧ (β ⇒ α))       biconditional elimination
¬(α ∧ β) ≡ (¬α ∨ ¬β)                De Morgan
¬(α ∨ β) ≡ (¬α ∧ ¬β)                De Morgan
(α ∧ (β ∨ γ)) ≡ ((α ∧ β) ∨ (α ∧ γ))  distributivity of ∧ over ∨
(α ∨ (β ∧ γ)) ≡ ((α ∨ β) ∧ (α ∨ γ))  distributivity of ∨ over ∧
```

### Proof Examples

**Example 1: Prove (P ⇒ Q) ⇔ (¬P ∨ Q)**Using truth table:

|P|Q|P⇒Q|¬P∨Q|(P⇒Q)⇔(¬P∨Q)|
|---|---|---|---|---|
|F|F|T|T|T|
|F|T|T|T|T|
|T|F|F|F|T|
|T|T|T|T|T|

**Example 2: Prove if we have P ∨ Q and ¬Q, then we have P**Proof steps:

1. ∵ (α ⇒ β) ≡ (¬α ∨ β)
2. ∴ (P ∨ Q) ≡ (¬P ⇒ Q)
3. ∵ (α ⇒ β) ≡ (¬β ⇒ ¬α)
4. ∴ (¬P ⇒ Q) ≡ (¬Q ⇒ P)
5. ∵ ((¬Q ⇒ P) ∧ ¬Q) ⇒ P is valid and ((¬Q ⇒ P) ∧ ¬Q) ≡ ((P ∨ Q) ∧ ¬Q)
6. ∴ ((P ∨ Q) ∧ ¬Q) ⇒ P is valid
7. So when we have P ∨ Q and ¬Q, we must have P

### Inference Rules

**Notation:**

```
X
─
Y
```

where X is one or more sentences, and Y is a sentence.**Common Inference Rules:**

- **Modus Ponens**: P, P ⇒ Q / Q
- **And-Elimination**: P ∧ Q / P or P ∧ Q / Q
- **And-Introduction**: P, Q / P ∧ Q
- **Or-Introduction**: P / P ∨ Q or Q / P ∨ Q

### Propositional Logic Proof

**Definition:** A sentence α can be proved from KB (KB ⊢ α) if there exists a finite sequence S₁, S₂, ..., Sₙ such that:

1. S₁ ∈ KB
2. Sₙ = α
3. For any Sᵢ (2 ≤ i < n), either Sᵢ ∈ KB, or Sᵢ is derived using inference rule X/Sᵢ where X comes from S₁, ..., Sᵢ₋₁

**Example 1:** KB = {P, P ⇒ Q}, prove KB ⊢ Q

1. s₁: P ∈ KB
2. s₂: P ⇒ Q ∈ KB
3. s₃: s₁, s₂, Modus Ponens: s₁, s₂ / Q

**Example 2:** KB = {P, Q, P ∧ Q ⇒ R}, prove KB ⊢ R

1. s₁: P ∈ KB
2. s₂: Q ∈ KB
3. s₃: s₁, s₂, And-introduction: s₁, s₂ / P ∧ Q
4. s₄: P ∧ Q ⇒ R ∈ KB
5. s₅: s₃, s₄, Modus Ponens: s₃, s₄ / R

### Reasoning as Search Problem

**Example:** Let Σ be a knowledge base with sentences:

- B ∨ C ⇒ E
- A ∧ B ⇒ D
- D ∧ E ⇒ F
- B ∧ E ⇒ F
- A ∧ B ∧ C

**Prove Σ ⊢ F:**

```
s₁: A ∧ B ∧ C ∈ Σ
s₂: s₁, And-elimination: A ∧ B ∧ C / B
s₃: s₂, Or-introduction: B / B ∨ C  
s₄: B ∨ C ⇒ E ∈ Σ
s₅: s₃, s₄, Modus Ponens: B ∨ C, B ∨ C ⇒ E / E
s₆: s₁, And-elimination: A ∧ B ∧ C / A ∧ B
s₇: A ∧ B ⇒ D ∈ Σ  
s₈: s₆, s₇, Modus Ponens: A ∧ B, A ∧ B ⇒ D / D
s₉: s₅, s₈, And-introduction: D, E / D ∧ E
s₁₀: D ∧ E ⇒ F ∈ Σ
s₁₁: s₉, s₁₀, Modus Ponens: D ∧ E, D ∧ E ⇒ F / F
```

**Search Tree Visualization:** F can be derived from either (B, E) or (D, E), which can be further broken down to basic propositions T (true facts from KB).

## Propositional Logic-based Agent

### Case Study: Grid World

**Environment:** 3×3 grid with:

- Gold at position (3,3)
- Pits at positions (2,2) and (3,1)
- Agent starts at (1,1)

**Knowledge Base Contents:**

- **Position facts**: C₁₁ (agent's current position)
- **Movement rules**:
    - C₁₁ ⇒ C₁₂ ∨ C₂₁ (from C₁₁, agent may go to C₁₂ or C₂₁)
    - C₂₁ ⇒ C₂₂ ∨ C₃₁ ∨ C₁₁ (from C₂₁, agent may go to C₂₂, C₃₁ or C₁₁)
- **Hazard rules**:
    - C₂₂ ⇒ Pit (if agent is in C₂₂, then it will fall into pit)
    - C₁₃ ⇒ Pit (if agent is in C₁₃, then it will fall into pit)
    - Pit ⇒ Dead (if agent is in Pit, then it is dead)
- **Goal rule**: C₃₃ ⇒ Gold (if agent is in C₃₃, then it can get gold)

### Representing Agent Actions

**Constraint rules:**

```
Dead ⇒ ¬Forward
Dead ⇒ ¬Turn_left  
Dead ⇒ ¬Turn_right
```

**Action effects:**

```
C₁₁ ∧ Face_right ∧ Forward ⇒ C₁₂
```

This framework allows the agent to reason about safe moves, avoid pits, and plan paths to the gold using logical inference.

## Summary: Knowledge Representation Terms and Concepts

### Foundational Terms

**Sentence**

- An assertion about the world expressed in a knowledge representation language
- Can be atomic (simple) or complex (built from multiple sentences using connectives)

**Axiom**

- A sentence that is given as true without being derived from other sentences
- Foundation statements in a knowledge base that don't require proof

**Knowledge Representation Language**

- A formal language with defined syntax and semantics used to express knowledge
- Types include programming languages, natural languages, logic languages, and knowledge graphs

**Knowledge Base (KB)**

- A collection of sentences represented in a knowledge representation language
- Contains all the facts and rules an agent knows about the world

**Syntax**

- The rules that define how sentences are properly constructed in a language
- Determines what constitutes a valid sentence structure

**Semantics**

- Defines the meaning and truth values of sentences
- Determines when sentences are true or false in different situations

### Reasoning and Logic Terms

**Inference**

- The process of deriving new sentences from existing ones in the knowledge base
- Uses logical rules to generate new knowledge
- Notation: KB ⊢ α means "α can be inferred from KB"

**Model**

- A possible world or interpretation in which sentences can be evaluated as true or false
- An assignment of truth values to all propositional symbols
- If sentence α is true in model m, then m satisfies α or m is a model of α
- M(α) denotes the set of all models of α

**Entailment** (⊨)

- A semantic relationship between sentences
- α ⊨ β means α entails β: whenever α is true, β must also be true
- KB ⊨ α means α is true in all models where KB is true
- Relationship: M(α) ⊆ M(β)

**Soundness**

- A property of inference algorithms that guarantees truth preservation
- If KB ⊢ α, then KB ⊨ α
- Only derives sentences that are actually entailed

**Completeness**

- A property of inference algorithms that can derive everything that is entailed
- If KB ⊨ α, then KB ⊢ α
- Can find all logical consequences

**Valid Sentence**

- A sentence that is true in ALL possible models
- Example: P ∨ ¬P (law of excluded middle)

**Satisfiable Sentence**

- A sentence that is true in SOME model (at least one)
- Not contradictory; has at least one interpretation where it's true

### Agent Architecture Terms

**Knowledge Level**

- The most abstract level describing what the agent knows
- Represents the agent's understanding of the world

**Logic Level**

- The level where knowledge is encoded into formal sentences using logic
- Bridges abstract knowledge and concrete implementation

**Implementation Level**

- The physical architecture and data structures that store and process knowledge
- How the agent is actually built

**Percept**

- Input information the agent receives from the environment
- Observations about the real world

**Tell Operation**

- Adds a new sentence to the knowledge base
- Updates the agent's knowledge with new information

**Ask Operation**

- Queries the knowledge base to determine if something is true
- Used to make decisions based on current knowledge

### Propositional Logic Terms

**Logical Constants**

- True and False (the two truth values)

**Propositional Symbols**

- Variables representing propositions (P, Q, R, etc.)
- Can be true or false

**Logical Connectives**

- Operators that combine propositions:
    - ¬ (not/negation)
    - ∧ (and/conjunction)
    - ∨ (or/disjunction)
    - ⇒ (implies/implication)
    - ⇔ (if and only if/biconditional)

**Atomic Sentence**

- A simple sentence: True, False, or a propositional symbol
- Cannot be broken down further

**Complex Sentence**

- Built from atomic sentences using logical connectives
- Can be decomposed into simpler parts

### Inference Rules

**Modus Ponens**

- From P and P ⇒ Q, infer Q
- If we know something and know it implies something else, we can conclude that something else

**And-Elimination**

- From P ∧ Q, infer P (or Q)
- If we know a conjunction is true, each conjunct is true

**And-Introduction**

- From P and Q, infer P ∧ Q
- If we know two things separately, we know their conjunction

**Or-Introduction**

- From P, infer P ∨ Q
- If we know something is true, we know any disjunction containing it is true

### Approaches to Building Knowledge Bases

**Declarative Approach**

- Start with empty KB and add sentences explicitly
- Agent designer tells facts to the agent
- Separates knowledge from reasoning process

**Procedural Approach**

- Encode behaviors directly as program code
- Knowledge is implicit in the procedures
- Less flexible but potentially more efficient

### Key Relationships

**Entailment vs. Inference**

- Entailment (⊨) is semantic: about truth in models
- Inference (⊢) is syntactic: about deriving sentences using rules
- Ideal system: KB ⊨ α if and only if KB ⊢ α

**Model Satisfaction**

- m satisfies α means α is true in model m
- M(α) is the set of all models satisfying α
- α ⊨ β means M(α) ⊆ M(β)

**Proof Structure**

- A sequence of sentences S₁, S₂, ..., Sₙ where:
    - S₁ comes from KB
    - Sₙ is the goal sentence
    - Each intermediate sentence is either from KB or derived by inference rules