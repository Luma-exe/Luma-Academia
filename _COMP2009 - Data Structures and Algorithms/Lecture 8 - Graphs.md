
> [!faq] About this Lecture
> Class: COMP2009
> Subject: #dataStructuresAndAlgorthims 
> Topics: #coding 
> Date: 2025-05-05 at 12:47

## Overview

- Graphs are fundamental data structures in computer science.
- Contains a finite set of nodes (vertices, V) and line segments (edges, E).
- A graph is defined as ( G = (V, E) ).

## Key Definitions

- **Vertex**: A node in the graph.
- **Edge**: A line connecting two vertices; can be directed or undirected.
- **Directed Graph (Digraph)**: Edges have a direction; traversed in one way.
- **Undirected Graph**: Edges can be traversed in both directions.
- **Path**: A sequence of vertices where each vertex is adjacent to the next.
- **Cycle**: A path that starts and ends at the same vertex.
- **Connected Graph**: A graph where there is a path between any two vertices.
- **Disjoint Graph**: A graph that is not connected.
- **Tree**: A connected graph with no cycles.
- **Degree**: The number of edges incident to a vertex.
- **Outdegree & Indegree**: Number of edges leaving and entering a vertex, respectively.
- **Weighted Graph**: A graph where edges have associated weights.

## Graph Representation

### Adjacency Matrix

- Use a 2D array to represent graph connectivity.
- For a graph with n vertices:
    - ( \text{Adj}(i, j) = 1 ) if there's an edge from vertex i to j, else ( \text{Adj}(i, j) = 0 ).
- For weighted graphs, store weights instead of binary values.

### Adjacency List

- Consists of an array of lists; each list stores adjacent vertices for each vertex.
- More space-efficient for sparse graphs.

```cpp
// Sample adjacency list in C++
#include <vector>
#include <iostream>
#include <fstream>
#include <list>
```

class Graph { int gSize; std::list* graph;

public: Graph(int size) { gSize = size; graph = new std::list[gSize]; }

```
void addEdge(int src, int dest) {
    graph[src].push_back(dest); 
    graph[dest].push_back(src); // For undirected graph
}
```

}; ```

## Graph Traversal Algorithms

### Depth First Traversal (DFT)

- Visits vertices as far as possible along each branch before backtracking.
- Implemented using recursion or stack.

```cpp
void depth_first_traversal(int v, bool visited[]) {
    visited[v] = true;
    std::cout &lt;&lt; v &lt;&lt; " is visited\n";
    
    for (auto it = graph[v].begin(); it != graph[v].end(); ++it) {
        if (!visited[*it]) {
            depth_first_traversal(*it, visited);
        }
    }
}
```

### Breadth First Traversal (BFT)

- Visits all neighbors at the present depth level before moving on to the vertices at the next level.
- Implemented using a queue.

```cpp
void breadth_first_traversal() {
    bool visited[gSize];
    std::queue<int> bfQueue;

for (int i = 0; i &lt; gSize; i++) {
    if (!visited[i]) {
        bfQueue.push(i);
        visited[i] = true;

        while (!bfQueue.empty()) {
            int k = bfQueue.front();
            bfQueue.pop();
            std::cout << k << " is visited\n";

            for (auto graphIt = graph[k].begin(); graphIt != graph[k].end(); ++graphIt) {
                if (!visited[*graphIt]) {
                    bfQueue.push(*graphIt);
                }
            }
        }
    }
}
```

## Minimum Spanning Tree (MST)

- A spanning tree that connects all vertices with the minimal total edge weight.
- Two well-known algorithms:
    - **Prim’s Algorithm**
    - **Kruskal’s Algorithm** (not covered here)

### Prim's Algorithm Outline

1. Start with any vertex.
2. Select the edge with the minimum weight that connects the tree with a non-tree vertex.
3. Repeat until all vertices are included.

### Prim's Algorithm Code

```cpp
void minimumSpanning(int sVertex) {
    double minWeight;
    bool *mstv = new bool[gSize]; // tracks MST vertices
    double *edgeWeights = new double[gSize]; // track weights
// Initialize
for (int j = 0; j &lt; gSize; j++) {
    mstv[j] = false;
    edgeWeights[j] = weights[sVertex][j];
}

mstv[sVertex] = true;
edgeWeights[sVertex] = 0;

for (int i = 0; i &lt; gSize - 1; i++) {
    // Logic to find the minimum edge
}
```

## Shortest Path Algorithms

### Dijkstra's Algorithm

- Used to find the shortest path from a given vertex to all other vertices.
- Suitable for both directed and undirected graphs.

```cpp
void shortestPath(int vertex) {
    for (int j = 0; j &lt; gSize; j++) {
        smallestWeight[j] = weights[vertex][j]; 
    }
    bool *weightFound = new bool[gSize];
    
    for (int j = 0; j < gSize; j++) {
        weightFound[j] = false;
    }
    weightFound[vertex] = true;
    smallestWeight[vertex] = 0;

for (int i = 0; i < gSize - 1; i++) {
    // Logic to compute the shortest paths
}
```

## Applications of Graphs

- Transportation networks, telecommunications, social media.
- Project scheduling and analysis.
- Representing complex relationships and structures.

## Summary

- Understanding basic graph concepts is crucial for various algorithms and applications in computer science.
- Key graph algorithms include traversals, minimum spanning trees, and shortest path calculations, all of which have practical applications.