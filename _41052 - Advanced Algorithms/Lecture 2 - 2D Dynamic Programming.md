
> [!faq] About this Lecture 
> Class: 41052
> Subject: #advancedAlgorithms
> Date: 05/08/2025 
> Topics: #coding #coding/language/cpp #dataStructuresAndAlgorthims 


## Longest Common Substring (LCStr)

### Problem Definition

- Given two strings, e.g. `"pineapple"` and `"grappled"`.
- Goal: find the length of the **longest string that occurs as a contiguous substring in both** inputs.
- Example: longest common substring of `"pineapple"` and `"grappled"` is `"apple"`, length **5**.

### Defining Subproblems
 
- With two input strings $a$ and $b$, subproblems are based on **prefixes of both strings** (unlike single-string DP, which uses one prefix).
- Indices start at $0$. Notation: $a[0..i]$ denotes the prefix $a[0], \dots, a[i]$.
- $a[0..m-1]$ denotes the entirety of $a$ (length $m$).
- Define $dp[i][j]$ as the answer to a subproblem on prefixes $a[0..i]$ and $b[0..j]$.
- Strategy: solve subproblems **row-by-row, top to bottom**, using smaller-index subproblems $dp[k][\ell]$ (with $k<i,\ \ell<j$) to build up to $dp[i][j]$.

### First Attempt (rejected)

- Naive idea: $dp[i][j] = $ length of the **longest common substring of the prefixes** $a[0..i]$, $b[0..j]$.
- **Problem:** this doesn't relate cleanly between subproblems — a substring found in this subproblem might not be extendable in the next one (it may not end at the boundary).

> [!warning] Instructor emphasis Careful: knowing the LCStr of two prefixes (without requiring it to _end_ at the prefix boundary) is not useful for building the recurrence, because the match can't necessarily be continued.

### Second Attempt (correct definition)

- Redefine: $dp[i][j]$ = length of the longest common substring **ending exactly at index $i$ in $a$ and index $j$ in $b$**.
- If the last characters don't match ($a[i] \ne b[j]$), no common substring can end there → $dp[i][j] = 0$.
- If they do match, the match at $(i,j)$ **extends** whatever match ended at $(i-1, j-1)$ by one character.
- Example walkthrough (matching `'a'` → `'ap'` → `'app'`) builds up diagonally: $1, 2, 3$.

### LCStr Recurrence

```
dp[i][j] =
    0                     if i < 0 or j < 0
    0                     if a[i] ≠ b[j]
    1 + dp[i-1][j-1]      otherwise
```

$$ \mathrm{dp}[i][j] = \begin{cases} 0 & \text{if } i < 0 \text{ or } j < 0 \ 0 & \text{if } a[i] \neq b[j] \ 1 + \mathrm{dp}[i-1][j-1] & \text{otherwise} \end{cases} $$

> [!important] Final answer The final answer is the **maximum entry anywhere in the table** (not necessarily the bottom-right corner) — because the longest common substring can end anywhere.

- Worked example (`pineapple` vs `grappled`) shows the diagonal build-up of matches, with the table's maximum value giving the LCStr length (5, from "apple").

---

## Longest Common Subsequence (LCS)

### Problem Definition

- Given two strings, e.g. `"spaceheater"` and `"sheeptractor"`.
- Goal: find the length of the longest string that occurs as a **subsequence** (not necessarily contiguous) in both inputs.
- Example: `"spactr"` and `"sheatr"` are both common subsequences of length **6** — the maximum for this pair.
- **Key distinction from LCStr:** subsequence characters need not be contiguous, just in the same relative order.

### Connection to `diff`

- Unix `diff` computes an LCS under the hood.
- Trick: treat each **line** of a file as one "character" — a line-based diff is equivalent to a character diff on lines.
- In a diff: `-` = deletion, `+` = insertion, untouched lines = the common subsequence.
- Example: `diff -U 100 spaceheater.txt sheeptractor.txt` marks unchanged lines `s h e a t r`, which is a common subsequence.
- **Fewest edits = most lines left untouched** (this connects edit distance to LCS).

> [!note] An LCS, not _the_ LCS Swapping the arguments to `diff` (comparing `sheeptractor.txt` to `spaceheater.txt`) yields a _different_ common subsequence of the same length (`spactr` vs `sheatr`), both length 6.
> 
> - **A longest common subsequence need not be unique.**
> - Which one you get depends on how ties are broken in the algorithm.

### Subproblem Definition

- $dp[i][j]$ = length of a longest common subsequence of the prefixes $a[0..i]$, $b[0..j]$.
- This is the **original problem restated on prefixes** (a common pattern for subsequence-style DP problems).

### Base Case

$$ \text{If } i < 0 \text{ or } j < 0, \text{ then } dp[i][j] = 0 $$

- Reasoning: the LCS of any string with the empty string has length 0.

### Recurrence Derivation

**Case 1: $a[i] \neq b[j]$**

- The last element of an LCS of $a[0..i], b[0..j]$ is either not $a[i]$, or not $b[j]$, or neither.
- So the LCS is either the LCS of $a[0..i-1], b[0..j]$ **or** of $a[0..i], b[0..j-1]$.

$$ dp[i][j] = \max\big(dp[i][j-1],\ dp[i-1][j]\big) $$

**Case 2: $a[i] = b[j]$**

- We can extend the LCS of $a[0..i-1], b[0..j-1]$ by the matching character.

$$ dp[i][j] = \max\big(1 + dp[i-1][j-1],\ dp[i][j-1],\ dp[i-1][j]\big) $$

**Simplification of Case 2:**

- Since $dp[i][j-1]$ and $dp[i-1][j]$ can each exceed $dp[i-1][j-1]$ by at most 1:

$$ 1 + dp[i-1][j-1] \geq \max\big(dp[i][j-1],\ dp[i-1][j]\big) $$

- So when $a[i] = b[j]$, the match term always dominates:

$$ dp[i][j] = 1 + dp[i-1][j-1] \quad \text{when } a[i] = b[j] $$

### Final LCS Recurrence

```
dp[i][j] =
    0                              if i < 0 or j < 0
    1 + dp[i-1][j-1]               if a[i] = b[j]
    max(dp[i][j-1], dp[i-1][j])    otherwise
```

$$ \mathrm{dp}[i][j] = \begin{cases} 0 & \text{if } i < 0 \text{ or } j < 0 \ 1 + \mathrm{dp}[i-1][j-1] & a[i] = b[j] \ \max\big(\mathrm{dp}[i][j-1],\ \mathrm{dp}[i-1][j]\big) & \text{otherwise} \end{cases} $$

> [!important] Where the answer lives The length of an LCS is $dp[m-1][n-1]$ — the **bottom-right cell** of the table. This is **unlike LCStr**, where the answer was the maximum over the _whole_ table.

### Complexity

- For strings of length $m$ and $n$: runs in $O(mn)$ time.
- **Exam hint:** "We have reasons to think this algorithm is essentially optimal" — this is expanded on later in the [[#Fine-Grained Complexity|Fine-Grained Complexity]] section (connection to SETH).

### Worked Example: `spaceheater` vs `sheeptractor`

- Full $12 \times 13$ DP table computed (see lecture slide 23 for the complete grid); final answer $dp[m-1][n-1] = 6$.
- **Path interpretation:** moving **right** along a row = an insert; moving **down** a column = a delete.
- The highlighted path through the table spells out the edit sequence transforming `"spaceheater"` into `"sheeptractor"` step by step (e.g. `spaceheater` → `shpaceheater` → `shepaceheater` → … → `sheeptractor`).

### Traceback: Recovering the LCS Itself

- The DP table only gives the **length**. To recover the actual subsequence, walk backwards from $dp[m-1][n-1]$:
    1. If $a[i] = b[j]$: this character is part of the LCS — output it, then step diagonally to $(i-1, j-1)$.
    2. Otherwise: step to whichever of $(i-1, j)$ or $(i, j-1)$ holds the **larger** value (that's where the max came from).
    3. Stop when $i < 0$ or $j < 0$.
- The output, **reversed**, is a valid LCS.

```python
# Traceback pseudocode
while i >= 0 and j >= 0:
    if a[i] == b[j]:           # match: part of the LCS
        out.push_back(a[i])
        i -= 1
        j -= 1
    elif dp(i-1, j) >= dp(i, j-1):
        i -= 1                 # LCS unchanged without a[i]
    else:
        j -= 1                 # LCS unchanged without b[j]
reverse(out)
```

- **Time complexity of traceback:** $O(m+n)$ steps (bounded by the number of steps needed to reduce both $i$ and $j$ to below 0).

---

## Reducing LCS to LIS

### Motivating Question

- Do the Longest Increasing Subsequence (LIS) and LCS problems relate to each other?
- **Yes** — an LIS algorithm can be used to solve LCS via a reduction.

### The Reduction: Building $z$

Given strings $x$ (length $m$) and $y$ (length $n$):

1. For every letter in $x$, find **all the positions it appears in $y$**, listed in **decreasing order**.
2. Form a list $z$ of numbers by **replacing each character of $x$** with its corresponding list of positions in $y$.

**Worked example:**

```
x = s(0) p(1) a(2) c(3) e(4) h(5) e(6) a(7) t(8) e(9) r(10)
y = s(0) h(1) e(2) e(3) p(4) t(5) r(6) a(7) c(8) t(9) o(10) r(11)

Position lists (per character of x, decreasing order):
s -> 0
p -> 4
a -> 7, 2
c -> 8
e -> 6, 3, 2
h -> 1
e -> 6, 3, 2
a -> 7, 2
t -> 9, 5
e -> 6, 3, 2
r -> 11, 6

z = 0 4 7 8 3 2 1 3 2 7 9 5 3 2 11 6
```

### Size of $z$

- Let $r_i$ be the number of times character $x[i]$ appears in $y$.
- Then the size of $z$ is:

$$ r = \sum_{i=0}^{m-1} r_i $$

- **Range:** $r$ can range from $0$ (strings share no characters) up to $mn$ (e.g. both strings made of the same repeated character).
    - Example 1: `abc` vs `def` → $r = 0$.
    - Example 2: `aaa` vs `aaa` → $r = 9$.
- **Practical note:** when comparing files with `diff`, a line from one file typically does **not** appear many times in the other file — so in practice $r$ is often $O(m)$.

### Building $z$ Efficiently

1. Put the elements of $x$ into a map (value = empty list): $O(m \log m)$.
2. Iterate through $y$; if $y[i]$ is a key in the map, append $i$ to that key's list: $O(n \log m)$.
3. Iterate through $x$ to assemble $z$ from the map: $O(m \log m + r)$.

**Total time to build $z$:** $O(m\log m + n\log m + r)$.

### Correctness of the Reduction

> [!important] Core claim Any increasing sequence in $z$ corresponds to a common subsequence of $x$ and $y$, and vice versa. **A LIS of $z$ is a longest common subsequence of $x$ and $y$.**

- Why decreasing order within each block matters: an increasing sequence can pick **at most one number per block** (since within a block the values decrease), so **each letter of $x$ is matched at most once** — this prevents the same source character from being reused inconsistently.
- Worked example: the increasing sequence $0, 4, 7, 8, 9, 11$ within $z$ picks out `"spactr"` — a valid common subsequence of $x$ and $y$.

### Overall Complexity of LCS-via-LIS

$$ O(m \log m + n \log m + r \log m) $$

- The $r \log m$ term comes from running **patience sorting** for LIS on $z$: it keeps one pile per unit of LIS length, and that length is at most $m$, so each of the $r$ insertions costs $O(\log m)$.
- **When this wins:** in applications where $r = O(m+n)$, this can be **much better** than the standard $\Theta(mn)$ DP algorithm.

### In Practice: `diff`

> [!info] Historical note This reduction (LCS via LIS) is how the **original Unix `diff`** compared files — the **Hunt–Szymanski algorithm (1976)**. Since lines rarely repeat within a file, $r$ is typically small, and LCS-via-LIS runs in near-linear time.

- **Modern tools:** `git diff` defaults to **Myers' algorithm** ($O(ND)$ time, where $D$ is the edit distance), a different approach.
- However, `git diff --patience` still uses the LIS-based approach, restricted to uniquely-matching lines.

---

## Fine-Grained Complexity

### Satisfiability (SAT)

- One of the most famous problems in theoretical computer science.
- **Input:** a Boolean formula that is an **AND of ORs** of variables and their negations (conjunctive normal form), e.g.:

$$ (x_3 \lor x_2 \lor x_4) \land (\lnot x_4 \lor x_1 \lor \lnot x_2) \land (\lnot x_3 \lor \lnot x_4 \lor \lnot x_1) $$

- **Question:** does there exist a Boolean assignment to the variables making the formula true?
- Example satisfying assignment for the formula above: $x_1=1,\ x_2=0,\ x_3=1,\ x_4=0$.

### 3-SAT

- A SAT formula is **3-SAT** if every OR clause involves exactly 3 variables (or their negations).
- **Open problem:** it is not believed possible to solve every 3-SAT instance on $n$ variables in time polynomial in $n$.
- Whether this is possible is **equivalent** to the question of whether $P = NP$.

### Algorithms for 3-SAT

- **Trivial algorithm:** $\mathrm{poly}(n) \cdot 2^n$ — brute-force try every assignment.
- **Better:** the **PPSZ algorithm** (Paturi, Pudlák, Saks, Zane) solves 3-SAT in randomized time:

$$ O(1.308^n) = O(2^{0.386n}) $$

- (General 3-SAT analysis due to Hertli.)
- Despite significant effort, **no algorithm faster than exponential time $2^{cn}$** is known for 3-SAT.

### Exponential Time Hypothesis (ETH)

- Formalized by Impagliazzo and Paturi.

> [!quote] ETH There is a constant $c > 0$ such that solving 3-SAT requires time $\Omega(2^{cn})$.

- This is a **much stronger** statement than $P \neq NP$.
- Reference: Impagliazzo and Paturi, _"On the Complexity of k-SAT"_.

### Strong Exponential Time Hypothesis (SETH)

- Generalization to **$k$-SAT**, where OR clauses have $k$ variables/negations. Larger $k$ → harder problem.

> [!quote] SETH For every $\varepsilon > 0$ there is a $k$ such that solving $k$-SAT requires time at least $2^{(1-\varepsilon)n}$.

### Connection Back to LCS

> [!important] Key theorem (exam-relevant) If there exists $\varepsilon > 0$ such that, for any two strings of size $n$, the length of an LCS of $x$ and $y$ can be computed in time $O(n^{2-\varepsilon})$, then **SETH is false**.

- Reference: Abboud, Backurs, Vassilevska Williams, _"Tight Hardness Results for LCS and Other Sequence Similarity Measures"_; Bringmann and Künnemann, _"Quadratic Conditional Lower Bounds for String Problems and Dynamic Time Warping"_.
- **Implication:** even a small polynomial speedup over the $O(n^2)$ LCS DP algorithm would imply a major breakthrough in SAT algorithms.

### A Web of SETH-Hard Problems

A number of well-studied problems have best-known algorithms matching an $O(n^{2-\varepsilon})$ SETH barrier — meaning no one has beaten quadratic time, and doing so would refute SETH:

|Problem|Best known|SETH barrier|
|---|---|---|
|LCS|$O(n^2)$|no $O(n^{2-\varepsilon})$|
|Edit distance|$O(n^2)$|no $O(n^{2-\varepsilon})$|
|Fréchet distance|$O(n^2)$|no $O(n^{2-\varepsilon})$|
|Graph diameter|$\widetilde{O}(mn)$|no subquadratic $3/2$-approx.|

- Reference: Vassilevska Williams, _"On some fine-grained questions in algorithms and complexity"_.

### Why This Connection Matters

> [!note] Instructor's closing point SAT and LCS are both extremely well-studied problems of significant practical interest. SETH is a more compelling hypothesis than "the LCS DP algorithm is optimal" on its own, because of the **web of connections** between problems: progress (or lack thereof) on better LCS algorithms is tied to the same underlying difficulty as SAT. Being "stuck" on LCS is evidence of being stuck on SAT, and vice versa.

---

## Summary / Study Checklist

- [ ] Can state and derive the **LCStr recurrence**; know the answer is the **max over the whole table**.
- [ ] Can state and derive the **LCS recurrence**; know the answer is at $dp[m-1][n-1]$.
- [ ] Understand why the match case simplifies to just $1 + dp[i-1][j-1]$ (domination argument).
- [ ] Can perform **traceback** to recover an actual LCS, not just its length, in $O(m+n)$.
- [ ] Understand the **diff / edit distance** connection: untouched lines = common subsequence.
- [ ] Can explain the **LCS-to-LIS reduction**: building $z$, why decreasing order per block matters, and the complexity $O(m\log m + n\log m + r\log m)$.
- [ ] Know when LCS-via-LIS beats the standard $O(mn)$ DP (when $r$ is small, e.g. $r = O(m+n)$).
- [ ] Understand **SETH** and its implication that LCS's $O(n^2)$ algorithm is likely optimal (no $O(n^{2-\varepsilon})$ algorithm unless SETH is false).
- [ ] Recognize other SETH-hard problems: edit distance, Fréchet distance, graph diameter approximation.

## Key References

- Paturi, Pudlák, Saks, Zane — _"An Improved Exponential-Time Algorithm for k-SAT"_
- Impagliazzo, Paturi — _"On the Complexity of k-SAT"_
- Abboud, Backurs, Vassilevska Williams — _"Tight Hardness Results for LCS and Other Sequence Similarity Measures"_
- Bringmann, Künnemann — _"Quadratic Conditional Lower Bounds for String Problems and Dynamic Time Warping"_
- Vassilevska Williams — _"On some fine-grained questions in algorithms and complexity"_
- Hunt, Szymanski (1976) — original Unix `diff` algorithm (LCS via LIS)

## Related Topics

- [[Longest Increasing Subsequence (LIS)]]
- [[Edit Distance]]
- [[P vs NP]]
- [[Patience Sorting]]