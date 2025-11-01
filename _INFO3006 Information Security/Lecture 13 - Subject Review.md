
> [!faq] About this Lecture
> Class: INFO3006
> Subject: #informationSecurity 
> Topics: #coding 
> Date: 2025-10-27 at 13:08

## Exam Details

### Format and Structure

- **Weight**: 50% of total grade
- **Duration**: 2 hours
- **Type**: Closed-book, supervised on-campus exam
- **Allowed Materials**: Scientific calculator only
- **Question Format**: Short answered questions (similar to weekly tutorials and assignments)
- **Scope**: All topics covered in lectures and tutorials
- **Note**: No programming tasks

### Preparation Strategy

- Understand all lecture slides thoroughly
- Review all tutorial work and solutions
- Review assignment questions and answers
- Focus on understanding concepts, not just memorization

---

## Core Security Concepts

### Security Requirements

- **Authentication**: Verifying identity of users/systems
- **Confidentiality**: Keeping information secret from unauthorized parties
- **Signature**: Ensuring message origin and integrity
- **Hash Function**: One-way function for data integrity
- **MAC (Message Authentication Code)**: Symmetric key-based authentication

## Classical Encryption Methods

### Basic Principles

- Understanding the fundamental design principles of classical ciphers
- Focus on substitution and transposition techniques

### Caesar Cipher

- **Encryption**: Shift each letter by a fixed number of positions
- **Decryption**: Shift back by the same number
- **Cryptanalysis**: Try all 26 possible keys (brute force)

````
Example:
Plaintext:  HELLO
Key:        3
Ciphertext: KHOOR

Encryption: C = (P + K) mod 26
Decryption: P = (C - K) mod 26
````

### Monoalphabetic Cipher
- **Encryption**: Substitute each letter with another fixed letter
- **Decryption**: Use inverse substitution
- **Key Space**: 26! possible keys

**Operations to Master**:
- Given key and plaintext → compute ciphertext
- Given key and ciphertext → compute plaintext

### Letter Frequency Distribution
- Used for cryptanalysis of substitution ciphers
- English letter frequencies help break monoalphabetic ciphers
- Most common letters: E, T, A, O, I, N, S, H, R

### Hill Cipher
```
Encryption Formula:
c1 = (K11 * p1 + K21 * p2) mod 26
c2 = (K12 * p1 + K22 * p2) mod 26

Example Key Matrix:
K11 = 2 (or C)
K21 = 3 (or D)
K12 = 11 (or L)
K22 = 7 (or H)
```

### Transposition Cipher
- Rearranges letters according to a key
- Can be applied multiple times for reinforcement
- Can combine with different keys or methods

**Example Process**:
```
Message: "compromised message"
Key: 632541
1. Apply transposition with key
2. Re-enforce with 2nd stage using same or different key
```

## Modular Arithmetic

### The Set Zn
- **Definition**: Set of nonnegative integers less than n
- **Notation**: Zn = {0, 1, 2, ..., n-1}
```
Example: Z5 = {0, 1, 2, 3, 4}
```

### The Set Zn* (Z-n-star)
- **Definition**: Set of residues modulo n that are relatively prime to n
- Elements that have multiplicative inverses
```
Example: Z8* = {1, 3, 5, 7}
All elements coprime to 8
```

### Modular Arithmetic Properties

#### Commutative Laws
```
(w + u) mod n = (u + w) mod n
(w × u) mod n = (u × w) mod n
```

#### Associative Laws
```
[(w + u) + v] mod n = [w + (u + v)] mod n
[(w × u) × v] mod n = [w × (u × v)] mod n
```

#### Distributive Law
```
[w × (u + v)] mod n = [(w × u) + (w × v)] mod n
```

#### Identity Elements
```
(0 + w) mod n = w mod n    // 0 is additive identity
(1 × w) mod n = w mod n    // 1 is multiplicative identity
```

#### Additive Inverse (-w)
- For each element w, there exists z such that (w + z) mod n = 0
```
Example in Z7:
(5 + 2) mod 7 = 0
Therefore: -5 = 2 and -2 = 5 (mod 7)

General formula: -w = (n - w) mod n
```

#### Multiplicative Inverse (w⁻¹)
- For non-zero w, there exists z such that (w × z) mod n = 1
- **Requirement**: n must be prime OR gcd(w, n) = 1
```
Example in Z7:
(5 × 3) mod 7 = 1
Therefore: 5⁻¹ = 3 and 3⁻¹ = 5 (mod 7)

Example in Z5 where w=2:
w⁻¹ = 3 because (2 × 3) mod 5 = 1
```

### GCD (Greatest Common Divisor)
- **Definition**: Largest positive integer dividing both numbers
- **Relatively Prime**: gcd(a,b) = 1 means a and b are relatively prime

## Abstract Algebra Foundations

### Groups

**Definition**: A group G = {G, •} is a set with binary operation satisfying:

- **(A1) Closure**: If a ∈ G and b ∈ G, then a•b ∈ G
- **(A2) Associative**: a•(b•c) = (a•b)•c for all a,b,c ∈ G
- **(A3) Identity Element**: ∃ element e where a•e = e•a = a
- **(A4) Inverse Element**: For each a ∈ G, ∃ a' where a•a' = a'•a = e

**Abelian Group**: Group that also satisfies:
- **(A5) Commutative**: a•b = b•a for all a,b ∈ G

**Example**: 
- Sn = set of all permutations of n distinct symbols forms a group
- Permutations are one-to-one mappings from Nn to Nn

### Rings

**Definition**: A ring R = {R, +, ×} is a set with two operations satisfying:

- **(A1-A5)**: R is an abelian group with respect to addition
  - Identity element: 0
  - Inverse of a: -a
- **(M1) Closure**: If a,b ∈ R, then ab ∈ R
- **(M2) Associativity**: a(bc) = (ab)c
- **(M3) Distributive Laws**: 
  - a(b+c) = ab + ac
  - (a+b)c = ac + bc

**Commutative Ring**: Ring satisfying:
- **(M4) Commutativity**: ab = ba for all a,b ∈ R

**Integral Domain**: Commutative ring satisfying:
- **(M5) Multiplicative Identity**: ∃ element 1 where a1 = 1a = a
- **(M6) No Zero Divisors**: If ab = 0, then a = 0 or b = 0
```
Example: Zn = {0, 1, 2, ..., n-1} with operations (+, ×) mod n
is a commutative ring
```

### Fields

**Definition**: A field F = {F, +, ×} allows all four operations (add, subtract, multiply, divide) without leaving the set.

**Axioms**:
- **(A1-M6)**: F is an integral domain
- **(M7) Multiplicative Inverse**: For each a ≠ 0, ∃ a⁻¹ where aa⁻¹ = a⁻¹a = 1

**Important Result**:
```
Zn = {0, 1, 2, ..., n-1} is a FIELD if and only if n is PRIME

When n is prime:
- Additive identity: e = 0
- For a = k: additive inverse = (n - k)
- Multiplicative identity: 1
- For any a ≠ 0: multiplicative inverse found using Extended Euclidean Algorithm
```

## Euler's Totient Function φ(n)

### Definition
- **φ(n)**: Number of positive integers less than n and relatively prime to n

### Key Formulas
```
For prime p:
φ(p) = p - 1

For two different primes p, q where n = pq:
φ(n) = φ(p) × φ(q) = (p-1)(q-1)

General formula for a = p1^b1 × p2^b2 × ... × pt^bt:
φ(a) = a(1 - 1/p1)(1 - 1/p2)...(1 - 1/pt)
```

**Example**:
```
n = 6
φ(6) = |{1, 5}| = 2
Alternative: 6 = 2 × 3
φ(6) = 6(1 - 1/2)(1 - 1/3) = 6(1/2)(2/3) = 2
```

### Euler's Theorem

**Statement**: For every a and p that are relatively prime:
```
a^φ(p) mod p = 1
```

**Zp* Properties**:
- Set of residues modulo p that are relatively prime to p
- Forms an abelian group under modulo multiplication (multiplicative group)
- Multiplicative identity is 1
- Every element has a multiplicative inverse
- Closed under multiplication
```
Example:
Z8* = {1, 3, 5, 7}
Z8 = {0, 1, 2, 3, 4, 5, 6, 7}
```

## Symmetric Key Ciphers

### Stream Ciphers
- Encrypt data one bit/byte at a time
- Uses keystream generation

### Block Ciphers
- Encrypt data in fixed-size blocks
- Focus on S-DES (Simplified DES)

### S-DES Key Concepts
**Must Know**:
- **Block size**: Size of plaintext/ciphertext blocks
- **Key size**: Length of encryption key
- **Single round structure**: How one round transforms data
- **f-function**: The core transformation function
- **S-box**: Substitution boxes for non-linear transformation

## RSA Cryptosystem

### Setup Phase
```
1. Choose two large prime numbers: p and q (p ≠ q)
2. Compute: n = p × q
3. Compute: φ(n) = (p-1)(q-1)
4. Choose encryption key e where:
   - 1 < e < φ(n)
   - gcd(e, φ(n)) = 1 (e relatively prime to φ(n))
5. Calculate decryption key d:
   - (e × d) mod φ(n) = 1
   - Use Extended Euclidean Algorithm
```

### Public and Private Information

**Public**:
- n (modulus)
- e (encryption/public key)

**Private**:
- d (decryption/private/secret key)
- p and q (prime factors)
- φ(n)

### Encryption and Decryption
```
Encryption (m < n):
C = M^e mod n

Decryption (c < n):
M = C^d mod n
M = M^(ed) mod n
M = M^(tφ(n)+1) mod n
M = M^(tφ(n)) × M mod n
M = M mod n  (by Corollary to Euler's Theorem)
```

### Security Basis
- **Hard Problem**: Factoring n into p and q
- Without p and q, cannot compute φ(n)
- Without φ(n), cannot compute d from e and n
- Computing C = M^e mod n is easy (fast exponentiation)
- Computing M = C^d mod n is easy (fast exponentiation)
- Finding d given only e and n is infeasible

### RSA Parameter Summary
```
Parameter | Type    | How Obtained
----------|---------|-------------
p, q      | Private | Chosen (random large primes)
n = pq    | Public  | Calculated
e         | Public  | Chosen (coprime to φ(n))
d         | Private | Calculated (ed ≡ 1 mod φ(n))
```

### RSA for Digital Signatures

**Signing** (using private key):
```
S = M^d mod n
```

**Verification** (using public key):
```
M = S^e mod n
```

### Blind Signature
- Allows signing without revealing message content
- Used in privacy-preserving protocols

## Diffie-Hellman Key Exchange

### Purpose
- First public key system
- Allows two parties to establish shared secret over insecure channel
- Security based on difficulty of discrete logarithm problem

### System Setup

**Public Parameters**:
- **p**: Large prime number
- **g**: Primitive root of p
- Both p and g are publicly known

### Primitive Root Definition

**Definition**: A primitive root g of prime p generates all integers from 1 to p-1 when raised to successive powers mod p.
```
The sequence: g mod p, g^2 mod p, g^3 mod p, ..., g^(p-1) mod p
produces all integers from 1 to p-1 in some permutation (all distinct)
```

### The Protocol
```
Alice's Steps:
1. Select secret: XA (where XA ∈ Zp)
2. Compute public key: YA = g^XA mod p
3. Send YA to Bob
4. Receive YB from Bob
5. Compute shared secret: K = YB^XA mod p

Bob's Steps:
1. Select secret: XB (where XB ∈ Zp)
2. Compute public key: YB = g^XB mod p
3. Send YB to Alice
4. Receive YA from Alice
5. Compute shared secret: K = YA^XB mod p

Result: Both compute same K
K = g^(XA×XB) mod p
```

### Why It Works
```
Alice computes: K = YB^XA mod p = (g^XB)^XA mod p = g^(XB×XA) mod p
Bob computes:   K = YA^XB mod p = (g^XA)^XB mod p = g^(XA×XB) mod p
Therefore: K_Alice = K_Bob
```

## Key Distribution and Management

### Symmetric Key Distribution

**Two Main Approaches**:

1. **Key Distribution by Key Distribution Centre (KDC)**
   - Centralized authority manages keys
   - Distributes session keys to communicating parties

2. **Decentralized Key Distribution**
   - No central authority
   - Parties establish keys directly

### Asymmetric Key Distribution

**Two Main Approaches**:

1. **Key Distribution by Public Key Authority**
   - Authority certifies public keys
   - Provides keys on request

2. **Public Key Certificates**
   - Digitally signed documents
   - Bind public key to identity
   - Can be verified without contacting authority

### Hybrid Approach
- **Distribution of Secret Key Using Public Key**
- Use asymmetric crypto to exchange symmetric keys
- Then use symmetric crypto for actual data encryption

## Message Authentication

### Three Main Approaches

1. **Based on Symmetric Key**
   - Both parties share secret key
   - Use encryption for authentication

2. **Based on Digital Signature**
   - Uses asymmetric cryptography
   - Sender signs with private key
   - Receiver verifies with public key

3. **Based on MAC and One-Way Hash Function**
   - Message Authentication Code (MAC)
   - Combines message with secret key
   - Produces fixed-length output

### Message Authentication and Confidentiality
- Can combine authentication with encryption
- Ensures both integrity and secrecy
- Various schemes: Encrypt-then-MAC, MAC-then-Encrypt, Encrypt-and-MAC

## Kerberos

### Overview
- Authentication protocol for networked environments
- Uses symmetric key encryption exclusively
- Trusted third-party authentication service

### Key Components
- **Kerberos Architecture**: Client-Server model with KDC
- **Protocol Version 4 (V4)**: Must understand the protocol flows
- **Tickets**: Encrypted credentials for accessing services
- **Ticket Granting Server (TGS)**: Issues service tickets

### Protocol Understanding Required
- Initial authentication with Authentication Server
- Ticket Granting Ticket (TGT) issuance
- Service ticket request and issuance
- Service access using tickets

## Practice Exercises

### Exercise One: Hill Cipher

**Problem**: Encrypt "hello" using Hill cipher
```
Given:
K11 = 2 (or C)
K21 = 3 (or D)
K12 = 11 (or L)
K22 = 7 (or H)
Use "z" as filler

Encryption formulas:
c1 = (K11×p1 + K21×p2) mod 26
c2 = (K12×p1 + K22×p2) mod 26

Steps:
1. Convert plaintext to numbers: h=7, e=4, l=11, l=11, o=14, z=25
2. Group into pairs: (7,4), (11,11), (14,25)
3. Apply encryption to each pair
4. Convert back to letters
```

### Exercise Two: Transposition Cipher

**Problem**: Encrypt "compromised message" with key=632541
```
Steps:
1. Write message in rows under key columns
2. Read columns in key order: 6,3,2,5,4,1
3. Apply second stage with same key to result
4. Can also try with different key or method for reinforcement
```

### Exercise Three: RSA

**Problem**: Given p=5, q=3, find e and d
```
Solution:
1. Compute n = p × q = 5 × 3 = 15

2. Compute φ(n) = (p-1)(q-1) = (5-1)(3-1) = 4 × 2 = 8

3. Choose e such that gcd(e, φ(n)) = 1 and 1 < e < φ(n)
   Options: e could be 3, 5, or 7
   Example: Choose e = 3

4. Calculate d such that (e × d) mod φ(n) = 1
   (3 × d) mod 8 = 1
   3d ≡ 1 (mod 8)
   
   Testing: 3×3 = 9 ≡ 1 (mod 8)
   Therefore: d = 3

Summary:
n = 15
e = 3 (public key)
d = 3 (private key)
```

### Exercise Four: Diffie-Hellman

**Problem**: Given P=13, g=2, XA=3, XB=5, calculate secret key
```
Solution:

Alice's computation:
YA = g^XA mod P = 2^3 mod 13 = 8 mod 13 = 8

Bob's computation:
YB = g^XB mod P = 2^5 mod 13 = 32 mod 13 = 6

Alice receives YB and computes:
K = YB^XA mod P = 6^3 mod 13 = 216 mod 13 = 8

Bob receives YA and computes:
K = YA^XB mod P = 8^5 mod 13 = 32768 mod 13 = 8

Shared Secret Key: K = 8
```

### Exercise Five: Secure Communication Protocol

**Problem**: Alice and Bob have public key capability. Design protocol for session key distribution and authenticated/confidential messaging.
```
Protocol Design:

Assumptions:
- Alice has (PKA, SKA) - public/private key pair
- Bob has (PKB, SKB) - public/private key pair
- Both know each other's public keys
- Session key Ks is randomly generated

Session Key Distribution:
1. Alice generates random session key Ks
2. Alice encrypts Ks with Bob's public key: EPKb(Ks)
3. Alice signs encrypted key with her private key: SSKa(EPKb(Ks))
4. Bob receives message, verifies signature with PKA
5. Bob decrypts with his private key SKB to get Ks

Secure Communication:
For message M from Alice to Bob:
1. Alice encrypts: C = EKs(M)
2. Alice creates MAC: MAC = H(M || Ks)
3. Alice signs: S = SSKa(M || MAC)
4. Send: C || S

Bob verifies and decrypts:
1. Verify signature S using PKA
2. Decrypt: M = DKs(C)
3. Verify MAC: check H(M || Ks) = MAC
```

## Key Study Tips

### Conceptual Understanding
- Know when to use symmetric vs asymmetric encryption
- Understand trade-offs between security and performance
- Grasp the mathematical foundations (modular arithmetic, fields, groups)

### Practical Skills
- Be able to perform RSA setup calculations by hand
- Practice Diffie-Hellman key exchange with small numbers
- Work through cipher encryption/decryption examples
- Calculate φ(n) for various values

### Common Exam Topics
- RSA parameter calculation and encryption/decryption
- Diffie-Hellman key exchange
- Modular arithmetic operations
- Classical cipher techniques
- Protocol design for authenticated communication
- Understanding of MAC, hash functions, and digital signatures

### Formula Sheet (Key Formulas to Remember)
```
Modular Arithmetic:
- Additive inverse: -w = (n - w) mod n
- φ(pq) = (p-1)(q-1) for primes p, q

RSA:
- n = p × q
- φ(n) = (p-1)(q-1)
- e × d ≡ 1 (mod φ(n))
- Encryption: C = M^e mod n
- Decryption: M = C^d mod n

Diffie-Hellman:
- YA = g^XA mod p
- YB = g^XB mod p
- K = YB^XA mod p = YA^XB mod p

Euler's Theorem:
- a^φ(p) ≡ 1 (mod p) when gcd(a,p) = 1
````