
> [!faq] About this Lecture
> Class: INFS3003
> Subject: #artificalIntelligence
> Topics: #coding 
> Date: 2025-08-05 at 13:05

### Informed vs Uninformed Search Strategies

**Uninformed Search Strategy**
- Given no clue about how close a state is to the goal(s)
- Examples:
  - Breath-First Search (BFS)
  - Depth-First Search (DFS)

**Informed Search Strategy**
- Uses domain-specific hints about the location of goals
- Examples:
  - Greedy Best-First Search
  - A* Search
  - Memory Bounded Search

**Key Advantages**
- Informed search strategies can find solutions more efficiently than uninformed strategies
- Based on received 'hints' which are estimations of the future based on experience
- **Question:** How do we represent the hints?

## Greedy Best-First Search

### Introduction

**Basic Idea**
- Expands first the node that appears to be closest to the goal
- Assumption: This is likely to lead to a solution quickly

**Example Representation**
- Solid lines and numbers mark the straight-line distance
- Dashed lines mark the real connections

```
straight-line distance example:
G: 4.9
B: 6.7  
C: 10.4
A: 11.0
D: 6.9
E: 3.0
F: 8.9
S: (start)
```

### Heuristic Function

**Formal Definition**
- 'Hints' are defined by a **heuristic function, h(n)**
- `h(n)` = Estimated cost of the cheapest path from node n to the goal node
- Returns a value that describes the desirability of expanding the node

**In the Example**
- `h(n)` is the straight-line distance between a node pair

**Evaluation Function Examples**
```
Fn(A) = 10.4
Fn(D) = 8.9
Fn(B) = 6.7
Fn(E) = 6.9
Fn(F) = 3.0
Fn(G) = 0
```

### Search Process Comparison

**BFS vs DFS vs Best-First Search Queue Evolution**

| Step | BFS Queue | DFS Queue | Best-First Queue |
|------|-----------|-----------|------------------|
| 1 | S | S | S |
| 2 | A D | A D | D A (Fn(D)<Fn(A)) |
| 3 | D B D | D B D | A A |
| 4 | B D A E | D D | F B A A (Fn(F)<Fn(B)<Fn(A)) |
| 5 | D A E | D | G B A A (Fn(G)<Fn(B)<Fn(A)) |
| 6 | A E | A E | |
| 7 | E | E | |
| 8 | B F | B F | |
| 9 | F | F | |
| 10 | G | G | |

### Romanian Map Example

**Problem Setup**
- Navigate from one Romanian city to Bucharest
- Heuristic: Straight-line distance to Bucharest
- Provides realistic geographical context for search algorithms

## A* Search

### Introduction and Preparation

**Key Definitions**

```
Heuristic function: h(n) = estimated cost from node n to the goal
Path cost: g(n) = path cost from start node to node n
Evaluation function: f(n) = g(n) + h(n) = estimated cost of the cheapest solution via node n
```

**Admissible Heuristic Property**
- **Critical Requirement:** h function should never overestimate the actual cost to reach the goal
- Mathematical condition: `h(n) ≤ h*(n)` where `h*(n)` is the actual cost from n to Goal
- **Result:** If h is admissible, then `f(n)` will never overestimate the actual cost of the best solution through n

### A* Search Algorithm

**Definition**
- A* Search = Greedy Best-First Search with 'hints' as `f(n) = g(n) + h(n)`, where h is admissible

**Key Properties**
- **Optimal and Complete:** A* search guarantees finding the optimal solution if one exists
- **Monotonicity of f-cost:** f-cost never decreases along any path

**F-cost Monotonicity Examples**
```
Path progression:
n0 → n1, n2, n3
f(n0) < f(n1)
f(n0) < f(n2) 
f(n0) < f(n3)

Extended path:
n2 → n4, n5, n6
f(n2) < f(n4)
f(n2) < f(n5)
f(n2) < f(n6)

Further extension:
n6 → n7, n8
f(n6) < f(n7)
f(n6) < f(n8)
```

**Important Theorem**
- If `f(n) = k`, there is no reason to conclude `f(n') < k`
- A path from start to goal through n' is also a path from start to goal through n

**Complexity**
- **Space Complexity:** Exponential space growth in the depth of the search tree
- **Contours in State Space:** Nodes are explored in expanding contours of equal f-cost

### Romanian Map A* Example

**Setup**
```
Evaluation function: f(n) = h(n) + g(n)
- Heuristic function h(n): straight-line distance to Bucharest
- Path cost g(n): actual distance traversed from start to node n
```

**Step-by-Step Process**
1. Calculate f-values for all accessible nodes
2. Select node with minimum f-value for expansion
3. Update frontier with newly accessible nodes
4. Repeat until goal is reached

## Memory Bounded Search

### Issues with A* Search

**Memory Consumption Problems**
- Memory is split between frontier and reached states
  - **Frontier:** stores nodes we can expand next
  - **Reached:** stores nodes we have visited
- **Duplication Issue:** Many nodes are stored in both frontier and reached sets

### Solutions to Memory Issues

**Optimization Strategies**
- For many problems (like grid exploration), duplication is not concerning because frontier size << reached size
- Some implementations keep a state in only one location
- Remove states from reached when provably no longer needed

### Iterative Deepening A* (IDA*)

**Core Concept**
- Apply iterative deepening concept to A* search
- Instead of depth cutoff, use f-cost cutoff

**Algorithm Process**
```
At each iteration:
1. Cutoff value = smallest f-cost of any node that exceeded cutoff in previous iteration
2. Each iteration exhaustively searches an f-contour
3. Find node just beyond that contour
4. Use that node's f-cost as next contour
```

**Contour Progression**
```
C1 < C2 < C3 < ... < Ck

For contour C1: all nodes where f(n) < f_limit_1
For contour C2: all nodes where f(n) < f_limit_2
For contour C3: all nodes where f(n) < f_limit_3
...
For contour Ck: all nodes where f(n) < f_limit_k
```

### IDA* Example Walkthrough

**Tree Structure**
```
A f=1
├── B f=2
│   ├── E f=4
│   └── F f=6
├── C f=7
│   ├── G f=7
│   └── H f=4
└── D f=2
    ├── I f=7
    └── J f=6
```

**Iteration 1: f-limit = 1**
```
Call DFS-Contour(A, f-limit=1)
- node = A, f-cost(A) = 1 = f-limit
- A is not goal, expand children:
  - DFS-Contour(B,1): f-cost(B) = 2 > 1, return null, next-f = 2
  - DFS-Contour(C,1): f-cost(C) = 7 > 1, return null, next-f = min(2,7) = 2
  - DFS-Contour(D,1): f-cost(D) = 2 > 1, return null, next-f = min(2,2) = 2
Return null, next-f = 2
```

**Iteration 2: f-limit = 2**
- Continue with expanded search using new f-limit

### A* vs IDA* Comparison

**Space Requirements**
- **A* Search:** Maintains complete frontier and reached sets
- **IDA* Search:** Uses significantly smaller space, only maintains current path

**Trade-offs**
- **A*:** Better time complexity, higher space complexity
- **IDA*:** Better space complexity, may revisit nodes (time overhead)

## Summary: Uninformed vs Informed Search

### Uninformed Search Methods

**Types**
- Breadth-first search (BFS)
- Depth-first search (DFS)
- Depth limited search
- Iterative deepening search (IDS)

**Implementation Pattern**
- All use general tree-search algorithm
- Differ only in node expansion strategy

**Expansion Strategies**
```
DFS Expansion:
A → B,C,D → C,D,E,F (depth-first order)

BFS Expansion:  
A → B,C,D → E,F,C,D (breadth-first order)

IDS Expansion:
d=0: A
d=1: A → B,C,D  
d=2: A → B,C,D → E,F (depth-limited iterations)
```

### Informed Search Methods

**Types**
- Greedy best-first search
- A* search  
- IDA* search

**Evaluation Functions**

**Greedy Best-First Search**
```
EVAL-FN = h(n)
where h(n) = estimated cost of cheapest path from state at node n to goal state
```

**A* Search**
```
EVAL-FN = f(n) = g(n) + h(n)
where:
- g(n) = path cost from start to node n
- h(n) = estimated cost of cheapest solution through node n
```

### Key Takeaways

**When to Use Each Method**
- **Uninformed Search:** When no domain knowledge available
- **Greedy Best-First:** When quick solutions acceptable, optimality not required
- **A* Search:** When optimal solutions required and admissible heuristic available
- **IDA* Search:** When memory is constrained but optimality still required

**Critical Success Factors**
- Quality of heuristic function determines performance
- Admissibility ensures optimality in A*
- Memory constraints may dictate choice between A* and IDA*