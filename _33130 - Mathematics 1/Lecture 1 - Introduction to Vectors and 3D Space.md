> [!faq] About this Lecture 
> Class: 33130
> Subject: #mathematicsOne
> Date: 24/02/2025 
> Topics: #math #vectors #3D

# Vector Calculus Lecture Notes

## Some Revision on Angles

- Angles can be measured in two ways — **degrees** (the normal way, like 90°) or **radians** (a different unit we use in uni maths)
- The key relationship between them: $2\pi \text{ rad} = 360°$ — so a full circle is $2\pi$ radians
- You probably remember from high school that in a right triangle, if $\theta$ is one of the angles:
  - $\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}$ — this is the side next to the angle divided by the longest side
  - $\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}$ — this is the side opposite the angle divided by the longest side

> Think of $\cos$ and $\sin$ as just buttons on your calculator that convert an angle into a number between -1 and 1.

---

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/EzJP9uwV3ms" frameborder="0" allowfullscreen></iframe>
</div>

## 2D and 3D Coordinate Systems

### Points in Two Dimensions

- You already know this from high school — any point on a flat graph needs two numbers to find it: how far across ($x$) and how far up ($y$)
- Written as an **ordered pair**: $(x, y) \in \mathbb{R}^2$
  - The $\in \mathbb{R}^2$ part just means "this point lives in 2D space" — don't stress about the symbol too much
  - The origin is just the centre point $(0, 0)$ where the two axes cross

**Distance between two points** $A(x_1, y_1)$ and $B(x_2, y_2)$:

This is just Pythagoras — you find how far apart they are in $x$, how far apart in $y$, then use Pythagoras to get the straight line distance:

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**Example:** Distance from $A(2,3)$ to $B(6,5)$:

$$d = \sqrt{(6-2)^2 + (5-3)^2} = \sqrt{16+4} = \sqrt{20} = 2\sqrt{5}$$

---

### Points in Three Dimensions

- Same idea as 2D, but now we need a third number $z$ to describe how far in/out of the page a point is
- Written as: $(x, y, z) \in \mathbb{R}^3$ — meaning "this point lives in 3D space"
- The axes are drawn using the **right-hand rule** — point your fingers in the $x$ direction, curl them toward $y$, and your thumb points in the $z$ direction

**Distance between two points** $A(x_1, y_1, z_1)$ and $B(x_2, y_2, z_2)$:

Same as 2D Pythagoras, just with an extra $z$ term added underneath the square root:

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$$

**Example:** Distance from origin $O(0,1,0)$ to $A(1,4,2)$:

$$d = \sqrt{(1-0)^2 + (4-1)^2 + (2-0)^2} = \sqrt{1 + 9 + 4} = \sqrt{14}$$

---

### Sets of Points

- A **set of points** is just a collection of points that all satisfy some rule or condition
- The notation looks scary but it just means: "give me all the points where this condition is true"
- Written as: $\{(x,y,z) : \text{some condition involving } x, y, z\}$
  - The curly brackets mean "the set of"
  - The colon means "where" or "such that"
  - So $\{(x,y,z) : x^2 + y^2 + z^2 = 4\}$ just means "all the points where $x^2 + y^2 + z^2 = 4$"

**In 2D:** a condition on $x$ and $y$ draws out a **curve or line** on the graph

**Example:** $x^2 + y^2 = 25$ — this is all the points exactly 5 units from the origin, which draws a circle of radius 5

**In 3D:** a condition on $x$, $y$, and $z$ draws out a **surface** in 3D space

**Example:** $\{(x,y,z) : x^2 + y^2 + z^2 = 4\}$ is a sphere of radius 2 centred at the origin — think of it like a basketball, all the points on its surface are exactly 2 units from the centre

**Example surfaces:**

| Set Notation | Shape |
|---|---|
| $\{(x,y,z) : y + z = 1\}$ | A flat tilted plane (like a ramp) |
| $\{(x,y,z) : z = x^2 + y^2\}$ | A paraboloid (like a bowl sitting upright) |

**Exercise — Write set notation for:**
- Sphere of radius 3 centred at $C(0,1,0)$: $\{(x,y,z) : x^2 + (y-1)^2 + z^2 = 9\}$
- Plane of constant $y = 3$: $\{(x,y,z) : y = 3\}$

---

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/rcDXQ-5H8mk" frameborder="0" allowfullscreen></iframe>
</div>

## Introduction to Vectors

### Scalars vs Vectors

The most important distinction in this whole topic — you need to always know which one you are dealing with.

| Type | Description | Examples |
|---|---|---|
| **Scalar** | Just a plain number — has size but NO direction | Temperature, Mass, Air pressure, Charge, Energy |
| **Vector** | Has BOTH a size AND a direction | Velocity, Acceleration, Electric field, Force, Momentum, Torque |

A good way to tell them apart: ask yourself "does the direction matter here?"
- "The temperature is 28 degrees" — direction doesn't matter, it's a **scalar**
- "The wind is blowing at 30 km/h" — just a scalar (speed)
- "The wind is blowing at 30 km/h heading north" — NOW it's a **vector** (velocity) because direction matters

> There are also even more complicated objects called **tensors** which generalise both — don't worry about these for now.

Vectors show up everywhere in science — wind maps in weather forecasts, gravity pulling things down, magnetic field lines around a magnet. Any time direction matters, vectors are involved.

---

### Writing Vectors

- When a textbook or notes types a vector it uses **bold**: $\mathbf{a}$
- When YOU write a vector by hand, put a **squiggle underneath**: $\underset{\sim}{a}$
- This is really important — always make it clear whether something is a vector or a scalar, because they behave very differently

A vector in 3D is written using **angled bracket notation** — the three numbers inside tell you how far the arrow goes in the $x$, $y$, and $z$ directions:

$$\mathbf{a} = \langle a_1, a_2, a_3 \rangle$$

So $\mathbf{a} = \langle 3, 2, 1 \rangle$ just means: go 3 in the $x$ direction, 2 in the $y$ direction, 1 in the $z$ direction. That's your arrow.

---

### Magnitude (Length) of a Vector

The **magnitude** is just the length of the vector arrow — written as $|\mathbf{a}|$ (the straight lines on either side mean "give me just the length, forget the direction").

It's just Pythagoras — square each component, add them up, square root the whole thing:

$$|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$$

**Examples:**

$$|\langle 1, 3, 2 \rangle| = \sqrt{1^2 + 3^2 + 2^2} = \sqrt{1 + 9 + 4} = \sqrt{14}$$

$$|\langle 1, -2 \rangle| = \sqrt{1^2 + (-2)^2} = \sqrt{1 + 4} = \sqrt{5}$$

$$|\langle -1, 4, -2 \rangle| = \sqrt{1 + 16 + 4} = \sqrt{21}$$

> Note: $|\mathbf{a}|$ is always a **scalar** — it's just a plain number (the length). The vector $\mathbf{a}$ has direction but $|\mathbf{a}|$ does not.

---

### The Coordinate Axis Vectors (Standard Basis)

These are three special vectors that point exactly along each axis with a length of exactly 1:

$$\hat{\mathbf{i}} = \langle 1, 0, 0 \rangle \quad \text{(points in the } x \text{ direction)}$$

$$\hat{\mathbf{j}} = \langle 0, 1, 0 \rangle \quad \text{(points in the } y \text{ direction)}$$

$$\hat{\mathbf{k}} = \langle 0, 0, 1 \rangle \quad \text{(points in the } z \text{ direction)}$$

- The hat symbol $\hat{\phantom{x}}$ always means the vector has length 1 (called a **unit vector**)
- These three vectors are like building blocks — you can build ANY vector using combinations of them
- This is why they are called a **complete basis** — they cover all three directions in 3D space

---

### Two Ways to Write Any Vector

You will see vectors written in two different ways in this subject — they mean exactly the same thing, just different notation:

$$\mathbf{a} = \langle a_1, a_2, a_3 \rangle = a_1\hat{\mathbf{i}} + a_2\hat{\mathbf{j}} + a_3\hat{\mathbf{k}}$$

The second way is just saying "take $a_1$ steps in the $\hat{\mathbf{i}}$ direction, $a_2$ steps in the $\hat{\mathbf{j}}$ direction, $a_3$ steps in the $\hat{\mathbf{k}}$ direction."

**Examples:**

$$\langle 2, 4, 1 \rangle = 2\hat{\mathbf{i}} + 4\hat{\mathbf{j}} + \hat{\mathbf{k}}$$

$$\langle -1, 2, 3 \rangle = -\hat{\mathbf{i}} + 2\hat{\mathbf{j}} + 3\hat{\mathbf{k}}$$

> You can use either notation in this subject unless told otherwise.

- When a vector goes from point $A$ to point $B$ specifically, we write it as $\overrightarrow{AB}$

---

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/LyGKycYT2v0" frameborder="0" allowfullscreen></iframe>
</div>

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/VzX8KJKFhlM" frameborder="0" allowfullscreen></iframe>
</div>

## The Dot Product

### What even is it?

The dot product is a way of multiplying two vectors together. But unlike normal multiplication of numbers, the result is NOT a vector — it's just a plain number (a scalar).

Think of it as answering the question: **"how much are these two arrows pointing in the same direction?"**

### Definition

Given two vectors $\mathbf{a}$ and $\mathbf{b}$, you multiply the matching parts together and add them all up:

$$\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$$

So: times the $x$ parts, times the $y$ parts, times the $z$ parts, then add it all together. That's it.

**Example:** $\mathbf{a} = \langle 1, 0, 3 \rangle$, $\mathbf{b} = \langle 2, 1, -4 \rangle$

$$\mathbf{a} \cdot \mathbf{b} = (1 \times 2) + (0 \times 1) + (3 \times -4) = 2 + 0 - 12 = -10$$

---

### Worked Examples

**Example 1:** $\mathbf{a} = \langle 3, 1 \rangle$, $\mathbf{b} = \langle 5, 0 \rangle$

$$\mathbf{a} \cdot \mathbf{b} = (3 \times 5) + (1 \times 0) = 15 + 0 = 15$$

**Example 2:** $\mathbf{a} = \langle 2, 2 \rangle$, $\mathbf{b} = \langle -1, 1 \rangle$

$$\mathbf{a} \cdot \mathbf{b} = (2 \times -1) + (2 \times 1) = -2 + 2 = 0$$

> When the dot product equals **zero**, the two vectors are **perpendicular** (at right angles to each other) — they share absolutely no common direction. This is a really useful thing to check for!

---

### Properties of the Dot Product

These are just rules about how the dot product behaves — similar to rules you already know for normal multiplication.

**Commutative** (order doesn't matter, same as $3 \times 4 = 4 \times 3$):

$$\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}$$

**Distributive** (you can expand brackets, same as normal algebra):

$$\mathbf{a} \cdot (\mathbf{b} + \mathbf{c}) = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \cdot \mathbf{c}$$

**Scalar multiplication** (you can pull a plain number out front):

$$\mathbf{a} \cdot (k\mathbf{b}) = (k\mathbf{a}) \cdot \mathbf{b} = k(\mathbf{a} \cdot \mathbf{b})$$

**Dot product of a vector with itself** (gives you the length squared):

$$\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$$

*Why does this work?* Because when you dot a vector with itself you get:

$$\mathbf{a} \cdot \mathbf{a} = a_1^2 + a_2^2 + a_3^2$$

And from Pythagoras we know $|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$, so squaring both sides gives $|\mathbf{a}|^2 = a_1^2 + a_2^2 + a_3^2$. Same thing!

---

### The Angle Formula for Dot Product

There is a second way to think about the dot product that involves the angle between the two vectors:

$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$$

Where:
- $|\mathbf{a}|$ = length of arrow $\mathbf{a}$ (Pythagoras)
- $|\mathbf{b}|$ = length of arrow $\mathbf{b}$ (Pythagoras)
- $\theta$ = the angle between the two arrows
- $\cos\theta$ = a number between -1 and 1 that acts as a "how aligned are they" score

**What this formula is really saying:**

The dot product = (how long is $\mathbf{a}$) × (how long is $\mathbf{b}$) × (how much are they pointing the same way)

The $\cos\theta$ part is the key — it's a score for alignment:
- Arrows pointing **exactly the same way** ($\theta = 0°$): $\cos(0°) = 1$ — perfect score, full dot product
- Arrows at **right angles** ($\theta = 90°$): $\cos(90°) = 0$ — zero alignment, dot product is zero
- Arrows pointing **opposite ways** ($\theta = 180°$): $\cos(180°) = -1$ — working against each other, negative dot product

**Worked examples using the angle formula:**

| Vectors | Angle $\theta$ | Dot product calculation | Result |
|---|---|---|---|
| Lengths 1 and 2 | $\pi/4$ (45°) | $1 \times 2 \times \cos(45°)$ | $\sqrt{2} \approx 1.41$ |
| Both length 2 | $\pi/2$ (90°) | $2 \times 2 \times \cos(90°)$ | $0$ |
| Both length 2 | $5\pi/6$ (150°) | $4 \times \cos(150°)$ | $-2\sqrt{3}$ |

---

### Finding the Angle Between Two Vectors

This is the main use of the angle formula. We rearrange it to solve for $\theta$:

$$\cos\theta = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$$

Then use $\cos^{-1}$ (the reverse of cos — you put a number in and get an angle out) to find the actual angle:

$$\theta = \cos^{-1}\!\left(\frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}\right)$$

**Full worked example:** Find the angle between $\mathbf{a} = \langle 1, -1, 2 \rangle$ and $\mathbf{b} = \langle 1, 2, 1 \rangle$

**Step 1 — Dot product** (times matching parts, add them up):

$$\mathbf{a} \cdot \mathbf{b} = (1)(1) + (-1)(2) + (2)(1) = 1 - 2 + 2 = 1$$

**Step 2 — Lengths** (Pythagoras on each vector):

$$|\mathbf{a}| = \sqrt{1^2 + (-1)^2 + 2^2} = \sqrt{1 + 1 + 4} = \sqrt{6}$$

$$|\mathbf{b}| = \sqrt{1^2 + 2^2 + 1^2} = \sqrt{1 + 4 + 1} = \sqrt{6}$$

**Step 3 — Plug in and solve:**

$$\cos\theta = \frac{1}{\sqrt{6} \times \sqrt{6}} = \frac{1}{6}$$

**Step 4 — Use $\cos^{-1}$ to get the angle** (press shift + cos on your calculator):

$$\theta = \cos^{-1}\!\left(\frac{1}{6}\right) \approx 80.4°$$

---

### Real-World Application: Work

In physics, the **work done** by a force $\mathbf{F}$ pushing an object along displacement $\mathbf{d}$ is:

$$W = \mathbf{F} \cdot \mathbf{d}$$

This makes perfect sense with what we know about the dot product — if you push at an angle, only the part of your force that's actually in the direction of movement does useful work. The dot product automatically gives you just that useful part and ignores the rest.

**Effective wind force on a truck:** if wind force $\mathbf{F}_w$ pushes on the side of a truck with surface normal direction $\hat{\mathbf{n}}$:

$$F_{\text{eff}} = \mathbf{F}_w \cdot \hat{\mathbf{n}}$$

---

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/gXn2wmZkpLI" frameborder="0" allowfullscreen></iframe>
</div>

## Scalar and Vector Projections

### Unit Vectors

**Definition:** A **unit vector** is just a vector that has been shrunk or stretched so that its length is exactly 1. Written with a hat: $\hat{\mathbf{a}}$

Why do we care? Because sometimes we only care about the **direction** of a vector, not how long it is. A unit vector gives us pure direction with no size information getting in the way.

**To make any vector into a unit vector**, just divide it by its own length — this keeps the direction the same but makes the length exactly 1:

$$\hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}$$

**Example:** Find the unit vector in the direction of $\mathbf{a} = \langle -1, 2, 3 \rangle$

First find the length using Pythagoras:

$$|\mathbf{a}| = \sqrt{(-1)^2 + 2^2 + 3^2} = \sqrt{1 + 4 + 9} = \sqrt{14}$$

Then divide every component by that length:

$$\hat{\mathbf{a}} = \frac{\langle -1, 2, 3 \rangle}{\sqrt{14}} = \left\langle \frac{-1}{\sqrt{14}},\ \frac{2}{\sqrt{14}},\ \frac{3}{\sqrt{14}} \right\rangle$$

You can check this worked: if you do Pythagoras on this new vector you should get exactly 1.

The standard basis vectors $\hat{\mathbf{i}}$, $\hat{\mathbf{j}}$, $\hat{\mathbf{k}}$ are all unit vectors — you can check: $|\hat{\mathbf{i}}| = \sqrt{1^2 + 0^2 + 0^2} = 1$.

---

### Projection onto the Coordinate Axes

The component of $\mathbf{a}$ along each axis is found by dotting with the matching basis vector:

$$a_1 = \mathbf{a} \cdot \hat{\mathbf{i}}, \qquad a_2 = \mathbf{a} \cdot \hat{\mathbf{j}}, \qquad a_3 = \mathbf{a} \cdot \hat{\mathbf{k}}$$

This makes sense — since $|\hat{\mathbf{i}}| = 1$:

$$\mathbf{a} \cdot \hat{\mathbf{i}} = |\mathbf{a}| \times 1 \times \cos\theta = |\mathbf{a}|\cos\theta$$

Which is exactly the horizontal component of $\mathbf{a}$ — just like SOHCAHTOA from high school! In 2D: $a_1 = |\mathbf{a}|\cos\theta$ and $a_2 = |\mathbf{a}|\sin\theta$

---

### Scalar Projection

**What is it?** Sometimes you don't want to project onto an axis — you want to project onto some arbitrary direction given by another vector $\mathbf{b}$. The scalar projection answers: "how much of $\mathbf{a}$ is pointing in the direction of $\mathbf{b}$?"

Think of it like a shadow — if you shine a light perpendicular to $\mathbf{b}$, the scalar projection is how long the shadow of $\mathbf{a}$ is along $\mathbf{b}$.

$$\text{comp}_{\hat{\mathbf{b}}}\,\mathbf{a} = \mathbf{a} \cdot \hat{\mathbf{b}} = \mathbf{a} \cdot \frac{\mathbf{b}}{|\mathbf{b}|}$$

- The result is a **scalar** (plain number, no direction)
- Positive means $\mathbf{a}$ has a component going the same way as $\mathbf{b}$
- Negative means $\mathbf{a}$ is actually pointing somewhat against $\mathbf{b}$
- Zero means $\mathbf{a}$ is completely perpendicular to $\mathbf{b}$

---

### Vector Projection

**What is it?** Same idea as scalar projection, but now we want the actual **vector** — not just how long the shadow is, but the shadow itself as an arrow pointing in the direction of $\mathbf{b}$.

You take the scalar projection (the length) and multiply it by $\hat{\mathbf{b}}$ (the direction):

$$\text{proj}_{\hat{\mathbf{b}}}\,\mathbf{a} = \left(\mathbf{a} \cdot \hat{\mathbf{b}}\right)\hat{\mathbf{b}}$$

- The result is a **vector** pointing in the direction of $\mathbf{b}$
- Scalar projection tells you the SIZE of the shadow
- Vector projection gives you the actual ARROW of the shadow

---

### Worked Example: Truck on an Incline

**Problem:** A 10,000 kg truck is on a 30° incline. Find:
1. The magnitude (size) of the gravitational force pulling it downhill
2. The actual vector force acting down the slope

**Step 1 — Find $\hat{\mathbf{b}}$ (unit vector pointing along the slope):**

First we need to figure out the direction of the slope as a vector. Using trig on the 30° angle:

$$\tan 30° = \frac{h}{1} \implies h = \tan 30° = \frac{1}{\sqrt{3}}$$

So the slope direction vector is $\mathbf{b} = \left\langle 1, \frac{1}{\sqrt{3}} \right\rangle$

Find its length using Pythagoras:

$$|\mathbf{b}| = \sqrt{1^2 + \left(\frac{1}{\sqrt{3}}\right)^2} = \sqrt{1 + \frac{1}{3}} = \sqrt{\frac{4}{3}} = \frac{2}{\sqrt{3}}$$

Now divide by the length to get the unit vector:

$$\hat{\mathbf{b}} = \frac{\mathbf{b}}{|\mathbf{b}|} = \left\langle \frac{\sqrt{3}}{2}, \frac{1}{2} \right\rangle$$

**Step 2 — Write gravity as a vector:**

Gravity pulls straight down, so in our coordinate system (where up is positive $y$):

$$\mathbf{F} = \langle 0, -mg \rangle$$

where $m = 10{,}000\ \text{kg}$ and $g = 9.8\ \text{m/s}^2$, so $mg = 9.8 \times 10^4\ \text{N}$

**Step 3 — Scalar projection (just the magnitude of the downhill force):**

Dot the gravity vector with the slope unit vector:

$$\mathbf{F} \cdot \hat{\mathbf{b}} = \langle 0, -mg \rangle \cdot \left\langle \frac{\sqrt{3}}{2}, \frac{1}{2} \right\rangle = \left(0 \times \frac{\sqrt{3}}{2}\right) + \left(-mg \times \frac{1}{2}\right) = -\frac{mg}{2}$$

$$= -\frac{1}{2} \times 10^4 \times 9.8 = -4.9 \times 10^4\ \text{N}$$

The negative sign just tells us the force is going **down** the slope (makes sense!). The magnitude is $4.9 \times 10^4\ \text{N}$.

**Step 4 — Vector projection (the actual force vector down the slope):**

Take the scalar projection and multiply by the unit vector to get the actual arrow:

$$\mathbf{F}_{\text{slope}} = \left(\mathbf{F} \cdot \hat{\mathbf{b}}\right)\hat{\mathbf{b}} = \left(-\frac{mg}{2}\right)\left\langle \frac{\sqrt{3}}{2}, \frac{1}{2} \right\rangle = -\frac{mg}{4}\langle \sqrt{3},\ 1 \rangle$$

---

### Summary Table

| Quantity | What it is | Formula | Output type |
|---|---|---|---|
| Unit vector | Arrow pointing same direction as $\mathbf{a}$ but length 1 | $\hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}$ | Vector |
| Scalar projection | How much of $\mathbf{a}$ points along $\mathbf{b}$ (just a number) | $\text{comp}_{\hat{\mathbf{b}}}\,\mathbf{a} = \mathbf{a} \cdot \hat{\mathbf{b}}$ | Scalar (plain number) |
| Vector projection | The actual component of $\mathbf{a}$ in the $\mathbf{b}$ direction (an arrow) | $\text{proj}_{\hat{\mathbf{b}}}\,\mathbf{a} = (\mathbf{a} \cdot \hat{\mathbf{b}})\hat{\mathbf{b}}$ | Vector |

---

### Key Takeaways and Exam Hints

- Always label whether something is a **scalar** or **vector** — they are completely different things
- The dot product always spits out a **scalar** (plain number) — never a vector
- If $\mathbf{a} \cdot \mathbf{b} = 0$ then the two vectors are **perpendicular** — this is a really handy shortcut
- To find the angle between two vectors: calculate the dot product, calculate both lengths, then use $\theta = \cos^{-1}\!\left(\frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}\right)$
- **Scalar projection** = just the size of the shadow (a number)
- **Vector projection** = the actual shadow arrow (a vector)
- $W = \mathbf{F} \cdot \mathbf{d}$ — work is a dot product, because only the force in the direction of movement does anything useful
- When doing incline problems: always find $\hat{\mathbf{b}}$ first, then dot your force vector with it