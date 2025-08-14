
> [!faq] About this Lecture
> Class: INFO3006
> Subject: #informationSecurity 
> Topics: #coding 
> Date: 2025-08-14 at 17:11

## Overview of Symmetric Key Systems

Symmetric key cryptography uses the same key for both encryption and decryption. The Data Encryption Standard (DES) is one of the most historically significant symmetric encryption algorithms.

## S-DES (Simplified DES)

### Purpose and Characteristics

- **Educational tool** rather than secure encryption
- Similar properties and structure to full DES but with smaller parameters
- **Block size**: 8 bits
- **Key input**: 10 bits
- Uses 5 functions with multiple stages of permutations and substitutions

### Key Point

S-DES helps students understand DES concepts without the complexity of full-scale implementation.

## Data Encryption Standard (DES)

### Basic Structure

- **Block size**: 64 bits input/output
- **Key size**: 64 bits (56 bits effective, 8 bits for parity)
- **Rounds**: 16 rounds of processing
- **Architecture**: Feistel network structure

### DES Algorithm Flow

```
64-bit Input
    ↓
Initial Permutation (IP)
    ↓
16 Rounds of Processing
    ↓
Inverse Initial Permutation (IP⁻¹)
    ↓
64-bit Output
```

### Encryption Process

1. **Initial Permutation**: Rearrange input bits according to IP table
2. **Round Processing** (16 rounds):
    
    ```
    Li = Ri-1Ri = Li-1 ⊕ f(Ri-1, Ki)
    ```
    
    where i = 1, 2, ..., 16
3. **Inverse Initial Permutation**: Final bit rearrangement

### Decryption Process

1. **Initial Permutation**: Same as encryption
2. **Reverse Round Processing**:
    
    ```
    Ri-1 = LiLi-1 = Ri ⊕ f(Li, Ki)
    ```
    
3. **Inverse Initial Permutation**: Same as encryption

### Round Structure Details

Each round processes:

- **Input**: 64 bits split into two 32-bit halves (Li-1, Ri-1)
- **Output**: 64 bits as two 32-bit halves (Li, Ri)
- **Key**: 48-bit subkey Ki

```
Li = Ri-1
Ri = Li-1 ⊕ f(Ri-1, Ki)
```

## The f-Function

The f-function is the heart of DES encryption, transforming a 32-bit input using a 48-bit subkey.

### f-Function Steps

1. **Expansion (E)**: Expand 32-bit input to 48 bits
2. **Key Mixing**: XOR with 48-bit subkey Ki
3. **Substitution**: Apply S-boxes to reduce back to 32 bits
4. **Permutation (P)**: Final permutation of 32-bit result

### Expansion Table (E)

Expands 32 bits to 48 bits by duplicating certain bits according to a fixed table.

### S-Box Operations

- **Input**: 48 bits divided into eight 6-bit blocks (B1, B2, ..., B8)
- **Process**: Each 6-bit block goes through corresponding S-box (S1, S2, ..., S8)
- **Output**: Eight 4-bit blocks (total 32 bits)

### S-Box Mapping Rules

For a 6-bit block Bi = b1b2b3b4b5b6:

- **Row selection**: Bits b1b6 (outer bits) determine row (0-3)
- **Column selection**: Bits b2b3b4b5 (inner bits) determine column (0-15)

**Example**:

- Block B1 = 011100
- Row = b1b6 = 00 = 0
- Column = b2b3b4b5 = 1110 = 14
- S1[0,14] gives the 4-bit output

### S-Box Table Structure

```
S1 Table:
     0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
  0 14  4 13  1  2 15 11  8  3 10  6 12  5  9  0  7
  1  0 15  7  4 14  2 13  1 10  6 12 11  9  5  3  8
  2  4  1 14  8 13  6  2 11 15 12  9  7  3 10  5  0
  3 15 12  8  2  4  9  1  7  5 11  3 14 10  0  6 13

S2 Table:
     0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
  0 15  1  8 14  6 11  3  4  9  7  2 13 12  0  5 10
  1  3 13  4  7 15  2  8 14 12  0  1 10  6  9 11  5
  2  0 14  7 11 10  4 13  1  5  8 12  6  9  3  2 15
  3 13  8 10  1  3 15  4  2 11  6  7 12  0  5 14  9
```

### Permutation (P)

Final 32-bit permutation according to P-table rearranges the S-box outputs.

## DES Key Generation

### Key Schedule Process

1. **Input**: 64-bit key (56 bits effective + 8 parity bits)
2. **Permutation Choice 1 (PC-1)**: Produces two 28-bit blocks C0 and D0
3. **Round Key Generation**: For each round i:
    - Apply circular left shift to Ci-1 and Di-1
    - Combine to form 56-bit value
    - Apply Permutation Choice 2 (PC-2) to get 48-bit subkey Ki

### Left Shift Schedule

Different rounds use different shift amounts:

- Rounds 1, 2, 9, 16: 1-bit left shift
- All other rounds: 2-bit left shift

### Key Generation Flow

```
64-bit Key
    ↓
Permutation Choice 1 (PC-1)
    ↓
C0 (28 bits) | D0 (28 bits)
    ↓
Left Shifts for each round
    ↓
C1|D1 → PC-2 → K1 (48 bits)
C2|D2 → PC-2 → K2 (48 bits)
...
C16|D16 → PC-2 → K16 (48 bits)
```

## DES Properties

### Avalanche Effect

- **Definition**: Small change in input (plaintext or key) produces significant change in output
- **Requirement**: One bit change should affect many output bits
- **Importance**: Prevents pattern analysis and ensures cryptographic strength

### Design Principles

- **Confusion**: Relationship between ciphertext and key is complex
- **Diffusion**: Each plaintext bit influences many ciphertext bits

## Security Analysis and Attacks on DES

### Key Space Vulnerability

- **Effective key size**: 56 bits
- **Total key space**: 2^56 ≈ 7.2 × 10^16 keys
- **Vulnerability**: Susceptible to brute-force/exhaustive key search

### Historical Attack Timeline

#### Early Theoretical Attacks

- **1977**: Diffie and Hellman proposed $20 million machine for 1-day key recovery
- **1993**: Wiener proposed $1 million machine for 7-hour key recovery

#### Practical Implementations

- **1997**: DESCHALL Project - first public DES crack
- **2006**: COPACOBANA machine (Germany) - continued improvements
- **2008**: RIVYERA (COPACOBANA successor) - reduced time to 1 day
- **2017**: RAINBOW TABLE - claimed DES key recovery capability

### Modern Status

DES is considered cryptographically broken due to small key size and computational advances.

## Improvements and Alternatives

### Key Size Solutions

- **64-bit keys**: Temporary improvement
- **Triple DES (3DES)**: Uses DES three times with different keys
- **AES**: Modern replacement standard

### Advanced Encryption Standard (AES)

#### Key Features

- **Block size**: 128 bits
- **Key sizes**: 128, 192, or 256 bits
- **Rounds**:
    - 10 rounds for 128-bit keys
    - 12 rounds for 192-bit keys
    - 14 rounds for 256-bit keys

#### Security Classifications

- **SECRET level**: AES with any key length
- **TOP SECRET**: Requires 192-bit or 256-bit keys

#### Attack Resistance

- **Best known attacks** (as of 2006):
    - 7 rounds for 128-bit keys
    - 8 rounds for 192-bit keys
    - 9 rounds for 256-bit keys
- **Practical security**: No known practical attacks on properly implemented AES

## Block Cipher Modes of Operation

### Electronic Codebook (ECB) Mode Issues

- Same plaintext block always produces same ciphertext block
- Reveals patterns in data
- Not recommended for most applications

### Cipher Block Chaining (CBC) Mode

#### Advantages

- Same plaintext produces different ciphertext when repeated
- No fixed relationship between plaintext and ciphertext blocks
- Hides repeating 64-bit patterns

#### CBC Encryption Process

1. **Initialization**: Use secret Initialization Vector (IV)
2. **Block Processing**: For each plaintext block Pn:
    
    ```
    Cn = Ek(Cn-1 ⊕ Pn)
    ```
    
    where C0 = IV

#### CBC Decryption Process

```
Dk(Cn) = Dk(Ek(Cn-1 ⊕ Pn)) = Cn-1 ⊕ Pn
Cn-1 ⊕ Dk(Cn) = Cn-1 ⊕ Cn-1 ⊕ Pn = Pn
```

#### IV Requirements

- Must be secret
- Known to both sender and recipient
- Should be unpredictable
- Different for each message

## Other Symmetric Key Ciphers

### International Data Encryption Algorithm (IDEA)

#### Designers

Xuejia Lai and James Massey

#### Specifications

- **Key length**: 128 bits
- **Block length**: 64 bits

#### Security Features

- **Confusion operations**: Uses three different operations:
    - XOR
    - Multiplication of integers modulo 2^16 + 1
    - Addition of integers modulo 2^16
- **Diffusion**: Each input bit influences every output bit
- **Resistance**: Claims security against differential cryptanalysis

### Blowfish

#### Designer

Bruce Schneier

#### Specifications

- **Key length**: 32 to 448 bits (1 to 14 × 32-bit words)
- **Block length**: 64 bits

#### Characteristics

- **Fast**: High-speed encryption/decryption
- **Compact**: Less than 5K memory requirement
- **Variable security**: Key length can be adjusted
- **Resistance**: Claims security against differential cryptanalysis

### RC5

#### Designer

Ron Rivest

#### Specifications

- **Key length**: 0 to 2040 bits (128 bits for normal version)
- **Block length**: 64 bits

#### Characteristics

- **Fast**: Efficient implementation
- **Variable rounds**: Number of rounds can be adjusted
- **Variable key length**: Flexible key size
- **Simple**: Easy to implement
- **Low memory**: Minimal memory requirements
- **Security**: Claims to be secure

## Study Tips and Exam Focus

### Key Concepts to Remember

1. **DES structure**: 16-round Feistel network
2. **f-function components**: Expansion, S-boxes, Permutation
3. **Key generation**: PC-1, left shifts, PC-2
4. **Security limitations**: 56-bit effective key size
5. **CBC mode**: Prevents pattern recognition
6. **Avalanche effect**: Critical security property

### Problem-Solving Approach

1. **Trace through algorithms**: Practice step-by-step execution
2. **Understand bit manipulations**: Permutations, XOR operations
3. **Key schedule calculations**: Practice subkey generation
4. **S-box lookups**: Master row/column selection
5. **Mode comparisons**: Understand ECB vs CBC trade-offs

### Practical Applications

- **Historical significance**: Understanding cryptographic evolution
- **Modern alternatives**: Why AES replaced DES
- **Implementation considerations**: Memory, speed, security trade-offs
- **Real-world usage**: Where different ciphers are appropriate

