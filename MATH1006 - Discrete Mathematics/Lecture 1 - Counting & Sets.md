
> [!faq] About this Lecture
> Class: MATH1006
> Subject: #discreteMathematics
> Date: 21/02/2025 at ~11:00AM
> Topics: #math

## Chapter 1: Counting

### Problem 1: Fibonacci Numbers

- **Scenario**: Climbing a staircase with 10 stairs; each step can be 1 or 2 stairs.
- **Objective**: Find ways to climb to the top.
- **Representation**: The answer is given as $F_n$ (n-th Fibonacci number).

### Fibonacci Sequence Definition

- $F_1 = 1$
- $F_2 = 2$
- $F_3 = 3$
- $F_4 = 5$
- Recursive relation:  
    $F_n = F_{n-1} + F_{n-2}$ for $n \geq 2$.

### Fibonacci Sequence Facts

- General formula:  
    $$F_n = \frac{1}{\sqrt{5}} \left( \left( \frac{1 + \sqrt{5}}{2} \right)^{n+1} - \left( \frac{1 - \sqrt{5}}{2} \right)^{n+1} \right)$$
- The first few terms: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

### Problem 2: Catalan Numbers

- **Scenario**: Consider an n-rung ladder with steps up (U) and down (D), starting and ending at ground level over n seconds.
- **Objective**: Determine the number of n-second walks denoted as $c_n$ (n-th Catalan number).

### Properties of Catalan Numbers

- Must maintain the condition of equal U's and D's.
- Must never have more D's than U's at any point.

### Catalan Sequence Facts

- The sequence: 1, 1, 2, 5, 14, 42, 132, 429, 1430, …
- Recurrence relation:  
    $$c_{n+1} = \sum_{k=0}^{n} c_k c_{n-k}$$

### Catalan Number Formula

- General formula:  
    $$c_n = \frac{1}{n+1} \binom{2n}{n} = \frac{(2n)!}{(n+1)!n!}$$

## Chapter 2: Sets

### Definition of a Set

- A **set**: A well-defined collection of objects.
- Elements of a set: If $x \in A$, then "$x$ is an element of set $A$".
- Notation includes:
    - $x \notin A$: $x$ is not an element of set $A$.

### Examples of Sets

- Listing: $A = {1, 2, 3}$
- Order and repetition are irrelevant.

### Cardinality

- **Definition**: The number of elements in a set, denoted as $|A|$.
- Examples:
    - $|A| = 3, |B| = 1000, |C| = 500, |D| = 994, |E| = 26, |F| = 7, |N| = \infty$

### Subsets and Power Sets

- **Subset**: $A \subseteq B$ means each element of $A$ is in $B$.
- **Power Set**: The set of all subsets of a set $A$ denoted as $P(A)$.