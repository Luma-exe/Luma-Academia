
> [!faq] About this Lecture 
> Class: 33130
> Subject: #mathematicsOne
> Date: 07/04/2025 
> Topics: #math

> These notes cover **three core integration methods**: substitution (reversing the chain rule), integration by parts, and integration by partial fractions. Each section builds on the previous one. Even if you have never seen these before, start from the top and work through each section in order.

---

## Background — What Is an Integral?

- Integration is the **reverse of differentiation**
- If $F'(x) = f(x)$, then $\int f(x)\, dx = F(x) + C$, where $C$ is the constant of integration
- There are two types:
  - **Indefinite integral**: $\int f(x)\, dx$ — gives a family of functions (always add $+ C$)
  - **Definite integral**: $\int_a^b f(x)\, dx$ — gives a number (the area under the curve between $x = a$ and $x = b$)
- Basic power rule for integration (reverse of differentiation power rule):
  $$\int x^n\, dx = \frac{x^{n+1}}{n+1} + C \quad \text{for } n \neq -1$$

---

## Method 1 — Substitution (Reversing the Chain Rule)

### Why Substitution Exists

- When you differentiate a **composite function** (a function inside a function), you use the **chain rule**:
  $$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$
- Substitution lets you **reverse** this process when integrating
- You look for an "outer function" $f$ and an "inner function" $g(x)$ inside your integral

### The Core Idea — Spotting the Pattern

- If your integrand looks like $f(g(x)) \cdot g'(x)$, then:
  $$\int f(g(x)) \cdot g'(x)\, dx = F(g(x)) + C$$
  where $F$ is the antiderivative of $f$

- **Example**: $\int 2x \cdot \cos(x^2)\, dx$
  - Inner function: $g(x) = x^2$, so $g'(x) = 2x$ — and $2x$ is already sitting in the integrand!
  - Outer function: $\cos$
  - Result: $\sin(x^2) + C$

### Adjustments — When the Derivative is Off by a Constant

- Sometimes $g'(x)$ is present but **multiplied by a constant** — you can adjust for this
- **Example**: $\int \cos(5x)\, dx$
  - Inner function: $g(x) = 5x$, so $g'(x) = 5$
  - The integrand is missing the factor of $5$, so multiply and divide by $5$:
    $$\int \cos(5x)\, dx = \frac{1}{5} \int 5\cos(5x)\, dx = \frac{1}{5}\sin(5x) + C$$
- General rule: if your substitution gives $du = k\, dx$, then $dx = \frac{du}{k}$, so a factor of $\frac{1}{k}$ comes out the front

### Formal Substitution — The Full Method

Use this when you **can't easily spot** the pattern, or when the algebra is complex.

**Steps:**
1. Choose a substitution $u = g(x)$ (the "inner" part)
2. Differentiate to get $\frac{du}{dx} = g'(x)$, then write $du = g'(x)\, dx$
3. Replace **every** $x$ and $dx$ in the integral with $u$ and $du$
4. Integrate with respect to $u$
5. Substitute back in terms of $x$

**Critical rule**: after substituting, the integral **must only contain $u$** — no mix of variables allowed

### Full Substitution — When You Must Replace Everything

- Sometimes the integrand has an $x$ sitting outside a function of $x$, and reversing chain rule alone is not enough
- **Example**: $\int x\sqrt{x-1}\, dx$
  - If we just let $u = x - 1$ but leave $x$ as is, we get $\int x\sqrt{u}\, dx$ — **this is invalid** because $x$ and $u$ are mixed
  - **Fix**: solve for $x$ in terms of $u$
    - $u = x - 1 \Rightarrow x = u + 1$
    - $\frac{du}{dx} = 1 \Rightarrow du = dx$
  - Now substitute **everything**:
    $$\int (u+1)\sqrt{u}\, du = \int (u+1) \cdot u^{1/2}\, du = \int u^{3/2} + u^{1/2}\, du$$
  - Integrate using the power rule:
    $$= \frac{2}{5}u^{5/2} + \frac{2}{3}u^{3/2} + C$$
  - Substitute back $u = x - 1$:
    $$= \frac{2}{5}(x-1)^{5/2} + \frac{2}{3}(x-1)^{3/2} + C$$

### Definite Integrals with Substitution — Two Methods

When using substitution on a definite integral $\int_a^b f(x)\, dx$, you must handle the **limits of integration** carefully.

**Method 1 — Change the limits**
- When you substitute $u = g(x)$, convert the limits too: $x = a \Rightarrow u = g(a)$ and $x = b \Rightarrow u = g(b)$
- Integrate entirely in $u$ with the new limits — do not convert back to $x$

**Method 2 — Don't change the limits**
- Do the substitution, integrate in $u$, then **convert back to $x$** before applying the original limits $a$ and $b$

**Example** (same integral, both methods): $\int_1^2 \sqrt{4x+3}\, dx$

Let $u = 4x + 3$, so $\frac{du}{dx} = 4 \Rightarrow dx = \frac{du}{4}$

*Method 1:*
- When $x = 1$: $u = 4(1)+3 = 7$
- When $x = 2$: $u = 4(2)+3 = 11$
$$\int_7^{11} u^{1/2} \cdot \frac{du}{4} = \frac{1}{4} \cdot \frac{2}{3}\left[u^{3/2}\right]_7^{11} = \frac{1}{6}(11^{3/2} - 7^{3/2})$$

*Method 2:*
- Keep limits as $1$ to $2$, integrate in $u$, then convert back:
$$\frac{1}{4} \cdot \frac{2}{3}\left[u^{3/2}\right] = \frac{1}{6}\left[(4x+3)^{3/2}\right]_1^2 = \frac{1}{6}(11^{3/2} - 7^{3/2})$$

Both methods give the **same answer** — choose whichever feels easier.

### Using Substitution with a Table of Integrals

- Exam papers often provide a **table of standard integrals**, e.g.:
  $$\int \frac{1}{\sqrt{a^2 - x^2}}\, dx = \arcsin\!\left(\frac{x}{a}\right) + C$$
- You may need to substitute to **match the form** in the table

**Example**: Find $\int \frac{1}{\sqrt{9 - 9x^2}}\, dx$ using the table entry above
- Let $u = 3x$, then $du = 3\, dx \Rightarrow dx = \frac{du}{3}$
- Rewrite: $\sqrt{9 - 9x^2} = \sqrt{9(1 - x^2)} = 3\sqrt{1-x^2}$
- A cleaner example from the notes: find $\int \frac{1}{\sqrt{1 - 9x^2}}\, dx$
  - Let $u = 3x$, then $du = 3\, dx \Rightarrow dx = \frac{du}{3}$
  - $\sqrt{1 - 9x^2} = \sqrt{1 - u^2}$
  - The integral becomes:
    $$\int \frac{1}{\sqrt{1-u^2}} \cdot \frac{du}{3} = \frac{1}{3}\arcsin(u) + C = \frac{1}{3}\arcsin(3x) + C$$

---

## Method 2 — Integration by Parts

### Why Integration by Parts Exists

- When you have a **product of two functions** where one does not appear to be the derivative of the other
- **Example**: $\int x e^x\, dx$ — you can't use substitution here because $x$ is not the derivative of $e^x$
- Integration by parts reverses the **product rule** for differentiation

### Deriving the Formula

Start from the **product rule** for differentiation:
$$\frac{d}{dx}[u \cdot v] = u \frac{dv}{dx} + v \frac{du}{dx}$$

Rearrange to isolate the term you want:
$$u \frac{dv}{dx} = \frac{d}{dx}[uv] - v \frac{du}{dx}$$

Integrate both sides with respect to $x$:
$$\int u \frac{dv}{dx}\, dx = uv - \int v \frac{du}{dx}\, dx$$

This gives the **Integration by Parts formula**:

$$\boxed{\int u\, dv = uv - \int v\, du}$$

Or in the "prime" notation (where $u'$ means $\frac{du}{dx}$):
$$\int u \cdot v'\, dx = u \cdot v - \int v \cdot u'\, dx$$

### How to Apply the Formula — Step by Step

1. Split the integrand into two parts: call one $u$ and the other $dv$
2. Differentiate $u$ to get $du$ (i.e., find $u'$)
3. Integrate $dv$ to get $v$ (i.e., find the antiderivative of $v'$)
4. Apply the formula: $\int u\, dv = uv - \int v\, du$
5. Evaluate the remaining integral $\int v\, du$

### Choosing $u$ and $dv$ — The LIATE Rule

Choosing the **wrong** $u$ makes the problem much harder or impossible. Use the **LIATE mnemonic** to choose $u$ — pick whichever comes first in this list:

| Letter | Stands for | Examples |
|--------|-----------|---------|
| **L** | **L**ogarithm | $\ln x$, $\log x$ |
| **I** | **I**nverse trig | $\arcsin x$, $\arctan x$ |
| **A** | **A**lgebraic (polynomial) | $x^2$, $x^3 + 1$ |
| **T** | **T**rigonometric | $\sin x$, $\cos x$ |
| **E** | **E**xponential | $e^x$, $e^{3x}$ |

- The **other** factor becomes $dv$
- Note: in university maths, $\log x$ always means $\ln x$ (natural log, base $e$)

### The Four Main Types to Know

**Type 1 — Polynomial × Exponential**
- Example: $\int x e^x\, dx$
- Choose: $u = x$ (algebraic), $dv = e^x\, dx$
- Then: $du = dx$, $v = e^x$
- Apply formula:
  $$\int x e^x\, dx = x e^x - \int e^x\, dx = x e^x - e^x + C = e^x(x - 1) + C$$

**Type 2 — Polynomial × Trigonometric**
- Example: $\int x \sin x\, dx$
- Choose: $u = x$ (algebraic), $dv = \sin x\, dx$
- Then: $du = dx$, $v = -\cos x$
- Apply formula:
  $$\int x \sin x\, dx = x(-\cos x) - \int (-\cos x)\, dx = -x\cos x + \int \cos x\, dx = -x\cos x + \sin x + C$$

**Type 3 — Polynomial × Logarithm**
- Example: $\int x \ln x\, dx$
- **Important**: choose $u = \ln x$ (log comes first in LIATE), $dv = x\, dx$
- Then: $du = \frac{1}{x}\, dx$, $v = \frac{x^2}{2}$
- Apply formula:
  $$\int x \ln x\, dx = \frac{x^2}{2} \ln x - \int \frac{x^2}{2} \cdot \frac{1}{x}\, dx = \frac{x^2}{2}\ln x - \int \frac{x}{2}\, dx = \frac{x^2}{2}\ln x - \frac{x^2}{4} + C$$

- Special case — integrating $\ln x$ alone (with no polynomial multiplier):
  - Write it as $\int \ln x \cdot 1\, dx$
  - Choose: $u = \ln x$, $dv = 1\, dx$ (i.e., $dv = dx$)
  - Then: $du = \frac{1}{x}\, dx$, $v = x$
  - Apply formula:
    $$\int \ln x\, dx = x\ln x - \int x \cdot \frac{1}{x}\, dx = x\ln x - \int 1\, dx = x\ln x - x + C$$

**Type 4 — Exponential × Trigonometric (The Loop)**
- Example: $\int e^x \sin x\, dx$
- This type does **not** simplify cleanly in one step — it loops back on itself
- Choose: $u = e^x$, $dv = \sin x\, dx$
- Then: $du = e^x\, dx$, $v = -\cos x$
- First application:
  $$\int e^x \sin x\, dx = -e^x \cos x + \int e^x \cos x\, dx$$
- Now apply integration by parts **again** to $\int e^x \cos x\, dx$:
  - $u = e^x$, $dv = \cos x\, dx$, $du = e^x\, dx$, $v = \sin x$
  $$\int e^x \cos x\, dx = e^x \sin x - \int e^x \sin x\, dx$$
- Substitute back:
  $$\int e^x \sin x\, dx = -e^x \cos x + e^x \sin x - \int e^x \sin x\, dx$$
- The **original integral appears on both sides** — call it $I$:
  $$I = -e^x \cos x + e^x \sin x - I$$
  $$2I = e^x(\sin x - \cos x)$$
  $$\boxed{I = \int e^x \sin x\, dx = \frac{e^x(\sin x - \cos x)}{2} + C}$$
- **Key insight**: be consistent — choose the same type of function (e.g., always $u = $ exponential) both times you apply the formula, or the loop will cancel to $0 = 0$

### Checking Your Answer

- You can **always verify** an integration by parts result by differentiating the answer
- If $\frac{d}{dx}[\text{your answer}] = $ the original integrand, you are correct

---

## Method 3 — Integration by Partial Fractions

### Why Partial Fractions Exists

- Used when integrating a **rational function** — a fraction where both numerator and denominator are polynomials:
  $$\int \frac{p(x)}{q(x)}\, dx$$
- The idea is to **split** a complicated fraction into **simpler fractions** that are easier to integrate
- This reverses the process of adding fractions with different denominators

### Before You Start — Important Checks

**Check 1**: Is the degree of the numerator **less than** the degree of the denominator?
  - Degree = highest power of $x$
  - If **yes**: proceed with partial fractions
  - If **no**: do **polynomial long division** first to reduce it, then apply partial fractions to the remainder

**Check 2**: Is the numerator already (a multiple of) the derivative of the denominator?
  - If yes, use the log rule instead:
    $$\int \frac{f'(x)}{f(x)}\, dx = \ln|f(x)| + C$$
  - **Example**: $\int \frac{2x}{x^2 + 1}\, dx = \ln|x^2 + 1| + C$ (since the derivative of $x^2 + 1$ is $2x$)
  - More generally: $\int \frac{k \cdot f'(x)}{f(x)}\, dx = k\ln|f(x)| + C$

### The Core Process — Decomposing into Partial Fractions

**Goal**: reverse the process of adding algebraic fractions, e.g.:
$$\frac{3}{x+2} + \frac{-1}{x-1} = \frac{3(x-1) - (x+2)}{(x+2)(x-1)} = \frac{2x-5}{x^2+x-2}$$

So $\int \frac{2x-5}{x^2+x-2}\, dx = \int \frac{3}{x+2}\, dx + \int \frac{-1}{x-1}\, dx = 3\ln|x+2| - \ln|x-1| + C$

**Step-by-step method:**

1. **Factorise the denominator** completely
2. Write the fraction as a sum of simpler fractions with **unknown constants** in the numerators
3. Multiply both sides by the factored denominator to clear fractions
4. **Solve for the constants** (use substitution or equating coefficients)
5. **Integrate** each simpler fraction separately

### Case 1 — Denominator Factorises into Distinct Linear Factors

Each factor $(x - a)$ in the denominator gives a term $\frac{A}{x-a}$ in the decomposition.

**Example**: $\int \frac{1}{(x+2)(x-1)}\, dx$

Write:
$$\frac{1}{(x+2)(x-1)} = \frac{A}{x+2} + \frac{B}{x-1}$$

Multiply both sides by $(x+2)(x-1)$:
$$1 = A(x-1) + B(x+2)$$

Solve for constants by substituting convenient values of $x$:
- Let $x = 1$: $1 = A(0) + B(3) \Rightarrow B = \frac{1}{3}$
- Let $x = -2$: $1 = A(-3) + B(0) \Rightarrow A = -\frac{1}{3}$

So:
$$\int \frac{1}{(x+2)(x-1)}\, dx = \int \frac{-1/3}{x+2}\, dx + \int \frac{1/3}{x-1}\, dx = -\frac{1}{3}\ln|x+2| + \frac{1}{3}\ln|x-1| + C$$

**Why is the numerator just $A$ and not $Ax$?**
- Because each linear factor $(x-a)$ has degree 1, the numerator of the partial fraction must have degree **less than 1** — so it must be a constant $A$, not $Ax$

### Case 2 — Denominator has an Irreducible Quadratic Factor

When the denominator contains a quadratic $x^2 + bx + c$ that **cannot be factored** into real linear factors (i.e., the discriminant $b^2 - 4c < 0$), the numerator of that term must be **linear**: $Ax + B$.

**Example**: $\frac{5x + 1}{(x-1)(x^2+1)}$

Write:
$$\frac{5x+1}{(x-1)(x^2+1)} = \frac{A}{x-1} + \frac{Bx+C}{x^2+1}$$

Multiply both sides by $(x-1)(x^2+1)$:
$$5x + 1 = A(x^2+1) + (Bx+C)(x-1)$$

Solve by substitution:
- Let $x = 1$: $6 = A(2) \Rightarrow A = 3$
- Expand and equate coefficients of $x^2$: $0 = A + B \Rightarrow B = -3$
- Equate constant terms: $1 = A - C \Rightarrow C = 2$

So:
$$\int \frac{5x+1}{(x-1)(x^2+1)}\, dx = \int \frac{3}{x-1}\, dx + \int \frac{-3x+2}{x^2+1}\, dx$$

The second integral splits as:
$$\int \frac{-3x}{x^2+1}\, dx + \int \frac{2}{x^2+1}\, dx = -\frac{3}{2}\ln|x^2+1| + 2\arctan(x) + C$$

### Case 3 — Quadratic Denominator with No Linear Factors (Completing the Square)

Sometimes the denominator is a **single quadratic** with no real roots. In this case:
- First try to write the numerator as a **multiple of the derivative of the denominator** plus a remainder
- For anything left over, use the **arctangent formula**:
  $$\int \frac{1}{x^2 + a^2}\, dx = \frac{1}{a}\arctan\!\left(\frac{x}{a}\right) + C$$
- If the quadratic is not in the form $x^2 + a^2$, use **completing the square** to get it there

**Completing the square** — a technique to rewrite $x^2 + bx + c$ in the form $(x+p)^2 + q$:
$$x^2 + bx + c = \left(x + \frac{b}{2}\right)^2 + \left(c - \frac{b^2}{4}\right)$$

**Example**: $\int \frac{2x + 5}{x^2 + 6x + 13}\, dx$

- Denominator: $x^2 + 6x + 13$ — discriminant $= 36 - 52 = -16 < 0$, so no real factors
- Derivative of denominator: $\frac{d}{dx}[x^2 + 6x + 13] = 2x + 6$
- Manipulate the numerator to involve $2x + 6$:
  $$2x + 5 = (2x + 6) - 1$$
- Split the integral:
  $$\int \frac{2x+5}{x^2+6x+13}\, dx = \int \frac{2x+6}{x^2+6x+13}\, dx - \int \frac{1}{x^2+6x+13}\, dx$$
- First part uses the log rule:
  $$\int \frac{2x+6}{x^2+6x+13}\, dx = \ln|x^2+6x+13| + C_1$$
- Second part: complete the square on $x^2 + 6x + 13$:
  $$x^2 + 6x + 13 = (x+3)^2 + 4$$
- Then use the arctan formula with $a = 2$, substituting $u = x + 3$:
  $$\int \frac{1}{(x+3)^2 + 4}\, dx = \frac{1}{2}\arctan\!\left(\frac{x+3}{2}\right) + C_2$$
- Final answer:
  $$\ln|x^2+6x+13| - \frac{1}{2}\arctan\!\left(\frac{x+3}{2}\right) + C$$

### Case 4 — Repeated Linear Factors (Reference Only)

- If the denominator has a repeated factor like $(x-a)^2$, the decomposition requires **separate terms** for each power:
  $$\frac{p(x)}{(x-a)^2} = \frac{A}{x-a} + \frac{B}{(x-a)^2}$$
- For $(x-a)^3$, add a $\frac{C}{(x-a)^3}$ term, and so on
- This subject does **not** require you to do these by hand — use software like Mathematica for repeated factors

---

## Key Integration Formulas Reference

These are the core formulas you need across all three methods:

**Power rule**
$$\int x^n\, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$$

**Reciprocal / log rule**
$$\int \frac{1}{x}\, dx = \ln|x| + C$$

**Log rule for fractions**
$$\int \frac{f'(x)}{f(x)}\, dx = \ln|f(x)| + C$$

**Exponential**
$$\int e^x\, dx = e^x + C \qquad \int e^{kx}\, dx = \frac{1}{k}e^{kx} + C$$

**Trigonometric**
$$\int \sin x\, dx = -\cos x + C \qquad \int \cos x\, dx = \sin x + C$$

**Arctangent (inverse trig)**
$$\int \frac{1}{x^2 + a^2}\, dx = \frac{1}{a}\arctan\!\left(\frac{x}{a}\right) + C$$

**Arcsin (inverse trig)**
$$\int \frac{1}{\sqrt{a^2 - x^2}}\, dx = \arcsin\!\left(\frac{x}{a}\right) + C$$

**Integration by Parts**
$$\int u\, dv = uv - \int v\, du$$

**Partial Fractions — linear factor**
$$\int \frac{A}{x - a}\, dx = A\ln|x-a| + C$$

---

## Summary — Which Method to Use?

| Situation | Method |
|-----------|--------|
| Integrand is a composite function $f(g(x)) \cdot g'(x)$ | Substitution |
| Integrand is a product of two unrelated functions | Integration by Parts (use LIATE) |
| Integrand is a rational function $\frac{p(x)}{q(x)}$ and numerator is NOT a multiple of the derivative of the denominator | Partial Fractions |
| Rational function where numerator IS a multiple of derivative of denominator | Log rule directly |
| Quadratic denominator with no real roots, no matching numerator | Complete the square + arctan |

---

## Common Mistakes to Avoid

- **Mixing variables after substitution**: after substituting $u$, the integral must contain **only** $u$ — never a mix of $u$ and $x$
- **Forgetting to change limits** in definite integrals when using substitution (or forgetting to convert back before applying limits if you don't change them)
- **Wrong choice of $u$ in LIATE**: always pick the function that appears **earlier** in LIATE as $u$, otherwise the integral gets more complicated, not simpler
- **Forgetting the loop in exp × trig type**: don't stop after the first application — apply by parts twice and then solve algebraically
- **Partial fractions on degree ≥ denominator**: if the numerator degree $\geq$ denominator degree, do long division first
- **Forgetting $+ C$** in indefinite integrals