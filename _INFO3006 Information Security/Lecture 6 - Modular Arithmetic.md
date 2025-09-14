
> [!faq] About this Lecture
> Class: INFO3006
> Subject: #informationSecurity 
> Topics: #coding 
> Date: 2025-09-14 at 21:02

## Overview

This lecture covers fundamental concepts in modular arithmetic that are essential for information security, including:

- Number theory foundations
- Modular arithmetic operations and properties
- Greatest Common Divisor (GCD) algorithms
- Finding multiplicative inverses
- Prime numbers and their applications

## Number Types and Definitions

### Basic Number Categories

- **Natural numbers**: Whole, non-negative numbers that occur commonly in nature (0, 1, 2, 3, ...)
- **Rational numbers**: Numbers that can be expressed as ratios p/q where p and q are integers
- **Irrational numbers**: Numbers that cannot be reduced to integer ratios p/q
- **Real numbers**: The union of rational and irrational numbers

## Divisibility Theory

### Basic Divisibility Concepts

**Definition**: b divides a (written as b|a) if a = mb for some integer m, where a, b, and m are integers.

If b|a, then b is called a **divisor** of a.

### Key Divisibility Relations

- If a|1, then a = ±1
- If a|b and b|a, then a = ±b
- Any non-zero number b divides 0
- If b|g and b|h, then b|(mg + nh) for arbitrary integers m, n

## Division Algorithm

**Fundamental Theorem**: For any positive integer n and non-negative integer a:
=======
> Class: INFS3006
> Subject: #informationSecurity
> Topics: #coding 
> Date: 2025-09-05 at 09:25

## Overview

This lecture covers fundamental concepts of modular arithmetic essential for information security, including number theory basics, divisibility, GCD algorithms, multiplicative inverses, and prime numbers.

## Number Theory Fundamentals

### Types of Numbers

- **Natural Numbers**: Whole, non-negative numbers that occur commonly in nature
- **Rational Numbers**: All possible integer-to-natural-number ratios p/q
- **Irrational Numbers**: Numbers that cannot be reduced to integer-to-natural-number ratios p/q
- **Real Numbers**: Union of rational and irrational numbers

### Divisibility Concepts

- **Notation**: b divides a is written as `b|a` if `a = mb` for some integer m
- If `b|a`, then b is a **divisor** of a

#### Key Divisibility Relations

- If `a|1`, then `a = 1` or `a = -1`
- If `a|b` and `b|a`, then `a = b` or `a = -b`
- Any `b ≠ 0` divides 0
- If `b|g` and `b|h`, then `b|(mg + nh)` for arbitrary integers m, n

### Division Algorithm

For any positive integer n and nonnegative integer a:
>>>>>>> origin/main

```
a = qn + r
```

<<<<<<< HEAD
Where:

- q = ⌊a/n⌋ (quotient - largest integer ≤ a/n)
- r is the remainder with 0 ≤ r < n

This relationship is called the **division algorithm**.
=======
where:

- `0 ≤ r < n`
- q = ⌊a/n⌋ (largest integer ≤ a/n)
- q is the **quotient**
- r is the **remainder**
>>>>>>> origin/main

## Greatest Common Divisor (GCD)

### Definition

<<<<<<< HEAD
**gcd(a,b)** = x is the largest integer that divides both integers a and b.

### Euclidean Algorithm

**Principle**: If x divides both a and b, then x also divides (a - kb).

**Proof**: If a = xa₁ and b = xb₁, then:

```
a - kb = xa₁ - xkb₁ = x(a₁ - kb₁) = xd
```

### Algorithm Steps (assumes a > b > 0)

```
1. A ← a; B ← b
2. If B = 0, return A = gcd(a,b)
=======
`gcd(a, b) = x` where x is the largest integer that divides both a and b

### Euclidean Algorithm

**Purpose**: Find gcd(a, b) efficiently

**Algorithm Steps** (assumes a > b > 0):

1. A ← a; B ← b
2. If B = 0, return A = gcd(a, b)
>>>>>>> origin/main
3. R = A mod B
4. A ← B
5. B ← R
6. Goto step 2
<<<<<<< HEAD
```

### Worked Example

**Find gcd(22, 6):**

```
22 = 3 × 6 + 4    → gcd(22,6) = gcd(6,4)
6 = 1 × 4 + 2     → gcd(6,4) = gcd(4,2)  
4 = 2 × 2 + 0     → gcd(4,2) = gcd(2,0)
```

**Result**: gcd(22, 6) = 2

### Practice Exercise

**Find gcd(147, 23)** using Euclidean Algorithm.

## Modular Arithmetic

### Basic Definition

The **(mod n)** operator maps all integers into the set {0, 1, ..., (n-1)}.

**Congruence**: a and b are congruent modulo n if:

- (a mod n) = (b mod n), OR
- Their difference (a - b) is an integer multiple of n

**Notation**: a ≡ b (mod n)

### Important Distinction

⚠️ **Key Point**: Congruent (≡) is NOT equal (=)

- 19 ≡ 7 (mod 12) ✓ (correct)
- 19 = 7 (mod 12) ✗ (wrong)

**Explanation**: 19 ≡ 7 (mod 12) means 19 mod 12 = 7 mod 12, but 7 ≠ 19.

### Clock Arithmetic Examples

```
19 ≡ 7 (mod 12)    because 19 = 1×12 + 7, or 19-7 = 12×1
4 ≡ 4 (mod 12)     because 4 = 0×12 + 4, or 4-4 = 12×0
=======

#### Worked Example: gcd(22, 6)

```
22 = 3 × 6 + 4  → gcd(22, 6) = gcd(6, 4)
6 = 1 × 4 + 2   → gcd(6, 4) = gcd(4, 2)
4 = 2 × 2 + 0   → gcd(4, 2) = gcd(2, 0) = 2

Therefore: gcd(22, 6) = 2
```

#### Exercise: gcd(147, 23)

```
147 = 6 × 23 + 9   → gcd(147, 23) = gcd(23, 9)
23 = 2 × 9 + 5     → gcd(23, 9) = gcd(9, 5)
9 = 1 × 5 + 4      → gcd(9, 5) = gcd(5, 4)
5 = 1 × 4 + 1      → gcd(5, 4) = gcd(4, 1)
4 = 4 × 1 + 0      → gcd(4, 1) = 1

Therefore: gcd(147, 23) = 1
```

## Modular Arithmetic

### Basic Concepts

- **Modular operator**: (mod n) maps all integers to {0, 1, ..., n-1}
- **Congruence**: a ≡ b (mod n) if (a mod n) = (b mod n)
- Equivalently: a - b is an integer multiple of n

#### Important Notation Distinction

- `19 ≡ 7 (mod 12)` ✓ (correct - congruent)
- `19 = 7 mod 12` ✗ (incorrect - not equal)
- `19 ≡ 7 (mod 12)` means `19 mod 12 = 7 mod 12 = 7`

### Clock Arithmetic Example

```
19 ≡ 7 (mod 12) because 19 = 1×12 + 7
4 ≡ 4 (mod 12) because 4 = 0×12 + 4
>>>>>>> origin/main
```

### Modular Arithmetic Properties

<<<<<<< HEAD
**Notation**: a mod n = r or a = qn + r

- a is congruent to r modulo n (n > 0)
- r is the residue/remainder
- q is the quotient

**Addition and Multiplication Properties**:
=======
#### Basic Operations
>>>>>>> origin/main

```
(a + b) mod n = (a mod n + b mod n) mod n
(a × b) mod n = [(a mod n) × (b mod n)] mod n
```

<<<<<<< HEAD
**Exponentiation Property**:

```
aᵐ × aⁿ = aᵐ⁺ⁿ
(aᵐ)ⁿ = aᵐˣⁿ
```

**Example**:

```
3¹² mod 7 = (3² mod 7)⁶ mod 7 = (2 mod 7)⁶ mod 7 = 
= (2³ mod 7)² mod 7 = 1² mod 7 = 1
```

### Algebraic Properties in Zₙ

**Set Definition**: Zₙ = {0, 1, 2, ..., n-1}

**Properties**:

- **Commutative laws**:
    - (w + u) mod n = (u + w) mod n
    - (w × u) mod n = (u × w) mod n
- **Associative laws**:
    - [(w + u) + v] mod n = [w + (u + v)] mod n
    - [(w × u) × v] mod n = [w × (u × v)] mod n
- **Distribution law**: [w × (u + v)] mod n = [(w × u) + (w × v)] mod n
- **Identities**:
    - (0 + w) mod n = w mod n
    - (1 × w) mod n = w mod n
- **Additive inverse (-w)**: For each w, there exists -w such that [w + (-w)] mod n = 0
- **Multiplicative inverse (w⁻¹)**: For each w, there exists w⁻¹ such that (w × w⁻¹) mod n = 1 (when n is prime)

**Example in Z₇**: {0,1,2,3,4,5,6}

- If w = 5, then -w = 2, w⁻¹ = 3
- If w = 6, then w⁻¹ = 6

### Modular Arithmetic Tables

**Addition Table in Z₇**:
=======
#### Power Rule Example

```
3^12 mod 7 = (3^2 mod 7)^6 mod 7 = (9 mod 7)^6 mod 7 = 2^6 mod 7
= (2^3 mod 7)^2 mod 7 = 1^2 mod 7 = 1
```

### Set Zn Properties

Define **Zn = {0, 1, 2, ..., n-1}** with these properties:

#### Commutative Laws

- `(w + u) mod n = (u + w) mod n`
- `(w × u) mod n = (u × w) mod n`

#### Associative Laws

- `[(w + u) + v] mod n = [w + (u + v)] mod n`
- `[(w × u) × v] mod n = [w × (u × v)] mod n`

#### Distributive Law

- `[w × (u + v)] mod n = [(w × u) + (w × v)] mod n`

#### Identities

- `(0 + w) mod n = w mod n`
- `(1 × w) mod n = w mod n`

#### Inverses

- **Additive inverse** (-w): `[w + (-w)] mod n = 0`
- **Multiplicative inverse** (w^-1): `(w × w^-1) mod n = 1` (when n is prime)

### Example Tables for Z7

#### Addition Table in Z7
>>>>>>> origin/main

```
+   0  1  2  3  4  5  6
0   0  1  2  3  4  5  6
1   1  2  3  4  5  6  0
2   2  3  4  5  6  0  1
3   3  4  5  6  0  1  2
4   4  5  6  0  1  2  3
5   5  6  0  1  2  3  4
6   6  0  1  2  3  4  5
```

<<<<<<< HEAD
**Multiplication Table in Z₇**:
=======
#### Multiplication Table in Z7
>>>>>>> origin/main

```
×   0  1  2  3  4  5  6
0   0  0  0  0  0  0  0
1   0  1  2  3  4  5  6
2   0  2  4  6  1  3  5
3   0  3  6  2  5  1  4
4   0  4  1  5  2  6  3
5   0  5  3  1  6  4  2
6   0  6  5  4  3  2  1
```

<<<<<<< HEAD
**Inverses in Z₇**:

```
w     0  1  2  3  4  5  6
-w    0  6  5  4  3  2  1
w⁻¹   -  1  4  5  2  3  6
=======
#### Inverses in Z7

```
w    0  1  2  3  4  5  6
-w   0  6  5  4  3  2  1
w^-1 -  1  4  5  2  3  6
>>>>>>> origin/main
```

## Finding Multiplicative Inverse

### Condition for Existence

<<<<<<< HEAD
If gcd(m, b) = 1, then b has a multiplicative inverse b⁻¹ (0 < b⁻¹ < m) such that:

```
b × b⁻¹ ≡ 1 (mod m)
```

### Extended Euclidean Algorithm

**Algorithm Steps**:

```
1. (A₁, A₂, A₃) ← (1, 0, m); (B₁, B₂, B₃) ← (0, 1, b)
2. If B₃ = 0, return A₃ = gcd(m,b); no inverse exists
3. If B₃ = 1, return B₃ = gcd(m,b); B₂ = the inverse
4. Q = ⌊A₃/B₃⌋ (Q is the quotient)
5. (T₁, T₂, T₃) ← (A₁-QB₁, A₂-QB₂, A₃-QB₃)
6. (A₁, A₂, A₃) ← (B₁, B₂, B₃)
7. (B₁, B₂, B₃) ← (T₁, T₂, T₃)
8. Goto step 2
```

### Worked Example

**Find the inverse of 5 mod 23**:

1. First check: gcd(5, 23) = 1 ✓ (inverse exists)
2. Apply Extended Euclidean Algorithm
3. Result: inverse = -9 ≡ 14 (mod 23)

**Verification**:

```
b⁻¹ = (-9) mod 23 = (-9 + 23) mod 23 = 14 mod 23 = 14
```

### Practice Exercise

**Find the multiplicative inverse of 23 modulo 147**.
=======
If `gcd(m, b) = 1`, then b has multiplicative inverse b^-1 where `b × b^-1 ≡ 1 (mod m)`

### Extended Euclidean Algorithm

**Purpose**: Find both gcd(m, b) and multiplicative inverse of b mod m

**Algorithm Steps**:

1. (A1, A2, A3) ← (1, 0, m); (B1, B2, B3) ← (0, 1, b)
2. If B3 = 0, return A3 = gcd(m, b); no inverse exists
3. If B3 = 1, return B3 = gcd(m, b); B2 = multiplicative inverse
4. Q = ⌊A3/B3⌋ (quotient)
5. (T1, T2, T3) ← (A1 - QB1, A2 - QB2, A3 - QB3)
6. (A1, A2, A3) ← (B1, B2, B3)
7. (B1, B2, B3) ← (T1, T2, T3)
8. Goto step 2

#### Worked Example: Inverse of 5 mod 23

1. Check: gcd(5, 23) = 1 ✓ (inverse exists)
2. Apply Extended Euclidean Algorithm
3. Result: inverse = -9 ≡ 14 (mod 23)
4. Verification: `5 × 14 = 70 ≡ 1 (mod 23)` ✓
>>>>>>> origin/main

## Prime Numbers

### Definition and Properties

<<<<<<< HEAD
**Prime Number**: An integer p > 1 whose only divisors are 1 and p.

**Fundamental Theorem of Arithmetic**: Any integer a > 1 can be uniquely factored as:

```
a = p₁^b₁ × p₂^b₂ × ... × pₜ^bₜ
```

where p₁ < p₂ < ... < pₜ are prime numbers.

**Example**: 3600 = 2⁴ × 3² × 5² can be represented as (b₂ = 4, b₃ = 2, b₅ = 2)

### Multiplication Using Prime Factorization

For k = mn, where m and n have prime factorizations:

```
kₚ = mₚ + nₚ (add corresponding exponents)
```

**Example**:

```
k = 12 × 18 = 216
12 = 2² × 3¹, 18 = 2¹ × 3²
k₂ = 2 + 1 = 3, k₃ = 1 + 2 = 3
Therefore: 216 = 2³ × 3³
```

## Relatively Prime Numbers

### Definition

Two numbers a and b are **relatively prime** if gcd(a, b) = 1.

- They have no common factors except 1
- Neither a nor b needs to be prime individually

**Example**: 8 and 15 are relatively prime because gcd(8, 15) = 1.

### GCD Using Prime Factorization

**Formula**: gcd(a, b) = max[c, such that c|a and c|b]

**Example**: Find gcd(18, 300)

```
18 = 2¹ × 3²
300 = 2² × 3¹ × 5²
gcd(18, 300) = 2¹ × 3¹ × 5⁰ = 6
```

## Euler's Totient Function

### Definition

**φ(n)** = the number of positive integers less than n and relatively prime to n.

**Convention**: φ(1) = 1

### Key Formulas

- **For prime p**: φ(p) = p - 1
- **For two different primes p, q**: φ(pq) = φ(p)φ(q) = (p-1)(q-1)
- **General formula**: For a = p₁^b₁ × p₂^b₂ × ... × pₜ^bₜ:

```
  φ(a) = a × (1-1/p₁) × (1-1/p₂) × ... × (1-1/pₜ)
```

## Euler's Theorem

### Statement
=======
- **Prime number**: Integer p > 1 whose only divisors are 1 and p
- **Fundamental theorem**: Any integer a > 1 can be factored uniquely as:
    
    ```
    a = p1^b1 × p2^b2 × ... × pt^bt
    ```
    
    where p1 < p2 < ... < pt are prime numbers

#### Example: Prime Factorization

```
3600 = 2^4 × 3^2 × 5^2
Representation: (b2 = 4, b3 = 2, b5 = 2)
```

#### Multiplication Using Exponents

For k = mn:

```
kp = mp + np for each prime p
Example: 12 × 18 = 216
12 = 2^2 × 3^1, 18 = 2^1 × 3^2
216 = 2^(2+1) × 3^(1+2) = 2^3 × 3^3
```

### Relatively Prime Numbers

- **Definition**: gcd(a, b) = 1
- a and b share no common factors except 1
- Neither a nor b needs to be prime
- **Example**: gcd(8, 15) = 1, so 8 and 15 are relatively prime

#### GCD Using Prime Factorization

```
Example: gcd(18, 300)
18 = 2^1 × 3^2
300 = 2^2 × 3^1 × 5^2
gcd(18, 300) = 2^min(1,2) × 3^min(2,1) × 5^min(0,2) = 2^1 × 3^1 × 5^0 = 6
```

## Euler's Functions and Theorems

### Euler's Totient Function φ(n)

**Definition**: φ(n) = number of positive integers less than n that are relatively prime to n

#### Special Cases

- φ(1) = 1 (by convention)
- For prime p: φ(p) = p - 1
- For two different primes p, q: φ(pq) = φ(p)φ(q) = (p-1)(q-1)

#### General Formula

For a = p1^b1 × p2^b2 × ... × pt^bt:

```
φ(a) = a × (1 - 1/p1) × (1 - 1/p2) × ... × (1 - 1/pt)
```

### Euler's Theorem
>>>>>>> origin/main

For every a and p that are relatively prime:

```
a^φ(p) ≡ 1 (mod p)
```

<<<<<<< HEAD
### Multiplicative Group Z*ₚ

**Z*ₚ** = the set of residues modulo p that are relatively prime to p.

**Properties**:

- Z*ₚ is an abelian group under multiplication (multiplicative group)
- The multiplicative identity is 1
- Every element in Z*ₚ has a multiplicative inverse
- Z*ₚ is closed under multiplication
- When p is prime, Z*ₚ is cyclic with order φ(p)

**Restatement**: If a ∈ Z*ₚ, then a^φ(p) ≡ 1 (mod p)

## Fermat's Little Theorem

### Statement

If p is prime and a is a positive integer not divisible by p, then:
=======
### Multiplicative Group Zp*

- **Definition**: Set of residues modulo p that are relatively prime to p
- Forms an **abelian group** under multiplication
- Properties:
    - Multiplicative identity is 1
    - Every element has multiplicative inverse
    - Closed under multiplication
    - When p is prime, Zp* is **cyclic** with order φ(p)

### Fermat's Little Theorem

**Statement**: If p is prime and gcd(a, p) = 1, then:
>>>>>>> origin/main

```
a^(p-1) ≡ 1 (mod p)
```

<<<<<<< HEAD
### Proof

If p is prime, then φ(p) = p - 1. From Euler's theorem:

```
a^φ(p) ≡ a^(p-1) ≡ 1 (mod p)
```

**Note**: The condition "a not divisible by p" is equivalent to gcd(a, p) = 1 or a ∈ Z*ₚ.

## Key Applications in Information Security

1. **Cryptographic Algorithms**: RSA encryption relies heavily on modular arithmetic
2. **Key Generation**: Prime numbers and totient functions are crucial for generating secure keys
3. **Digital Signatures**: Multiplicative inverses are used in signature verification
4. **Hash Functions**: Modular arithmetic provides the mathematical foundation for many hash algorithms

## Study Tips and Exam Focus

- **Master the Euclidean Algorithm**: Practice finding GCD with various number pairs
- **Understand modular properties**: These form the basis for most cryptographic operations
- **Practice finding multiplicative inverses**: Use the Extended Euclidean Algorithm
- **Know the difference between ≡ and =**: This is a common source of errors
- **Memorize key theorems**: Euler's theorem and Fermat's Little Theorem are fundamental
=======
**Proof**: Since p is prime, φ(p) = p - 1. By Euler's theorem, a^φ(p) = a^(p-1) ≡ 1 (mod p).

## Key Applications in Information Security

- **RSA Cryptography**: Uses modular exponentiation with large primes
- **Digital Signatures**: Relies on multiplicative inverses
- **Key Exchange**: Utilizes properties of cyclic groups
- **Hash Functions**: Often employ modular arithmetic for efficiency
- **Random Number Generation**: Uses congruential methods

>>>>>>> origin/main
