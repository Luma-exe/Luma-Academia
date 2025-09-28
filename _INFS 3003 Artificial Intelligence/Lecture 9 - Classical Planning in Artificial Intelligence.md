
> [!faq] About this Lecture
> Class: INFS3003
> Subject: #artificalIntelligence
> Topics: #coding 
> Date: 2025-09-28 at 16:30

## Overview

Classical Planning is the process of finding a sequence of actions to accomplish a goal from an initial state in a **discrete, deterministic, static, and fully observable environment**.

### Key Definition

**Planning (Automated Planning/AI Planning)**: The process of finding (searching) a plan (a sequence of actions) to accomplish a goal from the initial state.

### Relationship to Search

- **Intelligent Action** = Knowledge Representation + Search
- Planning accelerates search by considering **background knowledge** rather than just state-to-state transitions
- Search algorithms alone have two major limitations:
    1. Require ad hoc heuristics for each new domain
    2. Need to explicitly represent an exponentially large state space

## Planning vs Traditional Search

### Traditional Search Approach

- Start from initial state(s)
- Expand search tree based on all possible actions
- Consider all possible results of each action
- Results in exponential growth of atomic states

### Planning Approach Benefits

- Introduces **background knowledge** (represented by logic) into the search process
- Avoids unnecessary exploration using logical rules
- Example: "If I'm in the bottom row and no obstacles above me, then I can move North"

## Planning Domain Definition Language (PDDL)

PDDL is the standard solution for representing classical planning domains and solving the exponential state space problem.

### Core Components

#### 1. State Representation

A state is represented as a **conjunction of ground atomic fluents**:

- **Ground**: No variables
- **Fluent**: An aspect of the world that changes over time
- **Ground Atomic**: Single predicate with constant arguments only

**Database Semantics**:

1. **Closed-World Assumption**: Any fluents not mentioned are false
2. **Unique Names Assumption**: Different names refer to different objects

**Valid State Examples**:

```
Poor ∧ Unknown  // Valid
```

**Invalid State Examples**:

```
¬Poor                    // Invalid (negation)
At(Truck₁, x)           // Invalid (has variables)
At(Spouse(Alice), Sydney) // Invalid (has function symbol)
```

#### 2. Action Schema

Represents a **family of ground actions** with:

- Action name
- List of variables
- Precondition (conjunction of literals)
- Effect (conjunction of literals)

**Example Action Schema**:

```
Action(Fly(p, from, to),
  PRECOND: At(p, from) ∧ Plane(p) ∧ Airport(from) ∧ Airport(to)
  EFFECT: ¬At(p, from) ∧ At(p, to))
```

**Ground Action Example**:

```
Action(Fly(P₁, SFO, JFK),
  PRECOND: At(P₁, SFO) ∧ Plane(P₁) ∧ Airport(SFO) ∧ Airport(JFK)
  EFFECT: ¬At(P₁, SFO) ∧ At(P₁, JFK))
```

#### 3. Action Applicability

A ground action `a` is applicable in state `s` if:

```
a ∈ ACTION(s) ⟺ s ⊨ PRECOND(a)
```

- Every positive literal in precondition must be in `s`
- Every negated literal must not be in `s`

#### 4. Action Result

The result of executing applicable action `a` in state `s`:

```
RESULT(s, a) = s' = (s - DEL(a)) ∪ ADD(a)
```

Where:

- **DEL(a)**: Delete list (negative literals in effects)
- **ADD(a)**: Add list (positive literals in effects)

**Step-by-Step Process**:

1. Start with state `s`
2. Remove fluents that appear as negative literals in effects
3. Add fluents that are positive literals in effects

### PDDL Problem Description

**Planning Domain**: Set of action schemas **Specific Problem**: Initial state + Goal

- **Initial State**: Conjunction of ground fluents
- **Goal**: Conjunction of literals (may contain variables)

## Block World Example

### Initial State

```
S₀: On(A, Table) ∧ On(B, Table) ∧ On(C, A) ∧ 
    Block(A) ∧ Block(B) ∧ Block(C) ∧ 
    Clear(B) ∧ Clear(C)
```

### Goal

```
On(A, B) ∧ On(B, C)
```

### Solution Plan

```
[MoveToTable(C, A), Move(B, Table, C), Move(A, Table, B)]
```

### State Transition Example

**Computing S₁**:

```
S₁ = RESULT(S₀, MoveToTable(C, A))
   = (S₀ - DEL(MoveToTable(C, A))) ∪ ADD(MoveToTable(C, A))
   = (S₀ - {On(C, A)}) ∪ {On(C, Table), Clear(A)}

Result:
S₁ = On(A, Table) ∧ On(B, Table) ∧ Block(A) ∧ Block(B) ∧ 
     Block(C) ∧ Clear(B) ∧ Clear(C) ∧ On(C, Table) ∧ Clear(A)
```

## Planning as State-Space Search

### Forward Search

- Start from initial state
- Search all applicable actions
- Progress to next state
- Continue until goal is reached
- **Problem**: Too many actions to consider, state space too large

### Backward Search

- Start from goal
- Apply actions backward
- Find sequence reaching initial state
- **Problem**: Uses states with variables, harder to develop good heuristics

## Advanced Planning Approaches

### Planning Graphs

**Purpose**: Specialized data structure encoding constraints on:

- How actions relate to preconditions and effects
- Which things are mutually exclusive

#### Key Concepts

**Persistent Action**: Action that doesn't change anything

**Mutual Exclusion Links (Mutex)**: Conflicts preventing fluents from occurring together

**Types of Mutex**:

1. **Inconsistent Effect**: One action negates effect of another
2. **Interference**: One action's effect negates another's precondition
3. **Competing Needs**: Actions have mutually exclusive preconditions

#### Spare Tire Problem Example

**Initial State**:

```
Tire(Flat) ∧ Tire(Spare) ∧ At(Flat, Axle) ∧ At(Spare, Trunk)
```

**Goal**:

```
At(Spare, Axle)
```

**Actions**:

```
Action(Remove(obj, loc),
  PRECOND: At(obj, loc)
  EFFECT: ¬At(obj, loc) ∧ At(obj, Ground))

Action(PutOn(t, Axle),
  PRECOND: Tire(t) ∧ At(t, Ground) ∧ ¬At(Flat, Axle)
  EFFECT: ¬At(t, Ground) ∧ At(t, Axle))

Action(LeaveOvernight,
  PRECOND: 
  EFFECT: ¬At(Spare, Ground) ∧ ¬At(Spare, Axle) ∧ ¬At(Spare, Trunk) ∧
          ¬At(Flat, Ground) ∧ ¬At(Flat, Axle) ∧ ¬At(Flat, Trunk))
```

**Solution Plan**:

```
[Remove(Flat, Axle), Remove(Spare, Trunk), PutOn(Spare, Axle)]
```

### Situation Calculus

**Approach**: Describe planning problems in first-order logic

- **Planning Problem** → Action Theory
- **Solution** ↔ Proving goal formula with sequence of situations
- **Method**: Theorem proving

#### Ontology Components

- **Actions**: Terms in the language
- **Situations**: Terms in the language
- **Fluents**: Functions or predicates
- **Result Function**: Represents new state from action
- **Temporal/Eternal Predicates**: Unchanging facts

#### Axiom Types

**Possibility Axiom**: When action can be executed

```
Preconditions ⇒ Poss(a, s)
```

**Effect Axiom**: What happens when action is executed

```
Poss(a, s) ⇒ changes that result from taking action a at s
```

#### Frame Problem and Solution

**Frame Problem**: Challenge of explicitly defining all facts that remain unchanged after an action

**Solution - Successor State Axiom**:

```
Action is possible ⇒ 
(A fluent is true in resulting state ⇔ 
 Action causes it true ∨ it was true before)
```

#### Example Axioms

**Possibility Axioms**:

```
At(Agent, x, s) ∧ Adjacent(x, y) ⇒ Poss(Go(x, y), s)
Gold(g) ∧ At(Agent, x, s) ∧ At(g, x, s) ⇒ Poss(Grab(g), s)
```

**Effect Axioms**:

```
Poss(Go(x, y), s) ⇒ At(Agent, y, Result(Go(x, y), s))
Poss(Grab(g), s) ⇒ Holding(g, Result(Grab(g), s))
```

**Successor State Axioms**:

```
Poss(a, s) ⇒ (At(Agent, y, Result(a, s)) ⇔ 
             a = Go(x, y) ∨ (At(Agent, y, s) ∧ a ≠ Go(y, z)))
```

### Partial-Order Planning

**Approach**: Represents plan as a graph rather than linear sequence

- Each action is a node in the graph
- Edges indicate predecessor actions that establish preconditions
- Allows for **planning as refinement** of partially ordered plans

## Key Takeaways

### Planning vs Search Summary

1. **Planning** uses background knowledge to avoid exponential state space explosion
2. **PDDL** provides standardized representation for classical planning
3. **Multiple approaches** exist: state-space search, planning graphs, situation calculus, partial-order planning
4. **Each approach** has trade-offs between expressiveness and computational efficiency

### Critical Concepts for Mastery

- Understanding PDDL syntax and semantics
- Computing action results using ADD/DEL lists
- Recognizing when actions are applicable
- Frame problem and successor state axioms
- Mutex relationships in planning graphs
- Trade-offs between different planning approaches