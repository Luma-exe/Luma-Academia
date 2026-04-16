
> [!faq] About this Lecture 
> Class: 33130
> Subject: #mathematicsOne
> Date: 16/04/2025 
> Topics: #math

## A Brief History of Numbers

- Mathematics developed out of practical needs — counting sheep, dividing land, measuring fields
- Each time a new kind of problem arose that couldn't be solved with existing numbers, mathematicians *extended* the number system
- This is the key idea: **every new type of number exists because we needed it to solve a problem**

---

## The Positive Integers

- Counting things (sheep, people, objects) and adding them together gives us the **Positive Integers**
- We denote this set $\mathbb{Z}^+$
- These are the numbers $1, 2, 3, 4, \ldots$ going on forever to the right
- Using these we can solve problems like:

$$x = 1 + 2$$

- Answer: $x = 3$, which is a positive integer ✓

---

## The Integers (Including Negatives)

- What if you have 1 sheep and 2 are taken away? You get a **negative number** — something that doesn't exist physically but is mathematically useful
- The operation of **subtraction** forces us to introduce negative numbers
- We call the full set of integers $\mathbb{Z}$
- This includes: $\ldots, -2, -1, 0, 1, 2, 3, \ldots$
- Using these we can solve:

$$x = 1 - 2$$

- Answer: $x = -1$, which requires a negative number ✓

---

## The Rational Numbers

- If a farmer has 5 sheep and divides them equally between 2 children, each child gets $\frac{5}{2} = 2\frac{1}{2}$ sheep
- The operation of **division** introduces fractions — numbers that sit *between* the integers on the number line
- We call this set $\mathbb{Q}$ (from the Latin *quotient*)
- A rational number is any number that can be written as $\frac{p}{q}$ where $p$ and $q$ are integers and $q \neq 0$
- Examples: $\frac{1}{2},\ \frac{2}{3},\ -\frac{7}{4},\ 3$ (since $3 = \frac{3}{1}$)
- Using these we can solve:

$$2x = 5$$

$$x = \frac{5}{2}$$

- Answer: $x = \frac{5}{2}$, a fraction ✓

---

## The Irrational Numbers

- Consider a square field with side length 1 stade. A farmer wants to build a fence diagonally across it. How long is the fence?
- Using **Pythagoras' theorem**: $x^2 = 1^2 + 1^2 = 2$, so $x = \sqrt{2}$
- $\sqrt{2}$ **cannot** be written as $\frac{p}{q}$ for any integers $p$ and $q$ — it is **irrational**
- This was discovered by **Hippasus of Metapontum** (ancient Greek mathematician)
- Irrational numbers have **infinite, non-repeating** decimal expansions, e.g. $\sqrt{2} = 1.41421356\ldots$
- Taking **fractional powers** (square roots, cube roots, etc.) of rational numbers leads to irrational numbers
- Using these we can solve:

$$x^2 = 2 \implies x = \pm\sqrt{2}$$

---

## Transcendental Numbers

- Consider a circle of radius $r$. The circumference is:

$$C = 2\pi r$$

- Here $\pi = 3.14159\ldots$ which is **not** rational AND **not** even expressible as a root of a rational number
- $\pi$ is called a **transcendental number** — a special kind of irrational number that cannot be produced by any algebraic operation on rational numbers
- Another famous transcendental number is $e = 2.71828\ldots$
- Proving $\pi$ is transcendental requires a branch of mathematics called **group theory**

---

## The Real Numbers

- Combining **all** of the above — positive integers, negative integers, fractions, irrational numbers, and transcendental numbers — fills up the entire number line
- We call this complete set the **Real Numbers**, denoted $\mathbb{R}$
- Every point on the number line corresponds to exactly one real number
- The number line extends infinitely in both directions: $\ldots, -2, -1, 0, 1, 2, 3, 4, \ldots$

---

## The Hierarchy of Number Sets

- Each new number system **contains** all the previous ones — like nested ovals:

| To solve | We need | New symbol |
|---|---|---|
| $x = 1 + 2$ | Positive integers | $3$ |
| $x = 1 - 2$ | Negative numbers | $-1$ |
| $2x = 5$ | Fractions | $\frac{2}{5}$ |
| $x^2 = 2$ | Irrational numbers | $\sqrt{2}$ |
| $x = 2\pi r$ | Transcendental numbers | $\pi$ |
| $x^2 = -2$ | **Complex numbers** | $i = \sqrt{-1}$ |

- The sets nest inside each other: $\mathbb{Z}^+ \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$

---

## The Problem That Real Numbers Cannot Solve

- What if we want to solve $x^2 = -2$?
- Squaring **any** real number always gives a result $\geq 0$
- So there is **no real number** that satisfies $x^2 = -2$
- We need to **extend** our number system once more

---

## The Imaginary Unit $i$

- We introduce a new symbol $i$ defined by:

$$i^2 = -1$$

- Equivalently:

$$i = \sqrt{-1}$$

- This is called an **imaginary number** because it has no place on the real number line
- Using $i$ we can now solve equations involving square roots of negative numbers

### Example: Solving $x^2 = -4$

$$x^2 = -4$$

$$x = \pm\sqrt{-4}$$

$$= \pm\sqrt{(-1) \times 4}$$

$$= \pm\sqrt{-1} \cdot \sqrt{4}$$

$$= \pm i \cdot 2$$

$$= \pm 2i$$

**Check:** $(2i)^2 = 4i^2 = 4 \times (-1) = -4$ ✓

### Key property to remember

$$i^2 = -1$$

This single rule is the foundation of all complex number arithmetic.

---

## Powers of $i$

- Since $i^2 = -1$, the powers of $i$ cycle in a pattern of 4:

| Power | Value |
|---|---|
| $i^1$ | $i$ |
| $i^2$ | $-1$ |
| $i^3$ | $-i$ |
| $i^4$ | $1$ |
| $i^5$ | $i$ (cycle repeats) |

- To find $i^n$ for large $n$, divide $n$ by 4 and use the remainder

---

## Complex Numbers — Definition

- We can combine real numbers and imaginary numbers to form **complex numbers**

### Definition

A **complex number** is any number of the form:

$$z = a + ib$$

where:
- $a \in \mathbb{R}$ is called the **real part**, written $\text{Re}(z) = a$
- $b \in \mathbb{R}$ is called the **imaginary part**, written $\text{Im}(z) = b$
- $i = \sqrt{-1}$ is the imaginary unit

- The set of all complex numbers is denoted $\mathbb{C}$

### Examples

- $z = 3 + 5i$ → real part $= 3$, imaginary part $= 5$
- $z = -2 + 7i$ → real part $= -2$, imaginary part $= 7$
- $z = 4$ → a **purely real** number (imaginary part $= 0$), still a complex number
- $z = 5i$ → a **purely imaginary** number (real part $= 0$)

---

## The Complex Plane (Argand Diagram)

- Because a complex number has **two components** ($a$ and $b$), we can represent it as a **point in a 2D plane**
- The horizontal axis is the **real axis**
- The vertical axis is the **imaginary axis**
- The point $z = a + ib$ is plotted at coordinates $(a, b)$

### Key regions

- Points on the **real axis** (imaginary part $= 0$) are purely real numbers
- Points on the **imaginary axis** (real part $= 0$) are purely imaginary numbers
- All other points are general complex numbers

### Example

- $z = 3 + 5i$ is plotted at the point $(3, 5)$ in the complex plane
- $z = 5i$ is plotted at $(0, 5)$ — on the imaginary axis

---

## Why Complex Numbers Matter

- Complex numbers are not just abstract — they are used extensively in:
  - **Electrical engineering** (AC circuits, impedance)
  - **Signal processing** (Fourier transforms)
  - **Quantum mechanics** (wave functions)
  - **Fluid dynamics and aerodynamics**
  - **Control systems** (stability analysis)
- The key insight from this lecture: just as negative numbers seemed "unreal" to ancient mathematicians, complex numbers are equally valid — they just require a **second dimension** to live in

---

## Summary of Number Sets

| Set | Symbol | Contains | Introduced by |
|---|---|---|---|
| Positive integers | $\mathbb{Z}^+$ | $1, 2, 3, \ldots$ | Addition |
| All integers | $\mathbb{Z}$ | $\ldots, -1, 0, 1, \ldots$ | Subtraction |
| Rational numbers | $\mathbb{Q}$ | Fractions $\frac{p}{q}$ | Division |
| Irrational numbers | — | $\sqrt{2}, \sqrt{3}, \ldots$ | Fractional powers |
| Transcendental numbers | — | $\pi, e, \ldots$ | Geometry / calculus |
| Real numbers | $\mathbb{R}$ | All of the above | — |
| Complex numbers | $\mathbb{C}$ | $a + ib$ | $\sqrt{-1}$ |

The containment chain is:

$$\mathbb{Z}^+ \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$$