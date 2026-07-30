
> [!faq] About this Lecture 
> Class: 33130
> Subject: #mathematicsOne
> Date: 25/02/2025 
> Topics: #math #vectors #3D

# Vector Representation of Lines and Planes

## Position Vectors

A **position vector** describes the location of a point in 3D space. It is written using the symbol $\mathbf{r}$:

$$\mathbf{r} = x\hat{i} + y\hat{j} + z\hat{k} = \langle x, y, z \rangle$$

- $\hat{i}$, $\hat{j}$, $\hat{k}$ are the **unit vectors** pointing along the $x$, $y$, and $z$ axes respectively
- $x$, $y$, $z$ are the **components** of the vector
- Think of this as: "go $x$ steps in the $x$-direction, $y$ steps in the $y$-direction, $z$ steps in the $z$-direction"

The **magnitude** (length) of the position vector is:

$$|\mathbf{r}| = |\langle x, y, z \rangle| = \sqrt{x^2 + y^2 + z^2}$$

- This is just the 3D version of Pythagoras' theorem
- Example: A sphere of radius 3 centred at the origin is represented by all points where $|\mathbf{r}| = 3$

---

## Parametric vs Cartesian Representations

When $x$, $y$, and $z$ are each functions of a single variable $t$, the result is a **curve in 3D space**.

### Parametric Representation

A **parametric representation** expresses each coordinate as a function of $t$:

$$x(t) = F(t), \quad y(t) = G(t), \quad z(t) = H(t)$$

- $t$ is the **parameter** — think of it as "time" or just a number you plug in to get points on the curve
- Each value of $t$ gives you one specific point $\langle x(t), y(t), z(t) \rangle$ on the curve
- As $t$ changes, you trace out the full curve

**Example (2D):**
- Curve (a): $x(t) = 2t$, $y(t) = -t$
  - At $t=0$: point $(0, 0)$
  - At $t=1$: point $(2, -1)$
  - At $t=3$: point $(6, -3)$
  - This traces out a straight line
- Curve (b): $x(t) = \cos t$, $y(t) = \sin t$
  - At $t=0$: point $(1, 0)$
  - At $t = \frac{\pi}{4}$: point $\left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right)$
  - At $t = \frac{\pi}{2}$: point $(0, 1)$
  - This traces out a **circle** of radius 1

### Cartesian Representation

A **Cartesian representation** expresses the curve as a direct relationship between $x$, $y$, $z$ — with no parameter:

$$f(x) = g(y) = h(z)$$

- You can convert from parametric to Cartesian by **eliminating** $t$
- Example from curve (a): from $x = 2t$ we get $t = \frac{x}{2}$, and from $y = -t$ we get $t = -y$, so the Cartesian form is $\frac{x}{2} = -y$, i.e. $y = -\frac{x}{2}$

---

## Vector Equations of Lines

A straight line in 3D can be written in **vector form** as:

$$\mathbf{r}(t) = \mathbf{a} + t\mathbf{p}$$

Where:
- $\mathbf{a} = \langle a_1, a_2, a_3 \rangle$ is any **known point on the line**
- $\mathbf{p} = \langle p_1, p_2, p_3 \rangle$ is the **direction vector** of the line (points along the line)
- $t$ is a scalar parameter — different values of $t$ give different points on the line
- Think of it as: "start at point $\mathbf{a}$, then move in direction $\mathbf{p}$ by amount $t$"

### Finding the Direction Vector from Two Points

If two points $A$ and $B$ lie on the line, the direction vector is:

$$\mathbf{p} = \overrightarrow{AB} = B - A$$

- Subtract the coordinates of $A$ from $B$ component by component

**Example:** Find the vector equation of the line through $A(1,1,3)$ and $B(2,1,-1)$

- $\mathbf{a} = \langle 1, 1, 3 \rangle$ (use point $A$)
- $\mathbf{p} = \overrightarrow{AB} = \langle 2,1,-1 \rangle - \langle 1,1,3 \rangle = \langle 1, 0, -4 \rangle$
- Vector equation: $\mathbf{r}(t) = \langle 1,1,3 \rangle + t\langle 1,0,-4 \rangle = \langle 1+t,\ 1,\ 3-4t \rangle$

---

## Cartesian Equation of a Line

Starting from the vector equation $\mathbf{r}(t) = \mathbf{a} + t\mathbf{p}$, we can write component by component:

$$x = a_1 + tp_1 \implies t = \frac{x - a_1}{p_1}$$
$$y = a_2 + tp_2 \implies t = \frac{y - a_2}{p_2}$$
$$z = a_3 + tp_3 \implies t = \frac{z - a_3}{p_3}$$

Since all three expressions equal $t$, the **Cartesian (symmetric) equation of a line** is:

$$\frac{x - a_1}{p_1} = \frac{y - a_2}{p_2} = \frac{z - a_3}{p_3}$$

- This eliminates the parameter $t$ entirely
- Each fraction represents the same value of $t$
- The denominator $p_i$ is the $i$-th component of the direction vector
- The numerator $x - a_i$ is how far you are from the known point

**Continuing the example above** ($A(1,1,3)$, $\mathbf{p} = \langle 1,0,-4 \rangle$):

$$\frac{x-1}{1} = \frac{y-1}{0} = \frac{z-3}{-4}$$

> **Note:** When a component of $\mathbf{p}$ is 0, it means the line does not move in that direction. So $p_2 = 0$ means $y = a_2 = 1$ (constant), and you simply write $y = 1$ as a separate condition.

---

# Planes

## What is a Plane?

A **plane** is a flat, infinite 2D surface in 3D space. Any equation of the form:

$$ax + by + cz = \text{const}$$

describes a plane, where $a$, $b$, $c$ are constants.

**Examples:**
- $z = 1$ — a horizontal plane at height 1
- $y = 2$ — a vertical plane at $y = 2$
- $x + y + z = 1$ — a tilted plane cutting all three axes

---

## Vector Representation of a Plane

Any two **non-parallel vectors** $\mathbf{p}$ and $\mathbf{q}$ together define a plane. Any plane can be written as:

$$\mathbf{r}(u, v) = \mathbf{a} + u\mathbf{p} + v\mathbf{q}$$

Where:
- $\mathbf{a}$ is a **known point on the plane**
- $\mathbf{p}$ and $\mathbf{q}$ are **two vectors that lie in the plane** (they define its orientation)
- $u$ and $v$ are **scalar parameters** — varying them gives every point on the plane
- Think of it as: "start at $\mathbf{a}$, then slide $u$ steps in direction $\mathbf{p}$ and $v$ steps in direction $\mathbf{q}$"

**Example:** Find a vector equation of the plane through $A(1,2,3)$ parallel to $\mathbf{p} = \langle 0,1,-1 \rangle$ and $\mathbf{q} = \langle 1,0,-1 \rangle$

- $\mathbf{a} = \langle 1, 2, 3 \rangle$
- The vector equation is: $\mathbf{r}(u,v) = \langle 1,2,3 \rangle + u\langle 0,1,-1 \rangle + v\langle 1,0,-1 \rangle$

---

## Normal Vectors and the Normal Form of a Plane

A plane can also be defined by a **normal vector** $\mathbf{n}$ (a vector perpendicular to the plane) and a point $\mathbf{a}$ on the plane.

### Key Idea

For any point $\mathbf{r}$ on the plane:
- The vector $(\mathbf{r} - \mathbf{a})$ **lies in the plane**
- The vector $(\mathbf{r} - \mathbf{a})$ is always **perpendicular** to the normal $\mathbf{n}$
- Two perpendicular vectors have a **dot product of zero**

Therefore:

$$(\mathbf{r} - \mathbf{a}) \cdot \mathbf{n} = 0$$

This is the **normal (vector) form** of the plane equation.

### Expanding to Cartesian Form

Let $\mathbf{n} = \langle n_1, n_2, n_3 \rangle$, $\mathbf{a} = \langle a_1, a_2, a_3 \rangle$, $\mathbf{r} = \langle x, y, z \rangle$:

$$(\langle x,y,z \rangle - \langle a_1, a_2, a_3 \rangle) \cdot \langle n_1, n_2, n_3 \rangle = 0$$

$$n_1 x + n_2 y + n_3 z - (a_1 n_1 + a_2 n_2 + a_3 n_3) = 0$$

$$\boxed{n_1 x + n_2 y + n_3 z = a_1 n_1 + a_2 n_2 + a_3 n_3}$$

- The **normal vector components** $\langle n_1, n_2, n_3 \rangle$ become the **coefficients** $a$, $b$, $c$ in $ax + by + cz = \text{const}$
- The right-hand side is just a constant (the dot product $\mathbf{a} \cdot \mathbf{n}$)

---

## Finding the Normal Using the Cross Product

If three points $A$, $B$, $C$ lie on a plane, the normal vector can be found using the **cross product**:

$$\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC}$$

- $\overrightarrow{AB} = B - A$ and $\overrightarrow{AC} = C - A$ are two vectors **lying in the plane**
- Their cross product gives a vector **perpendicular to both**, i.e. perpendicular to the plane
- This is why the cross product is so powerful for plane problems!

**Step-by-step process to find the Cartesian equation of a plane through 3 points:**
1. Find $\overrightarrow{AB} = B - A$ and $\overrightarrow{AC} = C - A$
2. Compute $\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC}$
3. Use any one of the three points (say $A$) and the normal form: $\mathbf{n} \cdot (\mathbf{r} - A) = 0$
4. Expand to get $ax + by + cz = \text{const}$

**Example:** Find the Cartesian equation of the plane through $A(3,-2,0)$, $B(-1,2,-1)$, $C(0,0,4)$

- $\overrightarrow{AB} = \langle -1-3,\ 2-(-2),\ -1-0 \rangle = \langle -4, 4, -1 \rangle$
- $\overrightarrow{AC} = \langle 0-3,\ 0-(-2),\ 4-0 \rangle = \langle -3, 2, 4 \rangle$
- $\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC}$ (computed using the cross product formula below)

---

# The Cross Product

## What is the Cross Product?

The **cross product** takes two vectors and produces a **new vector** that is perpendicular to both.

| Operation | Input | Output | Tells you |
|-----------|-------|--------|-----------|
| Dot product | Two vectors | Scalar | How much two vectors point in the **same direction** |
| Cross product | Two vectors | Vector | How much two vectors are **perpendicular**, and gives the **normal** to the plane they define |

The cross product of vectors $\mathbf{a}$ and $\mathbf{b}$ is written $\mathbf{a} \times \mathbf{b}$.

---

## Formula for the Cross Product

$$\mathbf{a} \times \mathbf{b} = (a_2 b_3 - a_3 b_2)\hat{i} - (a_1 b_3 - a_3 b_1)\hat{j} + (a_1 b_2 - a_2 b_1)\hat{k}$$

This is often remembered as a **determinant**:

$$\mathbf{a} \times \mathbf{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix}$$

Where:
- $\mathbf{a} = \langle a_1, a_2, a_3 \rangle$
- $\mathbf{b} = \langle b_1, b_2, b_3 \rangle$

### How to Compute It (Step by Step)

To find the $\hat{i}$ component: **cover the first column**, take the 2×2 determinant of what remains:

$$\hat{i}: \quad a_2 b_3 - a_3 b_2$$

To find the $\hat{j}$ component: **cover the second column**, take the 2×2 determinant, and **negate**:

$$-\hat{j}: \quad -(a_1 b_3 - a_3 b_1)$$

To find the $\hat{k}$ component: **cover the third column**, take the 2×2 determinant:

$$\hat{k}: \quad a_1 b_2 - a_2 b_1$$

**Example:** Calculate $\mathbf{a} \times \mathbf{b}$ where $\mathbf{a} = \langle 1, 2, 0 \rangle$ and $\mathbf{b} = \langle 0, 3, 1 \rangle$

- $\hat{i}$: $(2)(1) - (0)(3) = 2$
- $\hat{j}$: $-[(1)(1) - (0)(0)] = -1$
- $\hat{k}$: $(1)(3) - (2)(0) = 3$
- Result: $\mathbf{a} \times \mathbf{b} = \langle 2, -1, 3 \rangle$

**Example:** Calculate $\mathbf{a} \times \mathbf{b}$ where $\mathbf{a} = \langle 1, 0, 2 \rangle$ and $\mathbf{b} = \langle -1, 1, 1 \rangle$

- $\hat{i}$: $(0)(1) - (2)(1) = -2$
- $\hat{j}$: $-[(1)(1) - (2)(-1)] = -[1 + 2] = -3$
- $\hat{k}$: $(1)(1) - (0)(-1) = 1$
- Result: $\mathbf{a} \times \mathbf{b} = \langle -2, -3, 1 \rangle$

---

## Geometric Meaning of the Cross Product

$$\mathbf{a} \times \mathbf{b} = |\mathbf{a}||\mathbf{b}|\sin\theta\ \hat{n}$$

Where:
- $\theta$ is the **angle between** $\mathbf{a}$ and $\mathbf{b}$
- $\hat{n}$ is the **unit normal vector** perpendicular to both $\mathbf{a}$ and $\mathbf{b}$
- $|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$ is the **area of the parallelogram** formed by $\mathbf{a}$ and $\mathbf{b}$

---

## The Right-Hand Rule

Since there are **two directions** perpendicular to any plane, we need a convention to pick one. We use the **right-hand rule**:

- Point your right-hand fingers in the direction of $\mathbf{a}$
- Curl them toward $\mathbf{b}$
- Your thumb points in the direction of $\mathbf{a} \times \mathbf{b}$

This ensures a consistent, unambiguous result.

---

## Unit Vectors and the Right-Handed Coordinate System

The standard unit vectors $\hat{i}$, $\hat{j}$, $\hat{k}$ form a **right-handed coordinate system**:

$$\hat{i} \times \hat{j} = \hat{k}$$
$$\hat{j} \times \hat{k} = \hat{i}$$
$$\hat{k} \times \hat{i} = \hat{j}$$

And reversing the order flips the sign:

$$\hat{j} \times \hat{i} = -\hat{k}, \quad \hat{k} \times \hat{j} = -\hat{i}, \quad \hat{i} \times \hat{k} = -\hat{j}$$

---

## Properties of the Cross Product

### Not Commutative

$$\mathbf{a} \times \mathbf{b} \neq \mathbf{b} \times \mathbf{a}$$

In fact: $\mathbf{a} \times \mathbf{b} = -(\mathbf{b} \times \mathbf{a})$ — swapping the order **negates** the result.

### Distributive Over Addition

$$\mathbf{a} \times (\mathbf{b} + \mathbf{c}) = \mathbf{a} \times \mathbf{b} + \mathbf{a} \times \mathbf{c}$$

### Scalar Multiplication

For any scalar $k$:

$$\mathbf{a} \times (k\mathbf{b}) = (k\mathbf{a}) \times \mathbf{b} = k(\mathbf{a} \times \mathbf{b})$$

### Cross Product with Itself is Zero

$$\mathbf{a} \times \mathbf{a} = \mathbf{0}$$

- This makes sense geometrically: $\sin\theta = \sin 0 = 0$, so the magnitude is zero
- Also: if $\mathbf{a}$ and $\mathbf{b}$ are **parallel**, then $\mathbf{a} \times \mathbf{b} = \mathbf{0}$

### Perpendicularity Check

$$\mathbf{a} \cdot (\mathbf{a} \times \mathbf{b}) = 0$$

- The cross product is always perpendicular to **both** original vectors

---

# Applications of the Cross Product

## Torque

**Torque** measures the rotational effect of a force. It is defined as:

$$\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F}$$

Where:
- $\mathbf{r}$ is the **displacement vector** from the pivot point to where the force is applied
- $\mathbf{F}$ is the **applied force vector**
- $\boldsymbol{\tau}$ (tau) is the **torque vector** — its direction gives the axis of rotation (right-hand rule), its magnitude gives the rotational strength

The **magnitude** of the torque is:

$$|\boldsymbol{\tau}| = |\mathbf{r}||\mathbf{F}|\sin\theta$$

Where $\theta$ is the angle between $\mathbf{r}$ and $\mathbf{F}$.

- Maximum torque occurs when $\theta = 90°$ (force applied perpendicular to the arm)
- Zero torque when $\theta = 0°$ or $180°$ (force along the arm direction)

**Example:** A 10 kg mass hangs from a 1 m arm:
- Weight force: $F = mg = 10 \times 9.8 = 98$ N, directed downward
- $\mathbf{r} = \langle 1, 0, 0 \rangle$ (1 m along x-axis)
- $\mathbf{F} = \langle 0, -98, 0 \rangle$ (downward)
- $\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F} = \langle 1,0,0 \rangle \times \langle 0,-98,0 \rangle = \langle (0)(0)-(0)(-98),\ (0)(0)-(1)(0),\ (1)(-98)-(0)(0) \rangle = \langle 0, 0, -98 \rangle$
- Magnitude: $|\boldsymbol{\tau}| = 98$ N·m

---

## Magnetic Force on a Charged Particle

The force on a charged particle moving through a magnetic field is:

$$\mathbf{F} = q\mathbf{v} \times \mathbf{B}$$

Where:
- $q$ is the **charge** of the particle (in Coulombs)
- $\mathbf{v}$ is the **velocity** of the particle
- $\mathbf{B}$ is the **magnetic field** vector
- $\mathbf{F}$ is the resulting **force** on the particle

Key observations:
- The force is **always perpendicular** to both $\mathbf{v}$ and $\mathbf{B}$ (because it's a cross product)
- This means the force never does work on the particle — it only changes direction, not speed
- The particle moves in a **circular or helical path** as a result
- If the particle moves parallel to $\mathbf{B}$, then $\mathbf{v} \times \mathbf{B} = \mathbf{0}$ — no force acts

---

## Rotations About an Axis

Cross products appear naturally whenever something **rotates about an axis**:
- Spinning wheels — the angular velocity vector $\boldsymbol{\omega}$ points along the rotation axis
- Tornadoes — the rotation vector points vertically
- Rotating rigid bodies in mechanics

The **velocity of a rotating point** is given by:

$$\mathbf{v} = \boldsymbol{\omega} \times \mathbf{r}$$

Where:
- $\boldsymbol{\omega}$ (omega) is the **angular velocity vector** (magnitude = speed of rotation, direction = axis of rotation by right-hand rule)
- $\mathbf{r}$ is the **position vector** from the axis to the point
- $\mathbf{v}$ is the **linear velocity** of the point

---

# Summary: Key Formulas to Know

## Lines

| Form | Formula |
|------|---------|
| Vector form | $\mathbf{r}(t) = \mathbf{a} + t\mathbf{p}$ |
| Cartesian (symmetric) form | $\frac{x-a_1}{p_1} = \frac{y-a_2}{p_2} = \frac{z-a_3}{p_3}$ |
| Direction from two points | $\mathbf{p} = \overrightarrow{AB} = B - A$ |

## Planes

| Form | Formula |
|------|---------|
| General Cartesian | $ax + by + cz = \text{const}$ |
| Vector (parametric) | $\mathbf{r}(u,v) = \mathbf{a} + u\mathbf{p} + v\mathbf{q}$ |
| Normal (vector) form | $(\mathbf{r} - \mathbf{a}) \cdot \mathbf{n} = 0$ |
| Normal from 3 points | $\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC}$ |

## Cross Product

| Property | Formula |
|----------|---------|
| Component form | $\mathbf{a} \times \mathbf{b} = \langle a_2 b_3 - a_3 b_2,\ -(a_1 b_3 - a_3 b_1),\ a_1 b_2 - a_2 b_1 \rangle$ |
| Geometric magnitude | $|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$ |
| Anti-commutative | $\mathbf{a} \times \mathbf{b} = -(\mathbf{b} \times \mathbf{a})$ |
| Self cross product | $\mathbf{a} \times \mathbf{a} = \mathbf{0}$ |
| Torque | $\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F}$ |
| Magnetic force | $\mathbf{F} = q\mathbf{v} \times \mathbf{B}$ |
| Rotational velocity | $\mathbf{v} = \boldsymbol{\omega} \times \mathbf{r}$ |
