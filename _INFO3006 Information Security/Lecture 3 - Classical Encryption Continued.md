
> [!faq] About this Lecture
> Class: INFO3019
> Subject: #informationSecurity
> Topics: #coding 
> Date: 2025-08-05 at 12:58

## Overview
This lecture covers advanced classical encryption techniques including polyalphabetic ciphers, transposition ciphers, Hill cipher, and one-way hash functions. These methods build upon basic substitution ciphers to provide better security through increased complexity and mathematical operations.

## Polyalphabetic Substitution Cipher

### Background
- **Problem with Monoalphabetic Ciphers**: Hide distribution via homomorphisms but vulnerable to frequency analysis
- **Solution**: Use multiple substitution alphabets to create flatter frequency distribution
- **Method**: Uses a set of substitution rules with a key determining which rule to choose

### Vigenère Cipher

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/E352JJ8xv48" frameborder="0" allowfullscreen></iframe>
</div>

#### Process
1. Select a key from 26 letters
2. Create key string as long as plaintext by repeating key letters
3. Apply Caesar cipher for each character pair
4. Last key letter may be incomplete if plaintext doesn't divide evenly

#### Example
```
Key:        deceptivedeceptivedeceptive
Plaintext:  wearediscoveredsaveyourself
Ciphertext: zicvtwqngrzgvtwavzhcqyglmgj
```

#### Encryption Formula
```
Encryption: d+w=z mod26, e+e=i mod26, ...
Decryption: w=z-d mod26, e=i-e mod26, ...
```

## Transposition Techniques (Transposition Cipher)

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/sHsnH1u03e4" frameborder="0" allowfullscreen></iframe>
</div>

### Basic Concept
- Rearranges characters of plaintext rather than substituting them
- More complex version: write message in rectangle row by row, read column by column with permuted column order

### Example Process

#### Setup
```
Key: 2 4 1 3
Plaintext: COMPUTERSECURITY

Arrange in rectangle:
2 4 1 3
C O M P
U T E R
S E C U
R I T Y
```

#### Encryption
```
Read columns in key order (1,2,3,4):
Column 1 (M): MECT
Column 2 (C): CSUSR
Column 3 (P): PRUY
Column 4 (O): OTEI

Ciphertext: MECTCUSRPRUYOTEI
```

#### Decryption
```
Reverse process using original key order:
1 2 3 4
M C P O
E U R T
C S U E
T R Y I

Result: COMPUTERSECURITY
```

### Permutation and Inverse Permutation
- **Key relationship**: P = 2 4 1 3, P⁻¹ = 3 1 4 2
- **Another example**: If P = 4 2 1 3, then P⁻¹ = 3 2 4 1
- **Usage convention**: Use P⁻¹ for encryption, P for decryption
- Either P or P⁻¹ can be used for encryption (the other for decryption)

### Practice Exercise
**Problem**: Encrypt "compromised message" using:
1. First stage: key = 632541
2. Second stage: key = 4 3 1 6 2 5

**Note**: If last row isn't full, pad with infrequent letters

## One-Time Pad

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/QVV_bUxxiZ8" frameborder="0" allowfullscreen></iframe>
</div>

### Definition
- Encryption scheme by Joseph Mauborgne (AT&T)
- Large non-repeating set of truly random key letters
- Key length equals message length
- Written on paper sheets glued in a pad

### Encryption/Decryption Formulas

#### For Letters
```
Encryption: Ciphertext_letter = (Plaintext_letter + Key_letter) mod 26
Decryption: Plaintext_letter = (Ciphertext_letter - Key_letter) mod 26
```

#### For Bits (XOR operation)
```
Encryption: Ciphertext_bit = Plaintext_bit ⊕ Key_bit
Decryption: Plaintext_bit = Ciphertext_bit ⊕ Key_bit
```

#### XOR Truth Table
```
0 ⊕ 0 = 0
0 ⊕ 1 = 1
1 ⊕ 0 = 1
1 ⊕ 1 = 0
```

#### Mathematical Proof
```
c = p ⊕ k
p = c ⊕ k = (p ⊕ k) ⊕ k = p ⊕ (k ⊕ k) = p ⊕ 0 = p
```

### Example
```
Message:    ONETIMEPAD
Key on pad: TBFRGFARFM
Ciphertext: HOJKOREGFP

Calculation:
O + T mod 26 = H
N + B mod 26 = O
E + F mod 26 = J
...
```

### Security Properties
- **Perfect Security**: Each letter used exactly once for only one message
- **Key Management**: Sender and receiver destroy used pad sections after use
- **Cryptanalysis Resistance**: Given ciphertext equally likely to correspond to any plaintext of equal size
- **Information Theory**: Opponent has no information for cryptanalysis since every key sequence is equally likely

## Hill Cipher

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/fffgRyr6PQ8" frameborder="0" allowfullscreen></iframe>
</div>

### Background
- **Inventor**: Lester Hill (American Mathematician, 1929)
- **Significance**: First practical polygraphic cipher operating on more than three symbols
- **Foundation**: Based on linear algebra and matrix multiplication
- **Modern Usage**: Essential component in AES (provides diffusion)

### Security Concepts
- **Confusion**: Hides relationship between key and ciphertext
- **Diffusion**: Hides relationship between plaintext and ciphertext
- **Note**: Matrix multiplication alone doesn't provide security but essential when combined with non-linear operations

### Mathematical Framework

#### Basic Structure
- Encrypts m successive letters at a time
- Produces m ciphertext letters
- Last group padded to m letters if incomplete
- Letters assigned numerical values: a=0, b=1, ..., z=25

#### For m=3 System
```
c₁ = (k₁₁p₁ + k₂₁p₂ + k₃₁p₃) mod 26
c₂ = (k₁₂p₁ + k₂₂p₂ + k₃₂p₃) mod 26
c₃ = (k₁₃p₁ + k₂₃p₂ + k₃₃p₃) mod 26
```

### Matrix Representations

#### Row Vector Form
```
[c₁ c₂ c₃] = [p₁ p₂ p₃] × [k₁₁ k₁₂ k₁₃]
                              [k₂₁ k₂₂ k₂₃] mod 26
                              [k₃₁ k₃₂ k₃₃]

Or: C = PK mod 26
```

#### Column Vector Form
```
[c₁]   [k₁₁ k₂₁ k₃₁] [p₁]
[c₂] = [k₁₂ k₂₂ k₃₂] [p₂] mod 26
[c₃]   [k₁₃ k₂₃ k₃₃] [p₃]

Or: C = K'P mod 26
```

### Matrix Multiplication Rules
```
C = A × B
Where:
A: n by m matrix (n rows, m columns)
B: m by k matrix
C: n by k matrix (result)
```

### Practice Example
**Problem**: Encrypt "hello" with Hill cipher

#### Setup
```
Plaintext: "hello" → "he ll oz" (padded)
Numerical: (7,4) (11,11) (14,25)

Key matrix (2×2):
k₁₁ = 2, k₁₂ = 3
k₂₁ = 11, k₂₂ = 5

Alternative notation:
k₁₁ = C, k₁₂ = D
k₂₁ = L, k₂₂ = F
```

#### Encryption Formula (2×2)
```
c₁ = (k₁₁p₁ + k₂₁p₂) mod 26
c₂ = (k₁₂p₁ + k₂₂p₂) mod 26
```

#### Matrix Form
```
[c₁ c₂] = [p₁ p₂] × [k₁₁ k₁₂] mod 26
                     [k₂₁ k₂₂]

Or column form:
[c₁]   [k₁₁ k₂₁] [p₁]
[c₂] = [k₁₂ k₂₂] [p₂] mod 26
```

## One-Way Hash Functions

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/f4HnmVb2M00" frameborder="0" allowfullscreen></iframe>
</div>

### Definition and Purpose
- **Hash Function**: Mathematical function taking variable-length input (pre-image) and converting to fixed-length output (hash value)
- **One-Way Property**: Easy to compute hash from pre-image, computationally hard to generate pre-image from hash
- **Alternative Names**: Compression function, contraction function, message digest, fingerprint

### Properties

#### Basic Properties
- **Easy Direction**: Given x, find y where y = H(x)
- **Hard Direction**: Given y, infeasible to find x where y = H(x)
- **Size Relationship**: Hash value y (fixed size) smaller than input x (variable size)

#### Collision Resistance
- **Weak Collision Resistance**: Given x, hard to find x' (x ≠ x') such that H(x) = H(x')
- **Strong Collision Resistance**: Hard to find any pair (x ≠ x') such that H(x) = H(x')

### Construction Method
- **Input**: Sequence of n-bit blocks
- **Processing**: Iterative, one block at a time
- **Output**: n-bit hash function

### Simple Hash Function Implementation

#### Bit-by-bit XOR Method
```
Cᵢ = bᵢ₁ ⊕ bᵢ₂ ⊕ ... ⊕ bᵢₘ

Where:
Cᵢ = ith bit of hash code
m = number of n-bit blocks in input
bᵢⱼ = ith bit in jth block
```

#### Expanded Form
```
C₁ = b₁₁ ⊕ b₁₂ ⊕ ... ⊕ b₁ₘ
C₂ = b₂₁ ⊕ b₂₂ ⊕ ... ⊕ b₂ₘ
...
Cₙ = bₙ₁ ⊕ bₙ₂ ⊕ ... ⊕ bₙₘ
```

#### Visual Representation
```
Message blocks:
[b₁₁ b₂₁ ... bₙ₁]
[b₁₂ b₂₂ ... bₙ₂]
...
[b₁ₘ b₂ₘ ... bₙₘ]

Each bit: 0 or 1
```

### Advanced Hash Function Design

#### Cipher Block Chaining Method
```
Encryption: cᵢ = pᵢ ⊕ H(k, cᵢ₋₁)
Decryption: pᵢ = cᵢ ⊕ H(k, cᵢ₋₁)
```

#### Stream Cipher Variant
```
cᵢ = pᵢ ⊕ sᵢ    where sᵢ = H(k, cᵢ₋₁)
pᵢ = cᵢ ⊕ sᵢ    where sᵢ = H(k, cᵢ₋₁)
```

### Real-World Hash Functions

#### MD5 (Message Digest Algorithm)
- **Year**: Designed 1991 to replace MD4
- **Status**: Now considered unsecure
- **Usage**: Used by Unix systems to store passwords

#### SHA (Secure Hash Algorithm)
- **Developer**: U.S. National Security Agency
- **Timeline**:
  - SHA: 1993
  - SHA-1: 1995
  - SHA-2: 2001
  - SHA-3: 2012 (new function, not derived from SHA-2)
- **Modern Application**: SHA-256 used in blockchain algorithms

## Key Takeaways

### Security Evolution
- **Monoalphabetic** → **Polyalphabetic**: Better frequency distribution
- **Substitution** → **Transposition**: Position-based security
- **Classical** → **Mathematical**: Linear algebra foundations
- **Reversible** → **One-way**: Computational security

### Modern Relevance
- **Hill Cipher**: Matrix operations foundational to AES
- **One-Time Pad**: Theoretical perfect security benchmark
- **Hash Functions**: Critical for modern cryptographic protocols
- **Confusion/Diffusion**: Core principles in contemporary ciphers

### Practical Applications
- **Vigenère**: Historical military communications
- **Transposition**: Rail fence ciphers, route ciphers
- **Hill**: Academic understanding of linear transformations
- **Hash**: Password storage, digital signatures, blockchain

