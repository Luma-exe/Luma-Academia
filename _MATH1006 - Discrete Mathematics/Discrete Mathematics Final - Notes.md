
> [!faq] About this Note
>
> Class: MATH1006
> Subject: #discreteMathematics
> Topics: #math/discreteMathematics
> Date: 2025-06-16 at 00:31

## Table of Contents

1. [[#Chapter 1: Counting & Sequences]]

2. [[#Chapter 2: Sets]]

3. [[#Chapter 3: Functions]]

4. [[#Chapter 4: Counting Principles]]

5. [[#Chapter 5: Unordered Selections & Binomial Coefficients]]

6. [[#Chapter 6: Inclusion-Exclusion & Multinomial Coefficients]]

7. [[#Chapter 7: Boolean Expressions & Karnaugh Maps]]

8. [[#Chapter 8: Logic]]

9. [[#Chapter 9: Number Theory]]

10. [[#Chapter 10: Induction & Recursion]]

11. [[#Chapter 11: Graph Theory]]

---

## Chapter 1: Counting & Sequences

### Fibonacci Numbers

> [!info] Definition
> A sequence where each term is the sum of the two preceding ones.

**Recursive Definition:**

- $F_1 = 1$

- $F_2 = 2$

- $F_n = F_{n-1} + F_{n-2}$ for $n \geq 3$

**General Formula:**

$$F_n = \frac{1}{\sqrt{5}} \left( \left( \frac{1 + \sqrt{5}}{2} \right)^{n+1} - \left( \frac{1 - \sqrt{5}}{2} \right)^{n+1} \right)$$

**Sequence:** 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

**Applications:**

- Climbing stairs problem (steps of 1 or 2)

- Modeling growth patterns

### Catalan Numbers

> [!info] Definition
> Count various combinatorial structures, particularly paths that don't cross certain boundaries.

**Scenario:** n-second walks with equal up (U) and down (D) steps, never going below ground level.

**Recurrence Relation:**

$$c_{n+1} = \sum_{k=0}^{n} c_k c_{n-k}$$

**General Formula:**

$$c_n = \frac{1}{n+1} \binom{2n}{n} = \frac{(2n)!}{(n+1)!n!}$$

**Sequence:** 1, 1, 2, 5, 14, 42, 132, 429, 1430, ...

![[Pasted image 20250409155005.png]]
![[Pasted image 20250409155017.png]]
![[Pasted image 20250409155033.png]]

---

## Chapter 2: Sets

### Basic Definitions

> [!info] Set
> A well-defined collection of objects called elements.

**Notation:**

- $x \in A$: x is an element of set A

- $x \notin A$: x is not an element of set A

- $|A|$: cardinality (number of elements) of A

### Set Relationships

**Subset:** $A \subseteq B$ means every element of A is in B

**Power Set:** $P(A)$ = set of all subsets of A

- If $|A| = n$, then $|P(A)| = 2^n$

### Set Operations

**Union:** $A \cup B = \{x : x \in A \text{ or } x \in B\}$

**Intersection:** $A \cap B = \{x : x \in A \text{ and } x \in B\}$

**Difference:** $A \setminus B = \{x : x \in A \text{ but } x \notin B\}$

### Set Identities

- $A \cup A = A$ (Idempotent)

- $A \cup \emptyset = A$ (Identity)

- $A \cap A = A$ (Idempotent)

- $A \cap \emptyset = \emptyset$ (Domination)

### De Morgan's Laws

- $A \setminus (B \cup C) = (A \setminus B) \cap (A \setminus C)$

- $A \setminus (B \cap C) = (A \setminus B) \cup (A \setminus C)$

### Famous Paradoxes

**Russell's Paradox:** Consider $X = \{A : A \notin A\}$. Is $X \in X$?

**Barber's Paradox:** A barber shaves all men who don't shave themselves. Does he shave himself?

---

## Chapter 3: Functions

### Definition

> [!info] Function
> A rule $f: A \rightarrow B$ that assigns to each element of A exactly one element of B.

**Components:**

- **Domain:** Set A (input set)

- **Codomain:** Set B (output set)

- **Range:** $\{f(a) : a \in A\}$ (actual outputs)

### Types of Functions

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/BmboPeuGcYA" frameborder="0" allowfullscreen></iframe>
</div>

#### **Injective (One-to-One)**

- **Definition**: Different inputs → different outputs  
    If $x \ne y$, then $f(x) \ne f(y)$
    
- **Condition**:  
    $|A| \leq |B|$ — The codomain must be **at least as big** as the domain
    
- **How to Prove**:  
    Assume $f(x_1) = f(x_2)$ and show that this leads to $x_1 = x_2$
    
- **Counting Injective Functions**:  
    If $|A| = n$, $|B| = m$, and $n \leq m$:
    
    Number of injective functions = $P(m,n)=\frac{m!}{(m-n)!}$

---

#### **Surjective (Onto)**

- **Definition**: Every element of $B$ is an output  
    Range = Codomain
    
- **Condition**:  
    $|A| \geq |B|$ — The domain must be **at least as big** as the codomain
    
- **How to Prove**:  
    Show that for **every** $b \in B$, there exists **some** $a \in A$ such that $f(a) = b$
    
- **Counting Surjective Functions**:  
    If $|A| = n$, $|B| = m$, and $n \geq m$:
    
    Number of surjective functions = $m!$ x $S(n,m)$
    
    where $S(n, m)$ is the **Stirling number of the second kind**
    

---

#### **Bijective (One-to-One and Onto)**

- **Definition**: Each input has a unique output **and** every output is used
    
- **Condition**:  
    $|A| = |B|$
    
- **How to Prove**:  
    Prove both injectivity and surjectivity  
    Or show the function has a **two-sided inverse**
    
- **Counting Bijective Functions**:  
    If $|A| = |B| = n$:
    
    Number of bijective functions = $n!$

### Function Composition

Function composition means **applying one function to the result of another**.

---

#### Definition:

$(g∘f)(x)=g(f(x))$

This reads as:

> "**g composed with f** at x **is the same as applying** f **first**, then applying **g** to the result."

---

#### Step by Step:

1. Take the input $x$
2. Plug it into function $f$ → get $f(x)$
3. Then plug $f(x)$ into function $g$ → get $g(f(x))$

---

####  Example:

Let

- $f(x) = 2x + 3$
- $g(x) = x^2$

Then:

$$(g∘f)(x)=g(f(x))=g(2x+3)=(2x+3)^2$$

But:

$$(f∘g)(x)=f(g(x))=f(x^2)=2x^2+3$$

Composition is **not** commutative!  Thus in general, $(g \circ f)(x) \ne (f \circ g)(x)$.

### Inverse Functions

$f: A \rightarrow B$ is invertible if $\exists g: B \rightarrow A$ such that:

- $g \circ f = \text{id}_A$

- $f \circ g = \text{id}_B$

### Pigeonhole Principle

> [!important] Pigeonhole Principle
> If n pigeons are placed in k pigeonholes with n > k, then at least one pigeonhole contains more than one pigeon.

---

## Chapter 4: Counting Principles

### Addition Principle

If tasks can be done in m or n ways (mutually exclusive), total ways = m + n

### Multiplication Principle

If task 1 has $m$ ways and task 2 has $n$ ways (independent), then the total number of ways = $m \times n$

### Inclusion-Exclusion Principle

**Two Sets:**

$$|A \cup B| = |A| + |B| - |A \cap B|$$

**Three Sets:**

$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$$

### Cartesian Product

The **Cartesian product** of two sets $A$ and $B$ is the set of **all ordered pairs** where:

- The first element is from $A$
- The second element is from $B$

---

#### Definition:

$$A×B={(a,b)∣a∈A, b∈B}$$

---

#### Size of the Product:

If $|A| = m$ and $|B| = n$, then:

$$∣A×B∣=m×n$$

> You're choosing 1 element from $A$ and 1 from $B$, so by the **multiplication principle**, you get $m \times n$ combinations.

---

#### Example:

Let:  
$A = {1, 2}$  
$B = {x, y, z}$

Then:

$$A×B={(1,x),(1,y),(1,z),(2,x),(2,y),(2,z)}$$

There are $2 \times 3 = 6$ ordered pairs.

---

#### Note:

- Cartesian product is **not commutative**:  
    $A \times B \ne B \times A$ (unless $A = B$)
    
- In $A \times B$, each **pair is ordered** — $(a, b) \ne (b, a)$ in general.

### Ordered Selections

**With Repetition:** $n^k$ ways to select k items from n

**Without Repetition:** $\frac{n!}{(n-k)!} = {}_nP_k$ ways

### Permutations

  <div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/XJnIdRXUi7A" frameborder="0" allowfullscreen></iframe>
</div>

Number of ways to arrange n distinct objects: $n!$
 
---

## Chapter 5: Unordered Selections & Binomial Coefficients

  <div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/-4PpUzZU26M" frameborder="0" allowfullscreen></iframe>
</div>

### Binomial Coefficients

> [!info] Definition
> $$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$
> Read as "n choose k"

**Interpretation:** Number of ways to choose k objects from n objects (order doesn't matter)

### Unordered Selection Counts

- **Without Repetition:** $\binom{n}{k}$ which then becomes $\frac{n!}{k!(n-k)!}$

- **With Repetition:** $\binom{n+k-1}{k}$ which then becomes $\frac{(n+k-1)!}{k!(n-k)!}$

### Pascal's Triangle

Each entry in Pascal's Triangle is the **sum of the two entries directly above it**.

$$\binom{n+1}{k} = \binom{n}{k-1} + \binom{n}{k}$$

This identity shows how the triangle is built **row by row**, where:

- $\binom{n}{k}$ is the **binomial coefficient**, read as “n choose k”
- It represents the number of ways to choose $k$ elements from a set of $n$ elements

---

#### Structure:

- Row 0:       $1$
- Row 1:      $1 \quad 1$
- Row 2:     $1 \quad 2 \quad 1$
- Row 3:    $1 \quad 3 \quad 3 \quad 1$
- Row 4:   $1 \quad 4 \quad 6 \quad 4 \quad 1$
- And so on...

---

#### Properties:

- The $n$th row contains the coefficients of the expansion of $(a + b)^n$
- It is symmetric: $\binom{n}{k} = \binom{n}{n-k}$
- The sum of the entries in row $n$ is $2^n$

---

#### Example using the rule:

To compute $\binom{5}{2}$ using the identity:

$$\binom{5}{2}=\binom{1}{4}+\binom{4}{2}=4+6=10$$

### Binomial Theorem

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/videoseries?list=PL5KkMZvBpo5Bcz-V51UHtlg_eBW-PtQ7_" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>

The binomial theorem gives a formula for expanding powers of a binomial expression $(x + y)^n$.

$$(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^k y^{n-k}$$
---

#### Explanation:

- The sum runs from $k = 0$ to $n$
    
- Each term is made up of:
    
    - The **binomial coefficient** $\binom{n}{k}$, which counts how many ways to choose $k$ items out of $n$
        
    - $x$ raised to the power $k$
        
    - $y$ raised to the power $n-k$
        
- This formula expands $(x + y)^n$ into a sum of $(n+1)$ terms
    

---

#### Example for $n=3$:

$$
(x + y)^3 = \binom{3}{0} x^0 y^3 + \binom{3}{1} x^1 y^2 + \binom{3}{2} x^2 y^1 + \binom{3}{3} x^3 y^0
$$

Simplifying the binomial coefficients and powers:

$$
= 1 \cdot y^3 + 3 \cdot x y^2 + 3 \cdot x^2 y + 1 \cdot x^3
$$

Or simply:

$$
= y^3 + 3 x y^2 + 3 x^2 y + x^3
$$

### Key Identities

- $\displaystyle \binom{n}{0} = \binom{n}{n} = 1$  
  This means there is exactly one way to choose no elements or all elements from a set of size $n$.

- $\displaystyle \binom{n}{k} = \binom{n}{n-k}$  
  This symmetry property shows that choosing $k$ elements is the same as choosing the $n-k$ elements to leave out.

- $\displaystyle \sum_{k=0}^{n} \binom{n}{k} = 2^n$  
  The sum of all binomial coefficients for a fixed $n$ equals $2^n$.  
  This corresponds to the total number of subsets of an $n$-element set (each element either included or not).

---

## Chapter 6: Inclusion-Exclusion & Multinomial Coefficients

### General Inclusion-Exclusion

For n sets, alternate between adding individual sets, subtracting pairwise intersections, adding triple intersections, etc.

### Derangements

> [!info] Derangement
> A permutation where no element appears in its original position.

**Formula:**

$$d(n) = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!}$$

**Approximation:** $d(n) \approx \frac{n!}{e}$

### Multinomial Coefficients

The multinomial coefficient generalizes the binomial coefficient for dividing $n$ items into $m$ groups of specified sizes.

$$
\binom{n}{k_1, k_2, \ldots, k_m} = \frac{n!}{k_1! \, k_2! \, \cdots \, k_m!}
$$

where

$$
k_1 + k_2 + \cdots + k_m = n
$$

---

#### Explanation:

- $n!$ is the factorial of the total number of items.
- Each $k_i!$ in the denominator accounts for the indistinguishability within the $i$th group of size $k_i$.
- The multinomial coefficient counts the number of ways to arrange $n$ items into $m$ groups of sizes $k_1, k_2, \ldots, k_m$.

---

#### Example:

If you want to arrange 5 objects into groups of sizes 2, 2, and 1, the number of distinct arrangements is:

$$
\binom{5}{2, 2, 1} = \frac{5!}{2! \cdot 2! \cdot 1!} = \frac{120}{2 \cdot 2 \cdot 1} = 30
$$

### Multinomial Theorem

The multinomial theorem generalizes the binomial theorem for expressions with more than two terms:

$$
(x_1 + x_2 + \cdots + x_m)^n = \sum_{k_1 + k_2 + \cdots + k_m = n} \binom{n}{k_1, k_2, \ldots, k_m} x_1^{k_1} x_2^{k_2} \cdots x_m^{k_m}
$$

---

#### Explanation:

- The sum is taken over all non-negative integer tuples $(k_1, k_2, \ldots, k_m)$ such that 

  $$
  k_1 + k_2 + \cdots + k_m = n
  $$

- Each term in the expansion corresponds to one way of distributing the power $n$ among the variables $x_1, x_2, \ldots, x_m$.
- The multinomial coefficient 

  $$
  \binom{n}{k_1, k_2, \ldots, k_m} = \frac{n!}{k_1! k_2! \cdots k_m!}
  $$

  gives the number of ways to arrange these powers.

---

#### Example:

For $m=3$ and $n=2$:

$$
(x + y + z)^2 = \sum_{k_1 + k_2 + k_3 = 2} \binom{2}{k_1, k_2, k_3} x^{k_1} y^{k_2} z^{k_3}
$$

which expands to:

$$
x^2 + y^2 + z^2 + 2xy + 2xz + 2yz
$$

---

## Chapter 7: Boolean Expressions & Karnaugh Maps

### Boolean Functions

Functions mapping $\{0,1\}^n \rightarrow \{0,1\}$

**Number of Boolean functions on n variables:** $2^{2^n}$

### Boolean Operations

- **AND ($\land$):** True only when both inputs are true

- **OR ($\lor$):** True when at least one input is true

- **NOT ($\neg$):** Flips the truth value

### Boolean Identities

- $x \lor 1 = 1$

- $x \land 0 = 0$

- $x \lor x' = 1$

- $x \land x' = 0$

### De Morgan's Laws (Boolean)

- $(f \lor g)' = f' \land g'$

- $(f \land g)' = f' \lor g'$

### Karnaugh Maps

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/RO5alU6PpSU" frameborder="0" allowfullscreen></iframe>
</div>  

Visual method for simplifying Boolean expressions:

1. Create grid for all variable combinations

2. Fill with function outputs

3. Group adjacent 1's in powers of 2

4. Write simplified expression

---

## Chapter 8: Logic

### Propositions

> [!info] Proposition
> A statement that is either True (T) or False (F).

### Logical Connectives

| Connective    | Symbol            | Name    | Truth Condition                                      |
| ------------- | ----------------- | ------- | ---------------------------------------------------- |
| Conjunction   | $\land$           | AND     | Both true                                            |
| Disjunction   | $\lor$            | OR      | At least one true                                    |
| Negation      | $\sim$            | NOT     | Opposite truth value                                 |
| Implication   | $\Rightarrow$     | IF-THEN | False only when antecedent true and consequent false |
| Biconditional | $\Leftrightarrow$ | IFF     | Same truth values                                    |

### Converse, Contrapositive, and Negation
**Statement:**  
"If I am hungry, then I will eat pizza."

Let:  
- $p$: I am hungry  
- $q$: I will eat pizza  
- Original implication: $p \rightarrow q$

---

#### 1. **Negation**

- Statement: "It is **not** true that if I am hungry, then I will eat pizza."
- Symbolically: $\neg(p \rightarrow q)$
- Equivalent to: $p \land \neg q$
- Meaning: I **am** hungry **and** I will **not** eat pizza

---

#### 2. **Converse**

- Statement: "If I eat pizza, then I will be hungry."
- Symbolically: $q \rightarrow p$
- Meaning: Switch the order of the original implication

---

#### 3. **Inverse**

- Statement: "If I am **not** hungry, then I will **not** eat pizza."
- Symbolically: $\neg p \rightarrow \neg q$
- Meaning: Negate both the hypothesis and the conclusion

---

#### 4. **Contrapositive**

- Statement: "If I do **not** eat pizza, then I will **not** be hungry."
- Symbolically: $\neg q \rightarrow \neg p$
- Meaning: Switch and negate both parts
- **Important:** This is **logically equivalent** to the original implication $p \rightarrow q$`


  <div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/TCBu8PD4Lls" frameborder="0" allowfullscreen></iframe>
</div>

---

### Tautologies, Contradictions, and Contingencies

#### **Tautology**
A **tautology** is a compound proposition that is **always true**, regardless of the truth values of its components.

- Example: $p \vee \neg p$  
  (This is always true — either $p$ is true or it's not)

- Example: $(p \rightarrow q) \leftrightarrow (\neg p \vee q)$  
  (This logical equivalence always holds)

---

#### **Contradiction**
A **contradiction** is a compound proposition that is **always false**, no matter what truth values are assigned to its variables.

- Example: $p \wedge \neg p$  
  (This can never be true — a statement can't be both true and false)

- Example: $p \wedge \neg p \wedge q$  
  (Still always false due to $p \wedge \neg p$)

---

#### **Contingency**
A **contingency** is a compound proposition that is **sometimes true and sometimes false**, depending on the truth values of its components.

- Example: $p \wedge q$  
  (True only if both $p$ and $q$ are true; otherwise false)
 
---

### Truth Tables

**Implication ($p \Rightarrow q$):**

| $p$ | $q$ | $p \Rightarrow q$ |
|-----|-----|-------------------|
| T   | T   | T                 |
| T   | F   | F                 |
| F   | T   | T                 |
| F   | F   | T                 |

### Logical Equivalences

- $p \Rightarrow q \equiv \sim p \lor q$

- $p \Leftrightarrow q \equiv (p \Rightarrow q) \land (q \Rightarrow p)$

### De Morgan's Laws (Logic)

- $\sim(p \lor q) \equiv \sim p \land \sim q$

- $\sim(p \land q) \equiv \sim p \lor \sim q$

### Quantifiers

Quantifiers are symbols used in logic to express the extent to which a predicate applies to a set of elements.

- **Universal Quantifier ($\forall$):**  
  Means "for all" or "for every".  
  The statement $(\forall x) P(x)$ means that the property $P(x)$ is true for **every** element $x$ in the domain.

- **Existential Quantifier ($\exists$):**  
  Means "there exists" or "there is at least one".  
  The statement $(\exists x) P(x)$ means that there is **at least one** element $x$ in the domain for which the property $P(x)$ is true.

---

### Negation of Quantifiers

Negating quantified statements changes the quantifier and negates the predicate:

- Negation of a universal statement:

  $$
  \sim (\forall x) P(x) \equiv (\exists x) \sim P(x)
  $$

  This means:  
  "It is **not** true that $P(x)$ holds for all $x$" is equivalent to  
  "There exists at least one $x$ for which $P(x)$ does **not** hold."

- Negation of an existential statement:

  $$
  \sim (\exists x) P(x) \equiv (\forall x) \sim P(x)
  $$

  This means:  
  "It is **not** true that there exists an $x$ such that $P(x)$ holds" is equivalent to  
  "For **all** $x$, $P(x)$ does **not** hold."

---

### Example:

If $P(x)$ means "$x$ is even", then:

- $(\forall x) P(x)$ means "All $x$ are even."
- Negating it: $\sim (\forall x) P(x)$ means "Not all $x$ are even," which is equivalent to "There exists an $x$ that is not even":

  $$
  \sim (\forall x) P(x) \equiv (\exists x) \sim P(x)
  $$

- $(\exists x) P(x)$ means "There exists an $x$ that is even."
- Negating it: $\sim (\exists x) P(x)$ means "There does not exist any even $x$," which is equivalent to "For all $x$, $x$ is not even":

  $$
  \sim (\exists x) P(x) \equiv (\forall x) \sim P(x)
  $$

---

## Chapter 9: Number Theory

### Division Algorithm

For integers $a, b$ with $b > 0$, there exist unique integers $q, r$ such that:

$$a = qb + r \quad (0 \leq r < b)$$

### Divisibility

The notation

$$
a \mid b
$$

means **"a divides b"**, which is defined as:

- There exists an integer $k$ such that:

  $$
  b = k \times a
  $$

- In other words, when $b$ is divided by $a$, the remainder is zero.

---

#### Examples:

- $3 \mid 12$ because $12 = 3 \times 4$ with $k=4$.
- $5 \nmid 12$ because there is no integer $k$ such that $12 = 5k$ (division leaves remainder 2).

---

#### Properties of Divisibility:

- If $a \mid b$ and $a \mid c$, then $a \mid (b + c)$.
- If $a \mid b$, then $a \mid (b \times k)$ for any integer $k$.
- If $a \mid b$ and $b \mid c$, then $a \mid c$.

### Greatest Common Divisor (GCD)

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/JUzYl1TYMcU" frameborder="0" allowfullscreen></iframe>
</div>

The **greatest common divisor** of two integers $a$ and $b$, denoted $\gcd(a, b)$, is the largest positive integer that divides both $a$ and $b$ without leaving a remainder.

---

### Euclidean Algorithm

A method to efficiently compute $\gcd(a, b)$:

1. Divide $a$ by $b$ to get quotient $q_1$ and remainder $r_1$:

   $$
   a = q_1 b + r_1, \quad 0 \leq r_1 < b
   $$

2. Divide $b$ by $r_1$ to get quotient $q_2$ and remainder $r_2$:

   $$
   b = q_2 r_1 + r_2, \quad 0 \leq r_2 < r_1
   $$

3. Repeat this process:

   $$
   r_1 = q_3 r_2 + r_3, \quad 0 \leq r_3 < r_2
   $$

4. Continue until the remainder is 0:

   $$
   r_{k-2} = q_k r_{k-1} + 0
   $$

5. The last non-zero remainder $r_{k-1}$ is the $\gcd(a, b)$.

---

### Modular Arithmetic

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/6dZLq77gSGU" frameborder="0" allowfullscreen></iframe>
</div>

The notation

$$
a \equiv b \pmod{n}
$$

means that $a$ and $b$ leave the same remainder when divided by $n$, or equivalently,

$$
n \mid (a - b)
$$

which reads "n divides (a minus b)".

#### Example

Consider the statement:

$$
17 \equiv 5 \pmod{12}
$$

- When you divide 17 by 12, the remainder is 5, because:

  $$
  17 = 12 \times 1 + 5
  $$

- The difference between 17 and 5 is:

  $$
  17 - 5 = 12
  $$

- Since 12 divides the difference exactly ($12 \mid 12$), the statement $17 \equiv 5 \pmod{12}$ is true.

This means 17 and 5 are congruent modulo 12.


---

### Properties of Modular Arithmetic

If

$$
a \equiv b \pmod{n} \quad \text{and} \quad c \equiv d \pmod{n}
$$

then:

- **Addition:**

  $$
  a + c \equiv b + d \pmod{n}
  $$

- **Multiplication:**

  $$
  a \cdot c \equiv b \cdot d \pmod{n}
  $$

These properties allow you to perform addition and multiplication inside modular arithmetic, simplifying calculations by working with remainders.

### Prime Numbers

> [!info] Prime Number
> An integer $p \geq 2$ whose only positive divisors are 1 and $p$.

### Fundamental Theorem of Arithmetic

Every integer $n \geq 2$ can be expressed uniquely as a product of primes.

### Rational Numbers

$\mathbb{Q} = \{\frac{a}{b} : a,b \in \mathbb{Z}, b \neq 0\}$

**Properties:**

- Closed under addition, subtraction, multiplication, division (by non-zero)

- Dense in real numbers

- Countably infinite: $|\mathbb{Q}| = |\mathbb{N}|$

---

## Chapter 10: Induction & Recursion

### Mathematical Induction

> [!important] Principle of Mathematical Induction
> To prove $P(n)$ for all $n \geq k$:
>
> 1. **Base Case:** Prove $P(k)$ is true
>
> 2. **Inductive Step:** Prove $P(n) \Rightarrow P(n+1)$

### Strong Induction

To prove $P(n)$ for all $n \geq k$:

1. **Base Case:** Prove $P(k)$ is true

2. **Inductive Step:** Assume $P(k), P(k+1), \ldots, P(n)$ and prove $P(n+1)$

### Recursive Sequences

Defined by:

- Initial conditions

- Recurrence relation

**Example:** Fibonacci sequence

- $F_1 = 1, F_2 = 1$

- $F_n = F_{n-1} + F_{n-2}$ for $n \geq 3$

### Well-Ordering Principle

Every non-empty set of positive integers has a smallest element.

### Applications of Induction

- Proving formulas (e.g., $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$)

- Proving divisibility properties

- Proving inequalities

- Analyzing recursive algorithms

---

## Chapter 11: Graph Theory

### Basic Definitions

> [!info] Graph
> A graph $G = (V,E)$ consists of:
>
> - $V$: set of vertices (nodes)
>
> - $E$: set of edges connecting vertices

**Types of Edges:**

- **Loop:** Edge from vertex to itself

- **Parallel Edges:** Multiple edges between same vertices

- **Simple Graph:** No loops or parallel edges

### Degree of a Vertex

$\deg(v)$ = number of edges incident to vertex $v$

**Handshaking Lemma:**

$$\sum_{v \in V} \deg(v) = 2|E|$$

### Walks, Paths, and Circuits

- **Walk:** Sequence of vertices connected by edges

- **Path:** Walk with no repeated edges

- **Circuit:** Path that starts and ends at same vertex

- **Simple Path:** No repeated vertices (except possibly first and last)

### Euler Paths and Circuits

- **Euler Path:** Uses every edge exactly once

- **Euler Circuit:** Euler path that returns to starting vertex

### Euler's Theorems

> [!important] Euler's Theorems  
> For a connected graph:  
> 
> - Has **Euler circuit** ⟹ all vertices have **even degree**  
> 
> - Has **Euler path** ⟹ exactly **0 or 2 vertices** have **odd degree**

### Trees

> [!info] Tree
> A connected graph with no circuits.

**Properties of Trees:**

- If $|V| = n$, then $|E| = n-1$

- Any two vertices connected by exactly one path

- Removing any edge disconnects the graph

- Adding any edge creates exactly one circuit

### Spanning Trees

A subgraph that:

- Includes all vertices

- Is a tree (connected, no circuits)

- Has minimum number of edges to stay connected

### Kruskal's Algorithm

To find minimum spanning tree:

1. Start with all vertices, no edges

2. Add cheapest edge that doesn't create circuit

3. Repeat until tree is complete

---

## Summary of Key Formulas

### Counting

- **Permutations:**  
  $P(n,k) = \frac{n!}{(n-k)!}$

- **Combinations:**  
  $C(n,k) = \binom{n}{k} = \frac{n!}{k!(n-k)!}$

- **Inclusion-Exclusion (2 sets):**  
  $|A \cup B| = |A| + |B| - |A \cap B|$

- **Inclusion-Exclusion (3 sets):**  
  $|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$

- **Multinomial Coefficient:**  
  $\binom{n}{k_1, k_2, \dots, k_m} = \frac{n!}{k_1!k_2!\cdots k_m!}$

- **Number of Functions:**
  - Total functions from $A \to B$: $|B|^{|A|}$
  - Injective functions (if $|A| \leq |B|$): $P(|B|, |A|)$
  - Bijective functions (if $|A| = |B|$): $n!$
  - Surjective functions: $m! \cdot S(n,m)$ where $S(n,m)$ is the Stirling number of the second kind

---

### Special Numbers

- **Fibonacci:**  
  $F_n = F_{n-1} + F_{n-2}$, with $F_0 = 0$, $F_1 = 1$

- **Catalan:**  
  $C_n = \frac{1}{n+1} \binom{2n}{n}$

- **Derangements:**  
  $D_n = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!}$  
  or approx: $D_n \approx \frac{n!}{e}$

---

### Number Theory

- **Greatest Common Divisor (GCD):**  
  $a = q_1 b + r_1$, with $0 \leq r < b$
	- 120 = 9 x 13 + 3
	- 9 = 3 x 3 + 0
		- Thus the GCD is 3

- **Euclidean Algorithm:**  
  Repeated division to compute $\gcd(a,b)$

- **Modular Arithmetic:**  
  $a \equiv b \pmod{n} \iff n \mid (a - b)$

- **Mod Properties:**  
  - $a \equiv b \pmod{n} \Rightarrow a + c \equiv b + c \pmod{n}$  
  - $a \equiv b \pmod{n},\ c \equiv d \pmod{n} \Rightarrow ac \equiv bd \pmod{n}$

---

### Graph Theory

- **Handshaking Lemma:**  
  $\sum \deg(v) = 2|E|$

- **Trees:**  
  - A tree with $n$ vertices has $n - 1$ edges  
  - Every connected acyclic graph is a tree

- **Euler Paths and Circuits:**  
  - Euler circuit: All vertices have even degree  
  - Euler path: Exactly 0 or 2 vertices have odd degree

- **Complete Graph $K_n$ edges:**  
  $|E| = \binom{n}{2}$

- **Bipartite Graph (complete):**  
  If sets have $m$ and $n$ vertices: $|E| = m \cdot n$