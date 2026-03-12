
> [!faq] About this Lecture 
> Class: 33130
> Subject: #mathematicsOne
> Date: 05/03/2025 
> Topics: #math

## What is a Matrix?

- A **matrix** is a rectangular array of numbers arranged in rows and columns
- A matrix with $m$ rows and $n$ columns has **order** $m \times n$
- Example of a $3 \times 3$ matrix:

$$A = \begin{pmatrix} 1 & -2 & 0 \\ 9 & 1 & 2 \\ 1 & 3 & 4 \end{pmatrix}$$

- Example of a $2 \times 4$ matrix:

$$B = \begin{pmatrix} 2 & 6 & -2 & 3 \\ -1 & 5 & 0 & 7 \end{pmatrix}$$

## Vectors (Special Matrices)

- A **row vector** is a $1 \times n$ matrix (1 row, many columns):
  - Example: $\mathbf{a} = (2, 1, 5)$ — this is a $1 \times 3$ matrix
- A **column vector** is an $m \times 1$ matrix (many rows, 1 column):

$$\mathbf{a} = \begin{pmatrix} 2 \\ 1 \\ 5 \end{pmatrix}$$

- Column vectors can represent points or directions in 3D space using coordinates $x$, $y$, $z$

## Matrix Elements (Notation)

- Each entry in a matrix is called an **element**
- The element in the $i$-th row and $j$-th column is written as $a_{ij}$
  - $i$ = row number, $j$ = column number
- Example: for the matrix $A$ above:
  - $a_{23} = 2$ (row 2, column 3)
  - $a_{31} = 1$ (row 3, column 1)

## Types of Square Matrices

- A **square matrix** has the same number of rows and columns ($n \times n$)
- **Upper triangular matrix** — all entries *below* the main diagonal are zero:

$$\begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ 0 & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & a_{nn} \end{pmatrix}$$

- **Lower triangular matrix** — all entries *above* the main diagonal are zero:

$$\begin{pmatrix} b_{11} & 0 & \cdots & 0 \\ b_{21} & b_{22} & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ b_{n1} & b_{n2} & \cdots & b_{nn} \end{pmatrix}$$

- **Diagonal matrix** — all entries *off* the main diagonal are zero:

$$\begin{pmatrix} d_{11} & 0 & \cdots & 0 \\ 0 & d_{22} & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & d_{nn} \end{pmatrix}$$

## Matrix Equality

- Two matrices are **equal** if:
  - They have the **same size** (same order $m \times n$)
  - Every corresponding element is equal: $a_{ij} = b_{ij}$ for all $i, j$
- Example: if $A$ and $B$ are both $3 \times 3$ with identical entries, then $A = B$
- If any element differs, or if the sizes differ, the matrices are **not equal**

---

# Matrix Operations

## Addition and Subtraction

- You can only add or subtract matrices that have **the same order**
- Add/subtract element by element:

$$A + B = \begin{pmatrix} a_{11}+b_{11} & a_{12}+b_{12} \\ a_{21}+b_{21} & a_{22}+b_{22} \end{pmatrix}$$

- Example:

$$\begin{pmatrix} 2 & 1 \\ 1 & 0 \\ -1 & 3 \end{pmatrix} + \begin{pmatrix} 1 & 0 \\ 2 & 1 \\ 3 & 1 \end{pmatrix} = \begin{pmatrix} 3 & 1 \\ 3 & 1 \\ 2 & 4 \end{pmatrix}$$

- If the orders differ (e.g. $3 \times 2$ plus $2 \times 4$), the operation is **not defined** ✗

## Properties of Matrix Addition

- **Commutative**: $A + B = B + A$
- **Associative**: $A + (B + C) = (A + B) + C$
- **Zero matrix** $\mathbf{0}$: a matrix where every element is 0
  - Acts like the number 0 in addition: $A + \mathbf{0} = \mathbf{0} + A = A$

## Scalar Multiplication

- To multiply a matrix by a scalar (a single number) $k$, multiply **every element** by $k$:

$$k \begin{pmatrix} 2 & 1 & 0 \\ 1 & 1 & 1 \\ 0 & 1 & 2 \end{pmatrix} = \begin{pmatrix} 2k & k & 0 \\ k & k & k \\ 0 & k & 2k \end{pmatrix}$$

- Note: scalar multiplication is **commutative**: $kA = Ak$

---

# Product of Matrices

## The Rule for Matrix Multiplication

- To multiply matrix $A$ by matrix $B$, the **number of columns of $A$** must equal the **number of rows of $B$**
- If $A$ is $p \times m$ and $B$ is $m \times q$, then the result $C = AB$ is $p \times q$
- Shorthand check: $(p \times \underline{m}) \cdot (\underline{m} \times q) = p \times q$ — the inner numbers must match

## Row Vector × Column Vector (The Core Idea)

- Multiply each pair of corresponding elements, then sum:

$$(1 \quad -2 \quad 0) \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix} = 1 \cdot 1 + (-2) \cdot 1 + 0 \cdot 2 = -1$$

- This is a $1 \times 3$ times $3 \times 1$ giving a $1 \times 1$ result (a single number)

## General Matrix Multiplication

- Each element $c_{ij}$ of the result $C = AB$ is found by taking the **dot product of row $i$ of $A$** with **column $j$ of $B$**:

$$c_{ij} = \sum_{k=1}^{m} a_{ik} b_{kj}$$

- Example:

$$A = \begin{pmatrix} 1 & -2 & 0 \\ 0 & 1 & 2 \\ 1 & 3 & 2 \end{pmatrix}, \quad B = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 3 \\ 2 & 0 & 2 \end{pmatrix}$$

$$AB = \begin{pmatrix} -1 & -2 & -5 \\ 5 & 1 & 7 \\ 8 & 3 & 14 \end{pmatrix}$$

- The top-left entry: $1 \cdot 1 + (-2) \cdot 1 + 0 \cdot 2 = -1$

## Matrix Multiplication is NON-Commutative

- In general: $AB \neq BA$
- This is one of the most important differences between matrix algebra and regular number algebra
- Example:

$$AB = \begin{pmatrix} 1 & 3 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix} \neq \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 3 \\ 2 & 1 \end{pmatrix} = BA$$

## Strange Properties of Matrix Multiplication

- $AB = \mathbf{0}$ does **not** necessarily mean $A = \mathbf{0}$ or $B = \mathbf{0}$:

$$\begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}\begin{pmatrix} 2 & 0 \\ -2 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$

- $AD = AC$ does **not** necessarily mean $D = C$:

$$\begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}\begin{pmatrix} 3 & 0 \\ -3 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = AB \quad \text{but } B \neq D$$

## Matrix Algebra Summary

- **Associative** multiplication: $A(BC) = (AB)C$
- **Distributive**: $(A + B)C = AC + BC$
- **Scalar**: $k(AB) = (kA)B$
- **NOT commutative**: $AB \neq BA$ in general

---

# The Transpose of a Matrix

## Definition

- The **transpose** of a matrix $A$, written $A^T$, is obtained by swapping rows and columns
  - The $i$-th row of $A$ becomes the $i$-th column of $A^T$
- Example:

$$A = \begin{pmatrix} 1 & 2 \\ 6 & 3 \\ 0 & 5 \\ 7 & 2 \end{pmatrix} \Rightarrow A^T = \begin{pmatrix} 1 & 6 & 0 & 7 \\ 2 & 3 & 5 & 2 \end{pmatrix}$$

## Transpose Rules

- $(A + B)^T = A^T + B^T$
- $(A^T)^T = A$ (transpose of a transpose is the original)
- $(AB)^T = B^T A^T$ — note the **reversal of order**

---

# Special Matrices

## The Identity Matrix

- The identity matrix $I$ is a square diagonal matrix with 1s on the diagonal and 0s elsewhere:

$$I = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

- It acts like the number 1 in multiplication: $AI = IA = A$

## The Inverse of a Matrix

- The **inverse** of a square matrix $A$, written $A^{-1}$, satisfies:

$$A^{-1}A = I \quad \text{and} \quad AA^{-1} = I$$

- A matrix only has an inverse if its **determinant is non-zero** (det $A \neq 0$)
- For a $2 \times 2$ matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the inverse is:

$$A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

- The quantity $ad - bc$ is called the **determinant** of $A$, written $\det(A)$ or $|A|$
- If $\det(A) = 0$, the matrix has **no inverse** (called a singular matrix)

---

# Determinants

## Determinant of a 2×2 Matrix

$$\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$$

## Determinant of a 3×3 Matrix (Cofactor Expansion)

- Expand along the top row using cofactors with alternating signs $+, -, +$:

$$\Delta = \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix}$$

$$= a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31})$$

### Steps to Compute a 3×3 Determinant
	
1. Take the **top row** elements: $a_{11},\ a_{12},\ a_{13}$
2. Apply signs: $+,\ -,\ +$
3. Multiply each by the determinant of the **minor matrix** (the $2 \times 2$ matrix left after removing that element's row and column)

### Example

$$\det \begin{pmatrix} 3 & 2 & 1 \\ 1 & 2 & 1 \\ 1 & 2 & 2 \end{pmatrix}$$

$$= 3\begin{vmatrix}2&1\\2&2\end{vmatrix} - 2\begin{vmatrix}1&1\\1&2\end{vmatrix} + 1\begin{vmatrix}1&2\\1&2\end{vmatrix}$$

$$= 3(4-2) - 2(2-1) + 1(2-2) = 6 - 2 + 0 = 4$$

## Tricks for Determinants

- If any **row or column is all zeros**, the determinant is **zero**
- If any **two rows or columns are identical**, the determinant is **zero**
- For a **triangular matrix** (upper or lower), the determinant is the **product of the diagonal entries**:

$$\det \begin{pmatrix} 1 & 3 & 5 \\ 0 & 2 & 3 \\ 0 & 0 & 6 \end{pmatrix} = 1 \times 2 \times 6 = 12$$

---

# Solving Systems of Linear Equations

## Writing a System in Matrix Form

- Any system of linear equations can be written as $A\mathbf{x} = \mathbf{b}$
- Example:

$$x_1 - 2x_2 = 5 \quad \text{and} \quad 3x_1 + x_2 = 1$$

becomes:

$$\begin{pmatrix} 1 & -2 \\ 3 & 1 \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}$$

## Solving Using the Inverse

- Multiply both sides on the **left** by $A^{-1}$:

$$A^{-1}A\mathbf{x} = A^{-1}\mathbf{b} \Rightarrow \mathbf{x} = A^{-1}\mathbf{b}$$

- This only works if $\det(A) \neq 0$

## Cramer's Rule

- For a system $A\mathbf{x} = \mathbf{b}$, each variable $x_i$ can be found using:

$$x_i = \frac{D_i}{D}$$

where:
- $D = \det(A)$ — determinant of the coefficient matrix
- $D_i$ = determinant of the matrix formed by **replacing column $i$ of $A$** with the column vector $\mathbf{b}$

### Example using Cramer's Rule

System:
$$2x_1 + 3x_2 = 5$$
$$5x_1 + 10x_2 = 3$$

$$D = \det \begin{pmatrix} 2 & 3 \\ 5 & 10 \end{pmatrix} = 2 \cdot 10 - 3 \cdot 5 = 20 - 15 = 5$$

$$D_1 = \det \begin{pmatrix} 5 & 3 \\ 3 & 10 \end{pmatrix} = 50 - 9 = 41 \quad \Rightarrow \quad x_1 = \frac{41}{5}$$

Wait — using the lecture's answer:

$$D = 20 - 15 = 5, \quad D_1 = 50-9=41 \text{ (check signs carefully per your augmented system)}$$

> In general: always compute $D$ first. If $D = 0$, Cramer's rule cannot be used.

---

# Gaussian Elimination (Row Reduction)

## What Is It?

- A method to solve a system of linear equations by converting the augmented matrix to **row-echelon form** (upper triangular), then using **back-substitution**
- Row-echelon form means all entries **below** the main diagonal are zero

## The Augmented Matrix

- Combine the coefficient matrix $A$ and the right-hand side $\mathbf{b}$ into one matrix $[A|\mathbf{b}]$:

$$\left[\begin{array}{ccc|c} -1 & 1 & 2 & 2 \\ 3 & -1 & 1 & 6 \\ -1 & 3 & 4 & 4 \end{array}\right]$$

## Allowed Row Operations

These operations do **not change the solution** of the system:
- Multiply any row by a non-zero scalar
- Add a multiple of one row to another row
- Swap any two rows

## Example: Full Gaussian Elimination

System:
$$-x_1 + x_2 + 2x_3 = 2$$
$$3x_1 - x_2 + x_3 = 6$$
$$-x_1 + 3x_2 + 4x_3 = 4$$

Step 1: Augmented matrix:

$$\left[\begin{array}{ccc|c} -1 & 1 & 2 & 2 \\ 3 & -1 & 1 & 6 \\ -1 & 3 & 4 & 4 \end{array}\right]$$

Step 2: Apply $R_2 \to R_2 + 3R_1$ and $R_3 \to R_3 - R_1$:

$$\left[\begin{array}{ccc|c} -1 & 1 & 2 & 2 \\ 0 & 2 & 7 & 12 \\ 0 & 2 & 2 & 2 \end{array}\right]$$

Step 3: Apply $R_3 \to R_3 - R_2$:

$$\left[\begin{array}{ccc|c} -1 & 1 & 2 & 2 \\ 0 & 2 & 7 & 12 \\ 0 & 0 & -5 & -10 \end{array}\right]$$

Step 4: Back-substitution:
- From row 3: $-5x_3 = -10 \Rightarrow x_3 = 2$
- From row 2: $2x_2 + 7(2) = 12 \Rightarrow 2x_2 = -2 \Rightarrow x_2 = -1$
- From row 1: $-x_1 + (-1) + 2(2) = 2 \Rightarrow -x_1 = -1 \Rightarrow x_1 = 1$

Solution: $x_1 = 1,\ x_2 = -1,\ x_3 = 2$

---

# Finding the Inverse of a 3×3 Matrix

## Method 1: Row Reduction (Augmented with Identity)

1. Write the matrix $A$ next to the identity matrix $I$: $[A | I]$
2. Use row operations to transform the **left side into $I$**
3. The **right side becomes $A^{-1}$**

### Example

$$A = \begin{pmatrix} 3 & 2 & 1 \\ 1 & 2 & 1 \\ 1 & 2 & 2 \end{pmatrix}$$

Start with:

$$\left[\begin{array}{ccc|ccc} 3 & 2 & 1 & 1 & 0 & 0 \\ 1 & 2 & 1 & 0 & 1 & 0 \\ 1 & 2 & 2 & 0 & 0 & 1 \end{array}\right]$$

Apply row operations until the left side becomes $I$; the right side is then $A^{-1}$

## Method 2: Adjugate / Cofactor Method

### Steps

1. Compute the **matrix of cofactors** $A^C$
   - Each cofactor $C_{ij}$ is the **signed** determinant of the minor matrix (the $2 \times 2$ matrix left when you delete row $i$ and column $j$):

$$C_{ij} = (-1)^{i+j} M_{ij}$$

   - The sign pattern is:

$$\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix}$$

2. **Transpose** the cofactor matrix to get the **Adjugate**:

$$\text{Adj}(A) = (A^C)^T$$

3. Divide by the determinant:

$$A^{-1} = \frac{1}{\det A} \cdot \text{Adj}(A) = \frac{(A^C)^T}{\det A}$$

### Example

$$A = \begin{pmatrix} 2 & 1 & 2 \\ 0 & 1 & 3 \\ 3 & 0 & 1 \end{pmatrix}$$

Step 1 — Compute det($A$):

$$\det(A) = 2\begin{vmatrix}1&3\\0&1\end{vmatrix} - 1\begin{vmatrix}0&3\\3&1\end{vmatrix} + 2\begin{vmatrix}0&1\\3&0\end{vmatrix}$$

$$= 2(1-0) - 1(0-9) + 2(0-3) = 2 + 9 - 6 = 5$$

Since $\det(A) = 5 \neq 0$, the inverse exists.

Step 2 — Compute the cofactor matrix $A^C$:

- $C_{11} = +\begin{vmatrix}1&3\\0&1\end{vmatrix} = 1$, $C_{12} = -\begin{vmatrix}0&3\\3&1\end{vmatrix} = 9$, $C_{13} = +\begin{vmatrix}0&1\\3&0\end{vmatrix} = -3$
- $C_{21} = -\begin{vmatrix}1&2\\0&1\end{vmatrix} = -1$, $C_{22} = +\begin{vmatrix}2&2\\3&1\end{vmatrix} = -4$, $C_{23} = -\begin{vmatrix}2&1\\3&0\end{vmatrix} = 3$
- $C_{31} = +\begin{vmatrix}1&2\\1&3\end{vmatrix} = 1$, $C_{32} = -\begin{vmatrix}2&2\\0&3\end{vmatrix} = -6$, $C_{33} = +\begin{vmatrix}2&1\\0&1\end{vmatrix} = 2$

$$A^C = \begin{pmatrix} 1 & 9 & -3 \\ -1 & -4 & 3 \\ 1 & -6 & 2 \end{pmatrix}$$

Step 3 — Transpose to get Adj($A$):

$$\text{Adj}(A) = (A^C)^T = \begin{pmatrix} 1 & -1 & 1 \\ 9 & -4 & -6 \\ -3 & 3 & 2 \end{pmatrix}$$

Step 4 — Divide by det:

$$A^{-1} = \frac{1}{5}\begin{pmatrix} 1 & -1 & 1 \\ 9 & -4 & -6 \\ -3 & 3 & 2 \end{pmatrix}$$

---

# Special Cases: When Does a Solution Exist?

## When det($A$) = 0

- If $\det(A) = 0$, the matrix is **singular** — no inverse exists
- The system $A\mathbf{x} = \mathbf{b}$ may have:
  - **No solution** (inconsistent system — the lines/planes are parallel but not the same)
  - **Infinitely many solutions** (the equations are dependent — the lines/planes overlap)

## Geometric Interpretation (2 Equations, 2 Unknowns)

- Each equation $ax_1 + bx_2 = c$ represents a **straight line** in 2D
- Solving the system finds the **intersection point**
- Three possible outcomes:
  - Lines intersect at **one point** → unique solution ($\det(A) \neq 0$)
  - Lines are **parallel** → no solution ($\det(A) = 0$, $b$ is inconsistent)
  - Lines are **the same** → infinitely many solutions ($\det(A) = 0$, equations are multiples of each other)

## Under/Overspecification

- Even if the number of equations equals the number of unknowns, a unique solution is **not guaranteed**
- You must always check $\det(A)$ or use row reduction to determine the number of solutions

---

# Full Matrix Algebra Rules Summary

## Equality
- If $A = B$ and $A = C$, then $B = C$

## Addition
- $A + B = B + A$ (commutative)
- $A + (B + C) = (A + B) + C$ (associative)
- $A + \mathbf{0} = A$

## Multiplication
- $(A + B)C = AC + BC$ (distributive)
- $k(A + B) = kA + kB$
- $k(AB) = (kA)B$
- $A(BC) = (AB)C$ (associative)
- $AB \neq BA$ in general (**non-commutative**)

## Special Matrices
- $AI = IA = A$ (identity)
- $A^{-1}A = AA^{-1} = I$ (inverse, only if $\det A \neq 0$)

## Transposes
- $(A + B)^T = A^T + B^T$
- $(AB)^T = B^T A^T$
- $(A^T)^T = A$

## Important "Gotchas"
- $AB = \mathbf{0}$ does **not** mean $A = \mathbf{0}$ or $B = \mathbf{0}$
- $AD = AC$ does **not** mean $D = C$