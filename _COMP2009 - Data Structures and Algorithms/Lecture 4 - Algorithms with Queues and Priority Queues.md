
> [!faq] About this Lecture
> Class: COMP209
> Subject: #dataStructuresAndAlgorthims 
> Topics: #coding/language/cpp 
> Date: 2025-03-27 at 10:25

## Overview

- This lecture discusses:
    - Queue concept
    - Queue Abstract Data Type (ADT)
    - Linked list and array implementations
    - Priority queues
    - Queue applications
    - Case studies and examples
## Queue Concept

- **Definition**: A queue is a linear list with a First-In-First-Out (FIFO) behavior.
    - Data can be inserted at the rear and deleted from the front.

## Queue Operations and ADT

- **Key Operations**:
    - `Enqueue` (addQueue): Add an element to the rear.
    - `Dequeue` (deleteQueue): Remove an element from the front.
    - `front`: Get the first element.
    - `back`: Get the last element.

- **Additional Functions**:
    - `size`: Number of elements in the queue.
    - `empty` (isEmptyQueue): Check if the queue is empty.
    - `initializeQueue`: Prepare an empty queue.

## Implementation of Queue

- **Array Implementation**:
    
    - Pros: Easy to operate.
    - Cons:
        - Underuse or overflow can waste memory.
        - Inefficient when the array is full.
- **Linked List Implementation**:
    
    - Pros: Flexible memory usage; a queue is never full.
    - Cons: Overhead in managing memory.

### Queue Implementation as Arrays

```cpp
Type* list; // Array to store queue elements
int queueFront; // Index of the first element
int queueRear; // Index of the last element


// After deleteQueue operation queueFront = queueFront + 1;

// After addQueue operation queueRear = queueRear + 1; ```
```
## Circular Arrays

- **Problem**: Reaching the end of an array may give the impression of a full queue, even with empty slots available.
- **Solution**:
    
    - **Circular Array Logic**:
    
    ```cpp
    queueRear = (queueRear + 1) % maxQueueSize; // For adding
    queueFront = (queueFront + 1) % maxQueueSize; // For deleting
    ```
    

## Abstract Data Type for Queues

```cpp
template <class type="">
class queueADT {
public:
    virtual void addQueue(const Type &amp;queueElement) = 0;
    virtual void deleteQueue() = 0;
    virtual Type front() const = 0;
    virtual Type back</class>() const = 0;
    // Additional functions
    // virtual int size() const = 0;
};
```

## Standard Template Library (STL) Queue

- **Header File**:

```cpp
#include<queue>
```

## Priority Queue

- **Characteristics**:
    - Similar operations as FIFO queues.
    - Elements are comparable (requires overload `<`).
    - Element with the highest priority is dequeued first.

### Priority Queue Implementations

1. **Method 1**: Maintain priority order upon enqueue.
    
    - Complexity: O(n) for enqueue, O(1) for dequeue.
2. **Method 2**: Add new items at the end, find and remove the largest on dequeue.
    
    - Complexity: O(1) for enqueue, O(n) for dequeue.

3. **Method 3**: Use a heap.
    - Complexity: O(log n) for both enqueue and dequeue.

## STL Priority Queue

- **Declaration Example**:

```cpp
priority_queue<cell> moves;
```

- **Requirements**: All data must be comparable.

```cpp
struct Cell {
    int x;
    int y;
    double heuristic;
    
    Cell(int xx = -1, int yy = -1, double hh = 0): x(xx), y(yy), heuristic(hh) {}
    
    bool operator<(const Cell &c) const {
        return heuristic < c.heuristic;
    }
};
```

## Queue Applications in AI

- **Depth-First Search**: Uses stack.
- **Breadth-First Search**: Uses queue.
- **Best-First Search**: Uses priority queue.
- __A_ Search_*: A combination of breadth-first and best-first searches.

## Algorithms Overview

### Breadth-First Search (BFS) Example

```cpp
BFS_Algorithm {
    trackingQueue = {start node}; // Queue
    visitedList = {}; // Vector or list
    
    while (trackingQueue is not empty) {
        Pop a node s from trackingQueue;
        Push s into visitedList;
        
        if (s is a goal) {
            return true;
        } else {
            for (each next node s’ of s) {
                if (s’ is in visitedList) continue;
                else Push s’ into trackingQueue;
            }
        }
    }
    return false;
}
```

### Best-First Search

```cpp
BSS_Algorithm {
    trackingPriorityQ = {start node}; // Priority Queue
    visitedList = {}; // Vector or list
    
    while (trackingPriorityQ is not empty) {
        Pop a node s from trackingPriorityQ;
        Push s into visitedList;
        
        if (s is a goal) {
            return true;
        } else {
            for (each next node s’ of s) {
                if (s’ is in visitedList) continue;
                else Push s’ into trackingPriorityQ;
            }
        }
    }
    return false;
}
```

### A* Search

- **Evalution Function**:

```plaintext
f(n) = g(n) + h(n)
```

- Where:
    - `g(n)`: Cost from starting point to current node.
    - `h(n)`: Estimated cost from current node to goal.

## Case Study: TicTacToe

**Program Structure**:

- Files include:
    - `TicTacToe.h`,
    - `Player.h` (and its derived classes),
    - `Game.h`,
    - `TicTacToeApp.cpp`.

### Heuristic Function Example

```cpp
int ticTacToe::heuristics(char player) {
    int length = 0;
    // Check rows, columns, and diagonals
}
```

### Get Move Function

```cpp
void getMove(ticTacToe board, int &x, int &y) {
    priority_queue<Cell> moves;
    // Logic to push potential moves into the priority queue
}
```

## Summary of Standard Data Structures

- **Vector**: Array-based linear structure.
- **List**: Pointer-based linear structure.
- **Stack**: Last-In-First-Out (LIFO).
- **Queue**: First-In-First-Out (FIFO).
- **Priority Queue**: Best-Out.

## Conclusion and Next Steps

- Upcoming topics: Introduction to recursion techniques.
- Reading assignments: Textbook Chapter 8 and practical tasks for week 5.

