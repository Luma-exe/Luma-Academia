
> [!faq] About this Lecture
> Class: INFS3003
> Subject: #artificalIntelligence
> Topics: #coding 
> Date: 2025-10-27 at 11:58


## Time, Schedules and Resources

### Motivation and Limitations of Classical Planning

**Classical Planning Addresses:**

- What to do (actions)
- In what order (sequence of actions)

**Issues NOT Covered by Classical Planning:**

1. How long an action takes
2. When an action occurs
3. What resource constraints an action has

**Example Scenario:**

- Task: Deliver mails to 3 offices in Building Y
- Classical plan: [Collect mails, Go to Building Y, Send mails to Offices 1, 2, 3]
- **With constraints:**
    - Office 1 closes before Office 3
    - Office 2 only opens after 2pm
    - Two delivery men can work alternatively
- Classical planning **cannot** handle these temporal and resource constraints

### Two-Phase Solution Approach

**"Plan First, Schedule Later"**

1. **Planning Phase:** Actions are selected with some ordering constraints to meet goals
2. **Scheduling Phase:** Temporal information is added to ensure resource and deadline constraints are met

### Representing Temporal and Resource Constraints

#### Basic Components

**Jobs:**

- Each job is represented as a sequence of actions (plan)

**Resources:**

- List of available resources for jobs
- Represented as numerical quantities for each resource type

**Action Schemas:**

- Contain duration and resource constraints
- Resource constraints specify:
    - Types of resources
    - Number of each resource required
    - Resource needs

**Resource Need Types:**

- **CONSUME:** Resource is no longer available once used
- **USE:** Temporarily occupied during action execution
- Actions can also **produce** resources

**Example: Assembling Two Cars**

- Demonstrates actions with temporal durations and resource requirements
- Shows how different assembly tasks require specific resources at specific times

### Critical Path Method (CPM)

#### Purpose

Determine possible start and end times of each action when considering only temporal constraints (without resources)

#### Key Concepts

**Critical Path:**

- The path whose total duration is longest
- Determines the overall duration of the jobs
- Shortening other paths doesn't shorten the plan
- Delaying any action on the critical path slows down the whole plan

**Slack:**

- Quantity: LS - ES (Latest Start - Earliest Start)
- Indicates flexibility in scheduling an action

#### CPM Formulas

Given actions Aᵢ (i ∈ [1, n]) and Bⱼ (j ∈ [1, m]), such that Aᵢ ≺ Bⱼ (Aᵢ precedes Bⱼ):

**Forward Pass (Earliest Start):**

- ES(Start) = 0
- ES(B) = max over all Aᵢ ≺ B of (ES(Aᵢ) + Duration(Aᵢ))

**Backward Pass (Latest Start):**

- LS(Finish) = ES(Finish)
- LS(A) = min over all A ≺ Bⱼ of (LS(Bⱼ) - Duration(A))

#### CPM Algorithm Steps

1. Calculate ES of all actions from Start to Finish
2. Calculate ES(Finish), then LS(Finish)
3. Calculate LS of all actions from Finish to Start

### Worked Example: Car Assembly

**Action Network:**

- AddEngine1 → AddWheels1 → Inspect1 → Finish
- AddEngine2 → AddWheels2 → Inspect2 → Finish

**Action Durations:**

- AddEngine1: 30 minutes
- AddEngine2: 60 minutes
- AddWheels1: 30 minutes
- AddWheels2: 15 minutes
- Inspect1: 10 minutes
- Inspect2: 10 minutes

**Forward Pass (ES Calculation):**

ES(Start) = ES(AddEngine1) = ES(AddEngine2) = 0

ES(AddWheels1) = ES(AddEngine1) + Duration(AddEngine1) = 0 + 30 = 30

ES(AddWheels2) = ES(AddEngine2) + Duration(AddEngine2) = 0 + 60 = 60

ES(Inspect1) = ES(AddWheels1) + Duration(AddWheels1) = 30 + 30 = 60

ES(Inspect2) = ES(AddWheels2) + Duration(AddWheels2) = 60 + 15 = 75

ES(Finish) = max{ES(Inspect1) + Duration(Inspect1), ES(Inspect2) + Duration(Inspect2)} = max{60 + 10, 75 + 10} = max{70, 85} = 85

**Backward Pass (LS Calculation):**

LS(Finish) = ES(Finish) = 85

LS(Inspect1) = LS(Finish) - Duration(Inspect1) = 85 - 10 = 75 LS(Inspect2) = LS(Finish) - Duration(Inspect2) = 85 - 10 = 75

LS(AddWheels1) = LS(Inspect1) - Duration(AddWheels1) = 75 - 30 = 45 LS(AddWheels2) = LS(Inspect2) - Duration(AddWheels2) = 75 - 15 = 60

LS(AddEngine1) = LS(AddWheels1) - Duration(AddEngine1) = 45 - 30 = 15 LS(AddEngine2) = LS(AddWheels2) - Duration(AddEngine2) = 60 - 60 = 0

LS(Start) = min{LS(AddEngine1) - Duration(Start), LS(AddEngine2) - Duration(Start)} = min{15 - 0, 0 - 0} = 0

**Critical Path Identification:**

- Actions with slack (LS - ES) = 0 are on the critical path
- Critical path: Start → AddEngine2 → AddWheels2 → Inspect2 → Finish
- Total duration: 85 minutes

### Complexity Analysis

**Without Resource Constraints:**

- Time complexity: O(Nb)
    - N = number of actions
    - b = maximum branching factor
- Finding minimum-duration schedule is easy using CPM

**With Resource Constraints:**

- Problem becomes **NP-hard**
- NP-hard: Cannot be solved in polynomial time
- Potential solutions cannot be verified in polynomial time
- Only approximate solutions available (not exact, but very close)

### Minimum Slack Heuristic

**Greedy Approximation Algorithm for Scheduling with Resources**

#### Algorithm Steps

1. On each iteration, schedule for the earliest possible start whichever unscheduled action:
    - Has all its predecessors scheduled
    - Has the least slack (LS - ES)
2. Update ES and LS times for each affected action
3. Repeat until all actions scheduled

#### Worked Example with Resources

**Scenario:**

- Resources: EngineHoists(1), WheelStations(1)
- Cannot be used simultaneously

**Initial Slack Values:**

AddEngine1: slack = LS - ES = 15 - 0 = 15 AddEngine2: slack = LS - ES = 0 - 0 = 0

**Iteration 1:**

- AddEngine2 selected because:
    - Earliest possible start (ES = 0)
    - All predecessors scheduled
    - Least slack (0 < 15)
- Schedule AddEngine2 at time 0-60

**After scheduling AddEngine2:**

- EngineHoist is occupied from time 0 to 60
- AddEngine1 must wait until time 60
- This affects all subsequent actions in that branch

**Result:**

- This greedy approach yields overall duration of 130 minutes
- **Not optimal!** Optimal solution is 115 minutes (by scheduling AddEngine1 first)
- Demonstrates that minimum slack is an approximation, not guaranteed optimal

---

## Hierarchical Planning

### Motivation

**Why Not Produce Detailed Plans Immediately?**

- To control computational cost
- Each iteration focuses on a small problem
- Enables hierarchical decomposition

**Example:**

Task: Purchase milk and banana

High-level plan: [Go(Supermarket), Buy(milk), Buy(Banana), Go(Home)]

Decomposed low-level plan for Go(Supermarket): [Move-forward(5km), Turn-right(90°), Move-forward(2km), ...]

### Types of Actions

#### Primitive Actions

- Standard precondition-effect schemas
- Directly executable actions
- Lowest level of abstraction

#### High-Level Actions (HLAs)

- Have one or more possible refinements
- Each refinement is a sequence of actions
- Refinement actions may be HLAs or primitive actions
- Allow planning at multiple levels of abstraction

**Implementation:**

- An HLA refinement containing only primitive actions
- The concrete execution sequence
- What actually gets executed by the agent

### Hierarchical Planning Concepts

**High-Level Plan Success:**

- A high-level plan achieves the goal if at least one of its implementations achieves the goal
- Not all implementations need to work (agent chooses which to execute)
- Provides flexibility in execution

**Simplest Case:**

- HLA contains exactly one implementation
- Direct mapping from high-level to low-level

**Multiple Implementations:**

Two approaches:

1. **Search among implementations:** Hierarchical search algorithm refines HLAs to find primitive actions that work
2. **Reason directly about HLAs:** Despite multiplicity of implementations, reason at abstract level

**Advantages:**

- Reduces search space by working at appropriate abstraction levels
- More efficient than planning with only primitive actions
- Mirrors human problem-solving approach

---

## Planning in Nondeterministic Domains

### Motivation: Beyond Classical Planning

**Classical Planning Assumptions:**

- Fully observable environment
- Deterministic actions
- Known environment model

**Real-world scenarios often violate these assumptions**

**Scenario: Furniture Painting Problem**

**Given:**

- A chair and a table
- Two cans of paint (colors unknown)
- Only table is in agent's field of view

**Goal:**

- Have chair and table match (same color)

**Initial State:**

Init(Object(Table) ∧ Object(Chair) ∧ Can(C₁) ∧ Can(C₂) ∧ InView(Table))

**Goal:**

Goal(colour(Chair, c) ∧ colour(Table, c))

**Actions:**

Action(RemoveLid(can), PRECOND: Can(can) EFFECT: Open(can))

Action(Paint(x, can), PRECOND: Object(x) ∧ Can(can) ∧ colour(can, c) ∧ Open(can) EFFECT: colour(x, c))

**Problem:** How does agent know paint colors? → **Perception needed**

### Perception Schema

**Percept Schemas:**

Percept(colour(x, c), PRECOND: Object(x) ∧ InView(x))

Percept(colour(can, c), PRECOND: Can(can) ∧ InView(can) ∧ Open(can))

**New Action for Changing View:**

Action(LookAt(x), PRECOND: InView(y) ∧ (x ≠ y) EFFECT: InView(x) ∧ ¬InView(y))

**Note:** In fully observable environments, percept preconditions would be null

### Types of Non-Classical Planning

Classical planning cannot handle:

- Partially observable environments
- Nondeterministic environments
- Unknown environments

**Three Planning Approaches:**

1. **Sensorless/Conformant Planning:** Environments with no observations
2. **Contingency Planning:** Partially observable and nondeterministic environments
3. **Online Planning and Replanning:** Unknown environments

### Sensorless Planning

#### Characteristics

**Environment:** No observations available

**Belief State:**

- Agent reasons about belief states rather than actual states
- Open-world assumption applies
- State contains both positive and negative fluents
- InView fluents can be ignored (no sensor available)

#### Belief State Update

The agent updates its belief state through actions:

b' = RESULT(b, a) = (b - DEL(a)) ∪ ADD(a)

Where:

- b = current belief state
- a = action
- b' = resulting belief state
- DEL(a) = deleted fluents (effects that remove facts)
- ADD(a) = added fluents (effects that add facts)

#### Worked Example: Painting Without Sensors

**Initial Belief State:**

b₀ = Colour(x, C(x))

This is obtained by Skolemising ∀x∃y Colour(x, y), meaning every object has some color, but we don't know what.

**Known in all belief states:**

Object(Table) ∧ Object(Chair) ∧ Can(C₁) ∧ Can(C₂)

**Step 1: Apply RemoveLid(Can₁)**

After this action, we know Can₁ is open:

b₁ = Colour(x, C(x)) ∧ Open(Can₁)

**Step 2: Apply Paint(Chair, Can₁)**

After painting the chair with Can₁:

b₂ = Colour(x, C(x)) ∧ Open(Can₁) ∧ Colour(Chair, C(Can₁))

Now the chair has the color of Can₁.

**Step 3: Apply Paint(Table, Can₁)**

After painting the table with Can₁:

b₃ = Colour(x, C(x)) ∧ Open(Can₁) ∧ Colour(Chair, C(Can₁)) ∧ Colour(Table, C(Can₁))

**Goal Satisfaction:**

b₃ satisfies the goal Colour(Table, c) ∧ Colour(Chair, c) when c = C(Can₁)

Both chair and table now have the same color (whatever color Can₁ contains).

**Solution:**

[RemoveLid(Can₁), Paint(Chair, Can₁), Paint(Table, Can₁)]

**Key Insight:** Without any sensors, the agent can still achieve the goal by using the same paint can for both objects, ensuring they match.

### Contingency Planning

**Environment:** Partial observability available

**Approach:** Generate plans based on conditions revealed through perception

**Key Feature:** Plans include conditional branches (if-then-else structures)

#### Example: Painting with Partial Observability

[LookAt(Table), LookAt(Chair), if colour(Table, c) ∧ colour(Chair, c) then NoOp else [ RemoveLid(C₁), LookAt(C₁), RemoveLid(C₂), LookAt(C₂), if colour(Table, c) ∧ colour(can, c) then Paint(Chair, can) else if colour(Chair, c) ∧ colour(can, c) then Paint(Table, can) else [Paint(Chair, C₁), Paint(Table, C₁)] ] ]

**Plan Structure:**

1. First, look at both objects to see their colors
2. If they already match, do nothing
3. Otherwise, open both cans and look at their colors
4. If table's color matches a can, paint the chair with that can
5. Else if chair's color matches a can, paint the table with that can
6. Else paint both with the same can

**Note:** All variables in this plan are existentially quantified (there exists some color c that makes the condition true)

### Online Planning and Replanning

#### Motivation

**During Execution:**

- Agent must monitor what's happening in the environment
- Things may go wrong (unknown environments)
- Expected state E may differ from observed state O
- Agent must replan for minimal repair plus continuation to goal

**Example Scenario:**

- Agent executes steps of plan expecting to be in state E
- Agent observes it's actually in state O (different from expected)
- Agent must generate a repair plan from O to goal

#### When Replanning is Needed

**Agent's model may be incorrect due to:**

1. **Missing preconditions of actions:** Action requires something not in the model
2. **Missing effects:** Action has effects not represented in the model
3. **Missing fluents:** Important state variables not included in the model
4. **Exogenous events:** Unexpected external changes to the environment

#### Online Agent Activities

**Three Types of Monitoring:**

1. **Action Monitoring:**
    - Verifying preconditions before action execution
    - Ensures action is actually executable in current state
    - Prevents executing impossible actions
2. **Plan Monitoring:**
    - Verifying remaining plan will still succeed
    - Checks if earlier actions achieved expected effects
    - Detects when plan is no longer valid
3. **Goal Monitoring:**
    - Checking if better set of goals exists
    - Adapts to changing priorities
    - May discover goal already achieved or no longer necessary

#### Example: Painting with Replanning

[LookAt(Table), LookAt(Chair), if colour(Table, c) ∧ colour(Chair, c) then NoOp else [ RemoveLid(C₁), LookAt(C₁), if colour(Table, c) ∧ colour(C₁, c) then Paint(Chair, C₁) else REPLAN ] ]

**Plan Structure:**

1. Look at table and chair
2. If they match, done
3. Otherwise, try Can₁
4. If Can₁ matches table color, use it for chair
5. If not, explicitly REPLAN rather than continuing with potentially wrong action

**Advantage:** Agent doesn't commit to full contingency plan upfront; replans when needed

---

## Multiagent Planning

### Motivation

**Single Agent Planning:**

- Sensing, planning, and acting in one system
- Agent operates independently
- All actions under agent's control

**Multiagent Scenarios:**

- Multiple agents in shared environment
- Each agent has own goals
- Agents may help or interfere with each other
- Need for coordination and cooperation

**Central Question:** How can we develop systems where multiple agents cooperate and coordinate to achieve goals?

### Key Issues

**Concurrent Execution:**

- Different agents may execute actions simultaneously
- Multiple things happening at once
- Need to manage interactions

**Perfect Synchronization Assumption:**

- Each action takes same amount of time
- When two actions are executed concurrently, they start and end at same time points
- Simplifies temporal reasoning

### Example: Double Tennis Problem

#### Scenario Definition

**Environment:**

- Two agents: A and B
- Ball approaching court
- Goal: Return the ball

**PDDL-style Specification:**

Objects: Agents A and B, Ball Initial state: Approaching(Ball, loc) for some location Goal: Returned(Ball)

#### Initial Joint Plan (Problematic)

**PLAN 1:**

A: [Go(A, RightBaseline), Hit(A, Ball)] B: [NoOp(B), NoOp(B)]

This plan works: A hits the ball while B does nothing.

**PLAN 1' (Invalid without constraints):**

A: [Go(A, RightBaseline), Hit(A, Ball)] B: [Go(B, RightBaseline), Hit(B, Ball)]

**Problem:** Without constraints, this plan could be generated where both agents try to hit the ball simultaneously. This is not feasible in reality (both can't hit same ball at same time).

The PDDL specification has no constraint to prevent this invalid concurrent execution.

### Concurrency Constraints

#### Action Definition with Constraint

Action(Hit(a, Ball), CONCURRENT: b ≠ a ⇒ ¬Hit(b, Ball) PRECOND: Approaching(Ball, loc) ∧ At(a, loc) EFFECT: Returned(Ball))

**Meaning of CONCURRENT constraint:**

- Agent a can only perform Hit with stated effect
- If and only if no other agent b performs Hit at same time
- b ≠ a ensures we're talking about a different agent
- ¬Hit(b, Ball) means agent b cannot be hitting the ball

**Effect:**

- Prevents two agents from hitting ball simultaneously
- Enforces turn-taking in ball hitting

#### Valid Plan with Constraint

**PLAN 2:**

A: [Go(A, LeftNet), NoOp(A)] B: [Go(B, RightBaseline), Hit(B, Ball)]

With the concurrency constraint:

- PLAN 1 still valid (only A hits)
- PLAN 2 also valid (only B hits)
- PLAN 1' now invalid (violates concurrency constraint)

### Cooperative Action Example

**Two Agents Carrying Cooler:**

Action(Carry(a, cooler, here, there), CONCURRENT: b ≠ a ∧ Carry(b, cooler, here, there) PRECOND: At(a, here) ∧ At(cooler, here) ∧ Cooler(cooler) EFFECT: At(a, there) ∧ At(cooler, there) ∧ ¬At(a, here) ∧ ¬At(cooler, here))

**Meaning of CONCURRENT constraint:**

- Agent a performs Carry action
- There must exist another agent b (where b ≠ a)
- Agent b must also be performing Carry on same cooler
- Both agents move cooler from 'here' to 'there'

**Requirement:**

- Two different agents must carry cooler together
- Both must execute Carry action concurrently
- Action fails if only one agent attempts it
- Models tasks requiring cooperation

**Valid Joint Plan:**

A: [Go(A, cooler_location), Carry(A, cooler, here, there)] B: [Go(B, cooler_location), Carry(B, cooler, here, there)]

Both agents must coordinate to carry the cooler at the same time.

---

## Key Takeaways

### Time and Resources

- Classical planning extended with temporal and resource constraints
- Two-phase approach: plan first, schedule later
- CPM for finding critical paths in temporal scheduling
- Critical path determines minimum overall duration
- Slack (LS - ES) indicates scheduling flexibility
- NP-hard complexity with resources requires approximation algorithms
- Minimum slack heuristic provides good (but not optimal) solutions
- Time complexity without resources: O(Nb)

### Hierarchical Planning

- Decompose high-level actions (HLAs) into primitive actions
- Controls computational cost by focusing on manageable subproblems
- Multiple implementation options for flexibility
- Agent chooses which implementation to execute
- Not all implementations need to achieve goal, just at least one
- Enables planning at appropriate levels of abstraction

### Nondeterministic Planning

- **Sensorless planning:** No observations, reason about belief states
    - Use Skolemization to represent unknown properties
    - Update belief states with action effects
    - Can achieve goals without knowing specific values
- **Contingency planning:** Conditional plans based on perceptions
    - Include if-then-else branches
    - Plans adapt based on observed information
    - All variables existentially quantified
- **Online planning:** Monitor and replan when needed
    - Three monitoring types: action, plan, and goal
    - Replan when model is incorrect or unexpected events occur
    - Minimal repair approach for efficiency

### Multiagent Planning

- Requires coordination and cooperation mechanisms
- Concurrency constraints prevent conflicting simultaneous actions
- Perfect synchronization assumption simplifies timing
- Some actions require mandatory cooperation between agents
- CONCURRENT field in action schemas specifies interaction requirements
- Can enforce mutual exclusion or required cooperation
- Joint plans coordinate multiple agents' actions

---

## Study Tips and Important Concepts

### For Temporal Scheduling Problems

- Always calculate ES values forward from Start to Finish
- Always calculate LS values backward from Finish to Start
- Critical path has zero slack for all actions on it
- Remember: delaying critical path actions delays entire project
- Practice identifying critical paths visually in network diagrams

### For Belief State Planning

- Skolemization is key technique for representing unknown values
- Belief state update formula: b' = (b - DEL(a)) ∪ ADD(a)
- Focus on what agent knows vs. what agent doesn't know
- Sensorless solutions often use same resource for all instances

### For Multiagent Systems

- CONCURRENT constraints can be positive (required cooperation) or negative (mutual exclusion)
- Always check if actions can be executed simultaneously
- Perfect synchronization is simplifying assumption

### Common Pitfalls

- Forgetting to update ES/LS after scheduling with resources
- Assuming minimum slack always gives optimal solution (it doesn't!)
- Not considering all belief states in sensorless planning
- Ignoring concurrency constraints in multiagent scenarios