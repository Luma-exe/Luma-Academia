
> [!faq] About this Lecture
> Class: MATH1006
> Subject: #discreteMathematics 
> Topics: #math/discreteMathematics 
> Date: 2025-05-20 at 21:44

## Chapter 11: Logic

### Introduction to Propositions

- **Definition**: A proposition is a statement that is either True (T) or False (F).
- **Examples**:
    - True: $1 + 1 = 2$
    - False: $1 + 1 = 3$
- **Non-examples** (not propositions):
    - Questions: "Is it cold?"
    - Statements of opinion: "Kebabs are yummy."
    - Paradoxical statements: "This sentence is false."

### Compound Propositions and Connectives

- **Definition**: Compound propositions are formed using connectives.
- **Connectives**:
    - **Conjunction ($\land$)**: "and"
    - **Disjunction ($\lor$)**: "or"
    - **Negation ($\sim$)**: "not"
- **Examples**:
    - Let $p$: "2 + 2 = 4", $q$: "Earth's moon is red".
        - $p \land q$: "2 + 2 = 4 and Earth's moon is red."
        - $p \lor q$: "2 + 2 = 4 or Earth's moon is red."
        - $\sim p$: "2 + 2 ≠ 4"
        - $\sim q$: "Earth's moon is not red."

### Truth Values and Truth Tables

- **Truth values for conjunction ($\land$)**:
    - $p \land q$ is True if both $p$ and $q$ are True.
- **Truth table for $p \land q$**:
    
    |$p$|$q$|$p \land q$|
    |---|---|---|
    |T|T|T|
    |T|F|F|
    |F|T|F|
    |F|F|F|
    

- **Truth values for disjunction ($\lor$)**:
    - $p \lor q$ is True if at least one of $p$ or $q$ is True.
- **Truth table for $p \lor q$**:
    
    |$p$|$q$|$p \lor q$|
    |---|---|---|
    |T|T|T|
    |T|F|T|
    |F|T|T|
    |F|F|F|
    

- **Truth values for negation ($\sim$)**:
    - $\sim p$ is True if $p$ is False, and vice versa.
- **Truth table for $\sim p$**:
    
    |$p$|$\sim p$|
    |---|---|
    |T|F|
    |F|T|
    

### More Connectives

- **Implication ($\Rightarrow$)**: $p \Rightarrow q$ means "if $p$, then $q$"
- **Truth table for $p \Rightarrow q$**:
    
    |$p$|$q$|$p \Rightarrow q$|
    |---|---|---|
    |T|T|T|
    |T|F|F|
    |F|T|T|
    |F|F|T|
    

- **Converse ($\Leftarrow$)**: $p \Leftarrow q$ means "if $q$, then $p$"

- **Biconditional ($\Leftrightarrow$)**: $p \Leftrightarrow q$ means "$p$ if and only if $q$"

### Logical Equivalence

- **Definition**: $p$ and $q$ are logically equivalent if $p \equiv q$ (i.e., both have the same truth values).
- **Example**: Show that $p \Rightarrow q$ is equivalent to $q \lor \sim p$.

### Key Logical Identities

- De Morgan's Laws:
    - $\sim(p \lor q) \equiv \sim p \land \sim q$
    - $\sim(p \land q) \equiv \sim p \lor \sim q$

### Tautology and Contradiction

- A **tautology** is always True, e.g., $p \lor \sim p$.
- A **contradiction** is always False, e.g., $p \land \sim p$.

### Discussion of Implications

- **Converse, Inverse, Contrapositive** of $p \Rightarrow q$:
    - Converse: $q \Rightarrow p$
    - Inverse: $\sim p \Rightarrow \sim q$
    - Contrapositive: $\sim q \Rightarrow \sim p$

- Truth table comparison shows that $p \Rightarrow q$ and $\sim q \Rightarrow \sim p$ are equivalent.

### Negation of Implications

- To negate $p \Rightarrow q$:
    - $\sim (p \Rightarrow q) \equiv p \land \sim q$

### Exercises

- Practice negating propositions and forming truth tables to solidify understanding of the concepts.

### Conclusion

- Logical connectives and their relationships can be used to build more complex logical expressions and structures. Understanding these principles is essential for reasoning in discrete mathematics.