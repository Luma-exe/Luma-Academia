
> [!faq] About this Lecture 
> Class: 33130
> Subject: #mathematicsOne
> Date: 23/04/2025 
> Topics: #math
## What is a Differential Equation?

- A **differential equation (DE)** is any equation that contains one or more **derivatives** of a function
- They appear whenever we have information about the **rate of change** of some quantity — for example, how fast a car is speeding up, how a temperature changes over time, or how a population grows
- The **solution** to a differential equation is not just a number — it is a **function**
  - Think of it like this: normally you solve for $x = 3$; with DEs, you solve for $y = f(x)$, meaning you find the whole formula

> **Key idea:** Derivatives describe *rates of change*, so whenever a real-world situation involves change over time or space, a differential equation is usually involved.

---

## Preliminary Example — Building Intuition

- **Setup:** A car starts from rest at an intersection
  - Initial acceleration: $10 \text{ m/s}^2$
  - Acceleration decreases **linearly** to $0$ after $8$ seconds
- Acceleration is the derivative of velocity: $a = \frac{dv}{dt}$
- Since $a$ decreases linearly from $10$ to $0$ over $8$ seconds:
  $$a(t) = 10 - \frac{10}{8}t = 10 - \frac{5}{4}t$$
- This gives us the **differential equation**: $\frac{dv}{dt} = 10 - \frac{5}{4}t$
- To find $v(t)$, we **integrate** both sides with respect to $t$:
  $$v(t) = \int \left(10 - \frac{5}{4}t\right) dt = 10t - \frac{5}{8}t^2 + C$$
- This is the **general solution** — it contains the arbitrary constant $C$
- We use the **initial condition** $v(0) = 0$ (car starts from rest) to find $C$:
  $$0 = 10(0) - \frac{5}{8}(0)^2 + C \implies C = 0$$
- So the **particular solution** is: $v(t) = 10t - \frac{5}{8}t^2$

---

## General Solution vs Particular Solution

- The **general solution** of a DE contains **arbitrary constants** (like $C$, $A$, $B$)
  - These constants represent the full family of all possible solutions
  - A first order DE → **1** arbitrary constant
  - A second order DE → **2** arbitrary constants
  - An $n$th order DE → **$n$** arbitrary constants (for the DEs we deal with in this subject)
- The **particular solution** is found when we use extra information (like an initial condition) to find the value of those constants
  - Example: $v(0) = 0$ gave us $C = 0$ above

> **Why does order match the number of constants?**  
> Each time you integrate, you introduce one constant. A 2nd order DE requires integrating twice → two constants.

---

## Initial Value Problems (IVPs)

- An **Initial Value Problem** is a DE combined with one or more **initial conditions**
- The initial condition specifies the value of the function (or its derivative) at some starting point
- **Example IVP from above:**
  - DE: $\frac{dv}{dt} = 10 - \frac{5}{4}t$
  - Initial condition: $v(0) = 0$
- Together, the DE and initial condition uniquely determine a **specific** solution
- General format: solve the DE, get general solution with constants, then substitute initial condition to find constants

---

## Second Order Differential Equations — Verification Example

- **Second order DEs** involve the second derivative $y''$ and may also include $y'$ and $y$
- They arise in the study of **oscillations, vibrations, springs, circuits**, etc.
- Their general solutions usually contain **two** arbitrary constants

**Example:** Verify that $y = A\sin(3x) + B\cos(3x)$ is a solution to $y'' + 9y = 0$

- Step 1 — Find $y'$:
  $$y' = 3A\cos(3x) - 3B\sin(3x)$$
- Step 2 — Find $y''$:
  $$y'' = -9A\sin(3x) - 9B\cos(3x)$$
- Step 3 — Substitute into the DE:
  $$y'' + 9y = \left[-9A\sin(3x) - 9B\cos(3x)\right] + 9\left[A\sin(3x) + B\cos(3x)\right]$$
  $$= -9A\sin(3x) - 9B\cos(3x) + 9A\sin(3x) + 9B\cos(3x) = 0 \checkmark$$
- The function satisfies the DE, so it **is** a solution

> **Note on general solutions:** Not every DE with $n$ arbitrary constants is truly "general." Be aware that occasionally a DE may have solutions that cannot be obtained from the general form by any choice of constants. For most DEs in this course, the $n$-constant form gives all solutions.

---

## Terminology — Independent and Dependent Variables

- In a DE, we distinguish between:
  - **Independent variable** — the input variable (often $x$ or $t$)
  - **Dependent variable** — the output/function we are solving for (often $y$, $v$, $T$, etc.)

| Example DE | Independent variable | Dependent variable |
|---|---|---|
| $\frac{dv}{dt} = 10 - \frac{5}{4}t$ | $t$ | $v$ |
| $y'' + 9y = 0$ | $x$ | $y$ |
| $\frac{dT}{dt} = k(T - T_0)$ | $t$ | $T$ |

- The **general solution** expresses the dependent variable as a function of the independent variable (plus arbitrary constants)

---

## Order of a Differential Equation

> **Definition:** The **order** of a differential equation is the order of the **highest derivative** present in it.

- **First order** — highest derivative is $y'$ or $\frac{dy}{dx}$
  - Examples:
    - $\frac{dy}{dx} = 3x^2$
    - $\frac{dy}{dx} + 2y = e^x$
- **Second order** — highest derivative is $y''$ or $\frac{d^2y}{dx^2}$
  - Examples:
    - $y'' + 9y = 0$
    - $y'' - 5y' + 6y = \sin(x)$
- **Third order** — highest derivative is $y'''$
  - Example: $y''' + y' = x^2$

> **Quick rule:** Look at all the derivatives in the equation, find the biggest "dash count" or highest power in $\frac{d^n y}{dx^n}$ — that number is the order.

---

## Linearity of Differential Equations

### What Does "Linear" Mean?

- In basic geometry, a **linear equation** is a straight line: $y = mx + b$
- In higher mathematics, **"linear"** refers to the *structure* of how variables appear in an equation — **not** the shape of its graph
- A **linear equation** in $n$ variables means each variable appears to the **first power only** — no squares, cubes, products of variables, etc.
  - Linear: $a_1 x_1 + a_2 x_2 + \cdots + a_n x_n = b$
  - Non-linear: $x_1^2 + x_2 = 5$ (because $x_1$ is squared)

### Linear Differential Equations

- A **linear DE** (with independent variable $x$ and dependent variable $y$) looks like:
  $$a_n(x)y^{(n)} + a_{n-1}(x)y^{(n-1)} + \cdots + a_1(x)y' + a_0(x)y = f(x)$$
  - $a_0(x), a_1(x), \ldots, a_n(x)$ are **functions of $x$ only** (called **coefficient functions**) — they can be constants
  - $y$ and all its derivatives appear only to the **first power** — no $y^2$, no $(y')^2$, no $y \cdot y'$, etc.
  - $f(x)$ is a function of $x$ only (the **forcing function** or right-hand side)

### Linear vs Non-Linear — Examples

| Linear ✓ | Non-linear ✗ | Reason non-linear |
|---|---|---|
| $y' + 2y = x$ | $y' + y^2 = x$ | $y$ is squared |
| $y'' - 5y' + 6y = e^x$ | $yy'' = 1$ | $y$ and $y''$ are multiplied together |
| $x^2 y' + xy = \sin x$ | $(y')^2 + y = 0$ | $y'$ is squared |
| $y' = 3x^2$ | $y' = \sqrt{y}$ | $y$ appears under a square root (i.e., to power $\frac{1}{2}$) |

> **Quick check:** Is $y$ (and all its derivatives) raised only to the power 1? And does $y$ never multiply another $y$ or its derivative? If yes to both → linear.

---

## Solving DEs: Separation of Variables

### Reversing the Chain Rule — Key Prerequisite

- Before we can use separation of variables, we need to be comfortable reversing the chain rule
- Recall: $\frac{d}{dx}\left[f(g(x))\right] = f'(g(x)) \cdot g'(x)$
- **Reversing** this means recognising that:
  $$\int f'(g(x)) \cdot g'(x) \, dx = f(g(x)) + C$$
- In particular, a very important result is:
  $$\int \frac{g'(x)}{g(x)} \, dx = \ln|g(x)| + C$$
  - This comes up constantly when solving DEs by separation of variables

### The Method of Separation of Variables

- This method applies to **first order DEs** that can be rearranged so that all $y$ terms (and $dy$) are on one side, and all $x$ terms (and $dx$) are on the other
- **General form:** A DE that can be written as $\frac{dy}{dx} = g(x) \cdot h(y)$
- **Steps:**
  1. Rearrange so that $y$ terms are on one side and $x$ terms are on the other:
     $$\frac{1}{h(y)} \, dy = g(x) \, dx$$
  2. Integrate both sides:
     $$\int \frac{1}{h(y)} \, dy = \int g(x) \, dx$$
  3. Solve for $y$ if possible (this gives the general solution)
  4. Apply initial conditions if given (to find the particular solution)

### Example 1 — Basic Separation

- **DE:** $\frac{dy}{dx} = ky$ where $k$ is a constant
- Separate variables:
  $$\frac{1}{y} \, dy = k \, dx$$
- Integrate both sides:
  $$\int \frac{1}{y} \, dy = \int k \, dx$$
  $$\ln|y| = kx + C_1$$
- Solve for $y$ by exponentiating:
  $$|y| = e^{kx + C_1} = e^{C_1} \cdot e^{kx}$$
- Let $A = \pm e^{C_1}$ (absorb the $\pm$ into $A$, where $A$ is any non-zero constant):
  $$\boxed{y = Ae^{kx}}$$
- This is the general solution — **exponential growth** (if $k > 0$) or **exponential decay** (if $k < 0$)

### Exponential Growth and Decay

- The DE $\frac{dy}{dx} = ky$ models:
  - **Exponential growth** when $k > 0$ — population growth, compound interest
  - **Exponential decay** when $k < 0$ — radioactive decay, drug elimination, cooling
- General solution: $y = Ae^{kx}$
  - $A$ = initial value (when $x = 0$, $y(0) = A$)
  - $k$ = growth/decay constant

> **Important:** Whenever you see a DE of the form "rate of change is proportional to current value," the solution is always an exponential.

---

## Application — Newton's Law of Cooling

### The Law

> **Newton's Law of Cooling:** The rate of change of the temperature of a body is **proportional** to the difference between the temperature of the body and the temperature of the surrounding environment.

- Mathematically:
  $$\frac{dT}{dt} = k(T - T_0)$$
  - $T$ = temperature of the object (dependent variable, function of time)
  - $t$ = time (independent variable)
  - $T_0$ = temperature of the surrounding medium (a constant)
  - $k$ = proportionality constant (negative for cooling, since the object cools toward $T_0$)

### Solving the Cooling DE

- Separate variables:
  $$\frac{dT}{T - T_0} = k \, dt$$
- Integrate both sides:
  $$\ln|T - T_0| = kt + C_1$$
- Exponentiate:
  $$T - T_0 = Ae^{kt}$$
- General solution:
  $$\boxed{T(t) = T_0 + Ae^{kt}}$$
  - $A$ is determined by the initial temperature condition
  - $k$ is determined by a second condition (temperature at a later time)

### Worked Example — Coffee Cooling

- **Given:**
  - Initial temperature of coffee: $T(0) = 90°C$
  - Room temperature: $T_0 = 22°C$
  - After 5 minutes: $T(5) = 80°C$
  - **Find:** When does $T = 60°C$?

- **Step 1 — Write the general solution:**
  $$T(t) = 22 + Ae^{kt}$$

- **Step 2 — Use $T(0) = 90$ to find $A$:**
  $$90 = 22 + Ae^{0} = 22 + A$$
  $$A = 68$$
  $$T(t) = 22 + 68e^{kt}$$

- **Step 3 — Use $T(5) = 80$ to find $k$:**
  $$80 = 22 + 68e^{5k}$$
  $$58 = 68e^{5k}$$
  $$e^{5k} = \frac{58}{68} = \frac{29}{34}$$
  $$5k = \ln\left(\frac{29}{34}\right)$$
  $$k = \frac{1}{5}\ln\left(\frac{29}{34}\right) \approx -0.03196$$

- **Step 4 — Find when $T = 60$:**
  $$60 = 22 + 68e^{kt}$$
  $$38 = 68e^{kt}$$
  $$e^{kt} = \frac{38}{68} = \frac{19}{34}$$
  $$kt = \ln\left(\frac{19}{34}\right)$$
  $$t = \frac{\ln(19/34)}{k} = \frac{\ln(19/34)}{\frac{1}{5}\ln(29/34)} = \frac{5\ln(19/34)}{\ln(29/34)}$$
  $$t \approx \frac{5 \times (-0.5798)}{-0.1589} \approx 18.25 \text{ minutes}$$

- **Answer:** The coffee reaches 60°C after approximately $18.25$ minutes.

---

## Preparation for the Integrating Factor Method — Product Rule Revision

- Before learning the integrating factor method, you need to be very comfortable with the **product rule** for differentiation
- **Product rule:** $\frac{d}{dx}[u(x) \cdot v(x)] = u'(x)v(x) + u(x)v'(x)$
- Key derivatives to recognise (going **backwards** from the product rule):

| Expression | What it equals |
|---|---|
| $\frac{d}{dx}[x^3 \sin x]$ | $3x^2 \sin x + x^3 \cos x$ |
| $\frac{d}{dx}\left[\frac{1}{x} e^x\right]$ | $-\frac{1}{x^2}e^x + \frac{1}{x}e^x$ |
| $5x^7 e^{5x} + 7x^6 e^{5x}$ | Reverse product rule → $\frac{d}{dx}[x^7 e^{5x}]$ |
| $\ln x \cdot \frac{3x^2 + 1}{x^3}$ | Related to $\frac{d}{dx}[x^3 \ln x]$ |
| $x^4 y' + 4x^3 y$ | Recognise this as $\frac{d}{dx}[x^4 y]$ |

> **Key skill:** When you see the LHS of a DE and it looks like the *result* of a product rule, you can immediately write it as the derivative of a product. This is exactly what the integrating factor method exploits.

---

## The Integrating Factor Method

### When to Use It

- For **first order linear DEs** — specifically ones that can be written in **standard form**:
  $$\frac{dy}{dx} + P(x)y = Q(x)$$
  - $P(x)$ and $Q(x)$ are functions of $x$ only (can be constants)
  - This is the **standard form** — you must rearrange your DE into this form first

> **Why can't we just separate variables?** When $P(x) \neq 0$, the DE is not separable in general. The integrating factor method handles this.

### The Idea — Preliminary Example

- Consider the DE: $\frac{dy}{dx} + \frac{1}{x}y = x^2$
- Can we recognise the LHS as the result of a product rule?
  - Notice: $\frac{d}{dx}[xy] = y + x\frac{dy}{dx} = x\frac{dy}{dx} + y$
  - This is close, but not quite matching. The integrating factor method finds the *right* function to multiply by so that the LHS **becomes** a perfect product rule derivative.

### Deriving the Integrating Factor

- We want to solve: $\frac{dy}{dx} + P(x)y = Q(x)$ ... (1)
- We search for a function $I(x)$ (the **integrating factor**) such that when we multiply both sides by $I(x)$:
  $$I(x)\frac{dy}{dx} + I(x)P(x)y = I(x)Q(x)$$ ... (2)
- We want the LHS of (2) to equal $\frac{d}{dx}[I(x) \cdot y]$
- By the product rule:
  $$\frac{d}{dx}[I(x) \cdot y] = I(x)\frac{dy}{dx} + I'(x)y$$
- Comparing this with the LHS of (2):
  $$I(x)P(x) = I'(x)$$
  $$\frac{I'(x)}{I(x)} = P(x)$$
- This is itself a separable DE! Solving:
  $$\int \frac{dI}{I} = \int P(x) \, dx$$
  $$\ln|I| = \int P(x) \, dx$$
  $$\boxed{I(x) = e^{\int P(x) \, dx}}$$
  - We don't need the constant of integration here (it would just cancel out)

### The Full Method — Step by Step

> **Summary (given in the final exam):**

1. **Write the DE in standard form:**
   $$\frac{dy}{dx} + P(x)y = Q(x)$$

2. **Find the integrating factor:**
   $$I = e^{\int P(x) \, dx}$$

3. **Multiply both sides by $I$:**
   $$I\frac{dy}{dx} + IP(x)y = IQ(x)$$
   The LHS is now $\frac{d}{dx}[Iy]$ by design

4. **Rewrite LHS as a derivative of a product:**
   $$\frac{d}{dx}[Iy] = IQ(x)$$

5. **Integrate both sides with respect to $x$:**
   $$Iy = \int IQ(x) \, dx + C$$

6. **Solve for $y$:**
   $$y = \frac{1}{I}\left[\int IQ(x) \, dx + C\right]$$

7. **Apply initial conditions** (if given) to find $C$

### Worked Example 1 — Basic Integrating Factor

- **Solve:** $\frac{dy}{dx} - 2y = e^{3x}$

- **Step 1 — Standard form:** Already in standard form with $P(x) = -2$, $Q(x) = e^{3x}$

- **Step 2 — Find $I$:**
  $$I = e^{\int -2 \, dx} = e^{-2x}$$

- **Step 3 — Multiply both sides by $I = e^{-2x}$:**
  $$e^{-2x}\frac{dy}{dx} - 2e^{-2x}y = e^{-2x} \cdot e^{3x} = e^x$$

- **Step 4 — Recognise LHS:**
  $$\frac{d}{dx}[e^{-2x}y] = e^x$$

- **Step 5 — Integrate both sides:**
  $$e^{-2x}y = \int e^x \, dx = e^x + C$$

- **Step 6 — Solve for $y$:**
  $$y = e^{2x}(e^x + C) = e^{3x} + Ce^{2x}$$

- **General solution:** $\boxed{y = e^{3x} + Ce^{2x}}$

### Worked Example 2 — With Variable Coefficient

- **Solve:** $x\frac{dy}{dx} + y = x^3$ (or equivalently: $xy' + y = x^3$)

- **Step 1 — Rearrange to standard form** (divide through by $x$):
  $$\frac{dy}{dx} + \frac{1}{x}y = x^2$$
  So $P(x) = \frac{1}{x}$, $Q(x) = x^2$

- **Step 2 — Find $I$:**
  $$I = e^{\int \frac{1}{x} \, dx} = e^{\ln|x|} = |x| = x$$
  (We take $I = x$ for $x > 0$)

- **Step 3 — Multiply both sides by $I = x$:**
  $$x\frac{dy}{dx} + y = x^3$$

- **Step 4 — Recognise LHS:**
  $$\frac{d}{dx}[xy] = x^3$$

- **Step 5 — Integrate both sides:**
  $$xy = \int x^3 \, dx = \frac{x^4}{4} + C$$

- **Step 6 — Solve for $y$:**
  $$y = \frac{x^3}{4} + \frac{C}{x}$$

- **General solution:** $\boxed{y = \frac{x^3}{4} + \frac{C}{x}}$

---

## A Note on Integrating $\frac{1}{x}$

- This comes up frequently in the integrating factor method when $P(x) = \frac{1}{x}$
- The integral is:
  $$\int \frac{1}{x} \, dx = \ln|x| + C$$
- When computing $I = e^{\int P(x) \, dx} = e^{\ln|x|} = |x| = x$ (assuming $x > 0$)
- This is why, as shown in Example 2, the integrating factor becomes simply $x$
- **Don't forget the absolute value** inside the log when computing — though for the integrating factor, we typically drop it and just use $x$ assuming $x > 0$ in the domain

---

## Summary — Choosing the Right Method

| Situation | Method |
|---|---|
| DE is of the form $\frac{dy}{dx} = g(x)h(y)$ — $y$-terms and $x$-terms can be separated | **Separation of Variables** |
| DE is first order linear: $\frac{dy}{dx} + P(x)y = Q(x)$ | **Integrating Factor Method** |
| You are given a function and asked to check it is a solution | **Substitute** into the DE and verify |
| You have a general solution and a specific initial condition $y(x_0) = y_0$ | **Substitute** to find the arbitrary constant |

---

## Common Mistakes to Avoid

- **Forgetting the constant of integration $C$** — always include it until you have an initial condition to find it
- **Not rearranging to standard form first** — the integrating factor method only works when the DE is in the form $y' + P(x)y = Q(x)$
- **Treating $y$ like a constant** when integrating with respect to $x$ — $y$ is a function of $x$, not a number
- **Forgetting the absolute value** in $\ln|y|$ — technically it matters, though in practice we often absorb the sign into the constant $A$
- **Confusing order with degree** — order is the highest derivative present; degree is the power that derivative is raised to (we mostly work with degree 1)
- **Thinking linearity relates to the shape of the graph** — a DE can be called "linear" even if its solutions are curved functions; it means $y$ and its derivatives only appear to the first power