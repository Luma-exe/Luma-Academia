
> [!faq] About this Lecture
> Class: INFS3003
> Subject: #artificalIntelligence
> Topics: #coding 
> Date: 2025-10-27 at 12:51

## Three Types of Machine Learning (Recap)

### Supervised Learning

- Agents observe input-output pairs and learn a function that maps from input to output
- Requires labeled data

### Unsupervised Learning

- Agents learn patterns in the input without any explicit feedback
- No labels required

### Reinforcement Learning

- Agents learn from a series of reinforcements: rewards and punishments
- Learning through interaction

---

# Unsupervised Learning

## Core Concept

**Goal:** Discover hidden patterns or data groupings within datasets without supervision via human-labeled data

**Key Characteristics:**

- Particularly useful for data pre-processing
- Works with datasets where each sample contains only a feature vector (no labels)

### General Learning Process

1. **Calculate similarity/closeness** between an instance and the target (based on the learning task)
2. **Update the model** in the direction that improves similarity
3. **Terminate iteration** when the model cannot further improve similarity

---

## Types of Unsupervised Learning

### 1. Clustering

**Definition:** Breaking raw data down into clusters based on similarities between instances

**Key Features:**

- Similarity is distance-based
- Most well-known unsupervised learning technique

### 2. Association Rule Mining

**Definition:** A rule-based approach to reveal interesting relationships between data samples in large datasets

**Key Features:**

- Rules are frequent if-then associations
- Discovers correlations and co-occurrences within data

### 3. Dimensionality Reduction

**Definition:** Reducing the number of features or dimensions in a dataset

**Key Features:**

- Dimensionality-reduced dataset provides same utility for downstream tasks
- Generative models (e.g., GAN) are a special application of dimensionality reduction

---

# Clustering

## What is Clustering?

**Objective:** Organize data into clusters with:

- **High intra-cluster similarity** (within cluster)
- **Low inter-cluster similarity** (between clusters)

**Informal Definition:** Finding natural groupings among objects/instances/data samples without external knowledge (labels)

### Formal Definition of k-Clustering

Given:

- Dataset **X** = {x₁, ..., xₙ} containing n instances
- Similarity measurement **dist** to calculate distance between any pair (xᵢ, xⱼ)

A **k-clustering** of X is a partition **C** = {C₁, ..., Cₖ} such that:

````
(i)   Cᵢ ≠ ∅                           (no empty clusters)
(ii)  Cᵢ ∩ Cⱼ = ∅, for i ≠ j          (no overlap)
(iii) ⋃ᵢ₌₁ᵏ Cᵢ = X                     (all data covered)
(iv)  C ensures minimum overall distance: 
      Σᵢ₌₁ᵏ Σₓ∈Cⱼ dist(x, cᵢ)
      where cᵢ is the centre of Cᵢ
````

---

## Real-World Applications of Clustering

### Application 1: Image Segmentation
- Similar pixels are clustered together
- Used for object detection and image analysis

### Application 2: Urban Road Traffic Analysis
- Similar traffic patterns are clustered together
- Helps optimize traffic flow and urban planning

---

## Lloyd's Algorithm for k-Means Clustering

### Algorithm Steps

**Step 1: Initialization**
- Randomly pick k instances/objects/data samples as the cluster centroids

**Step 2: Assigning (Iterative)**
- Assign the rest of the instances to their closest cluster centroids to form k clusters

**Step 3: Updating Cluster (Iterative)**
- Calculate the mean of each cluster to be the new centroids

**Step 4: Termination**
- Iteratively repeat Step 2 and Step 3 until the centroids stop changing

### Detailed Example: 2-Means Clustering

**Step 1:** Pick 2 random instances as cluster centroids

**Step 2 (Iterative 1):** Calculate distances between each instance and the 2 centroids, then assign all instances to their closest cluster centroid

**Step 3 (Iterative 2):** Calculate the mean (average) of each cluster to be the updated cluster centroid

**Step 4 (Iterative 3):** Recalculate distances and reassign instances

**Step 5 (Iterative 4):** Recalculate means and update centroids

**Step 6 (Iterative 5):** Recalculate distances and reassign instances

**Step 7 (Iterative 6):** Calculate final means

**Step 8: Terminate** - Algorithm stops since centroids are no longer moving

---

# Association Rule Mining

## What is Association Rule Mining?

**Definition:** The task of discovering statistically meaningful "if-then" co-occurrence patterns (rules X ⇒ Y) in transactional data

**Key Characteristics:**
- No supervision information needed to discover association rules
- Measured by support and confidence

### Key Metrics

#### Support
**Purpose:** To support the rule X ⇒ Y

**Formula:**
```
Support = (Number of transactions containing both X and Y) / (Total number of transactions)
```
Must be greater than a predefined threshold

#### Confidence
**Purpose:** To be confident about the rule X ⇒ Y

**Formula:**
```
Confidence = (Number of transactions containing both X and Y) / (Number of transactions containing only X)
```
Must be greater than a predefined threshold

---

## Formal Definition

Given:
- **I** = {i₁, ..., iₘ} - a finite set of items
- **T** = {t₁, ..., tₙ} - a set of transactions, where tᵢ ⊂ I
- Two thresholds: **s** (support) and **c** (confidence)

An **association rule** based on I and T is an ordered pair **X ⇒ Y**, where:
```
(i)   X, Y ⊂ I
(ii)  X ∩ Y = ∅
(iii) count(X ⊂ tᵢ ∧ Y ⊂ tᵢ) / n > s
(iv)  count(X ⊂ tᵢ ∧ Y ⊂ tᵢ) / count(X ⊂ tᵢ) > c
```

---

## Real-World Application: Market Basket Analysis

**Scenario:** If customers buy X, then they will buy Y

**Business Application:** Place X and Y on the same shelf to maximize profit

**Example Use Cases:**
- Retail store layout optimization
- Product recommendation systems
- Inventory management

---

## Apriori Algorithm for Association Rule Mining

### Core Principle: Downward Closure Property

**Key Concept:** Any subsets of a frequent itemset are also frequent itemsets

**Corollary:** If an itemset is not frequent, then its parent set is not frequent

**Definition of Frequent:** The support of a frequent itemset is greater than the pre-defined support

### Algorithm Steps

**Step 1: Initialization**
- Identify frequent single-item set (frequent single items)

**Step 2: Iterative Creation**
- Iteratively create frequent multi-item sets by applying the downward closure property

**Step 3: Rule Generation**
- Generate association rules against the pre-defined support and confidence

---

## Detailed Apriori Algorithm Example

### Input Data

**Dataset D:** 9 transactions
- T₁: {I₁, I₂, I₅}
- T₂: {I₂, I₄}
- T₃: {I₂, I₃}
- T₄: {I₁, I₂, I₄}
- T₅: {I₁, I₃}
- T₆: {I₂, I₃}
- T₇: {I₁, I₃}
- T₈: {I₁, I₂, I₃, I₅}
- T₉: {I₁, I₂, I₃}

**Pre-defined Thresholds:**
- Support: 0.22
- Confidence: 0.7

### Step-by-Step Execution

#### Step 1: Frequent 1-Item Set

**L₁** = {{I₁}, {I₂}, {I₃}, {I₄}, {I₅}}

**Support Values:**
```
{I₁}: 6/9 = 0.67 > 0.22 ✓
{I₂}: 7/9 = 0.78 > 0.22 ✓
{I₃}: 6/9 = 0.67 > 0.22 ✓
{I₄}: 2/9 = 0.22 > 0.22 ✓
{I₅}: 2/9 = 0.22 > 0.22 ✓
```

#### Step 2: Frequent 2-Item Set

**L₂** = {{I₁, I₂}, {I₁, I₃}, {I₁, I₅}, {I₂, I₃}, {I₂, I₄}, {I₂, I₅}}

**Support Values:**
```
{I₁, I₂}: 4/9 = 0.44 > 0.22 ✓
{I₁, I₃}: 4/9 = 0.44 > 0.22 ✓
{I₁, I₄}: 1/9 = 0.11 < 0.22 ✗ (pruned)
{I₁, I₅}: 2/9 = 0.22 > 0.22 ✓
{I₂, I₃}: 4/9 = 0.44 > 0.22 ✓
{I₂, I₄}: 2/9 = 0.22 > 0.22 ✓
{I₂, I₅}: 2/9 = 0.22 > 0.22 ✓
{I₃, I₄}: 0/9 = 0.00 < 0.22 ✗ (pruned)
{I₃, I₅}: 1/9 = 0.11 < 0.22 ✗ (pruned)
{I₄, I₅}: 0/9 = 0.00 < 0.22 ✗ (pruned)
```

#### Step 3: Frequent 3-Item Set

**L₃** = {{I₁, I₂, I₃}, {I₁, I₂, I₅}}

**Support Values:**
```
{I₁, I₂, I₃}: 2/9 = 0.22 > 0.22 ✓
{I₁, I₂, I₅}: 2/9 = 0.22 > 0.22 ✓
```

**Important Note:** Joined sets like {I₁, I₃, I₅} are not considered because their subset {I₃, I₅} is not frequent (not in L₂)

#### Step 4: Frequent 4-Item Set

**L₄** = ∅ (empty set) → Algorithm stops

#### Step 5: All Frequent Itemsets
```
L₁ = {{I₁}, {I₂}, {I₃}, {I₄}, {I₅}}
L₂ = {{I₁, I₂}, {I₁, I₃}, {I₁, I₅}, {I₂, I₃}, {I₂, I₄}, {I₂, I₅}}
L₃ = {{I₁, I₂, I₃}, {I₁, I₂, I₅}}
```

#### Step 6: Generate Association Rules

**Final Association Rules** (after pruning by support and confidence):
- {I₁, I₅} ⇒ {I₂}
- {I₂, I₅} ⇒ {I₁}
- {I₄} ⇒ {I₂}
- {I₅} ⇒ {I₁}
- {I₅} ⇒ {I₂}
- {I₅} ⇒ {I₁, I₂}

**Example from L₃:**
- Candidate rules: {I₁, I₂} ⇒ {I₃}, {I₁, I₃} ⇒ {I₂}, {I₂, I₃} ⇒ {I₁}, {I₁, I₂} ⇒ {I₅}, {I₁, I₅} ⇒ {I₂}, {I₂, I₅} ⇒ {I₁}
- Only {I₁, I₅} ⇒ {I₂} and {I₂, I₅} ⇒ {I₁} meet the pre-defined support and confidence
- From these, {I₅} ⇒ {I₁, I₂} also meets the criteria

---

# Reinforcement Learning

## Motivation

### Problem with Supervised Learning for Chess

**Scenario:** Learning to play chess using supervised learning

**Training Set:**
- Features: Examples of chess positions
- Labels: Correct moves

**Problems:**
1. Agent needs to see a **huge training set** containing all possible chess positions and corresponding "correct moves"
2. Agent will **fail on new positions** not in the training set
3. Agent has **no understanding** of:
   - What moves are supposed to achieve (checkmate)
   - What effect moves have on piece positions

### Why Reinforcement Learning?

**Supervised Learning Limitation:**
- Agent learns by passively observing example input/output pairs
- Knowledge limited by given input/output pairs

**Reinforcement Learning Advantage:**
- Agent actively learns from its own experience
- Considers ultimate success or failure
- Learns through interaction

---

## Core Concepts of Reinforcement Learning

### Basic Framework

**Key Idea:** An agent interacts with the environment and periodically receives reinforcements (rewards or punishments) that reflect performance

**Goal:** Learn how to take actions to maximize the expected sum of rewards

### Example: Game of Go

**State:** Position of all pieces

**Action:** Where to put the next piece down

**Reward:**
- 1 if win at the end of the game
- 0 otherwise

---

## Markov Decision Process (MDP)

### Definition

**Purpose:** Most commonly used technique to formalize reinforcement learning problems

**Markov Property:** Current state completely characterizes the state of the world

### MDP Components (S, A, R, P, γ)

**S:** Set of possible states

**A:** Set of possible actions

**R:** Distribution of reward, given state-action pair

**P:** Transition probability (distribution over next state, given state-action pair)

**γ:** Discount factor in the range (0, 1)

---

## MDP as an Optimization Problem

### Process Flow

**At time t = 0:**
- Agent receives initial state s₀ from the environment

**For each time step t ≥ 0 until done:**

1. Agent performs action aₜ
2. Environment produces reward rₜ ~ R(·|sₜ, aₜ)
3. Environment produces next state sₜ₊₁ ~ P(·|sₜ, aₜ)
4. Agent receives rₜ and sₜ₊₁

### Policy and Objective

**Policy (π):** A function from S to A that specifies the action to take in each state

**Objective:** Find optimal policy π* that maximizes cumulative discounted reward
```
Maximize: Σₜ≥₀ γᵗ rₜ

where:
- rₜ = R(sₜ, aₜ, sₜ₊₁)
- aₜ = π(sₜ)
- sₜ₊₁ = P(sₜ, aₜ)
```

---

## Expected Cumulative Reward

### Accounting for Randomness

Due to randomness in:
- Initial state
- State transition probability
- Reward probability

We maximize the **expected sum** of cumulative reward:
```
π* = arg max_π E[Σₜ≥₀ γᵗ R(sₜ, π(sₜ), sₜ₊₁)]
```

### Key Remarks

**Policy Updates:**
- Agent iteratively updates policy from existing policy π to optimal policy π*

**Discount Factor (γ) Interpretation:**
- Describes agent's preference for current rewards over future rewards

**γ → 0:**
- Rewards in distant future viewed as insignificant
- Focus on immediate rewards

**γ → 1:**
- Agent willing to wait for long-term rewards
- Values future rewards highly

**γ = 1:**
- Special case of purely additive rewards
- No discounting

---

# Q-Learning

## Core Concept

**Purpose:** Train an agent to assign values to its possible actions based on its current state

**Mechanism:** Q-learning maintains a **Q-table** to record/update the potentially best reward for each state-action pair

---

## Q-Learning Update Equation
```
Q(s, a) = r + γ max_a' Q*(s', a')
```

**Components:**

**r:** Received reward from taking action a in state s

**γ max_a' Q*(s', a'):** "Look-ahead guess"
- If I land in the next state, what's the best score I could get from there?

**Q(s, a):** Small correction
- Nudge today's score toward "reward + best future score"

---

## Q-Value Function

### Path Following a Policy

Following a policy produces path: s₀, a₀, r₀, s₁, a₁, r₁, ...

### Q-Value Definition

Given initial conditions s₀ = s and a₀ = a:
```
Q^π(s, a) = E[Σₜ≥₀ γᵗ R(sₜ, π(sₜ), sₜ₊₁) | s₀ = s, a₀ = a]
```

**Interpretation:** Q(s, a) is a scoreboard showing how good it is to do action a in state s

---

## Optimal Q-Value

### Definition
```
Q*(s, a) = max_π Q^π(s, a)
```

### Bellman Equation

Q* satisfies the following **Bellman equation**:
```
Q*(s, a) = E[r + γ max_a' Q*(s', a') | s, a]
````
**Intuition:**

- If the optimal state-action values for the next time-step Q*(s', a') are known
- Then the optimal strategy is to take the action that maximizes the expected value of: r + γ max_a' Q*(s', a')

---

## Key Differences: Q-Learning vs MDP Objective

**MDP Objective Format:**

- Maximizes expected sum over entire trajectory

**Q-Learning Format:**

- Uses recursive relationship (Bellman equation)
- Updates incrementally based on immediate reward and best future value
- More computationally tractable for learning

**Connection:**

- Q-learning learns to approximate Q* which encodes the solution to the MDP optimization problem
- The optimal policy can be derived from Q* by always choosing the action with highest Q-value

---

## Summary of Key Concepts

### Unsupervised Learning

- No labeled data required
- Three main types: Clustering, Association Rule Mining, Dimensionality Reduction
- Lloyd's Algorithm for k-means clustering
- Apriori Algorithm for association rules

### Reinforcement Learning

- Learning through interaction and feedback
- Formalized using Markov Decision Processes (MDP)
- Goal: Maximize expected cumulative reward
- Q-Learning provides practical algorithm for learning optimal policies
- Discount factor balances immediate vs. long-term rewards

