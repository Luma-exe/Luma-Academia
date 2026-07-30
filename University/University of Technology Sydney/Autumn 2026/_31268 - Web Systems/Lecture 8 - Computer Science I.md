
> [!faq] About this Lecture 
> Class: 31268
> Subject: #webSystems
> Date: 11/04/2025 
> Topics: #web #html #css

# REDO

## Computer Architecture Basics

### Key Terminology

- **OS (Operating System)** — core software installed on hardware that sits between all programs and the device hardware
- **Kernel** — core OS program that controls hardware and provides access to resources for other applications
- **Shell** — layer on top of the Kernel; enables users to communicate with Kernel via CLI commands
- **Applications** — top-most layer; consists of software, services, and utilities
- **CLI** — command interpreter; enables users to interact with the Kernel using commands and scripts
- **Filesystem** — structure used by the OS to organize and manage files on a storage device
- **CPU** — Central Processing Unit (e.g. Intel Core i9, 8 cores, 5.5 GHz)
- **RAM** — Random Access Memory; volatile data storage (e.g. Kingston Fury DDR5 64GB 6000MHz)
- **ROM** — Read Only Memory; stores permanent data; modern computers use flash-based ROM on the BIOS chip (motherboard)
- **BUS** — electronic pathway through which data is transferred; RAM and ROM connect to CPU via a memory bus
- **Input Devices** — Keyboard, Mouse, Microphone, Scanner, Leap Motion, Controller
- **Output Devices** — Monitor, Printer, Projector

---

## Introduction to Computer Architecture

### Von Neumann Model

Computer architecture defines the structure and interaction of a computer's core components — CPU, memory, I/O devices, and buses. Most architectures are based on the **Von Neumann model**, where data and instructions flow through the system with the CPU at the centre.
[BUS]
├── CPU
│     ├── Control Unit
│     ├── ALU
│     └── Registers: PC | AC | MAR | MDR | CIR
├── Memory Unit (RAM)
├── Inputs  →
└── Outputs ←

---

### CPU (Component 1)

- **Description** — main processor that manages all computer operations and executes instructions
- **Examples** — Intel i9, AMD Ryzen
- **Role** — executes program instructions, coordinates data flow, controls other components

#### CPU Sub-Components

- **Control Unit (CU)**
  - Directs operations of the CPU, including instruction handling (Fetch-Execute Cycle)
  - Role: manages flow of data and instructions within the CPU

- **ALU (Arithmetic Logic Unit)**
  - Performs arithmetic and logical operations (e.g. 32-bit ALU, 64-bit ALU)
  - Role: executes mathematical and logical tasks

- **Registers** — small, fast storage areas in the CPU
  - Role: store addresses, data, instructions, and manage execution flow
  - Types: MAR, MDR, PC, AC, CIR

#### CPU Registers Detail

| Register | Full Name | Description | Role |
|---|---|---|---|
| MAR | Memory Address Register | Holds memory addresses for accessing data | Points to specific memory locations for read/write |
| MDR | Memory Data Register | Stores data being transferred to/from memory | Temporarily holds data during memory operations |
| AC | Accumulator | Stores intermediate results for calculations | Holds data temporarily for ongoing operations |
| CIR | Current Instruction Register | Holds the instruction currently being executed | Keeps track of active instructions in the CPU |
| PC | Program Counter | Tracks the next instruction's address | Manages the sequence of program execution |

---

### Memory / RAM (Component 2)

- **Description** — temporary storage for active data and instructions
- **Examples** — DRAM, SRAM
- **Role** — provides quick access to data and instructions the CPU is currently processing

### Inputs (Component 3)

- **Description** — devices that allow users to enter data into the computer
- **Examples** — Keyboard, Mouse, Scanner, Leap Motion
- **Role** — enables user interaction and data entry for processing

### Outputs (Component 4)

- **Description** — devices that display or output processed data
- **Examples** — Monitor, Printer, Speakers
- **Role** — presents results of computations to users or other systems

### BUS (Component 5)

- **Description** — communication pathways for data transfer between CPU, memory, and peripherals
- **Role** — facilitates data transfer, address signalling, and control commands across the computer

#### BUS Types

- **Data BUS** — carries data between components
- **Address BUS** — transmits memory addresses for data access
- **Control BUS** — sends control signals across components

---

### Fetch-Execute Cycle

The **Fetch-Execute Cycle** describes the sequence of steps a CPU follows to retrieve and execute instructions. The cycle runs continuously to process all instructions in a program.

FETCH      → CPU retrieves next instruction from memory using Program Counter (PC)
Role: get the instruction to be executed
DECODE     → Control Unit decodes the instruction to determine operation and operands
Role: interpret the instruction and prepare for execution
READ       → If needed, data is fetched from memory or registers
Role: load operands for the operation
EXECUTE    → ALU performs the operation on the operands
Role: carry out required calculation or logic operation
WRITE-BACK → Result is stored in a register or memory
Role: save the result for future use

→ Cycle repeats from step 1

---

## Data Representation

### Data Types

Data can be categorised into different types based on the nature of the information it holds:

- **Numbers** — integers (whole numbers) or floats (decimals); represented in binary for processing
- **Characters** — individual letters, digits, or symbols; encoded using ASCII or Unicode
- **Media** — images, audio, video; stored in specialised formats like JPEG, MP3, MP4
- **Boolean** — true or false; encoded as `1` (true) and `0` (false) in binary
- **Files** — documents, spreadsheets, presentations; formats like PDF, DOCX, PPT

---

## Numbers Representation

### Number Systems Overview

A **base (radix)** represents the number of unique digits a counting system uses. Each digit's value depends on its position.

- **base $n$** → digits range from $0$ to $n-1$
- **base 2 (Binary)** → digits: `0`, `1`; ideal for computers (maps to ON/OFF electrical states)
- **base 10 (Decimal)** → digits: `0`–`9`; standard human-readable format
- **base 16 (Hexadecimal)** → digits: `0`–`9`, `A`–`F`; compactly represents binary data

> **Key Rule:** All data (numbers, characters, files, etc.) is ultimately converted into binary for manipulation by the CPU.

### Electric Current as Data

Computers process data as electrical signals — either ON (`1`) or OFF (`0`), aligning with binary.

- **Representation** → data stored as binary (0s and 1s) in memory and processors
- **Transmission** → circuits and buses carry data between components (CPU, RAM, etc.) as electrical signals
- **Interpretation** → electrical signals as pulses of voltage (higher voltage = `1`; lower voltage = `0`)
- **Synchronisation** → signals are synchronised with clock pulses, ensuring orderly data transmission across components

---

### Decimal (Base 10)

A decimal number $n$ is represented as:

$$n = d_0 \cdot 10^0 + d_1 \cdot 10^1 + d_2 \cdot 10^2 + \cdots + d_k \cdot 10^k$$

Where:
- $d_k$ = each digit of the number (0–9)
- each digit is multiplied by a power of 10 based on its position (right to left)

#### Worked Example — Decimal Representation

$$n = 5432$$

$$5432 = (5 \cdot 10^3) + (4 \cdot 10^2) + (3 \cdot 10^1) + (2 \cdot 10^0)$$

$$= 5000 + 400 + 30 + 2 = 5432 \checkmark$$

---

### Binary (Base 2)

Binary uses only digits `0` and `1`, corresponding directly to ON/OFF states in circuits.

#### Decimal → Binary Conversion Method

1. Start with integer $n$
2. Divide $n$ by 2
3. Record the remainder (0 or 1)
4. Use the quotient as the new $n$; repeat until $n = 0$
5. Read remainders in **reverse order** — this is the binary result

#### Worked Example — Decimal to Binary

Convert $n = 13$:
13 ÷ 2 = 6  remainder 1
6 ÷ 2 = 3  remainder 0
3 ÷ 2 = 1  remainder 1
1 ÷ 2 = 0  remainder 1
Reading remainders bottom to top: 1101

$$13_{10} = 1101_2$$

#### Binary Arithmetic

**Binary Addition** — $5 + 6 = 11$
101   ← 5 in binary

110   ← 6 in binary


1011   ← 11 in decimal
Rules: 0+0=0, 0+1=1, 1+0=1, 1+1=10 (carry 1)

**Binary Subtraction** — $8 - 3 = 5$
1000   ← 8 in binary

011   ← 3 in binary


0101   ← 5 in decimal
Rules: 0-1 requires borrowing from next column

**Binary Multiplication** — $5 \times 3 = 15$
101   ← 5 in binary
×  11   ← 3 in binary
101   ← 101 × 1 (rightmost bit of multiplier)
1010   ← 101 × 1, shifted one position left
1111   ← 15 in decimal

**Binary Division** — $10 \div 2 = 5$ (base 10)
    101   ← Quotient
--------
10 ) 1010
-10        ← 10 ÷ 10 = 1
----
01        ← bring down next bit
-00        ← 01 ÷ 10 = 0
---
10        ← bring down next bit
-10        ← 10 ÷ 10 = 1
---
0        ← nothing left
(1010)₂ ÷ (10)₂ = (101)₂ = 5₁₀

---

### Hexadecimal (Base 16)

Uses 16 symbols: `0`–`9` and `A`–`F`, where:
- `0`–`9` represent values 0 to 9
- `A`–`F` represent values 10 to 15

Each hex digit corresponds to exactly **4 binary bits** — making hex a compact representation of binary.

A hexadecimal number $n$ is represented as:

$$n = d_0 \cdot 16^0 + d_1 \cdot 16^1 + d_2 \cdot 16^2 + \cdots + d_k \cdot 16^k$$

Where:
- $d_k$ = each digit of the number (0–9, A–F)
- each digit is multiplied by the corresponding power of 16

#### Worked Example — Hexadecimal Representation

Convert hex $2F3$ to decimal:

$$2F3 = (2 \cdot 16^2) + (F \cdot 16^1) + (3 \cdot 16^0)$$

$$= (2 \cdot 256) + (15 \cdot 16) + (3 \cdot 1)$$

$$= 512 + 240 + 3 = 755_{10}$$

#### Hex Arithmetic

**Hex Addition** — $3F + 2A$
-- Convert to decimal: 3F = 63, 2A = 42
-- Addition: 63 + 42 = 105
-- Convert back to hex: 105 = 69
result = 3F + 2A → Output: 69 (hex)

**Hex Subtraction** — $5B - 3C$
-- Convert to decimal: 5B = 91, 3C = 60
-- Subtraction: 91 - 60 = 31
-- Convert back to hex: 31 = 1F
result = 5B - 3C → Output: 1F (hex)

**Hex Multiplication** — $9 \times 7$
-- Convert to decimal: 9 = 9, 7 = 7
-- Multiplication: 9 × 7 = 63
-- Convert back to hex: 63 = 3F
result = 9 * 7 → Output: 3F (hex)

**Hex Division** — $D0 \div 10$
-- Convert to decimal: D0 = 208, 10 = 16
-- Division: 208 ÷ 16 = 13
-- Convert back to hex: 13 = 1A
result = D0 / 10 → Output: 1A (hex)

---

## Number System Conversions

### Conversion Reference Table

| From | To | Method |
|---|---|---|
| Binary | Decimal | Multiply each bit by $2^n$ and sum |
| Decimal | Binary | Divide by 2 and record remainders |
| Binary | Hex | Group bits in sets of 4; convert each group to hex |
| Hex | Binary | Convert each hex digit to 4-bit binary |
| Decimal | Hex | Divide by 16 and record remainders |
| Hex | Decimal | Multiply each hex digit by $16^n$ and sum |

### Worked Conversion Examples

#### Binary → Decimal
1011 (binary) = (1 × 2^3) + (0 × 2^2) + (1 × 2^1) + (1 × 2^0)
= 8 + 0 + 2 + 1
= 11 (decimal)

#### Decimal → Binary
11 ÷ 2 = 5 remainder 1
5 ÷ 2 = 2 remainder 1
2 ÷ 2 = 1 remainder 0
1 ÷ 2 = 0 remainder 1
Reading remainders from bottom to top: 1011 (binary)

#### Binary → Hex
101101 → 0010 1101    (grouped in sets of 4 bits, padded left with 0s)
0010 = 2 (hex)
1101 = D (hex)
101101 (binary) = 2D (hexadecimal)

#### Hex → Binary
2 → 0010 (binary)
D → 1101 (binary)
2D (hex) = 101101 (binary)

#### Decimal → Hex
45 ÷ 16 = 2 remainder 13  (D in hex)
2 ÷ 16 = 0 remainder 2
Reading remainders from bottom to top: 2D (hexadecimal)

#### Hex → Decimal
2D (hex) = (2 × 16^1) + (13 × 16^0)
= 32 + 13
= 45 (decimal)

---

## Encoding and Decoding

**Encoding** — transforming data into a format suitable for storage or transmission  
**Decoding** — reverting encoded data back to its original human-readable form using the same standard

### Types of Encoding

| Type | Description | Example |
|---|---|---|
| Number Encoding | Decimal → Binary or HEX | $45 \rightarrow 101101_2$, $2D_{16}$ |
| Media Encoding | Formats like JPEG, MP3, MP4 encode media into binary | JPEG → binary pixel data; MP4 → binary audio/visual stream |
| Logical Encoding | Boolean values in binary | `true` → `1`, `false` → `0` |
| Files Encoding | Files encoded based on content type | Text "Hello" → `01001000 01100101 01101100 01101100 01101111` |

---

### Text Encoding Standards

Text encoding maps each character to a unique **code point**, which is then converted to binary or hexadecimal.

#### ASCII

- A **7-bit** encoding scheme for English characters and symbols
- Includes 128 characters: English alphabet (upper + lower), digits 0–9, punctuation, control characters (newline, tab)
- `A` → decimal `65` → binary `01000001`
- `a` → decimal `97` → binary `01100001`

#### Unicode

- A **universal** encoding standard covering all human languages, symbols, and emojis
- Each character assigned a unique **code point**; encoding format determines binary representation
- Encoding formats include: UTF-8, UTF-16, UTF-32

| Character | Code Point | Binary |
|---|---|---|
| A | U+0041 | `01000001` |
| € (Euro) | U+20AC | `11100010 10000010 10101100` |

#### UTF-8

- **Variable-length** encoding: 1 to 4 bytes per character
- Backward-compatible with ASCII (first 128 characters are identical)

| Byte Count | Used For |
|---|---|
| 1 byte (8 bits) | ASCII range characters |
| 2 bytes | Characters from other European languages |
| 3 bytes | Most other Unicode characters |
| 4 bytes | Supplementary characters (e.g. emoji) |
Character: A
UTF-8 Encoding: 01000001 (1 byte)
Decoding: 01000001 → A
Character: € (Euro Sign)
UTF-8 Encoding: 11100010 10000010 10101100 (3 bytes)
Decoding: 11100010 10000010 10101100 → €

#### UTF-16

- **Variable-length**: 2 bytes for most characters in the Basic Multilingual Plane (BMP), 4 bytes for characters outside
- Widely used in Windows and Java environments; more space-efficient than UTF-32 for common characters
- Uses **surrogate pairs** (two 16-bit values) for characters outside the BMP
Character: A
UTF-16 Encoding: 0041 (2 bytes, hexadecimal)
Decoding: 0041 → A
Character: 𐍈 (outside BMP)
UTF-16 Encoding: D800 DF48 (4 bytes, surrogate pair)
Decoding: D800 DF48 → 𐍈

#### UTF-32

- **Fixed-length**: always 4 bytes (32 bits) per character
- Easiest to decode (no variable length, no surrogate pairs); but most memory-intensive
Character: A
UTF-32 Encoding: 00000041 (4 bytes, hexadecimal)
Decoding: 00000041 → A
Character: 𐍈
UTF-32 Encoding: 00010348 (4 bytes, hexadecimal)
Decoding: 00010348 → 𐍈

#### Encoding Comparison Summary

| Encoding | Size | Notes |
|---|---|---|
| ASCII | 7-bit (1 byte) | English only; 128 characters |
| UTF-8 | 1–4 bytes | Web standard; ASCII-compatible |
| UTF-16 | 2–4 bytes | Windows/Java; surrogate pairs for rare chars |
| UTF-32 | 4 bytes fixed | Simple decode; high memory use |

---

## BASH Scripting

### What is Bash?

**Bash (Bourne Again Shell)** is a CLI and scripting language used on Linux/Unix systems and macOS. It is the **default shell** for most Linux distributions.

- Bash **interprets and executes** commands entered by the user
- Supports automation of complex tasks through scripts
- Provides: command history, job control, functions, and more
- Bash scripts are plain text `.sh` files containing a series of commands

### Running a Bash Script — Three Steps

**Step 1: Develop the Script**
- Write CLI commands in a text editor (Vim, Nano, etc.)
- Save as a `.sh` file
- First line must be the **shebang**: `#!/bin/bash` — tells the OS to use bash to execute

**Step 2: Change Permission**
- Grant execute permission to the user:
```bash
chmod u+x script.sh
```

**Step 3: Run the Script**
```bash
./script.sh
```

---

### Bash Scripting Examples

#### Hello World Script

```bash
#!/bin/bash
# This script prints a greeting message
echo "Hello from Bash!"
```

```bash
# Steps:
chmod +x hello.sh    # grant permission
./hello.sh           # run script

# Output:
Hello from Bash!
```

---

#### I/O Script — `read` and `echo`

- `read` — reads user input from keyboard (STDIN) and stores in a variable
- `echo` — prints a value to the screen (STDOUT)

```bash
#!/bin/bash

# Prompt the user for their name
echo "Please enter your name:"
read name

# Output a greeting message
echo "Hello, $name! Welcome to the Bash scripting world."
```

```bash
chmod +x greet_user.sh
./greet_user.sh

# Output:
Please enter your name:
John Smith
Hello, John Smith! Welcome to the Bash scripting world.
```

---

#### If-Statement

```bash
#!/bin/bash

# Prompt user to enter an integer
read -p "Enter an integer: " n

# Check if the number is positive, negative, or zero
if [[ $n -gt 0 ]]; then
    echo "$n is positive."

    # Check if positive number is odd or even
    if (( n % 2 == 0 )); then
        echo "$n is even."
    else
        echo "$n is odd."
    fi

elif [[ $n -lt 0 ]]; then
    echo "$n is negative."

else
    echo "The number is zero, which is neither positive nor negative."
fi
```
Sample Outputs:
Enter an integer: 5  →  5 is positive. / 5 is odd.
Enter an integer: -3 → -3 is negative.
Enter an integer: 4  →  4 is positive. / 4 is even.
Enter an integer: 0  →  The number is zero, which is neither positive nor negative.

---

#### For-Loop

The `for` loop repeats the same block $n+1$ times starting from 0, with the iterator `i` incrementing by 1 each time.

```bash
#!/bin/bash

# Read input number
read -p "Enter a number (n): " n

# Print header with proper alignment
printf "%-10s %-10s\n" "Number" "Square"

# Loop through numbers from 0 to n
for ((i=0; i<=n; i++)); do
    printf "%-10d %-10d\n" $i $((i * i))
done
```
Sample Output (n=4):
Enter a number (n): 4
Number     Square
0          0
1          1
2          4
3          9
4          16

---

#### While-Loop

The `while` loop repeats until the user enters `.` from the keyboard. The internal `if-statement` checks if each character is a vowel and increments the count.

```bash
#!/bin/bash

# Initialize vowel count
vowel_count=0

# Read the first character
read -p "Enter a character: " char

# Loop until the user enters "."
while [[ "$char" != "." ]]; do
    # Check if the character is a vowel
    if [[ "$char" == [aeiouAEIOU] ]]; then
        ((vowel_count++))
    fi

    # Prompt for the next character
    read -p "Enter a character: " char
done

# Output the result
echo "Total number of vowels entered: $vowel_count"
```
Sample Output:
Enter a character: a
Enter a character: b
Enter a character: e
Enter a character: i
Enter a character: .
Total number of vowels entered: 3

---

#### Binary ↔ Decimal Conversion Scripts

```bash
# binarytodecimal.sh
#!/bin/bash
# Simple binary to decimal conversion
echo -n "Enter a binary number: "
read binary

# Convert binary to decimal using base 2
decimal=$((2#$binary))
echo "Decimal: $decimal"
```

```bash
# decimaltobinary.sh
#!/bin/bash
# Simple decimal to binary conversion
echo -n "Enter a decimal number: "
read decimal

# Convert decimal to binary using bc
binary=$(echo "obase=2; $decimal" | bc)
echo "Binary: $binary"
```
Sample Outputs:
./binarytodecimal.sh
Enter a binary number: 01011101
Decimal: 93
./decimaltobinary.sh
Enter a decimal number: 133
Binary: 10000101

---

#### Binary ↔ Hex Conversion Scripts

```bash
# binarytohex.sh
#!/bin/bash

# Function to convert binary to hexadecimal
binary_to_hex() {
    echo "obase=16; ibase=2; $1" | bc
}

# Read binary input from the user
read -p "Enter a binary number: " binary

# Convert binary to hexadecimal
hex_result=$(binary_to_hex "$binary")

# Display the result
echo "The hexadecimal equivalent of $binary is: $hex_result"
```

```bash
# hextobinary.sh
#!/bin/bash

# Function to convert hexadecimal to binary
hex_to_binary() {
    echo "obase=2; ibase=16; $1" | bc
}

# Input: Hexadecimal number
read -p "Enter a hexadecimal number: " hex_value

# Call function and display binary result
binary_result=$(hex_to_binary "$hex_value")
echo "Binary equivalent of $hex_value is: $binary_result"
```
Sample Outputs:
./binarytohex.sh
Enter a binary number: 10101001
The hexadecimal equivalent of 10101001 is: A9
./hextobinary.sh
Enter a hexadecimal number: 3D
Binary equivalent of 3D is: 111101

---

#### Decimal ↔ Hex Conversion Scripts

```bash
# decimaltohex.sh
#!/bin/bash

# Function to convert decimal to hexadecimal
decimal_to_hex() {
    printf '%X\n' $1
}

# Input: Decimal number
read -p "Enter a decimal number: " decimal_value

# Call function and display hexadecimal result
hex_result=$(decimal_to_hex "$decimal_value")
echo "Hexadecimal equivalent of $decimal_value is: $hex_result"
```

```bash
# hextodecimal.sh
#!/bin/bash

# Function to convert hexadecimal to decimal
hex_to_decimal() {
    echo "$((16#$1))"
}

# Input: Hexadecimal number
read -p "Enter a hexadecimal number: " hex_value

# Call function and display decimal result
decimal_result=$(hex_to_decimal "$hex_value")
echo "Decimal equivalent of $hex_value is: $decimal_result"
```
Sample Outputs:
./decimaltohex.sh
Enter a decimal number: 212
Hexadecimal equivalent of 212 is: D4
./hextodecimal.sh
Enter a hexadecimal number: B5
Decimal equivalent of B5 is: 181

---

## Key Bash Commands Reference

| Command | Usage | Description |
|---|---|---|
| `echo` | `echo "text"` | Prints text to STDOUT |
| `read` | `read varname` | Reads input from STDIN into variable |
| `read -p` | `read -p "prompt: " var` | Prompts user and reads input |
| `chmod` | `chmod u+x file.sh` | Grants execute permission to user |
| `printf` | `printf "%-10s" text` | Formatted output (like C printf) |
| `bc` | `echo "obase=2; 10" \| bc` | CLI calculator; supports base conversion |
| `$((expr))` | `$((2#1010))` | Arithmetic expansion; `2#` prefix = base 2 input |
| `if/elif/else/fi` | — | Conditional branching |
| `for/do/done` | — | For loop |
| `while/do/done` | — | While loop |
| `[[ ]]` | `[[ $n -gt 0 ]]` | Conditional test expression |
| `(( ))` | `(( n % 2 == 0 ))` | Arithmetic conditional test |

### Comparison Operators in Bash

| Operator | Meaning |
|---|---|
| `-gt` | greater than |
| `-lt` | less than |
| `-eq` | equal to |
| `-ne` | not equal to |
| `-ge` | greater than or equal |
| `-le` | less than or equal |
| `!=` | string not equal |
| `==` | string equal |

---

## Resources

- **UTS Library** — Frontiers in Computer Science: [link](https://search.lib.uts.edu.au/permalink/61UTS_INST/19joism/alma991006816087805671)
- **UTS Library** — The Representation of Numbers in Computing Systems: [link](https://search.lib.uts.edu.au/permalink/61UTS_INST/1ibc883/cdi_springer_books_10_1007_978_3_642_18315_7_1)
- **Online** — Ryan's Tutorials (Linux/Bash): [ryanstutorials.net/linuxtutorial/scripting.php](https://ryanstutorials.net/linuxtutorial/scripting.php)

## UTS Student Support

- **HELPS** — English language assistance: [uts.edu.au/current-students/support/helps](https://www.uts.edu.au/current-students/support/helps)
- **ALO** — Special needs/accessibility assistance: [ALO page](https://www.uts.edu.au/current-students/students-with-accessibility-requirements/accessibility-service/services-and-assistance/academic-liaison-officers-alos)
- **UPASS** — Study assistance: [uts.edu.au/current-students/support/upass/upass](https://www.uts.edu.au/current-students/support/upass/upass)

---

## Connections to Other Topics

- **OS & Kernel concepts** → links to Web Systems (31268) OS lectures on Unix, process management, filesystem
- **Bash scripting** → directly used in OS labs and server administration
- **Binary/Hex** → foundational for understanding memory addresses, networking (IP in hex), and low-level debugging
- **Character encoding (UTF-8)** → essential for web development; Flask/HTML responses use UTF-8 by default
- **CPU architecture (Fetch-Execute Cycle)** → underpins how programs written in Python/any language are actually executed