
> [!faq] About this Lecture
> Class: MATH1006
> Subject: #discreteMathematics 
> Date: 2025-03-21 at 12:05
> Topics: #math

## Chapter 3: Functions

### Definition of a Function

- A function is a rule that transforms elements of one set into elements of another.
- Let $A$ and $B$ be sets.
- A function $f : A \rightarrow B$ assigns to each element of $A$ a unique element of $B$.
- Notation:
    - For $a \in A$, we write $f(a)$ for the unique element of $B$ assigned to $a$.
- Definitions:
    - Domain: The first set, $A$.
    - Codomain: The second set, $B$.

### Function as a Black Box

- Inputs are elements from the domain $A$.
- Outputs are elements from the codomain $B$.
- If input is $a$, output is $f(a)$.

### Example of a Function

- Consider the function $f : \mathbb{Z} \rightarrow \mathbb{Z}$, defined by $f(a) = a^2$.
    - Domain: $\mathbb{Z}$
    - Codomain: $\mathbb{Z}$
    - Outputs:
        - $f(0) = 0^2 = 0$
        - $f(1) = 1^2 = 1$
        - $f(2) = 2^2 = 4$
        - $f(-2) = (-2)^2 = 4$

### Range of a Function

- Definition: The range of a function $f : A \rightarrow B$ is the set of actual outputs.
- Notation: ${b \in B : b = f(a) \text{ for some } a \in A} = {f(a) : a \in A}$.

### Arrow Diagram Representation

- For small sets, functions can be represented by an arrow diagram.
- Example with $A = {a, b, c, d}$ and $B = {1, 2, 3, 4, 5}$:
    - $f(a) = 2, f(b) = 1, f(c) = 5, f(d) = 5$.
- Range of the function can be identified as the set of output elements.

## Pigeonhole Principle

- If there are $n$ pigeons and $k$ pigeonholes with $n > k$, then at least one pigeonhole contains multiple pigeons.

### Injective and Surjective Functions
#### Definition of Injective Function

- Function $f : A \rightarrow B$ is injective (one-to-one) if different inputs map to different outputs:
    - If $x, y \in A$ and $x \neq y$, then $f(x) \neq f(y)$.

#### Definition of Surjective Function

- Function $f : A \rightarrow B$ is surjective (onto) if every element of $B$ is an actual output of $f$:
    - The range of $f$ is $B$.

#### Definition of Bijective Function

- Function $f : A \rightarrow B$ is bijective if it is both injective and surjective.

## Theorems

- If $f : A \rightarrow B$ is injective, then $|A| \leq |B|$.
- If $f : A \rightarrow B$ is surjective, then $|A| \geq |B|$.
- If $f : A \rightarrow B$ is bijective, then $|A| = |B|$.

## Compositions and Inverses
### Composition of Functions

- Two functions $f : A \rightarrow B$ and $g : B \rightarrow C$ can be composed:
    - $g \circ f : A \rightarrow C$, defined as $(g \circ f)(x) = g(f(x))$.

### Invertible Function

- A function $f : A \rightarrow B$ is invertible if there exists another function $g : B \rightarrow A$ such that:
    - $g \circ f = \text{id}_A$ and $f \circ g = \text{id}_B$.
- The function $g$ is called the inverse of $f$, noted as $g = f^{-1}$.

### Example of Invertibility

- Define $f : \mathbb{Z} \rightarrow \mathbb{Z}$ by $f(x) = x + 2$ and $g : \mathbb{Z} \rightarrow \mathbb{Z}$ by $g(x) = x - 2$.
    - Show $g = f^{-1}$.

### Important Note

- To show that $f : A \rightarrow B$ is invertible, both conditions $g \circ f = \text{id}_A$ and $f \circ g = \text{id}_B$ must be satisfied.



