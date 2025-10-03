
> [!faq] About this Note
> **Class:** INFO3006  
> **Subject:** Information Security  
> **Topics:** Cryptography, Bit Operations  
> **Date:** 2025-10-03

## What is S-DES?

S-DES is a simplified version of the Data Encryption Standard (DES) designed for educational purposes.

**Key Features:**
- Encrypts **8-bit** plaintext using a **10-bit** key
- Uses **2 rounds** instead of DES's 16 rounds
- Demonstrates core cryptographic concepts in a manageable format

## Algorithm Overview

The S-DES encryption process follows these steps:

1. **Key Generation:** Create two 8-bit subkeys (K1, K2) from the 10-bit master key
2. **Initial Permutation (IP):** Rearrange the 8-bit plaintext
3. **Round 1:** Apply the round function with K1
4. **Switch (SW):** Swap left and right halves
5. **Round 2:** Apply the round function with K2
6. **Inverse Initial Permutation (IP⁻¹):** Final rearrangement to produce ciphertext

---

## Key Generation

The key generation process creates two 8-bit subkeys (K1 and K2) from a 10-bit master key.

### Required Permutations
- **P10:** `[3, 5, 2, 7, 4, 10, 1, 9, 8, 6]` (rearranges 10 bits)
- **P8:** `[6, 3, 7, 4, 8, 5, 10, 9]` (selects and rearranges 8 from 10 bits)

### Step-by-Step Process

**Example:** Master key = `1010000010`

#### Step 1: Apply P10 Permutation
```
Original:  1010000010
After P10: 1000001100
```

#### Step 2: Split and Shift
Split P10 result into two 5-bit halves:
- Left: `10000`
- Right: `01100`

**For K1:** Left-shift each half by 1 position (circular)
- Left: `10000` → `00001`
- Right: `01100` → `11000`
- Combined: `0000111000`

#### Step 3: Apply P8 to Generate K1
```
Combined:  0000111000
K1:        10100100
```

#### Step 4: Generate K2
From the shifted halves, left-shift by 2 more positions:
- Left: `00001` → `00100`
- Right: `11000` → `00011`
- Combined: `0010000011`

Apply P8 again:
```
Combined:  0010000011
K2:        01000011
```

### Key Generation Summary
| Step | Result |
|------|--------|
| Original Key | `1010000010` |
| After P10 | `1000001100` |
| K1 | `10100100` |
| K2 | `01000011` |

---

## S-DES Components

### Permutation Tables
- **IP (Initial Permutation):** `[2, 6, 3, 1, 4, 8, 5, 7]`
- **IP⁻¹ (Inverse Initial Permutation):** `[4, 1, 3, 5, 7, 2, 8, 6]`
- **E/P (Expansion/Permutation):** `[4, 1, 2, 3, 2, 3, 4, 1]` (expands 4 → 8 bits)
- **P4:** `[2, 4, 3, 1]`

### S-Boxes (Substitution Boxes)

S-boxes perform substitution operations, taking 4 bits as input and producing 2 bits as output.

#### S0 Box
| Row\Col | 00 | 01 | 10 | 11 |
|:-------:|:--:|:--:|:--:|:--:|
| **00**  | 1  | 0  | 3  | 2  |
| **01**  | 3  | 2  | 1  | 0  |
| **10**  | 0  | 2  | 1  | 3  |
| **11**  | 3  | 1  | 3  | 2  |

#### S1 Box
| Row\Col | 00 | 01 | 10 | 11 |
|:-------:|:--:|:--:|:--:|:--:|
| **00**  | 0  | 1  | 2  | 3  |
| **01**  | 2  | 0  | 1  | 3  |
| **10**  | 3  | 0  | 1  | 0  |
| **11**  | 2  | 1  | 0  | 3  |

#### How to Use S-Boxes
For input bits `abcd`:
1. **Row:** Use outer bits `a` and `d` (bits 1 and 4)
2. **Column:** Use middle bits `b` and `c` (bits 2 and 3)
3. **Lookup:** Find the decimal value in the S-box
4. **Convert:** Convert the decimal to 2-bit binary

---

## Complete Encryption Example

**Given:**
- Plaintext: `10111101`
- Key: `1010000010`
- K1: `10100100`
- K2: `01000011`

### Step 1: Initial Permutation (IP)

Apply IP `[2, 6, 3, 1, 4, 8, 5, 7]` to plaintext:
```
Input:    10111101
After IP: 01111110
```

Split into 4-bit halves:
- **L₀** = `0111`
- **R₀** = `1110`

### Step 2: Round 1

#### Round Function F(R₀, K1)

1. **Expansion/Permutation E/P:** Expand R₀ from 4 to 8 bits
   ```
   R₀:       1110
   E/P(R₀):  01111101
   ```

2. **XOR with K1:**
   ```
   E/P(R₀):  01111101
   K1:       10100100
   Result:   11011001
   ```

3. **S-Box Substitution:** Split into two 4-bit groups
   - **S0 input:** `1101` → Row: `11` (3), Col: `01` (1) → S0[3][1] = 3 → `11`
   - **S1 input:** `1001` → Row: `11` (3), Col: `00` (0) → S1[3][0] = 2 → `10`
   - **Combined:** `1110`

4. **P4 Permutation:** Apply P4 `[2, 4, 3, 1]`
   ```
   Input:  1110
   P4:     1011
   ```

5. **XOR with L₀:**
   ```
   L₀:     0111
   P4:     1011
   Result: 1100
   ```

**After Round 1:**
- **L₁** = R₀ = `1110`
- **R₁** = L₀ ⊕ F(R₀, K1) = `1100`

### Step 3: Switch (SW)
Swap halves:
- **L₁** = `1110`
- **R₁** = `1100`

### Step 4: Round 2

#### Round Function F(R₁, K2)

1. **Expansion/Permutation E/P:**
   ```
   R₁:       1100
   E/P(R₁):  01101001
   ```

2. **XOR with K2:**
   ```
   E/P(R₁):  01101001
   K2:       01000011
   Result:   00101010
   ```

3. **S-Box Substitution:**
   - **S0 input:** `0010` → Row: `00` (0), Col: `01` (1) → S0[0][1] = 0 → `00`
   - **S1 input:** `1010` → Row: `10` (2), Col: `01` (1) → S1[2][1] = 0 → `00`
   - **Combined:** `0000`

4. **P4 Permutation:**
   ```
   Input:  0000
   P4:     0000
   ```

5. **XOR with L₁:**
   ```
   L₁:     1110
   P4:     0000
   Result: 1110
   ```

**After Round 2:**
- **L₂** = R₁ = `1100`
- **R₂** = L₁ ⊕ F(R₁, K2) = `1110`

### Step 5: Inverse Initial Permutation (IP⁻¹)

Apply IP⁻¹ `[4, 1, 3, 5, 7, 2, 8, 6]`:
```
Before IP⁻¹: 11101100
Ciphertext:  01110101
```

---

## Summary

### Example Results
| Component | Value |
|-----------|-------|
| **Plaintext** | `10111101` |
| **Master Key** | `1010000010` |
| **Subkey K1** | `10100100` |
| **Subkey K2** | `01000011` |
| **Ciphertext** | `01110101` |

### Key Concepts

**S-DES demonstrates fundamental cryptographic principles:**

1. **Confusion:** S-boxes make the relationship between plaintext and ciphertext complex
2. **Diffusion:** Permutations spread the influence of each plaintext bit across multiple ciphertext bits
3. **Key Schedule:** Multiple subkeys derived from a master key increase security
4. **Feistel Structure:** The round function and swap operation provide the encryption framework

### Simple Analogy

Think of S-DES like a two-stage puzzle box:

1. **Setup:** Generate two different "keys" from your master key
2. **Stage 1:** Scramble your message using the first key and special mixing rules
3. **Flip:** Swap the left and right halves of your scrambled message
4. **Stage 2:** Scramble again using the second key and the same mixing rules
5. **Final:** Apply one last rearrangement to get your encrypted message

Only someone with the original master key and knowledge of the exact scrambling rules can reverse the process to recover your original message.