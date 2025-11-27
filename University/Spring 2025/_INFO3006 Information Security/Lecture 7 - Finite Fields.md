
> [!faq] About this Lecture
> Class: INFO3006
> Subject: #informationSecurity 
> Topics: #coding 
> Date: 2025-09-14 at 22:33

### Importance in Cryptography

- Modern cryptography algorithms rely heavily on properties of finite fields
- Part of abstract algebra (modern algebra) - a branch of mathematics
- Operations follow specific rules that define the nature of mathematical sets
- Not limited to ordinary arithmetic operations

---

## Groups

### Definition

A **group G**, denoted by `{G,•}`, is a set of elements with a binary operation `•` that associates each ordered pair `(a,b)` of elements in G to an element `(a•b)` in G.

### Group Axioms

A group must satisfy four fundamental axioms:

**(A1) Closure**: If `a ∈ G` and `b ∈ G`, then `a•b ∈ G`

- The operation on any two group elements produces another group element

**(A2) Associativity**: `a•(b•c) = (a•b)•c` for all `a,b,c ∈ G`

- Order of operations doesn't matter when combining three elements

**(A3) Identity Element**: There exists an element `e ∈ G` such that `a•e = e•a = a` for all `a ∈ G`

- There's a neutral element that doesn't change other elements when operated with

**(A4) Inverse Element**: For each `a ∈ G`, there exists an element `a' ∈ G` such that `a•a' = a'•a = e`

- Every element has an inverse that produces the identity when operated together

### Example 1: Integers with Addition

**Set**: `N = {all integers}`  
**Operation**: Addition (`+`)

**Verification**:

- **(A1) Closure**: If `a,b ∈ N`, then `a + b ∈ N` ✓
- **(A2) Associativity**: `a + (b + c) = (a + b) + c` ✓
- **(A3) Identity**: `e = 0`, since `a + 0 = 0 + a = a` ✓
- **(A4) Inverse**: For each `a ∈ N`, inverse is `a' = -a`, since `a + (-a) = (-a) + a = 0` ✓

**Result**: `{N,+}` is a group

### Example 2: Permutation Group

**Set**: `Sₙ` = set of all permutations of n distinct symbols `{1,2,...,n}`  
**Operation**: Permutation composition

- Each element of `Sₙ` represents a one-to-one mapping from `Nₙ` to `Nₙ`
- The operation `•` is permutation composition
- `{Sₙ,•}` forms a group

### Abelian Groups

A group is **abelian** (commutative) if it satisfies an additional condition:

**(A5) Commutativity**: `a•b = b•a` for all `a,b ∈ G`

---

## Rings

### Definition

A **ring R**, denoted by `{R,+,×}`, is a set of elements with two binary operations (addition and multiplication) that must satisfy specific axioms.

### Ring Axioms

**(A1-A5)**: R is an abelian group with respect to addition

- Identity element: `0`
- Inverse of `a`: `-a`

**(M1) Closure under Multiplication**: If `a,b ∈ R`, then `a×b ∈ R`

**(M2) Associativity under Multiplication**: `a×(b×c) = (a×b)×c` for all `a,b,c ∈ R`

**(M3) Distributive Laws**:

- `a×(b+c) = a×b + a×c` for all `a,b,c ∈ R`
- `(a+b)×c = a×c + b×c` for all `a,b,c ∈ R`

### Key Properties

- In a ring, you can perform addition, subtraction `[a-b = a+(-b)]`, and multiplication without leaving the set
- Division is not necessarily possible in all rings

### Commutative Rings

A ring is **commutative** if it satisfies: **(M4) Commutativity under Multiplication**: `a×b = b×a` for all `a,b ∈ R`

### Example: Modular Arithmetic Ring

**Set**: `Zₙ = {0, 1, 2, ..., n-1}`  
**Operations**: Addition and multiplication modulo n

- This forms a commutative ring
- **Addition identity**: `e = 0`
- **Additive inverse**: For element `a ≠ 0`, inverse is `n-a`

### Integral Domains

An **integral domain** is a commutative ring that additionally satisfies:

**(M5) Multiplicative Identity**: There exists element `1 ∈ R` such that `a×1 = 1×a = a` for all `a ∈ R`

**(M6) No Zero Divisors**: If `a,b ∈ R` and `a×b = 0`, then either `a = 0` or `b = 0`

- This prevents non-zero elements from multiplying to give zero

---

## Fields

### Definition

A **field** is a set where you can perform addition, subtraction, multiplication, and **division** without leaving the set.

A **field F**, denoted by `{F,+,×}`, is a set of elements with two binary operations that satisfy all the axioms of an integral domain plus one additional axiom.

### Field Axioms

**(A1-M6)**: F is an integral domain (satisfies all ring and integral domain axioms)

**(M7) Multiplicative Inverse**: For each `a ∈ F` (except `a = 0`), there exists `a⁻¹ ∈ F` such that `a×a⁻¹ = a⁻¹×a = 1`

### Key Property

Fields allow **division** by any non-zero element, making them the most complete algebraic structures for arithmetic operations.

### Example: Prime Modular Fields

**Set**: `Zₙ = {0, 1, 2, ..., n-1}` where **n is prime**  
**Operations**: Addition and multiplication modulo n

**Properties when n is prime**:

- **Addition**:
    - Identity element: `0`
    - Inverse of `a`: `n-a`
- **Multiplication**:
    - Identity element: `1`
    - Multiplicative inverse of `a`: Can always be calculated using the **Extended Euclidean Algorithm** because `gcd(n,a) = 1` for all `a ≠ 0`

### Why Prime Numbers Matter

When `n` is prime, every non-zero element in `Zₙ` has a multiplicative inverse, which is essential for the field property. This is because:

- `gcd(n,a) = 1` for all `0 < a < n` when n is prime
- The Extended Euclidean Algorithm can find the multiplicative inverse

---

## Hierarchy Summary

```
Field ⊂ Integral Domain ⊂ Commutative Ring ⊂ Ring ⊂ Abelian Group ⊂ Group
```

### Operation Capabilities:

- **Group**: One operation (e.g., addition)
- **Ring**: Addition, subtraction, multiplication
- **Integral Domain**: Ring + multiplicative identity + no zero divisors
- **Field**: Integral Domain + division (multiplicative inverses)

---

## Applications in Cryptography

### Why Finite Fields Matter:

1. **Computational Efficiency**: Operations in finite fields can be computed efficiently
2. **Security Properties**: Mathematical properties provide cryptographic strength
3. **Error Correction**: Used in error-correcting codes
4. **Key Exchange**: Foundation for elliptic curve cryptography and other protocols

### Common Cryptographic Applications:

- **AES (Advanced Encryption Standard)**: Uses `GF(2⁸)` - finite field with 256 elements
- **Elliptic Curve Cryptography**: Operations performed over finite fields
- **Reed-Solomon Codes**: Error correction using finite field arithmetic
- **Secret Sharing Schemes**: Polynomial interpolation in finite fields