
## Table of Contents

1. [Vectors & 3D Space](#1-vectors--3d-space)
2. [Lines, Planes & Cross Product](#2-lines-planes--cross-product)
3. [Matrices](#3-matrices)
4. [Differentiation & Hyperbolic Functions](#4-differentiation--hyperbolic-functions)
5. [Inverse Functions, Logarithms & Inverse Hyperbolic Functions](#5-inverse-functions-logarithms--inverse-hyperbolic-functions)
6. [Integration](#6-integration)
7. [Methods of Integration](#7-methods-of-integration)
8. [Complex Numbers](#8-complex-numbers)
9. [First Order Differential Equations](#9-first-order-differential-equations)
10. [Second Order Differential Equations](#10-second-order-differential-equations)

---

## 1. Vectors & 3D Space

### Angles: Degrees and Radians

- Full circle: $2\pi \text{ rad} = 360°$
- In a right triangle: $\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}$, $\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}$

---

### 2D and 3D Coordinate Systems

**Distance between two points in 2D** $A(x_1,y_1)$ and $B(x_2,y_2)$:
$$d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$

**Example:** $A(2,3)$ to $B(6,5)$: $d = \sqrt{16+4} = 2\sqrt{5}$

**Distance between two points in 3D** $A(x_1,y_1,z_1)$ and $B(x_2,y_2,z_2)$:
$$d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$$

**Example:** $O(0,1,0)$ to $A(1,4,2)$: $d = \sqrt{1+9+4} = \sqrt{14}$

**Sets of Points** — notation $\{(x,y,z) : \text{condition}\}$
- In 2D: a condition draws a **curve or line**
- In 3D: a condition draws a **surface**

| Set Notation | Shape |
|---|---|
| $\{(x,y,z) : x^2+y^2+z^2=4\}$ | Sphere of radius 2 |
| $\{(x,y,z) : y+z=1\}$ | Tilted plane |
| $\{(x,y,z) : z=x^2+y^2\}$ | Paraboloid (bowl) |

---

### Scalars vs Vectors

| Type | Description | Examples |
|---|---|---|
| **Scalar** | Size only, no direction | Temperature, Mass, Energy |
| **Vector** | Size AND direction | Velocity, Force, Acceleration |

- Bold in print: $\mathbf{a}$; squiggle by hand: $\underset{\sim}{a}$
- 3D vector notation: $\mathbf{a} = \langle a_1, a_2, a_3 \rangle$

---

### Magnitude (Length) of a Vector

$$|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$$

**Examples:**
- $|\langle 1,3,2\rangle| = \sqrt{14}$
- $|\langle -1,4,-2\rangle| = \sqrt{21}$

> $|\mathbf{a}|$ is always a **scalar**.

---

### Standard Basis Vectors

$$\hat{\mathbf{i}} = \langle 1,0,0\rangle \quad \hat{\mathbf{j}} = \langle 0,1,0\rangle \quad \hat{\mathbf{k}} = \langle 0,0,1\rangle$$

**Two ways to write any vector (equivalent):**
$$\mathbf{a} = \langle a_1,a_2,a_3\rangle = a_1\hat{\mathbf{i}} + a_2\hat{\mathbf{j}} + a_3\hat{\mathbf{k}}$$

---

### The Dot Product

**Definition (component form):**
$$\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$$

Result is always a **scalar**.

**Example:** $\langle 1,0,3\rangle \cdot \langle 2,1,-4\rangle = 2+0-12 = -10$

> If $\mathbf{a} \cdot \mathbf{b} = 0$, the vectors are **perpendicular**.

**Properties:**
- Commutative: $\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}$
- Distributive: $\mathbf{a} \cdot (\mathbf{b}+\mathbf{c}) = \mathbf{a}\cdot\mathbf{b} + \mathbf{a}\cdot\mathbf{c}$
- Scalar: $\mathbf{a} \cdot (k\mathbf{b}) = k(\mathbf{a}\cdot\mathbf{b})$
- Self dot product: $\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$

**Angle formula:**
$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$$

| Angle | $\cos\theta$ | Meaning |
|---|---|---|
| $0°$ | $1$ | Same direction |
| $90°$ | $0$ | Perpendicular |
| $180°$ | $-1$ | Opposite directions |

**Finding the angle between two vectors:**
$$\theta = \cos^{-1}\!\left(\frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}\right)$$

**Worked example:** $\mathbf{a} = \langle 1,-1,2\rangle$, $\mathbf{b} = \langle 1,2,1\rangle$
1. $\mathbf{a}\cdot\mathbf{b} = 1-2+2 = 1$
2. $|\mathbf{a}| = \sqrt{6}$, $|\mathbf{b}| = \sqrt{6}$
3. $\cos\theta = \frac{1}{6}$, so $\theta = \cos^{-1}(1/6) \approx 80.4°$

---

### Unit Vectors

A **unit vector** has length exactly 1:
$$\hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}$$

**Example:** $\mathbf{a} = \langle -1,2,3\rangle$, $|\mathbf{a}| = \sqrt{14}$, so $\hat{\mathbf{a}} = \left\langle\frac{-1}{\sqrt{14}}, \frac{2}{\sqrt{14}}, \frac{3}{\sqrt{14}}\right\rangle$

---

### Scalar and Vector Projections

**Scalar projection** (how much of $\mathbf{a}$ points along $\mathbf{b}$ — just a number):
$$\text{comp}_{\hat{\mathbf{b}}}\,\mathbf{a} = \mathbf{a} \cdot \hat{\mathbf{b}} = \frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{b}|}$$

**Vector projection** (the actual arrow component of $\mathbf{a}$ in the $\mathbf{b}$ direction):
$$\text{proj}_{\hat{\mathbf{b}}}\,\mathbf{a} = \left(\mathbf{a}\cdot\hat{\mathbf{b}}\right)\hat{\mathbf{b}}$$

| Quantity | Formula | Output |
|---|---|---|
| Unit vector | $\hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}$ | Vector |
| Scalar projection | $\mathbf{a}\cdot\hat{\mathbf{b}}$ | Scalar |
| Vector projection | $(\mathbf{a}\cdot\hat{\mathbf{b}})\hat{\mathbf{b}}$ | Vector |

**Work done by a force:**
$$W = \mathbf{F} \cdot \mathbf{d}$$

**Worked example — Truck on 30° incline** (10,000 kg):
- $\hat{\mathbf{b}} = \left\langle\frac{\sqrt{3}}{2}, \frac{1}{2}\right\rangle$ (unit vector along slope)
- $\mathbf{F} = \langle 0, -mg\rangle$ (gravity)
- Scalar projection (downhill force magnitude): $\mathbf{F}\cdot\hat{\mathbf{b}} = -\frac{mg}{2} = -4.9\times10^4$ N
- Vector projection: $\mathbf{F}_{\text{slope}} = -\frac{mg}{4}\langle\sqrt{3},1\rangle$

**Exam hints:**
- Always label scalar vs vector — they are completely different things
- If $\mathbf{a}\cdot\mathbf{b}=0$ → perpendicular
- Scalar projection = size of shadow; Vector projection = actual shadow arrow
- On incline problems: find $\hat{\mathbf{b}}$ first, then dot

---

## 2. Lines, Planes & Cross Product

### Position Vectors

$$\mathbf{r} = x\hat{i} + y\hat{j} + z\hat{k} = \langle x,y,z\rangle, \qquad |\mathbf{r}| = \sqrt{x^2+y^2+z^2}$$

---

### Parametric vs Cartesian Representations

**Parametric:** each coordinate is a function of parameter $t$
- $x(t)=F(t)$, $y(t)=G(t)$, $z(t)=H(t)$
- Each value of $t$ gives one point on the curve

**Cartesian:** eliminates $t$ entirely; direct relationship between $x$, $y$, $z$

**Example:** $x=2t$, $y=-t$ → eliminate $t$: $y = -x/2$ (Cartesian)

---

### Vector Equations of Lines

$$\mathbf{r}(t) = \mathbf{a} + t\mathbf{p}$$

- $\mathbf{a}$ = known point on the line
- $\mathbf{p}$ = direction vector
- $t$ = scalar parameter

**Finding direction from two points:** $\mathbf{p} = \overrightarrow{AB} = B - A$

**Example:** Line through $A(1,1,3)$ and $B(2,1,-1)$:
- $\mathbf{p} = \langle 1,0,-4\rangle$
- $\mathbf{r}(t) = \langle 1+t,\ 1,\ 3-4t\rangle$

---

### Cartesian (Symmetric) Equation of a Line

$$\frac{x-a_1}{p_1} = \frac{y-a_2}{p_2} = \frac{z-a_3}{p_3}$$

> If $p_i = 0$: that coordinate is constant; write $y = a_2$ separately.

**Example (continuing above):** $\frac{x-1}{1} = \frac{y-1}{0} = \frac{z-3}{-4}$ → write $y=1$ separately.

---

### Planes

Any plane: $ax + by + cz = \text{const}$

**Vector (parametric) form** — uses two vectors lying in the plane:
$$\mathbf{r}(u,v) = \mathbf{a} + u\mathbf{p} + v\mathbf{q}$$

**Normal (vector) form** — uses normal vector $\mathbf{n}$ (perpendicular to plane):
$$(\mathbf{r} - \mathbf{a})\cdot\mathbf{n} = 0$$

**Cartesian form** (expanding normal form):
$$n_1 x + n_2 y + n_3 z = a_1 n_1 + a_2 n_2 + a_3 n_3$$

**Finding normal from 3 points:**
$$\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC}$$

**Step-by-step (plane through 3 points):**
1. Find $\overrightarrow{AB} = B-A$ and $\overrightarrow{AC} = C-A$
2. Compute $\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC}$
3. Use normal form: $\mathbf{n}\cdot(\mathbf{r}-A) = 0$

---

### The Cross Product

| Operation | Input | Output |
|---|---|---|
| Dot product | Two vectors | Scalar |
| Cross product | Two vectors | Vector (perpendicular to both) |

**Formula:**
$$\mathbf{a} \times \mathbf{b} = \begin{vmatrix}\hat{i} & \hat{j} & \hat{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3\end{vmatrix}$$

$$= (a_2 b_3 - a_3 b_2)\hat{i} - (a_1 b_3 - a_3 b_1)\hat{j} + (a_1 b_2 - a_2 b_1)\hat{k}$$

**How to compute:** Cover each column in turn, take the 2×2 determinant; negate the $\hat{j}$ component.

**Example:** $\mathbf{a}=\langle 1,2,0\rangle$, $\mathbf{b}=\langle 0,3,1\rangle$:
- $\hat{i}$: $2(1)-0(3)=2$
- $\hat{j}$: $-(1(1)-0(0))=-1$
- $\hat{k}$: $1(3)-2(0)=3$
- Result: $\langle 2,-1,3\rangle$

**Geometric meaning:**
$$|\mathbf{a}\times\mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta = \text{area of parallelogram formed by } \mathbf{a},\mathbf{b}$$

**Right-hand rule:** Point fingers in direction $\mathbf{a}$, curl toward $\mathbf{b}$, thumb = direction of $\mathbf{a}\times\mathbf{b}$.

**Standard basis cross products:**
$$\hat{i}\times\hat{j}=\hat{k},\quad \hat{j}\times\hat{k}=\hat{i},\quad \hat{k}\times\hat{i}=\hat{j}$$
Reversing order negates: $\hat{j}\times\hat{i}=-\hat{k}$, etc.

**Properties:**
- NOT commutative: $\mathbf{a}\times\mathbf{b} = -(\mathbf{b}\times\mathbf{a})$
- Distributive: $\mathbf{a}\times(\mathbf{b}+\mathbf{c}) = \mathbf{a}\times\mathbf{b} + \mathbf{a}\times\mathbf{c}$
- Scalar: $\mathbf{a}\times(k\mathbf{b}) = k(\mathbf{a}\times\mathbf{b})$
- Self: $\mathbf{a}\times\mathbf{a} = \mathbf{0}$ (also: parallel vectors → zero)
- Perpendicularity check: $\mathbf{a}\cdot(\mathbf{a}\times\mathbf{b})=0$

---

### Applications of the Cross Product

**Torque:**
$$\boldsymbol{\tau} = \mathbf{r}\times\mathbf{F}, \qquad |\boldsymbol{\tau}| = |\mathbf{r}||\mathbf{F}|\sin\theta$$
- Max torque at $\theta=90°$; zero torque at $\theta=0°$ or $180°$

**Example:** 10 kg mass on 1 m arm: $\mathbf{r}=\langle 1,0,0\rangle$, $\mathbf{F}=\langle 0,-98,0\rangle$, $\boldsymbol{\tau}=\langle 0,0,-98\rangle$, $|\boldsymbol{\tau}|=98$ N·m

**Magnetic force on a charged particle:**
$$\mathbf{F} = q\mathbf{v}\times\mathbf{B}$$
- Force is always perpendicular to $\mathbf{v}$ and $\mathbf{B}$ → particle moves in circular/helical path
- If $\mathbf{v} \parallel \mathbf{B}$: no force

**Rotational velocity:**
$$\mathbf{v} = \boldsymbol{\omega}\times\mathbf{r}$$

---

### Key Formula Summary

| Form | Formula |
|---|---|
| Line (vector) | $\mathbf{r}(t) = \mathbf{a} + t\mathbf{p}$ |
| Line (Cartesian) | $\frac{x-a_1}{p_1}=\frac{y-a_2}{p_2}=\frac{z-a_3}{p_3}$ |
| Plane (Cartesian) | $ax+by+cz=\text{const}$ |
| Plane (parametric) | $\mathbf{r}(u,v)=\mathbf{a}+u\mathbf{p}+v\mathbf{q}$ |
| Plane (normal) | $(\mathbf{r}-\mathbf{a})\cdot\mathbf{n}=0$ |
| Cross product magnitude | $|\mathbf{a}\times\mathbf{b}|=|\mathbf{a}||\mathbf{b}|\sin\theta$ |
| Anti-commutative | $\mathbf{a}\times\mathbf{b}=-(\mathbf{b}\times\mathbf{a})$ |

---

## 3. Matrices

### What is a Matrix?

- Rectangular array of numbers arranged in rows and columns
- Order: $m\times n$ ($m$ rows, $n$ columns)
- Element in row $i$, column $j$: $a_{ij}$
- **Row vector**: $1\times n$; **Column vector**: $m\times 1$

**Types of square matrices:**
- **Upper triangular**: all entries below main diagonal are zero
- **Lower triangular**: all entries above main diagonal are zero
- **Diagonal**: all off-diagonal entries are zero

**Matrix equality**: same size AND every $a_{ij} = b_{ij}$.

---

### Matrix Operations

**Addition/Subtraction** — same order only; add/subtract element by element:
$$A + B: \quad (A+B)_{ij} = a_{ij} + b_{ij}$$

**Properties of addition:** Commutative, associative; zero matrix $\mathbf{0}$ is additive identity.

**Scalar multiplication** — multiply every element by $k$:
$$kA: \quad (kA)_{ij} = k\cdot a_{ij}$$

---

### Matrix Multiplication

**Rule:** $A$ is $p\times m$ and $B$ is $m\times q$ → $C = AB$ is $p\times q$. Inner dimensions must match.

**Each element:**
$$c_{ij} = \sum_{k=1}^{m} a_{ik}b_{kj} \quad \text{(dot product of row } i \text{ of } A \text{ with column } j \text{ of } B\text{)}$$

**Critical:** Matrix multiplication is **NOT commutative**: $AB \neq BA$ in general.

**Strange properties:**
- $AB = \mathbf{0}$ does **not** mean $A=\mathbf{0}$ or $B=\mathbf{0}$
- $AD = AC$ does **not** mean $D=C$

**Matrix algebra rules:**
- Associative: $A(BC) = (AB)C$
- Distributive: $(A+B)C = AC+BC$
- Scalar: $k(AB) = (kA)B$
- Identity: $AI = IA = A$

---

### Transpose

$(A^T)_{ij} = a_{ji}$ — swap rows and columns.

**Rules:**
- $(A+B)^T = A^T + B^T$
- $(A^T)^T = A$
- $(AB)^T = B^T A^T$ — **note reversal of order**

---

### Identity and Inverse

**Identity matrix** $I$: ones on diagonal, zeros elsewhere. $AI = IA = A$.

**Inverse** $A^{-1}$: $A^{-1}A = AA^{-1} = I$. Only exists if $\det(A)\neq 0$.

**2×2 inverse:**
$$A = \begin{pmatrix}a&b\\c&d\end{pmatrix} \implies A^{-1} = \frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$$

---

### Determinants

**2×2:**
$$\det\begin{pmatrix}a&b\\c&d\end{pmatrix} = ad - bc$$

**3×3 (cofactor expansion along top row, signs $+,-,+$):**
$$\det A = a_{11}(a_{22}a_{33}-a_{23}a_{32}) - a_{12}(a_{21}a_{33}-a_{23}a_{31}) + a_{13}(a_{21}a_{32}-a_{22}a_{31})$$

**Example:**
$$\det\begin{pmatrix}3&2&1\\1&2&1\\1&2&2\end{pmatrix} = 3(4-2)-2(2-1)+1(2-2) = 6-2+0 = 4$$

**Tricks:**
- Row/column all zeros → $\det = 0$
- Two identical rows/columns → $\det = 0$
- Triangular matrix → $\det$ = product of diagonal entries

---

### Solving Systems of Linear Equations

**Matrix form:** $A\mathbf{x} = \mathbf{b}$

**Using the inverse:** $\mathbf{x} = A^{-1}\mathbf{b}$ (only if $\det A \neq 0$)

**Cramer's Rule:**
$$x_i = \frac{D_i}{D}$$
where $D = \det A$ and $D_i$ = determinant with column $i$ replaced by $\mathbf{b}$.

**Example (Cramer's):**
$$2x_1+3x_2=5,\quad 5x_1+10x_2=3$$
$$D = 20-15=5, \quad D_1 = 50-9=41 \implies x_1 = \frac{41}{5}$$

---

### Gaussian Elimination (Row Reduction)

**Goal:** Convert augmented matrix $[A|\mathbf{b}]$ to row-echelon form (upper triangular), then back-substitute.

**Allowed row operations** (don't change the solution):
- Multiply a row by a non-zero scalar
- Add a multiple of one row to another
- Swap two rows

**Full worked example:**
$$-x_1+x_2+2x_3=2,\quad 3x_1-x_2+x_3=6,\quad -x_1+3x_2+4x_3=4$$

Start:
$$\left[\begin{array}{ccc|c}-1&1&2&2\\3&-1&1&6\\-1&3&4&4\end{array}\right]$$

$R_2\to R_2+3R_1$, $R_3\to R_3-R_1$:
$$\left[\begin{array}{ccc|c}-1&1&2&2\\0&2&7&12\\0&2&2&2\end{array}\right]$$

$R_3\to R_3-R_2$:
$$\left[\begin{array}{ccc|c}-1&1&2&2\\0&2&7&12\\0&0&-5&-10\end{array}\right]$$

Back-substitute: $x_3=2$, $x_2=-1$, $x_1=1$.

---

### Finding the Inverse of a 3×3 Matrix

**Method 1 — Row reduction:** Augment with identity $[A|I]$; row-reduce left side to $I$; right side becomes $A^{-1}$.

**Method 2 — Adjugate/Cofactor:**

1. Compute cofactor matrix $A^C$: $C_{ij} = (-1)^{i+j}M_{ij}$ (signed 2×2 determinant)

   Sign pattern:
   $$\begin{pmatrix}+&-&+\\-&+&-\\+&-&+\end{pmatrix}$$

2. Transpose: $\text{Adj}(A) = (A^C)^T$

3. $A^{-1} = \frac{1}{\det A}\cdot\text{Adj}(A)$

**Full example:** $A = \begin{pmatrix}2&1&2\\0&1&3\\3&0&1\end{pmatrix}$

- $\det A = 2(1)+9-6 = 5$
- Cofactor matrix: $A^C = \begin{pmatrix}1&9&-3\\-1&-4&3\\1&-6&2\end{pmatrix}$
- $\text{Adj}(A) = \begin{pmatrix}1&-1&1\\9&-4&-6\\-3&3&2\end{pmatrix}$
- $A^{-1} = \frac{1}{5}\begin{pmatrix}1&-1&1\\9&-4&-6\\-3&3&2\end{pmatrix}$

---

### Special Cases: When Does a Solution Exist?

If $\det A = 0$ (singular matrix):
- **No solution** (parallel planes/lines — inconsistent)
- **Infinitely many solutions** (dependent equations — overlap)

If $\det A \neq 0$: **unique solution**.

Always check $\det A$ or row-reduce to determine which case applies.

---

## 4. Differentiation & Hyperbolic Functions

### Differentiation from First Principles

$$f'(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$$

The derivative is the **limiting slope** of the secant line as two points merge.

---

### Continuity and Differentiability

- **Continuous** function: no breaks or jumps (can draw without lifting pen)
- **Differentiable** at a point: derivative exists there
- NOT differentiable where: discontinuity or **sharp corner** (e.g. $|x|$ at $x=0$)
- All differentiable functions are continuous; NOT all continuous functions are differentiable

---

### Differentiation Rules

**Power Rule:**
$$\frac{d}{dx}(x^n) = nx^{n-1}$$

**Sum/Difference (constants come out):**
$$\frac{d}{dx}[Af(x)+Bg(x)] = Af'(x)+Bg'(x)$$

**Product Rule** (two functions multiplied):
$$\frac{d}{dx}[uv] = u\frac{dv}{dx} + v\frac{du}{dx}$$
*"First times derivative of second, plus second times derivative of first"*

**Example:** $y=x^2\sin x$: $\frac{dy}{dx} = x^2\cos x + 2x\sin x$

**Quotient Rule** (one function divided by another):
$$\frac{d}{dx}\!\left[\frac{u}{v}\right] = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}$$
*"Bottom times derivative of top, minus top times derivative of bottom, all over bottom squared"*

**Chain Rule** (function inside another function):
$$\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}$$
*"Differentiate outside (leave inside alone), multiply by derivative of inside"*

**Examples:**
- $y=(x^2+3)^5$: $\frac{dy}{dx} = 10x(x^2+3)^4$
- $y=\sin(x^3)$: $\frac{dy}{dx} = 3x^2\cos(x^3)$

---

### Higher Derivatives

$$f''(x) = \frac{d^2y}{dx^2} = \frac{d}{dx}\!\left(\frac{dy}{dx}\right)$$

- $f''(x)>0$: concave up $\cup$
- $f''(x)<0$: concave down $\cap$
- Point of inflection: $f''(x)$ changes sign

---

### Curve Sketching

**Odd functions:** $f(-x) = -f(x)$ → rotational symmetry about origin (e.g. $\sin x$, $x^3$)

**Even functions:** $f(-x) = f(x)$ → reflection symmetry about $y$-axis (e.g. $\cos x$, $x^2$)

**Key features:**
- $x$-intercepts: set $y=0$
- $y$-intercept: evaluate $f(0)$
- Vertical asymptotes: denominator $=0$
- Horizontal asymptotes: $\lim_{x\to\pm\infty}f(x)$
- Turning points: $f'(x)=0$
- Second derivative test: $f'(c)=0$ and $f''(c)>0$ → local min; $f''(c)<0$ → local max

---

### Implicit Differentiation

When $y$ cannot be made the explicit subject, differentiate both sides w.r.t. $x$; apply chain rule whenever $y$ appears (multiply by $\frac{dy}{dx}$), then solve for $\frac{dy}{dx}$.

**Example:** $x^2+y^2=16$:
$$2x+2y\frac{dy}{dx}=0 \implies \frac{dy}{dx}=-\frac{x}{y}$$

---

### Related Rates

Differentiate a relationship w.r.t. **time $t$** to relate rates of change.

**Example:** Spherical balloon, $V=\frac{4}{3}\pi r^3$, $r=10$ cm, $\frac{dr}{dt}=1$ cm/s:
$$\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt} = 400\pi \approx 1257 \text{ cm}^3/\text{s}$$

---

### Errors, Small Approximations, and Differentials

$$\Delta y \approx f'(x)\,\Delta x$$

- Relative change: $\frac{\Delta y}{y}$
- Percentage change: $100\cdot\frac{\Delta y}{y}$

**Example:** Cube side $x=10$ cm, $\Delta x=0.01$ cm: $\Delta V \approx 3(10)^2(0.01) = 3\ \text{cm}^3$

---

### Newton's Method

For solving $f(x)=0$ numerically:

$$\boxed{x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}}$$

- Start with guess $x_0$ near the root
- Each iteration gives a better approximation
- Fails if $f'(x_n)=0$; use radians for trig functions

**Example:** Segment area $=4$ cm², circle radius $=10$ cm:
$$f(\theta) = 50\theta - 50\sin\theta - 4 = 0, \quad f'(\theta)=50-50\cos\theta$$
Apply Newton's method starting at $\theta_0=0.4$.

---

### The Exponential Function

$$\frac{d}{dx}(e^x) = e^x$$

| Function | Derivative |
|---|---|
| $e^{kx}$ | $ke^{kx}$ |
| $e^{f(x)}$ | $f'(x)\cdot e^{f(x)}$ |
| $e^{-x^2}$ | $-2x\cdot e^{-x^2}$ |

---

### Hyperbolic Functions

**Definitions:**
$$\cosh x = \frac{e^x+e^{-x}}{2}, \qquad \sinh x = \frac{e^x-e^{-x}}{2}, \qquad \tanh x = \frac{\sinh x}{\cosh x} = \frac{e^x-e^{-x}}{e^x+e^{-x}}$$

$$\text{sech}\,x = \frac{1}{\cosh x}, \qquad \text{cosech}\,x = \frac{1}{\sinh x}, \qquad \coth x = \frac{\cosh x}{\sinh x}$$

Key insight: $e^x = \cosh x + \sinh x$, $e^{-x} = \cosh x - \sinh x$

**Graphs and Properties:**
- $\cosh x$: always $\geq 1$, even function ($\cosh(-x)=\cosh x$), min at $\cosh(0)=1$
- $\sinh x$: odd function ($\sinh(-x)=-\sinh x$), $\sinh(0)=0$
- $\tanh x$: $-1 < \tanh x < 1$, odd, $\tanh(0)=0$, asymptotes $y=\pm 1$

**Catenary:** $y = a\cosh(x/a)$ — shape of a hanging chain; inverted = structurally efficient arch (Gateway Arch, St Louis)

---

### Fundamental Hyperbolic Identity

$$\cosh^2 x - \sinh^2 x = 1$$

**Derived identities:**
$$1 - \tanh^2 x = \text{sech}^2 x$$
$$\coth^2 x - 1 = \text{cosech}^2 x$$

---

### Derivatives of Hyperbolic Functions

| Function | Derivative |
|---|---|
| $\sinh x$ | $\cosh x$ |
| $\cosh x$ | $\sinh x$ (no minus sign! contrast with $-\sin x$) |
| $\tanh x$ | $\text{sech}^2 x$ |
| $\text{sech}\,x$ | $-\text{sech}\,x\tanh x$ |
| $\text{cosech}\,x$ | $-\text{cosech}\,x\coth x$ |
| $\coth x$ | $-\text{cosech}^2 x$ |

---

### Sum and Difference Formulas for Hyperbolic Functions

$$\sinh(A\pm B) = \sinh A\cosh B \pm \cosh A\sinh B$$
$$\cosh(A\pm B) = \cosh A\cosh B \pm \sinh A\sinh B$$

> Compare with trig: $\cos(A+B) = \cos A\cos B - \sin A\sin B$ (minus sign). Hyperbolic has **plus** sign in both terms.

---

### Differentiation Summary Table

| Situation | Formula |
|---|---|
| Power | $\frac{d}{dx}(x^n)=nx^{n-1}$ |
| Product | $\frac{d}{dx}(uv)=uv'+vu'$ |
| Quotient | $\frac{d}{dx}(u/v)=(vu'-uv')/v^2$ |
| Chain | $\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}$ |
| Exponential | $\frac{d}{dx}(e^{f(x)})=f'(x)e^{f(x)}$ |

---

## 5. Inverse Functions, Logarithms & Inverse Hyperbolic Functions

### Functions

A function gives **exactly one output** for each input. Test: **Vertical Line Test** (vertical line cuts graph at most once).

---

### One-to-One (1-1) Functions

- **One output for each input AND one input for each output**
- Always strictly increasing or decreasing
- Test: **Horizontal Line Test** (horizontal line cuts graph at most once)

**Three ways to prove 1-1:**
1. Horizontal line test from graph
2. Derivative always positive or always negative
3. Algebraically: $f(x_1)=f(x_2)\implies x_1=x_2$

**Why it matters:** Only 1-1 functions have inverse functions.

---

### Inverse Functions

If $f$ maps $x\to y$, then $f^{-1}$ maps $y\to x$.

> $f^{-1}(x) \neq \frac{1}{f(x)}$ — the $-1$ is notation for inverse, NOT a power.

**Key identities:**
$$f(f^{-1}(x)) = x \qquad f^{-1}(f(x)) = x$$

**Graph:** $f^{-1}$ is the reflection of $f$ in the line $y=x$.

**Method 1 (use definition):** Substitute $f^{-1}(x)$ into $f$ and solve.

**Method 2 (swap and solve):**
1. Write $y = f(x)$
2. Swap $x$ and $y$
3. Solve for $y$ → that is $f^{-1}(x)$

**Example:** $f(x)=4x+3$:
- Swap: $x=4y+3$
- Solve: $f^{-1}(x) = \frac{1}{4}(x-3)$

**Full example:** $f(x) = \frac{x+4}{x-2}$
- Prove 1-1: $f'(x) = \frac{-6}{(x-2)^2} < 0$ always → always decreasing → 1-1
- Find inverse: swap $x$ and $y$, solve → $f^{-1}(x) = \frac{2x+4}{x-1}$

---

### The Logarithm Function

**Definition:** $y=\ln x \iff x=e^y$ (inverse of $e^x$)

**Key identities:**
$$\ln(e^x) = x \qquad e^{\ln x} = x \quad (x>0)$$

**Notation:** In university maths, $\log x = \ln x = \log_e x$ (NOT $\log_{10}$).

**Log laws:**
$$\ln(AB) = \ln A + \ln B$$
$$\ln(A/B) = \ln A - \ln B$$
$$\ln A^C = C\ln A$$

**Derivative of $\ln x$:**
$$\frac{d}{dx}(\ln x) = \frac{1}{x}$$

**With chain rule:**
$$\frac{d}{dx}(\ln u) = \frac{1}{u}\cdot\frac{du}{dx} = \frac{u'}{u}$$

**Examples:**
- $\frac{d}{dx}\ln(3x^2) = \frac{6x}{3x^2} = \frac{2}{x}$
- $\frac{d}{dx}\ln(5+\sin x) = \frac{\cos x}{5+\sin x}$

---

### Logarithmic Differentiation

For complicated products/quotients/powers: take $\ln$ of both sides, apply log laws, differentiate.

**Derivative of $a^x$:**
$$\frac{d}{dx}(a^x) = (\ln a)\cdot a^x$$

**Example 1:** $y=3^x$: $\ln y = x\ln 3$, differentiate: $\frac{1}{y}\frac{dy}{dx}=\ln 3$, so $\frac{dy}{dx}=(\ln 3)\cdot 3^x$

**Example 2:** $y=(3x^4+7x^2)^7(2-x)^5$:
$$\ln y = 7\ln(3x^4+7x^2)+5\ln(2-x)$$
$$\frac{1}{y}\frac{dy}{dx} = \frac{7(12x^3+14x)}{3x^4+7x^2} - \frac{5}{2-x}$$
$$\frac{dy}{dx} = y\cdot\left[\frac{7(12x^3+14x)}{3x^4+7x^2} - \frac{5}{2-x}\right]$$

---

### Inverse Hyperbolic Functions

| Function | Domain | Range |
|---|---|---|
| $\sinh^{-1}x$ | $(-\infty,\infty)$ | $\mathbb{R}$ |
| $\cosh^{-1}x$ | $x\geq 1$ | $y\geq 0$ |
| $\tanh^{-1}x$ | $-1<x<1$ | $\mathbb{R}$ |

Note: $\cosh$ must be restricted to $x\geq 0$ to make it 1-1 before inverting.

**Derivatives of inverse hyperbolic functions:**
$$\frac{d}{dx}\sinh^{-1}x = \frac{1}{\sqrt{1+x^2}}$$
$$\frac{d}{dx}\cosh^{-1}x = \frac{1}{\sqrt{x^2-1}}$$
$$\frac{d}{dx}\tanh^{-1}x = \frac{1}{1-x^2}$$

**Proof of $\frac{d}{dx}\sinh^{-1}x$:** Let $y=\sinh^{-1}x$, so $x=\sinh y$. Differentiate: $1=\cosh y\cdot\frac{dy}{dx}$, so $\frac{dy}{dx}=\frac{1}{\cosh y}=\frac{1}{\sqrt{1+\sinh^2 y}}=\frac{1}{\sqrt{1+x^2}}$.

---

### Integrals Associated with Inverse Hyperbolic Functions

$$\int\frac{dx}{\sqrt{a^2+x^2}} = \sinh^{-1}\!\left(\frac{x}{a}\right)+C = \ln\!\left(x+\sqrt{x^2+a^2}\right)+C$$

$$\int\frac{dx}{\sqrt{x^2-a^2}} = \cosh^{-1}\!\left(\frac{x}{a}\right)+C = \ln\!\left(x+\sqrt{x^2-a^2}\right)+C$$

$$\int\frac{dx}{1-x^2} = \tanh^{-1}x+C = \frac{1}{2}\ln\!\left|\frac{1+x}{1-x}\right|+C$$

$$\int\frac{dx}{a^2-x^2} = \begin{cases}\frac{1}{a}\tanh^{-1}\!\left(\frac{x}{a}\right)+C & |x|<a \\ \frac{1}{a}\coth^{-1}\!\left(\frac{x}{a}\right)+C & |x|>a\end{cases}$$

$$\int\cosh x\,dx = \sinh x+C \qquad \int\sinh x\,dx = \cosh x+C \qquad \int\tanh x\,dx = \ln\cosh x+C$$

---

## 6. Integration

### Primitive Functions (Indefinite Integrals)

$F$ is a **primitive** of $f$ if $F'(x)=f(x)$.

If $F$ and $G$ are both primitives of $f$, they differ only by a constant: $F(x)=G(x)+C$.

**Standard Primitive Rules:**

| Integral | Result |
|---|---|
| $\int x^n\,dx$ | $\frac{x^{n+1}}{n+1}+C \quad (n\neq -1)$ |
| $\int\frac{1}{x}\,dx$ | $\ln|x|+C$ |
| $\int e^x\,dx$ | $e^x+C$ |
| $\int e^{ax}\,dx$ | $\frac{1}{a}e^{ax}+C$ |
| $\int\sin x\,dx$ | $-\cos x+C$ |
| $\int\cos x\,dx$ | $\sin x+C$ |
| $\int\sin(ax)\,dx$ | $-\frac{1}{a}\cos(ax)+C$ |
| $\int\cos(ax)\,dx$ | $\frac{1}{a}\sin(ax)+C$ |
| $\int a^x\,dx$ | $\frac{a^x}{\ln a}+C$ |
| $\int k\cdot f(x)\,dx$ | $k\int f(x)\,dx$ |
| $\int[f+g]\,dx$ | $\int f\,dx + \int g\,dx$ |

---

### Riemann Sums

**Idea:** Approximate area under curve with $n$ thin rectangles; take limit as $n\to\infty$.

$$\int_a^b f(x)\,dx = \lim_{n\to\infty}\sum_{i=1}^n f(x_i)\cdot\frac{b-a}{n}$$

**Useful series formulas:**
$$\sum_{i=1}^n 1 = n, \qquad \sum_{i=1}^n i = \frac{n(n+1)}{2}, \qquad \sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}, \qquad \sum_{i=1}^n i^3 = \left(\frac{n(n+1)}{2}\right)^2$$

**Worked example:** Area between $f(x)=x^2$, $x=0$, $x=5$:
- $\Delta x = 5/n$, $x_i = 5i/n$
- Sum: $\frac{125}{n^3}\sum_{i=1}^n i^2 = \frac{125}{n^3}\cdot\frac{n(n+1)(2n+1)}{6}$
- Limit as $n\to\infty$: $\frac{125}{6}\cdot 2 = \frac{125}{3}$

---

### Definite Integral

$$\int_a^b f(x)\,dx = \lim_{n\to\infty}\sum_{i=1}^n f(x_i)\,\Delta x_i$$

- $\int$ = elongated S for "Sum"; $a$ = lower limit, $b$ = upper limit
- Can be **negative** (signed area — below $x$-axis contributes negatively)

**Properties:**
1. $\int_a^b f = -\int_b^a f$ (reversing limits negates)
2. $\int_a^b kf = k\int_a^b f$
3. $\int_a^c f = \int_a^b f + \int_b^c f$ (interval additivity)
4. $\int_a^a f = 0$
5. $\int_a^b[f+g] = \int_a^b f + \int_a^b g$

---

### Area So Far Function

$$A(x) = \int_a^x f(t)\,dt \quad (a\leq x\leq b)$$

$A(a)=0$; as $x$ increases, $A(x)$ accumulates signed area.

---

### Fundamental Theorem of Calculus

**Part 1:** If $A(x)=\int_a^x f(t)\,dt$, then $A'(x)=f(x)$

→ Differentiating the area function gives back $f$.

**Part 2:** If $F$ is any primitive of $f$, then:

$$\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)$$

**Method:**
1. Find primitive $F(x)$ (drop $+C$)
2. Evaluate $F(b)-F(a)$

**Examples:**
- $\int_1^4 x^2\,dx = \left[\frac{x^3}{3}\right]_1^4 = \frac{64}{3}-\frac{1}{3} = 21$
- $\int_0^\pi\sin x\,dx = [-\cos x]_0^\pi = 1+1 = 2$
- $\int_0^1 e^{2x}\,dx = \left[\frac{1}{2}e^{2x}\right]_0^1 = \frac{e^2-1}{2}$

---

### Average Value of a Function

$$\bar{f} = \frac{1}{b-a}\int_a^b f(x)\,dx$$

→ Height of rectangle on $[a,b]$ with same area as the curve.

**Example:** Average of $x^2$ on $[0,3]$: $\bar{f}=\frac{1}{3}\left[\frac{x^3}{3}\right]_0^3 = \frac{1}{3}\cdot 9 = 3$

---

### Root-Mean-Square (RMS) Value

$$f_{\text{RMS}} = \sqrt{\frac{1}{b-a}\int_a^b [f(x)]^2\,dx}$$

Steps: **Square** → **Mean (average)** → **Root**. Work backwards from "Root Mean Square".

**Identity needed for $\sin^2/\cos^2$:**
$$\sin^2 A = \frac{1-\cos(2A)}{2}, \qquad \cos^2 A = \frac{1+\cos(2A)}{2}$$

**RMS of sinusoidal current** $f(x)=I_0\sin(\omega x)$ on $[0,\pi/\omega]$:
- Square: $I_0^2\sin^2(\omega x) = I_0^2\cdot\frac{1-\cos(2\omega x)}{2}$
- Integrate: $\cos(2\omega x)$ integrates to zero over a full period
- Result: $f_{\text{RMS}} = \frac{I_0}{\sqrt{2}} \approx 0.707\,I_0$

> Household 240V: the **RMS** value; peak is $240\sqrt{2}\approx 339$V.

---

### Trapezoidal Rule (Numerical Integration)

Used when: no elementary primitive exists, or data is tabular.

With $n$ sub-intervals of width $h=\frac{b-a}{n}$, values $y_i=f(a+ih)$:

$$\int_a^b f(x)\,dx \approx \frac{h}{2}\left[y_0 + y_n + 2\sum_{i=1}^{n-1}y_i\right]$$

**Memory trick:** "Endpoints once, midpoints twice, multiply by $\frac{h}{2}$"

**Overestimates** when concave up; **underestimates** when concave down.

**Example:** $\int_1^5\frac{1}{x}\,dx$, $n=4$, $h=1$:
$$\approx\frac{1}{2}[1.0+2(0.5)+2(0.333)+2(0.25)+0.2] = \frac{1}{2}(3.367)=1.683$$
Exact: $\ln 5\approx 1.609$. Error $\approx 4.6\%$.

---

## 7. Methods of Integration

### Method 1 — Substitution (Reversing the Chain Rule)

**Core pattern:** If integrand looks like $f(g(x))\cdot g'(x)$:
$$\int f(g(x))\cdot g'(x)\,dx = F(g(x))+C$$

**Example:** $\int 2x\cos(x^2)\,dx$: $u=x^2$, $du=2x\,dx$ → $\sin(x^2)+C$

**When derivative is off by a constant:**
$$\int\cos(5x)\,dx = \frac{1}{5}\int 5\cos(5x)\,dx = \frac{1}{5}\sin(5x)+C$$

**Formal substitution steps:**
1. Choose $u=g(x)$ (the inner part)
2. Differentiate: $du=g'(x)\,dx$
3. Replace every $x$ and $dx$ with $u$ and $du$ — **no mixed variables**
4. Integrate in $u$
5. Substitute back in terms of $x$

**Full substitution (when $x$ appears outside):**
$\int x\sqrt{x-1}\,dx$: let $u=x-1$, so $x=u+1$, $dx=du$:
$$\int(u+1)\sqrt{u}\,du = \int u^{3/2}+u^{1/2}\,du = \frac{2}{5}(x-1)^{5/2}+\frac{2}{3}(x-1)^{3/2}+C$$

**Definite integrals — two methods:**
- **Method A:** Change limits ($x=a\to u=g(a)$, $x=b\to u=g(b)$), integrate in $u$ with new limits
- **Method B:** Integrate in $u$, convert back to $x$, then apply original limits

**Example:** $\int_1^2\sqrt{4x+3}\,dx$, $u=4x+3$, $dx=du/4$:
- Method A: new limits $u=7$ to $u=11$: $\frac{1}{4}\cdot\frac{2}{3}[u^{3/2}]_7^{11}=\frac{1}{6}(11^{3/2}-7^{3/2})$
- Method B: same answer

**Using a table:** Match form with table entry using substitution. Example: $\int\frac{1}{\sqrt{1-9x^2}}\,dx$ — let $u=3x$, get $\frac{1}{3}\arcsin(3x)+C$.

---

### Method 2 — Integration by Parts

**Reverses the product rule.** Use when integrand is a product of two unrelated functions.

**Formula:**
$$\int u\,dv = uv - \int v\,du$$

**Steps:**
1. Split integrand: choose $u$ and $dv$
2. Find $du$ (differentiate $u$) and $v$ (integrate $dv$)
3. Apply formula; evaluate remaining integral

**LIATE rule** for choosing $u$ (pick whichever comes first):

| Letter | Type | Examples |
|---|---|---|
| **L** | Logarithm | $\ln x$ |
| **I** | Inverse trig | $\arcsin x$, $\arctan x$ |
| **A** | Algebraic (polynomial) | $x^2$, $x^3$ |
| **T** | Trigonometric | $\sin x$, $\cos x$ |
| **E** | Exponential | $e^x$ |

**Type 1 — Polynomial × Exponential:**
$\int xe^x\,dx$: $u=x$, $dv=e^x\,dx$, $du=dx$, $v=e^x$:
$$= xe^x - \int e^x\,dx = xe^x - e^x + C = e^x(x-1)+C$$

**Type 2 — Polynomial × Trig:**
$\int x\sin x\,dx$: $u=x$, $dv=\sin x\,dx$, $v=-\cos x$:
$$= -x\cos x + \int\cos x\,dx = -x\cos x+\sin x+C$$

**Type 3 — Polynomial × Logarithm:**
$\int x\ln x\,dx$: $u=\ln x$ (L comes before A), $dv=x\,dx$, $du=\frac{1}{x}dx$, $v=\frac{x^2}{2}$:
$$= \frac{x^2}{2}\ln x - \int\frac{x}{2}\,dx = \frac{x^2}{2}\ln x - \frac{x^2}{4}+C$$

Special case — $\int\ln x\,dx$: write as $\int\ln x\cdot 1\,dx$, $u=\ln x$, $dv=dx$:
$$= x\ln x - \int 1\,dx = x\ln x - x+C$$

**Type 4 — Exponential × Trig (The Loop):**
$\int e^x\sin x\,dx$: apply by parts **twice**, consistently choosing $u=e^x$:
- First: $\int e^x\sin x\,dx = -e^x\cos x + \int e^x\cos x\,dx$
- Second: $\int e^x\cos x\,dx = e^x\sin x - \int e^x\sin x\,dx$
- Call original integral $I$: $I = -e^x\cos x + e^x\sin x - I$
- $2I = e^x(\sin x - \cos x)$

$$\boxed{I = \frac{e^x(\sin x-\cos x)}{2}+C}$$

> Always be consistent with which function is $u$ — if you switch, you get $0=0$.

**Verify:** Differentiate your answer; it should give back the original integrand.

---

### Method 3 — Integration by Partial Fractions

**Purpose:** Integrate rational functions $\frac{p(x)}{q(x)}$ by splitting into simpler fractions.

**Before starting — two checks:**
1. Is degree of numerator **less than** degree of denominator? If no → do **polynomial long division** first.
2. Is numerator already a multiple of the derivative of denominator? If yes → use log rule:
   $$\int\frac{f'(x)}{f(x)}\,dx = \ln|f(x)|+C$$
   Example: $\int\frac{2x}{x^2+1}\,dx = \ln|x^2+1|+C$

**Steps:**
1. Factorise the denominator completely
2. Write the fraction as sum of simpler fractions with unknown constants
3. Multiply both sides by the denominator to clear fractions
4. Solve for constants (substitution or equating coefficients)
5. Integrate each term

---

**Case 1 — Distinct linear factors:**

Each $(x-a)$ in denominator → $\frac{A}{x-a}$ term.

$\int\frac{1}{(x+2)(x-1)}\,dx$:
$$\frac{1}{(x+2)(x-1)} = \frac{A}{x+2}+\frac{B}{x-1}$$
$$1 = A(x-1)+B(x+2)$$
- $x=1$: $B=\frac{1}{3}$
- $x=-2$: $A=-\frac{1}{3}$
$$= -\frac{1}{3}\ln|x+2|+\frac{1}{3}\ln|x-1|+C$$

---

**Case 2 — Irreducible quadratic factor ($b^2-4c<0$):**

Each irreducible quadratic $x^2+bx+c$ → $\frac{Ax+B}{x^2+bx+c}$ term.

$\frac{5x+1}{(x-1)(x^2+1)}$:
$$= \frac{A}{x-1}+\frac{Bx+C}{x^2+1}$$
$x=1$: $A=3$; equate $x^2$ coeff: $B=-3$; equate constants: $C=2$.
$$\int = 3\ln|x-1| - \frac{3}{2}\ln|x^2+1| + 2\arctan(x)+C$$

---

**Case 3 — Quadratic denominator with no linear factors (Completing the Square):**

**Completing the square:** $x^2+bx+c = \left(x+\frac{b}{2}\right)^2+\left(c-\frac{b^2}{4}\right)$

**Arctan formula:**
$$\int\frac{1}{x^2+a^2}\,dx = \frac{1}{a}\arctan\!\left(\frac{x}{a}\right)+C$$

**Example:** $\int\frac{2x+5}{x^2+6x+13}\,dx$
- Derivative of denominator: $2x+6$
- Write $2x+5=(2x+6)-1$, split into two integrals
- First: $\int\frac{2x+6}{x^2+6x+13}\,dx = \ln|x^2+6x+13|$
- Complete square: $x^2+6x+13=(x+3)^2+4$
- Second: $\int\frac{1}{(x+3)^2+4}\,dx = \frac{1}{2}\arctan\!\left(\frac{x+3}{2}\right)$
$$= \ln|x^2+6x+13|-\frac{1}{2}\arctan\!\left(\frac{x+3}{2}\right)+C$$

---

**Case 4 — Repeated linear factors:**
$$\frac{p(x)}{(x-a)^2} = \frac{A}{x-a}+\frac{B}{(x-a)^2}$$

---

### Decision Table — Which Method?

| Situation | Method |
|---|---|
| Composite function $f(g(x))\cdot g'(x)$ | Substitution |
| Product of two unrelated functions | Integration by Parts (LIATE) |
| Rational $\frac{p(x)}{q(x)}$, numerator NOT derivative of denominator | Partial Fractions |
| Numerator IS (multiple of) derivative of denominator | Log rule directly |
| Quadratic denom, no real roots, no matching numerator | Complete the square + arctan |

**Key Integration Formulas Reference:**

$$\int\frac{1}{x}\,dx=\ln|x|+C \qquad \int\frac{f'}{f}\,dx=\ln|f|+C \qquad \int e^{kx}\,dx=\frac{1}{k}e^{kx}+C$$
$$\int\sin x\,dx=-\cos x+C \qquad \int\cos x\,dx=\sin x+C$$
$$\int\frac{1}{x^2+a^2}\,dx=\frac{1}{a}\arctan\!\left(\frac{x}{a}\right)+C \qquad \int\frac{1}{\sqrt{a^2-x^2}}\,dx=\arcsin\!\left(\frac{x}{a}\right)+C$$
$$\int u\,dv = uv-\int v\,du \qquad \int\frac{A}{x-a}\,dx=A\ln|x-a|+C$$

**Common mistakes:**
- Mixing $u$ and $x$ after substitution
- Forgetting to change limits in definite integrals with substitution
- Wrong LIATE choice (pick function earlier in the list as $u$)
- Forgetting to apply by parts twice in exp×trig type
- Doing partial fractions when numerator degree ≥ denominator degree (do long division first)
- Forgetting $+C$ in indefinite integrals

---

## 8. Complex Numbers

### The Number System Hierarchy

Each extension was created to solve a new type of equation:

| Problem | Needed | New numbers |
|---|---|---|
| $x=1+2$ | Positive integers | $3$ |
| $x=1-2$ | Negatives | $-1$ |
| $2x=5$ | Fractions | $\frac{5}{2}$ |
| $x^2=2$ | Irrationals | $\sqrt{2}$ |
| Circumference of circle | Transcendentals | $\pi$, $e$ |
| $x^2=-2$ | **Complex numbers** | $i=\sqrt{-1}$ |

**Containment chain:**
$$\mathbb{Z}^+ \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$$

---

### Types of Numbers

- **Positive integers** $\mathbb{Z}^+$: $1,2,3,\ldots$
- **Integers** $\mathbb{Z}$: $\ldots,-2,-1,0,1,2,\ldots$ (subtraction)
- **Rational** $\mathbb{Q}$: $\frac{p}{q}$, $p,q\in\mathbb{Z}$, $q\neq 0$ (division)
- **Irrational**: e.g. $\sqrt{2}$ — infinite, non-repeating decimal; cannot be written as fraction
- **Transcendental**: e.g. $\pi,e$ — not even a root of a rational polynomial
- **Real** $\mathbb{R}$: all of the above; every point on the number line

---

### The Imaginary Unit

$$i^2 = -1 \qquad i = \sqrt{-1}$$

**Powers of $i$ cycle with period 4:**
| $i^1=i$ | $i^2=-1$ | $i^3=-i$ | $i^4=1$ | $i^5=i$ | $\ldots$ |

To find $i^n$: divide $n$ by 4, use the remainder.

**Example:** Solve $x^2=-4$:
$$x = \pm\sqrt{-4} = \pm\sqrt{4}\cdot\sqrt{-1} = \pm 2i$$
Check: $(2i)^2 = 4i^2 = 4(-1) = -4$ ✓

---

### Complex Numbers

A **complex number** has the form:
$$z = a + ib$$
- $a = \text{Re}(z)$ — real part
- $b = \text{Im}(z)$ — imaginary part
- Set of all complex numbers: $\mathbb{C}$

**Examples:**
- $z=3+5i$: Re $=3$, Im $=5$
- $z=4$: purely real (Im $=0$)
- $z=5i$: purely imaginary (Re $=0$)

---

### The Complex Plane (Argand Diagram)

- Plot $z=a+ib$ as the point $(a,b)$ in 2D
- Horizontal axis = **real axis**
- Vertical axis = **imaginary axis**
- Real numbers lie on the real axis; purely imaginary on the imaginary axis

---

### Why Complex Numbers Matter

Used in:
- Electrical engineering (AC circuits, impedance)
- Signal processing (Fourier transforms)
- Quantum mechanics (wave functions)
- Fluid dynamics and aerodynamics
- Control systems (stability analysis)

---

## 9. First Order Differential Equations

### What is a Differential Equation (DE)?

A DE contains **derivatives** of a function. The solution is a **function**, not just a number.

**Key idea:** Derivatives describe rates of change, so DEs model every real-world situation involving change.

**Preliminary example — car acceleration:**
$a(t) = 10-\frac{5}{4}t$, so $\frac{dv}{dt}=10-\frac{5}{4}t$. Integrate:
$$v(t) = 10t-\frac{5}{8}t^2+C$$
Apply $v(0)=0$: $C=0$. Particular solution: $v(t)=10t-\frac{5}{8}t^2$.

---

### General vs Particular Solution

- **General solution**: contains arbitrary constants; represents all possible solutions
  - 1st order DE → 1 arbitrary constant
  - 2nd order DE → 2 arbitrary constants
- **Particular solution**: constants determined by initial conditions

---

### Initial Value Problems (IVPs)

DE + initial conditions = unique particular solution. Solve DE, get general solution, substitute initial conditions to find constants.

---

### Terminology

- **Independent variable**: input (often $x$ or $t$)
- **Dependent variable**: output/function being solved for (often $y$, $v$, $T$)

---

### Order of a DE

Highest derivative present = order.

| Order | Highest derivative |
|---|---|
| 1st | $y'$ or $\frac{dy}{dx}$ |
| 2nd | $y''$ or $\frac{d^2y}{dx^2}$ |
| 3rd | $y'''$ |

---

### Linearity of DEs

A **linear DE** has $y$ and all its derivatives appearing only to the **first power**, never multiplied together.

Standard form: $a_n(x)y^{(n)} + \cdots + a_1(x)y' + a_0(x)y = f(x)$

| Linear ✓ | Non-linear ✗ | Reason |
|---|---|---|
| $y'+2y=x$ | $y'+y^2=x$ | $y$ squared |
| $y''-5y'+6y=e^x$ | $yy''=1$ | $y$ multiplied by $y''$ |
| $x^2y'+xy=\sin x$ | $(y')^2+y=0$ | $y'$ squared |
| $y'=3x^2$ | $y'=\sqrt{y}$ | $y$ to power $\frac{1}{2}$ |

---

### Separation of Variables

**Applies to:** 1st order DEs of the form $\frac{dy}{dx} = g(x)\cdot h(y)$

**Steps:**
1. Separate: $\frac{1}{h(y)}\,dy = g(x)\,dx$
2. Integrate both sides: $\int\frac{1}{h(y)}\,dy = \int g(x)\,dx$
3. Solve for $y$ (general solution)
4. Apply initial conditions (particular solution)

**Key integral:** $\int\frac{g'(x)}{g(x)}\,dx = \ln|g(x)|+C$

---

### Exponential Growth and Decay

DE: $\frac{dy}{dx} = ky$

Separate and integrate:
$$\frac{dy}{y}=k\,dx \implies \ln|y|=kx+C_1 \implies y=Ae^{kx}$$

- $k>0$: exponential **growth** (population, compound interest)
- $k<0$: exponential **decay** (radioactive decay, drug elimination, cooling)
- $A=y(0)$ = initial value

> Whenever rate of change is proportional to current value → solution is always exponential.

---

### Newton's Law of Cooling

$$\frac{dT}{dt} = k(T-T_0)$$

- $T$ = object temperature, $T_0$ = ambient temperature, $k<0$ for cooling

**General solution:**
$$T(t) = T_0 + Ae^{kt}$$

**Full worked example — Coffee cooling:**
- Given: $T(0)=90°C$, $T_0=22°C$, $T(5)=80°C$
- Step 1: $T(t)=22+Ae^{kt}$
- Step 2: $T(0)=90 \implies A=68$
- Step 3: $T(5)=80$: $58=68e^{5k}$, $k=\frac{1}{5}\ln\frac{29}{34}\approx -0.032$
- Step 4: Find $T=60$: $38=68e^{kt}$, $t=\frac{5\ln(19/34)}{\ln(29/34)}\approx 18.25$ min

---

### The Integrating Factor Method

**Applies to:** 1st order **linear** DEs in standard form:
$$\frac{dy}{dx} + P(x)y = Q(x)$$

**Integrating factor:**
$$I(x) = e^{\int P(x)\,dx}$$

**Full method — step by step:**
1. Rearrange to standard form: $y' + P(x)y = Q(x)$
2. Find $I = e^{\int P(x)\,dx}$
3. Multiply both sides by $I$
4. Recognise LHS as $\frac{d}{dx}[Iy]$
5. Integrate both sides: $Iy = \int IQ(x)\,dx + C$
6. Solve for $y$: $y = \frac{1}{I}\left[\int IQ(x)\,dx + C\right]$
7. Apply initial conditions to find $C$

**Worked example 1:** $\frac{dy}{dx} - 2y = e^{3x}$
- $P(x)=-2$, $Q(x)=e^{3x}$
- $I = e^{-2x}$
- Multiply: $e^{-2x}y'-2e^{-2x}y = e^x$, i.e. $\frac{d}{dx}[e^{-2x}y]=e^x$
- Integrate: $e^{-2x}y = e^x+C$
- Solution: $\boxed{y = e^{3x}+Ce^{2x}}$

**Worked example 2:** $x\frac{dy}{dx}+y=x^3$
- Standard form (divide by $x$): $y'+\frac{1}{x}y=x^2$, $P=\frac{1}{x}$
- $I = e^{\int\frac{1}{x}\,dx} = e^{\ln x}=x$
- Multiply: $xy'+y=x^3$, i.e. $\frac{d}{dx}[xy]=x^3$
- Integrate: $xy=\frac{x^4}{4}+C$
- Solution: $\boxed{y = \frac{x^3}{4}+\frac{C}{x}}$

**Note on $\int\frac{1}{x}\,dx$:** The integrating factor becomes $e^{\ln|x|}=x$ (for $x>0$).

---

### Choosing the Right Method

| Situation | Method |
|---|---|
| $\frac{dy}{dx}=g(x)h(y)$ (separable) | Separation of Variables |
| $\frac{dy}{dx}+P(x)y=Q(x)$ (linear 1st order) | Integrating Factor |
| Given solution, asked to verify | Substitute and check |
| General solution + initial condition | Substitute to find constant |

---

### Verification Example (2nd Order)

Verify $y=A\sin(3x)+B\cos(3x)$ satisfies $y''+9y=0$:
- $y'=3A\cos(3x)-3B\sin(3x)$
- $y''=-9A\sin(3x)-9B\cos(3x)$
- $y''+9y = -9A\sin(3x)-9B\cos(3x)+9A\sin(3x)+9B\cos(3x) = 0$ ✓

---

### Common Mistakes

- Forgetting constant $C$
- Not rearranging to standard form before using integrating factor
- Treating $y$ as a constant when integrating w.r.t. $x$
- Forgetting $|\cdot|$ in $\ln|y|$
- Confusing **order** (highest derivative) with **degree** (power that derivative is raised to)
- Thinking linearity means the graph is a straight line (it doesn't)

---

## 10. Second Order Differential Equations

### What is a 2nd Order DE?

Describes a connection between a function and its derivatives, involving $\frac{d^2y}{dt^2}$.

**Key quantities:**
- $y$ — value of the function
- $\frac{dy}{dt}$ — rate of change (velocity/slope)
- $\frac{d^2y}{dt^2}$ — rate of change of rate of change (acceleration/curvature)

---

### Real-World Examples

| System | DE |
|---|---|
| Pendulum | $\frac{d^2\theta}{dt^2}+\frac{g}{\ell}\sin\theta=0$ |
| Waves | $\frac{d^2u}{dx^2}+k^2u=0$ |
| Schrödinger (quantum) | $\frac{\hbar}{2m}\frac{d^2\psi}{dx^2}+(E-V(x))\psi=0$ |
| Orbital dynamics | $\frac{d^2u}{d\theta^2}+u=\frac{k}{mh^2}$ |

**Mass-spring system:**
$$F_\text{res}=-ky \implies m\frac{d^2y}{dt^2}=-ky \implies \frac{d^2y}{dt^2}=-\frac{k}{m}y$$
At each point, curvature $\propto -y$ → solution **oscillates** (sine/cosine).

---

### Directly Integrable DEs

Any DE of the form $\frac{d^n y}{dt^n} = f(t)$: **integrate $n$ times**, adding one constant each time.

**Procedure:**
1. Integrate both sides w.r.t. independent variable
2. Add constant $+C$ each time
3. Repeat until $y$ is isolated
4. Apply initial conditions to find all constants (→ **complete solution**)

---

**Worked Example 1 — Polynomial:**
$$\frac{d^2y}{dx^2} = 2x+1$$

Integrate once: $\frac{dy}{dx} = x^2+x+C$

Integrate again:
$$\boxed{y(x) = \frac{1}{3}x^3 + \frac{1}{2}x^2 + Cx + D}$$

Two integrations → two constants $C$ and $D$.

---

**Worked Example 2 — Ballistic Trajectory:**

Projectile under gravity: $\frac{d^2y}{dt^2} = -g$

Integrate once: $\frac{dy}{dt} = -gt+C$

Integrate again: $y(t) = -\frac{1}{2}gt^2+Ct+D$

Apply initial conditions at $t=0$:
- $y(0)=y_0 \implies D=y_0$
- $y'(0)=u$ (initial velocity) $\implies C=u$

$$\boxed{y(t) = -\frac{1}{2}gt^2 + ut + y_0}$$

This is the kinematic equation $s=ut+\frac{1}{2}at^2$ ✓

---

### General vs Complete Solution

| Term | Definition |
|---|---|
| **General Solution** | Contains arbitrary constants; valid for any initial conditions |
| **Complete Solution** | Constants determined by specific initial conditions |

A 2nd order DE requires **two initial conditions** (e.g. $y(0)$ and $y'(0)$).

---

### Connections to Other Topics

- The directly integrable type is the simplest 2nd order DE
- The mass-spring DE $\frac{d^2y}{dt^2}=-\frac{k}{m}y$ is **not** directly integrable → requires other methods (characteristic equation, ansatz) — studied in later courses
- Newton's law of cooling (1st order) → separation of variables or integrating factor

---

### Summary of Key Rules

| Rule | Statement |
|---|---|
| $\frac{d^n y}{dt^n}=f(t)$ | Integrate $n$ times; get $n$ constants |
| Each integration | Adds one arbitrary constant |
| Initial conditions | $y(0)$ and $y'(0)$ pin down both constants for 2nd order |
| Physical intuition | Sign of $\frac{d^2y}{dt^2}$ tells you if curve is concave up/down |

---

## Master Formula Reference

### Vectors
$$\mathbf{a}\cdot\mathbf{b}=a_1b_1+a_2b_2+a_3b_3=|\mathbf{a}||\mathbf{b}|\cos\theta$$
$$\theta=\cos^{-1}\!\left(\frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}\right), \qquad \hat{\mathbf{a}}=\frac{\mathbf{a}}{|\mathbf{a}|}, \qquad \text{proj}_{\hat{\mathbf{b}}}\mathbf{a}=(\mathbf{a}\cdot\hat{\mathbf{b}})\hat{\mathbf{b}}$$

$$\mathbf{a}\times\mathbf{b}=\begin{vmatrix}\hat{i}&\hat{j}&\hat{k}\\a_1&a_2&a_3\\b_1&b_2&b_3\end{vmatrix}, \qquad |\mathbf{a}\times\mathbf{b}|=|\mathbf{a}||\mathbf{b}|\sin\theta$$

### Differentiation
$$\frac{d}{dx}(x^n)=nx^{n-1}, \quad \frac{d}{dx}(e^x)=e^x, \quad \frac{d}{dx}(\ln x)=\frac{1}{x}, \quad \frac{d}{dx}(a^x)=(\ln a)a^x$$
$$\cosh^2 x-\sinh^2 x=1, \quad \frac{d}{dx}(\sinh x)=\cosh x, \quad \frac{d}{dx}(\cosh x)=\sinh x, \quad \frac{d}{dx}(\tanh x)=\text{sech}^2 x$$

### Integration
$$\int_a^b f\,dx=F(b)-F(a), \quad \bar{f}=\frac{1}{b-a}\int_a^b f\,dx, \quad f_\text{RMS}=\sqrt{\frac{1}{b-a}\int_a^b f^2\,dx}$$
$$\int\frac{1}{x^2+a^2}\,dx=\frac{1}{a}\arctan\!\left(\frac{x}{a}\right)+C, \quad \int\frac{1}{\sqrt{a^2-x^2}}\,dx=\arcsin\!\left(\frac{x}{a}\right)+C$$

### Differential Equations
$$I(x)=e^{\int P(x)\,dx}, \qquad x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)} \text{ (Newton's method)}$$
$$T(t)=T_0+Ae^{kt} \text{ (Newton's cooling)}, \qquad y=Ae^{kx} \text{ (exponential growth/decay)}$$
