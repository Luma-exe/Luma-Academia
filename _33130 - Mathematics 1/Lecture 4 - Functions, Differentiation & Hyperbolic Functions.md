
> [!faq] About this Lecture 
> Class: 33130
> Subject: #mathematicsOne
> Date: 12/03/2025 
> Topics: #math

## What is Mathematical Modelling?

- Mathematical modelling is the process of creating a **mathematical representation** of real-world situations — these could be natural systems, manufactured systems, or problems to be solved
- A mathematical model typically includes some or all of the following:
  - A diagram or description of the situation/system/problem
  - A list of quantities to be measured or estimated
  - Formulas and/or diagrams showing how quantities relate to each other
  - **Assumptions** about the system (e.g. are the formulas from empirical measurement or physical laws?)
  - **Predictions** about system behaviour
  - Some form of **testing or validation** of the model
  - Descriptions of the model's **limitations**
- The purpose is to gain **understanding** of a system or problem, and to find solutions or optimise outputs under certain conditions
- The models we use often depend on **calculus** — this is where we begin

---

## Review of Differential Calculus

> This section is **assumed knowledge** from your prior studies. It is reviewed here because it forms the foundation for everything in this course. If any of these topics are unfamiliar, review **Chapters 1–4 of the Stewart textbook**.

### Differentiation from First Principles

- "Differentiation from first principles" means finding the derivative **using the definition of a limit**, not the shortcut rules
- The derivative of a function $f(x)$ is defined as:

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

- This tells us: **how does $f(x)$ change** as we make a tiny (infinitesimally small) change $h$ to the input $x$?
- Alternative forms of the same definition:

$$f'(x) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}$$

$$f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}$$

- All three versions say the same thing — the derivative is the **limiting value of the slope** of a secant line as the two points get closer together

---

### Continuity and Differentiability

- A **continuous function** has a graph with **no breaks or jumps** — you can draw it without lifting your pen
- A function is **differentiable** at a point if its derivative **exists** at that point
- A function will **NOT** be differentiable at a point where there is:
  - A **break** in the graph (discontinuity)
  - A **sharp corner** (e.g. the function $|x|$ at $x = 0$)
- **Important relationship:**
  - All differentiable functions are **continuous**
  - But **NOT** all continuous functions are differentiable
  - (Continuity does not guarantee differentiability)

---

### Differentiation Rules

> These rules are derived from first principles and are used constantly. You must know them all.

**Power Rule**
- If $f(x) = x^n$ (where $n$ is a number), then:

$$f'(x) = n x^{n-1}$$

- Example: If $f(x) = x^5$, then $f'(x) = 5x^4$
- Example: If $f(x) = x^{-2}$, then $f'(x) = -2x^{-3}$
- ⚠️ **Important:** This rule is for $x^n$ where $n$ is a **constant number**. We need a completely different approach for cases like $n^x$ (a number to the power of $x$)

**Sum/Difference and Constant Multiple Rule**
- If $h(x) = A \cdot f(x) + B \cdot g(x)$ where $A$ and $B$ are constants, then:

$$h'(x) = A \cdot f'(x) + B \cdot g'(x)$$

- In plain terms: you can differentiate **term by term**, and constants just "come along for the ride"
- Example: If $h(x) = 3x^4 - 5x^2 + 7$, then $h'(x) = 12x^3 - 10x$

---

### Product Rule

- Used when you have **two functions multiplied together**
- If $y = u(x) \cdot v(x)$, then:

$$\frac{dy}{dx} = u \frac{dv}{dx} + v \frac{du}{dx}$$

- In plain words: **(first times derivative of second) + (second times derivative of first)**
- Example: If $y = x^2 \sin x$, then:
  - $u = x^2$, so $\frac{du}{dx} = 2x$
  - $v = \sin x$, so $\frac{dv}{dx} = \cos x$
  - Therefore: $\frac{dy}{dx} = x^2 \cos x + 2x \sin x$

---

### Quotient Rule

- Used when you have **one function divided by another**
- If $y = \frac{u(x)}{v(x)}$, then:

$$\frac{dy}{dx} = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$$

- Memory trick: **(bottom times derivative of top) minus (top times derivative of bottom), all over bottom squared**
- Example: If $y = \frac{x^2}{\sin x}$, then:
  - $u = x^2$, $\frac{du}{dx} = 2x$
  - $v = \sin x$, $\frac{dv}{dx} = \cos x$
  - Therefore: $\frac{dy}{dx} = \frac{\sin x \cdot 2x - x^2 \cos x}{\sin^2 x}$

---

### Chain Rule

- Used when you have a **function inside another function** — a "composite function"
- If $y$ is a function of $u$, and $u$ is a function of $x$, then:

$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

- In plain words: **differentiate the outside function (leaving the inside alone), then multiply by the derivative of the inside**
- Example 1: If $y = (x^2 + 3)^5$:
  - Let $u = x^2 + 3$, so $y = u^5$
  - $\frac{dy}{du} = 5u^4$, and $\frac{du}{dx} = 2x$
  - Therefore: $\frac{dy}{dx} = 5(x^2 + 3)^4 \cdot 2x = 10x(x^2+3)^4$
- Example 2: If $y = \sin(x^3)$:
  - Let $u = x^3$, so $y = \sin u$
  - $\frac{dy}{du} = \cos u$, and $\frac{du}{dx} = 3x^2$
  - Therefore: $\frac{dy}{dx} = \cos(x^3) \cdot 3x^2 = 3x^2 \cos(x^3)$

---

### Higher Derivatives

- You can differentiate a function **more than once**
- The **second derivative** is the derivative of the derivative:

$$f''(x) = \frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right)$$

- The **third derivative** is $f'''(x)$ or $\frac{d^3y}{dx^3}$, and so on
- **Geometric meaning of the second derivative:**
  - When $f''(x) > 0$: the curve is **concave up** (like a bowl shape $\cup$)
  - When $f''(x) < 0$: the curve is **concave down** (like an upside-down bowl $\cap$)
  - At a **point of inflection**: $f''(x)$ changes sign (the concavity switches)

---

### Applications to Curve Sketching

- To fully sketch a curve $y = f(x)$, consider the following:

**Odd and Even Functions**
- A function is **odd** if $f(-x) = -f(x)$ for all $x$
  - Odd functions have **rotational symmetry** about the origin (180° rotation)
  - Examples: $f(x) = \sin x$, $g(x) = x^3$
- A function is **even** if $f(-x) = f(x)$ for all $x$
  - Even functions have **reflection symmetry** about the $y$-axis
  - Examples: $f(x) = \cos x$, $g(x) = x^2$

**Key Features to Find:**
- **$x$-intercepts:** Set $y = 0$ and solve
- **$y$-intercept:** Set $x = 0$ and evaluate $f(0)$
- **Vertical asymptotes:** Where the function approaches $\pm\infty$ (usually where denominator = 0)
- **Horizontal asymptotes:** The value $y$ approaches as $x \to \pm\infty$
- **Turning points:** Where $f'(x) = 0$ — could be a **maximum** or **minimum**
- **Maxima and minima:** Use the second derivative test:
  - If $f'(c) = 0$ and $f''(c) > 0$: **local minimum**
  - If $f'(c) = 0$ and $f''(c) < 0$: **local maximum**

---

### Implicit Differentiation

- Usually, $y$ is written **explicitly** as a function of $x$:
  - e.g. $y = \sin x$, or $y = x^2 + \frac{7}{x}$
- Sometimes, $y$ is **implicitly** related to $x$ — you **cannot** rearrange it to make $y$ the subject:
  - e.g. $8y - \cos x = yx^5 + \sin(xy)$
- In these cases, we use **implicit differentiation**:
  - Differentiate **both sides** with respect to $x$
  - Whenever you differentiate a term involving $y$, apply the chain rule and multiply by $\frac{dy}{dx}$
  - Then **solve** for $\frac{dy}{dx}$

**Example:** Find $\frac{dy}{dx}$ if $x^2 + y^2 = 16$ (equation of a circle with radius 4)

- Differentiate both sides with respect to $x$:
$$2x + 2y \frac{dy}{dx} = 0$$
- Solve for $\frac{dy}{dx}$:
$$\frac{dy}{dx} = -\frac{x}{y}$$

- **Geometric interpretation:**
  - At point $A(4, 0)$: $\frac{dy}{dx} = -\frac{4}{0}$ → **undefined** (vertical tangent)
  - At point $B(0, 4)$: $\frac{dy}{dx} = -\frac{0}{4} = 0$ → **horizontal tangent**
  - At point $C(2\sqrt{2},\ 2\sqrt{2})$: $\frac{dy}{dx} = -\frac{2\sqrt{2}}{2\sqrt{2}} = -1$ → tangent has slope $-1$

---

### Related Rates

- **Related rates** problems use implicit differentiation to relate the **rates of change** of two quantities with respect to time
- If two quantities are related by an equation, you can differentiate that equation with respect to **time $t$** to get a relationship between their rates of change

**Example:** A spherical balloon is inflating. When the radius is $r = 10$ cm and increasing at $\frac{dr}{dt} = 1$ cm/s, at what rate is the **volume** increasing?

- Volume of a sphere: $V = \frac{4}{3}\pi r^3$
- Differentiate both sides with respect to $t$:
$$\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$$
- Substitute $r = 10$ and $\frac{dr}{dt} = 1$:
$$\frac{dV}{dt} = 4\pi (10)^2 (1) = 400\pi \approx 1257 \text{ cm}^3/\text{s}$$

---

### Errors, Small Approximations, and Differentials

- When $x$ changes by a small amount $\Delta x$, the corresponding change in $y = f(x)$ is approximately:

$$\Delta y \approx dy = f'(x)\, dx$$

- Here, $dx = \Delta x$ (the change in $x$) and $dy$ is the **differential** of $y$
- This comes from the fact that for small $\Delta x$:

$$\frac{\Delta y}{\Delta x} \approx f'(x) \implies \Delta y \approx f'(x)\,\Delta x$$

- **Relative change:** $\frac{\Delta y}{y}$
- **Percentage change:** $100 \cdot \frac{\Delta y}{y}$

**Example:** A cube has side length $x = 10$ cm, and the side increases to $10.01$ cm. Find the increase in volume.

- Volume: $V = x^3$, so $\frac{dV}{dx} = 3x^2$
- $\Delta x = 0.01$
- $\Delta V \approx 3x^2 \cdot \Delta x = 3(10)^2(0.01) = 3\ \text{cm}^3$

---

## Numerical Methods for Solving Equations — Newton's Method

> Sometimes an equation **cannot be solved algebraically**. Newton's method gives us a numerical approximation to the solution.

**Setup:**
- We want to solve $f(x) = 0$ — i.e., find where the graph crosses the $x$-axis
- Call the true solution $x^*$ (the root we are looking for)

**How it works (geometric idea):**
- Start with a **guess** $x_0$ close to the root
- Draw the **tangent line** to $y = f(x)$ at the point $(x_0,\ f(x_0))$
- This tangent line crosses the $x$-axis at a new point $x_1$ — which is (usually) **closer** to the root
- Repeat the process with $x_1$ to get $x_2$, and so on

**Deriving the formula:**
- The tangent at $(x_0, f(x_0))$ has slope $f'(x_0)$
- Equation of the tangent line: $y - f(x_0) = f'(x_0)(x - x_0)$
- Set $y = 0$ and solve for $x$ (this is where the tangent crosses the $x$-axis):

$$0 - f(x_0) = f'(x_0)(x_1 - x_0)$$
$$x_1 = x_0 - \frac{f(x_0)}{f'(x_0)}$$

**Newton's Method Formula (General Iteration):**

$$\boxed{x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}}$$

- Each step gives a **better approximation** of the root (assuming things go well)
- The process is **iterative** — repeat until the answer is accurate enough

**Important notes:**
- The equation must first be rearranged into the form $f(x) = 0$
- The method will **fail** if $f'(x_n) = 0$ (the tangent is horizontal — it never crosses the $x$-axis)
- There may be **more than one root** — start your guess near the root you want
- Use **radians** if trig functions are involved
- In *Mathematica*, this is automated with `FindRoot`

**Worked Example:** Find the angle $\theta$ at the centre of a circle of radius 10 cm for which the area of the **segment** is 4 cm².

- **Recall:** A segment is the region between a chord and the arc. A sector is the "pie slice" shape.
- Area of a segment: $A_{segment} = A_{sector} - A_{triangle} = \frac{1}{2}r^2\theta - \frac{1}{2}r^2\sin\theta$
- With $r = 10$ and $A = 4$:

$$\frac{1}{2}(100)\theta - \frac{1}{2}(100)\sin\theta = 4$$
$$50\theta - 50\sin\theta = 4$$

- Rearranging to $f(\theta) = 0$:

$$f(\theta) = 50\theta - 50\sin\theta - 4 = 0$$

- Then $f'(\theta) = 50 - 50\cos\theta$

- Apply Newton's method with starting guess $\theta_0 = 0.4$ (radians):

$$\theta_1 = \theta_0 - \frac{f(\theta_0)}{f'(\theta_0)} = 0.4 - \frac{50(0.4) - 50\sin(0.4) - 4}{50 - 50\cos(0.4)}$$

- Compute and repeat twice to get a good approximation

---

## The Exponential Function

- Euler's number $e \approx 2.71828182845904...$
- The **exponential function** $f(x) = e^x$ has the remarkable property:

$$\frac{d}{dx}(e^x) = e^x$$

- In words: **the exponential function is its own derivative** — the rate of change equals the value itself

**Using the chain rule with the exponential function:**

| Function | Derivative |
|---|---|
| $y = e^{kx}$ | $\frac{dy}{dx} = ke^{kx}$ |
| $y = e^{f(x)}$ | $\frac{dy}{dx} = f'(x) \cdot e^{f(x)}$ |
| $y = e^{-x^2}$ | $\frac{dy}{dx} = -2x \cdot e^{-x^2}$ |
| $y = e^{\sin x}$ | $\frac{dy}{dx} = \cos x \cdot e^{\sin x}$ |

**General rule:** For $y = e^{u(x)}$:
$$\frac{dy}{dx} = \frac{du}{dx} \cdot e^u$$

**Sketching exponential graphs — building up in steps:**
- Start with $y = e^x$: passes through $(0,1)$, always positive, increasing
- $y = e^{-x}$: reflection of $e^x$ in the $y$-axis
- $y = e^x + c$: vertical shift by $c$
- $y = A e^{kx}$: scale and stretch

---

## The Hyperbolic Functions

> These are entirely new functions built from the exponential function. They look similar to trig functions in many ways, but they come from **hyperbolas** rather than circles.

**Historical note:** First named by J. H. Lambert (German mathematician, 1728–1777).

**Why do we care?** Hyperbolic functions appear in:
- **Electronics** (transmission lines, signal propagation)
- **Structures** (catenary curves, arch design)
- **Mechanics and physics**
- **Chemistry**

---

### Definitions of the Hyperbolic Functions

**Hyperbolic Cosine** (pronounced "cosh"):
$$\cosh x = \frac{e^x + e^{-x}}{2}$$

**Hyperbolic Sine** (pronounced "shine" or "sinch"):
$$\sinh x = \frac{e^x - e^{-x}}{2}$$

**Hyperbolic Tangent** (pronounced "than"):
$$\tanh x = \frac{\sinh x}{\cosh x} = \frac{e^x - e^{-x}}{e^x + e^{-x}}$$

**Hyperbolic Secant** (pronounced "shek"):
$$\text{sech}\, x = \frac{1}{\cosh x} = \frac{2}{e^x + e^{-x}}$$

**Hyperbolic Cosecant** (pronounced "coshek"):
$$\text{cosech}\, x = \frac{1}{\sinh x} = \frac{2}{e^x - e^{-x}}$$

**Hyperbolic Cotangent** (pronounced "coth"):
$$\coth x = \frac{\cosh x}{\sinh x} = \frac{e^x + e^{-x}}{e^x - e^{-x}}$$

> 💡 **Key insight:** Notice that $\cosh x = \frac{e^x + e^{-x}}{2}$ is the **average** of $e^x$ and $e^{-x}$, while $\sinh x = \frac{e^x - e^{-x}}{2}$ is the **half-difference**. So $e^x = \cosh x + \sinh x$ and $e^{-x} = \cosh x - \sinh x$.

---

### Graphs and Properties of Hyperbolic Functions

**$\cosh x$:**
- Always $\geq 1$
- Even function: $\cosh(-x) = \cosh(x)$ — symmetric about the $y$-axis
- Minimum value is $\cosh(0) = 1$
- ⚠️ The graph of $\cosh x$ **looks like a parabola but is NOT one**

**$\sinh x$:**
- Can be positive or negative
- Odd function: $\sinh(-x) = -\sinh(x)$ — rotationally symmetric about the origin
- $\sinh(0) = 0$

**$\tanh x$:**
- Always between $-1$ and $1$: $-1 < \tanh x < 1$
- Horizontal asymptotes at $y = 1$ (as $x \to +\infty$) and $y = -1$ (as $x \to -\infty$)
- Odd function: $\tanh(-x) = -\tanh(x)$
- $\tanh(0) = 0$

---

### The Catenary — A Real-World Application of cosh

- The equation of a **catenary** is:
$$y = a \cosh\left(\frac{x}{a}\right)$$

- This is the shape a **hanging chain** takes under its own weight
- When you **invert** the catenary shape, you get an arch that is extremely **structurally stable**
- This principle is used in the **Gateway Arch** in St Louis, USA

---

### Application: Water Flow from a Reservoir

- Water flows from a large reservoir through a long pipe
- The velocity $v$ of water from the pipe is modelled by:

$$v = \sqrt{\frac{2gh}{L}} \cdot \tanh\left(\sqrt{\frac{2gh}{L}} \cdot t\right)$$

- where $h$ is the height of water, $L$ is pipe length, $g$ is gravitational acceleration, $t$ is time elapsed
- As $t \to \infty$: $\tanh(\cdot) \to 1$, so $v$ approaches a **terminal velocity** of $\sqrt{\frac{2gh}{L}}$
- The $\tanh$ function naturally models **approaching a limit** — velocity increases quickly at first, then levels off

---

### Key Identity for Hyperbolic Functions

**Fundamental identity** (analogous to $\sin^2 x + \cos^2 x = 1$ for trig):

$$\cosh^2 x - \sinh^2 x = 1$$

**Proof:**
$$\cosh^2 x - \sinh^2 x = \left(\frac{e^x + e^{-x}}{2}\right)^2 - \left(\frac{e^x - e^{-x}}{2}\right)^2$$

$$= \frac{(e^x + e^{-x})^2 - (e^x - e^{-x})^2}{4}$$

Using the difference of squares factorisation $(A^2 - B^2) = (A+B)(A-B)$:

$$= \frac{[(e^x + e^{-x}) + (e^x - e^{-x})][(e^x + e^{-x}) - (e^x - e^{-x})]}{4}$$

$$= \frac{[2e^x][2e^{-x}]}{4} = \frac{4 e^{x-x}}{4} = \frac{4}{4} = 1 \checkmark$$

**Derived identities** (by dividing the fundamental identity):

Divide $\cosh^2 x - \sinh^2 x = 1$ through by $\cosh^2 x$:

$$1 - \tanh^2 x = \text{sech}^2 x$$

Divide through by $\sinh^2 x$:

$$\coth^2 x - 1 = \text{cosech}^2 x$$

---

### Derivatives of Hyperbolic Functions

> These are derived directly from the definitions using the exponential function derivatives.

**Derivative of $\sinh x$:**

$$\frac{d}{dx}(\sinh x) = \frac{d}{dx}\left(\frac{e^x - e^{-x}}{2}\right) = \frac{e^x + e^{-x}}{2} = \cosh x$$

$$\boxed{\frac{d}{dx}(\sinh x) = \cosh x}$$

**Derivative of $\cosh x$:**

$$\frac{d}{dx}(\cosh x) = \frac{d}{dx}\left(\frac{e^x + e^{-x}}{2}\right) = \frac{e^x - e^{-x}}{2} = \sinh x$$

$$\boxed{\frac{d}{dx}(\cosh x) = \sinh x}$$

> ⚠️ **Compare with trig:** For trig, $\frac{d}{dx}(\cos x) = -\sin x$ (there's a minus sign!). For hyperbolic functions, there is **no minus sign**: $\frac{d}{dx}(\cosh x) = +\sinh x$.

**Derivative of $\tanh x$:**

Using the quotient rule on $\tanh x = \frac{\sinh x}{\cosh x}$:

$$\frac{d}{dx}(\tanh x) = \frac{\cosh x \cdot \cosh x - \sinh x \cdot \sinh x}{\cosh^2 x} = \frac{\cosh^2 x - \sinh^2 x}{\cosh^2 x} = \frac{1}{\cosh^2 x}$$

$$\boxed{\frac{d}{dx}(\tanh x) = \text{sech}^2 x}$$

**Summary Table of Hyperbolic Derivatives:**

| Function | Derivative |
|---|---|
| $\sinh x$ | $\cosh x$ |
| $\cosh x$ | $\sinh x$ |
| $\tanh x$ | $\text{sech}^2 x$ |
| $\text{sech}\, x$ | $-\text{sech}\, x \tanh x$ |
| $\text{cosech}\, x$ | $-\text{cosech}\, x \coth x$ |
| $\coth x$ | $-\text{cosech}^2 x$ |

---

### Application: Transmission Line Voltage

- A transmission line of length $l$ has voltage $V$ at distance $x$ from the sending end
- The voltage is given by:

$$V = V_0 \cosh(\gamma x) - I_0 Z_0 \sinh(\gamma x)$$

- where $V_0$ is voltage, $I_0$ is current, $Z_0$ is characteristic impedance, $\gamma$ is propagation coefficient
- **Task:** Show that at $x = 0$, $V = V_0$
- **Proof (start from RHS):**

$$V\big|_{x=0} = V_0 \cosh(0) - I_0 Z_0 \sinh(0) = V_0 (1) - I_0 Z_0 (0) = V_0 \checkmark$$

(Using $\cosh(0) = 1$ and $\sinh(0) = 0$)

---

### Sum and Difference Formulas for Hyperbolic Functions

**Recall the trig identities:**
$$\sin(A + B) = \sin A \cos B + \cos A \sin B$$
$$\cos(A + B) = \cos A \cos B - \sin A \sin B$$

**Hyperbolic analogues** (notice the sign differences!):

$$\sinh(A + B) = \sinh A \cosh B + \cosh A \sinh B \quad (1)$$

$$\cosh(A + B) = \cosh A \cosh B + \sinh A \sinh B \quad (2)$$

> ⚠️ **Difference from trig:** In $\cos(A+B)$, there's a **minus** sign between the two terms. In $\cosh(A+B)$, there's a **plus** sign. This is a recurring pattern — hyperbolic identities often differ from trig ones by a sign change.

**Proof of (1):** Start from the RHS and use definitions:

$$\sinh A \cosh B + \cosh A \sinh B$$

$$= \frac{e^A - e^{-A}}{2} \cdot \frac{e^B + e^{-B}}{2} + \frac{e^A + e^{-A}}{2} \cdot \frac{e^B - e^{-B}}{2}$$

$$= \frac{(e^A - e^{-A})(e^B + e^{-B}) + (e^A + e^{-A})(e^B - e^{-B})}{4}$$

Expanding the numerator:
$$= \frac{e^{A+B} + e^{A-B} - e^{-A+B} - e^{-A-B} + e^{A+B} - e^{A-B} + e^{-A+B} - e^{-A-B}}{4}$$

$$= \frac{2e^{A+B} - 2e^{-(A+B)}}{4} = \frac{e^{A+B} - e^{-(A+B)}}{2} = \sinh(A+B) \checkmark$$

**Proof of (2):** Similarly:

$$\cosh A \cosh B + \sinh A \sinh B$$

$$= \frac{e^A + e^{-A}}{2} \cdot \frac{e^B + e^{-B}}{2} + \frac{e^A - e^{-A}}{2} \cdot \frac{e^B - e^{-B}}{2}$$

Expanding and simplifying (all cross terms cancel except $e^{A+B}$ and $e^{-(A+B)}$ terms):

$$= \frac{2e^{A+B} + 2e^{-(A+B)}}{4} = \frac{e^{A+B} + e^{-(A+B)}}{2} = \cosh(A+B) \checkmark$$

---

## Summary of Key Formulas to Remember

### Differentiation Rules

| Situation | Formula |
|---|---|
| Power | $\frac{d}{dx}(x^n) = nx^{n-1}$ |
| Product | $\frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx}$ |
| Quotient | $\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}$ |
| Chain | $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$ |
| Exponential | $\frac{d}{dx}(e^{f(x)}) = f'(x) e^{f(x)}$ |

### Hyperbolic Function Definitions

| Function | Definition |
|---|---|
| $\cosh x$ | $\frac{e^x + e^{-x}}{2}$ |
| $\sinh x$ | $\frac{e^x - e^{-x}}{2}$ |
| $\tanh x$ | $\frac{e^x - e^{-x}}{e^x + e^{-x}}$ |

### Key Hyperbolic Identities

- $\cosh^2 x - \sinh^2 x = 1$
- $1 - \tanh^2 x = \text{sech}^2 x$
- $\coth^2 x - 1 = \text{cosech}^2 x$
- $\sinh(A \pm B) = \sinh A \cosh B \pm \cosh A \sinh B$
- $\cosh(A \pm B) = \cosh A \cosh B \pm \sinh A \sinh B$

### Newton's Method

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

### Differentials / Small Approximations

$$\Delta y \approx f'(x)\,\Delta x$$