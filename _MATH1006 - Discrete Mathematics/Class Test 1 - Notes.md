
> [!faq] About this Note
> Class: MATH1006
> Subject: #discreteMathematics 
> Topics: #math/discreteMathematics
> Date: 2025-04-09 at 14:15

**Contains content from Lecture 1 to Lecture 4**

## Chapter 1: Counting

### Problem 1: Fibonacci Numbers

- **Scenario**: Climbing a staircase with 10 stairs; steps can be 1 or 2 stairs.
- **Objective**: Calculate the number of ways to reach the top.
- **Representation**: Answer is represented as $F_n$ (n-th Fibonacci number).

### Fibonacci Sequence Definition

- Define as follows:
    - $F_1 = 1$
    - $F_2 = 2$
    - $F_3 = 3$
    - $F_4 = 5$
- Recursive relation:
    - $F_n = F_{n-1} + F_{n-2}$ for $n \geq 2$.

### Fibonacci Sequence Facts

- General formula: $$F_n = \frac{1}{\sqrt{5}} \left( \left( \frac{1 + \sqrt{5}}{2} \right)^{n+1} - \left( \frac{1 - \sqrt{5}}{2} \right)^{n+1} \right)$$
- First few terms:
    - 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

### Problem 2: Catalan Numbers

- **Scenario**: n-rung ladder with steps up (U) and down (D), starting and ending at ground level.
- **Objective**: Count the number of n-second walks denoted as $c_n$ (n-th Catalan number).

### Properties of Catalan Numbers

- Must have equal U's and D's.
- Condition: Never have more D's than U's at any point.

### Catalan Sequence Facts

- The sequence: 1, 1, 2, 5, 14, 42, 132, 429, 1430, …
- Recurrence relation: $$c_{n+1} = \sum_{k=0}^{n} c_k c_{n-k}$$

### Catalan Number Formula

- General formula: $$c_n = \frac{1}{n+1} \binom{2n}{n} = \frac{(2n)!}{(n+1)!n!}$$

## Chapter 2: Sets

### Definition of a Set

- A **set**: A well-defined collection of objects.
- Elements of a set:
    - If $x \in A$, then "$x$ is an element of set $A$".
    - Notation:
        - $x \notin A$: $x$ is not an element of set $A$.

### Examples of Sets

- Listing:
    - $A = {1, 2, 3}$
- Order and repetition are irrelevant.

### Cardinality

- **Definition**: The number of elements in a set, denoted as $|A|$.
- Examples:
    - $|A| = 3, |B| = 1000, |C| = 500, |D| = 994, |E| = 26, |F| = 7, |N| = \infty$

### Subsets and Power Sets

- **Subset**: $A \subseteq B$ means each element of $A$ is in $B$.
- **Power Set**: The set of all subsets of a set $A$ denoted as $P(A)$.

### Paradoxes in Set Theory

- **Barber’s Paradox**: Barber shaves all men who do not shave themselves. Question of self-shaving arises.
- **Russell’s Paradox**: Some sets have other sets as elements, leading to contradictions.

### Foundations of Set Theory

- Avoiding paradoxes requires an axiomatic approach.
- Use intuitive definition of sets.

## Set Operations

### Union of Sets

- Definition: $$A \cup B = { x : x \in A \text{ or } x \in B }$$
- Example:
    - $A = {1, 2, 3}, B = {3, 4, 5} \Rightarrow A \cup B = {1, 2, 3, 4, 5}$.

### Intersection of Sets

- Definition: $$A \cap B = { x : x \in A \text{ and } x \in B }$$
- Example:
    - $A \cap B = {3}$.

### Operations with Complements

- Definition: $$A \setminus B = { x : x \in A \text{ but } x \notin B }$$
- Note: $A \setminus B \neq B \setminus A$ in general.

### Algebra of Sets

- Set identities to remember:
    - $A \cup A = A$
    - $A \cap A = A$
    - $A \cup \emptyset = A$
    - $A \cap \emptyset = \emptyset$

### De Morgan’s Laws

- Important identities:
- $A \setminus (B \cup C) = (A \setminus B) \cap (A \setminus C)$
- $A \setminus (B \cap C) = (A \setminus B) \cup (A \setminus C)$

## Chapter 3: Functions

### Definition of a Function

- A function is a rule that transforms elements of one set into elements of another.
- Let $A$ and $B$ be sets. A function $f : A \rightarrow B$ assigns unique elements of $B$ to elements of $A$.
- **Notation**: For $a \in A$, write $f(a)$.

### Function as a Black Box

- Inputs are from the domain $A$.
- Outputs are elements from the codomain $B$.

### Example of a Function

- $f : \mathbb{Z} \rightarrow \mathbb{Z}, f(a) = a^2$.
- Outputs:
    - $f(0) = 0^2 = 0$
    - $f(1) = 1^2 = 1$

### Range of a Function

- Definition: $$\text{Range of } f = {b \in B : b = f(a) \text{ for some } a \in A}$$.

### Arrow Diagram Representation

- Functions represented visually by arrows connecting inputs to outputs.

### Pigeonhole Principle

- If there are $n$ pigeons and $k$ pigeonholes with $n > k$, at least one pigeonhole contains multiple pigeons.

### Injective and Surjective Functions

#### Definition of Injective Function

- $f : A \rightarrow B$ is injective if $f(x_1) = f(x_2)$ implies $x_1 = x_2$.

#### Definition of Surjective Function

- $f : A \rightarrow B$ is surjective if every element of $B$ is an output of $f$.

#### Definition of Bijective Function

- $f : A \rightarrow B$ is bijective if it is both injective and surjective.

### Theorems

- If $f : A \rightarrow B$ is injective, then $|A| \leq |B|$.
- If $f : A \rightarrow B$ is surjective, then $|A| \geq |B|$.
- If $f : A \rightarrow B$ is bijective, then $|A| = |B|$.

### Compositions and Inverses

#### Composition of Functions

- Two functions $f : A \rightarrow B$ and $g : B \rightarrow C$ give: $$g \circ f : A \rightarrow C, \text{ defined as } (g \circ f)(x) = g(f(x)).$$

#### Invertible Function

- A function $f : A \rightarrow B$ is invertible if there exists $g : B \rightarrow A$ such that:
    - $g \circ f = \text{id}_A$ and $f \circ g = \text{id}_B$.
- The function $g$ is noted as $g = f^{-1}$.

#### Example of Invertibility

- Function $f(x) = x + 2$ has an inverse $g(x) = x - 2$.

### Important Note

- To prove invertibility, demonstrate both $g \circ f = \text{id}_A$ and $f \circ g = \text{id}_B$.

## Chapter 4: Counting Principles

### Inclusion-Exclusion Principle

- For two sets $A$ and $B$: $$| A \cup B | = | A | + | B | - | A \cap B |$$
- Explanation: $| A |$ and $| B |$ count $| A \cap B |$ twice.

### Disjoint Sets

- If $A$ and $B$ are disjoint: $$| A \cup B | = | A | + | B |$$

### Counting with Combinations

- **Multiplication Principle**: If Task 1 has $m$ ways, and Task 2 has $n$ ways: $$\text{Total ways} = m \times n$$.

### Cartesian Product

- Definition: $$ A \times B = { (a, b) \mid a \in A, b \in B } $$.

### Ordered Selections

- Theorem for functions $A \to B$: $$ |B|^m = n^m $$, where $|A| = m$ and $|B| = n$.

### Permutations

- Number of permutations if $|A| = n$: $$ n! $$.

### Additional Considerations

- In the case where $|A| = |B| < \infty$, any injective function $A \to B$ is also surjective.


