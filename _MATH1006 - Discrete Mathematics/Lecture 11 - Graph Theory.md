
> [!faq] About this Lecture
> Class: MATH1006
> Subject: #discreteMathematics 
> Topics: #math/discreteMathematics 
> Date: 2025-06-05 at 11:00

## Overview of Topics

- Graph Theory
- Edge-Endpoint Functions
- Degree
- Walks and Paths
- Euler's Theorem(s)
- Finding Euler Paths
- Trees
- Kruskal's Algorithm
- Catalan Numbers

## Graph Theory Basics

- In discrete mathematics, a graph consists of:
    - A set $V$ of vertices
    - A set $E$ of edges connecting the vertices
- Each edge connects vertices and may have one or two specified endpoints.

## Terms Associated with Graphs

- **Edge**: A connection between vertices.
- **Loop**: An edge with one endpoint.
- **Parallel Edges**: Two edges connecting the same vertices.
- **Isolated Vertex**: A vertex with no edges.
- **Empty Graph**: A graph with no vertices.

## Simple Graphs

- A simple graph has no loops or parallel edges.
- Edges are defined uniquely by their endpoints.

## Degree of a Vertex

- The **degree** of a vertex $v$ is the number of edges incident to it:
    - Calculated as $deg(v)$.
- **Total Degree**: The sum of all vertex degrees in a graph:
    - Given by $\sum_{v \in V} deg(v)$.
- **Useful Fact**: The total degree is twice the number of edges:
    - $$\sum_{v \in V} deg(v) = 2 |E|$$.

## Walks, Paths, and Circuits

- A **walk** is a sequence of vertices and edges.
- A **path** does not repeat edges; a **circuit** starts and ends at the same vertex.
- An **Euler Path** uses every edge exactly once.
- An **Euler Circuit** uses every edge exactly once and returns to the starting vertex.

## Euler’s Theorem

- A connected graph has an Euler circuit if and only if all vertices have even degree.

### Proof Outline:

1. If the graph has an Euler circuit, every vertex encountered must have an even degree.
2. If every vertex has even degree, you can construct an Euler circuit.

### Finding Euler Paths

- A connected graph has an Euler path if exactly two vertices have odd degrees.

## Trees

- A **tree** is a connected graph with no circuits.
- If $G$ has $n$ vertices and $e$ edges:
    - If $G$ is connected, then $e \geq n - 1$.
    - If $G$ has no circuits, then $e \leq n - 1$.
    - For a tree, $e = n - 1$.

## Spanning Trees

- A **spanning tree** includes all vertices of a graph with the minimum number of edges.
- Kruskal’s Algorithm finds minimal-weight spanning trees:
    1. Start with vertices, no edges.
    2. Add the least weight edge that doesn’t form a circuit.
    3. Repeat until you either have a spanning tree or no edges left.

## Catalan Numbers

- **Catalan numbers** count various combinatorial structures.
- The $n$-th Catalan number is given by: $$ c_n = \frac{1}{n + 1} \binom{2n}{n} $$
    - Where $\binom{2n}{n}$ represents the binomial coefficient.

## Applications of Graph Theory

- Useful in:
    - Social Networks
    - Transport networks
    - Computer Networks
    - Chemistry
    - Physics

## Key Exercises

- Draw all simple graphs for a given vertex set.
- Apply Euler's theorem to determine the presence of Euler circuits.
- Use Kruskal’s Algorithm to find minimal spanning trees.