
> [!faq] About this Definition
> Subject: #systemsProgramming1 
> Topics: #definition  #coding/language/c #coding/language/cpp 
> Date: 20/03/2025 at 1:15PM

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/F8AbOfQwl1c" frameborder="0" allowfullscreen></iframe>
</div>

## Definition  
A **linked list** is a data structure used to store a sequence of elements, where each element (called a **node**) contains:  
1. **Data** – The actual value stored.  
2. **Pointer** – A reference to the next node in the list.

Unlike arrays, linked lists are **dynamic**, meaning they can grow and shrink as needed without worrying about fixed size.

![[Pasted image 20250320133522.png]]

## Structure of a Node in C  
Each node is represented as a `struct` containing data and a pointer to the next node.

```c
// Define a node structure
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;        // Data stored in the node
    struct Node* next; // Pointer to the next node
};
```

## Example: Creating and Traversing a Linked List

This example demonstrates how to create a simple linked list with three nodes and print their values.

```c 
#include <stdio.h>
#include <stdlib.h>

// Define the Node structure
struct Node {
    int data;
    struct Node* next;
};

int main() {
    // Creating nodes
    struct Node* head = NULL;
    struct Node* second = NULL;
    struct Node* third = NULL;

    // Allocating memory
    head = (struct Node*)malloc(sizeof(struct Node)); //malloc def below
    second = (struct Node*)malloc(sizeof(struct Node));
    third = (struct Node*)malloc(sizeof(struct Node));

    // Assigning values
    head->data = 1;
    head->next = second;

    second->data = 2;
    second->next = third;

    third->data = 3;
    third->next = NULL;

    // Traversing and printing the linked list
    struct Node* current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");

    // Free allocated memory
    free(head);
    free(second);
    free(third);

    return 0;
}
```

### Output

```c
1 -> 2 -> 3 -> NULL
```

# What is malloc?

> [!faq] Notes
> More in-depth notes on [[Malloc]]

Here's another example of creating a linked list but with for loops and we'll break down malloc is.

```c
#include <stdio.h>
#include <stdlib.h>

typedef char DATA ;
struct node
{
    DATA d ;
    struct node * next ;
};

void printNodes(char *array[], struct node *nodes[], int n);

int main() {
    int valueForMemeory = 1;
    //struct Node* head = NULL;
    
    char *array[] = {"head", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"};
    struct node *nodes[sizeof(array) / sizeof(array[0])]; //makes the array based from size of array so its dynamic
    
    for (int i = 0; i < sizeof(array) / sizeof(array[0]); i++) { //creates all the struct nodes
        nodes[i] = NULL; //initalises as null
        nodes[i] = (struct node *)malloc(sizeof(struct node));
        nodes[i]->d = valueForMemeory; //sets the value of the node
        valueForMemeory++;
    }

    printNodes(array, nodes, sizeof(array) / sizeof(array[0]));
    return 0;
}

void printNodes(char *array[], struct node *nodes[], int n) {
    for (int i = 0; i < n; i++) {
        printf("Node %d = %d\n", i, nodes[i]->d);
    }
}
```

- **`malloc`** stands for "memory allocation."
- Imagine your computer's memory is like a big box with lots of empty compartments.
- When you need a new compartment to store something, you can ask the computer for one using `malloc`.
- It gives you a key (called a pointer) to that compartment so you can use it.

### What does this line do?

``` c
nodes[i] = (struct node malloc(sizeof(struct node));
```


1. **`sizeof(struct node)`**:
    - This asks, "How big is one `struct node`?" (like measuring how much space you need in the box).
    - A `struct node` is a custom data structure, and this tells `malloc` how much memory to reserve.
2. **`malloc(...)`**:
    - This reserves (or allocates) that much space in memory and gives you the key (a pointer) to it.
3. **`(struct node *)`**:
    - The key (pointer) from `malloc` is generic, so this part says, "Treat this key as if it points to a `struct node`."
4. **`nodes[i] = ...`**:
    - This saves the key (pointer) in the `nodes[i]` array, so you can find and use that memory later.

### Simple analogy:

- Imagine you’re building a LEGO castle (`struct node` is a LEGO block).
- You ask for a new LEGO block (`malloc`), and the store gives you one.
- You write down where you put it (`nodes[i]`), so you don’t lose it.

This line is creating a new LEGO block (memory for a `struct node`) and saving its location in the `nodes` array.

## Key Points

- **Memory Efficiency:** No need to define a fixed size, unlike arrays.
- **Dynamic Growth:** Can allocate and deallocate nodes as needed.
- **Slower Access:** Unlike arrays, accessing an element requires traversal.

Linked lists are commonly used in stacks, queues, and dynamic memory management.