> [!faq] About this Lecture 
> Class: 33130
> Subject: #mathematicsOne
> Date: 24/02/2025 
> Topics: #math #vectors #3D

# Vector Calculus Lecture Notes

## Some Revision on Angles

- Angles can be measured in **degrees** or **radians**
- Key relationship: $2\pi \text{ rad} = 360°$
- For a right triangle, if $\theta$ is an interior angle:
  - $\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}$
  - $\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}$

---

## 2D and 3D Coordinate Systems

### Points in Two Dimensions

- Any point in 2D is represented by two numbers: the $x$ and $y$ coordinates
- Written as an **ordered pair**: $(x, y) \in \mathbb{R}^2$
  - $\mathbb{R}^2$ means the set of all pairs of real numbers
  - The origin is the point $(0, 0)$

**Distance between two points** $A(x_1, y_1)$ and $B(x_2, y_2)$:

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**Example:** Distance from $A(2,3)$ to $B(6,5)$:

$$d = \sqrt{(6-2)^2 + (5-3)^2} = \sqrt{16+4} = \sqrt{20} = 2\sqrt{5}$$

---

### Points in Three Dimensions

- Any point in 3D is represented by three numbers: $x$, $y$, and $z$ coordinates
- Written as: $(x, y, z) \in \mathbb{R}^3$
- The coordinate axes are drawn using the **right-hand rule**
  - Point fingers in the $x$ direction, curl toward $y$, thumb points in $z$

**Distance between two points** $A(x_1, y_1, z_1)$ and $B(x_2, y_2, z_2)$:

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$$

**Example:** Distance from origin $O(0,1,0)$ to $A(1,4,2)$:

$$d = \sqrt{(1-0)^2 + (4-1)^2 + (2-0)^2} = \sqrt{1 + 9 + 4} = \sqrt{14}$$

---

### Sets of Points

- A **set of points** is a collection of points described by a condition
- Notation: $\{(x,y,z) : \text{some condition involving } x, y, z\}$
  - Read as: "the set of numbers $x$, $y$, $z$ which obey the following condition"

**In 2D:** a condition on $x$ and $y$ describes a **curve or line**

**Example:** $x^2 + y^2 = 25$ describes a circle of radius 5 centred at the origin

**In 3D:** a condition on $x$, $y$, and $z$ describes a **surface**

**Example:** $\{(x,y,z) : x^2 + y^2 + z^2 = 4\}$ is a sphere of radius 2 centred at the origin

**Example surfaces:**

| Set Notation | Shape |
|---|---|
| $\{(x,y,z) : y + z = 1\}$ | A tilted plane |
| $\{(x,y,z) : z = x^2 + y^2\}$ | A paraboloid (bowl shape opening upward) |

**Exercise — Write set notation for:**
- Sphere of radius 3 centred at $C(0,1,0)$: $\{(x,y,z) : x^2 + (y-1)^2 + z^2 = 9\}$
- Plane of constant $y = 3$: $\{(x,y,z) : y = 3\}$

---

## Introduction to Vectors

### Scalars vs Vectors

| Type | Description | Examples |
|---|---|---|
| **Scalar** | Completely specified by a single number | Temperature, Mass, Air pressure, Charge, Energy |
| **Vector** | Specified by a magnitude AND a direction | Velocity, Acceleration, Electric field, Force, Momentum, Torque |

> There are also more complicated objects called **tensors**, which generalise both scalars and vectors.

Vectors appear across all branches of science — from meteorology (wind maps) to electromagnetic theory (magnetic field lines).

---

### Writing Vectors

- Vectors are written in **bold** when typeset: $\mathbf{a}$
- When writing by hand, always put a **squiggle underneath**: $\underset{\sim}{a}$
- Always make clear whether a quantity is a vector or scalar

A vector in 3D is written using **angled bracket notation**:

$$\mathbf{a} = \langle a_1, a_2, a_3 \rangle$$

where $a_1$, $a_2$, $a_3$ are scalars (the $x$, $y$, $z$ components respectively).

---

### Magnitude (Length) of a Vector

The **magnitude** of $\mathbf{a} = \langle a_1, a_2, a_3 \rangle$ is:

$$|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$$

**Examples:**

$$|\langle 1, 3, 2 \rangle| = \sqrt{1^2 + 3^2 + 2^2} = \sqrt{14}$$

$$|\langle 1, -2 \rangle| = \sqrt{1^2 + (-2)^2} = \sqrt{5}$$

$$|\langle -1, 4, -2 \rangle| = \sqrt{1 + 16 + 4} = \sqrt{21}$$

$$|\langle 1, 2, -1, 3 \rangle| = \sqrt{1 + 4 + 1 + 9} = \sqrt{15} \quad \text{(4D vector)}$$

---

### The Coordinate Axis Vectors (Standard Basis)

$$\hat{\mathbf{i}} = \langle 1, 0, 0 \rangle \quad \text{(unit vector in } x \text{ direction)}$$

$$\hat{\mathbf{j}} = \langle 0, 1, 0 \rangle \quad \text{(unit vector in } y \text{ direction)}$$

$$\hat{\mathbf{k}} = \langle 0, 0, 1 \rangle \quad \text{(unit vector in } z \text{ direction)}$$

- $\hat{\mathbf{i}}$, $\hat{\mathbf{j}}$, $\hat{\mathbf{k}}$ form a **complete basis** — any vector can be expressed in terms of them
- The hat notation $\hat{\phantom{x}}$ denotes a unit vector (length 1)

---

### Two Ways to Write Any Vector

$$\mathbf{a} = \langle a_1, a_2, a_3 \rangle = a_1\hat{\mathbf{i}} + a_2\hat{\mathbf{j}} + a_3\hat{\mathbf{k}}$$

**Examples:**

$$\langle 2, 4, 1 \rangle = 2\hat{\mathbf{i}} + 4\hat{\mathbf{j}} + \hat{\mathbf{k}}$$

$$\langle -1, 2, 3 \rangle = -\hat{\mathbf{i}} + 2\hat{\mathbf{j}} + 3\hat{\mathbf{k}}$$

> Unless told otherwise, either notation is acceptable in this subject.

- When a vector represents the line joining two points $A$ and $B$, write it as $\overrightarrow{AB}$

---

## The Dot Product

### Definition

The **dot product** (also called the **scalar product** or **inner product**) of $\mathbf{a}$ and $\mathbf{b}$ is:

$$\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$$

- Takes two vectors as input and produces a **scalar** output

**Example:** $\mathbf{a} = \langle 1, 0, 3 \rangle$, $\mathbf{b} = \langle 2, 1, -4 \rangle$

$$\mathbf{a} \cdot \mathbf{b} = (1)(2) + (0)(1) + (3)(-4) = 2 + 0 - 12 = -10$$

---

### Worked Examples

**Example 1:** $\mathbf{a} = \langle 3, 1 \rangle$, $\mathbf{b} = \langle 5, 0 \rangle$

$$\mathbf{a} \cdot \mathbf{b} = 3 \times 5 + 1 \times 0 = 15$$

**Example 2:** $\mathbf{a} = \langle 2, 2 \rangle$, $\mathbf{b} = \langle -1, 1 \rangle$

$$\mathbf{a} \cdot \mathbf{b} = 2 \times (-1) + 2 \times 1 = 0$$

> A dot product of **zero** means the two vectors are **perpendicular** (orthogonal)

---

### Properties of the Dot Product

**Commutative:**

$$\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}$$

**Distributive over vector addition:**

$$\mathbf{a} \cdot (\mathbf{b} + \mathbf{c}) = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \cdot \mathbf{c}$$

**Scalar multiplication:**

$$\mathbf{a} \cdot (k\mathbf{b}) = (k\mathbf{a}) \cdot \mathbf{b} = k(\mathbf{a} \cdot \mathbf{b})$$

**Dot product of a vector with itself:**

$$\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$$

*Why?*

$$\mathbf{a} \cdot \mathbf{a} = a_1^2 + a_2^2 + a_3^2 = \left(\sqrt{a_1^2 + a_2^2 + a_3^2}\right)^2 = |\mathbf{a}|^2$$

---

### Second Formula: Dot Product and Angle

$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$$

where $\theta$ is the angle between the two vectors ($0 \leq \theta \leq \pi$).

**Geometric interpretation of $\cos\theta$:**
- $\theta = 0$ (same direction): $\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|$ (maximum, positive)
- $\theta = \pi/2$ (perpendicular): $\mathbf{a} \cdot \mathbf{b} = 0$
- $\theta = \pi$ (opposite directions): $\mathbf{a} \cdot \mathbf{b} = -|\mathbf{a}||\mathbf{b}|$ (minimum, negative)

**Worked examples using the angle formula:**

| Vectors | Angle $\theta$ | Dot product |
|---|---|---|
| Lengths 1 and 2 | $\pi/4$ | $1 \times 2 \times \cos(\pi/4) = \sqrt{2} \approx 1.41$ |
| Both length 2 | $\pi/2$ | $2 \times 2 \times \cos(\pi/2) = 0$ |
| Both length 2 | $5\pi/6$ | $4 \times \cos(5\pi/6) = -2\sqrt{3}$ |

---

### Why Are the Two Formulas Equivalent?

**Proof using the cosine rule:**

Let $\mathbf{c} = \mathbf{b} - \mathbf{a}$. By the cosine rule:

$$|\mathbf{c}|^2 = |\mathbf{a}|^2 + |\mathbf{b}|^2 - 2|\mathbf{a}||\mathbf{b}|\cos\theta$$

Expanding $|\mathbf{b} - \mathbf{a}|^2$ using Definition 1:

$$(\mathbf{b} - \mathbf{a}) \cdot (\mathbf{b} - \mathbf{a}) = |\mathbf{b}|^2 - 2\mathbf{a}\cdot\mathbf{b} + |\mathbf{a}|^2$$

Substituting back and cancelling $|\mathbf{a}|^2$ and $|\mathbf{b}|^2$:

$$-2\mathbf{a} \cdot \mathbf{b} = -2|\mathbf{a}||\mathbf{b}|\cos\theta$$

$$\therefore \quad \mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta \quad \square$$

---

### Finding the Angle Between Two Vectors

Rearranging the second formula:

$$\theta = \cos^{-1}\!\left(\frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}\right)$$

**Example:** Find the angle between $\mathbf{a} = \langle 1, -1, 2 \rangle$ and $\mathbf{b} = \langle 1, 2, 1 \rangle$

Step 1 — Compute the dot product:

$$\mathbf{a} \cdot \mathbf{b} = (1)(1) + (-1)(2) + (2)(1) = 1 - 2 + 2 = 1$$

Step 2 — Compute the magnitudes:

$$|\mathbf{a}| = \sqrt{1 + 1 + 4} = \sqrt{6}, \qquad |\mathbf{b}| = \sqrt{1 + 4 + 1} = \sqrt{6}$$

Step 3 — Solve for $\theta$:

$$\cos\theta = \frac{1}{\sqrt{6} \cdot \sqrt{6}} = \frac{1}{6}$$

$$\theta = \cos^{-1}\!\left(\frac{1}{6}\right) \approx 80.4° \approx 1.4 \text{ rad}$$

---

### Real-World Application: Work

The **work done** by a force $\mathbf{F}$ displacing an object by $\mathbf{d}$ is:

$$W = \mathbf{F} \cdot \mathbf{d}$$

Only the component of force **in the direction of motion** contributes to work — exactly what the dot product captures.

**Effective wind force on a truck:** if wind force $\mathbf{F}_w$ acts on a truck with surface normal $\hat{\mathbf{n}}$:

$$F_{\text{eff}} = \mathbf{F}_w \cdot \hat{\mathbf{n}}$$

---

## Scalar and Vector Projections

### Unit Vectors

**Definition:** A **unit vector** is a vector of length 1, written with a hat: $\hat{\mathbf{a}}$

**Any vector can be made into a unit vector** by dividing by its own length:

$$\hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}$$

**Example:** Find the unit vector in the direction of $\mathbf{a} = \langle -1, 2, 3 \rangle$

$$|\mathbf{a}| = \sqrt{(-1)^2 + 2^2 + 3^2} = \sqrt{14}$$

$$\hat{\mathbf{a}} = \frac{\langle -1, 2, 3 \rangle}{\sqrt{14}} = \left\langle \frac{-1}{\sqrt{14}},\ \frac{2}{\sqrt{14}},\ \frac{3}{\sqrt{14}} \right\rangle$$

The standard basis vectors $\hat{\mathbf{i}}$, $\hat{\mathbf{j}}$, $\hat{\mathbf{k}}$ are all unit vectors.

---

### Projection onto the Coordinate Axes

The component of $\mathbf{a}$ along each axis is found by dotting with the basis vectors:

$$a_1 = \mathbf{a} \cdot \hat{\mathbf{i}}, \qquad a_2 = \mathbf{a} \cdot \hat{\mathbf{j}}, \qquad a_3 = \mathbf{a} \cdot \hat{\mathbf{k}}$$

Since $|\hat{\mathbf{i}}| = 1$:

$$\mathbf{a} \cdot \hat{\mathbf{i}} = |\mathbf{a}||\hat{\mathbf{i}}|\cos\theta = |\mathbf{a}|\cos\theta$$

So geometrically in 2D: $a_1 = |\mathbf{a}|\cos\theta$ and $a_2 = |\mathbf{a}|\sin\theta$

---

### Scalar Projection

The **scalar projection** of $\mathbf{a}$ onto $\mathbf{b}$ is:

$$\text{comp}_{\hat{\mathbf{b}}}\,\mathbf{a} = \mathbf{a} \cdot \hat{\mathbf{b}} = \mathbf{a} \cdot \frac{\mathbf{b}}{|\mathbf{b}|}$$

- Output is a **scalar**
- Tells us **how much of $\mathbf{a}$ is pointing in the direction of $\mathbf{b}$**
- Can be negative if the angle between $\mathbf{a}$ and $\mathbf{b}$ is greater than $90°$

---

### Vector Projection

The **vector projection** of $\mathbf{a}$ onto $\mathbf{b}$ is:

$$\text{proj}_{\hat{\mathbf{b}}}\,\mathbf{a} = \left(\mathbf{a} \cdot \hat{\mathbf{b}}\right)\hat{\mathbf{b}}$$

- Output is a **vector** pointing in the direction of $\mathbf{b}$
- It is the "shadow" of $\mathbf{a}$ cast along the direction of $\mathbf{b}$

---

### Worked Example: Truck on an Incline

**Problem:** A 10,000 kg truck is on a 30° incline. Find the magnitude of the gravitational
force pulling the truck downhill, and the vector force acting down the slope.

**Step 1 — Find $\hat{\mathbf{b}}$ (unit vector along the slope):**

$$\tan 30° = \frac{h}{1} \implies h = \frac{1}{\sqrt{3}}$$

$$\mathbf{b} = \left\langle 1, \frac{1}{\sqrt{3}} \right\rangle, \qquad |\mathbf{b}| = \sqrt{1 + \frac{1}{3}} = \sqrt{\frac{4}{3}} = \frac{2}{\sqrt{3}}$$

$$\hat{\mathbf{b}} = \frac{\mathbf{b}}{|\mathbf{b}|} = \frac{\sqrt{3}}{2}\left\langle 1, \frac{1}{\sqrt{3}} \right\rangle = \left\langle \frac{\sqrt{3}}{2}, \frac{1}{2} \right\rangle$$

**Step 2 — Write the gravitational force vector:**

$$\mathbf{F} = \langle 0, -mg \rangle$$

where $m = 10{,}000\ \text{kg}$, $g = 9.8\ \text{m/s}^2$

**Step 3 — Scalar projection (magnitude of downhill force):**

$$\mathbf{F} \cdot \hat{\mathbf{b}} = \langle 0, -mg \rangle \cdot \left\langle \frac{\sqrt{3}}{2}, \frac{1}{2} \right\rangle = 0 \cdot \frac{\sqrt{3}}{2} + (-mg) \cdot \frac{1}{2} = -\frac{mg}{2}$$

$$= -\frac{1}{2} \times 10^4 \times 9.8 = -4.9 \times 10^4\ \text{N}$$

The negative sign means the force acts **down** the slope. Magnitude $= 4.9 \times 10^4\ \text{N}$.

**Step 4 — Vector projection (vector force down the slope):**

$$\mathbf{F}_{\text{slope}} = \left(\mathbf{F} \cdot \hat{\mathbf{b}}\right)\hat{\mathbf{b}} = \left(-\frac{mg}{2}\right)\left\langle \frac{\sqrt{3}}{2}, \frac{1}{2} \right\rangle = -\frac{mg}{4}\langle \sqrt{3},\ 1 \rangle$$

---

### Summary Table

| Quantity | Formula | Output | Meaning |
|---|---|---|---|
| Unit vector | $\hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}$ | Vector, length 1 | Direction of $\mathbf{a}$ |
| Scalar projection | $\text{comp}_{\hat{\mathbf{b}}}\,\mathbf{a} = \mathbf{a} \cdot \hat{\mathbf{b}}$ | Scalar | How much of $\mathbf{a}$ points along $\mathbf{b}$ |
| Vector projection | $\text{proj}_{\hat{\mathbf{b}}}\,\mathbf{a} = (\mathbf{a} \cdot \hat{\mathbf{b}})\hat{\mathbf{b}}$ | Vector | Component of $\mathbf{a}$ in the $\mathbf{b}$ direction |

---

### Key Takeaways and Exam Hints

- Always distinguish **scalars** and **vectors** — label everything clearly (bold or squiggle)
- The dot product always gives a **scalar** — never a vector
- $\mathbf{a} \cdot \mathbf{b} = 0 \implies \mathbf{a} \perp \mathbf{b}$ — very useful for checking perpendicularity
- To find the angle between two vectors use $\cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$
- Scalar projection gives the **magnitude** of the component; vector projection gives the **vector** component
- $W = \mathbf{F} \cdot \mathbf{d}$ is a direct physical application of the dot product
- When projecting onto a slope: first find $\hat{\mathbf{b}}$, then dot with your force vector