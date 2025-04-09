
> [!faq] About this Lecture
> Class: MATH1006
> Subject: #discreteMathematics 
> Topics: #math/discreteMathematics 
> Date: 2025-04-09 at 13:41

## Lecture Outline

- Last Week
    - Unordered selections
    - Binomial coefficients
    - Binomial identities/recurrences
- This Week
    - Binomial theorem
    - Inclusion-exclusion revisited
    - Multinomial coefficients
    - Multinomial theorem

## Chapter 6: Unordered Selections

### Expansions of Binomials

- Expand $(x + y)^n$ for small values of $n$:
    - $(x + y)^0 = 1$
    - $(x + y)^1 = x + y$
    - $(x + y)^2 = x^2 + 2xy + y^2$
    - $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$
    - $(x + y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4$
    - $(x + y)^5 = x^5 + 5x^4y + 10x^3y^2 + 10x^2y^3 + 5xy^4 + y^5$

### Notable Observations

- The coefficients from the expansions resemble those in **Pascal’s Triangle**.

### Binomial Theorem

- **Definition**: If $x, y \in \mathbb{R}$ and $n \in \mathbb{N}$, then: $$ (x + y)^n = \sum_{i=0}^{n} \binom{n}{i} x^i y^{n-i} $$
- Example Derivation:
    - For $n = 3$: $$ (x + y)^3 = \sum_{i=0}^{3} \binom{3}{i} x^i y^{3-i} = y^3 + 3xy^2 + 3x^2y + x^3 $$

### Proof of Binomial Theorem

- **Counting-based Argument**:
    - Each term $x^i y^{n-i}$ corresponds to choosing $i$ instances of $x$ from $n$ factors of $(x + y)$, suggesting a coefficient of $\binom{n}{i}$.

### Coefficients and Identifications

- Coefficients of expansions match entries in **Pascal’s Triangle**:
    - This can be used to identify combinatorial properties.

## Chapter 7: The Inclusion-Exclusion Principle

### Principle for Two Sets

- For two sets $A$, $B$: $$ | A \cup B | = | A | + | B | - | A \cap B | $$

### Principle for Three Sets

- For three sets $A$, $B$, $C$: $$ | A \cup B \cup C | = | A | + | B | + | C | - | A \cap B | - | A \cap C | - | B \cap C | + | A \cap B \cap C | $$

### Application Example

- **Language Example**: In a group of 15 people:
    - Languages M, J, A with overlaps given
    - Apply inclusion-exclusion to find those who speak none of the languages.

### Inclusion-Exclusion for Four Sets

- For four sets: $$ | A \cup B \cup C \cup D | = | A | + | B | + | C | + | D | - (\text{pairwise intersections}) + (\text{triple intersections}) - | A \cap B \cap C \cap D | $$

### Derangements

- Definition: A derangement is a permutation where $f(i) \neq i$ for all $i$.
    
- **Counting Derangements**: $$ d(n) = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!} $$
    
- Approximation: The number of derangements is approximately the closest integer to $\frac{n!}{e}$.
    

### Proof of Derangement Counting

- Use inclusion-exclusion on permutations fixing elements.

## Chapter 8: Multinomial Coefficients

### Introduction to Multinomial Coefficients

- **Definition**: Given $k_1, k_2, \ldots, k_m \in \mathbb{N}$ such that $k_1 + k_2 + \ldots + k_m = n$: $$ \binom{n}{k_1, k_2, \ldots, k_m} = \frac{n!}{k_1! k_2! \cdots k_m!} $$

### Inclusion-Exclusion and Multinomial Theorem

- Multinomial Theorem:
    - If $m$, $n \in \mathbb{N}$: $$ (x_1 + x_2 + \ldots + x_m)^n = \sum \binom{n}{k_1, k_2, \ldots, k_m} x_1^{k_1} x_2^{k_2} \cdots x_m^{k_m} $$

### Exercises and Applications

- Questions regarding arrangements of letters and derivations of multinomial coefficients.

### Conclusion

- The Binomial and Multinomial theorems serve as foundational components in combinatorial reasoning, enabling applications in counting, probability, and statistical interpretations. The Inclusion-Exclusion Principle is essential in computing precisely within set theory contexts.