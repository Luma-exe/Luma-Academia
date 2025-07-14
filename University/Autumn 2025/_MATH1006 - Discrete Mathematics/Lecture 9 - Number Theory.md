
> [!faq] About this Lecture
> Class: MATH1006
> Subject: #discreteMathematics 
> Topics: #math/discreteMathematics 
> Date: 2025-05-20 at 21:44

## Logic Overview

- **Definition of Predicate**: A predicate is a statement that would be a proposition except it contains one or more variables.
    - Examples:
        - $x = 5$
        - $x + y = 7$
        - $a^2 + b^2 = c^2$
        - $x^2 = 4 \Rightarrow x = 2$
        - $x^2 \geq 0$

## Quantifiers

- **Universal Quantifier**: $∀$ — read as "for all", "for every".
    
    - Example: $(∀ x ∈ Z) , x > 4$ is a universally quantified proposition.
- **Existential Quantifier**: $∃$ — read as "for some", "there exists".
    
    - Example: $(∃ x ∈ Z) , x > 4$ is an existentially quantified proposition.

## Examples of Quantified Propositions

- $(∀ x ∈ R), x^2 \geq 0$: True statement about squares of real numbers.
- $(∃ x ∈ R), x^2 \geq 0$: True since some real numbers are zero or positive.

## Truth Evaluation of Propositions

- To prove a universally quantified proposition, demonstrate it holds for all variables.
- To disprove, provide a single counterexample.

## Multiple Quantifiers

- For predicates with more variables, multiple quantifiers are needed.
    - Example: $x + y = 4$ can be expressed as:
        - $(∃ y ∈ Z)(∃ x ∈ Z) , x + y = 4$
- The order of quantifiers matters, e.g., $(∀ x)(∃ y) , x + y = 4$ vs. $(∃ y)(∀ x) , x + y = 4$.

## Negation of Quantified Propositions

- Negation of universal quantifier: $\sim (∀ x) P(x) \equiv (∃ x) \sim P(x)$.
- Negation of existential quantifier: $\sim (∃ x) P(x) \equiv (∀ x) \sim P(x)$.

## Number Theory Basics

- **Definition**: The study of integers' properties and relationships.
- **Division Algorithm**: For integers $a$, $b$ (with $b > 0$), there exist unique integers $q$, $r$ such that: $a = qb + r \quad (0 \leq r < b)$

## Divisibility and Common Divisors

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/JUzYl1TYMcU" frameborder="0" allowfullscreen></iframe>
</div>

- **Divisibility**: We write $a | b$ if $a$ divides $b$.
- **Greatest Common Divisor (gcd)**: Largest integer $d$ such that $d | a$ and $d | b$, denoted as $\text{gcd}(a, b)$.

## Euclidean Algorithm

- Method to find $\text{gcd}(a,b)$ based on the relation: $\text{gcd}(a, b) = \text{gcd}(b, r)$, where $r$ is the remainder of the division of $a$ by $b$.

## Modular Arithmetic

- **Definition**: We say $a ≡ b ,(\text{mod } n)$ if $n | (a - b)$.
- Practical Example: $51 ≡ 3 ,(\text{mod } 12)$.

## Prime Numbers and Fundamental Theorem of Arithmetic

- **Definition**: An integer $p ≥ 2$ is prime if its only positive divisors are 1 and $p$.
- **Fundamental Theorem**: Every integer (n ≥ 2) can be expressed uniquely as a product of primes.

## Exercises Overview

- Evaluating quantifier logic and demonstrating examples of propositional truth.
- Applying the Euclidean algorithm to find gcd.
- Understanding modular arithmetic and performing calculations based on it.

Each section builds on previous knowledge, emphasizing the relationships between logic, number properties, and proofs necessary for understanding discrete mathematics comprehensively.