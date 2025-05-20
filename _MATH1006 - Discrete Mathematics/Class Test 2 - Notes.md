
> [!faq] About this Note
> Class: MATH1006
> Subject: #discreteMathematics 
> Topics: #math/discreteMathematics 
> Date: 2025-05-20 at 21:45

**Contains content from Lecture 4 to Lecture 8**

## Counting Principles



### Inclusion-Exclusion Principle

- If $A$ and $B$ are two sets, then $|A \cup B| = |A| + |B| - |A \cap B|$

- When we add $|A|$ and $|B|$, we count the elements in $A \cap B$ twice

- If $A$ and $B$ are disjoint sets (i.e., $A \cap B = \emptyset$), then $|A \cup B| = |A| + |B|$

- For three sets: $|A \cup B \cup C| = |A| + |B| + |C| - (|A \cap B| + |A \cap C| + |B \cap C|) + |A \cap B \cap C|$

- Visual interpretation: When calculating $|A| + |B| + |C|$, elements in intersections are counted multiple times

- For a general formula with $n$ sets: $|A_1 \cup A_2 \cup \ldots \cup A_n| = \sum_{i=1}^{n} |A_i| - \sum_{i<j} |A_i \cap A_j| + \sum_{i<j<k} |A_i \cap A_j \cap A_k| - \ldots + (-1)^{n+1} |A_1 \cap A_2 \cap \ldots \cap A_n|$

  

### Addition Principle

- If $A$ and $B$ are two disjoint sets, then $|A \cup B| = |A| + |B|$

- Example: If a menu has 8 pizzas and 5 pasta dishes, there are $8 + 5 = 13$ possible meal choices

- For multiple disjoint sets: $|A_1 \cup A_2 \cup \ldots \cup A_n| = |A_1| + |A_2| + \ldots + |A_n|$

  

### Multiplication Principle

- If there are two independent tasks, with $m$ ways to do Task 1 and $n$ ways to do Task 2, then there are $m \times n$ ways to perform both tasks

- Example: If you have 3 shirts and 4 ties, there are $3 \times 4 = 12$ possible shirt/tie combinations

- For $k$ independent tasks with $m_1, m_2, \ldots, m_k$ ways to complete each task, there are $m_1 \times m_2 \times \ldots \times m_k$ ways to complete all tasks

- Example: Number plates with three letters followed by three digits have $26 \times 26 \times 26 \times 10 \times 10 \times 10 = 17,576,000$ possibilities

- Independence is critical: the way you perform Task 1 cannot affect the ways available for Task 2

- Can be visualized using decision trees to show all possible combinations

  

### Cartesian Product

- The Cartesian product of two sets $A$ and $B$ is the set $A \times B = \{(a,b) | a \in A, b \in B\}$

- Named after René Descartes (1596–1650), who famously said "I think; therefore, I am"

- The Cartesian plane (xy-plane) is $\mathbb{R} \times \mathbb{R} = \mathbb{R}^2$

- If $|A| = m$ and $|B| = n$, then $|A \times B| = m \times n$

- The Cartesian product directly relates to the multiplication principle


![[Pasted image 20250521025029.png]]

## Ordered Selections

  

### Ordered Selections with Repetition

- Number of ordered selections of $k$ things from $n$ available things, with repetition allowed = $n^k$

- Example: Selecting a 3-digit number (ordering digits 0-9 with repetition) = $10^3 = 1000$ possibilities

  

### Ordered Selections without Repetition

- Number of ordered selections of $k$ things from $n$ available things, without repetition = $n^{(k)}$

- Where $n^{(k)} = n(n-1)(n-2)\ldots(n-k+1)$ (falling factorial)

- Also written as $\frac{n!}{(n-k)!}$ or sometimes as $_nP_k$

- Example: Selecting a 3-digit number with different digits = $9 \times 9 \times 8 = 648$ possibilities

- Note: First digit can't be 0 for a 3-digit number

- Connection to functions: The number of injective (one-to-one) functions $f: A \rightarrow B$ with $|A| = k$ and $|B| = n$ is $n^{(k)}$

  

### Permutations

- A permutation is an ordered arrangement of distinct objects

- Number of permutations of $n$ distinct objects = $n! = n \times (n-1) \times (n-2) \times \ldots \times 2 \times 1$

- Example: Number of ways to arrange 5 books on a shelf = $5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$

  <div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/XJnIdRXUi7A" frameborder="0" allowfullscreen></iframe>
</div>

### Derangements

- A derangement is a permutation where no element appears in its original position

- Number of derangements of $n$ elements, denoted by $d(n)$, is given by: $d(n) = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!}$

- For large $n$, $d(n) \approx \frac{n!}{e}$ (rounded to nearest integer)

- The probability of a random permutation being a derangement is approximately $\frac{1}{e} \approx 0.367$

  

## Unordered Selections

  

### Binomial Coefficients

- $\binom{n}{k}$ (read as "$n$ choose $k$") represents the number of ways to select $k$ objects from a set of $n$ objects without regard to order

- Formula: $\binom{n}{k} = \frac{n!}{k!(n-k)!} = \frac{n^{(k)}}{k!}$

- Also written as $C(n,k)$ or $_nC_k$ in some books

- Example: Number of 3-person committees from 30 students = $\binom{30}{3} = \frac{30 \times 29 \times 28}{3 \times 2 \times 1} = 4060$

- Also represents the number of $k$-element subsets of an $n$-element set

- Important properties:

  - $\binom{n}{k} = \binom{n}{n-k}$ (symmetry property)

  - $\binom{n}{0} = \binom{n}{n} = 1$

  - $\binom{n}{1} = \binom{n}{n-1} = n$

  - $\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}$ (recurrence relation)

  

### Binomial Theorem

- $(x + y)^n = \sum_{i=0}^{n} \binom{n}{i} x^i y^{n-i}$

- Expanded: $(x + y)^n = \binom{n}{0}x^0y^n + \binom{n}{1}x^1y^{n-1} + \binom{n}{2}x^2y^{n-2} + \ldots + \binom{n}{n}x^ny^0$

- Example: $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$

- The coefficient of $x^i y^{n-i}$ is $\binom{n}{i}$

- For variations: $(ax + by)^n = \sum_{i=0}^{n} \binom{n}{i} (ax)^i (by)^{n-i} = \sum_{i=0}^{n} \binom{n}{i} a^i b^{n-i} x^i y^{n-i}$

- Example: $(3x - 5y)^5 = \sum_{i=0}^{5} \binom{5}{i} (3x)^i (-5y)^{5-i}$


<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/videoseries?list=PL5KkMZvBpo5Bcz-V51UHtlg_eBW-PtQ7_" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>


### Pascal's Triangle

- Each number is the sum of the two numbers above it

- The $n$th row gives the values of $\binom{n}{0}, \binom{n}{1}, \ldots, \binom{n}{n}$

- Pattern of first few rows:

  - Row 0: 1

  - Row 1: 1 1

  - Row 2: 1 2 1

  - Row 3: 1 3 3 1

  - Row 4: 1 4 6 4 1

  - Row 5: 1 5 10 10 5 1

![[Pasted image 20250521031709.png]]

- The sum of the entries in row $n$ is $2^n$

- The alternating sum of entries in row $n$ is 0 when $n > 0$

- Direct calculation: $\binom{n}{0} - \binom{n}{1} + \binom{n}{2} - ... + (-1)^n\binom{n}{n} = 0$

  

## Multinomial Coefficients

  

### Multinomial Theorem

- $(x_1 + x_2 + \ldots + x_m)^n = \sum_{k_1+k_2+\ldots+k_m=n} \binom{n}{k_1,k_2,\ldots,k_m} x_1^{k_1}x_2^{k_2}\ldots x_m^{k_m}$

- Where $\binom{n}{k_1,k_2,\ldots,k_m} = \frac{n!}{k_1!k_2!\ldots k_m!}$ is the multinomial coefficient

- This represents the number of ways to distribute $n$ distinct objects into $m$ groups, with $k_i$ objects in group $i$

- Example: The number of distinct permutations of the letters in "WOOLLOOMOOLOO" is $\binom{13}{8,3,1,1} = \frac{13!}{8!3!1!1!} = \frac{13!}{8!3!} = 27,720$

- Applications include:

  - Counting number of distinct permutations with repeated elements

  - Expanding expressions like $(x + y + z)^n$

  - Calculating probabilities in multinomial distributions

- For binomial coefficients, $\binom{n}{k} = \binom{n}{k,n-k}$

  

## Boolean Algebra

  

### Boolean Functions

- A Boolean function is a function $f: S^n \rightarrow S$ where $S = \{0, 1\}$

- Examples of Boolean values: Yes/No, True/False, 1/0

- The number of possible Boolean functions $S^n \rightarrow S$ is $2^{2^n}$

  

### Boolean Operations

- NOT ($\sim$ or $\neg$): $\sim 0 = 1$ and $\sim 1 = 0$

- AND ($\wedge$): $x \wedge y = 1$ if and only if $x = 1$ and $y = 1$

- OR ($\vee$): $x \vee y = 0$ if and only if $x = 0$ and $y = 0$

- XOR ($\oplus$): $x \oplus y = 1$ if and only if $x \neq y$

- Truth tables for basic operations:

  | $x$ | $y$ | $x \wedge y$ | $x \vee y$ | $\sim x$ | $x \oplus y$ |

  |-----|-----|-------------|------------|----------|-------------|

  | 1   | 1   | 1           | 1          | 0        | 0           |

  | 1   | 0   | 0           | 1          | 0        | 1           |

  | 0   | 1   | 0           | 1          | 1        | 1           |

  | 0   | 0   | 0           | 0          | 1        | 0           |

  

### Boolean Algebra Laws

- Identity laws: $x \wedge 1 = x$, $x \vee 0 = x$

- Domination laws: $x \wedge 0 = 0$, $x \vee 1 = 1$

- Idempotent laws: $x \wedge x = x$, $x \vee x = x$

- Complement laws: $x \wedge \sim x = 0$, $x \vee \sim x = 1$

- Double negation: $\sim(\sim x) = x$

- Commutative laws: $x \wedge y = y \wedge x$, $x \vee y = y \vee x$

- Associative laws: $(x \wedge y) \wedge z = x \wedge (y \wedge z)$, $(x \vee y) \vee z = x \vee (y \vee z)$

- Distributive laws: $x \wedge (y \vee z) = (x \wedge y) \vee (x \wedge z)$, $x \vee (y \wedge z) = (x \vee y) \wedge (x \vee z)$

- De Morgan's laws: $\sim(x \wedge y) = \sim x \vee \sim y$, $\sim(x \vee y) = \sim x \wedge \sim y$

- Note: When writing Boolean expressions, the $\wedge$ symbol is often omitted, so $x \wedge y$ is written as $xy$

  

### Switching Circuits

- Boolean operations can be represented as electrical circuits

- Switches represent Boolean variables (on = 1, off = 0)

- Series connection corresponds to AND operation

- Parallel connection corresponds to OR operation

- Switches can be combined to implement any Boolean function

- Example circuit for $x \vee yz$:

  - Main path splits into two parallel paths

  - One path contains switch $x$

  - Other path has switches $y$ and $z$ in series

  - Electricity flows if switch $x$ is closed OR if both switches $y$ AND $z$ are closed

- Example circuit for $(x \vee y) \wedge z$:

  - Switches $x$ and $y$ connected in parallel

  - This parallel arrangement is in series with switch $z$

  - Electricity flows if switch $z$ is closed AND either switch $x$ OR $y$ is closed

  

### Karnaugh Maps

- Visual tool for simplifying Boolean expressions

- Arranges a truth table into a grid where adjacent cells differ by only one variable

- Helps identify patterns and simplify Boolean expressions

- Groups of 1s that are powers of 2 (1, 2, 4, 8) can be combined to eliminate variables

- Steps to use:

  1. Create a grid with cells for all possible combinations of input variables

  2. Fill each cell with the output value (0 or 1)

  3. Find adjacent groups of 1s with sizes that are powers of 2

  4. Each group eliminates one variable that changes within the group

  5. Write the simplified expression as the OR of terms from each group

  

## Logic

  

### Propositions

- A proposition is a statement that is either true or false

- Example: "2 + 2 = 4" is a proposition (true)

- Example: "Earth's moon is red" is a proposition (false)

- Non-example: "What time is it?" is not a proposition (it's a question)

  

### Logical Connectives

- AND ($\wedge$): $p \wedge q$ is true only when both $p$ and $q$ are true

- OR ($\vee$): $p \vee q$ is true when at least one of $p$ or $q$ is true

- NOT ($\sim$ or $\neg$): $\sim p$ is true when $p$ is false

- IMPLIES ($\rightarrow$): $p \rightarrow q$ is false only when $p$ is true and $q$ is false

- BICONDITIONAL ($\leftrightarrow$): $p \leftrightarrow q$ is true when $p$ and $q$ have the same truth value

- EXCLUSIVE OR ($\oplus$): $p \oplus q$ is true when exactly one of $p$ or $q$ is true (but not both)

- Note: In common language, "or" often means "exclusive or" - e.g., "Do you want tea or coffee?"

  

### Truth Tables

- A systematic way to determine the truth value of compound propositions

- For $p \wedge q$:

  | $p$ | $q$ | $p \wedge q$ |

  |-----|-----|-------------|

  | T   | T   | T           |

  | T   | F   | F           |

  | F   | T   | F           |

  | F   | F   | F           |

  

- For $p \vee q$:

  | $p$ | $q$ | $p \vee q$ |

  |-----|-----|------------|

  | T   | T   | T          |

  | T   | F   | T          |

  | F   | T   | T          |

  | F   | F   | F          |

  

- For $p \rightarrow q$:

  | $p$ | $q$ | $p \rightarrow q$ |

  |-----|-----|------------------|

  | T   | T   | T                |

  | T   | F   | F                |

  | F   | T   | T                |

  | F   | F   | T                |

  

### Logical Equivalence

- Two propositions are logically equivalent if they have the same truth value under all possible assignments

- We write $p \equiv q$ if $p$ and $q$ are logically equivalent

- Important equivalences:

  - $p \rightarrow q \equiv \sim p \vee q$

  - $\sim(p \wedge q) \equiv \sim p \vee \sim q$ (De Morgan's Law)

  - $\sim(p \vee q) \equiv \sim p \wedge \sim q$ (De Morgan's Law)

  - $p \oplus q \equiv \sim(p \leftrightarrow q)$

  - $p \wedge q \equiv \sim(\sim p \vee \sim q)$

- Any expression involving $\rightarrow$ or $\wedge$ can be rewritten using only $\vee$ and $\sim$

  

### Converse, Contrapositive, and Negation

- For an implication $p \rightarrow q$:

  - Converse: $q \rightarrow p$

  - Contrapositive: $\sim q \rightarrow \sim p$

  - Negation: $\sim(p \rightarrow q)$, which is equivalent to $p \wedge \sim q$

- The contrapositive is logically equivalent to the original implication

- The converse is not necessarily equivalent to the original implication

- Example: "If it rains, the ground gets wet"

  - Converse: "If the ground gets wet, it rains" (not necessarily true)

  - Contrapositive: "If the ground doesn't get wet, it doesn't rain" (logically equivalent to original)

  - Negation: "It rains and the ground doesn't get wet" (contradiction of original)

  

### Tautologies and Contradictions

- A tautology is a compound proposition that is always true

  - Example: $p \vee \sim p$ is always true

  - Example: $(p \rightarrow q) \leftrightarrow (\sim p \vee q)$ is always true

- A contradiction is a compound proposition that is always false

  - Example: $p \wedge \sim p$ is always false

  - Example: $p \wedge \sim p \wedge q$ is always false

- A contingency is a compound proposition that can be either true or false

  - Example: $p \wedge q$ is true sometimes and false other times

  

### Logical Puzzles and Applications

- Logic is used in conditional statements, implications, and deductions

- Example: "You are entitled to Study Allowance if your parents earn less than $50,000 a year, or if you are over 25 and earn less than $25,000 a year, except that if you are not an Australian citizen you don't get anything."

  - Let $p$ = "parents earn less than $50,000"

  - Let $q$ = "you are over 25"  

  - Let $r$ = "you earn less than $25,000"

  - Let $s$ = "you are an Australian citizen"

  - Let $t$ = "you are entitled to Study Allowance"

  - Logical expression: $t \leftrightarrow ((p \vee (q \wedge r)) \wedge s)$