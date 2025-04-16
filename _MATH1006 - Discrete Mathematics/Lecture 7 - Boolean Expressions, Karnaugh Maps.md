
> [!faq] About this Lecture
> Class: MATH1006
> Subject: #discreteMathematics 
> Topics: #math/discreteMathematics 
> Date: 2025-04-16 at 11:24

## Boolean Expressions

### Introduction to Boolean Functions

- Boolean functions operate on binary values: 0/1, True/False, Yes/No.
- Example context: Wearing a jacket based on weather conditions.
    - Questions:
        - Is it cold? (represented by $x$)
        - Am I going outside? (represented by $y$)
        - Is it raining? (represented by $z$)

### Defining Boolean Function

- Function representation: $f(x, y, z)$ maps answers to the jacket question based on the values of $x$, $y$, $z$.
- Outputs for combinations of inputs can be expressed in a truth table.

### Function Table for Jacket Decision

|$x$|$y$|$z$|$f(x, y, z)$|
|---|---|---|---|
|1|1|1|1|
|1|1|0|1|
|1|0|1|0|
|1|0|0|1|
|0|1|1|1|
|0|1|0|0|
|0|0|1|1|
|0|0|0|0|

### Definition of a Boolean Function

- A Boolean function is defined as:
    - $f: S^n \to S$, where $S = {0, 1}$.

### Number of Boolean Functions

- For a set of size $n$, the total number of Boolean functions is $2^{2^n}$.
    - Examples:
        - For $S^2$: $2^{2^2} = 2^4 = 16$
        - For $S^3$: $2^{2^3} = 2^8 = 256$

## Switching Circuits

- Example: Three switches $x$, $y$, $z$ controlling a circuit.
- Boolean function $f(x, y, z)$ defines if electricity flows based on the states of the switches.

### Representation of Circuit Functions

- Function table for $f(x, y, z)$ based on combinations:
    
    |$x$|$y$|$z$|$f(x, y, z)$|
    |---|---|---|---|
    |1|1|1|1|
    |1|1|0|1|
    |1|0|1|0|
    |1|0|0|1|
    |0|1|1|1|
    |0|1|0|0|
    |0|0|1|1|
    |0|0|0|0|
    

### Logical Operations

- Electricity flows based on logical conditions:
    - Flow condition: $x \lor (y \land z)$
        - Where $\lor$ represents "or" and $\land$ represents "and".

## Boolean Expressions and Identities

### Definition of Boolean Expressions

- Composed of:
    - Constants: 0, 1
    - Variables: $x, y, z, a, b, \ldots$
    - Connectives: $\lor, \land, \neg$ (negation).

### Examples of Boolean Expressions

- Basic identities:
    - $x \lor 1 = 1$
    - $x \land 0 = 0$

### Boolean Identities

- Known identities include:
    - $f \lor f' = 1$
    - $f \land f' = 0$

### De Morgan's Laws

- Useful conversions:
    - $(f \lor g)' = f' \land g'$
    - $(f \land g)' = f' \lor g'$

## Karnaugh Maps

### Purpose of Karnaugh Maps

- Simplify Boolean functions and expressions visually.
- For function $f(x, y, z)$, construct a grid based on variable states.

### Constructing a Karnaugh Map

1. Create a grid with cells for every possible combination of variable states.
2. Fill out the grid based on the truth value output of the function.

### Example of Karnaugh Map

- Filling out a Karnaugh map for $f(x, y, z)$:
- Identify rectangular blocks of 1's and simplify using the common elements across the blocks.

### Simplification using Karnaugh Maps

- The simplification involves grouping the 1's in powers of two (1, 2, 4, 8, etc.).
- Each block corresponds to a term in the final Boolean expression.

### Example Function Simplification

- For function outputs like $1, 0, 1, \ldots$, determine the resulting expression:
    - Example results in generating a simplified function $f(x, y, z) = x \lor yz$.

