
> [!faq] About this Lecture
> Class: COMP2009
> Subject: #dataStructuresAndAlgorthims 
> Topics: #coding/language/cpp 
> Date: 2025-04-16 at 10:56

## Main Content Overview

- **Complexity Analysis**
    - **Big-O Notation**: Measurement of computational complexity, focusing on the dominating part while ignoring constant differences.
    - **Formal Definition of Big-O**:
        
        - $( f(n) )$ is in $( O(g(n)) )$ if there are constants $( c )$ and $( N_0 )$ such that:
        
        ```cpp
        f(n) &lt;= c * g(n) for n &gt;= N_0
        ```
        
    - **Worst Case Complexity**: By default.
    - **Complexity Benchmarks**:
        
        ```cpp
        O(1) &lt; O(log n) < O(n) < O(n log n) < O(n^2) < ... < O(2^n)
        ```
        

## Data Structures

- **Linear Data Structures**
    
    - Dynamic Array
    - Linked List
    - Stack and Queue
    - Priority Queue
- **Standard Template Library (STL)**
    
    - `vector`, `list`, `stack`, `queue`, `priority_queue`
- **Hashing Techniques**
    
    - Provides constant time searching ( O(1) ).
    - **Hashing Function**: Maps a key to an address.
    - **Collision Resolution**:
        - Closed Hashing: All items stored in one data structure (array).
        - Open Hashing: Linked list attached to each address.

## Search Algorithms

### Depth-First Search (DFS)

```cpp
DFS_Algorithm {
  tracking = {start node};
  visitedList = {}; // vector or hashtable
  while (tracking is not empty) {
    Pop a node s from tracking;
    Push s into visitedList;
    
    if (s is a goal) {
      return true;
    } else {
      for (each next node s’ of s) 
        if (s’ is in visitedList) 
          continue;
        else 
          Push s’ into tracking;
    }
  }
  return false;
}
```

## Tree Concepts

- **Basic Definitions**:
    - **Node**: Element in a tree.
    - **Branch**: Directed lines between nodes.
    - **Degree of a Node**: Number of branches associated with the node.
    - **Indegree**: Directed toward the node.
    - **Outdegree**: Directed away from the node.

- **Special Nodes**:
    - **Root**: Node with indegree zero.
    - **Leaf**: Node with outdegree zero.

- **Relationships in Trees**:
    - **Parent**: Node having successor nodes.
    - **Child**: Node with parent nodes.
    - **Siblings**: Nodes with the same parent.
    - **Ancestors and Descendants**: Nodes in the path from the root to that node.

- **Path**: Sequence of adjacent nodes.
- **Forest**: Set of trees in parallel.

## Height of Trees

- **Level of a Node**: Distance from that node to the root.
    - Level of root = 0.
    - Other nodes = Level of parent + 1.

- **Height of a Tree**: Level of the leaf in the longest path from the root + 1.
    - Height of an empty tree = 0.

## Recursive Definition of Trees

- An empty set is a tree (Empty Tree).
- If $( T_1, \ldots, T_n )$ are trees and $( R )$ is a node, then the set $( T )$ containing $( R )$ and those trees is a tree.

## Binary Trees

- **Characteristics**: Each node has at most two children, distinguished as left (llink) and right (rlink).

### Binary Tree Node Structure

```cpp
template <class Type>
struct binaryTreeNode {
    Type data;
    binaryTreeNode<Type>* llink;
    binaryTreeNode<Type>* rlink;
};
```

## Comparison: Binary Trees vs Linked Lists

- **Major Operations**:
    - Search (binary search)
    - Insertion/Deletion

- **Efficiency**:
    - Ordered Array: Fast search, slow insertion/deletion.
    - Linked List: Fast insertion/deletion, slow search.
    - Binary Tree: Balanced efficiency for all operations.

## Transforming Trees

- Transform a linked list to a binary tree.
- Transform a general tree to a binary tree.

## Tree Traversal Techniques

### Types of Traversal

- **Depth-First Traversal Strategies**:
    - **Pre-order (NLR)**: Visit root, left subtree, right subtree.
    - **In-order (LNR)**: Visit left subtree, root, right subtree.
    - **Post-order (LRN)**: Visit left subtree, right subtree, root.

### Implementation of Traversal in C++

```cpp
#include <iostream>
using namespace std;

template <class T>
struct binaryTreeNode {
    T data;
    binaryTreeNode<T>* llink;
    binaryTreeNode<T>* rlink;
};

// Placeholder for visit function
template <class T>
void visit(T data) {
    cout << data << " ";
}

// Preorder traversal
template <class T>
void preorder(binaryTreeNode<T>* treePtr) {
    if (treePtr == nullptr) return;
    visit(treePtr->data);
    preorder(treePtr->llink);
    preorder(treePtr->rlink);
}

// Inorder traversal
template <class T>
void inorder(binaryTreeNode<T>* treePtr) {
    if (treePtr == nullptr) return;
    inorder(treePtr->llink);
    visit(treePtr->data);
    inorder(treePtr->rlink);
}

// Postorder traversal
template <class T>
void postorder(binaryTreeNode<T>* treePtr) {
    if (treePtr == nullptr) return;
    postorder(treePtr->llink);
    postorder(treePtr->rlink);
    visit(treePtr->data);
}
```

## Binary Search Trees (BST)

- **Definition**: A binary tree with ordered nodes.
- **Properties**:
    - Left subtree elements < Root.
    - Right subtree elements ≥ Root.

### Binary Search Tree Operations

- Search, Insert, Delete.
- Height of BST influences time complexity.

### Insertion and Deletion Complexity

- **Insertion**: $( O(\log_2 n) )$ if balanced.
- **Deletion**: $( O(\log_2 n) )$ for deletion, with worst cases leading to $( O(\text{subtree height}) )$.


