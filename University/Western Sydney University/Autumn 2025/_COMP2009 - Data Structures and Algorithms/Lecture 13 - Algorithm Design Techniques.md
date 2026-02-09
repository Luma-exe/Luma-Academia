
> [!faq] About this Lecture
> Class: COMP2009
> Subject: #dataStructuresAndAlgorthims 
> Topics: #coding/language/cpp  
> Date: 2025-06-05 at 10:42

## AI for K-12

- **Organizations Involved:**
    - AAIA (Association for the Advancement of Artificial Intelligence)
    - CSTA (Computer Science Teachers Association)
- **Objective:** Develop national guidelines for teaching K-12 students about AI.

## Teaching AI: Core Components

- **What to Teach About AI:**
    - AI algorithms
    - Jobs AI cannot take over

## Concept of Computer Algorithms

- **Definition:**
    
    - An algorithm is a procedure for solving a problem using a sequence of specific actions.
- **Ways to Describe an Algorithm:**
    
    - Natural languages
    - Flowcharts or UML
    - Pseudo-code
    - Programming languages

- **Major Concerns in Algorithm Design:**
    - **Feasibility:** Can be implemented in a programming language.
    - **Usability:** Satisfies user requirements.
    - **Efficiency:** Time and space-efficient.

## Algorithm Design Paradigms

- **Accumulation Example:**
    
    ```cpp
    int total = 0;
    for (int i = 0; i < n; i++) 
        total += array[i];
    ```
    
    - `total` contains the sum of all values in the array.

- **Maximum/Minimum Calculation Example:**
    
    ```cpp
    int max = array[0];
    for (int i = 1; i < n; i++) 
        if (max < array[i]) 
            max = array[i];
    ```
    
    - `max` holds the maximum value from the array.

- **Search Algorithms:**
    - Sequential search in a linear structure
    - Binary search in an ordered array
    - Hash techniques
    - Search in binary search trees

- **Sorting Algorithms:**
    - Bubble sort and quick sort
    - Selection sort and heap sort
    - Insertion sort and Shell sort

## Common Techniques for Algorithm Design

- Recursive algorithms
- Backtracking algorithms
- Greedy algorithms (heuristic search)
- Divide and conquer
- Dynamic programming
- Randomized algorithms

## Recursive Algorithms

- **Examples:**
    - Tower of Hanoi
    - Fibonacci numbers
    - Monte Carlo methods
    - Minimax algorithms
    - Binary trees
    - Graph traversals
    - Quick sort

```cpp
void moveDisks(int n, char A, char C, char B) {
    if (n &gt; 1) {
        moveDisks(n - 1, A, B, C);
        moveDisks(1, A, C, B);
        moveDisks(n - 1, B, C, A);
    } else {
        cout &lt;&lt; "Move disk " &lt;&lt; n &lt;&lt; endl;
    }
}
```

## Backtracking Algorithms

- **Concept:**
    - Goal-seeking process that explores paths to find a solution.
    - Once a path reaches a dead end, it goes back and tries other paths.

- **Examples:**
    - 8 Queens Puzzle
    - Sliding Puzzle
    - Hex Game
    - Maze Solutions
    - Sudoku

```cpp
int Board::checkWinningStatus(int player) {
    stack<int> path;
    // logic to check winning status...
}
```

## Greedy Algorithms

- **Concept:**
    
    - Construct an objective function to optimize.
    - Make a series of choices based on local optimums until a solution is formed.
- **Use Cases:**
    
    - Optimization problems and strategic games.

```cpp
void getMove(Board board, int &x, int &y) {
    priority_queue<Cell> moves;
    // heuristic search logic...
}
```

## Divide and Conquer

- **Concept:**
    
    - Divide a problem into smaller subproblems, solve each independently, and combine results.
- **Examples:**
    
    - Binary search
    - Quick sort
    - Shell sort

## Dynamic Programming

- **Concept:**
    
    - Solve problems by breaking them into simpler subproblems and storing their solutions to avoid recalculation.
- **Fibonacci Example:**
    
    ```cpp
    long fib(int n) {
        if (n &lt;= 1) return n;
        long answer, last, next_to_last;
        last = next_to_last = 1;
        for (int i = 2; i &lt;= n; i++) {
            answer = last + next_to_last;
            next_to_last = last;
            last = answer;
        }
        return answer;
    }
    ```
    

## Randomized Algorithms

- **Definition:**
    - Algorithms that use randomness to improve performance on average or mitigate adverse inputs.

- **Examples:**
    - Quick sort (random pivot selection)
    - Monte Carlo methods
    - Genetic algorithms

```cpp
// Monte Carlo Tree Search Example
bool MonteCarloPlayer::potentialMove(Board *board, Cell cell) {
    vector<Cell> emptyCells = board->getVacancy();
    // logic to evaluate potential moves...
}
```

## Conclusion: AI Concerns

- Machines can outperform humans in various tasks; teaching how to develop AI is fundamental.
- The ability for a machine to learn and adapt raises implications about intelligence and ethics in technology.