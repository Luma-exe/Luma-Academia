
> [!faq] About this Lecture
> Class: MATH1006
> Subject: #discreteMathematics 
> Topics: #math/discreteMathematics 
> Date: 2025-04-09 at 13:38

## Overview

- Continuing from previous topics on:
    - Addition and multiplication principles
    - Inclusion-Exclusion
    - Counting functions
    - Ordered selections
    - Permutations
- Focus on:
    - Unordered selections
    - Binomial coefficients
    - Binomial identities/recurrences

## Chapter 6: Unordered Selections

### Counting Problems from Previous Lecture

- **Counting Problem 1**: Committee selection with different roles from 30 students.
    
    - **Roles**: President, Secretary, Treasurer
    - **Different Students**: Order matters.
- **Counting Problem 2**: Same roles but allowing students to take on multiple roles.
    
    - **Repetition Allowed**: Order matters.

### Ordered Selections

- **With Repetition**:
    
    - The number of ways to select $k$ things from $n$ is given by: $$ n^k $$
- **Without Repetition**:
    
    - The number of ways to select $k$ things from $n$ (order matters) is given by: $$ {}_nP_k = \frac{n!}{(n-k)!} $$

### Counting Problem 3: Unordered Selections of Committees

- Choosing 3 students from 30 where order does not matter.
    
- Initial over-count:
    
    - Using ordered selection: $30 \times 29 \times 28$.
- Adjustment for over-counting:
    
    - Each unique set of 3 students is counted $3!$ times.
- **Final Count**:
    
    - Total ways to form a committee is: $$ \frac{30 \times 29 \times 28}{3!} = 4060 $$

### Definition of Unordered Selection

- **Subset Without Repetition**:
    - An unordered selection of $k$ elements from set $A$ is a subset of size $k$.

### Binomial Coefficients

- **Definition**: $$ \binom{n}{k} = \frac{n!}{k!(n-k)!} $$
- Called "n choose k".

### Formula Derivation for Binomial Coefficient

- **Method 1**: Ordered selection without repetition.
- **Method 2**: Combination of unordered selection and ordering.

### Resulting Formula

- For unordered selections without repetition: $$ \binom{n}{k} = \frac{n!}{k!(n-k)!} $$

## Number of Subsets

- **Subsets of Size k**:
    - Number of $k$-element subsets of an $n$-element set is: $$ \binom{n}{k} $$

## Pascal’s Triangle

- **Constructing**:
    1. Start with 1's on the sides.
    2. Add adjacent numbers to derive new numbers below.

![[Pasted image 20250521031709.png]]

## Recurrence Relations for Binomial Coefficients

- Base case: $$ \binom{n}{0} = \binom{n}{n} = 1 \text{ for } n \geq 0 $$

- Recurrence relation: $$ \binom{n+1}{k} = \binom{n}{k-1} + \binom{n}{k} \text{ for } n \geq 0, 1 \leq k \leq n $$

## Counting Example

- **Committee Selection (Combinations)**:
    - Formulating committees of 3 from 100 students.
    - Total: $$ \binom{100}{3} $$

### Unordered Selections with Repetition

- With repetition allowed, the count is: $$ \binom{n+k-1}{k} $$

### Example Problem (Color Combinations)

- **Selecting 5 balls of different colors**:
    - How many combinations can be formed with:
        - 4 colors?
        - Other configurations as variations.

### Summary of Selection Counts

- Ordered vs Unordered and with/without repetition:
    - Ordered: $n^k$ (with), $\frac{n!}{(n-k)!}$ (without).
    - Unordered: $\binom{n+k-1}{k}$ (with), $\binom{n}{k}$ (without).

### Challenge Problem

- **Biscuits with Smarties**:
    - Calculate the different arrangements possible.

This lecture covers fundamental combinatorial principles related to unordered selections, setting the groundwork for understanding binomial coefficients and their applications in counting problems. The derivations and formulas provided will assist in solving a wide range of problems in discrete mathematics.
