
> [!faq] About this Note
> Class: INFO3006
> Subject: #informationSecurity
> Topics: #coding #math
> Date: 2025-10-03 at 11:31

This is the baby version of DES.  
It scrambles **8 bits** of data using a **10 bit key**.  
It has 2 rounds instead of 16 like the real DES.  

Think of it like this:  
- you start with a message (8 bits)  
- you mix it up with a key (10 bits)  
- you swap and shuffle the bits around  
- at the end you get a secret code (8 bits)  

---

## The Steps of S-DES

### Step 1: Key Generation
We turn the 10 bit key into **two smaller keys** called K1 and K2.

1. Take the 10 bit key.  
2. Apply a shuffle called P10.  
3. Split into 2 halves of 5 bits.  
4. Left shift both halves.  
5. Apply P8 → this makes **K1**.  
6. Left shift both halves by 2 more.  
7. Apply P8 again → this makes **K2**.  

| Action | Example |
|--------|---------|
| Start Key (10 bits) | `1010000010` |
| After P10 | `1000011000` |
| Split Halves | `10000` + `11000` |
| Left Shift by 1 | `00001` + `10001` |
| After P8 | K1 = `10100100` |
| Left Shift by 2 | `00100` + `00111` |
| After P8 | K2 = `01000011` |

---

### Step 2: Initial Permutation (IP)
We shuffle the 8 bits of the message.  
The order used is: [2 6 3 1 4 8 5 7].  

Example with plaintext = `10111101`

| Position | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|----------|---|---|---|---|---|---|---|---|
| Input    | 1 | 0 | 1 | 1 | 1 | 1 | 0 | 1 |
| Output   | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |

After IP → `01111110`

---

### Step 3: Round 1 (with K1)
1. Split into two halves → Left = `0111`, Right = `1110`.  
2. Send Right half into the **F function**.  
3. XOR the F output with the Left half.  
4. Stick that together with the unchanged Right half.  

---

#### The F Function
This is where the key gets used.

1. Expand Right half (4 bits → 8 bits) with E/P [4 1 2 3 2 3 4 1].  
2. XOR with the subkey (K1 for Round 1).  
3. Split result into two 4 bit halves.  
4. Use S-Boxes (S0 and S1) to shrink them to 2 bits each.  
5. Join them (4 bits total).  
6. Apply P4 [2 4 3 1].  

Example (using R = `1110`):  

| Step | Value |
|------|-------|
| Expand/Permute | `01111001` |
| XOR with K1    | (depends on K1) |
| Split          | `0111` + `1001` |
| S0 → 2 bits    | e.g. `01` |
| S1 → 2 bits    | e.g. `11` |
| Join           | `0111` |
| After P4       | e.g. `1110` |

Then → XOR with Left half.

---

### Step 4: Switch (SW)
Swap the two halves.  
Left becomes Right and Right becomes Left.  

---

### Step 5: Round 2 (with K2)
Do the same F function again but now use **K2**.  

---

### Step 6: Inverse Initial Permutation (IP⁻¹)
Undo the first shuffle.  
This gives the final **ciphertext (8 bits)**.  

---

## Example Full Walkthrough

Plaintext = `10111101`  
Key = `1010000010`

- After IP → `01111110`  
- Round 1 (with K1) → scrambled output  
- Swap halves → new order  
- Round 2 (with K2) → scrambled again  
- After IP⁻¹ → Ciphertext = `01010111`  

---

## Easy Analogy

Imagine you have a toy box with 8 blocks.  
- First you shuffle the blocks.  
- Then you swap some blocks using the secret key.  
- Then you swap the left and right sides of the box.  
- Then you do the swapping again with a different secret key.  
- Finally you shuffle back.  

At the end the blocks look totally mixed up.  
Only the right key can put them back in order.  