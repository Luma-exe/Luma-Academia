
> [!faq] About this Lecture
> Class: INFS3003
> Subject: #artificalIntelligence
> Topics: #coding 
> Date: 2025-07-29 at 03:09

## Problem-Solving Agents

### Why Search Matters

**Recall from Lecture 01**: Peter's gift-buying robot problem requires solving two key questions:

1. **How to encode Peter's knowledge into a machine?**
   - Solution: Knowledge Representation & Reasoning (not just programming!)

2. **Which is the best way to buy these three gifts?**
   - Solution: Search Problem!

### Core AI Equation
```
Intelligent Action = Knowledge Representation + Search
```

**Important Note**: This is a general principle in AI that does NOT rely on any particular implementation philosophy (symbolism or connectionism).

### Definitions

#### Intelligent Agent

> [!faq] Definition of Intelligent Agent
A system that can perceive its environment and perform intelligent actions in that environment

- **Remember**: Intelligent action = Knowledge representation + Search

#### Problem-Solving Agent

> [!faq] Definition of Problem-Solving Agent
An intelligent agent that can search a path consisting of a sequence of actions to reach a goal state

### Problem-Solving Process

**Assumption**: Agents always have access to information about the world

**Four-Step Process**:

1. **Goal Formulation**
   - Goals organize behaviour by limiting objectives and actions to be considered

2. **Problem Formulation**
   - Agent devises description of states and actions necessary to reach the goal

3. **Search**
   - Before taking real-world action, agent simulates sequences of actions in its model
   - Searches until finding a sequence of actions (the solution) that reaches the goal

4. **Execution**
   - Agent executes the actions in the solution, one at a time

### Example: Peter's Travel Problem

#### Problem Statement
- Peter lives in Kingswood
- Peter needs to attend a meeting at MQU tomorrow morning at 11:00 AM
- **Question**: How can Peter get there on time?

#### Step-by-Step Solution

**Step 1: Goal Formulation**
- **Current/Initial State**: Peter is in Kingswood at 9:00 AM
- **Goal/Final State**: Peter is in MQU at 11:00 AM

**Step 2: Problem Formulation**
```
S0 → [Action 1] → S1 → [Action 2] → S2

Where:
- A1: Peter takes Train
- S1: Peter is in Epping station
- A2: Peter takes Bus
- S2: Peter arrives at Macquarie University
```

**Step 3: Search**
Search through possible train/bus routes to find the best solution:
```
S0 → [A1] → S1 → [A2] → ... → [Ak] → Sf

Example Solution:
1. S0: 9:08 AM, Peter at Kingswood station
2. A1: Peter catches Express Train to Epping
3. S1: 10:40 AM, Peter arrives at Epping station
4. A2: 10:45 AM, Peter catches Bus 418
5. S2: 11:00 AM, Peter arrives at Macquarie University
```

**Step 4: Execution of the Solution**

### Problem-Solving Agent Summary

```
Problem → Goal Formation → Problem Formation → Search → Solution → Perform Action
                                                    ↑
                                              Problem-Solving Agent (PSA)
```

## Formulating Problems

### Knowledge and Problem Types

#### Single-State Problem
**Agent Characteristics**:
1. Has enough knowledge to identify the initial state
2. Knows all effects of actions it may perform
3. Can generate the sequence of actions to achieve the goal state

```
Vacuum Cleaner Example:
[5] [6] [8] → [Right] → [Suck] → Goal

S0 → [A1] → S1 → [A2] → ... → [Ak] → Sg
```

#### Multi-State Problem
**Agent Characteristics**:
1. Doesn't have enough knowledge to identify the initial state
2. Knows the set of possible initial states
3. Knows all effects of actions it may perform
4. Can generate a set of sequences of actions to achieve goal state(s) from each possible initial state

```
Multiple Possible Initial States:
[1] [2] [8] or [7] [8] → [Right/Left] → [Suck] → Goal States
```

### Defining Problems and Solutions

**A well-defined problem consists of four components**:
1. **States**
2. **Actions**
3. **Goal Test**
4. **Path Cost**

#### States

**Definitions**:
- **State**: Description of the world at a given time
- **Initial State**: The state in which the agent starts
- **Goal State**: The state in which the agent stops

**Timeline Representation**:
```
Time:    t0    t1    tk
States:  S0 → S1 → Sk
```

**State Space**: The set of all states reachable from initial state by any sequence of actions

```
State Space Diagram:
      S0
   /  |  \
 A1/ A2|A3 \
  /   |    \
S1   S2    S3
... ... ...
```

#### Actions

**Definition**: Description of state transition (operator)

**Path Formation**:
```
Time:    t0    t1    t2
States:  S0 → S1 → S2
Actions:   A1   A2
```

**Path Illustration**:
```
State Space with Path:
      S0
   /  |  \
 A1/   |   \
  /    |    \
S1    S2    S3
|     ...   ...
A3
|
S4
|
A7
|
S5

Path Example: S0 → S1 → S4 → S5
Actions:      A1   A3   A7
```

#### Goal Test and Path Cost

**Goal Test**: A test that determines whether a given state is a goal state

**Path Cost**: The value of a path cost function for a given path
- **Note**: This function is predefined by us

**Path Cost Example**:
```
Path Cost Calculation:
      S0 (cost=0)
    /  |  \
   3/  1|  2\
   /   |    \
 S1   S2    S3
(3)  (1)    (5)
 |           |
 2|          2|
 |           |
S4          S5
(3)         (5)

g(S0) = 0
g(S1) = 3
g(S2) = 1
g(S3) = 3 + 2 = 5
g(S4) = 1 + 2 = 3
g(S5) = 1 + 4 = 5
```

#### Solution

**Definition**: A path from the initial state(s) to the goal state(s)
- **Optimal Solution**: Has the lowest path cost

**Reality Check - Search Cost**:
- Before finding a solution, we invest time and memory on search
- **Search Cost**: Time and Space factors
- **Total Cost**: `Path Cost + Search Cost`

## Examples

### The 8-Puzzle Problem

**Problem Components**:
- **States**: Location of each of the eight tiles in one of nine squares (including blank location for efficiency)
- **Actions**: Blank moves left, right, up, or down
- **Goal Test**: State matches the goal state
- **Path Cost**: Each step costs 1, so path cost equals path length

**Visual Representation**:
```
Initial State:    Goal State:
[2][8][3]        [1][2][3]
[1][6][4]   →    [8][ ][4]
[7][ ][5]        [7][6][5]
```

### The Vacuum World Problem

**Problem Components**:
- **State Sets**: Subsets of states showing vacuum position and dirt locations
- **Actions**: Move left, move right, suck
- **Goal Test**: All states in state set have no dirt
- **Path Cost**: Each action costs 1

**Visual Representation**:
```
Vacuum World States:
[A][B]  where A and B can be:
         - Clean or Dirty
         - Contains vacuum or not
```

## Searching for Solutions

### Tree-Based Search

#### Definition and Concepts

**Search Algorithm**: Takes a search problem as input and returns a solution or indication of failure

**Search Tree**: Contains various paths from the initial state over the state-space graph

**Tree-Based Search**: A search algorithm operating on a search tree to find the path reaching the goal state

**Key Components**:
- **Node**: Each node corresponds to a state in the state space
- **Root**: The initial state of the problem
- **Edge**: Corresponds to actions between states

#### How Tree-Based Search Works

**Three-Step Process**:

1. **Initialize**: Take the initial state as the root
2. **Expand**: Consider available actions for that state
3. **Generate**: Create new nodes (child/successor nodes) based on action results
   - If new node is goal state → solution found (path from initial to goal state)

**Critical Question**: Which step is most important?
**Answer**: Step 2 - deciding which node to expand next (managed by search algorithms)

#### Search Data Structures

**Node Structure**:
- `node.State`: Current state
- `node.Parent`: Parent node
- `node.Action`: Action taken to reach this node
- `node.PathCost`: Cost from initial state

**Queue**: Stores nodes in particular search order (determined by search algorithm)

#### Example: Map Traversal

**Problem**: Find shortest way from Arad to Bucharest

**Search Tree Development**:
```
Level 1:    Arad
           / | \
Level 2:  /  |  \
    Zerind Sibiu Timisoara
```

**Key Question**: How do we decide which node to expand next?
- This is the essence of search algorithms

### Uninformed Search (Blind Search)

**Definition**: An uninformed search algorithm is given no clue about how close a state is to the goal(s)

**Example**: In map traversal, an agent with no Romanian geography knowledge has no clue whether going to Zerind or Sibiu is better.

#### Breadth-First Search (BFS)

**Main Idea**:
1. Root node is expanded first
2. All successors of root node are expanded next
3. Then their successors, and so on

**BFS Example**:
```
Step 1: Queue = [n0]
        n0

Step 2: Queue = [n1, n2]
        n0
       / \
      n1  n2

Step 3: Queue = [n2, n3, n4]
        n0
       / \
      n1  n2
     / \
    n3  n4

Step 4: Queue = [n3, n4, n5, n6]
        n0
       / \
      n1  n2
     / \   / \
    n3 n4 n5 n6
```

**BFS Algorithm Structure**:
```
function BREADTH-FIRST-SEARCH(problem) returns solution/failure
    node ← a node with STATE = problem.INITIAL-STATE
    if problem.GOAL-TEST(node.STATE) then return SOLUTION(node)
    frontier ← a FIFO queue with node as the only element
    explored ← an empty set
    loop do
        if EMPTY?(frontier) then return failure
        node ← POP(frontier)
        add node.STATE to explored
        for each action in problem.ACTIONS(node.STATE) do
            child ← CHILD-NODE(problem, node, action)
            if child.STATE is not in explored or frontier then
                if problem.GOAL-TEST(child.STATE) then return SOLUTION(child)
                frontier ← INSERT(child, frontier)
```

#### Depth-First Search (DFS)

**Main Idea**:
1. Root node is expanded first
2. Expand the deepest node of one child of root
3. Back up to next deepest node that still has unexpanded successors

**Important Note**: DFS is not cost-optimal; it returns the first solution found, even if not cheapest.

**DFS Example**:
```
Step 1: Queue = [n0]
        n0

Step 2: Queue = [n1, n2] (Stack-like behavior)
        n0
       / \
      n1  n2

Step 3: Queue = [n3, n4, n2] (Expand deepest first)
        n0
       / \
      n1  n2
     / \
    n3  n4
```

#### Analysis of BFS vs DFS

**BFS Advantages (+) and Disadvantages (-)**:
- ✅ **Complete**: Guarantees finding a solution if one exists
- ✅ **Optimal**: Finds shallowest solution if multiple exist
- ❌ **Memory**: Big memory requirement in general

**DFS Advantages (+) and Disadvantages (-)**:
- ✅ **Speed**: Sometimes faster than BFS
- ✅ **Memory**: Small memory requirement
- ❌ **Completeness**: Not complete (can get stuck in infinite paths)
- ❌ **Optimality**: Not optimal (finds first solution, not best)

#### Memory Usage Comparison

**Example Scenario**: Goal at n3
```
DFS Memory Usage:
n0 → n1 → n3 (Goal found!)
Queue progression: [n0] → [n1,n2] → [n3,n4,n2] → Stop

BFS Memory Usage:
n0 → [n1,n2] → [n3,n4,n5,n6] → Stop at n3
Much larger queue maintained
```

#### DFS Weaknesses Examples

**Not Complete** (Infinite Path Problem):
```
A → B → C → D → E → F → ... (infinite loop)
DFS can get trapped in infinite branch
```

**Not Optimal**:
```
     Start
    /     \
 Goal(5)  Path to Goal(3)
          
DFS might find Goal(5) first and stop,
missing the better Goal(3) solution
```

#### Improved DFS Variants

**Depth-Limited Search**:
- Supply a depth limit
- Treat all nodes at given depth as having no successors
- ✅ Solves infinite path problem
- ✅ Relatively small memory requirement
- ❌ Still incomplete if goal beyond depth limit

**Iterative Deepening Search**:
- Iteratively try all depth values until solution found or failure
- **Process**:
```
limit = 0: Search depth 0
limit = 1: Search depth 1
limit = 2: Search depth 2
limit = 3: Search depth 3
...continue until solution found
```

## Key Takeaways

### Essential Concepts
1. **Problem-Solving Process**: Goal Formation → Problem Formation → Search → Execution
2. **Problem Components**: States, Actions, Goal Test, Path Cost
3. **Search Types**: Single-state vs Multi-state problems
4. **Total Cost**: Path Cost + Search Cost

### Search Algorithm Fundamentals
1. **Tree-Based Search**: Systematic exploration of state space
2. **Node Expansion**: Core decision point in search algorithms
3. **BFS vs DFS Trade-offs**: Completeness/Optimality vs Memory/Speed

### Practical Applications
- Route planning (transportation)
- Puzzle solving (8-puzzle, sliding puzzles)
- Robot navigation
- Game playing
- Resource allocation

