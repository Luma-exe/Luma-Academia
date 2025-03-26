
> [!faq] About this Lecture
> Class: MATH1006
> Subject: #discreteMathematics 
> Topics: #math/discreteMathematics 
> Date: 2025-03-27 at 10:27

## Lecture Outline

- Functions
- Injective and surjective functions
- Pigeonhole principle
- Bijections
- Compositions and inverses
- Addition and multiplication principles
- Inclusion-Exclusion
- Counting functions
- Ordered selections
- Permutations

---

## Chapter 4: Counting Principles

### Counting Problem 1

- Let $A = { \text{students in this room} }$
- Let $B = { \text{laptops in this room} }$
- Find $| A \cup B |$

### Counting Problem 2

- Let $X = { x \in \mathbb{N} : 1 \leq x \leq 100 }$
- Let $A = { x \in X : x \text{ is even} }$
- Let $B = { x \in X : x \text{ is divisible by 3} }$
- Find $| A \cup B |$

---

## Inclusion-Exclusion Principle

- For two sets $A$ and $B$:
    - $| A \cup B | = | A | + | B | - | A \cap B |$
- Explanation:
    - Adding $| A |$ and $| B |$ counts elements in $A \cap B$ twice.

---

## Disjoint Sets

- If $A$ and $B$ are disjoint, then:
    - $| A \cup B | = | A | + | B |$
    - Example: $A \cap B = \emptyset$

### Exercises

- Menu selection: 8 pizzas and 5 pasta dishes = $| A \cup B | = 8 + 5 = 13$ ways.
- Class of 100 students: 67 play guitar, 34 play piano, 30 play both.
    - Calculate how many play neither.

---

## Counting with Combinations

### Counting Problem 3

- 3 shirts ($S_1$, $S_2$, $S_3$) and 4 ties ($T_1$, $T_2$, $T_3$, $T_4$)
- Total combinations:
    - $3 \times 4 = 12$

---

## Multiplication Principle

- If there are two independent tasks:
    - Task 1 has $m$ ways.
    - Task 2 has $n$ ways.
    - Total ways: $m \times n$.

### Exercises

- Number plates with one letter followed by one digit.
- Number plates with three letters followed by three digits.

---

## Cartesian Product

### Definition

- The Cartesian product of two sets $A$ and $B$:
    - $A \times B = { (a, b) \mid a \in A, b \in B }$.

### Properties

- If $|A| = m$ and $|B| = n$, then $|A \times B| = m \times n$.
- Can extend to more than two sets.

---

## Ordered Selections

### Theorem

- For sets $A$ and $B$ where $|A| = m$ and $|B| = n$, the number of functions $A \to B$:
    - $|B|^m = n^m$

### Permutations

- A permutation of a set $A$ is a bijection $A \to A$.
- Number of permutations if $|A| = n$:
    - $n!$

### Exercises

- Count permutations for various sets: {1}, {1,2}, {1,2,3}, {1,2,3,4}, etc.
- Alternative definition: A permutation can also refer to an ordered list of elements.

---

## Additional Considerations

### Surjective Functions

- If $|A| = |B| < \infty$, any injective function $A \to B$ is also surjective.
- Example questions on counting bijections and surjective functions.
