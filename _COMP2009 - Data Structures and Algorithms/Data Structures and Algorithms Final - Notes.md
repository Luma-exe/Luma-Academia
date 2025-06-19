
> [!faq] About this Note
> Class: COMP2009
> Subject: #dataStructuresAndAlgorthims
> Date: 20/06/2025 at 4:53AM
> Topics: #coding #coding/language/cpp 

## Table of Contents
1. [Algorithm Analysis and Big-O Notation](#chapter-1-algorithm-analysis-and-big-o-notation)
2. [Linear Data Structures](#chapter-2-linear-data-structures)
3. [Recursion](#chapter-3-recursion)
4. [Hashing](#chapter-4-hashing)
5. [Search Algorithms](#chapter-5-search-algorithms)
6. [Trees](#chapter-6-trees)
7. [Graphs](#chapter-7-graphs)
8. [Sorting Algorithms](#chapter-8-sorting-algorithms)
9. [Algorithm Design Techniques](#chapter-9-algorithm-design-techniques)
10. [Summary: Key Formulas and Concepts](#summary-key-formulas-and-concepts)

---

## Chapter 1: Algorithm Analysis and Big-O Notation

### What is Algorithm Analysis?
Algorithm analysis measures the efficiency of algorithms in terms of:
- **Time Complexity:** Number of operations performed
- **Space Complexity:** Amount of memory used

### Big-O Notation
Big-O describes the upper bound of an algorithm's growth rate, focusing on the dominant term.

**Definition:** f(n) is in O(g(n)) if there exist constants c and N₀ such that:
```
f(n) ≤ c × g(n) for n ≥ N₀
```

**Common Complexity Classes (fastest to slowest):**
- O(1) - Constant time
- O(log n) - Logarithmic time
- O(n) - Linear time
- O(n log n) - Linearithmic time
- O(n²) - Quadratic time
- O(2ⁿ) - Exponential time

**Examples:**
- Linear Search: O(n)
- Binary Search: O(log n)
- Bubble Sort: O(n²)

### Practical Tips
- Count dominant operations only
- Ignore constants and lower-order terms
- Focus on worst-case scenarios by default

---

## Chapter 2: Linear Data Structures

### Arrays and Lists

**Array-Based Lists:**
- Fixed size, efficient random access
- Operations: O(1) access, O(n) insertion/deletion in middle

**Linked Lists:**
- Dynamic size, efficient insertion/deletion
- Operations: O(n) search, O(1) insertion at head

**Basic Linked List Node:**
```cpp
template <class TYPE>
struct Node {
    TYPE data;
    Node<TYPE>* next;
};
```

### Stacks (LIFO - Last In, First Out)
**Key Operations:**
- Push: Add element to top - O(1)
- Pop: Remove top element - O(1)
- Top: View top element - O(1)

**Implementation:**
```cpp
template <class TYPE>
class Stack {
private:
    Node<TYPE>* top;
public:
    bool push(TYPE data);
    TYPE pop();
    TYPE peek();
    bool empty();
};
```

### Queues (FIFO - First In, First Out)
**Key Operations:**
- Enqueue: Add to rear - O(1)
- Dequeue: Remove from front - O(1)
- Front/Rear: View elements - O(1)

**Circular Queue Implementation:**
```cpp
queueRear = (queueRear + 1) % maxQueueSize;
queueFront = (queueFront + 1) % maxQueueSize;
```

### Priority Queues
Elements are ordered by priority, not insertion order.
- **Heap-based:** O(log n) insertion and deletion
- **Array-based:** O(n) insertion or O(n) deletion

---

## Chapter 3: Recursion

### Definition
A recursive algorithm calls itself with simpler inputs until reaching a base case.

**Components:**
1. **Base Case:** Simplest version that can be solved directly
2. **General Case:** Reduces problem complexity

### Classic Examples

**Factorial:**
```cpp
int factorial(int n) {
    if (n == 0) return 1;        // Base case
    return n * factorial(n-1);   // General case
}
```

**Fibonacci:**
```cpp
long fib(int n) {
    if (n <= 1) return n;        // Base cases
    return fib(n-1) + fib(n-2);  // General case
}
```

**Tower of Hanoi:**
```cpp
void moveDisks(int n, char A, char C, char B) {
    if (n > 1) {
        moveDisks(n-1, A, B, C);  // Move n-1 to auxiliary
        moveDisks(1, A, C, B);    // Move largest to destination
        moveDisks(n-1, B, C, A);  // Move n-1 to destination
    } else {
        cout << "Move disk from " << A << " to " << C << endl;
    }
}
```

### When to Use Recursion
- Problems with recursive structure (trees, fractals)
- Divide-and-conquer algorithms
- Backtracking problems
- When iterative solution is complex

---

## Chapter 4: Hashing

### Concept
Hashing maps keys to array indices using a hash function for O(1) average-case operations.

**Hash Function Requirements:**
- Fast to compute
- Distributes keys uniformly
- Deterministic (same key → same hash)

### Common Hash Functions

**Division Method:**
```cpp
h(k) = k mod m
```
Where m is preferably a prime number.

**Mid-Square Method:**
1. Square the key
2. Extract middle digits
3. Use as hash value

### Collision Resolution

**Open Addressing (Closed Hashing):**
- **Linear Probing:** Check next slot: (h(k) + i) mod m
- **Quadratic Probing:** Check using squares: (h(k) + i²) mod m

**Chaining (Open Hashing):**
- Each slot contains a linked list
- Store colliding items in the list

### Load Factor
```
α = n/m
```
Where n = number of elements, m = table size.
- Keep α < 0.75 for good performance

### STL Implementation
```cpp
#include <unordered_map>
unordered_map<string, int> myMap;
myMap["key"] = value;
```

---

## Chapter 5: Search Algorithms

### Linear Search
```cpp
bool linearSearch(int arr[], int size, int target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) return true;
    }
    return false;
}
```
- **Complexity:** O(n)
- **Use:** Unsorted data

### Binary Search
```cpp
int binarySearch(int arr[], int low, int high, int target) {
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
```
- **Complexity:** O(log n)
- **Requirement:** Sorted data

### Search Applications
- **Depth-First Search (DFS):** Uses stack, explores deep paths first
- **Breadth-First Search (BFS):** Uses queue, explores level by level
- **Best-First Search:** Uses priority queue, follows heuristic
- **A* Search:** f(n) = g(n) + h(n), optimal pathfinding

---

## Chapter 6: Trees

### Basic Tree Concepts
- **Node:** Element in the tree
- **Root:** Node with no parent
- **Leaf:** Node with no children
- **Height:** Longest path from root to leaf + 1
- **Level:** Distance from root (root = level 0)

### Binary Trees
Each node has at most two children (left and right).

**Node Structure:**
```cpp
template <class TYPE>
struct BinaryTreeNode {
    TYPE data;
    BinaryTreeNode<TYPE>* left;
    BinaryTreeNode<TYPE>* right;
};
```

### Tree Traversals
**Preorder (NLR):** Visit node → left subtree → right subtree
**Inorder (LNR):** Visit left subtree → node → right subtree
**Postorder (LRN):** Visit left subtree → right subtree → node

```cpp
void inorder(BinaryTreeNode<T>* root) {
    if (root != nullptr) {
        inorder(root->left);
        cout << root->data << " ";
        inorder(root->right);
    }
}
```

### Binary Search Trees (BST)
**Property:** Left subtree < Node ≤ Right subtree

**Operations:**
- Search: O(log n) average, O(n) worst
- Insert: O(log n) average, O(n) worst
- Delete: O(log n) average, O(n) worst

### AVL Trees (Self-Balancing BST)
**Balance Factor:** |Height(left) - Height(right)| ≤ 1

**Rotations for Rebalancing:**
- **Right Rotation (LL case)**
- **Left Rotation (RR case)**
- **Left-Right Rotation (LR case)**
- **Right-Left Rotation (RL case)**

**Guaranteed Performance:** O(log n) for all operations

### B-Trees
Multi-way search trees where:
- All leaves at same level
- Each node has at most m children
- Internal nodes have at least ⌈m/2⌉ children
- Used in databases and file systems

### Heaps
**Complete binary tree** with heap property:
- **Max Heap:** Parent ≥ children
- **Min Heap:** Parent ≤ children

**Operations:**
- Insert: Add at end, reheap-up - O(log n)
- Delete: Replace root with last, reheap-down - O(log n)

---

## Chapter 7: Graphs

### Definition
Graph G = (V, E) where V = vertices, E = edges

**Types:**
- **Directed:** Edges have direction
- **Undirected:** Edges bidirectional
- **Weighted:** Edges have values

### Representation

**Adjacency Matrix:**
- 2D array: matrix[i][j] = 1 if edge exists
- Space: O(V²)
- Good for dense graphs

**Adjacency List:**
- Array of lists for each vertex
- Space: O(V + E)
- Good for sparse graphs

### Graph Traversals

**Depth-First Search (DFS):**
```cpp
void DFS(int vertex) {
    visited[vertex] = true;
    cout << vertex << " ";
    for (auto neighbor : adjList[vertex]) {
        if (!visited[neighbor]) {
            DFS(neighbor);
        }
    }
}
```

**Breadth-First Search (BFS):**
```cpp
void BFS(int start) {
    queue<int> q;
    visited[start] = true;
    q.push(start);
    
    while (!q.empty()) {
        int vertex = q.front();
        q.pop();
        cout << vertex << " ";
        
        for (auto neighbor : adjList[vertex]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}
```

### Graph Algorithms

**Minimum Spanning Tree (Prim's Algorithm):**
1. Start with any vertex
2. Add minimum weight edge connecting tree to non-tree vertex
3. Repeat until all vertices included

**Shortest Path (Dijkstra's Algorithm):**
1. Initialize distances (∞ for all except source = 0)
2. Select unvisited vertex with minimum distance
3. Update distances to neighbors
4. Mark as visited and repeat

---

## Chapter 8: Sorting Algorithms

### Simple Sorts - O(n²)

**Bubble Sort:**
```cpp
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}
```

**Selection Sort:**
```cpp
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int minIdx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        swap(arr[i], arr[minIdx]);
    }
}
```

**Insertion Sort:**
```cpp
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
```

### Advanced Sorts

**Quick Sort - O(n log n) average, O(n²) worst:**
```cpp
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
```

**Heap Sort - O(n log n):**
1. Build max heap
2. Repeatedly extract maximum and reheap

**Shell Sort - O(n^1.5):**
- Improved insertion sort using gaps
- Reduces inversions efficiently

### Sorting Algorithm Comparison

| Algorithm | Best Case | Average Case | Worst Case | Space | Stable |
|-----------|-----------|--------------|------------|-------|--------|
| Bubble | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Selection | O(n²) | O(n²) | O(n²) | O(1) | No |
| Insertion | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Quick | O(n log n) | O(n log n) | O(n²) | O(log n) | No |
| Heap | O(n log n) | O(n log n) | O(n log n) | O(1) | No |
| Shell | O(n) | O(n^1.5) | O(n²) | O(1) | No |

---

## Chapter 9: Algorithm Design Techniques

### Divide and Conquer
Break problem into smaller subproblems, solve independently, combine results.
- **Examples:** Binary Search, Quick Sort, Merge Sort

### Greedy Algorithms
Make locally optimal choices at each step.
- **Examples:** Dijkstra's Algorithm, Prim's Algorithm
- **Limitation:** May not find global optimum

### Dynamic Programming
Solve problems by storing solutions to subproblems.
- **Requirements:** Optimal substructure, overlapping subproblems
- **Examples:** Fibonacci (iterative), Knapsack Problem

**Optimized Fibonacci:**
```cpp
long fibDP(int n) {
    if (n <= 1) return n;
    long prev2 = 0, prev1 = 1;
    for (int i = 2; i <= n; i++) {
        long current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
}
```

### Backtracking
Systematically search solution space, backtrack when dead end reached.
- **Examples:** 8-Queens Problem, Sudoku, Maze Solving

### Randomized Algorithms
Use randomness to improve performance or handle worst cases.
- **Examples:** Monte Carlo methods, Randomized Quick Sort

---

## Summary: Key Formulas and Concepts

### Time Complexities to Remember
- **Search:** Linear O(n), Binary O(log n), Hash O(1) average
- **Sort:** Simple O(n²), Advanced O(n log n), Best possible O(n log n)
- **Tree Operations:** Balanced O(log n), Unbalanced O(n)
- **Graph Traversal:** O(V + E)

### Data Structure Selection Guide
- **Need random access:** Use arrays
- **Frequent insertions/deletions:** Use linked lists
- **LIFO access:** Use stacks
- **FIFO access:** Use queues
- **Priority-based access:** Use heaps/priority queues
- **Fast search with keys:** Use hash tables
- **Ordered data with fast operations:** Use balanced trees
- **Relationships between items:** Use graphs

### Space-Time Tradeoffs
- **Hashing:** More space for faster search
- **Memoization:** Store results to avoid recomputation
- **Preprocessing:** Sort once for multiple binary searches

### Algorithm Selection Tips
- Consider input size and characteristics
- Identify required operations and their frequencies
- Balance implementation complexity with performance needs
- Consider stability requirements for sorting
- Account for memory constraints

### Common Pitfalls to Avoid
- Using O(n²) algorithms for large datasets
- Not considering worst-case scenarios
- Ignoring memory usage in recursive algorithms
- Choosing wrong data structure for access patterns
- Not validating input assumptions