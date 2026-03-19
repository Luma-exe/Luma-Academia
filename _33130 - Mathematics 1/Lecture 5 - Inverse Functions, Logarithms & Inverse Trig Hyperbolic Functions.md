
> [!faq] About this Lecture 
> Class: 33130
> Subject: #mathematicsOne
> Date: 19/03/2025 
> Topics: #math

## What is a Function?

- A **function** $f$ with domain $A$ is a rule that gives **exactly one output** $f(x)$ for each input $x$ in $A$
- Key property: *"For each $x$ value there is only one $y$ value"*
- To test if a graph is a function, use the **Vertical Line Test**:
  - If a vertical line cuts the graph **more than once**, it is **NOT** a function

---

## One-to-One (1-1) Functions

- A function is **one-to-one** if: *"For each $y$ value there is only one $x$ value"*
- These are functions that are **always increasing** or **always decreasing**
- To test, use the **Horizontal Line Test**:
  - A one-to-one function is cut **only once** by any horizontal line
- Three ways to prove a function is one-to-one:
  - Show it passes the **horizontal line test** from a graph
  - Show its **derivative** is always positive or always negative (always increasing/decreasing)
  - Show algebraically that $f(x_1) = f(x_2) \Rightarrow x_1 = x_2$

> **Why does this matter?** Only one-to-one functions have inverse functions. If a function is not one-to-one, we cannot "undo" it uniquely.

---

## Inverse Functions – The Core Idea

- An inverse function **"undoes"** a one-to-one function
- If $f$ maps $x \to y$, then $f^{-1}$ maps $y \to x$
- The graph of $f^{-1}$ is the **reflection** of $f$ in the line $y = x$

> **Important:** $f^{-1}(x) \neq \frac{1}{f(x)}$. The $-1$ is notation for inverse, NOT a power.

### Definition

- Let $f$ be a 1-1 function. The **inverse of $f$**, denoted $f^{-1}$, is the unique function whose:
  - **Domain** = the range of $f$
  - **Range** = the domain of $f$
  - Satisfies: $f(f^{-1}(x)) = x$ for all $x$ in the range of $f$
  - Also: $f^{-1}(f(x)) = x$ for all $x$ in the domain of $f$

### Key Identities

$$f(f^{-1}(x)) = x$$
$$f^{-1}(f(x)) = x$$

### Example – Table of Values

For $f(x) = 2^x$:

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|-----|------|------|------|-----|-----|-----|-----|
| $y$ | $\frac{1}{8}$ | $\frac{1}{4}$ | $\frac{1}{2}$ | $1$ | $2$ | $4$ | $8$ |

To get $f^{-1}$, simply **swap the $x$ and $y$ rows**:

| $x$ | $\frac{1}{8}$ | $\frac{1}{4}$ | $\frac{1}{2}$ | $1$ | $2$ | $4$ | $8$ |
|-----|------|------|------|-----|-----|-----|-----|
| $y$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |

- So $f(2) = 4 \Rightarrow f^{-1}(4) = 2$
- And $f(3) = 8 \Rightarrow f^{-1}(8) = 3$

---

## Finding an Inverse Function

There are two methods:

### Method 1 – Use the Definition

- We know $f(f^{-1}(x)) = x$
- Substitute $f^{-1}(x)$ into $f$ and solve for $f^{-1}(x)$

**Example:** Find $f^{-1}(x)$ for $f(x) = 4x + 3$

- Since $f(f^{-1}(x)) = x$, we get: $4f^{-1}(x) + 3 = x$
- Solving: $4f^{-1}(x) = x - 3$
- Therefore: $f^{-1}(x) = \frac{1}{4}(x - 3)$

### Method 2 – Swap $x$ and $y$, then solve for $y$

- Write $y = f(x)$
- Swap $x$ and $y$ to get $x = f(y)$
- Rearrange to make $y$ the subject
- That rearranged $y$ is $f^{-1}(x)$

**Example:** $f(x) = 4x + 3$

- Start: $y = 4x + 3$
- Swap: $x = 4y + 3$
- Solve: $x - 3 = 4y \Rightarrow y = \frac{1}{4}(x - 3)$
- Therefore: $f^{-1}(x) = \frac{1}{4}(x - 3)$

---

## Proving One-to-One and Finding the Inverse – Full Example

**Example:** Show $f(x) = \frac{x+4}{x-2}$ is one-to-one, then find its inverse.

### Step 1 – Show it's one-to-one

- Find $f'(x)$ using the quotient rule:

$$f'(x) = \frac{(x-2)(1) - (x+4)(1)}{(x-2)^2} = \frac{x - 2 - x - 4}{(x-2)^2} = \frac{-6}{(x-2)^2}$$

- Since $(x-2)^2 > 0$ always, $f'(x) = \frac{-6}{(x-2)^2} < 0$ always
- So $f$ is **always decreasing** $\Rightarrow$ it is **one-to-one**

### Step 2 – Find the inverse

- Swap $x$ and $y$: $x = \frac{y+4}{y-2}$
- Multiply both sides by $(y-2)$: $x(y-2) = y+4$
- Expand: $xy - 2x = y + 4$
- Collect $y$ terms: $xy - y = 4 + 2x$
- Factor: $y(x-1) = 2x + 4$
- Solve: $y = \frac{2x+4}{x-1}$
- Therefore: $f^{-1}(x) = \frac{2x+4}{x-1}$

---

## The Logarithm Function

### Definition

- The **logarithm** is defined as the **inverse of the exponential function**
- $y = \log x$ if and only if $x = e^y$
- This is also written as $y = \log_e x$ or $y = \ln x$

### Key Inverse Identities

$$\ln(e^x) = x \quad \text{(for all } x\text{)}$$
$$e^{\ln x} = x \quad \text{(for } x > 0\text{)}$$

### Notation

- $f(x) = e^x \Rightarrow f^{-1}(x) = \log_e x = \ln x$
- **On a calculator:** $\log x$ means $\log_{10} x$
- **In this subject and post-school textbooks:** $\log x$ means $\log_e x = \ln x$

### Graph

- The graph of $y = \ln x$ is the **reflection** of $y = e^x$ in the line $y = x$
- $y = \ln x$, $y = \log_2 x$, and $y = \log_e x$ are all the same shape, just scaled

### Log Laws

$$\log(AB) = \log A + \log B$$
$$\log\left(\frac{A}{B}\right) = \log A - \log B$$
$$\log A^C = C \log A$$

> These laws are essential for **logarithmic differentiation** — you must know them.

---

## Derivative of the Logarithm Function

### Derivation

- Let $y = \log_e x$. We want $\frac{dy}{dx}$
- From $y = \log_e x$, we know $x = e^y$
- Differentiate both sides with respect to $x$:

$$\frac{d}{dx}(x) = \frac{d}{dx}(e^y)$$

$$1 = \frac{d}{dy}(e^y) \cdot \frac{dy}{dx} \quad \text{(Chain Rule)}$$

$$1 = e^y \cdot \frac{dy}{dx}$$

$$\frac{dy}{dx} = \frac{1}{e^y} = \frac{1}{x}$$

### Result

$$\frac{d}{dx} \log_e x = \frac{1}{x}$$

### With Chain Rule (for composite functions)

$$\frac{d}{dx} \log_e(u) = \frac{1}{u} \cdot \frac{du}{dx}$$

**Examples:**

- $\frac{d}{dx} \log_e(3x^2) = \frac{1}{3x^2} \cdot 6x = \frac{6x}{3x^2} = \frac{2}{x}$

- $\frac{d}{dx} \log_e(5 + \sin x) = \frac{1}{5 + \sin x} \cdot \cos x = \frac{\cos x}{5 + \sin x}$

---

## Logarithmic Differentiation

- A technique for differentiating **complicated products, quotients, or power functions**
- Works by taking $\ln$ of both sides, applying log laws to simplify, then differentiating

### Derivative of $a^x$ (General Exponential)

$$\frac{d}{dx}(a^x) = (\ln a) \cdot a^x \quad \text{for } a > 0$$

> This is derived using logarithmic differentiation (see below).

### Example 1 – Differentiate $y = 3^x$

- Take $\log$ of both sides: $\log y = \log 3^x = x \log 3$
- Differentiate both sides with respect to $x$:

$$\frac{d}{dy}(\log y) \cdot \frac{dy}{dx} = \log 3$$

$$\frac{1}{y} \cdot \frac{dy}{dx} = \log 3$$

$$\frac{dy}{dx} = y \cdot \log 3 = (\log 3) \cdot 3^x$$

### Example 2 – Differentiate $y = (3x^4 + 7x^2)^7 (2-x)^5$

- Take $\ln$ of both sides:

$$\ln y = 7\ln(3x^4 + 7x^2) + 5\ln(2 - x)$$

- Differentiate both sides with respect to $x$ (using chain rule):

$$\frac{1}{y} \cdot \frac{dy}{dx} = \frac{7(12x^3 + 14x)}{3x^4 + 7x^2} + \frac{-5}{2-x}$$

- Multiply both sides by $y$:

$$\frac{dy}{dx} = \left[\frac{7(12x^3+14x)}{3x^4+7x^2} - \frac{5}{2-x}\right](3x^4+7x^2)^7(2-x)^5$$

---

## The Inverse Hyperbolic Functions

### Background – Hyperbolic Functions

- $\sinh x = \frac{e^x - e^{-x}}{2}$ — always increasing, so already one-to-one
- $\cosh x = \frac{e^x + e^{-x}}{2}$ — NOT one-to-one on all of $\mathbb{R}$, must restrict to $x \geq 0$
- $\tanh x = \frac{\sinh x}{\cosh x}$ — always increasing, so one-to-one

### Inverse Hyperbolic Functions and Their Domains/Ranges

| Function | Also Written | Domain | Range |
|----------|-------------|--------|-------|
| $\sinh^{-1} x$ | $\text{arcsinh } x$ | $-\infty < x < \infty$ | $\mathbb{R}$ |
| $\cosh^{-1} x$ | $\text{arccosh } x$ | $x \geq 1$ | $y \geq 0$ |
| $\tanh^{-1} x$ | $\text{arctanh } x$ | $-1 < x < 1$ | $-\infty < y < \infty$ |

> For $\cosh^{-1}$, we restrict $\cosh x$ to $x \geq 0$ in order to make it one-to-one, then invert.

### Key Identity (used in proofs)

$$\cosh^2 \theta - \sinh^2 \theta = 1$$

Rearranging: $\cosh^2 \theta = 1 + \sinh^2 \theta$, so $\cosh \theta = \sqrt{1 + \sinh^2 \theta}$ (positive root since $\cosh \theta > 0$)

---

## Derivatives of Inverse Hyperbolic Functions

$$\frac{d}{dx} \sinh^{-1} x = \frac{1}{\sqrt{1+x^2}}$$

$$\frac{d}{dx} \cosh^{-1} x = \frac{1}{\sqrt{x^2-1}}$$

$$\frac{d}{dx} \tanh^{-1} x = \frac{1}{1-x^2}$$

### Proof of (1): $\frac{d}{dx} \sinh^{-1} x = \frac{1}{\sqrt{1+x^2}}$

- Let $y = \sinh^{-1} x$ (this function is always increasing, so $\frac{dy}{dx} > 0$)
- Then $x = \sinh y$
- Differentiate both sides with respect to $x$ using chain rule on RHS:

$$1 = \frac{d}{dy}(\sinh y) \cdot \frac{dy}{dx} = \cosh y \cdot \frac{dy}{dx}$$

$$\frac{dy}{dx} = \frac{1}{\cosh y}$$

- Use the identity $\cosh^2 y = 1 + \sinh^2 y$, so $\cosh y = \sqrt{1 + \sinh^2 y} = \sqrt{1 + x^2}$
- We take the **positive** square root because $\cosh y > 0$ always

$$\frac{dy}{dx} = \frac{1}{\sqrt{1+x^2}}$$

> Why only positive square root? Because $\cosh y = \frac{e^y + e^{-y}}{2}$ is always positive, so there is no ambiguity.

---

## Integrals Associated with Inverse Hyperbolic Functions

These integrals come directly from reversing the derivatives above:

$$\int \frac{dx}{\sqrt{a^2 + x^2}} = \sinh^{-1}\left(\frac{x}{a}\right) + C_1 = \ln\left(x + \sqrt{x^2 + a^2}\right) + C_2$$

$$\int \frac{dx}{\sqrt{x^2 - a^2}} = \cosh^{-1}\left(\frac{x}{a}\right) + C_1 = \ln\left(x + \sqrt{x^2 - a^2}\right) + C_2$$

$$\int \frac{dx}{1 - x^2} = \tanh^{-1} x + C_1 = \frac{1}{2}\ln\left|\frac{1+x}{1-x}\right| + C_2$$

$$\int \frac{dx}{a^2 - x^2} = \begin{cases} \frac{1}{a}\tanh^{-1}\left(\frac{x}{a}\right) + C & \text{if } |x| < a \\ \frac{1}{a}\coth^{-1}\left(\frac{x}{a}\right) + C & \text{if } |x| > a \end{cases}$$

$$\int \cosh x \, dx = \sinh x + C$$

$$\int \sinh x \, dx = \cosh x + C$$

$$\int \tanh x \, dx = \ln \cosh x + C$$

> You do **not** need to memorise the