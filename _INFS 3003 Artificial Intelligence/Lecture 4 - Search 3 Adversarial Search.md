
> [!faq] About this Lecture
> Class: INFS3003
> Subject: #artificalIntelligence
> Topics: #coding 
> Date: 2025-08-14 at 17:11

## The Game Problem

### Motivation Example: Tic-Tac-Toe Game

**Game Setup:**

- Two-person game with MAX and MIN players
- Objects: 3×3 checkerboard
- MAX plays "X", MIN plays "O"
- Goal: Place three symbols in a row (horizontal, vertical, or diagonal)
- Termination: One player wins or all squares are filled

**Example Game Sequence:**

```
Move 1 (MAX): X in center
Move 2 (MIN): O in corner
Move 3 (MAX): X in opposite corner
...continuing until termination
```

**Key Question:** How can MAX (or MIN) find a complete strategy to win the game?

**Answer:** This becomes a search problem through a game tree!

### Formal Definition of a Game

A game is formally defined by the following components:

- **S₀:** Initial state - specifies how the game is set up at the start
- **To-Move(s):** Function that returns which player's turn it is in state s
- **Action(s):** Set of legal moves available in state s
- **Results(s, a):** Transition model defining the state resulting from taking action a in state s
- **Is-Terminal(s):** Terminal test - returns true when the game is over, false otherwise
- **Terminal states:** States where the game has ended

---

## Perfect Decisions in Two-Person Games

### Connecting Games to Search Problems

|Game Concept|Search Problem Equivalent|
|---|---|
|Initial state and Goal/Terminal state|States|
|Operators (moves)|Actions|
|Terminal test|Goal test|
|Utility function|Path cost|

### Utility Function

The utility function assigns values to game outcomes:

```
Utility Values:
+1  = MAX win (MIN loss)
 0  = Draw
-1  = MIN win (MAX loss)
```

### Perfect Decisions Framework

**Player Definitions:**

- **MAX player:** Aims to maximize the utility function value
- **MIN player:** Aims to minimize the utility function value (minimize MAX's gain)

**Key Assumptions:**

- Both players have perfect information (fully observable environment)
- Zero-sum game (no win-win scenarios - what's good for one player is equally bad for the other)

### Goal of Two-Player Games

Given a utility function u(s):

**MAX Player:**

- Takes the first move from the initial state
- Always tries to make moves that maximize the final u(s)

**MIN Player:**

- Always tries to make moves that minimize the final u(s)

### Basic Strategy Example

```
Initial State
    ↓
   S₁ (u=3)    S₂ (u=2)
  ↙  ↘       ↙  ↘
S₃(u=3) S₄(u=3) S₅(u=3) S₆(u=2)
```

**Decision Process:**

1. First step: MAX chooses S₁ because u(S₁) = 3 > u(S₂) = 2
2. Second step: MIN chooses either S₃ or S₄ (both have u=3)
3. Final path: S₀ → S₁ → S₃/S₄

### Minimax Search Algorithm

**Core Principle:** Determine the optimal strategy for MAX by calculating utility values bottom-up through the game tree.

**Algorithm Steps:**

1. Generate the complete game tree down to terminal states
2. Apply the utility function to each terminal state to get its value
3. Use terminal state utilities to determine utilities one level higher
4. Continue backing up values from leaf nodes toward the root, one layer at a time
5. At the root, MAX chooses the move leading to the highest value

**Pseudocode Structure:**

```
function MINIMAX-DECISION(state) returns an action
    return arg max_{a ∈ ACTIONS(state)} MIN-VALUE(RESULT(state, a))

function MAX-VALUE(state) returns a utility value
    if TERMINAL-TEST(state) then return UTILITY(state)
    v ← -∞
    for each a in ACTIONS(state) do
        v ← MAX(v, MIN-VALUE(RESULT(state, a)))
    return v

function MIN-VALUE(state) returns a utility value
    if TERMINAL-TEST(state) then return UTILITY(state)
    v ← +∞
    for each a in ACTIONS(state) do
        v ← MIN(v, MAX-VALUE(RESULT(state, a)))
    return v
```

---

## Imperfect Decisions

### Issues with Minimax Algorithm

**Primary Problem:** The game tree grows exponentially with depth

- Number of game states = O(b^d) where b = branching factor, d = depth
- No algorithm can completely eliminate the exponential growth

**Example Complexity:**

- Chess: approximately 10^123 possible games
- Go: even more complex than chess

### Alternative Approaches

#### 1. Evaluation Functions

Replace utility functions with evaluation functions that estimate the value of non-terminal positions.

**Requirements for Evaluation Functions:**

**Consistency with Utility Function:**

```
If f(Sᵢ) < f(Sⱼ), then u(Sᵢ) < u(Sⱼ) for terminal states
```

**Additional Requirements:**

- **Computational simplicity:** Must be fast to compute
- **Accuracy:** Should reflect actual winning chances
- **Predictive power:** If f(Sᵢ) > f(Sⱼ), then the path through Sᵢ should have better winning chances

**Tic-Tac-Toe Evaluation Example:**

```
Game positions with evaluation scores:
- Strong X position: f > +50
- Slight X advantage: f ≈ +10
- Balanced position: f ≈ 0
- Slight O advantage: f ≈ -10
- Strong O position: f < -50
```

#### 2. Cutting-off Approach (Depth-Limited Search)

**Concept:** Limit search depth instead of exploring the complete game tree

**Implementation:**

```
Set maximum depth d
Apply evaluation function at depth d instead of utility function
Use iterative deepening for time management
```

**Iterative Deepening with Minimax:**

```
Depth 1: Quick evaluation
Depth 2: More thorough if time permits
Depth 3: Even deeper if time allows
...
When time runs out: Return best move from deepest completed search
```

**Example Process:**

```
n₀ (root)
├── n₁ → f(n₁) at depth d
└── n₂ → f(n₂) at depth d

f(n₀) = max(f(n₁), f(n₂))
```

---

## Alpha-Beta Pruning

### Motivation

**Goal:** Eliminate branches that won't affect the final decision

- Instead of cutting off whole layers, cut off partial branches
- Maintain the same result as minimax but with better efficiency

### Key Concepts

**Alpha (α):**

- Value of the best choice found so far for MAX
- Represents "at least" this value for MAX
- Initially set to -∞

**Beta (β):**

- Value of the best choice found so far for MIN
- Represents "at most" this value for MIN
- Initially set to +∞

**Pruning Condition:**

- Prune remaining branches when α ≥ β
- This means MAX has found a choice at least as good as α, while MIN can force the outcome to be at most β

### Alpha-Beta Algorithm

**Core Functions:**

```
function ALPHA-BETA-SEARCH(state) returns an action
    v ← MAX-VALUE(state, -∞, +∞)
    return the action in ACTIONS(state) with value v

function MAX-VALUE(state, α, β) returns a utility value
    if TERMINAL-TEST(state) then return UTILITY(state)
    v ← -∞
    for each a in ACTIONS(state) do
        v ← MAX(v, MIN-VALUE(RESULT(state, a), α, β))
        if v ≥ β then return v  // β cutoff
        α ← MAX(α, v)
    return v

function MIN-VALUE(state, α, β) returns a utility value
    if TERMINAL-TEST(state) then return UTILITY(state)
    v ← +∞
    for each a in ACTIONS(state) do
        v ← MIN(v, MAX-VALUE(RESULT(state, a), α, β))
        if v ≤ α then return v  // α cutoff
        β ← MIN(β, v)
    return v
```

### Worked Example

**Initial Setup:**

```
Tree structure:
        A (root)
       ╱ ╲
      B   C
     ╱╲   ╱╲
    D  E F  G
   ╱╲ ╱╲ ╱╲ ╱╲
  3 ? 5 ? 1 ? ? ?
```

**Step-by-Step Execution:**

**Step 1:** Start at A with (α, β) = (-∞, +∞)

- Calculate MAX-VALUE(A), which requires MIN-VALUE(B)

**Step 2:** At node B with (α, β) = (-∞, +∞)

- Calculate MAX-VALUE(D) = 3
- Update at B: β = min(+∞, 3) = 3
- Now at B: (α, β) = (-∞, 3)

**Step 3:** At node E with (α, β) = (-∞, 3)

- Calculate left child: MAX-VALUE(E) starts with 5
- Update α = max(-∞, 5) = 5
- Now at E: (α, β) = (5, 3)
- **Pruning occurs:** Since α > β (5 > 3), prune right branch of E

**Step 4:** Back to B, then to A

- B returns value 3
- At A: α = max(-∞, 3) = 3
- Move to C with (α, β) = (3, +∞)

**Step 5:** At node C with (α, β) = (3, +∞)

- Calculate MAX-VALUE(F) = 1
- Update at C: β = min(+∞, 1) = 1
- Now at C: (α, β) = (3, 1)
- **Pruning occurs:** Since α > β (3 > 1), prune right branch of C

**Final Result:**

- A returns value 3
- Optimal path: A → B → D → right child (value 3)
- **Efficiency gain:** Pruned 2 branches without affecting the result

### Benefits of Alpha-Beta Pruning

**Time Complexity Improvement:**

- Worst case: Same as minimax O(b^d)
- Best case: O(b^(d/2)) - effectively doubles the search depth
- Average case: O(b^(3d/4))

**Space Complexity:** O(bd) - same as minimax

**Practical Impact:**

- Can search twice as deep in the same time
- Maintains optimality (same result as minimax)
- No additional space requirements

---

## Key Takeaways

### When to Use Each Approach

**Pure Minimax:**

- Small, well-defined games
- When computational resources are unlimited
- For theoretical analysis

**Evaluation Functions + Depth Limiting:**

- Large, complex games
- Real-time applications
- When perfect play is not required

**Alpha-Beta Pruning:**

- Always beneficial when using minimax
- Essential for deeper search in complex games
- Standard optimization in game-playing programs

### Practical Considerations

**Game Design Factors:**

- Branching factor (number of possible moves)
- Game depth (number of moves to completion)
- Evaluation function quality
- Time constraints

**Implementation Tips:**

- Use iterative deepening for time management
- Order moves to maximize pruning (best moves first)
- Cache previously computed values when possible
- Consider opening books and endgame databases

**Real-World Applications:**

- Chess engines
- Checkers programs
- Game AI in video games
- Decision making in competitive scenarios
