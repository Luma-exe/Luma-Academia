
> [!faq] About this Lecture 
> Class: 33130
> Subject: #mathematicsOne
> Date: 25/02/2025 
> Topics: #math #vectors #3D

## Planes  

### 1️⃣ Plain‑English introduction  
A **plane** is a flat, infinitely large sheet that extends in all directions. In three‑dimensional space a plane can be described by a simple algebraic equation that relates the three coordinates $x$, $y$ and $z$.  

### 2️⃣ Real‑world analogy  
Think of a **wall** in a room. The wall is flat and stretches forever left‑right and up‑down (ignoring the floor and ceiling). The equation of a plane tells you exactly where that wall is located in the room.  

> **Mapping:**  
> - The wall ↔ the plane  
> - The height of the wall above the floor ↔ the constant term in the equation  

### 3️⃣ Formal definition (Cartesian form)  

$$
a\,x + b\,y + c\,z = \text{Const.}
$$

### 4️⃣ Explain every part  

| Symbol | Meaning (plain English) |
|--------|--------------------------|
| $a, b, c$ | Numbers that tell how steep the plane is in the $x$, $y$ and $z$ directions. |
| $x, y, z$ | The three coordinates of any point on the plane. |
| “Const.” | A single number that shifts the whole plane without changing its tilt. |

### 5️⃣ Fully worked examples  

#### Example 1 – Plane $z = 1$  

**Step 1:** Write the equation in the form $a x + b y + c z = \text{Const.}$  
- Here $a = 0$ (no $x$ term), $b = 0$ (no $y$ term), $c = 1$ (coefficient of $z$), and Const = 1.  

**Step 2:** Choose a point to test, e.g. $(2,\, -3,\, 1)$.  

**Step 3:** Substitute the coordinates into the left‑hand side:  

$$
0\cdot 2 \;+\; 0\cdot (-3) \;+\; 1\cdot 1 \;=\; 1
$$

**Step 4:** Compare with the right‑hand side (Const = 1). They are equal, so the point lies on the plane.  

**Answer:** The plane $z = 1$ is a horizontal sheet exactly one unit above the $xy$-plane.  

#### Example 2 – Plane $y = 2$  

**Step 1:** Identify coefficients: $a = 0$, $b = 1$, $c = 0$, Const = 2.  

**Step 2:** Test point $(5,\,2,\,-4)$.  

**Step 3:** Plug in:  

$$
0\cdot 5 \;+\; 1\cdot 2 \;+\; 0\cdot (-4) \;=\; 2
$$

**Step 4:** The left‑hand side equals the constant 2, so the point is on the plane.  

**Answer:** This plane is a vertical sheet parallel to the $xz$-plane, located at $y = 2$.  

#### Example 3 – Plane $x + y + z = 1$  

**Step 1:** Coefficients are $a = 1$, $b = 1$, $c = 1$, Const = 1.  

**Step 2:** Test point $(1,\,0,\,0)$.  

**Step 3:** Compute:  

$$
1\cdot 1 \;+\; 1\cdot 0 \;+\; 1\cdot 0 \;=\; 1
$$

**Step 4:** The sum equals the constant 1, so the point lies on the plane.  

**Answer:** This plane cuts through the three axes, forming a triangular “slice” of space.  

### 6️⃣ Meaning of the answer  
Each equation tells you exactly where a flat sheet sits in 3‑D space; any point that satisfies the equation belongs to that sheet.  

### 7️⃣ One‑sentence summary  
A plane in 3‑D is described by a linear equation $a x + b y + c z = \text{Const.}$ that all its points satisfy.  

---  

## Vector Representation of Planes  

### 1️⃣ Plain‑English introduction  
Instead of a single algebraic equation, we can describe a plane using **vectors**: a point on the plane and two direction arrows that lie inside the plane.  

### 2️⃣ Real‑world analogy  
Imagine a **fabric sheet** stretched on a table.  
- Pick one corner of the sheet and call it point **$a$** (the anchor).  
- Pull two ribbons across the sheet; the ribbons point in directions **$p$** and **$q$**.  
Every point on the sheet can be reached by sliding along the ribbons a certain amount.  

> **Mapping:**  
> - Corner of sheet ↔ point $a$ (a known point on the plane)  
> - Ribbon 1 ↔ vector $p$ (first direction vector)  
> - Ribbon 2 ↔ vector $q$ (second direction vector)  

### 3️⃣ Formal definition  

$$
\mathbf{r}(u,v) \;=\; \mathbf{a} \;+\; u\,\mathbf{p} \;+\; v\,\mathbf{q}
$$

### 4️⃣ Explain every part  

| Symbol | Meaning |
|--------|---------|
| $\mathbf{r}(u,v)$ | Position vector of a generic point on the plane (depends on scalars $u$ and $v$). |
| $\mathbf{a}$ | A fixed vector pointing to a known point on the plane. |
| $\mathbf{p},\mathbf{q}$ | Two non‑parallel vectors that lie **inside** the plane. |
| $u, v$ | Real numbers (scalars) that tell how far to travel along $\mathbf{p}$ and $\mathbf{q}$. |

### 5️⃣ Fully worked example  

**Problem:** Find a vector equation of the plane that passes through $A(1,2,3)$ and is parallel to  

$$
\mathbf{p}= \langle 0,\,1,\,-1\rangle ,\qquad 
\mathbf{q}= \langle 1,\,0,\,-1\rangle .
$$

**Step 1 – Write $\mathbf{a}$.**  
The vector to point $A$ is $\mathbf{a}= \langle 1,\,2,\,3\rangle$.  

**Step 2 – Insert $\mathbf{p}$ and $\mathbf{q}$.**  

$$
\mathbf{r}(u,v)=\langle 1,2,3\rangle \;+\; u\langle 0,1,-1\rangle \;+\; v\langle 1,0,-1\rangle .
$$

**Step 3 – Expand component‑wise.**  

- $x$-component: $1 + u\cdot 0 + v\cdot 1 = 1 + v$  
- $y$-component: $2 + u\cdot 1 + v\cdot 0 = 2 + u$  
- $z$-component: $3 + u\cdot (-1) + v\cdot (-1) = 3 - u - v$

Thus  

$$
\boxed{\;\mathbf{r}(u,v)=\langle\,1+v,\; 2+u,\; 3-u-v\,\rangle\;}
$$

**Answer:** Every point $(x,y,z)$ on the plane can be written as $(1+v,\;2+u,\;3-u-v)$ for some real numbers $u$ and $v$.  

### 6️⃣ Meaning of the answer  
The formula tells you how to start at the known point $A$ and then move any amount along the two given direction arrows to reach any other point on the same flat sheet.  

### 7️⃣ One‑sentence summary  
A plane can be described by a point $\mathbf{a}$ plus any combination $u\mathbf{p}+v\mathbf{q}$ of two non‑parallel direction vectors.  

---  

## Normals to a Plane  

### 1️⃣ Plain‑English introduction  
A **normal vector** is an arrow that sticks straight out of a plane, like a flagpole planted on a sheet of fabric. Knowing a normal and one point on the plane lets you write the plane’s Cartesian equation.  

### 2️⃣ Real‑world analogy  
Picture a **flagpole** on a flat lawn.  
- The lawn is the plane.  
- The flagpole points **perpendicular** (at a right angle) to the lawn.  

> **Mapping:**  
> - Flagpole ↔ normal vector $\mathbf{n}$  
> - A point on the lawn ↔ point $\mathbf{a}$ used in the equation  

### 3️⃣ Formal definition (Cartesian form using a normal)  

$$
\mathbf{n}\cdot(\mathbf{r}-\mathbf{a}) = 0
$$

which expands to  

$$
a\,x + b\,y + c\,z = d,
$$

where $\mathbf{n}= \langle a,b,c\rangle$ and $d = \mathbf{n}\cdot\mathbf{a}$.  

### 4️⃣ Explain every part  

| Symbol | Meaning |
|--------|---------|
| $\mathbf{n}$ | Normal vector $\langle a,b,c\rangle$; points straight out of the plane. |
| $\mathbf{r}$ | Generic position vector $\langle x,y,z\rangle$ of any point on the plane. |
| $\mathbf{a}$ | Position vector of a known point on the plane. |
| “$\cdot$” | Dot product (multiply corresponding components and add). |
| $0$ | The result of the dot product is zero because $\mathbf{r}-\mathbf{a}$ lies **in** the plane and is perpendicular to $\mathbf{n}$. |
| $d$ | A single number equal to $\mathbf{n}\cdot\mathbf{a}$; shifts the plane. |

### 5️⃣ Fully worked example – Cartesian equation from three points  

**Problem:** Find the Cartesian equation of the plane passing through  

$$
A(3,-2,0),\quad B(-1,2,-1),\quad C(0,0,4).
$$

**Step 1 – Compute two direction vectors in the plane.**  

$$
\mathbf{AB}= \mathbf{B}-\mathbf{A}= \langle -1-3,\; 2-(-2),\; -1-0\rangle = \langle -4,\; 4,\; -1\rangle .
$$

$$
\mathbf{AC}= \mathbf{C}-\mathbf{A}= \langle 0-3,\; 0-(-2),\; 4-0\rangle = \langle -3,\; 2,\; 4\rangle .
$$

**Step 2 – Find a normal vector by crossing $\mathbf{AB}$ and $\mathbf{AC}$.**  

Recall the cross‑product formula  

$$
\mathbf{AB}\times\mathbf{AC}= 
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k}\\
-4 & 4 & -1\\
-3 & 2 & 4
\end{vmatrix}
$$

> ⚠️ **Watch out — the $j$ component always gets a MINUS sign**.  

Compute each component:

- **$i$-component:** $(4)(4) - (-1)(2) = 16 - (-2) = 18$  
- **$j$-component:** $-\big[(-4)(4) - (-1)(-3)\big] = -\big[-16 - 3\big] = -(-19) = 19$  
- **$k$-component:** $(-4)(2) - (4)(-3) = -8 - (-12) = 4$

Thus  

$$
\mathbf{n}= \langle 18,\; 19,\; 4\rangle .
$$

**Step 3 – Compute $d = \mathbf{n}\cdot\mathbf{a}$ using point $A$.**  

$$
d = \langle 18,19,4\rangle \cdot \langle 3,-2,0\rangle 
   = 18\cdot 3 \;+\; 19\cdot (-2) \;+\; 4\cdot 0
   = 54 \;-\; 38 \;+\; 0
   = 16 .
$$

**Step 4 – Write the Cartesian equation.**  

$$
18x \;+\; 19y \;+\; 4z \;=\; 16 .
$$

**Answer:** The plane through the three given points satisfies $18x + 19y + 4z = 16$.  

### 6️⃣ Meaning of the answer  
The numbers $18,19,4$ tell you the direction the plane is “facing” (its normal). Any point whose coordinates satisfy the equation lies on that flat sheet.  

### 7️⃣ One‑sentence summary  
A plane’s normal vector, found via a cross product of two direction vectors, together with one point, yields the simple linear equation $a x + b y + c z = d$.  

---  

## Position Vector & Its Magnitude  

### 1️⃣ Plain‑English introduction  
A **position vector** points from the origin (0,0,0) to a point $(x,y,z)$ in space. Its **magnitude** (length) tells you how far that point is from the origin.  

### 2️⃣ Real‑world analogy  
Imagine a **straight arrow** nailed at the origin and reaching out to a spot on a wall. The arrow’s length is the distance from the origin to that spot.  

> **Mapping:**  
> - Arrow ↔ position vector $\mathbf{r}$  
> - Length of arrow ↔ magnitude $|\mathbf{r}|$  

### 3️⃣ Formal definitions  

$$
\mathbf{r}= x\,\mathbf{i}+ y\,\mathbf{j}+ z\,\mathbf{k}
$$

$$
|\mathbf{r}| = \sqrt{x^{2}+y^{2}+z^{2}}
$$

### 4️⃣ Explain every part  

| Symbol | Meaning |
|--------|---------|
| $\mathbf{i},\mathbf{j},\mathbf{k}$ | Unit vectors pointing in the $x$, $y$, and $z$ directions respectively. |
| $x, y, z$ | Coordinates of the point. |
| $|\mathbf{r}|$ | Length (distance) of the vector from the origin. |
| $\sqrt{\;}$ | Square‑root operation (the number that, when squared, gives the inside). |

### 5️⃣ Fully worked example  

**Problem:** Find the magnitude of the position vector for the point $P(2,-3,6)$.  

**Step 1 – Write the vector.**  

$$
\mathbf{r}= 2\mathbf{i} - 3\mathbf{j} + 6\mathbf{k}
$$

**Step 2 – Square each component.**  

- $2^{2}=4$  
- $(-3)^{2}=9$  
- $6^{2}=36$

**Step 3 – Add the squares.**  

$$
4 + 9 + 36 = 49
$$

**Step 4 – Take the square root.**  

$$
|\mathbf{r}| = \sqrt{49}=7
$$

**Answer:** The point $P$ is 7 units away from the origin.  

### 6️⃣ Meaning of the answer  
The distance tells you how far you would have to walk straight from the origin to reach the point $P$.  

### 7️⃣ One‑sentence summary  
A position vector $\mathbf{r}=x\mathbf{i}+y\mathbf{j}+z\mathbf{k}$ has length $|\mathbf{r}|=\sqrt{x^{2}+y^{2}+z^{2}}$.  

---  

## Parametric & Cartesian Representations of Curves  

### 1️⃣ Plain‑English introduction  
A **parametric curve** describes a path by giving each coordinate as a function of a single parameter (usually called $t$). The **Cartesian** form eliminates the parameter and relates the coordinates directly.  

### 2️⃣ Real‑world analogy  
Think of a **movie timeline**: the parameter $t$ is the clock. At each second ($t$) the actor’s position on the screen is given by $(x(t),y(t),z(t))$. If you forget the clock and just look at the picture, you can sometimes describe the actor’s location with a single equation (Cartesian).  

> **Mapping:**  
> - Clock → parameter $t$  
> - Actor’s screen coordinates → $x(t), y(t), z(t)$  

### 3️⃣ Formal definitions  

- **Parametric equations:**  

$$
x = f(t),\qquad y = g(t),\qquad z = h(t)
$$

- **Cartesian equation:** an equation $F(x,y,z)=0$ obtained by eliminating $t$.  

### 4️⃣ Explain every part  

| Symbol | Meaning |
|--------|---------|
| $t$ | A real number that “drives” the motion; think of it as time. |
| $f,g,h$ | Functions that tell you the $x$, $y$, $z$ coordinates for each $t$. |
| $F(x,y,z)=0$ | A relation that all points on the curve satisfy without reference to $t$. |

### 5️⃣ Fully worked examples  

#### Example A – Linear parametric curve (2‑D)  

Given  

$$
x(t)=2t,\qquad y(t)=-t .
$$

**Step 1 – Solve one equation for $t$.**  
From $x = 2t$ we get $t = \dfrac{x}{2}$.

**Step 2 – Substitute $t$ into the other equation.**  

$$
y = -\left(\dfrac{x}{2}\right) = -\dfrac{x}{2}.
$$

**Step 3 – Write the Cartesian form.**  

$$
y = -\dfrac{x}{2}.
$$

**Answer:** The curve is a straight line through the origin with slope $-\tfrac12$.  

#### Example B – Circular parametric curve (2‑D)  

Given  

$$
x(t)=\cos t,\qquad y(t)=\sin t .
$$

**Step 1 – Recall the Pythagorean identity:** $\cos^{2}t + \sin^{2}t = 1$.

**Step 2 – Square each parametric equation.**  

$$
x^{2}= \cos^{2}t,\qquad y^{2}= \sin^{2}t .
$$

**Step 3 – Add the squares.**  

$$
x^{2}+y^{2}= \cos^{2}t + \sin^{2}t = 1.
$$

**Step 4 – Write the Cartesian equation.**  

$$
x^{2}+y^{2}=1.
$$

**Answer:** The curve is the unit circle centred at the origin.  

### 6️⃣ Meaning of the answer  
The Cartesian equations give a direct geometric description (a line or a circle) that matches the motion described by the parameter $t$.  

### 7️⃣ One‑sentence summary  
Parametric equations use a single parameter $t$ to trace a curve; eliminating $t$ yields a Cartesian equation that directly relates $x$, $y$ (and possibly $z$).  

---  

## Vector Equation of a Line  

### 1️⃣ Plain‑English introduction  
A straight line in space can be written as a **vector equation** that starts at a known point and moves in a fixed direction.  

### 2️⃣ Real‑world analogy  
Imagine **walking** from a known landmark (point $a$) while always stepping in the same direction (vector $p$). After $t$ steps you are at a new location.  

> **Mapping:**  
> - Landmark ↔ point $\mathbf{a}$ (a point on the line)  
> - Step direction ↔ vector $\mathbf{p}$ (direction of the line)  
> - Number of steps ↔ scalar $t$  

### 3️⃣ Formal definition  

$$
\mathbf{r}(t)=\mathbf{a}+t\,\mathbf{p}
$$

### 4️⃣ Explain every part  

| Symbol | Meaning |
|--------|---------|
| $\mathbf{r}(t)$ | Position vector of a generic point on the line, depending on $t$. |
| $\mathbf{a}$ | Fixed vector to a known point on the line. |
| $\mathbf{p}$ | Direction vector; tells you which way the line points. |
| $t$ | Real number (scalar) that scales the direction vector; each value of $t$ gives a different point. |

### 5️⃣ Fully worked examples  

#### Example 1 – Line through $A(-1,-1)$ parallel to $\mathbf{p}= \langle 2,-1\rangle$ (2‑D)  

**Step 1 – Write $\mathbf{a}$.**  
$\mathbf{a}= \langle -1,-1\rangle$.  

**Step 2 – Insert into the formula.**  

$$
\mathbf{r}(t)=\langle -1,-1\rangle + t\langle 2,-1\rangle .
$$

**Step 3 – Expand components.**  

- $x(t)= -1 + 2t$  
- $y(t)= -1 - t$

**Step 4 – Obtain Cartesian form.**  
Solve the first equation for $t$: $t = \dfrac{x+1}{2}$.  
Plug into the second:  

$$
y = -1 - \left(\dfrac{x+1}{2}\right) = -1 - \dfrac{x}{2} - \dfrac{1}{2}= -\dfrac{x}{2} - \dfrac{3}{2}.
$$

Multiply by 2 to clear fractions:  

$$
2y = -x - 3 \quad\Longrightarrow\quad x + 2y + 3 = 0.
$$

**Answer:** The line’s vector equation is $\mathbf{r}(t)=\langle -1+2t,\; -1-t\rangle$; its Cartesian equation is $x + 2y + 3 = 0$.  

#### Example 2 – Line through $A(1,1,3)$ and $B(2,1,-1)$ (3‑D)  

**Step 1 – Find direction vector $\mathbf{p}= \mathbf{B}-\mathbf{A}$.**  

$$
\mathbf{p}= \langle 2-1,\; 1-1,\; -1-3\rangle = \langle 1,\,0,\,-4\rangle .
$$

**Step 2 – Write $\mathbf{a}= \langle 1,1,3\rangle$.**  

**Step 3 – Form the vector equation.**  

$$
\mathbf{r}(t)=\langle 1,1,3\rangle + t\langle 1,0,-4\rangle .
$$

**Step 4 – Component form.**  

- $x(t)= 1 + t$  
- $y(t)= 1 + 0\cdot t = 1$  
- $z(t)= 3 - 4t$

**Step 5 – Write Cartesian (standard) form.**  

Because the $y$-component is constant, we write it separately:  

$$
y = 1 .
$$

For the other two components, solve each for $t$:  

$$
t = x - 1 \quad\text{(from }x = 1 + t\text{)} ,
$$
$$
t = \frac{3 - z}{4} \quad\text{(from }z = 3 - 4t\text{)} .
$$

Set them equal:  

$$
x - 1 = \frac{3 - z}{4}.
$$

Multiply by 4:  

$$
4(x - 1) = 3 - z \;\Longrightarrow\; 4x - 4 = 3 - z .
$$

Rearrange:  

$$
4x + z = 7 .
$$

**Final standard form (including the separate $y$ equation):**  

$$
\boxed{\; y = 1,\qquad 4x + z = 7 \;}
$$

> **Note:** The direction vector’s $y$-component is zero, so we cannot divide by it; we write $y=1$ as a separate equation.  

**Answer:** The line passes through $(1,1,3)$ and $(2,1,-1)$; its vector equation is $\mathbf{r}(t)=\langle 1+t,\;1,\;3-4t\rangle$ and its Cartesian description is $y=1,\;4x+z=7$.  

### 6️⃣ Meaning of the answer  
The vector equation tells you how to start at point $A$ and walk in the direction of $\mathbf{p}$. The Cartesian equations give a simple set of algebraic conditions that any point on the line must satisfy.  

### 7️⃣ One‑sentence summary  
A line can be written as $\mathbf{r}(t)=\mathbf{a}+t\mathbf{p}$; converting to Cartesian form yields equations that directly relate the coordinates.  

---  

## Torque (Cross‑Product Application)  

### 1️⃣ Plain‑English introduction  
**Torque** measures how effectively a force makes something rotate around a pivot point. It is the cross product of the **position vector** (from the pivot to the point where the force is applied) and the **force vector**.  

### 2️⃣ Real‑world analogy  
Think of using a **wrench** to loosen a bolt.  
- The length of the wrench from the bolt to your hand is the position vector $\mathbf{r}$.  
- The push you apply on the handle is the force vector $\mathbf{F}$.  
The torque tells you how much turning power you generate.  

> **Mapping:**  
> - Wrench length ↔ $\mathbf{r}$  
> - Push on the handle ↔ $\mathbf{F}$  
> - Turning effect ↔ torque $\boldsymbol{\tau}$  

### 3️⃣ Formal definition  

$$
\boldsymbol{\tau}= \mathbf{r}\times\mathbf{F}
$$

### 4️⃣ Explain every part  

| Symbol | Meaning |
|--------|---------|
| $\boldsymbol{\tau}$ | Torque vector; points along the axis of rotation, following the right‑hand rule. |
| $\mathbf{r}$ | Position vector from the pivot (origin) to the point where the force acts. |
| $\mathbf{F}$ | Force vector (magnitude and direction of the push or pull). |
| $\times$ | Cross product (produces a vector perpendicular to both inputs). |

### 5️⃣ Fully worked example  

**Problem:** A force $\mathbf{F}= \langle 0,\,5,\,0\rangle$ N is applied at the end of a 1‑m long wrench that points along the $x$-axis, i.e. $\mathbf{r}= \langle 1,\,0,\,0\rangle$ m. Find the torque.  

**Step 1 – Write the vectors.**  

$$
\mathbf{r}= \langle 1,0,0\rangle,\qquad \mathbf{F}= \langle 0,5,0\rangle .
$$

**Step 2 – Set up the cross‑product determinant.**  

$$
\boldsymbol{\tau}= 
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k}\\
1 & 0 & 0\\
0 & 5 & 0
\end{vmatrix}
$$

**Step 3 – Compute the $i$-component:**  

$$
(0)(0) - (0)(5) = 0 - 0 = 0 .
$$

**Step 4 – Compute the $j$-component (remember the minus sign):**  

$$
- \big[ (1)(0) - (0)(0) \big] = - (0 - 0) = 0 .
$$

**Step 5 – Compute the $k$-component:**  

$$
(1)(5) - (0)(0) = 5 - 0 = 5 .
$$

**Step 6 – Assemble the torque vector:**  

$$
\boldsymbol{\tau}= \langle 0,\,0,\,5\rangle\ \text{N·m}.
$$

**Answer:** The torque points in the positive $z$-direction with magnitude $5$ N·m.  

### 6️⃣ Meaning of the answer  
A torque of $5$ N·m about the $z$-axis means the wrench would try to rotate the bolt counter‑clockwise when viewed from above.  

### 7️⃣ One‑sentence summary  
Torque equals the cross product $\mathbf{r}\times\mathbf{F}$; it points along the axis of rotation and its magnitude tells how strong the turning effect is.  

---  

## Magnetic Force on a Moving Charge  

### 1️⃣ Plain‑English introduction  
A charged particle moving through a magnetic field experiences a force that is perpendicular to both its velocity and the magnetic field. This force is given by the cross product $\mathbf{v}\times\mathbf{B}$ multiplied by the charge $q$.  

### 2️⃣ Real‑world analogy  
Imagine a **boat** (the charge) moving across a **river current** (magnetic field). The current pushes the boat sideways, not forward or backward.  

> **Mapping:**  
> - Boat’s speed and direction ↔ velocity $\mathbf{v}$  
> - River flow ↔ magnetic field $\mathbf{B}$  
> - Resulting sideways push ↔ magnetic force $\mathbf{F}$  

### 3️⃣ Formal definition  

$$
\mathbf{F}= q\,(\mathbf{v}\times\mathbf{B})
$$

### 4️⃣ Explain every part  

| Symbol | Meaning |
|--------|---------|
| $\mathbf{F}$ | Magnetic force vector (newtons). |
| $q$ | Electric charge (coulombs). |
| $\mathbf{v}$ | Velocity vector of the particle (m/s). |
| \