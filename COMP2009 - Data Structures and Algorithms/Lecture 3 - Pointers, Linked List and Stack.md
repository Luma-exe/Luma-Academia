> [!faq] About this Lecture
> Class: COMP2009
> Subject: #dataStructuresAndAlgorthims 
> Date: 2025-03-21 at 11:55
> Topics: #coding/cpp  

## Main Contents of Lecture

- Pointers
- [[Linked List]]
    - Structure of Linked List
    - Algorithms of Typical Operations
    - Implementation of Linked Lists
    - Applications of Lists
- Stack
    - Stack Abstract Data Type
    - Basic Stack Operations
    - Implementation of Stacks
    - Stack Applications

## Pointers

- Essential for programming in C/C++
    
- Definition: A variable that stores a memory address.
    
- Characteristics:
    
    - Can be initialized by NULL/null.
    - Function names and array names are pointers.
    - Can be passed to and returned from functions.
- **Key Concepts**:
    
    - Distinction between object pointer, address, and value of the pointer.

- **Pointer Declarations**:

```cpp
int *p1, *p2, v1, v2;
```

- **Assigning Values to Pointers**:

```cpp
p1 = &amp;v1; 
*p1 = 42; 
p2 = p1; 
cout &lt;&lt; p2 &lt;&lt; " " &lt;&lt; *p2 &lt;&lt; endl;
```

- **Storing Pointers in Data Structures**:

```cpp
vector<board*> searchBoard; 
Board* s = new Board; 
search</board*>Board.push_back(s);
```

## Linked List

> [!faq] Recap
> Quick Recap on [[Linked List]]?

- **Definition**: An ordered collection of data where each element (node) contains the location of the next element.
    
- **Node Structure**:
    

```cpp
template <class TYPE>
struct Node {
    TYPE info;
    Node<TYPE> *link;
};
```

- **Traversal Algorithm**:

```cpp
start with head: current = head;
process data: cout &lt;&lt; current->info;
move to next: current = current->link;
```

## Searching in a Linked List

- **Search Algorithm**:

```cpp
template <class type="">
bool unorderedLinkedList<type>::search(const Type &amp;searchItem) const {
    bool found = false;
    nodeType<type> *current = head;
    while (</type></type></class>current != NULL && !found) {
        if (current->info == searchItem) 
            found = true;
        else 
            current = current->link;
    }
    return found;
}
```

## Insertion in Linked Lists

- **Insertion Steps**:
    1. Declare a new node.
    2. Store data into the node.
    3. Update predecessor's successor to point to new node.
    4. Make the new node point to the predecessor’s successor.

- **Insert at Beginning**:

```cpp
template <class Type>
void unorderedLinkedList<Type>::insertFirst(const Type &newItem) {
    nodeType<Type> *newNode = new nodeType<Type>;
    newNode->info = newItem;
    newNode->link = head;
    head = newNode;
}
```

## Deletion in Linked Lists

- **Deletion Steps**:
    1. Locate the item and its predecessor.
    2. Update predecessor’s link to bypass the deleted node.
    3. Recycle the memory used by the deleted node.

- **Delete Function**:

```cpp
template <class type="">
void unorderedLinkedList<type>::deleteNode(const Type &amp;deleteItem) {
    if (head == NULL) {
        cout &lt;&lt; "Cannot delete from an empty list." &lt;&lt; endl;
        return;
    }
    if (head-&gt;info == deleteItem &amp;&amp; head-&gt;link == NULL) {
        delete head;
        head = NULL;
        return;
    }
    // Search for delete item ...
}
``</type></class>`
```

## Variations of Linked Lists

- **Circularly Linked List**: Last node's link points to the first node.
- **Doubly Linked List**: Each node has pointers to both successor and predecessor for bidirectional traversal.

## Implementing Linked List as an ADT

- Use of class templates to allow storage of any data type.

## Stack Abstract Data Type

- **Definition**: A linear list where the most recently inserted item is the only one that can be removed (Last In First Out - LIFO).

- **Basic Operations**:
    - **Push**: Add element onto the stack.
    - **Pop**: Remove top element from the stack.
    - **Top**: Retrieve top element without deleting it.

## Comparing Stack Implementations

- **Array-based**: Limited by array length (finite).
- **Linked-list based**: Limited by heap memory (nearly infinite).

## Applications of Stack

- Useful for efficiency in insertion and deletion, convenience for search and traversal, and certain applications like pairing, backtracking, and caching.

## Goal-Seeking Problems

- Problems that involve searching for a goal state often represented in a tree structure, with various searching algorithms applicable:
    - Depth-First Search (DFS) using stack.
    - Breadth-First Search (BFS) using queue.