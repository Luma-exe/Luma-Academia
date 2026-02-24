> [!faq] About this Lecture 
> Class: 33130
> Subject: #mathematicsOne
> Date: 24/02/2025 
> Topics: #math #vectors #3DSpace

## Introduction to Vectors and 3D Space
The module introduces the mathematical language of space, position, and movement, essential for many applications of calculus in the real world.

### Key Concepts and Definitions
* **Vector**: A mathematical object that has both magnitude and direction.
* **Scalar**: A real number, representing physical quantities like time, mass, and density, which have magnitude but no direction.
* **Magnitude of a Vector**: The length or size of a vector, denoted as `|a|` or `||a||`.
* **Unit Vector**: A vector with a magnitude of 1 unit, often denoted with a hat symbol, e.g., `â`.
* **Position Vector**: A vector that represents the position of a point in space relative to the origin.
* **Vector Projection**: The projection of one vector onto another, which can be scalar or vector.

### Representing Vectors
Vectors can be represented in various ways:
* **Arrow Notation**: An arrow in the direction of the vector, with its length proportional to the magnitude.
* **Ordered Pairs/Triples**: Components of the vector in the x, y, and z directions, e.g., `(x, y, z)` or `(x, y, z, ...)` for higher dimensions.
* **i, j, k Notation**: Using the standard basis vectors `i`, `j`, and `k` to represent vectors in 3D space, e.g., `a = 3i + 4j - 2k`.

### Vector Operations
* **Addition and Subtraction**: Vectors can be added or subtracted component-wise.
* **Scalar Multiplication**: A vector can be multiplied by a scalar, changing its magnitude but not its direction.
* **Dot Product**: The dot product of two vectors `a` and `b` is defined as `a · b = |a| |b| cos(θ)`, where `θ` is the angle between the vectors.

### Distance and Angle Calculations
* **Distance Formula in 3D**: The distance between two points `(x1, y1, z1)` and `(x2, y2, z2)` is given by:
```python
import math

def distance_3d(x1, y1, z1, x2, y2, z2):
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2)
```
* **Angle between Vectors**: The angle `θ` between two vectors `a` and `b` can be found using the dot product formula: `cos(θ) = (a · b) / (|a| |b|)`.

### Equations of Simple Surfaces
* **Equation of a Sphere**: The equation of a sphere with center `(x0, y0, z0)` and radius `r` is given by:
```python
(x - x0)**2 + (y - y0)**2 + (z - z0)**2 = r**2
```
* **Equation of a Plane**: The equation of a plane in 3D space can be represented as `ax + by + cz + d = 0`, where `a`, `b`, `c`, and `d` are constants.

### Practical Applications
* **Locating Points in 3D Space**: Points can be located in 3D space using their x, y, and z coordinates.
* **Describing Geometric Shapes**: Simple geometric shapes like cylinders, spheres, and planes can be described using equations and vectors.
* **Finding Distances and Angles**: Distances and angles between points and vectors can be calculated using various formulas and techniques.

### Exam Hints and Connections to Other Topics
> To excel in this module, it's essential to understand the basics of vector operations, distance and angle calculations, and equations of simple surfaces. Practice applying these concepts to various problems, and make sure to review the key concepts and definitions regularly.
> This module lays the foundation for more advanced topics in mathematics, such as calculus, linear algebra, and differential equations. A strong understanding of vectors and 3D space will help you tackle these subjects with confidence.

## Scalar and Vector Projections
The scalar and vector projections of one vector onto another are used to find how much a given vector "points" in a particular direction.

### Key Concepts and Formulas
* **Scalar Projection**: The scalar projection of `a` onto `b` is given by `|a| cos(θ)`, where `θ` is the angle between the vectors.
* **Vector Projection**: The vector projection of `a` onto `b` is given by `(a · b / |b|^2) * b`.

### Calculating Projections
To calculate the scalar and vector projections, you need to find the dot product of the two vectors and the magnitude of the vector onto which you're projecting.

### Practical Applications
* **Finding the Component of a Force**: The scalar and vector projections can be used to find the component of a force acting in a particular direction.
* **Resolving Vectors into Components**: Vectors can be resolved into their components using the scalar and vector projections.

## The Dot Product
The dot product of two vectors is a fundamental concept in linear algebra and is used to calculate the scalar projection of one vector onto another.

### Key Concepts and Formulas
* **Dot Product Formula**: The dot product of two vectors `a` and `b` is given by `a · b = |a| |b| cos(θ)`, where `θ` is the angle between the vectors.
* **Alternative Dot Product Formula**: The dot product can also be calculated using the components of the vectors: `a · b = a_x * b_x + a_y * b_y + a_z * b_z`.

### Calculating the Dot Product
To calculate the dot product, you need to find the components of the two vectors and multiply them together, summing the products.

### Practical Applications
* **Finding the Angle between Vectors**: The dot product can be used to find the angle between two vectors.
* **Determining Perpendicularity**: If the dot product of two vectors is zero, the vectors are perpendicular.

## Textbook Chapter and Additional Resources
For further reading and practice, refer to the textbook chapter on vectors and 3D space. Additional resources, such as the MSSC self-study modules and workshop recordings, are also available to support your learning.