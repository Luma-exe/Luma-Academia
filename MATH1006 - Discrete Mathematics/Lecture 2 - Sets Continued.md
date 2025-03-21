
> [!faq] About this Lecture
> Class: MATH1006
> Subject: #discreteMathematics
> Date: 21/02/2025 at ~11:00AM
> Topics: #math

## Chapter 2: Sets

### Barber’s Paradox

- A town barber shaves all men who do not shave themselves.
- Question: Does the barber shave himself?

### Russell’s Paradox

- Some sets have sets as elements, e.g., ${ \emptyset, { a }, { b }, { a, b } }$.
- Consider the set $X = { A : A \not\in A }$. Is $X$ an element of itself?

### Foundations of Set Theory

- Avoiding paradoxes requires an axiomatic approach.
- Use the intuitive definition of sets.

### Definition of a Set

- A _set_ is a well-defined collection of objects.
- Elements of a set:
    - $x \in A$: "x is an element of set A"
    - $A \subseteq B$: "A is a subset of B" (every element of A is an element of B)

### Examples

- Let:
    - $A = { 1, 2, 3 }$
    - $B = { 3, 4, 5, 6, 7 }$
    - $C = { 1, 2, 3, 4, 5 }$
    - $D = { 4, 5, 6, 7 }$
- Relationships:
    - $1 \in A$, $1 \not\in B \rightarrow A \not\subseteq B$
    - $A \subseteq C$, $D \subseteq B$
    - Cardinalities: $|A| = 3$, $|B| = |C| = 5$, $|D| = 4$

## Set Operations

### Union of Sets

- Definition: The union of two sets $A$ and $B$ is  
    $$A \cup B = { x : x \in A \text{ or } x \in B }$$
- Example:
    - $A \cup B = { 1, 2, 3, 4, 5, 6, 7 }$
    - Note: $A \cup C = C$ because $A \subseteq C$.

### Intersection of Sets

- Definition: The intersection of two sets $A$ and $B$ is  
    $$A \cap B = { x : x \in A \text{ and } x \in B }$$
- Example:
    - $A \cap B = { 3 }$, $A \cap D = \emptyset$, $A \cap C = A$.

### Venn Diagrams

- Used to visualize relationships between sets.
- Example with sets $A$ and $B$:
    - $A$ and $B$ can be represented with overlapping circles.

## Operations with Complements

- Definition: The complement of $B$ in $A$ is represented as  
    $$A \setminus B = { x : x \in A \text{ but } x \notin B }$$
- Note: $A \setminus B \neq B \setminus A$ in general.

## Algebra of Sets

- Set identities to remember:
    - $A \cup A = A$
    - $A \cup \emptyset = A$
    - $A \cap A = A$
    - $A \cap \emptyset = \emptyset$

### De Morgan’s Laws

- Important identities:
    - $A \setminus (B \cup C) = (A \setminus B) \cap (A \setminus C)$
    - $A \setminus (B \cap C) = (A \setminus B) \cup (A \setminus C)$