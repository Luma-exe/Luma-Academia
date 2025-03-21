
> [!faq] About this Definition
> Class: COMP2019
> Subject: #systemsProgramming1 
> Date: 21/02/2025 at ~11:00AM
> Topics: #definition  #coding/c #coding/cpp 

## Definition  
A **binary tree** is a hierarchical data structure in which each node has at most **two children**:  
1. **Left child** – Represents nodes with smaller values (in a Binary Search Tree).  
2. **Right child** – Represents nodes with larger values.

Binary trees are used for efficient searching, sorting, and hierarchical data representation.

## Structure of a Node in C  
Each node is represented as a `struct` containing data and pointers to the left and right child nodes.

```c
// Define a node structure
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;         // Data stored in the node
    struct Node* left;  // Pointer to left child
    struct Node* right; // Pointer to right child
};
```

## Example: Creating and Traversing a Binary Tree

This example creates a simple binary tree and prints its values in **inorder traversal** (Left -> Root -> Right).

```c
#include <stdio.h>
#include <stdlib.h>

// Define the Node structure
struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

// Function to create a new node
struct Node* createNode(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// Inorder traversal (Left -> Root -> Right)
void inorderTraversal(struct Node* root) {
    if (root == NULL) return;
    
    inorderTraversal(root->left);
    printf("%d ", root->data);
    inorderTraversal(root->right);
}

int main() {
    // Creating nodes
    struct Node* root = createNode(1);
    root->left = createNode(2);
    root->right = createNode(3);
    root->left->left = createNode(4);
    root->left->right = createNode(5);

    // Printing inorder traversal
    printf("Inorder traversal: ");
    inorderTraversal(root);
    printf("\n");

    // Free allocated memory (not shown for simplicity)
    return 0;
}
```

## Output

```c
Inorder traversal: 4 2 5 1 3
```

## Key Points

- **Hierarchical Structure:** Unlike linked lists, binary trees have parent-child relationships.
- **Efficient Search (O(log n)):** Binary Search Trees allow fast searching compared to arrays.
- **Used in:** File systems, databases, AI decision trees, and more.

Binary trees are the foundation for many advanced data structures like AVL trees and heaps.