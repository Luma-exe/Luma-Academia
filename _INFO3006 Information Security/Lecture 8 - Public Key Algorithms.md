
> [!faq] About this Lecture
> Class: INFO3006
> Subject: #informationSecurity 
> Topics: #coding 
> Date: 2025-09-28 at 16:38

## Introduction

### History of Cryptography

- **Traditional Cryptography**: Based on elementary tools of substitution and permutation
- **Public Key Cryptography**: Based on mathematical functions, represents a revolution in cryptography history

### Features of Public Key Cryptography

- **Dual Key System**: Uses two related keys (asymmetric key system)
- **Three Main Applications**:
    - Confidentiality (encryption/decryption)
    - Key exchange
    - Authentication (digital signatures)

## Asymmetric Key Encryption

### Core Principles

- **Key Pairs**: Each user generates a pair of public and private keys
- **Key Distribution**: Public key is shared openly, private key kept secret
- **Bidirectional**: Either key can encrypt, the other decrypts

### Communication Process

1. Alice wants to send a message to Bob
2. Alice encrypts message with Bob's public key
3. Bob receives encrypted message
4. Bob decrypts with his private key
5. Only Bob can decrypt (only he has the private key)

### Trap-Door Functions

Public key cryptography relies on trap-door functions with these properties:

```
y = f(x)
```

- `f` is one-to-one mapping
- `y = f(x)` is easy to compute
- `f` is publicly known
- `x = f⁻¹(y)` is infeasible to compute without trap-door
- `x = f⁻¹(y)` is easy to compute if trap-door is known

## RSA Algorithm

### Overview

- **Type**: Block cipher
- **Data Range**: Plaintext and ciphertext are integers between 0 and n-1
- **Basic Operations**:
    - Encryption: `C = Mᵉ mod n`
    - Decryption: `M = Cᵈ mod n = (Mᵉ)ᵈ mod n = M^(ed) mod n`

### RSA Requirements

1. Must find e, d, n such that `M^(ed) mod n = M mod n` for all M < n
2. Must be relatively easy to calculate `Mᵉ` and `Cᵈ`
3. Must be infeasible to determine d given e and n

### RSA Setup Process

#### Step 1: Choose Prime Numbers

- Select two random large prime numbers: `p` and `q` (where p ≠ q)

#### Step 2: Calculate Modulus

- Compute `n = p × q`

#### Step 3: Choose Encryption Key

- Select encryption key `e` such that:
    - `1 < e < φ(n)`
    - `e` is relatively prime to `φ(n) = (p-1)(q-1)`
    - `gcd(e, φ(n)) = 1`

#### Step 4: Calculate Decryption Key

- Find decryption key `d` using Extended Euclidean Algorithm:
- `(e × d) mod φ(n) = 1`

### RSA Key Components

- **Public**: `n` (modulus), `e` (encryption key)
- **Private**: `d` (decryption key), `p`, `q` (prime factors)

### RSA Security Basis

- **Core Assumption**: Factorization of n is computationally infeasible
- Without knowing p and q, φ(n) cannot be calculated
- Without φ(n), finding d from e and n is infeasible

### RSA Examples

#### Example 1: Small Numbers

```
Setup:
p = 7, q = 5
n = p × q = 35
φ(n) = (p-1)(q-1) = 6 × 4 = 24

Public key selection:
1 < e < 24, gcd(e, 24) = 1
Valid e values: {5, 7, 11, 13, 17, 19, 23}
Choose e = 5

Private key calculation:
5d mod 24 = 1
d = 5

Encryption/Decryption:
Message: M = 2
Encryption: C = 2⁵ mod 35 = 32
Decryption: M = 32⁵ mod 35 = 2
```

#### Example 2: Larger Numbers

```
Setup:
p = 47, q = 71
n = 3337
φ(n) = 3220
e = 79
d = 79⁻¹ mod 3220 = 1019

Message Processing:
Original: P = 6882326879666683
Blocks: P₁ = 688, P₂ = 232, P₃ = 687, P₄ = 966, P₅ = 668, P₆ = 003

Encryption: 688⁷⁹ mod 3337 = 1570, ...
Ciphertext: C = 1570 2756 2091 2276 2423 158

Decryption: 1570¹⁰¹⁹ mod 3337 = 688, ...
```

## Square and Multiply Algorithm

### Purpose

Efficient computation of `aᵇ mod n` for large exponents

### Method

1. Express b in binary: `b = bₖbₖ₋₁...b₁b₀`
2. Use property: `aᵇ = a^(Σbᵢ×2ⁱ) = ∏(a^(2ⁱ))^bᵢ`

### Algorithm Pseudocode

```
Input: a, b, n
c = 0, d = 1
for i = k downto 0:
    c = 2 × c
    d = d × d mod n
    if bᵢ = 1:
        c = c + 1
        d = d × a mod n
return d
```

### Example: 7⁵⁶⁰ mod 561

```
b = 560 = 1000110000₂

Calculation steps:
Loop 1: b₉=1, c₁=1, d₁=7
Loop 2: b₈=0, c₂=2, d₂=49
Loop 3: b₇=0, c₃=4, d₃=157
Loop 4: b₆=0, c₄=8, d₄=526
Loop 5: b₅=1, c₅=17, d₅=160
Loop 6: b₄=1, c₆=35, d₆=241
Loop 7: b₃=0, c₇=70, d₇=298
Loop 8: b₂=0, c₈=140, d₈=166
Loop 9: b₁=0, c₉=280, d₉=67
Loop 10: b₀=0, c₁₀=560, d₁₀=1

Result: 7⁵⁶⁰ mod 561 = 1
```

## RSA Security Considerations

### Attack Methods

1. **Brute Force Attack**
    - Countermeasure: Use large key space
2. **Factorization Attack**
    - Attack: Find factors p and q from n to obtain φ(n)
    - Countermeasure: Use large prime numbers p and q
3. **Common Modulus Attack**
    - Vulnerability when same n is used across multiple key pairs

### Performance Issues

- RSA operations are computationally intensive
- Square and multiply algorithm helps optimize exponentiation

## RSA Applications

### Practical Uses

- **HTTPS Websites**: RSA validates server certificates
- **Key Exchange**: Secure key establishment with servers
- **Digital Signatures**: Authentication and non-repudiation

### Why RSA is Popular

- **Patent-Free**: No active patents, royalty-free usage
- **Versatility**: Same algorithm for encryption, decryption, signing, verification
- **Proven Security**: 30+ years without major compromises

## Diffie-Hellman Key Exchange

### Overview

- **Historical Significance**: First public key system
- **Security Basis**: Difficulty of computing discrete logarithms

### System Setup

- **Finite Field**: Zₚ where p is prime
- **Generator**: Primitive root element g in Zₚ
- **Public Parameters**: p and g are publicly known

### Primitive Root Definition

A primitive root g of prime p generates all integers from 1 to p-1:

- Powers `g mod p, g² mod p, ..., g^(p-1) mod p` are distinct
- These powers consist of integers 1 to p-1 in some permutation

### Primitive Root Example

```
Prime p = 7:

For g = 2:
2¹ mod 7 = 2    2⁴ mod 7 = 2
2² mod 7 = 4    2⁵ mod 7 = 4  
2³ mod 7 = 1    2⁶ mod 7 = 1
Result: {2, 4, 1} ≠ {1,2,3,4,5,6}, so 2 is NOT primitive root

For g = 3:
3¹ mod 7 = 3    3⁴ mod 7 = 4
3² mod 7 = 2    3⁵ mod 7 = 5
3³ mod 7 = 6    3⁶ mod 7 = 1
Result: {3, 2, 6, 4, 5, 1} = {1,2,3,4,5,6}, so 3 IS primitive root
```

### Diffie-Hellman Protocol

#### Setup Phase

1. **Alice**: Selects random secret Xₐ (1 < Xₐ < p)
2. **Alice**: Computes public key Yₐ = g^Xₐ mod p
3. **Bob**: Selects random secret Xᵦ (1 < Xᵦ < p)
4. **Bob**: Computes public key Yᵦ = g^Xᵦ mod p

#### Exchange Phase

1. **Alice** → **Bob**: Sends Yₐ
2. **Bob** → **Alice**: Sends Yᵦ

#### Key Computation

- **Alice**: Computes K = Yᵦ^Xₐ mod p
- **Bob**: Computes K = Yₐ^Xᵦ mod p
- **Result**: Both parties have same key K

### Diffie-Hellman Example

```
Parameters:
p = 97, g = 5, Xₐ = 36, Xᵦ = 58

Public Key Generation:
Yₐ = 5³⁶ mod 97 = 50
Yᵦ = 5⁵⁸ mod 97 = 44

Shared Key Computation:
Alice: K = 44³⁶ mod 97 = 75
Bob: K = 50⁵⁸ mod 97 = 75

Result: Shared secret K = 75
```

## Digital Signatures

### Concept

- **Purpose**: Authentication, integrity, and non-repudiation
- **Method**: Encrypt with sender's private key
- **Verification**: Decrypt with sender's public key

### Authenticator Approach

- **Problem**: Encrypting entire message requires excessive storage
- **Solution**: Encrypt small block (authenticator) that represents document
- **Property**: Infeasible to change document without changing authenticator

## RSA Digital Signatures

### Setup Process

Same as RSA encryption:

1. Choose primes p and q
2. Compute n = pq
3. Choose verification key e (1 < e < φ(n), gcd(e, φ(n)) = 1)
4. Calculate signing key d (ed mod φ(n) = 1)

### Key Roles

- **Public**: n (modulus), e (verification key)
- **Private**: d (signing key), p, q

### Signature Operations

#### Signing Process

```
S = M^d mod n
Signature Token: (S, M, n, d)
```

#### Verification Process

```
S^e = M^(de) = M^(φ(n)+1) = M^φ(n) × M = M (mod n)
```

Based on Euler's theorem: M^(φ(n)+1) ≡ M (mod n)

### RSA Signature Example

```
Setup:
p = 7, q = 17
n = pq = 7 × 17 = 119
φ(n) = (7-1)(17-1) = 96
e = 77 (verification key, gcd(77, 96) = 1)
d = 5 (signing key, 77 × 5 = 385 = 4 × 96 + 1)

Public: (e, n) = (77, 119)
Private: (d, p, q) = (5, 7, 17)

Signing:
Message M = 19
Signature S = 19⁵ mod 119 = 66
Signature Token: (66, 19, 119, 5)

Verification:
S^e = 66⁷⁷ mod 119 = 19 ✓
```

## Key Takeaways

### RSA Algorithm

- Foundation of modern public key cryptography
- Security based on difficulty of integer factorization
- Suitable for both encryption and digital signatures
- Computationally intensive but optimizable

### Diffie-Hellman

- Pioneering key exchange protocol
- Security based on discrete logarithm problem
- Enables secure key establishment over insecure channels

### Digital Signatures

- Provides authentication and integrity
- RSA signatures use private key for signing, public key for verification
- Essential for secure communications and document authentication

### Practical Considerations

- Key size crucial for security (larger keys = better security)
- Algorithm efficiency important for real-world deployment
- Both algorithms remain fundamental to internet security infrastructure