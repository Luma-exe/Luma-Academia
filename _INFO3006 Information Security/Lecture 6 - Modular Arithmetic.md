
> [!faq] About this Lecture
> Class: INFO3006
> Subject: #informationSecurity 
> Topics: #coding 
> Date: 2025-09-14 at 21:02

## Introduction

This lecture covers fundamental concepts of modular arithmetic essential for information security, including number theory basics, divisibility, greatest common divisors, multiplicative inverses, and prime numbers.

## Number Types and Definitions

### Basic Number Classifications

- **Natural Numbers**: Whole, non-negative numbers that occur commonly in nature (0, 1, 2, 3, ...)
- **Rational Numbers**: All possible integer-to-natural-number ratios p/q
- **Irrational Numbers**: Numbers that cannot be reduced to any integer-to-natural-number ratio p/q
- **Real Numbers**: The union of rational and irrational numbers

## Divisibility

### Core Concepts

**Divisibility Notation**: `b|a` means "b divides a"

- This occurs when `a = mb` for some integer m
- If `b|a`, then b is called a divisor of a

### Key Divisibility Relations

```
1. if a|1, then a = 1 or a = -1
2. if a|b and b|a, then a = b or a = -b  
3. any b ≠ 0 divides 0
4. if b|g and b|h, then b|(mg + nh) for arbitrary integers m, n
```

## Division Algorithm

### Formula and Components

```
a = qn + r
where: 0 ≤ r < n
```

**Variables**:

- `a` = dividend (nonnegative integer)
- `n` = divisor (positive integer)
- `q` = quotient (largest integer ≤ a/n)
- `r` = remainder

**Key Point**: This relationship always holds for any positive integer n and nonnegative integer a.

## Greatest Common Divisor (GCD)

### Definition

`x = gcd(a, b)`: x is the largest integer that divides both integers a and b

### Euclidean Algorithm

**Principle**: If x divides both a and b, then x also divides (a - kb)

**Proof**:

```
Given: a = xa₁ and b = xb₁
Then: a - kb = xa₁ - xkb₁ = x(a₁ - kb₁) = xd
```

### Algorithm Steps

```
Euclid's Algorithm to find gcd(a,b): (assumes a > b > 0)
1. A ← a; B ← b
2. If B = 0 return A = gcd(a,b)
3. R = A mod B
4. A ← B
5. B ← R
6. Goto step 2
```

### Worked Example

**Find gcd(22, 6)**:

```
22 = 3 × 6 + 4    → gcd(22,6) = gcd(6,4)
6 = 1 × 4 + 2     → gcd(6,4) = gcd(4,2)  
4 = 2 × 2 + 0     → gcd(4,2) = gcd(2,0)
```

**Result**: gcd(22, 6) = 2

### Exercise Problem

**Find gcd(147, 23)** using Euclidean Algorithm

## Modular Arithmetic

### Core Definition

The `(mod n)` operator maps all integers into the set {0, 1, ..., (n-1)}

**Congruence**: a and b are congruent modulo n if:

- `(a mod n) = (b mod n)`, OR
- Their difference `a - b` is an integer multiple of n

**Notation**: `a ≡ b (mod n)`

### Important Distinction

```
✓ Correct: 19 ≡ 7 (mod 12)
✗ Wrong:   19 = 7 (mod 12)
```

**Explanation**:

- `19 ≡ 7 (mod 12)` means `19 mod 12 = 7 mod 12`
- But `7 mod 12 = 7 ≠ 19`

### Clock Arithmetic Examples

```
19 ≡ 7 (mod 12) because 19 = 1×12 + 7 or 19-7 = 12×1
4 ≡ 4 (mod 12) because 4 = 0×12 + 4 or 4-4 = 12×0
```

### Standard Form

```
a mod n = r  or  a = qn + r
where:
- a ≡ r (mod n) with n > 0
- r is the residue/remainder
- q is the quotient
```

### Arithmetic Properties

**Addition and Multiplication**:

```
(a + b) mod n = (a mod n + b mod n) mod n
(a × b) mod n = [(a mod n) × (b mod n)] mod n
```

**Exponent Properties**:

```
aᵐ × aⁿ = aᵐ⁺ⁿ
(aᵐ)ⁿ = aᵐˣⁿ
```

**Example Calculation**:

```
3¹² mod 7 = (3² mod 7)⁶ mod 7 = (2 mod 7)⁶ mod 7
         = (2³ mod 7)² mod 7 = 1² mod 7 = 1
```

## Modular Arithmetic Properties

### Set Definition

**Zₙ = {0, 1, 2, ..., n-1}**: The set of nonnegative integers less than n

### Algebraic Properties

**Commutative Laws**:

```
(w + u) mod n = (u + w) mod n
(w × u) mod n = (u × w) mod n
```

**Associative Laws**:

```
[(w + u) + v] mod n = [w + (u + v)] mod n
[(w × u) × v] mod n = [w × (u × v)] mod n
```

**Distributive Law**:

```
[w × (u + v)] mod n = [(w × u) + (w × v)] mod n
```

**Identities**:

```
(0 + w) mod n = w mod n
(1 × w) mod n = w mod n
```

**Inverses**:

- **Additive inverse (-w)**: For each w, there exists -w such that `[w + (-w)] mod n = 0`
- **Multiplicative inverse (w⁻¹)**: For each w in the set, there exists w⁻¹ such that `(w × w⁻¹) mod n = 1` (when n is prime)

### Example in Z₇

```
w = 5: -w = 2, w⁻¹ = 3
w = 6: w⁻¹ = 6
Verification: (5 + 2) mod 7 = 0, (5 × 3) mod 7 = 1
```

### Proof Examples

**Addition Proof**: If `(5 + 23) ≡ (5 + 7) (mod 8)` then `23 ≡ 7 (mod 8)`

```
Additive inverse of 5 mod 8 is 3, so:
(3 + 5 + 23) mod 8 = (3 + 5 + 7) mod 8
(8 + 23) mod 8 = (8 + 7) mod 8
23 mod 8 = 7 mod 8
Therefore: 23 ≡ 7 (mod 8)
```

**Multiplication Proof**: If `(5 × 23) ≡ (5 × 7) (mod 8)` then `23 ≡ 7 (mod 8)`

```
Multiplicative inverse of 5 mod 8 is 5, so:
(5 × 5 × 23) mod 8 = (5 × 5 × 7) mod 8
(25 × 23) mod 8 = (25 × 7) mod 8
23 mod 8 = 7 mod 8
Therefore: 23 ≡ 7 (mod 8)
```

### Operation Tables in Z₇

**Addition Table**:

```
+  | 0  1  2  3  4  5  6
---|-------------------
0  | 0  1  2  3  4  5  6
1  | 1  2  3  4  5  6  0
2  | 2  3  4  5  6  0  1
3  | 3  4  5  6  0  1  2
4  | 4  5  6  0  1  2  3
5  | 5  6  0  1  2  3  4
6  | 6  0  1  2  3  4  5
```

**Multiplication Table**:

```
×  | 0  1  2  3  4  5  6
---|-------------------
0  | 0  0  0  0  0  0  0
1  | 0  1  2  3  4  5  6
2  | 0  2  4  6  1  3  5
3  | 0  3  6  2  5  1  4
4  | 0  4  1  5  2  6  3
5  | 0  5  3  1  6  4  2
6  | 0  6  5  4  3  2  1
```

**Inverse Table**:

```
w   | 0  1  2  3  4  5  6
-w  | 0  6  5  4  3  2  1
w⁻¹ | 0  1  4  5  2  3  6
```

## Finding Multiplicative Inverse

### Conditions for Existence

If `gcd(m, b) = 1`, then b has a multiplicative inverse b⁻¹ (where 0 < b⁻¹ < m) such that:

```
b × b⁻¹ ≡ 1 (mod m)
```

### Extended Euclidean Algorithm

```
Extended Euclid(m, b):
1. (A₁, A₂, A₃) ← (1, 0, m); (B₁, B₂, B₃) ← (0, 1, b)
2. If B₃ = 0 return A₃ = gcd(m,b); no inverse
3. If B₃ = 1 return B₃ = gcd(m,b); B₂ = the inverse
4. Q = A₃/B₃ (Q is the quotient)
5. (T₁, T₂, T₃) ← (A₁-QB₁, A₂-QB₂, A₃-QB₃)
6. (A₁, A₂, A₃) ← (B₁, B₂, B₃)
7. (B₁, B₂, B₃) ← (T₁, T₂, T₃)
8. Goto step 2
```

### Worked Example

**Find the inverse of 5 mod 23**:

1. Check: `gcd(5, 23) = 1` ✓
2. Apply Extended Euclidean Algorithm
3. Result: The inverse is -9 ≡ 14 (mod 23)

**Verification**:

```
b⁻¹ = (-9) mod 23 = (-9 + 23) mod 23 = 14 mod 23 = 14
Check: 5 × 14 mod 23 = 70 mod 23 = 1 ✓
```

### Exercise Problem

**Find the multiplicative inverse of 23 modulo 147**

## Prime Numbers

### Definition and Properties

**Prime Number**: An integer p > 1 whose only divisors are 1 and p

**Fundamental Theorem of Arithmetic**: Any integer a > 1 can be factored uniquely as:

```
a = p₁^b₁ × p₂^b₂ × ... × pₜ^bₜ
where p₁ < p₂ < ... < pₜ are prime numbers
```

**Example**:

```
3600 = 2⁴ × 3² × 5²
Represented as: (b₂ = 4, b₃ = 2, b₅ = 2)
```

### Arithmetic with Prime Factorization

**Multiplication Rule**: k = mn implies kₚ = mₚ + nₚ for each prime p

**Example**:

```
k = 12 × 18 = 216
12 = 2² × 3¹, 18 = 2¹ × 3²
k₂ = 2 + 1 = 3, k₃ = 1 + 2 = 3
Therefore: 216 = 2³ × 3³
```

## Relatively Prime Numbers

### Definition

**Relatively Prime**: gcd(a, b) = 1

- a and b have no common factors except 1
- Neither a nor b needs to be prime individually

**Example**: 8 and 15 are relatively prime because gcd(8, 15) = 1

### GCD with Prime Factorization

**Rule**: gcd(a, b) equals the product of the lowest powers of all common prime factors

**Example**: Find gcd(18, 300)

```
18 = 2¹ × 3²
300 = 2² × 3¹ × 5²
gcd(18, 300) = 2¹ × 3¹ × 5⁰ = 2 × 3 × 1 = 6
```

## Euler's Totient Function

### Definition

**φ(n)**: The number of positive integers less than n and relatively prime to n

**Convention**: φ(1) = 1

### Special Cases

**For prime p**:

```
φ(p) = p - 1
```

**For product of two different primes p, q**:

```
n = pq
φ(n) = φ(p) × φ(q) = (p-1)(q-1)
```

### General Formula

For any number `a = p₁^b₁ × p₂^b₂ × ... × pₜ^bₜ`:

```
φ(a) = a(1 - 1/p₁)(1 - 1/p₂)...(1 - 1/pₜ)
```

## Euler's Theorem

### Statement

For every a and p that are relatively prime:

```
a^φ(p) ≡ 1 (mod p)
```

### Multiplicative Group Zₚ*

**Definition**: Zₚ* is the set of residues modulo p that are relatively prime to p

**Properties**:

- Zₚ* is an abelian group under multiplication
- The multiplicative identity is 1
- Every element in Zₚ* has a multiplicative inverse
- Zₚ* is closed under multiplication
- When p is prime, Zₚ* is cyclic with order φ(p)

**Restatement of Euler's Theorem**:

```
If a ∈ Zₚ*, then a^φ(p) ≡ 1 (mod p)
```

## Fermat's Little Theorem

### Statement

If p is prime and a is a positive integer not divisible by p, then:

```
a^(p-1) ≡ 1 (mod p)
```

### Proof

```
If p is prime, then φ(p) = p - 1
From Euler's theorem: a^φ(p) ≡ 1 (mod p)
Therefore: a^(p-1) ≡ 1 (mod p)
```

### Equivalent Condition

The condition "a is not divisible by p" is equivalent to:

- `gcd(a, p) = 1`, OR
- `a ∈ Zₚ*`

## Key Applications in Information Security

- **RSA Cryptography**: Uses modular exponentiation and Euler's theorem
- **Digital Signatures**: Relies on multiplicative inverses
- **Key Generation**: Requires prime number testing and generation
- **Hash Functions**: Often use modular arithmetic properties
- **Cryptographic Protocols**: Depend on properties of finite fields and groups

## Study Tips and Exam Preparation

### Essential Concepts to Master

1. **Euclidean Algorithm**: Practice finding GCDs step by step
2. **Extended Euclidean Algorithm**: Focus on finding multiplicative inverses
3. **Modular Arithmetic Properties**: Memorize the key algebraic laws
4. **Prime Factorization**: Understand unique factorization and its applications
5. **Euler's Function**: Calculate φ(n) for various types of numbers
6. **Theorem Applications**: Apply Fermat's Little Theorem and Euler's Theorem

### Common Pitfalls

- Confusing congruence (≡) with equality (=)
- Forgetting to check gcd conditions for multiplicative inverses
- Mixing up additive and multiplicative inverses
- Incorrect application of modular arithmetic properties

### Practice Problems

Work through all the exercises mentioned:

- gcd(147, 23) using Euclidean Algorithm
- Multiplicative inverse of 23 modulo 147
- Various modular arithmetic calculations using the operation tables
