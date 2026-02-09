
> [!faq] About this Lecture
> Class: INFO3006
> Subject: #informationSecurity
> Topics: #coding 
> Date: 2025-07-29 at 03:21

## Basic Concepts

### Core Terminology

#### Message Components
- **Plaintext**: The original clear message
- **Ciphertext**: The transformed message after encryption
- **Cipher**: An algorithm for transforming/encrypting a clear message into ciphertext so unauthorized parties cannot find the plaintext
- **Key**: A data unit used for encryption or decryption

#### Encryption Processes
- **Encipher/Encrypt**: Process of converting plaintext to ciphertext using a cipher and key
- **Decipher/Decrypt**: Process of converting ciphertext back into plaintext using a cipher and key

#### Related Fields
- **Cryptography**: Science/mathematics of transforming plaintext into ciphertext and back to plaintext
- **Cryptanalysis**: Study of transforming ciphertext back to original plaintext **without knowledge of the key**
- **Cryptology**: Both cryptography and cryptanalysis combined

### Cryptographic System Characteristics

**Cryptographic systems are characterized by**:
1. **Type of operations** used for transforming plaintext to ciphertext
2. **Number of keys** used
3. **Way in which plaintext is processed**

### Cryptanalysis Attack Methods

**Two general approaches to attack conventional/classical schemes**:
1. **Cryptanalysis**: Analytical attacks using mathematical/statistical methods
2. **Brute-force attack**: Systematically trying all possible keys

## Models of Encryption and Decryption

### Basic Definitions
- **Encryption**: Process of encoding a message so its meaning is not obvious
- **Decryption**: Reverse process of transforming encrypted message back to normal form

### Key Types

#### Symmetric Key Encryption
- **Characteristic**: Encryption key and decryption key are the **same**
- **Examples**: DES, AES, classical ciphers

#### Asymmetric Key Encryption  
- **Characteristic**: Encryption key and decryption key are **different**
- **Components**: 
  - Public/encryption key of recipient
  - Secret/decryption key of recipient
- **Example**: RSA

### Visual Representation
```
Symmetric Encryption:
Plaintext → [Same Key] → Ciphertext → [Same Key] → Plaintext

Asymmetric Encryption:
Plaintext → [Public Key] → Ciphertext → [Private Key] → Plaintext
```

## Security of Encryption Schemes

### Unconditionally Secure
- **Definition**: Ciphertext generated does not contain enough information to determine plaintext
- **Characteristic**: No matter how much ciphertext is available, plaintext cannot be determined

### Computationally Secure
**Must meet TWO criteria**:
1. **Cost criterion**: Cost of breaking cipher exceeds value of encrypted information
2. **Time criterion**: Time required to break cipher exceeds useful lifetime of the information

## Mathematical Notation

### Encryption/Decryption Formulas

#### Basic Notation
- **Encryption**: `C = E(P)` or `C = E_key(P)`
- **Decryption**: `P = D(C) = D(E(P))` or `P = D_key(C)`

#### Symmetric Cryptosystem
```
Encryption: C = E_key(P)
Decryption: P = D_key(C)
```

#### Asymmetric Cryptosystem
```
Encryption: C = E_EncryptionKey(P)
Decryption: P = D_DecryptionKey(C)
```

## Classical Encryption Building Blocks

### Two Basic Mechanisms

#### 1. Substitution
- **Method**: Letters of plaintext replaced by other letters, numbers, or symbols
- **Principle**: Character replacement

#### 2. Transposition (Permutation)
- **Method**: Letters of plaintext are reordered
- **Principle**: Position rearrangement

**Important Note**: These are the **two basic building blocks** of all classical encryption techniques.

## Caesar Cipher

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/fR8rVR72a6o" frameborder="0" allowfullscreen></iframe>
</div>

### Historical Background
- **Named after**: Julius Caesar (100-44 BC)
- **Original use**: Military message protection with k=3
- **Type**: Substitution cipher

### Method
- **Principle**: Move each letter of alphabet to letter k positions to the right
- **Example**: With k=3: A→D, B→E, C→F, ...

### Mathematical Formulation

#### Letter to Number Mapping
```
a=0, b=1, c=2, ..., z=25
```

#### Encryption Formula
```
C = E(P_i) = (i + k) mod 26
or
C = E(k,p) = (p + k) mod 26
```

#### Decryption Formula
```
P_i = D(C) = (C - k) mod 26
or  
P = D(k,c) = (c - k) mod 26
```

### Practical Example
```
Plaintext:  HELLOZ
Key (k=2):  +2 shift
Ciphertext: JGNNQB

H(7) + 2 = 9 = J
E(4) + 2 = 6 = G  
L(11) + 2 = 13 = N
L(11) + 2 = 13 = N
O(14) + 2 = 16 = Q
Z(25) + 2 = 27 mod 26 = 1 = B
```

## Modular Arithmetic

### Definition
- **Purpose**: Maps all integers into set {0, 1, ..., (n-1)}
- **Technique**: Performs arithmetic operations within confines of this set

### Notation
```
a mod n = r
or
a = qn + r

Where:
r = residue/remainder
q = quotient
```

### Example
```
30 mod 26 = 4
30 = 1×26 + 4
```

## Caesar Cipher Analysis

### Vulnerabilities

#### 1. Limited Key Space
- **Problem**: Only 25 possible keys (1, 2, ..., 25)
- **Solution**: Easy to break by brute force

#### 2. Known Algorithm
- **Problem**: Encryption/decryption algorithms are known
- **Impact**: Only key secrecy provides security

#### 3. Language Recognition
- **Problem**: Plaintext language known and easily recognizable
- **Impact**: Pattern analysis possible

### Countermeasures
1. **Expand key space**: Include all ASCII codes (255 keys)
2. **Pre-processing**: Zip file before encryption to make ciphertext unreadable

### Exercise Example
**Problem**: Encrypt "this subject is not hard" with key k=30

**Solution**:
```
k = 30 mod 26 = 4

t(19) + 4 = 23 = X
h(7) + 4 = 11 = L  
i(8) + 4 = 12 = M
s(18) + 4 = 22 = W

Result: "this" → "XLMW"
Complete: "this subject is not hard" → "XLMW WYFNIGX MW RSX LEVH"
```

### Brute Force Attack Example
**Given ciphertext**: "DRSC"
**Try all keys k=1 to 25**:

```
k=1: CQRB
k=2: BPQA  
k=3: AOPZ
k=4: ZNOY
...
k=22: THIS ← Meaningful plaintext found!
```

## Frequency Analysis Attack

### Principle
- **Method**: If encipherment achieved by simple letter shift, frequency count of ciphertext letters yields same pattern as original language but shifted
- **Weakness**: Caesar cipher preserves letter frequency distribution

### English Letter Frequency Distribution
**Most common letters in English**:
```
E (12.02%), T (9.10%), A (8.12%), O (7.68%), I (7.31%), N (6.95%), S (6.28%), H (6.09%), R (5.99%)
```

**Attack Method**:
1. Count letter frequencies in ciphertext
2. Compare with known English frequencies
3. Determine shift amount
4. Decrypt message

## Monoalphabetic Cipher with Key

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ZJWKpviXPCo" frameborder="0" allowfullscreen></iframe>
</div>

### Method
**Key-based substitution table construction**:

**Example with key "KEY"**:
```
Original:   A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Cipher:     K E Y A B C D F G H I J L M N O P Q R S T U V W X Z
```

**Encryption Example**:
```
Plaintext:  HELLO
Ciphertext: FBJJN
```

### Improvement: Arbitrary Substitution
- **Advantage**: Increases key space significantly
- **Method**: Allow any permutation of alphabet
- **Key space**: 26! possible keys

## General Monoalphabetic Cipher

### Construction Method

#### Step 1: Select Secret Key
- **Requirement**: Avoid repeating letters
- **Example**: "star wars" → use letters "s, t, a, r, w" (remove duplicates)

#### Step 2: Create Rectangle
```
S T A R W
B C D E F  
G H I J K
L M N O P
Q U V X Y
Z
```

#### Step 3: Read Column-wise
```
Column 1: S, B, G, L, Q, Z
Column 2: T, C, H, M, U
Column 3: A, D, I, N, V  
Column 4: R, E, J, O, X
Column 5: W, F, K, P, Y
```

### Substitution Table
```
Position:  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
Original:  A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
Cipher:    S  B  G  L  Q  Z  T  C  H  M  U  A  D  I  N  V  R  E  J  O  X  W  F  K  P  Y
```

### Encryption Example
```
Plaintext:  I KNOW ONLY THAT I KNOW NOTHING
Ciphertext: H UINF NIAP OCSO H UINF INOCHIT
```

### Vulnerability
- **Problem**: Monoalphabetic ciphers reflect frequency data of original alphabet
- **Attack**: Statistical frequency analysis still works

### Countermeasure: Homophones
- **Method**: Provide multiple substitutes for single letter
- **Example**: Letter 'e' assigned cipher symbols 16, 74, 35, 21
- **Usage**: Each homophone used in rotation

## Playfair Cipher

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/-KjFbTK1IIw" frameborder="0" allowfullscreen></iframe>
</div>

### Historical Background
- **Inventor**: Charles Wheatstone (1854)
- **Purpose**: Secrecy in telegraphy
- **Name origin**: Lyon Playfair (British scientist who promoted it)
- **Military use**: 
  - British in World War I
  - British, Australian & New Zealand in World War II

### Characteristics
- **Type**: Multiple-letter encryption cipher (bigram)
- **Advantage**: Does not use fixed substitution
- **Security**: Significantly harder to break than monoalphabetic ciphers
- **Resistance**: Frequency analysis for simple substitution doesn't work

### Algorithm Setup

#### 5×5 Matrix Construction
**Example with keyword "MONARCHY"**:
```
M O N A R
C H Y B D  
E F G I/J K
L P Q S T
U V W X Z
```

**Notes**:
- Remove duplicate letters from keyword
- Fill remaining spaces with unused alphabet letters
- Combine I and J in single cell

### Encryption Rules

#### Rule 1: Plaintext Preparation
- **Pairing**: Encrypt plaintext two letters at a time
- **Odd length**: Add filler letter (usually X) to last unpaired letter
- **Repeated pairs**: Separate identical letters in same pair with filler letter

#### Rule 2: Same Row
- **Method**: Replace each letter with letter to its right
- **Circular**: First letter follows last letter in row

#### Rule 3: Same Column  
- **Method**: Replace each letter with letter beneath it
- **Circular**: First letter follows last letter in column

#### Rule 4: Rectangle Rule (Different Row and Column)
- **Method**: Replace each letter with letter in its own row and other letter's column

### Encryption Example

**Problem**: Encrypt "This is not a joke" with keyword "security"

#### Step 1: Create Matrix
**Keyword "security" → "securityabdfghijklmnopqvwxz"**
```
S E C U R
I T Y A B
D F G H J
K L M N O
P Q V W X
Z
```

#### Step 2: Prepare Plaintext
```
Original: "This is not a joke"
Remove spaces: "thisisnotajoke"  
Pair: "th is is no ta jo ke"
No filler needed (all pairs valid)
```

#### Step 3: Apply Rules
```
Pair "th": t(row 2, col 2), h(row 3, col 4)
→ Rectangle rule: t→h, h→t = "ht"

Pair "is": i(row 2, col 1), s(row 1, col 1)  
→ Same column: i→d, s→i = "di"

Pair "is": Same as above = "di"

Pair "no": n(row 4, col 4), o(row 4, col 5)
→ Same row: n→o, o→k = "ok"

Pair "ta": t(row 2, col 2), a(row 2, col 4)
→ Same row: t→y, a→b = "yb"

Pair "jo": j(row 3, col 5), o(row 4, col 5)
→ Same column: j→o, o→x = "ox"

Pair "ke": k(row 4, col 1), e(row 1, col 2)
→ Rectangle rule: k→c, e→l = "cl"
```

**Result**: "thisisnotajoke" → "htdidiokybøxcl"

## Key Takeaways

### Essential Concepts
1. **Two Building Blocks**: All classical encryption uses substitution and/or transposition
2. **Key vs. Algorithm**: Security often depends on key secrecy, not algorithm secrecy
3. **Frequency Analysis**: Major weakness of simple substitution ciphers
4. **Progressive Complexity**: Caesar → Monoalphabetic → Playfair shows evolution

### Cipher Comparison
| Cipher Type | Key Space | Main Weakness | Security Level |
|-------------|-----------|---------------|----------------|
| Caesar | 25 keys | Brute force, frequency analysis | Very Low |
| Monoalphabetic | 26! keys | Frequency analysis | Low |  
| Playfair | Large | Pattern analysis of bigrams | Moderate |

### Practical Applications
- **Historical context**: Understanding evolution of cryptographic thinking
- **Pattern recognition**: Foundation for modern cryptanalysis
- **Security principles**: Key space vs. computational security trade-offs
