
> [!faq] About this Lecture 
> Class: 31268
> Subject: #webSystems
> Date: 30/04/2025 
> Topics: #web #html #css

## Boolean Algebra

### Overview

Boolean Algebra is a mathematical framework for representing and manipulating logical values using binary variables ($0$ and $1$). It provides the foundation for simplifying complex expressions and digital logic systems.

- Values are binary: **True = 1**, **False = 0**
- Operations are performed on these binary values to model decision-making and control flow

### History

|Person|Year|Contribution|
|---|---|---|
|George Boole|1847|Founded Boolean algebra|
|Augustus De Morgan|1847–1849|Contributed logical laws that formalised Boolean operations|
|Claude Shannon|1937|Applied Boolean algebra to electrical engineering → laid groundwork for digital circuits|
|Alan Turing & John von Neumann|Mid 20th C|Solidified Boolean algebra's role in computing and digital logic|

---

## Logical Representation

### Boolean Values & Binary Mapping

- **Boolean Values** → data can only hold one of two values: **True** or **False**
- **Boolean to Binary** → logical values map to binary digits (bits):

$$\text{True} = 1 \qquad \text{False} = 0$$

### Operation Symbols

|Operation|Symbols|Description|Example|
|---|---|---|---|
|AND|$\land$ or `&`|True only if **both** operands are True|$A \land B$|
|OR|$\lor$ or `\|`|True if **at least one** operand is True|$A \lor B$|
|NOT|$\lnot$ or `!`|**Negation** of the operand|$\lnot A$|
|NAND|$\overline{\land}$|True **unless both** operands are True|$A \overline{\land} B$|
|NOR|$\overline{\lor}$|True only if **both** operands are False|$A \overline{\lor} B$|
|XOR|$\oplus$|True if **exactly one** operand is True (not both)|$A \oplus B$|

---

## Truth Tables

### AND

|Input A|Input B|Result|
|---|---|---|
|False|False|**False**|
|False|True|**False**|
|True|False|**False**|
|True|True|**True**|

> AND is True **only** when both inputs are True.

### OR

|Input A|Input B|Result|
|---|---|---|
|False|False|**False**|
|False|True|**True**|
|True|False|**True**|
|True|True|**True**|

> OR is True when **at least one** input is True.

### NOT

|Input A|Result|
|---|---|
|False|**True**|
|True|**False**|

> NOT flips the value.

### NAND

|Input A|Input B|Result|
|---|---|---|
|False|False|**True**|
|False|True|**True**|
|True|False|**True**|
|True|True|**False**|

> NAND is the inverse of AND — False **only** when both are True.

### NOR

|Input A|Input B|Result|
|---|---|---|
|False|False|**True**|
|False|True|**False**|
|True|False|**False**|
|True|True|**False**|

> NOR is the inverse of OR — True **only** when both are False.

### XOR

|Input A|Input B|Result|
|---|---|---|
|False|False|**False**|
|False|True|**True**|
|True|False|**True**|
|True|True|**False**|

> XOR is True when inputs **differ** — i.e. exactly one is True.

---

## Circuits and Boolean

### What is a Circuit?

A **circuit** is a path through which electric current flows to perform a specific function — processing data, controlling a device, or powering a component.

- **Analogue circuit** → works with continuous signals
- **Digital circuit** → works with discrete values (0s and 1s)

In digital electronics, circuits use logic gates (AND, OR, NOT, NOR, NAND, XOR), flip-flops, multiplexers, and other functional units.

### Basic Circuit Elements

|Element|Representation|
|---|---|
|Logic Gates|Specific symbols for AND, OR, NOT, XOR, etc.|
|Wires|Lines connecting components|
|Power Source|Positive terminal / battery symbol|
|Ground|Downward triangle — return path for current|

### Logic Gate Symbols & Rules (Binary)

|Gate|Rule|
|---|---|
|NOT|$0 \to 1$, $1 \to 0$|
|AND|$00 \to 0$, $01 \to 0$, $10 \to 0$, $11 \to 1$|
|OR|$00 \to 0$, $01 \to 1$, $10 \to 1$, $11 \to 1$|
|NAND|$00 \to 1$, $01 \to 1$, $10 \to 1$, $11 \to 0$|
|NOR|$00 \to 1$, $01 \to 0$, $10 \to 0$, $11 \to 0$|
|XOR|$00 \to 0$, $01 \to 1$, $10 \to 1$, $11 \to 0$|

### Circuit Example — Z = D | E

**Given expressions:**

$$C = \lnot A$$ $$D = A \lor B$$ $$E = C \land D$$ $$Z = D \lor E$$

**Full truth table:**

|A|B|$C = \lnot A$|$D = A \lor B$|$E = C \land D$|$Z = D \lor E$|
|---|---|---|---|---|---|
|False|False|True|False|False|**False**|
|False|True|True|True|True|**True**|
|True|False|False|True|False|**True**|
|True|True|False|True|False|**True**|

**Step-by-step trace (row 2: A=False, B=True):**

1. $C = \lnot \text{False} = \text{True}$
2. $D = \text{False} \lor \text{True} = \text{True}$
3. $E = \text{True} \land \text{True} = \text{True}$
4. $Z = \text{True} \lor \text{True} = \text{True}$ ✓

---

## Advanced Logic Laws

### Associativity

> The **grouping** of operands does not change the result (applies to AND and OR).

$$\text{AND: } (A \land B) \land C = A \land (B \land C)$$

$$\text{OR: } (A \lor B) \lor C = A \lor (B \lor C)$$

**Worked example** (AND, with $A = \text{True},\ B = \text{False},\ C = \text{True}$):

$$(\text{True} \land \text{False}) \land \text{True} = \text{False} \land \text{True} = \text{False}$$

$$\text{True} \land (\text{False} \land \text{True}) = \text{True} \land \text{False} = \text{False}$$

Both sides equal False → associative law confirmed ✓

---

### Distributivity

> One operation can be **distributed** over another (like multiplication over addition in arithmetic).

$$\text{AND over OR: } A \land (B \lor C) = (A \land B) \lor (A \land C)$$

$$\text{OR over AND: } A \lor (B \land C) = (A \lor B) \land (A \lor C)$$

**Worked example** (AND over OR, with $A = \text{True},\ B = \text{False},\ C = \text{True}$):

$$\text{True} \land (\text{False} \lor \text{True}) = \text{True} \land \text{True} = \text{True}$$

$$(\text{True} \land \text{False}) \lor (\text{True} \land \text{True}) = \text{False} \lor \text{True} = \text{True}$$

Both sides equal True → distributive property confirmed ✓

---

### Complement & Identity Laws

> **Complement** defines relationships between a variable and its inverse. **Identity** defines the neutral element for each operation.

$$\text{Complement: } A \land \lnot A = \text{False} \qquad A \lor \lnot A = \text{True}$$

$$\text{Identity: } A \land \text{True} = A \qquad A \lor \text{False} = A$$

**Worked example** ($A = \text{True}$):

Complement: $$\text{True} \land \lnot \text{True} = \text{True} \land \text{False} = \text{False} \checkmark$$ $$\text{True} \lor \lnot \text{True} = \text{True} \lor \text{False} = \text{True} \checkmark$$

Identity: $$\text{True} \land \text{True} = \text{True} \checkmark$$ $$\text{True} \lor \text{False} = \text{True} \checkmark$$

---

### Commutativity

> The **order** of operands does not affect the result (applies to AND and OR).

$$\text{AND: } A \land B = B \land A$$

$$\text{OR: } A \lor B = B \lor A$$

**Worked example** ($A = \text{True},\ B = \text{False}$):

$$\text{True} \land \text{False} = \text{False} \qquad \text{False} \land \text{True} = \text{False} \checkmark$$

$$\text{True} \lor \text{False} = \text{True} \qquad \text{False} \lor \text{True} = \text{True} \checkmark$$

---

### De Morgan's Laws

> Provide a way to **transform** logical expressions involving NOT. Especially useful for simplifying complex expressions and circuit design.

$$\text{First Law: } \lnot(A \land B) = \lnot A \lor \lnot B$$

$$\text{Second Law: } \lnot(A \lor B) = \lnot A \land \lnot B$$

**Worked example** ($A = \text{True},\ B = \text{False}$):

First Law: $$\lnot(\text{True} \land \text{False}) = \lnot \text{False} = \text{True}$$ $$\lnot \text{True} \lor \lnot \text{False} = \text{False} \lor \text{True} = \text{True} \checkmark$$

Second Law: $$\lnot(\text{True} \lor \text{False}) = \lnot \text{True} = \text{False}$$ $$\lnot \text{True} \land \lnot \text{False} = \text{False} \land \text{True} = \text{False} \checkmark$$

> **Tip:** De Morgan's Laws let you rewrite NAND as NOT-OR and NOR as NOT-AND. This is foundational for circuit simplification.

---

## Logic in Programming

Logic controls the **flow** of a program through logical operators and conditions. Logical expressions enable:

- Decision-making (`if`/`else`)
- Looping (`for`, `while`)
- Error handling and input validation

### Languages Covered

|Language|Description|
|---|---|
|**Bash**|Shell scripting; automating tasks and managing Unix system operations|
|**Python**|High-level, versatile; web dev, data analysis, AI|
|**Java**|Object-oriented; enterprise applications and Android development|

---

### Conditional Execution

> Perform different actions based on whether a condition is True or False.

```bash
#!/bin/bash
read -p "Enter a number: " num
if [[ $num -gt 10 ]]; then
    echo "Number is greater than 10"
else
    echo "Number is less than or equal to 10"
fi
```

```python
num = int(input("Enter a number: "))
if num > 10:
    print("Number is greater than 10")
else:
    print("Number is less than or equal to 10")
```

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();

        if (num > 10) {
            System.out.println("Number is greater than 10");
        } else {
            System.out.println("Number is less than or equal to 10");
        }
        scanner.close();
    }
}
```

---

### Control Flow (Loops)

> Direct program behaviour through looping constructs.

```bash
#!/bin/bash
count=1
while [[ $count -le 5 ]]; do
    echo "Count is $count"
    ((count++))
done
```

```python
count = 1
while count <= 5:
    print(f"Count is {count}")
    count += 1
```

```java
public class Main {
    public static void main(String[] args) {
        int count = 1;
        while (count <= 5) {
            System.out.println("Count is " + count);
            count++;
        }
    }
}
```

---

### Error Handling

> Verify inputs are valid before executing main logic.

```bash
#!/bin/bash
read -p "Enter a number: " num
if [[ $num =~ ^[0-9]+$ ]]; then
    echo "Valid number"
else
    echo "Invalid input. Please enter a number."
fi
```

```python
try:
    num = int(input("Enter a number: "))
    print("Valid number")
except ValueError:
    print("Invalid input. Please enter a number.")
```

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        try {
            int num = scanner.nextInt();
            System.out.println("Valid number");
        } catch (Exception e) {
            System.out.println("Invalid input. Please enter a number.");
        }
    }
}
```

---

## Data Processing in Unix

Data processing in Unix involves manipulation, transformation, and analysis of data through command-line tools.

### Regex Meta-Characters

|Meta-Character|Definition|
|---|---|
|`.`|Matches any single character except newline|
|`^`|Anchors match to the **start** of string/line|
|`$`|Anchors match to the **end** of string/line|
|`*`|Matches **0 or more** of the preceding element|
|`+`|Matches **1 or more** of the preceding element|
|`?`|Matches **0 or 1** of the preceding element (optional)|
|`{n,m}`|Matches **between n and m** occurrences of the preceding element|
|`[]`|Matches any single character **within the brackets**|
|`()`|**Groups** expressions together|
|`\`|**Escapes** a special character (e.g. `\.` matches a literal dot)|
|`\s`|Matches any **whitespace** character (spaces, tabs, newlines)|

### Unix Commands Overview

|Category|Commands|
|---|---|
|Comparison|`diff`, `uniq`|
|Searching|`grep`, `awk`, `sed`|
|Manipulation|`sed`, `paste`, `cut`, `awk`, `sort`, `pr`|

---

### grep — Search with Patterns

> Searches for patterns within files using regular expressions.

```bash
grep [options] pattern [file...]
```

**Example 1** — Match lines containing exactly 2 digits:

```bash
grep -E '\b[0-9]{2}\b' example.txt
# Input:  apple 123 / 12 oranges / 25 / 1234 / 12 bananas
# Output: 12 oranges / 25 / 12 bananas
```

**Example 2** — Match lines starting with an uppercase letter:

```bash
grep '^[A-Z]' example.txt
# Input:  apple / Banana / cherry / Dog / elephant / Giraffe
# Output: Banana / Dog / Giraffe
```

---

### sed — Stream Editor

> Performs text transformations on a file or pipeline input.

```bash
sed [options] 'command' [file...]
```

**Example 1** — Replace 'World' with 'Unix' (output to STDOUT, file unchanged):

```bash
sed 's/World/Unix/' file.txt
# Input:  Hello World / This is a test. / Goodbye World
# Output: Hello Unix  / This is a test. / Goodbye Unix
```

**Example 2** — Replace all uppercase letters and whitespace with underscores (in-place with `-i`):

```bash
sed 's/[A-Z ]/_/g' file.txt
# Input:  Hello World / This is a SED test. / SED is cool
# Output: _____ _____ / ____ __ a ___ test. / ___ is cool
```

---

### sort — Sort File Content

> Arranges lines of a text file alphabetically or numerically.

```bash
sort [OPTION] [FILE...]
```

**Example 1** — Reverse alphabetical order:

```bash
sort -r input.txt
# Input:  Banana / Apple / Cherry / Date
# Output: Date / Cherry / Banana / Apple
```

**Example 2** — Numeric ascending order:

```bash
sort -n numbers.txt
# Input:  20 / 3 / 5 / 10
# Output: 3 / 5 / 10 / 20
```

---

### paste — Merge Files Side by Side

> Merges corresponding lines from multiple files into columns.

```bash
paste [options] file1 [file2...]
```

**Example:**

```bash
paste file1.txt file2.txt
# file1.txt: A / B / C
# file2.txt: 1 / 2 / 3
# Output:    A  1 / B  2 / C  3
```

---

### uniq — Remove Duplicate Lines

> Reports or omits repeated lines. **File must be sorted first.**

```bash
uniq [options] [file]
```

**Example:**

```bash
uniq file.txt
# Input:  apple / apple / banana / banana / cherry
# Output: apple / banana / cherry
```

> ⚠️ `uniq` only removes **adjacent** duplicates — always `sort` first!

---

### diff — Compare Two Files

> Compares two files line by line and outputs the differences.

```bash
diff [options] file1 file2
```

**Example:**

```bash
diff file1.txt file2.txt
# file1.txt: apple / banana / cherry
# file2.txt: apple / cherry / date
# Output:
#   2d1
#   < banana
#   3a3
#   > date
```

- `<` indicates a line only in file1
- `>` indicates a line only in file2

---

### pr — Format Text for Printing

> Formats text with page headers, line numbers, and multiple columns.

```bash
pr [options] [file...]
```

**Example** — Display content in 2 columns:

```bash
pr -2 file.txt
# Input:  apple / banana / cherry / date
# Output: apple    banana
#         cherry   date
```

---

### cut — Extract Columns from Lines

> Removes/extracts sections from each line based on a delimiter.

```bash
cut [options] [file...]
```

**Example 1** — Extract first field using comma as delimiter:

```bash
cut -d',' -f1 file.txt
# Input:  name,age,city / John,25,New York / Alice,30,Los Angeles
# Output: name / John / Alice
```

**Example 2** — Extract fields 1, 3, and 5 using space as delimiter:

```bash
cut -d' ' -f1,3,5 file.txt
# Input:  Alice 34 Developer Seattle USA / Bob 29 Designer NewYork USA
# Output: Alice Developer USA / Bob Designer USA
```

---

### awk — Pattern Scanning & Text Processing

> Powerful tool for column-based text manipulation and pattern scanning.

```bash
awk 'pattern { action }' file
```

**Example 1** — Print columns 1 and 2:

```bash
awk '{ print $1, $2 }' file.txt
# Input:  name age city / John 25 New York / Alice 30 Los Angeles
# Output: name age / John 25 / Alice 30
```

**Example 2** — Formatted output with aligned columns:

```bash
awk '{ printf "Line %d: Name=%-8s Age=%-3s Job=%-10s\n", NR, $1, $2, $3 }' file.txt
# Input:  Alice 34 Developer Seattle USA / Bob 29 Designer NewYork USA
# Output: Line 1: Name=Alice    Age=34  Job=Developer
#         Line 2: Name=Bob      Age=29  Job=Designer
```

**awk Variables:**

|Variable|Meaning|
|---|---|
|`NR`|Current line (record) number|
|`$1`, `$2`, `$3`|Fields 1, 2, 3 of the current line|
|`%-8s`, `%-3s`, `%-10s`|Left-aligned field widths (for formatting)|

---

## Summary of Laws

|Law|AND form|OR form|
|---|---|---|
|Associativity|$(A \land B) \land C = A \land (B \land C)$|$(A \lor B) \lor C = A \lor (B \lor C)$|
|Distributivity|$A \land (B \lor C) = (A \land B) \lor (A \land C)$|$A \lor (B \land C) = (A \lor B) \land (A \lor C)$|
|Complement|$A \land \lnot A = \text{False}$|$A \lor \lnot A = \text{True}$|
|Identity|$A \land \text{True} = A$|$A \lor \text{False} = A$|
|Commutativity|$A \land B = B \land A$|$A \lor B = B \lor A$|
|De Morgan's 1st|$\lnot(A \land B) = \lnot A \lor \lnot B$|—|
|De Morgan's 2nd|—|$\lnot(A \lor B) = \lnot A \land \lnot B$|
