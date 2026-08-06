> [!faq] About this Lecture 
> Class: 41052
> Subject: #advancedAlgorithms
> Date: 21/07/2025 
> Topics: #coding #coding/language/cpp #dataStructuresAndAlgorthims 

Course: Advanced Algorithms Topics covered: Longest Path in a DAG, Bellman–Ford, Maximum Subarray Sum, Longest Increasing Subsequence, Coin Change

> [!abstract] Roadmap One technique, five problems — plus a couple of warm-up variations along the way:
> 
> - Longest Path in a DAG
> - Bellman–Ford: DP on Graphs with Cycles
> - Maximum Subarray Sum
> - Longest Increasing Subsequence
> - Coin Change

---

## What Is Dynamic Programming?

Dynamic programming (DP) is a versatile algorithmic technique used to solve a wide variety of problems.

- **Hallmark:** decomposing a problem into a sequence of _subproblems_, which progressively build up to a solution of the original problem.
- The course does not give a single theoretical framework for DP up front — instead it is taught **by example**, building intuition across several problems.

> [!tip] The General Recipe (keep this in mind for every problem below) Define subproblems whose answers:
> 
> 1. **Combine** to solve the whole problem.
> 2. Can be **computed from earlier subproblems**.
> 
> "Best _ending here_" (rather than "best in a prefix") is very often the right refinement of a subproblem — this pattern recurs across almost every problem in this lecture.

---

## Topic 1: Longest Path in a DAG

> [!info] Why this problem? The longest path in a DAG (Directed Acyclic Graph) is a **canonical** dynamic programming problem — many other, seemingly unrelated, problems can be cast in this same framework.

**Plan:** solve the _shortest_ path problem in a DAG first — the longest path then comes for free.

### Setup

- We consider single-source shortest paths in a DAG with a source vertex (e.g. vertex $0$).
- Negative edge weights are allowed: there is no issue with negative-weight cycles, because **there are no cycles at all** in a DAG.
- Key trick: multiplying all edge weights by $-1$ turns the longest-path problem into the shortest-path problem (and vice versa).

### Step 1 — Topological Sort

> [!note] Definition — Topological Sort A topological sort is an ordering of the vertices such that $u < v$ for every edge $(u,v)$.

- A topological order can be computed via **depth-first search** or **Kahn's algorithm**.
- Running time: $O(|V|+|E|)$ in the adjacency list model.
- Laying vertices out in topological order "untangles" the DAG — every edge now points strictly to the right.

### Relaxing an Edge

To _relax_ the edge $e = (u,v)$, check whether going through $u$ improves the best known distance to $v$:

$$ \text{dist_to}[u] + e.\text{weight} < \text{dist_to}[v] $$

If so, update:

$$ \text{dist_to}[v] = \text{dist_to}[u] + e.\text{weight} $$

- $\text{dist_to}[v]$ **never increases** under edge relaxation.

### Step 2 — Relax in Topological Order

Relax the outgoing edges of each vertex, following the topological order:

```cpp
for (auto v : topo_order) {
    for (const auto& edge : adj_list[v]) {
        relax(edge);
    }
}
```

- Running time: $O(|V|+|E|)$, since each edge is relaxed exactly once.

> [!success] Result There is an algorithm to find the shortest path in a DAG in time $O(|V|+|E|)$ in the adjacency list model.

### Why It Works

- If there is a shortest path from $0$ to some vertex $v$ passing through intermediate vertices $u_1, u_2, \ldots, u_k$, then in topological order:

$$ 0 < u_1 < u_2 < \cdots < u_k < v $$

- Relaxing vertices in topological order means the edges of this path are relaxed **in order**: $e_1$ before $e_2$ before $e_3, \ldots$, all the way to $e_{k+1}$.

> [!note] Relax-a-Path Property If the algorithm relaxes a shortest path from $0$ to $v$ in order, then $\text{dist_to}[v] = d(0,v)$.

- Each relaxation only ever **lowers** $\text{dist_to}$, and after the whole path has been relaxed the value has reached the true shortest distance.

### Longest Path (Corollary)

> [!success] Corollary There is an algorithm to find the longest path in a DAG in time $O(|V|+|E|)$.

**Reason:** multiplying all weights by $-1$ turns the longest path into the shortest path.

---

## Topic 2: Bellman–Ford — DP on Graphs with Cycles

### The New Problem

Single-source **shortest paths in a general directed graph**:

- Cycles are allowed.
- Edge weights may be **negative**.

> [!warning] Why the previous tools fail
> 
> - **Dijkstra's algorithm** cannot handle this because of negative weights.
> - The **DAG algorithm** cannot handle this because a graph with cycles has **no topological order**.

### Restoring an Ordering

- In the DAG algorithm, subproblems were ordered for us automatically (topological order). With cycles, that natural order disappears.

> [!tip] Recurring DP move When the natural order disappears, **add a parameter** that restores one.

**Idea:** order subproblems not by vertex, but by the **number of edges** a solution is allowed to use.

### The Subproblem

> [!note] Definition $d_k(v)$ = minimum weight of a **walk** from source $s$ to $v$ using **at most** $k$ edges ($\infty$ if no such walk exists).

- A walk may revisit vertices and edges — this isn't forbidden up front. The budget $k$ keeps every subproblem finite, and it turns out the optimum has no reason to revisit anything anyway.
- **Base case** ($k = 0$): $d_0(s) = 0$ and $d_0(v) = \infty$ for all $v \ne s$.

### The Recurrence

Consider a best walk to $v$ using at most $k$ edges, and look at its **last edge**. Either:

- The walk uses at most $k-1$ edges, **or**
- It arrives via some edge $(u,v)$ after a walk to $u$ using at most $k-1$ edges.

$$ d_k(v) = \min\Big(d_{k-1}(v),\ \min_{(u,v)\in E}\big(d_{k-1}(u) + w(u,v)\big)\Big) $$

- Computing round $k$ from round $k-1$ relaxes every edge once: $O(|E|)$ per round.
- **No vertex order is needed** — _any_ edge order works, unlike the DAG algorithm.

### How Many Rounds Are Needed?

- Assume no **negative-weight cycle** is reachable from $s$.
- Removing a cycle from a walk changes its weight by the cycle's weight, which is $\geq 0$ — so removing cycles from a walk never hurts (never increases the weight of the shortest walk).
- Hence some shortest walk repeats no vertex: it is a **simple path**, and a simple path has at most $n-1$ edges (where $n = |V|$).

> [!success] Consequence If no negative cycle is reachable from $s$, then $d_{n-1}(v) = d(s,v)$ for every vertex $v$: **$n-1$ rounds** of relaxing all edges suffice.

### Space Optimization: Table → Rolling Array → In-Place

- Round $k$ only needs information from round $k-1$, so at most **two rows** need to be kept at a time (instead of the full $n$-row table).
- **Even better:** update **one** array in place.
    - Mid-round, an entry may already hold a round-$k$ value when it's read — that only means improvements propagate _sooner_, which is fine.
    - After round $k$, $\text{dist}[v] \le d_k(v)$ still holds, and every value is the weight of a genuine walk — so after $n-1$ rounds the answer is exact.

### Bellman–Ford: Code

```cpp
struct Edge { int from; int to; double weight; };

std::vector<double> bellmanFord(int n, const std::vector<Edge>& edges, int s) {
    // real infinity: INF + weight stays INF, so no relax guard needed
    const double INF = std::numeric_limits<double>::infinity();
    std::vector<double> dist(n, INF);   // dist plays the role of d_k
    dist[s] = 0.0;
    for (int k = 1; k < n; ++k) {             // rounds k = 1, ..., n-1
        for (const auto& e : edges) {
            if (dist[e.from] + e.weight < dist[e.to]) {
                dist[e.to] = dist[e.from] + e.weight;   // relax
            }
        }
    }
    return dist;
}
```

> [!success] Running Time $n-1$ rounds, each relaxing all $|E|$ edges: $O(|V|\cdot|E|)$ time, with $O(|V|)$ space.

### Detecting Negative Cycles

- If there **is** a negative cycle reachable from $s$, walks can get ever cheaper by looping around it forever.
- **Test:** run one extra round (round $n$). If some $\text{dist}[v]$ still improves in round $n$, then a walk with $n$ edges beats every walk with at most $n-1$ edges. Such a walk must repeat a vertex, and the enclosed cycle must have negative weight.

> [!note] Negative-Cycle Test Some $\text{dist}$ value improves in round $n$ $\iff$ a negative cycle is reachable from $s$. No improvement in round $n$ means the values have already converged to true shortest distances.

### Putting It All Together: One Family of Algorithms

|Setting|Algorithm|Time|
|---|---|---|
|DAG, any weights|Relax in topological order|$O(\lvert V\rvert+\lvert E\rvert)$|
|Non-negative weights|Dijkstra|$O((\lvert V\rvert+\lvert E\rvert)\log\lvert V\rvert)$|
|**Negative weights, cycles**|**Bellman–Ford**|$O(\lvert V\rvert\cdot\lvert E\rvert)$|

- All three algorithms are fundamentally **edge relaxation** — they differ only in the **order** and **number of times** edges are relaxed. The DP framing explains _why_ each schedule is sufficient.

> [!tip] Instructor Resource / Exam-relevant material Step through the rounds in the [Bellman–Ford animation](https://troyjlee.github.io/assets/courses/advanced-algorithms-2026/animations/bellman_ford.html) (referenced in lecture as the "Advanced Algorithms preview" from the end of the DSA course). Watch $d_k$ spread one edge further per round, and the round-$n$ check catch a negative cycle.

---

## Topic 3: Maximum Subarray Sum (Kadane's Algorithm)

### Problem

Given an array $\text{arr}$ of integers, find indices $i \le j$ that maximize:

$$ \text{arr}[i] + \text{arr}[i+1] + \cdots + \text{arr}[j] $$

i.e., maximize the sum of entries in a (contiguous) **subarray**.

> [!example] Worked Example For `arr = [1, 3, -5, 2, 3, 1, -4, 3]` (indices 0–7), the maximum subarray sum is **6**, realized by the subarray from index 3 to index 5 (`2 + 3 + 1`).

### Brute Force — $O(n^3)$

Try all index pairs $i \le j$ and compute $\text{arr}[i] + \cdots + \text{arr}[j]$ directly.

```cpp
int maxSubarraySum(const std::vector<int>& vec) {
    int n = static_cast<int>(vec.size());
    int maxSum = vec.at(0);
    for (int i = 0; i < n; ++i) {
        for (int j = i; j < n; ++j) {
            int currentSum = 0;
            for (int k = i; k <= j; ++k) {
                currentSum += vec.at(k);
            }
            maxSum = std::max(maxSum, currentSum);
        }
    }
    return maxSum;
}
```

Three nested loops → $O(n^3)$.

### Removing Wasted Work — $O(n^2)$

There is wasted work recomputing sums like $\text{arr}[3]+\text{arr}[4]+\text{arr}[5]+\text{arr}[6]$ from scratch when $\text{arr}[3]+\text{arr}[4]+\text{arr}[5]$ was already computed. Instead, compute all sums starting from index $i$ by building on the previous partial sum.

```cpp
int maxSubarraySum(const std::vector<int>& vec) {
    int n = static_cast<int>(vec.size());
    int maxSum = vec.at(0);
    for (int i = 0; i < n; ++i) {
        int sumFromi = 0;
        for (int j = i; j < n; ++j) {
            sumFromi += vec.at(j);
            maxSum = std::max(maxSum, sumFromi);
        }
    }
    return maxSum;
}
```

Two nested loops → $O(n^2)$. Can we do better? → Yes, with DP.

### Devising the DP Subproblem

In array problems, subproblems often focus on **prefixes**:

$$ \text{arr}[0], \text{arr}[1], \ldots, \text{arr}[i] $$

> [!tip] Recipe reminder Compute some value $\text{dp}[i]$ of this prefix where:
> 
> 1. From $\text{dp}[0],\ldots,\text{dp}[n-1]$ we can solve the original problem.
> 2. From $\text{dp}[0],\ldots,\text{dp}[i]$ we can "easily" compute $\text{dp}[i+1]$.

**❌ First attempt:** $\text{dp}[i]$ = maximum subarray sum within $\text{arr}[0],\ldots,\text{arr}[i]$.

1. Computing $\text{dp}[n-1]$ solves the problem. ✓
2. Not obvious how to compute $\text{dp}[i+1]$ from $\text{dp}[0],\ldots,\text{dp}[i]$. ✗ (the best subarray in the larger prefix might not end at $i$, so nothing tells us where it is)

**✅ Second attempt:** $\text{dp}[i]$ = maximum subarray sum that **ends at** index $i$.

1. The final answer is the maximum of $\text{dp}[0],\ldots,\text{dp}[n-1]$.
2. Going from $\text{dp}[i]$ to $\text{dp}[i+1]$: the best sum ending at $i+1$ either **includes** index $i$ or **doesn't**:
    - If not: $\text{dp}[i+1] = \text{arr}[i+1]$.
    - If yes: the best we can do up to $i$ is $\text{dp}[i]$, so $\text{dp}[i+1] = \text{dp}[i] + \text{arr}[i+1]$.

### The Recurrence and Code

$$ \text{dp}[i+1] = \max\big(\text{arr}[i+1],\ \text{dp}[i]+\text{arr}[i+1]\big) $$

```cpp
int maxSubarraySum(const std::vector<int>& vec) {
    int n = static_cast<int>(vec.size());
    int maxSum = vec.at(0);
    int currentSum = vec.at(0);   // currentSum plays the role of dp[i]
    for (int i = 1; i < n; ++i) {
        currentSum = std::max(currentSum + vec.at(i), vec.at(i));
        maxSum = std::max(currentSum, maxSum);
    }
    return maxSum;
}
```

- Since only $\text{dp}[i]$ is needed to compute $\text{dp}[i+1]$, the **whole** $\text{dp}$ array never needs to be stored — a single running variable suffices.

> [!success] Running Time $\Theta(n)$ — a linear-time solution.

> [!info] Kadane's Algorithm This algorithm is known as **Kadane's algorithm**. (Instructor note: its Wikipedia page recounts an interesting history of the problem — worth a read.)

> [!tip] Exam-relevant pattern The key move: change the subproblem from **"best in a prefix"** to **"best ending at $i$."** This trick recurs throughout the course.

---

## Topic 4: Longest Increasing Run — Subarray and Subsequence (Warm-up for LIS)

### The Problem (Subarray Version)

Given an array of integers, find the longest **subarray** containing consecutive increasing numbers (called a **run**).

> [!example] For `arr = [6, 4, 5, 7, 8, 9, 11, 12]`, the answer is **3**, from the run $7, 8, 9$ (indices 3–5). Note the subarray must be **contiguous** — the leading 6 cannot be included even though $6 < 7$.

**DP formulation:** Let $\text{dp}[i]$ be the longest run **ending at** index $i$. The final answer is $\max(\text{dp}[0], \ldots, \text{dp}[n-1])$, and:

$$ \text{dp}[i+1] = \begin{cases} 1 & \text{if } \text{arr}[i+1] \ne \text{arr}[i]+1 \ \text{dp}[i]+1 & \text{otherwise} \end{cases} $$

```cpp
int longestRunSubarray(const std::vector<int>& vec) {
    if (vec.empty()) {
        return 0;
    }
    int n = static_cast<int>(vec.size());
    int maxRun = 1;
    int currentRun = 1;
    for (int i = 1; i < n; ++i) {
        currentRun = (vec.at(i) == vec.at(i - 1) + 1) ? currentRun + 1 : 1;
        maxRun = std::max(currentRun, maxRun);
    }
    return maxRun;
}
```

- Same shape as Kadane's algorithm: one pass, $\Theta(n)$, constant extra space.

### The Subsequence Variation

> [!note] Definition — Subsequence A subsequence of an array is obtained by deleting some entries of the array. Elements appear in the same relative order, but do **not** have to be adjacent (unlike a subarray).

Now we want the longest **subsequence** of consecutive integers (a run), not necessarily contiguous.

> [!example] For `arr = [6, 4, 5, 7, 8, 9, 11, 12]`, the longest subsequence forming a run is $6, 7, 8, 9$ (length 4). Note $4,5,6,7,8,9$ does **not** work as a subsequence here, since the 6 appears **before** the 4 and 5 in the array.

**DP formulation:** Let $\text{dp}[i]$ be the length of the longest run subsequence ending at value $\text{arr}[i]$. Because we care about _runs_, we need the index $j$ (if any) with $\text{arr}[j] + 1 = \text{arr}[i+1]$ — i.e., the previous occurrence of $\text{arr}[i+1]-1$.

- The length of a run subsequence ending at value $v$ cannot decrease when $v$ appears again later — so **only the latest previous occurrence** of $v$ matters (an earlier occurrence deeper in the past is irrelevant once a closer one exists).

**The update:** to compute $\text{dp}[i+1]$, find the previous occurrence of $\text{arr}[i+1]-1$:

- If it has not appeared before: $\text{dp}[i+1] = 1$.
- If the previous occurrence is at position $j$: $\text{dp}[i+1] = 1 + \text{dp}[j]$.

We need a data structure to look up "the previous occurrence of value $x$" quickly — a **dictionary** (hash map) is a good fit, and it can double as the DP table itself: $\text{runTo}[v]$ = longest run ending with value $v$ seen so far.

```cpp
int longestRunSubsequence(const std::vector<int>& vec) {
    int maxRun = 0;
    std::unordered_map<int,int> runTo;
    for (int x : vec) {
        if (runTo.contains(x - 1)) {
            runTo[x] = runTo[x - 1] + 1;
        } else {
            runTo[x] = 1;
        }
        maxRun = std::max(runTo[x], maxRun);
    }
    return maxRun;
}
```

> [!success] Running Time $O(n \log n)$ with `map`; average-case $O(n)$ with `unordered_map`.

---

## Topic 5: Longest Increasing Subsequence (LIS)

### The Problem

**Input:** an array of integers, e.g. $z = [0, 4, 7, 8, 3, 2, 1, 3, 2, 7, 9, 5, 3, 2, 11, 6]$.

> [!note] Definition — Increasing Subsequence An increasing subsequence is a subsequence where each number is strictly larger than all numbers preceding it in the subsequence.

> [!example] $4, 8, 9, 11$ is an increasing subsequence of $z$ above.

**Goal:** find the **length** of a longest increasing subsequence (LIS).

> [!example] For the example array, the answer is **6**, realized e.g. by $0, 1, 2, 7, 9, 11$.

### Defining the Subproblem

This problem is a good candidate for 1D dynamic programming.

**Subproblem:** what is the length of the longest increasing subsequence **ending at** $z[i]$? Call this $\text{dp}[i]$.

$$ \text{dp}[i] = 1 + \max_{j < i,\ z[j] < z[i]} \text{dp}[j] $$

(where the max over an empty set is taken as $0$, so $\text{dp}[i] = 1$ if no valid $j$ exists).

### The $O(n^2)$ DP

For each $i$, iterate over all $j < i$ and apply the recurrence directly:

```cpp
int lis(const std::vector<int>& z) {
    int n = static_cast<int>(z.size());
    std::vector<int> dp(n, 1);   // each element alone is increasing
    int best = (n > 0) ? 1 : 0;
    for (int i = 1; i < n; ++i) {
        for (int j = 0; j < i; ++j) {
            if (z.at(j) < z.at(i)) {
                dp.at(i) = std::max(dp.at(i), dp.at(j) + 1);
            }
        }
        best = std::max(best, dp.at(i));
    }
    return best;
}
```

> [!success] Running Time $O(n^2)$ — the version most students can easily rediscover.

---

### ⭐ Stretch Material: Faster than $O(n^2)$

> [!warning] Stretch Everything below to the end of this section is **stretch material** — a taste of how data structures can accelerate a DP. (Marked by the instructor as beyond the core requirement.)

**Query needed:** what is the maximum of $\text{dp}[j]$ over all $j$ with $z[j] < z[i]$? If this query (and the corresponding update) can be answered in $O(\log n)$, the whole algorithm becomes $O(n \log n)$.

#### Coordinate Compression

- **Problem:** the values $z[j]$ can be arbitrary integers, so they can't directly index an array.
- **Solution:** only the _relative order_ of values matters. Sort the values in $O(n \log n)$ and map them to $0, \ldots, n-1$.
- After compression, a value doubles as an **index** into an array $\text{dp}'$, where $\text{dp}'[v]$ is the length of a longest increasing subsequence ending with (compressed) value $v$.

#### Segment Tree

- Store $\text{dp}'$ as the **leaves** of a binary tree (a segment tree), where each internal node stores the **maximum** of its subtree.
- A **prefix-max query** $\max_{v < z[i]} \text{dp}'[v]$ checks at most $O(\log n)$ nodes.
- An **update** (writing a new $\text{dp}'[v]$) rewrites the $\log n$ nodes on the path from leaf to root.

> [!success] Total Running Time $O(n \log n)$ for LIS using coordinate compression + a segment tree.

#### Patience Sorting (Alternative $O(n \log n)$ Approach)

> [!warning] Stretch Another $O(n \log n)$ route — a beautiful algorithm, easier to implement than a segment tree, but **not** dynamic programming.

- Similar to the card game of solitaire: think of array entries as "cards," passed through left to right and placed into **piles**.
- Each pile is non-increasing (top to bottom): a larger card cannot be placed on top of a smaller card.

> [!note] Rule Place each card on the **leftmost** pile whose top card is at least as large as it. If the card is larger than the top card of every pile, start a **new pile** to the right of all existing piles.

**Why it works:**

> [!note] Fact 1 The elements of any increasing subsequence must be in **distinct** piles: $#\text{piles} \geq \text{length of LIS}$.

> [!note] Fact 2 $\text{length of LIS} \geq #\text{piles}$: starting with a number in the rightmost pile and following pointers back to the first pile gives an increasing subsequence with one element per pile.

- Facts 1 + 2 together: $\text{length of LIS} = #\text{piles}$.
- With binary search used to find the target pile for each card, this runs in $O(n \log n)$.

> [!warning] Fun Consequence (instructor aside) Any sequence of $n$ numbers has an increasing **or** a non-increasing subsequence of size $\sqrt{n}$: with fewer than $\sqrt{n}$ piles, some pile must contain $\geq \sqrt{n}$ cards — and each pile is, by construction, non-increasing.

---

## Topic 6: Coin Change

### Problem

Given a set of coin denominations and a target amount, with an **unlimited supply** of each denomination, find the **minimum number of coins** that sum to the target amount.

> [!example] With $\text{coins} = {1, 9, 10}$ and $\text{amount} = 18$: the answer is **2** (two 9-coins).

### Subproblem and Update

Subproblems are now **amounts**, not prefixes: let $\text{dp}[a]$ be the minimum number of coins summing to exactly $a$.

1. $\text{dp}[\text{amount}]$ solves the whole problem.
2. The last coin of an optimal solution for amount $a$ is some denomination $c \le a$; removing it leaves an optimal solution for $a - c$:

$$ \text{dp}[a] = 1 + \min_{c \in \text{coins},\ c \le a} \text{dp}[a-c] $$

- **Base case:** $\text{dp}[0] = 0$; unreachable amounts stay $\infty$.

### Worked Example

$\text{coins} = {1, 9, 10}$, $\text{amount} = 18$:

$$ \text{dp}[18] = 1 + \min(\text{dp}[17], \text{dp}[9], \text{dp}[8]) = 1 + \min(8, 1, 8) = 2 $$

> [!tip] Instructor emphasis Note how the answer **drops** sharply at $a = 9$: taking the biggest coin first is not always the optimal (greedy) strategy — the DP recurrence considers **every possible last coin**, which is why it is correct in general where greedy may not be.

### Coin Change: Code

```cpp
int coinChange(const std::vector<int>& coins, int amount) {
    const int INF = amount + 1;   // no answer needs more coins than this
    std::vector<int> dp(amount + 1, INF);
    dp[0] = 0;
    for (int a = 1; a <= amount; ++a) {
        for (int c : coins) {
            if (c <= a) {
                dp[a] = std::min(dp[a], dp[a - c] + 1);
            }
        }
    }
    return (dp[amount] < INF) ? dp[amount] : -1;
}
```

> [!success] Running Time $O(\text{amount} \times #\text{coins})$.

> [!warning] Teaser (Exam / Future-lecture Hint) Is there a greedy shortcut for "nice" coin systems like ${1, 5, 25}$? See **Week 4**.

---

## Week 1 Takeaways

|Problem|Subproblem|Time|
|---|---|---|
|Longest path in a DAG|best path _into_ $v$, in topological order|$O(\lvert V\rvert+\lvert E\rvert)$|
|Bellman–Ford|shortest walk to $v$ using _at most $k$ edges_|$O(\lvert V\rvert\cdot\lvert E\rvert)$|
|Max subarray sum|best sum _ending at_ $i$|$\Theta(n)$|
|Longest increasing subsequence|longest LIS _ending at_ $i$|$O(n^2)$, stretch $O(n\log n)$|
|Coin change|fewest coins for _amount_ $a$|$O(\text{amount}\cdot#\text{coins})$|

> [!abstract] The Recipe (repeated for emphasis) Define subproblems whose answers (1) combine to solve the whole problem, and (2) can be computed from earlier subproblems. **"Best ending here"** is often the right refinement.

---

## Glossary / Key Concepts

- **Dynamic Programming (DP):** solving a problem by decomposing it into subproblems whose solutions build up to the full solution.
- **Topological sort:** an ordering of a DAG's vertices such that $u < v$ for every edge $(u,v)$.
- **Edge relaxation:** checking whether a candidate edge improves a known distance estimate, and updating it if so.
- **Walk vs. simple path:** a walk may repeat vertices/edges; a simple path does not. Shortest walks (absent negative cycles) are always achievable by a simple path.
- **Negative-weight cycle:** a cycle whose total edge weight is negative — allows costs to decrease without bound by looping, and breaks shortest-path optimality.
- **Subarray vs. subsequence:** a subarray is contiguous; a subsequence preserves relative order but need not be contiguous.
- **Coordinate compression:** replacing arbitrary values with ranks $0,\ldots,n-1$ based on relative order, so they can be used as array indices.
- **Segment tree:** a binary tree over an array supporting range queries (e.g. max) and point updates in $O(\log n)$.
- **Patience sorting:** a card-sorting-inspired algorithm that finds LIS length via non-increasing piles, in $O(n \log n)$ using binary search.

## Connections to Other Topics

- Bellman–Ford's algorithm family sits alongside **Dijkstra's algorithm** (from the DSA / previous semester course) and the DAG shortest-path algorithm — all are "edge relaxation" algorithms differing only in schedule.
- LIS's $O(n\log n)$ stretch solution connects to **segment trees** as a general data structure for accelerating DP recurrences (range-max / range-min queries with point updates).
- Coin Change previews **Week 4**, which will discuss when a **greedy algorithm** is a valid shortcut for certain coin systems (e.g. ${1,5,25}$) versus when full DP is required.
- Kadane's algorithm and the longest-run subarray algorithm share the identical algorithmic shape (one pass, $\Theta(n)$, O(1) extra space) — reinforcing the "best ending at $i$" subproblem pattern.

## Tools & Resources Mentioned

- [Bellman–Ford animation](https://troyjlee.github.io/assets/courses/advanced-algorithms-2026/animations/bellman_ford.html) — interactive step-through of the rounds and the negative-cycle check.
- Wikipedia's page on the maximum subarray problem — instructor-recommended for historical context on Kadane's algorithm.
- Standard library containers referenced in code: `std::vector`, `std::unordered_map`, `std::map` (with runtime trade-offs: $O(n)$ average case vs. $O(n\log n)$ worst case for lookups).

## Exam Hints Summary

> [!tip] Consolidated exam/emphasis points from this lecture
> 
> - The DP "recipe" (two conditions: combinability + easy computability from earlier subproblems) is the core mental model — expect it to be tested directly.
> - The shift from **"best in a prefix"** to **"best ending at $i$"** is the single most repeated trick this week (max subarray, longest run, LIS all use it).
> - Understand _why_ Bellman–Ford needs exactly $n-1$ rounds (simple path argument) and how the **round-$n$ check** detects negative cycles.
> - Be able to derive the $O(n^2)$ LIS solution from the recurrence; the $O(n\log n)$ segment-tree and patience-sorting methods are **stretch/optional** material, less likely to be core exam content but useful for depth.
> - For coin change, understand why the greedy "always take the biggest coin" approach fails in general (see the worked example at $a=9$) — this is explicitly flagged as a teaser for Week 4.