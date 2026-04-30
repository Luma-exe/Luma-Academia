
> [!faq] About this Lecture 
> Class: 33130
> Subject: #mathematicsOne
> Date: 30/04/2025 
> Topics: #math 

### What is a Differential Equation?

A differential equation describes a **connection between a function and its derivatives**, arising from physical laws. The goal is to use this connection, together with initial conditions, to find y(t)y(t) y(t).

#### Key Quantities

- yy y — the value of the function at a given tt t
- dydt\dfrac{dy}{dt} dtdy​ — the **rate of change** (velocity; slope on the graph)
- d2ydt2\dfrac{d^2y}{dt^2} dt2d2y​ — the **rate of change of the rate of change** (acceleration; related to curvature on the graph)

---

### Real-World Examples of 2nd-Order DEs

These appear throughout physics and engineering:

- **Pendulum motion** d2θdt2+gℓsin⁡θ=0\frac{d^2\theta}{dt^2} + \frac{g}{\ell}\sin\theta = 0dt2d2θ​+ℓg​sinθ=0
- **Waves** d2udx2+k2u=0\frac{d^2u}{dx^2} + k^2u = 0dx2d2u​+k2u=0
- **Time-independent Schrödinger equation** (quantum mechanics) ℏ2md2ψdx2+(E−V(x))ψ=0\frac{\hbar}{2m}\frac{d^2\psi}{dx^2} + (E - V(x))\psi = 02mℏ​dx2d2ψ​+(E−V(x))ψ=0
- **Orbital dynamics** d2udθ2+u=kmh2\frac{d^2u}{d\theta^2} + u = \frac{k}{mh^2}dθ2d2u​+u=mh2k​

---

### Illustrative Examples

#### First-Order Example — Newton's Law of Cooling

dTdt=−k(T−T0)\frac{dT}{dt} = -k(T - T_0)dtdT​=−k(T−T0​)

|Variable|Meaning|
|---|---|
|TT T|Current temperature|
|T0T_0 T0​|Ambient (surrounding) temperature|
|kk k|Positive proportionality constant|

- The rate of change of temperature is **negative** and **proportional** to the difference from ambient
- As T→T0T \to T_0 T→T0​, the rate of cooling decreases → exponential decay curve
- You can often determine solution behaviour just by analysing how derivatives change

#### Second-Order Example — Mass on a Spring

Restoring force is proportional to displacement:

Fres=−kyF_{\text{res}} = -kyFres​=−ky

Applying Newton's 2nd Law (F=md2ydt2F = m\dfrac{d^2y}{dt^2} F=mdt2d2y​):

md2ydt2=−kym\frac{d^2y}{dt^2} = -kymdt2d2y​=−ky d2ydt2=−kmy\boxed{\frac{d^2y}{dt^2} = -\frac{k}{m}y}dt2d2y​=−mk​y​

> **Key insight:** At each point, the curvature of y(t)y(t) y(t) is proportional to −y-y −y → the solution oscillates (sine/cosine)

---

### Directly Integrable Differential Equations

Any DE of the form:

dnydtn=f(t)\frac{d^n y}{dt^n} = f(t)dtndny​=f(t)

can be solved by **integrating nn n times**. Each integration introduces one new arbitrary constant.

#### Procedure

1. Integrate both sides with respect to the independent variable
2. Add a constant of integration each time
3. Repeat until yy y is isolated
4. Apply initial conditions to find constants (giving the **complete solution**)

#### Worked Example 1 — Polynomial

Find the general solution to:

d2ydx2=2x+1\frac{d^2y}{dx^2} = 2x + 1dx2d2y​=2x+1

**Step 1 — Integrate both sides w.r.t. xx x:**

∫d2ydx2 dx=∫(2x+1) dx\int \frac{d^2y}{dx^2}\,dx = \int (2x + 1)\,dx∫dx2d2y​dx=∫(2x+1)dx dydx=x2+x+C\frac{dy}{dx} = x^2 + x + Cdxdy​=x2+x+C

**Step 2 — Integrate again:**

∫dydx dx=∫(x2+x+C) dx\int \frac{dy}{dx}\,dx = \int (x^2 + x + C)\,dx∫dxdy​dx=∫(x2+x+C)dx y(x)=13x3+12x2+Cx+D\boxed{y(x) = \frac{1}{3}x^3 + \frac{1}{2}x^2 + Cx + D}y(x)=31​x3+21​x2+Cx+D​

> Two integrations → two arbitrary constants CC C and DD D

#### Worked Example 2 — Ballistic Trajectory

A projectile under gravity only. Let yy y be vertical position, tt t be time.

**Setup:**

Fgrav=−mg,F=md2ydt2F_{\text{grav}} = -mg, \quad F = m\frac{d^2y}{dt^2}Fgrav​=−mg,F=mdt2d2y​ ⇒d2ydt2=−g\Rightarrow \frac{d^2y}{dt^2} = -g⇒dt2d2y​=−g

**Step 1 — Integrate w.r.t. tt t:**

dydt=∫−g dt=−gt+C\frac{dy}{dt} = \int -g\,dt = -gt + Cdtdy​=∫−gdt=−gt+C

**Step 2 — Integrate again:**

y(t)=∫(−gt+C) dt=−12gt2+Ct+Dy(t) = \int(-gt + C)\,dt = -\frac{1}{2}gt^2 + Ct + Dy(t)=∫(−gt+C)dt=−21​gt2+Ct+D

**Step 3 — Apply initial conditions** at t=0t = 0 t=0:

|Condition|Result|
|---|---|
|y(0)=y0y(0) = y_0 y(0)=y0​|D=y0D = y_0 D=y0​|
|y′(0)=uy'(0) = u y′(0)=u (initial velocity)|C=uC = u C=u|

**Complete solution:**

y(t)=−12gt2+ut+y0\boxed{y(t) = -\frac{1}{2}gt^2 + ut + y_0}y(t)=−21​gt2+ut+y0​​

This is the familiar kinematic equation s=ut+12at2s = ut + \frac{1}{2}at^2 s=ut+21​at2 ✓

---

### General vs. Complete Solution

|Term|Definition|
|---|---|
|**General Solution**|Solution valid for _any_ initial conditions; contains arbitrary constants|
|**Complete Solution**|General solution with constants determined by specific initial conditions|

- A **2nd-order DE** always has **two arbitrary constants** in its general solution
- You need **two initial conditions** to find the complete solution (e.g. y(0)y(0) y(0) and y′(0)y'(0) y′(0))

---

### Connections to Other Topics

- Links forward to: **homogeneous 2nd-order linear DEs** (e.g. mass-spring with no forcing)
- The mass-spring DE d2ydt2=−kmy\dfrac{d^2y}{dt^2} = -\dfrac{k}{m}y dt2d2y​=−mk​y is *not* directly integrable — requires other methods (characteristic equation, ansatz)
- Newton's law of cooling (1st order) → solved by **separation of variables** or **integrating factor**

---

### Summary of Key Rules

- dnydtn=f(t)\dfrac{d^n y}{dt^n} = f(t) dtndny​=f(t) → integrate nn n times, get nn n constants
- Each integration adds one arbitrary constant
- Initial conditions on yy y and y′y' y′ pin down both constants for a 2nd-order DE
- Physical intuition (slope, curvature) helps verify solution behaviour before solving