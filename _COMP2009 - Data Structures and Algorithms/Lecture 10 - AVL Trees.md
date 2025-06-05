
> [!faq] About this Lecture
> Class: COMP2009
> Subject: #dataStructuresAndAlgorthims 
> Topics: #coding/language/cpp  
> Date: 2025-06-05 at 10:42

## Graph Basics

- Graph ( G = (V, E) ): Represents data and their relations
- **Graph Representation**:
    - **Adjacency Matrix**: A 2D array to represent edges
    - **Adjacency List**: A list where each vertex has its own list of edges

- **Graph Operations**:
    - **Insertion/Deletion**: vertices and edges
    - **Search and Traversal**:
        - Depth-First Search (DFS)
        - Breadth-First Search (BFS)
        - Best-First Search (BestFS)

- **Algorithms**:
    - **Minimum Spanning Tree (Prim's Algorithm)**
    - **Shortest Path (Dijkstra's Algorithm)**

## Review of Tree Concepts

- **Basic Tree Concepts**:
    - General tree
    - Binary tree
    - Binary Search Tree (BST)

- **BST Operations Complexity**:
    - **Insertion**: O(log n) (average) but O(n) (worst)
    - **Deletion**: O(log n) (average) but O(n) (worst)
    - **Search**: O(log n) (average) but O(n) (worst)

- **Properties of BST**:
    - Smallest node: left-most leaf
    - Largest node: right-most leaf

### Functions for Min and Max in BST

```cpp
Type min(Node<type> *p) {
</type>    if (p-&gt;llink != NULL) {
        return min(p-&gt;llink);
    } else {
        return p->data;
    }
}


Type max(Node *p) { if (p->rlink != NULL) { return max(p->rlink); } else { return p->data; } } 
```

- **BST Traversal**: In-order traversal produces an ordered list

```cpp
void inorder(Node<type> *p) {
    if (p != NULL) {
</type>        inorder(p-&gt;llink);
        cout &lt;&lt; p-&gt;data &lt;&lt; " ";
        inorder(p-&gt;rlink);
    }
}
```

## Insertion and Deletion in BST

- **Insertion Sequence**: e.g., 89, 27, 65, 34, 12, 90, 76, 38, 81
- **Deletion Example**:
    - Deleting 65 from the tree
    - Resulting trees:
        - Variation after deletion can occur

## Complexity of Operations in BST

- Ideal time complexity:
    - **Insertion**: O(log n)
    - **Deletion**: O(log n)
    - **Search**: O(log n)

## Balanced Trees and AVL Trees

- **Problems with Unbalanced BST**:
    - Time complexity can vary between O(log n) and O(n)
    - Unbalanced BST can lead to ineffective operations

### Definition of AVL Tree

- **AVL Tree**: A height-balanced BST
    - Condition: ( |BF| = |H_R - H_L| \leq 1 )
    - Each subtree must also be an AVL tree

### Balance Factor

- **Balance Factor (BF)**:
    - Left Higher (LH): ( BF = 1 )
    - Right Higher (RH): ( BF = -1 )
    - Even Height (EH): ( BF = 0 )

## Causes of Unbalance and Rebalancing

- Unbalanced due to:
    - Insertion or deletion
    - Cases of imbalance:
        - Case 1: Left of Left (LL)
        - Case 2: Right of Right (RR)
        - Case 3: Right of Left (RL)
        - Case 4: Left of Right (LR)

### Rebalancing Cases

- **Single Rotations**:
    
    - Right Rotation (for LL)
    
    ```cpp
    Node* rightRotate(Node* root) {
        Node* tempPtr = root-&gt;left;
        root-&gt;left = tempPtr-&gt;right;
        tempPtr-&gt;right = root;
        return tempPtr;
    }
    ```
    

- Left Rotation (for RR)

```cpp
Node* leftRotate(Node* root) {
    Node* tempPtr = root-&gt;right;
    root-&gt;right = tempPtr-&gt;left;
    tempPtr-&gt;left = root;
    return tempPtr;
}
```

- **Double Rotations**:
    - Right of Left (RL) and Left of Right (LR)

### Insertion and Deletion in AVL Trees

#### Insertion Steps:

1. Search for the location to insert.
2. Adjust the balance factor and rebalance if necessary.

#### Deletion Cases:

- **Four Cases**:
    - Case 1: The node to delete is a leaf
    - Case 2: The node has no right child
    - Case 3: The node has no left child
    - Case 4: The node has both children

## AVL Tree Implementation

### AVL Node Structure

```cpp
template <class type="">
struct NODE {
    TYPE data;
    NODE *</class>left;
    NODE *right;
    int bal;   // Balance factor
};
```

## Complexity of AVL Tree Operations

- If an AVL tree has ( n ) nodes:
    - Search: O(log n)
    - Insertion: O(log n)
    - Deletion: O(log n)

## Comparison of Data Structures

|Operation|Unordered Array|Ordered Array|Unordered Linked List|AVL Tree|
|---|---|---|---|---|
|Search|O(n)|O(log n)|O(n)|O(log n)|
|Insert|O(1)|O(n)|O(1)|O(log n)|
|Delete|O(n)|O(n)|O(n)|O(log n)|

## Readings

- **Textbook Reference**: Chapter 11
- **Code References**:
    - `avlTree.h` for basic understanding
    - `AVL_ADT.h` for full AVL tree implementation