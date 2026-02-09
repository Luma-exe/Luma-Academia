
> [!faq] About this Lecture
> Class: MATH1006
> Subject: #discreteMathematics 
> Topics: #math/discreteMathematics 
> Date: 2025-06-05 at 11:00

## Rational Numbers

### Definition

- A rational number is expressed as a fraction:
    - Form: $\frac{a}{b}$ where $a, b \in \mathbb{Z}$ and $b \neq 0$.
    - Set of all rational numbers: $Q = {\frac{a}{b} : a, b \in \mathbb{Z}, b \neq 0}$
    - Notation: $Q$ represents Quotient.
    - Examples:
        - $\frac{7}{3}, \frac{5}{113}, -\frac{6}{2} = -3, 3^{-1} = -3$

### Basic Facts about Rational Numbers

- If $x, y \in Q$, then:
    - 1. $x + y \in Q$
    - 2. $x - y \in Q$
    - 3. $x \times y \in Q$
    - 4. $x \div y \in Q$ if $y \neq 0$.

### Proof of Basic Facts

- **Proof for $x + y \in Q$:**
    - Let $x = \frac{a}{b}$ and $y = \frac{c}{d}$, where $b, d \neq 0$.
    - $x + y = \frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd} \in Q$ (where $ad + bc \in \mathbb{Z}$ and $bd \neq 0$).

## Considerations on Rationality

### Question 1

- Can $xy \in Q$ for $x, y \in Q$?
    - **Answer**: No, as shown with $\sqrt{2} \in \mathbb{R}$ being an irrational number.

### Question 2

- Are there irrational $x, y$ such that $xy$ is rational?

### Question 3

- Logical puzzle involving relationships:
    - **Scenario**: Anne looks at Bill, who looks at Cathy. Anne is married; Cathy is unmarried. Is a married person looking at an unmarried person?

## Properties of the Real Number Line

- **Density of Rational Numbers**:
    - There are infinitely many rational numbers between any two integers and between any two rational numbers.
- Some real numbers are irrational (not rational).

### Theorems on Irrationality

- $\pi$ is irrational.
- $e$ is irrational.
- **Interesting Fact**: At least one of $e + \pi$ or $e \times \pi$ is irrational, but which one is uncertain.

## Cardinality of Sets

### Key Findings

1. $|Q| = |Z|$: Bijection exists.
2. $|Q| < |R|$: No bijection exists between Q and R.
3. $|N| = |Z|$: Bijection between natural and integers can be defined:
    - $f(n) = 0, 1, -1, 2, -2, ...$

### Proof for Countability

- Arrange positive rational numbers in a specific sequence:
    - Example of distinct values arranged by increasing denominators and eliminating duplicates.

### Conclusion on Infinite Sets

- $|R|$ is a larger infinity than $|N|$.
- Show that $|N| < |R|$ through contradiction by assuming bijection and leading to a contradiction.

## Recursion and Induction

### Sequences

- A sequence is a list of elements:
    - Examples: Fibonacci sequence, Catalan numbers, prime numbers, etc.
- Sequences can be defined directly (via formula) or recursively.

### Defining Sequences Recursively

- For example, for $a_n$ defined recursively as:
    - $a_0 = 1, a_n = 2a_{n-1}$.

### Principle of Mathematical Induction

- **Basic Idea**:
    - To prove $S(n)$ is true for all $n \ge k$:
        1. Show $S(k)$ is true.
        2. Show $S(n) \Rightarrow S(n+1)$ holds.

### Exercises

- Various exercises involve computing terms of specified sequences and proving properties using induction.

### Theorem Example

- **Everyone is called Charles**:
    - Induction proof shows that in any group of people, they all have the same name.

## Summary of Proof Techniques

- Use of induction to prove properties or identities related to sequences, and exploring the properties of infinite sets to illustrate the relationships between rationals and reals.

---

This summary provides an extensive overview of the lecture's content, focusing on the definition and properties of rational numbers, foundational theorems in number theory, along with important concepts in recursion and induction in discrete mathematics.