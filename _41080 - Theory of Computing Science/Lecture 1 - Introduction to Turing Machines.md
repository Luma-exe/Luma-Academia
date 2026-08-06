> [!faq] About this Lecture 
> Class: 41080
> Subject: #theoryOfComputerScience
> Date: 06/08/2025 
> Topics: #coding #coding/language/cpp 

## Course Administration

### Weekly Quizzes (10%)

- Ten quizzes, run **weeks 2 through 11**.
- Each quiz is worth **1%**.

> [!tip] Instructor emphasis "Don't stress it but make sure you do it." They are just comprehension checks, not high-stakes assessments.

### Theory Assignment (40%)

- One portion of the grade, but split into **two parts**.
    - **Part A** — due around **Midterm StuVac**.
    - **Part B** — due around **Final StuVac**.
- Requires writing mathematical proofs.

> [!warning] Instructor emphasis "Your first time [writing proofs] is brain-melting." Come at it slowly and early — doing it at the last minute is strongly discouraged.

### Programming Assignments (20% + 30%)

- **Individual Project (20%):**
    - Task: write a **parser**.
    - Choice of language, but only **Java or Python** are supported.
- **Group Project (30%):**
    - Task: build a **Turing Machine**.
    - Not _required_ to work in a team, but strongly recommended ("you are not required to work in a team. But you should.")

### Admin Notes

- **Canvas** is the source of truth for this subject.
- **Ed** (Ed Discussion) is a support system only — not authoritative.
- Tutorials start **next week**; there are none this first week.

---

## What Is a Turing Machine?

> [!important] Definition A Turing Machine is an **abstract machine that rewrites an input string one character at a time.**

- The goal of running a Turing Machine can be one of two things:
    1. Produce some **output string** → this is called a **function problem**.
    2. Determine the answer to a **yes/no question** → this is called a **decision problem**.

> [!note] Course focus This subject focuses on **decision problems**.

### Intuition: The Tape and the Head

- Picture the input written on a **tape** divided into cells, each holding one symbol (e.g. letters, digits, or a blank `⊔`).
- A **head unit** sits over one cell at a time, reads the symbol there, and can act on it (analogized in lecture to a small robot character reading along a tape of boxes, e.g. reading through the string `H E L L O ␣ W O R L D`, one cell at a time).
- The head moves left or right along the tape, one cell per step, building up understanding of the input incrementally rather than seeing it all at once.

---

## The Rules of a Turing Machine

> [!important] Three fundamental constraints
> 
> 1. **The head unit can only look at the cell in front of it** (no seeing the rest of the tape).
> 2. **The head unit acts based on the symbol in that cell** (behaviour depends only on current input symbol).
> 3. **The action is determined by the state of the head unit** (behaviour also depends on current internal "state").

### Three Possible Actions Per Step

Given the current **state** and current **symbol**, a Turing Machine can:

|Action|Required?|
|---|---|
|Rewrite the cell (write a new symbol)|**Not required**|
|Change state|**Not required**|
|Move left / right|**Required**|

- A transition is fully specified by a 5-tuple: **(current state, current symbol) → (new state, new symbol, move direction)**.
- This is exactly the format used in the transition tables below.

---

## Worked Example 1: Check if Input Number Is Even

### Problem Setup

- The input number is written in **binary**; e.g. $100_2 = 4$.
- A binary number is **even if its last bit is 0**, and **odd if its last bit is 1**.
- **Approach:** find the end of the string (the first blank), then step back one cell and check if that bit is 0.

### Transition Table (First Version)

Symbol legend used throughout these tables:

- `⇒` — the **start state**
- `⊔` — the **blank symbol** (empty tape cell)
- `?` **suffix on a state name** — a "scanning" or "searching" state (e.g. `⊔?` = "looking for the blank")
- `!` (red) — an **error/reject-on-malformed-input** transition
- `✔` — **accept** (halt, answer yes)
- `✘` — **reject** (halt, answer no)

```
Current State | Current Symbol | New State | New Symbol | Move
------------- | --------------- | --------- | ---------- | ----
⇒             | 0               | ⊔?        | 0          | →
⇒             | 1               | ⊔?        | 1          | →
⇒             | ⊔               | !         |            |
⊔?            | 0               | ⊔?        | 0          | →
⊔?            | 1               | ⊔?        | 1          | →
⊔?            | ⊔               | 0?        | ⊔          | ←
0?            | 0               | ✔         |            |
0?            | 1               | ✘         |            |
0?            | ⊔               | !         |            |
```

**How it works, step by step:**

1. **Start state `⇒`:** reads the first symbol. If it's `0` or `1`, move to scanning state `⊔?` and step right. If the tape is blank immediately (empty input), this is malformed input → error `!`.
2. **State `⊔?` ("scanning for the end"):** keeps moving right over `0`s and `1`s without changing them, until it hits the blank `⊔` marking the end of the number. When it finds the blank, it switches to state `0?` and steps back **left** onto the last digit.
3. **State `0?` ("is the last digit 0?"):** checks the digit under the head.
    - If it's `0` → **accept** (`✔`) — the number is even.
    - If it's `1` → **reject** (`✘`) — the number is odd.
    - If it's blank (shouldn't happen in well-formed input) → error `!`.

### Transition Table (Simplified — Version 2)

The lecture shows the table can be **compressed** by merging rows that behave identically for both `0` and `1`:

```
Current State | Current Symbol | New State | New Symbol | Move
------------- | --------------- | --------- | ---------- | ----
⇒             | 0, 1            | ⊔?        |            | →
⇒             | ⊔               | !         |            |
⊔?            | 0, 1            |           |            | →
⊔?            | ⊔               | 0?        |            | ←
0?            | 0               | ✔         |            |
0?            | 1               | ✘         |            |
0?            | ⊔               | !         |            |
```

### Transition Table (Simplified — Version 3, Final)

Once malformed-input handling is dropped for brevity, the table reduces further:

```
Current State | Current Symbol | New State | New Symbol | Move
------------- | --------------- | --------- | ---------- | ----
⇒             | 0, 1            | ⊔?        |            | →
⊔?            | 0, 1            |           |            | →
⊔?            | ⊔               | 0?        |            | ←
0?            | 0               | ✔         |            |
0?            | 1               | ✘         |            |
```

> [!tip] Exam-relevant pattern This "scan to the end, then look at the last symbol" pattern (find blank → step back → decide) is a common building block for many Turing Machine designs. Recognize it as a reusable subroutine.

---

## Worked Example 2: Check if Input Number Is Divisible by Three

### Problem Setup

- The input number is written in **binary**.
- A number is **divisible by three** if it equals **three times some integer**.
- **Approach:** calculate the number **modulo three**, i.e. divide by three and keep only the remainder. If the remainder is 0, the number is divisible by 3.
- Key fact used: **the "mod 3" operation respects addition and multiplication** — i.e. $(x + y) \bmod 3 = ((x \bmod 3) + (y \bmod 3)) \bmod 3$, and similarly for multiplication. This lets us compute the remainder digit-by-digit instead of needing the whole number's value at once.

### Deriving the Digit Trick

A binary number with bits $b_n, b_{n-1}, \dots, b_1, b_0$ (from most- to least-significant) has value:

$$ b_n \times 2^n + b_{n-1} \times 2^{n-1} + b_{n-2} \times 2^{n-2} + \cdots + b_2 \times 2^2 + b_1 \times 2^1 + b_0 \times 2^0 $$

Because mod respects addition and multiplication, this is equivalent (mod 3) to summing each term's remainder separately:

$$ \equiv (b_n \times 2^n \bmod 3) + (b_{n-1} \times 2^{n-1} \bmod 3) + \cdots + (b_1 \times 2^1 \bmod 3) + (b_0 \times 2^0 \bmod 3) $$

**Key observation (from the powers-of-2 mod-3 table):**

|Power of 2|Value|Value mod 3|
|---|---|---|
|$2^0$|1|$+1$|
|$2^1$|2|$-1$|
|$2^2$|4|$+1$|
|$2^3$|8|$-1$|
|$\vdots$|$\vdots$|$\vdots$|
|$2^n$|—|$(-1)^n$|

So $2^k \bmod 3$ alternates between $+1$ and $-1$ depending on whether $k$ is even or odd — i.e. $2^k \equiv (-1)^k \pmod 3$.

Substituting back in:

$$ b_n \times (-1)^n + b_{n-1} \times (-1)^{n-1} + \cdots + b_1 \times (-1) + b_0 \times (+1) $$

$$ \equiv b_0 - b_1 + b_2 - b_3 + \cdots + (-1)^n \times b_n $$

> [!important] Key result (exam-relevant) A binary number is divisible by 3 **iff the alternating sum of its bits (starting from the least-significant bit, alternating $+,-,+,-,\dots$) is divisible by 3.** This means a Turing Machine can compute divisibility by 3 by reading the number **from right to left**, alternately **adding** and **subtracting** bit values to/from a running total, and checking if the final total is $\equiv 0 \pmod 3$.

### Transition Table (Partial — Divisible by 3)

The machine marks each bit as it's processed (rewriting `0`→`X`, `1`→`Y`) so it can tell which bits have already been counted, then walks back over the marked bits alternately "adding" and "subtracting" them into the running remainder, tracked via the state name:

```
Current State  | Current Symbol | New State      | New Symbol | Move
-------------- | --------------- | -------------- | ---------- | ----
⇒              | 0               | ⊔?             | X          | →
⇒              | 1               | ⊔?             | Y          | →
⊔?             | 0, 1            |                |            | →
⊔?             | ⊔               | HOLD_0_ADD     |            | ←
HOLD_0_ADD     | 0               | HOLD_0_SUB     |            | ←
HOLD_0_ADD     | 1               | HOLD_1_SUB     |            | ←
HOLD_0_ADD     | X               | ✔              |            |
HOLD_0_ADD     | Y               | ✘              |            |
HOLD_1_ADD     | 0               | HOLD_1_SUB     |            | ←
...            | ...             | ...            | ...        | ...
```

- States named `HOLD_<remainder>_ADD` / `HOLD_<remainder>_SUB` track the **current running remainder** (0, 1, or 2) and whether the **next** bit read should be **added** or **subtracted**, alternating each step as the head moves back through the marked bits.
- `X`/`Y` marks (rewritten from `0`/`1`) let the machine distinguish "already-processed" bits from unprocessed ones and detect when it reaches the start of the number (accept/reject based on final remainder state).

> [!note] Instructor's presentation The full table was left incomplete in lecture (marked `...`) — the pattern of `HOLD_r_ADD`/`HOLD_r_SUB` states for each remainder $r \in {0,1,2}$ continues analogously. Understanding the **modular arithmetic derivation above** matters more than memorizing every row.

---

## The Church-Turing Thesis

> [!important] Church-Turing Thesis **All computations can be simulated on a Turing Machine.**

### Key Corollary

> [!important] Corollary **If a Turing Machine can't do it, then neither can any other computer.**

- This means Turing Machines aren't just a toy model — they define the **theoretical limits of what any computer can compute**, regardless of hardware or programming language.
- This sets up the next topic: since TMs capture the limits of computation, we can use them to identify tasks that **cannot** be solved by _any_ computer.

---

## Some Impossible Programs

> [!warning] None of the following programs can exist (for arbitrary input programs)
> 
> - A **universal bug checker**.
> - A **perfect virus scanner**.
> - A program to **predict the output of any given program**.
> - A program to **definitively eliminate all dead code**.
> - A program to **certify that a program has no infinite loops**.
> - A program to **prove that a given program does anything at all**.

- These are all connected to the famous **Halting Problem** and related undecidability results (to be proven later in the course using Turing Machines).
- **Teaser / motivating puzzle:** the liar paradox — _"This statement is false."_ — hints at the self-referential proof techniques (diagonalization) used to prove these impossibility results.

---

## Prerequisite Math Review: Logic

> [!info] "Stuff I need you to know: logic"

### Logical Connectives

|Name|Symbols|Meaning|
|---|---|---|
|Conjunction|$\land$, `&`|"AND"|
|Disjunction|$\lor$, `\|`|"OR"|
|Negation|$\lnot$|"NOT"|

### De Morgan's Laws

$$ \lnot(A \land B) = (\lnot A) \lor (\lnot B) $$

$$ \lnot(A \lor B) = (\lnot A) \land (\lnot B) $$

### Quantifiers

|Name|Symbol|Meaning|
|---|---|---|
|Existential|$\exists$|"there exists ..."|
|Universal|$\forall$|"for all ..."|

> [!note] Reference diagram The lecture also included a Hasse-diagram / truth-table reference chart of all **16 binary Boolean functions** (AND, OR, XOR, NAND, NOR, IFF, implication, etc.) shown as both Venn diagrams and 4-row truth tables, illustrating how each connective relates to the others by logical implication. Useful as a lookup reference, not something to memorize row-by-row.

---

## Prerequisite Math Review: Set Theory

> [!info] "Stuff I need you to know: set theory"

### Set Basics

> [!important] Definition A **set** = a collection of elements.

- **Order doesn't matter.**
- **Duplicates don't count.**
- **Two sets with the same elements are the same set** (regardless of how they're written/ordered).

### Core Concepts

|Concept|Symbol|
|---|---|
|Union|$\cup$|
|Intersection|$\cap$|
|Complement|$\setminus$|
|Subset|$\subseteq$|
|Proper subset|$\subset$|
|Superset|$\supseteq$|
|Proper superset|$\supset$|

### Venn Diagram Reference (Set Operations)

The lecture included a reference grid of Venn diagrams (source: [Wikimedia Commons — Set Theory Operations](https://commons.wikimedia.org/wiki/File:Set_Theory_Operations.svg)) illustrating, for sets $A, B, C$:

- $A = B \cap C$ — intersection (only the overlapping region shaded)
- $A = B \setminus C$ — set difference (only $B$'s region minus the overlap shaded)
- $A = B \cup C$ — union (everything in either circle shaded)
- $A = \lnot B$ — complement (everything **outside** $B$ shaded)
- $A = B ,\Delta, C$ — symmetric difference (everything in exactly one of $B, C$, i.e. the union **minus** the overlap)

> [!tip] Reading convention In the reference diagrams: **red = in the set $A$ being defined**, **white = not in $A$ (i.e. $\lnot A$)**.

---

## References & Tools Mentioned

- **Canvas** — source of truth for subject content/announcements.
- **Ed** — discussion/support forum (not authoritative).
- Venn diagram reference: [commons.wikimedia.org/wiki/File:Set_Theory_Operations.svg](https://commons.wikimedia.org/wiki/File:Set_Theory_Operations.svg)

## Related Topics

- [[Formal Languages]]
- [[Formal Grammars]]
- [[Halting Problem]]
- [[Decidability and Undecidability]]
- [[Diagonalization]]