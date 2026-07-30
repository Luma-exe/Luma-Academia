
> [!faq] About this Lecture 
> Class: 33130
> Subject: #mathematicsOne
> Date: 07/04/2025 
> Topics: #math

> These notes cover: Primitive Functions, Definite Integrals, Riemann Sums, the Fundamental Theorem of Calculus, Average Value, Root-Mean-Square (RMS), and Numerical Integration (Trapezoidal Rule).

---

## Primitive Functions (Indefinite Integrals) — Recap

- A **primitive function** (also called an **indefinite integral**) answers the question: *"What function, when differentiated, gives me this function?"*
- **Definition:** Let $f$ be a given function. A function $F$ such that $F'(x) = f(x)$ is called a **primitive** of $f$
- In other words, $F$ is a primitive of $f$ if differentiating $F$ gives back $f$

### Key Theorem about Primitives

- **Theorem:** If $F$ and $G$ are both primitives of the same function $f$, then they differ only by a constant:
  - $F(x) = G(x) + C$ for some constant $C$
- This is why every indefinite integral has a $+ C$ at the end — there are infinitely many primitives, all differing by a constant

### Standard Primitive Rules

These are the building blocks — you must know these:

- $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$ (for $n \neq -1$) — *"add one to the power, divide by the new power"*
- $\int \frac{1}{x} \, dx = \ln|x| + C$
- $\int e^x \, dx = e^x + C$
- $\int e^{ax} \, dx = \frac{1}{a} e^{ax} + C$ (where $a$ is a constant)
- $\int \sin(x) \, dx = -\cos(x) + C$
- $\int \cos(x) \, dx = \sin(x) + C$
- $\int \sin(ax) \, dx = -\frac{1}{a}\cos(ax) + C$
- $\int \cos(ax) \, dx = \frac{1}{a}\sin(ax) + C$
- $\int a^x \, dx = \frac{a^x}{\ln a} + C$ (where $a > 0, a \neq 1$)
- $\int k \cdot f(x) \, dx = k \int f(x) \, dx$ — constants factor out
- $\int [f(x) + g(x)] \, dx = \int f(x) \, dx + \int g(x) \, dx$ — split sums

> **Why this matters for later:** Every definite integral we compute relies on finding a primitive first. You cannot do the Fundamental Theorem of Calculus without this skill.

---

## Riemann Sums — Approximating Area with Rectangles

- The idea: approximate the area under a curve by dividing it into thin vertical rectangles, adding them all up, then taking the limit as the rectangles get infinitely thin
- This is named after **Georg Riemann (1826–1866)**

### Useful Series Formulas (needed for Riemann Sum calculations)

When computing Riemann sums for polynomial functions by hand, you need these power sum formulas:

- $\sum_{i=1}^{n} 1 = n$
- $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$
- $\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$
- $\sum_{i=1}^{n} i^3 = \left(\frac{n(n+1)}{2}\right)^2$

> **Why these matter:** When we write out a Riemann sum for, say, $f(x) = x^2$, we end up with a sum of squares $\sum i^2$. These formulas let us collapse that into a closed-form expression, then take the limit as $n \to \infty$.

### How a Riemann Sum Works — Step by Step

**Example: Find the area between $f(x) = x^2$, the $x$-axis, and the lines $x = 0$, $x = 5$, using the limiting value of a sum.**

1. **Partition the interval $[0, 5]$ into $n$ equal sub-intervals**
   - Width of each sub-interval: $\Delta x = \frac{5 - 0}{n} = \frac{5}{n}$
2. **Choose a sample point in each sub-interval**
   - Using right endpoints: $x_i = i \cdot \Delta x = \frac{5i}{n}$ for $i = 1, 2, \ldots, n$
3. **Write the Riemann Sum**
   - Area $\approx \sum_{i=1}^{n} f(x_i) \cdot \Delta x = \sum_{i=1}^{n} \left(\frac{5i}{n}\right)^2 \cdot \frac{5}{n}$
   - $= \sum_{i=1}^{n} \frac{25i^2}{n^2} \cdot \frac{5}{n} = \frac{125}{n^3} \sum_{i=1}^{n} i^2$
4. **Apply the series formula**
   - $= \frac{125}{n^3} \cdot \frac{n(n+1)(2n+1)}{6}$
5. **Take the limit as $n \to \infty$**
   - $\lim_{n \to \infty} \frac{125}{n^3} \cdot \frac{n(n+1)(2n+1)}{6} = \frac{125}{6} \lim_{n \to \infty} \frac{n(n+1)(2n+1)}{n^3}$
   - Expand: $\frac{n(n+1)(2n+1)}{n^3} = \frac{2n^3 + 3n^2 + n}{n^3} = 2 + \frac{3}{n} + \frac{1}{n^2}$
   - As $n \to \infty$: the $\frac{3}{n}$ and $\frac{1}{n^2}$ terms vanish, leaving $2$
   - Result: $\frac{125}{6} \cdot 2 = \frac{125}{3} \approx 41.67$

> **Takeaway:** Riemann sums confirm what the definite integral gives us — they are the *definition* of the definite integral. The integral is the limit of this summing process.

---

## What is a Definite Integral?

### Formal Definition

- **Definition:** Partition the interval $[a, b]$ into $n$ sub-intervals. Let $x_i$ be a point chosen in the $i$th sub-interval, and let $\Delta x_i$ be the width of that sub-interval. The **definite integral** of $f(x)$ on $[a, b]$ is:

$$\int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i) \, \Delta x_i$$

- This limit must exist for the integral to be defined
- For equal sub-intervals of width $\Delta x = \frac{b-a}{n}$, this becomes:

$$\int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i) \cdot \frac{b-a}{n}$$

### Notation Explained

- $\int_a^b$ — the elongated S stands for "Sum"; $a$ is the **lower limit**, $b$ is the **upper limit**
- $f(x)$ — the function being integrated (the **integrand**)
- $dx$ — indicates we are integrating with respect to $x$; it corresponds to the infinitesimally thin $\Delta x$

### Can a Definite Integral Be Negative?

- **Yes!** If $f(x) < 0$ throughout $[a, b]$, then each $f(x_i) \cdot \Delta x$ is negative, and the sum (and its limit) is negative
- The definite integral measures **signed area** — area above the $x$-axis is positive, area below is negative
- If a curve dips below the $x$-axis, be careful: the integral may not equal the geometric area

---

## Properties of the Definite Integral

These follow directly from the definition and are used constantly in calculations:

### Property 1 — Reversing the Limits Changes the Sign

$$\int_a^b f(x) \, dx = -\int_b^a f(x) \, dx$$

- **Why:** Reversing the limits swaps the direction of summation, which negates the result

### Property 2 — Integral of a Constant Multiple

$$\int_a^b k \cdot f(x) \, dx = k \int_a^b f(x) \, dx$$

- Constants factor out of integrals, just as they do with derivatives

### Property 3 — Splitting the Interval (Additivity)

$$\int_a^c f(x) \, dx = \int_a^b f(x) \, dx + \int_b^c f(x) \, dx$$

- **Where:** $a \leq b \leq c$ (though the result holds even if $b$ is outside $[a, c]$)
- **Why:** You are simply adding areas. The area from $a$ to $c$ equals the area from $a$ to $b$ plus the area from $b$ to $c$
- **Proof sketch (for $f(x) \geq 0$):** We are literally adding two non-overlapping areas together. The Riemann sums on each sub-interval combine to give the full sum over $[a, c]$
- **Use case:** If you know $\int_0^5 f(x) \, dx$ and $\int_0^3 f(x) \, dx$, you can find $\int_3^5 f(x) \, dx = \int_0^5 f(x) \, dx - \int_0^3 f(x) \, dx$

### Property 4 — Same Limits Give Zero

$$\int_a^a f(x) \, dx = 0$$

- There is no interval to integrate over — the width is zero

### Property 5 — Sum of Functions

$$\int_a^b [f(x) + g(x)] \, dx = \int_a^b f(x) \, dx + \int_a^b g(x) \, dx$$

- You can split integrals across sums, just like with derivatives

---

## The "Area So Far" Function

- Before connecting definite integrals to primitives, we introduce a new type of function
- **Definition:** For a function $f$ that is continuous on $[a, b]$, define the **"area so far" function** $A(x)$ as:

$$A(x) = \int_a^x f(t) \, dt \quad \text{for } a \leq x \leq b$$

- Here, $t$ is just a dummy variable — it gets integrated out; $x$ is the upper limit and is the actual variable
- $A(x)$ accumulates the signed area under $f$ from $a$ up to the point $x$
- **Note:** $A(a) = \int_a^a f(t) \, dt = 0$ — the area starts at zero when $x = a$
- As $x$ increases, $A(x)$ accumulates more area

> **Intuition:** Think of $A(x)$ as an odometer — as you move $x$ to the right, it records how much area you have swept out so far.

---

## The Fundamental Theorem of Calculus

This is the **most important result in all of calculus** — it connects the two seemingly unrelated concepts of differentiation and integration.

### Part 1 — Differentiating the Area Function

- **Theorem (First Part):** If $f$ is continuous on $[a, b]$ and $A(x) = \int_a^x f(t) \, dt$, then:

$$A'(x) = f(x)$$

- **In plain English:** The derivative of the area-so-far function equals the original function
- **What this means:** $A(x)$ is a **primitive of $f(x)$**
- **Why it makes sense:** If you increase $x$ by a tiny bit $\Delta x$, the extra area swept out is approximately $f(x) \cdot \Delta x$ (a thin rectangle of height $f(x)$ and width $\Delta x$). So the rate of change of area with respect to $x$ is exactly $f(x)$

### Part 2 — Evaluating Definite Integrals with Primitives

- **Setting up:** Since $A(x) = \int_a^x f(t) \, dt$ is a primitive of $f$, and since any primitive of $f$ can be written as $F(x) + C$, we have:

$$A(x) = F(x) + C$$

- **Finding $C$:** We know $A(a) = 0$, so:
  - $0 = F(a) + C$
  - $C = -F(a)$
- **Therefore:** $A(x) = F(x) - F(a)$
- **Setting $x = b$:**

$$\int_a^b f(x) \, dx = A(b) = F(b) - F(a)$$

- **Convenient Notation:**

$$\int_a^b f(x) \, dx = \Big[F(x)\Big]_a^b = F(b) - F(a)$$

- The square bracket notation $\Big[F(x)\Big]_a^b$ means: evaluate $F$ at the top limit, subtract $F$ at the bottom limit

> **Why this is revolutionary:** Before this theorem, computing areas meant doing painful Riemann sum limits every time. Now we just: (1) find any primitive $F(x)$, (2) subtract $F(a)$ from $F(b)$. Done.

### Step-by-Step Method for Definite Integrals

1. Find a primitive $F(x)$ of the integrand $f(x)$ (drop the $+C$ — it cancels out)
2. Write $\Big[F(x)\Big]_a^b$
3. Calculate $F(b) - F(a)$

### Example — Evaluating a Definite Integral

**Find the exact value of $\int_1^4 x^2 \, dx$**

1. Primitive of $x^2$ is $F(x) = \frac{x^3}{3}$
2. Apply the theorem:
   - $\int_1^4 x^2 \, dx = \left[\frac{x^3}{3}\right]_1^4 = \frac{4^3}{3} - \frac{1^3}{3} = \frac{64}{3} - \frac{1}{3} = \frac{63}{3} = 21$

**Find the exact value of $\int_0^{\pi} \sin(x) \, dx$**

1. Primitive of $\sin(x)$ is $F(x) = -\cos(x)$
2. Apply:
   - $\int_0^{\pi} \sin(x) \, dx = \Big[-\cos(x)\Big]_0^{\pi} = -\cos(\pi) - (-\cos(0)) = -(-1) + 1 = 1 + 1 = 2$

**Find the exact value of $\int_0^1 e^{2x} \, dx$**

1. Primitive of $e^{2x}$ is $F(x) = \frac{1}{2}e^{2x}$
2. Apply:
   - $\int_0^1 e^{2x} \, dx = \left[\frac{1}{2}e^{2x}\right]_0^1 = \frac{1}{2}e^2 - \frac{1}{2}e^0 = \frac{e^2 - 1}{2}$

> **Note:** The $+C$ from the primitive always cancels: $(F(b) + C) - (F(a) + C) = F(b) - F(a)$. So you can safely ignore it when computing definite integrals.

---

## Average Value of a Function

### What is the Average Value?

- For a discrete set of numbers $\{y_1, y_2, \ldots, y_n\}$, the average is $\frac{y_1 + y_2 + \cdots + y_n}{n}$
- For a continuous function $f(x)$ over an interval $[a, b]$, we extend this idea using the integral

### Formula

$$\bar{f} = \frac{1}{b - a} \int_a^b f(x) \, dx$$

- $\bar{f}$ is the **average value** of $f$ over $[a, b]$
- $(b - a)$ is the length of the interval
- **This formula will be given in the exam if required**

### Geometric Interpretation

- $\bar{f}$ is the height of a **rectangle** built on the interval $[a, b]$ that has the **same area** as the area under the curve
- In other words: $\bar{f} \cdot (b - a) = \int_a^b f(x) \, dx$
- The average value is the "equivalent flat height" — if you flattened the curve into a horizontal line, $\bar{f}$ is where that line would sit

### Example

**Find the average value of $f(x) = x^2$ over $[0, 3]$**

$$\bar{f} = \frac{1}{3 - 0} \int_0^3 x^2 \, dx = \frac{1}{3} \left[\frac{x^3}{3}\right]_0^3 = \frac{1}{3} \cdot \frac{27}{3} = \frac{1}{3} \cdot 9 = 3$$

- So the average value of $x^2$ from 0 to 3 is 3
- Check: a rectangle of height 3 on $[0, 3]$ has area $3 \times 3 = 9$; and $\int_0^3 x^2 \, dx = 9$. ✓

---

## Root-Mean-Square (RMS) Value of a Function

### What is RMS?

- RMS is especially important in engineering, particularly for alternating current (AC) electricity
- An AC current oscillates — sometimes positive, sometimes negative. Its plain average over a full cycle is zero, which is useless
- RMS gives a meaningful measure of the "effective" or "equivalent" magnitude
- **The RMS value of an AC current** is the equivalent DC current that would produce the same heating effect in a resistor

### Formula

$$f_{\text{RMS}} = \sqrt{\frac{1}{b - a} \int_a^b [f(x)]^2 \, dx}$$

- **Steps:** Square the function → integrate → divide by the interval length → take the square root
- **Memory trick:** "Root of the Mean of the Square" — work backwards: square, mean (average), root
- **This formula will be given in the exam if required**

### Useful Identity for RMS of Sine/Cosine

**Double angle identity (needed to integrate $\sin^2$ or $\cos^2$):**

$$\cos(2A) = 1 - 2\sin^2(A)$$

Rearranging:

$$\sin^2(A) = \frac{1 - \cos(2A)}{2}$$

Similarly:

$$\cos^2(A) = \frac{1 + \cos(2A)}{2}$$

> **Why this matters:** You cannot directly integrate $\sin^2(x)$ or $\cos^2(x)$ using the standard rules — you must use these identities to rewrite them first. This is the key step in RMS calculations involving sinusoidal functions.

### Example — RMS of a Sinusoidal Current

**(i) First, verify the identity: put $B = A$ in $\cos(A - B) = \cos A \cos B + \sin A \sin B$ to show $\cos(2A) = 1 - 2\sin^2(A)$**

- Putting $B = A$: $\cos(A - A) = \cos A \cos A + \sin A \sin A$
- $\cos(0) = \cos^2(A) + \sin^2(A)$
- $1 = \cos^2(A) + \sin^2(A)$ ← just the Pythagorean identity

Alternatively, use $\cos(A + B) = \cos A \cos B - \sin A \sin B$ with $B = A$:
- $\cos(2A) = \cos^2(A) - \sin^2(A)$
- $= (1 - \sin^2(A)) - \sin^2(A) = 1 - 2\sin^2(A)$ ✓

**(ii) Find the RMS of $f(x) = I_0 \sin(\omega x)$ over the interval $[0, \frac{\pi}{\omega}]$**

(where $I_0$ is the peak current and $\omega$ is the angular frequency)

**Step 1:** Square the function

$$[f(x)]^2 = I_0^2 \sin^2(\omega x)$$

**Step 2:** Use the identity $\sin^2(\omega x) = \frac{1 - \cos(2\omega x)}{2}$

**Step 3:** Set up the integral ($b - a = \frac{\pi}{\omega} - 0 = \frac{\pi}{\omega}$)

$$f_{\text{RMS}}^2 = \frac{1}{\pi/\omega} \int_0^{\pi/\omega} I_0^2 \cdot \frac{1 - \cos(2\omega x)}{2} \, dx$$

$$= \frac{\omega}{\pi} \cdot \frac{I_0^2}{2} \int_0^{\pi/\omega} \left(1 - \cos(2\omega x)\right) dx$$

**Step 4:** Integrate

$$\int_0^{\pi/\omega} 1 \, dx = \frac{\pi}{\omega}$$

$$\int_0^{\pi/\omega} \cos(2\omega x) \, dx = \left[\frac{\sin(2\omega x)}{2\omega}\right]_0^{\pi/\omega} = \frac{\sin(2\pi)}{2\omega} - \frac{\sin(0)}{2\omega} = 0$$

**Step 5:** Combine

$$f_{\text{RMS}}^2 = \frac{\omega}{\pi} \cdot \frac{I_0^2}{2} \cdot \frac{\pi}{\omega} = \frac{I_0^2}{2}$$

**Step 6:** Take the square root

$$f_{\text{RMS}} = \frac{I_0}{\sqrt{2}} = \frac{I_0 \sqrt{2}}{2} \approx 0.707 \, I_0$$

> **Key result:** The RMS of a sine wave is $\frac{1}{\sqrt{2}} \approx 70.7\%$ of its peak value. This is why household electricity rated at "240V" is actually a sine wave with a peak of $240\sqrt{2} \approx 339$V — the 240V is the RMS value.

---

## Numerical Integration — The Trapezoidal Rule

### Why Numerical Integration?

- Sometimes we cannot find a primitive analytically (e.g., $\int e^{-x^2} dx$ has no closed-form primitive)
- Sometimes we have data points (measurements) rather than a formula
- In these cases, we use **numerical methods** to approximate the definite integral

### The Trapezoidal Rule — Core Idea

- Instead of approximating the area with rectangles (like Riemann sums), use **trapezoids**
- A trapezoid has two parallel sides — fitting one along the $x$-axis and one connecting two points on the curve gives a much better approximation than a rectangle

### Formula — Trapezoidal Rule

Divide the interval $[a, b]$ into $n$ equal sub-intervals of width $h = \frac{b-a}{n}$.

Let the $x$-values be: $x_0 = a,\ x_1 = a+h,\ x_2 = a+2h,\ \ldots,\ x_n = b$

Let $y_i = f(x_i)$ be the corresponding function values.

Then:

$$\int_a^b f(x) \, dx \approx \frac{h}{2} \left[ y_0 + 2y_1 + 2y_2 + \cdots + 2y_{n-1} + y_n \right]$$

Or more compactly:

$$\int_a^b f(x) \, dx \approx \frac{h}{2} \left[ y_0 + y_n + 2\sum_{i=1}^{n-1} y_i \right]$$

- **Pattern:** The first and last values have coefficient 1; all middle values have coefficient 2; the whole thing is multiplied by $\frac{h}{2}$
- **Memory trick:** "endpoints once, midpoints twice, multiply by $\frac{h}{2}$"

### Area of a Single Trapezoid

Each individual trapezoid has:
- Two parallel sides of height $y_i$ and $y_{i+1}$
- A width of $h$
- Area $= \frac{h}{2}(y_i + y_{i+1})$

Summing all $n$ trapezoids collapses to the formula above (since each interior $y_i$ appears in two adjacent trapezoids).

### Example — Trapezoidal Rule with 4 Sub-intervals

**Estimate $\int_1^5 \frac{1}{x} \, dx$ using the Trapezoidal Rule with $n = 4$ sub-intervals. Compare with the exact value.**

**Step 1:** Find $h$

$$h = \frac{5 - 1}{4} = 1$$

**Step 2:** Set up the $x$ and $y$ values

| $i$ | $x_i$ | $y_i = \frac{1}{x_i}$ |
|-----|--------|----------------------|
| 0   | 1      | 1.0000               |
| 1   | 2      | 0.5000               |
| 2   | 3      | 0.3333               |
| 3   | 4      | 0.2500               |
| 4   | 5      | 0.2000               |

**Step 3:** Apply the formula

$$\int_1^5 \frac{1}{x} \, dx \approx \frac{1}{2} \left[1.0000 + 2(0.5000) + 2(0.3333) + 2(0.2500) + 0.2000\right]$$

$$= \frac{1}{2} \left[1.0000 + 1.0000 + 0.6667 + 0.5000 + 0.2000\right]$$

$$= \frac{1}{2} \times 3.3667 = 1.6833$$

**Step 4:** Compare with exact value

$$\int_1^5 \frac{1}{x} \, dx = \Big[\ln x\Big]_1^5 = \ln 5 - \ln 1 = \ln 5 - 0 = \ln 5 \approx 1.6094$$

**Error:** $1.6833 - 1.6094 = 0.0739$ (about 4.6% error with just 4 sub-intervals)

> **Note:** The Trapezoidal Rule always **overestimates** when the function is concave up (curves upward), and **underestimates** when the function is concave down. More sub-intervals = better approximation.

### When to Use Numerical Integration

- The integrand has no elementary primitive (e.g., $\int \sin(x^2) dx$, $\int e^{-x^2} dx$)
- You have a table of data values rather than a formula (e.g., measured current values at different times)
- A quick numerical estimate is needed before doing an exact calculation

---

## Summary of Key Formulas

| Concept | Formula |
|---|---|
| Primitive (indefinite integral) | $F'(x) = f(x) \Rightarrow \int f(x)\,dx = F(x) + C$ |
| Power rule | $\int x^n\,dx = \frac{x^{n+1}}{n+1} + C,\quad n \neq -1$ |
| Riemann sum definition | $\int_a^b f(x)\,dx = \lim_{n\to\infty} \sum_{i=1}^{n} f(x_i)\,\Delta x$ |
| Fundamental Theorem (Part 2) | $\int_a^b f(x)\,dx = F(b) - F(a)$ |
| Interval additivity | $\int_a^c f = \int_a^b f + \int_b^c f$ |
| Average value | $\bar{f} = \frac{1}{b-a}\int_a^b f(x)\,dx$ |
| RMS value | $f_{\text{RMS}} = \sqrt{\frac{1}{b-a}\int_a^b [f(x)]^2\,dx}$ |
| $\sin^2$ identity | $\sin^2(A) = \frac{1-\cos(2A)}{2}$ |
| $\cos^2$ identity | $\cos^2(A) = \frac{1+\cos(2A)}{2}$ |
| Trapezoidal Rule | $\int_a^b f\,dx \approx \frac{h}{2}\left[y_0 + y_n + 2\sum_{i=1}^{n-1}y_i\right]$, $h=\frac{b-a}{n}$ |
| Sum of squares | $\sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}$ |
| Sum of integers | $\sum_{i=1}^n i = \frac{n(n+1)}{2}$ |

---

## Connections Between Topics

- **Riemann Sums → Definite Integral:** The definite integral is defined as the limit of Riemann sums. This is why understanding sums of powers is essential before Riemann sums.
- **Fundamental Theorem links everything:** Part 1 says differentiating the area function gives back $f$. Part 2 says you can compute the area using any primitive — you don't need to do the limit every time.
- **Average Value uses the definite integral:** You must be able to evaluate definite integrals (using FTC Part 2) before computing average values.
- **RMS uses the average value idea:** RMS is the square root of the average value of $f^2$. It requires both integration skill and the $\sin^2$/$\cos^2$ double-angle identities.
- **Trapezoidal Rule is the fallback:** When analytical integration is impossible or data is tabular, use the Trapezoidal Rule as the numerical approximation method.