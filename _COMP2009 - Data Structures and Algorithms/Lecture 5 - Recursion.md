
> [!faq] About this Lecture
> Class: COMP2009
> Subject: #dataStructuresAndAlgorthims
> Topics: #coding/language/cpp 
> Date: 2025-04-09 at 14:01

## Summary of Previous Weeks

- **Data Structures**:
    - Stack
    - Queue
- **Abstract Data Types (ADTs)**:
    - Stack and Queue
- **Implementations**:
    - Linked list
    - Array-based
- **Applications**:
    - Stack and Queue
    - Priority Queue
- **Search Strategies**:
    - Depth First (DF)
    - Breadth First (BF)
    - Heuristic
    - A*

## Main Content of the Lecture

- **Introduction to Recursion Techniques**
- **Implementation of Recursion**
- **Case Studies**

## Hanoi Tower Puzzle

- **Objective**: Move all disks from a source stick to a destination stick.
- **Rules**:
    - Only one disk can be moved at a time.
    - A larger disk cannot be placed on a smaller disk.
    - One auxiliary stick allowed for intermediate storage.

## Solutions to the Puzzle

- **For Two Disks**: Simple direct movements.
- **For Three Disks**: Involves intermediate movements between sticks.
- **For Four Disks**: Explored through recursion.

## Concept of Recursion

- **Definition**: A process where an algorithm calls itself.
- **Base Case**: The smallest version of a problem that can be solved directly.
- **General Case**: The part of the algorithm that reduces the problem's complexity.
- **Important Note**: Every recursive call should solve or simplify the problem.

### Factorial Example

- **Definition**: [ \text{Factorial}(n) = n \times (n-1) \times (n-2) \times \ldots \times 1 ]
- **Base Case**: For 0, (\text{Factorial}(0) = 1).
- **General Case**: (\text{Factorial}(n) = n \times \text{Factorial}(n-1)).

### Recursive Design Methodology

1. **Determine Base Case**
2. **Determine General Case**
3. **Combine Cases into an Algorithm**

```cpp
// Example of Recursive Factorial Function
int factorial(int n) {
    int result;
    if (n == 0)
        result = 1;
    else
        result = n * factorial(n - 1);
    return result;
}
```

## Function Call Mechanism

- On calling a subroutine (function):
    - Current module suspends and stackframe is created with necessary data pushed onto the stack.
- After completion:
    - Stackframe is popped and previous context is restored.

## Efficiency Considerations

- **Recursion** may be less efficient than iteration in terms of time and space.
- Recursive solutions can be preferable for clarity (e.g., Hanoi Tower).
- Iteration can be developed from a recursive solution if efficiency is critical.

## Case Study: Fibonacci Numbers

- **Definition**: [ \text{fib}(0) = 0; \text{fib}(1) = 1; \text{fib}(n) = \text{fib}(n-1) + \text{fib}(n-2) \text{ for } n \geq 2. ]

```cpp
// Fibonacci function implementation
long fib(int n) {
    if (n == 0 || n == 1) // Base Cases
        return n;
    else
        return (fib(n - 1) + fib(n - 2)); // General Case
}
```

## Case Study: Hanoi Tower Problem in Code

```cpp
void moveDisks(int n, char A, char C, char B) {
    if (n &gt; 1) {
        moveDisks(n - 1, A, B, C); // General case
        moveDisks(1, A, C, B);     // Base case
        moveDisks(n - 1, B, C, A); // General case
    } else { // Base case
        cout << "Move disk from " << A << " to " << C << endl;
    }
}
```

## Case Study: Monte Carlo Tree Search

- **Purpose**: To find promising moves through random sampling.
- **Application**: Used in game algorithms like AlphaGo.

### Monte Carlo Tree Search Algorithm

```cpp
Monte_Carlo_Tree_Search_Algorithm {
    priority_queue moves;
    for each possible move m of the player {
        temp_board = current_board;
        add move m to the temp_board;
        utility = simulation(temp_board);
        push (m, utility) into moves;
    }
    return top of priority queue moves;
}
```

### Simulation Function

```cpp
simulation(board) {
    double win = 0.0;
    for (int i; i < simulation_times; i++) {
        temp_board = board;
        win += expansion(temp_board);
    }
    return win / simulation_times;
}
```

## Additional Readings and Resources

- **Textbook**: Chapter 6
- **Source Code**: Download and run sources from the lecture, especially `TicTacToe_MonteCarlo`.

This summary provides a comprehensive overview of the concepts discussed in Lecture 5 on recursion, along with code snippets and definitions for easy reference and understanding.



