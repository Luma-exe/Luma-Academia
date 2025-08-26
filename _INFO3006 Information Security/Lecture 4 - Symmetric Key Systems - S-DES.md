
> [!faq] About this Lecture
> Class: INFS3006
> Subject: #informationSecurity
> Topics: #coding 
> Date: 2025-08-27 at 00:30

## Overview

This lecture covers four main topics:

- Stream Cipher
- Block Cipher
- Inverse Permutation
- S-DES (Simplified Data Encryption Standard)

## Stream Ciphers

### Basic Concept

- Stream cipher encrypts a digital data stream one bit or one byte at a time
- Stream ciphers convert plaintext to ciphertext by a key stream
- Formula: \(C = c_1 c_2 \ldots = E_{k1}(p_1) E_{k2}(p_2) \ldots\)

### The Simplest Stream Cipher

- **Keystream generator**: \(\{k_i\}, i=1,2,\ldots,n\)
- **Stream of plaintext bits**: \(\{p_i\}, i=1,2,\ldots,n\)
- **Stream of ciphertext bits**: \(\{c_i\}, i=1,2,\ldots,n\)
- **Encryption**: \(c_i = p_i \oplus k_i\)
- **Decryption**: \(p_i = c_i \oplus k_i\)

### Self-Synchronising Stream Cipher

#### Architecture

The system consists of:

- Key stream generator (at both sender and receiver)
- Internal state management
- Next state function
- Output function

#### Features

- Each keystream bit is a function of a fixed number of previous ciphertext bits
- Computational efficiency
- Low error rate in transmission

#### Technical Details

- The internal state is a function of the previous \(n\) ciphertext bits
- Use \(n\) random bits initially
- The output function takes the internal state and generates key stream bits
- If an adversary gets a plaintext-ciphertext pair, he can calculate the key and read everything
- But if changing the key, we ensure he cannot calculate any message after the key is changed

### Security Issues of Simple Stream Cipher

#### Vulnerabilities

- The security depends entirely on the insides of the keystream generator
- If the keystream is an endless stream of zeros: security compromised
- If the plaintext is an endless stream of zeros: patterns revealed
- If the keystream is an endless random bits: we have a one-time pad (secure)
- Susceptible to malicious insertions and modification

## Block Ciphers

### Basic Concept

- A block of plaintext is encrypted as a whole to produce a ciphertext block of equal length
- Formula: \(C = c_1 c_2 \ldots = E_k(p_1) E_k(p_2) \ldots\)

### Block Cipher Principles

#### Requirements

- A block cipher operates on \(n\) bits plaintext to produce \(n\) bits ciphertext block
- To make the encryption reversible (decryption to be possible), each block must produce a unique ciphertext block
- Such transformation is called reversible or nonsingular

#### Examples

**Reversible mapping:**

```
Plaintext    Ciphertext
00           11
01           10
10           00
11           01
```

**Irreversible mapping:**

```
Plaintext    Ciphertext
00           11
01           10
10           01
11           01
```

## Feistel Ciphers

### Core Concepts

- Feistel proposed the ideal block cipher by utilizing the concept of a product cipher
- It's the execution of two or more simple ciphers in sequence that the final result or product is cryptographically stronger than any of the component ciphers
- Feistel also proposed the use of a cipher that alternates substitutions and permutations

### Symmetric Block Cipher Examples

- **Data Encryption Standard (DES)** by the National Bureau of Standard
- **International Data Encryption Algorithm (IDEA)** by Xuejia Lai and James Massey, Swiss Federal Institute of Technology
- **RC5** by Ron Rivest, MIT
- **Blowfish** by Bruce Schneier

## Data Encryption Standard (DES)

### History

- DES was invented in 1972 by NBS (NIST)
- Key requirements: Security, Availability, Applicability, Cheap, Efficiency
- DES is based on Lucifer Cipher (Early 1970)
- DES was published in 1977 by NBS
- ANSI X3.105 - DES, X3.106 - DEA (1981)
- Be reviewed every five years - 1987, 1993, 1998, etc.

### Applications

- **Microsoft OneNote, Microsoft Outlook 2007 and Microsoft System Centra Configuration Manager 2012** use Triple DES to password protect user content and system data
- **Oracle Database** provides the PL/SQL package DBMS_CRYPTO to encrypt and decrypt stored data. This package supports several industry-standard encryption and hashing algorithms, including AES encryption algorithm

### Technical Specifications

- A block cipher
- Uses a 56-bit key
- Maps a 64-bit input into a 64-bit output
- Very efficient to implement in hardware
- **Security principles**:
    - **Confusion**: confuse the relationship between the key & cipher texts
    - **Diffusion**: spread some of the plaintext over the ciphertext

### DES Structure

```
Encryption:                    Decryption:
64 bit input                   64 bit input
     ↓                              ↓
    IP                             IP
     ↓                              ↓
1st round ←── 48 bits ──→ 1st round
     ↓                              ↓  
2nd round ←── 48 bits ──→ 2nd round
     ⋮                              ⋮
16th round ←── 48 bits ──→ 16th round
     ↓                              ↓
   IP⁻¹                            IP⁻¹
     ↓                              ↓
64 bit output                 64 bit output
```

## Inverse Permutation

### Definition

- Permutation P and its inverse permutation P⁻¹: permutation is to re-order the elements of a set
- Inverse permutation is to reverse the effect of the permutation, to make the re-ordered elements back to their original order

### Mathematical Property

- \(PP^{-1} = P^{-1}P\)

### Examples

#### Example 1

If \(P = (3\ 1\ 4\ 5\ 2)\), then \(P^{-1} = (2\ 5\ 1\ 3\ 4)\)

#### Practice Problems

**Problem 1:** \(P = (3\ 1\ 4\ 5\ 2\ 8\ 6\ 7)\), What is \(P^{-1} = (?)\) \(P(11001001) = ?\)**Problem 2:** \(P = (6\ 2\ 4\ 1\ 5\ 3)\), What is \(P^{-1} = (?)\)**More exercises:**

```
P(ABCDEF) = 
P(001011) = 
P(!@#$%^) = 
P(Green, red, white, black, yellow, orange) = 
```

## S-DES (Simplified Data Encryption Standard)

### Purpose

- An educational rather than a secure DES
- Has similar properties and structure to DES
- Has much smaller parameters
- Help students learn about modern cryptography techniques
- Give insight into DES and other block ciphers, and insight into various cryptanalytic attacks against them

### Technical Specifications

- **Block size**: 8 bits
- **Key input**: 10 bits
- Has 5 functions, multiple stages of permutations and substitutions