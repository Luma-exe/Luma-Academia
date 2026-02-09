
> [!faq] About this Lecture
> Class: COMP2009
> Subject: #dataStructuresAndAlgorthims 
> Topics: #coding/language/cpp  
> Date: 2025-06-05 at 10:42

## Review of Tree Concepts

- **Tree**: A graph (network) without circular paths.
- **Binary Tree**: An extended linked list with two links in each node.
- **Binary Search Tree (BST)**: An ordered binary tree.
- **AVL Trees**:
    - Balanced binary search tree.
    - **Balance factor**: Difference in height between left and right subtrees.
    - Possible causes of unbalance:
        - Left of Left
        - Left of Right
        - Right of Left
        - Right of Right
    - **Rebalancing** techniques exist to maintain balance.

## Tree Implementations

### Struct Definitions

```cpp
template  Type&gt;
struct LinkedListNode {
    Type info;
    LinkedListNode<type>* link</type>;
};


template struct BinaryTreeNode { Type info; BinaryTreeNode* llink; BinaryTreeNode* rlink; };

template struct AVLTreeNode { Type info; AVLTreeNode* llink; AVLTreeNode* rlink; int bfactor; }; 
```

## AVL Tree Rotation Functions

- **Single Rotation (Right) for Left of Left**

```cpp
Node* rotateRight(Node* root) {
    Node* tempPtr = root-&gt;left;
    root-&gt;left = tempPtr-&gt;right;
    tempPtr-&gt;right = root;
    return tempPtr;
}
```

- **Single Rotation (Left) for Right of Right**

```cpp
Node* rotateLeft(Node* root) {
    Node* tempPtr = root-&gt;right;
    root-&gt;right = tempPtr-&gt;left;
    tempPtr-&gt;left = root;
    return tempPtr;
}
```

- **Right of Left**

```cpp
Node* leftBalance(Node* root) {
    Node* leftTree = root-&gt;left;
    root->left = rotateLeft(leftTree);
    return rotateRight(root);
}
```

- **Left of Right**

```cpp
Node* rightBalance(Node* root) {
    Node* rightTree = root->right;
    root->right = rotateRight(rightTree);
    return rotateLeft(root);
}
```

## Complexity of AVL Tree Operations

- If an AVL tree has n nodes, operations such as search, insertion, and deletion take ( O(\log n) ) time.

### Operations Comparison

|Operation|Unordered Array|Ordered Array|Unordered Linked List|AVL Tree|
|---|---|---|---|---|
|Search|( O(n) )|( O(\log n) )|( O(n) )|( O(\log n) )|
|Insert|( O(1) )|( O(n) )|( O(1) )|( O(\log n) )|
|Delete|( O(n) )|( O(n) )|( O(n) )|( O(\log n) )|

## Introduction to M-way Trees

- **M-way Search Tree (M-way Tree of Order m)**:
    - Each node has at most m children and m - 1 keys in ascending order.
    - Keys in the first i children are smaller than the i-th key.
    - All subtrees are also M-way trees.

### Structure of M-way Tree Node

```cpp
template &gt;
struct BTreeNode {
    Type list[BTreeOrder - 1];
    BTreeNode* children[BTreeOrder];
    int recCount; // record count
};
```

## B-Trees

- **B-Tree of Order m**:
    - All leaves are on the same level.
    - The root has at least 2 children if it is not a leaf.
    - All internal nodes (except root) have at least ( \lceil m/2 \rceil ) children.
- Properties:
    - Floor function ( \lfloor x \rfloor ): greatest integer less than or equal to x.
    - Ceiling function ( \lceil x \rceil ): smallest integer greater than or equal to x.
    - ( \lfloor x \rfloor \geq \lceil x \rceil - 1 ).

### B-Tree Insertion

1. Compare the new data key with keys on the tree until reaching a leaf.
2. If the leaf node is overflowed, push the median entry to the parent node and split the current node.
3. If the parent node is overflowing, propagate changes upwards until the root. If the root overflows, the median becomes the new root.

## Complexity of B-Tree Operations

- Search, insertion, and deletion take ( O(\log n) ) time.

### Additional Notes on Trees and Heaps

- **Complete Binary Tree**: A tree that has the maximum number of nodes for its height.
- **Heap**: A binary tree that is complete or nearly complete with the maximum key at the root.

### Heap Operations

- **Inserting Nodes**:
    
    - Add node to the end of the heap.
    - Perform **reheap-up** to maintain heap properties.
- **Deleting Nodes**:
    
    - Remove the root node and replace it with the last element.
    - Perform **reheap-down** to maintain heap properties.

## Applications of Heaps

- Heaps are used primarily to implement priority queues.

## Shortest Path: Dijkstra’s Algorithm

- Purpose: Find shortest paths from a given vertex to all others by building a spanning tree.

### Implementation

```cpp
void shortestPath(int source) {
    for (int j = 0; j &lt; gSize; j++)
        smallestWeight[j] = weights[source][j]; // Initialize weights
    bool* weightFound = new bool[gSize]; // Record generated spanning tree
    for (int j = 0; j &lt; gSize; j++) 
        weightFound[j] = false;
    weightFound[source] = true;
    smallestWeight[source] = 0;



for (int i = 0; i &lt; gSize - 1; i++) {
    int v; 
    double minWeight = DBL_MAX; 
    for (int j = 0; j &lt; gSize; j++)
        if (!weightFound[j] &amp;&amp; smallestWeight[j] &lt; minWeight) {
            v = j; 
            minWeight = smallestWeight[v];
        }
    weightFound[v] = true; // Add to spanning tree
    for (int j = 0; j &lt; gSize; j++) 
        if (!weightFound[j] &amp;&amp; minWeight + weights[v][j] &lt; smallestWeight[j])
            smallestWeight[j] = minWeight + weights[v][j];
}
```

## Reading Recommendations

- Review textbook Chapter 11.
- Check implementations of heaps.
- Explore online visualizations for AVL Trees, B-Trees, and Heaps.
- Start working on any assignments related to these topics.