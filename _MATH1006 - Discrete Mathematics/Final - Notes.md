
> [!faq] About this Note
>
> Class: MATH1006
> Subject: #discreteMathematics
> Topics: #math/discreteMathematics
> Date: 2025-06-16 at 00:31

## Table of Contents

1. [[#Chapter 1: Counting & Sequences]]

2. [[#Chapter 2: Sets]]

3. [[#Chapter 3: Functions]]

4. [[#Chapter 4: Counting Principles]]

5. [[#Chapter 5: Unordered Selections & Binomial Coefficients]]

6. [[#Chapter 6: Inclusion-Exclusion & Multinomial Coefficients]]

7. [[#Chapter 7: Boolean Expressions & Karnaugh Maps]]

8. [[#Chapter 8: Logic]]

9. [[#Chapter 9: Number Theory]]

10. [[#Chapter 10: Induction & Recursion]]

11. [[#Chapter 11: Graph Theory]]

---

## Chapter 1: Counting & Sequences

### Fibonacci Numbers

> [!info] Definition
> A sequence where each term is the sum of the two preceding ones.

**Recursive Definition:**

- $F_1 = 1$

- $F_2 = 2$

- $F_n = F_{n-1} + F_{n-2}$ for $n \geq 3$

**General Formula:**

$$F_n = \frac{1}{\sqrt{5}} \left( \left( \frac{1 + \sqrt{5}}{2} \right)^{n+1} - \left( \frac{1 - \sqrt{5}}{2} \right)^{n+1} \right)$$

**Sequence:** 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

**Applications:**

- Climbing stairs problem (steps of 1 or 2)

- Modeling growth patterns

### Catalan Numbers

> [!info] Definition
> Count various combinatorial structures, particularly paths that don't cross certain boundaries.

**Scenario:** n-second walks with equal up (U) and down (D) steps, never going below ground level.

**Recurrence Relation:**

$$c_{n+1} = \sum_{k=0}^{n} c_k c_{n-k}$$

**General Formula:**

$$c_n = \frac{1}{n+1} \binom{2n}{n} = \frac{(2n)!}{(n+1)!n!}$$

**Sequence:** 1, 1, 2, 5, 14, 42, 132, 429, 1430, ...

---

## Chapter 2: Sets

### Basic Definitions

> [!info] Set
> A well-defined collection of objects called elements.

**Notation:**

- $x \in A$: x is an element of set A

- $x \notin A$: x is not an element of set A

- $|A|$: cardinality (number of elements) of A

### Set Relationships

**Subset:** $A \subseteq B$ means every element of A is in B

**Power Set:** $P(A)$ = set of all subsets of A

- If $|A| = n$, then $|P(A)| = 2^n$

### Set Operations

**Union:** $A \cup B = \{x : x \in A \text{ or } x \in B\}$

**Intersection:** $A \cap B = \{x : x \in A \text{ and } x \in B\}$

**Difference:** $A \setminus B = \{x : x \in A \text{ but } x \notin B\}$

### Set Identities

- $A \cup A = A$ (Idempotent)

- $A \cup \emptyset = A$ (Identity)

- $A \cap A = A$ (Idempotent)

- $A \cap \emptyset = \emptyset$ (Domination)

### De Morgan's Laws

- $A \setminus (B \cup C) = (A \setminus B) \cap (A \setminus C)$

- $A \setminus (B \cap C) = (A \setminus B) \cup (A \setminus C)$

### Famous Paradoxes

**Russell's Paradox:** Consider $X = \{A : A \notin A\}$. Is $X \in X$?

**Barber's Paradox:** A barber shaves all men who don't shave themselves. Does he shave himself?

---

## Chapter 3: Functions

### Definition

> [!info] Function
> A rule $f: A \rightarrow B$ that assigns to each element of A exactly one element of B.

**Components:**

- **Domain:** Set A (input set)

- **Codomain:** Set B (output set) Â 

- **Range:** $\{f(a) : a \in A\}$ (actual outputs)

### Types of Functions

**Injective (One-to-One):**

- Different inputs â†’ different outputs

- If $x \neq y$, then $f(x) \neq f(y)$

- $|A| \leq |B|$

**Surjective (Onto):**

- Every element of B is an output

- Range = Codomain

- $|A| \geq |B|$

**Bijective:**

- Both injective and surjective

- $|A| = |B|$

- Has an inverse function

### Function Composition

$(g \circ f)(x) = g(f(x))$

### Inverse Functions

$f: A \rightarrow B$ is invertible if $\exists g: B \rightarrow A$ such that:

- $g \circ f = \text{id}_A$

- $f \circ g = \text{id}_B$

### Pigeonhole Principle

> [!important] Pigeonhole Principle
> If n pigeons are placed in k pigeonholes with n > k, then at least one pigeonhole contains more than one pigeon.

---

## Chapter 4: Counting Principles

### Addition Principle

If tasks can be done in m or n ways (mutually exclusive), total ways = m + n

### Multiplication Principle Â 

If task 1 has m ways and task 2 has n ways (independent), total ways = m Ã— n

### Inclusion-Exclusion Principle

**Two Sets:**

$$|A \cup B| = |A| + |B| - |A \cap B|$$

**Three Sets:**

$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$$

### Cartesian Product

$A \times B = \{(a,b) : a \in A, b \in B\}$

If $|A| = m$ and $|B| = n$, then $|A \times B| = mn$

### Ordered Selections

**With Repetition:** $n^k$ ways to select k items from n

**Without Repetition:** $\frac{n!}{(n-k)!} = {}_nP_k$ ways

### Permutations

Number of ways to arrange n distinct objects: $n!$

---

## Chapter 5: Unordered Selections & Binomial Coefficients

### Binomial Coefficients

> [!info] Definition
> $$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$
> Read as "n choose k"

**Interpretation:** Number of ways to choose k objects from n objects (order doesn't matter)

### Unordered Selection Counts

- **Without Repetition:** $\binom{n}{k}$

- **With Repetition:** $\binom{n+k-1}{k}$

### Pascal's Triangle

Each entry is the sum of the two entries above it:

$$\binom{n+1}{k} = \binom{n}{k-1} + \binom{n}{k}$$

### Binomial Theorem

$$(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^k y^{n-k}$$

### Key Identities

- $\binom{n}{0} = \binom{n}{n} = 1$

- $\binom{n}{k} = \binom{n}{n-k}$

- $\sum_{k=0}^{n} \binom{n}{k} = 2^n$

---

## Chapter 6: Inclusion-Exclusion & Multinomial Coefficients

### General Inclusion-Exclusion

For n sets, alternate between adding individual sets, subtracting pairwise intersections, adding triple intersections, etc.

### Derangements

> [!info] Derangement
> A permutation where no element appears in its original position.

**Formula:**

$$d(n) = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!}$$

**Approximation:** $d(n) \approx \frac{n!}{e}$

### Multinomial Coefficients

$$\binom{n}{k_1, k_2, \ldots, k_m} = \frac{n!}{k_1! k_2! \cdots k_m!}$$

where $k_1 + k_2 + \cdots + k_m = n$

### Multinomial Theorem

$$(x_1 + x_2 + \cdots + x_m)^n = \sum \binom{n}{k_1, k_2, \ldots, k_m} x_1^{k_1} x_2^{k_2} \cdots x_m^{k_m}$$

---

## Chapter 7: Boolean Expressions & Karnaugh Maps

### Boolean Functions

Functions mapping $\{0,1\}^n \rightarrow \{0,1\}$

**Number of Boolean functions on n variables:** $2^{2^n}$

### Boolean Operations

- **AND ($\land$):** True only when both inputs are true

- **OR ($\lor$):** True when at least one input is true Â 

- **NOT ($\neg$):** Flips the truth value

### Boolean Identities

- $x \lor 1 = 1$

- $x \land 0 = 0$

- $x \lor x' = 1$

- $x \land x' = 0$

### De Morgan's Laws (Boolean)

- $(f \lor g)' = f' \land g'$

- $(f \land g)' = f' \lor g'$

### Karnaugh Maps

Visual method for simplifying Boolean expressions:

1. Create grid for all variable combinations

2. Fill with function outputs

3. Group adjacent 1's in powers of 2

4. Write simplified expression

---

## Chapter 8: Logic

### Propositions

> [!info] Proposition
> A statement that is either True (T) or False (F).

### Logical Connectives

| Connective | Symbol | Name | Truth Condition |

|------------|--------|------|-----------------|

| Conjunction | $\land$ | AND | Both true |

| Disjunction | $\lor$ | OR | At least one true |

| Negation | $\sim$ | NOT | Opposite truth value |

| Implication | $\Rightarrow$ | IF-THEN | False only when antecedent true and consequent false |

| Biconditional | $\Leftrightarrow$ | IFF | Same truth values |

### Truth Tables

**Implication ($p \Rightarrow q$):**

| p | q | $p \Rightarrow q$ |

|---|---|---|

| T | T | T |

| T | F | F |

| F | T | T |

| F | F | T |

### Logical Equivalences

- $p \Rightarrow q \equiv \sim p \lor q$

- $p \Leftrightarrow q \equiv (p \Rightarrow q) \land (q \Rightarrow p)$

### De Morgan's Laws (Logic)

- $\sim(p \lor q) \equiv \sim p \land \sim q$

- $\sim(p \land q) \equiv \sim p \lor \sim q$

### Quantifiers

- **Universal ($\forall$):** "for all"

- **Existential ($\exists$):** "there exists"

**Negation of Quantifiers:**

- $\sim(\forall x)P(x) \equiv (\exists x)\sim P(x)$

- $\sim(\exists x)P(x) \equiv (\forall x)\sim P(x)$

---

## Chapter 9: Number Theory

### Division Algorithm

For integers $a, b$ with $b > 0$, there exist unique integers $q, r$ such that:

$$a = qb + r \quad (0 \leq r < b)$$

### Divisibility

$a | b$ means "a divides b" (i.e., $b = ka$ for some integer $k$)

### Greatest Common Divisor

$\gcd(a,b)$ is the largest positive integer that divides both $a$ and $b$

### Euclidean Algorithm

To find $\gcd(a,b)$:

1. $a = q_1b + r_1$

2. $b = q_2r_1 + r_2$ Â 

3. $r_1 = q_3r_2 + r_3$

4. Continue until remainder is 0

5. Last non-zero remainder is $\gcd(a,b)$

### Modular Arithmetic

$a \equiv b \pmod{n}$ means $n | (a-b)$

**Properties:**

- If $a \equiv b \pmod{n}$ and $c \equiv d \pmod{n}$, then:

Â  - $a + c \equiv b + d \pmod{n}$

Â  - $ac \equiv bd \pmod{n}$

### Prime Numbers

> [!info] Prime Number
> An integer $p \geq 2$ whose only positive divisors are 1 and $p$.

### Fundamental Theorem of Arithmetic

Every integer $n \geq 2$ can be expressed uniquely as a product of primes.

### Rational Numbers

$\mathbb{Q} = \{\frac{a}{b} : a,b \in \mathbb{Z}, b \neq 0\}$

**Properties:**

- Closed under addition, subtraction, multiplication, division (by non-zero)

- Dense in real numbers

- Countably infinite: $|\mathbb{Q}| = |\mathbb{N}|$

---

## Chapter 10: Induction & Recursion

### Mathematical Induction

> [!important] Principle of Mathematical Induction
> To prove $P(n)$ for all $n \geq k$:
>
> 1. **Base Case:** Prove $P(k)$ is true
>
> 2. **Inductive Step:** Prove $P(n) \Rightarrow P(n+1)$

### Strong Induction

To prove $P(n)$ for all $n \geq k$:

1. **Base Case:** Prove $P(k)$ is true

2. **Inductive Step:** Assume $P(k), P(k+1), \ldots, P(n)$ and prove $P(n+1)$

### Recursive Sequences

Defined by:

- Initial conditions

- Recurrence relation

**Example:** Fibonacci sequence

- $F_1 = 1, F_2 = 1$

- $F_n = F_{n-1} + F_{n-2}$ for $n \geq 3$

### Well-Ordering Principle

Every non-empty set of positive integers has a smallest element.

### Applications of Induction

- Proving formulas (e.g., $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$)

- Proving divisibility properties

- Proving inequalities

- Analyzing recursive algorithms

---

## Chapter 11: Graph Theory

### Basic Definitions

> [!info] Graph
> A graph $G = (V,E)$ consists of:
>
> - $V$: set of vertices (nodes)
>
> - $E$: set of edges connecting vertices

**Types of Edges:**

- **Loop:** Edge from vertex to itself

- **Parallel Edges:** Multiple edges between same vertices

- **Simple Graph:** No loops or parallel edges

### Degree of a Vertex

$\deg(v)$ = number of edges incident to vertex $v$

**Handshaking Lemma:**

$$\sum_{v \in V} \deg(v) = 2|E|$$

### Walks, Paths, and Circuits

- **Walk:** Sequence of vertices connected by edges

- **Path:** Walk with no repeated edges

- **Circuit:** Path that starts and ends at same vertex

- **Simple Path:** No repeated vertices (except possibly first and last)

### Euler Paths and Circuits

- **Euler Path:** Uses every edge exactly once

- **Euler Circuit:** Euler path that returns to starting vertex

### Euler's Theorems

> [!important] Euler's Theorems
> For a connected graph:
>
> - Has Euler circuit âŸº all vertices have even degree
>
> - Has Euler path âŸº exactly 0 or 2 vertices have odd degree

### Trees

> [!info] Tree
> A connected graph with no circuits.

**Properties of Trees:**

- If $|V| = n$, then $|E| = n-1$

- Any two vertices connected by exactly one path

- Removing any edge disconnects the graph

- Adding any edge creates exactly one circuit

### Spanning Trees

A subgraph that:

- Includes all vertices

- Is a tree (connected, no circuits)

- Has minimum number of edges to stay connected

### Kruskal's Algorithm

To find minimum spanning tree:

1. Start with all vertices, no edges

2. Add cheapest edge that doesn't create circuit

3. Repeat until tree is complete

### Applications of Graph Theory

- Social networks

- Computer networks Â 

- Transportation systems

- Circuit design

- Scheduling problems

---

## Summary of Key Formulas

### Counting

- Permutations: $P(n,k) = \frac{n!}{(n-k)!}$

- Combinations: $C(n,k) = \binom{n}{k} = \frac{n!}{k!(n-k)!}$

- Inclusion-Exclusion: $|A \cup B| = |A| + |B| - |A \cap B|$

### Special Numbers

- Fibonacci: $F_n = F_{n-1} + F_{n-2}$

- Catalan: $c_n = \frac{1}{n+1}\binom{2n}{n}$

- Derangements: $d_n \approx \frac{n!}{e}$

### Number Theory

- Division Algorithm: $a = qb + r$, $0 \leq r < b$

- Euclidean Algorithm for $\gcd(a,b)$

- Modular arithmetic: $a \equiv b \pmod{n}$

### Graph Theory

- Handshaking Lemma: $\sum \deg(v) = 2|E|$

- Trees: $|E| = |V| - 1$