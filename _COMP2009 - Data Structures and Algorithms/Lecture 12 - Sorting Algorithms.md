
> [!faq] About this Lecture
> Class: COMP2009
> Subject: #dataStructuresAndAlgorthims 
> Topics: #coding/language/cpp  
> Date: 2025-06-05 at 10:42

## Tree Structures

- **Tree**: A graph (network) without circular paths.
- **Binary Tree**: An extended linked list with two links in each node.
- **Binary Search Tree (BST)**: An ordered binary tree.
- **AVL Tree**: A balanced binary search tree.
- **B-trees**: Multi-way search trees allowing multiple but limited data items in a node.
- **m-way search tree**: Extended binary search tree of order m.
- **B-tree of order m**: A balanced m-way search tree.
- **Heaps**: A complete or nearly complete binary tree with the highest key at the root, and all subtrees are also heaps.

## Notable Algorithms

- **Depth/Breadth/Best-First Search Algorithms**
- __A_ Search Algorithm_*
- **Recursive Algorithms**: Hanoi Tower, Fibonacci Number, Binary Tree.
- **Tree Balancing Algorithms**: AVL Algorithm.
- **B-Tree Algorithm**
- **Reheapup and Reheapdown Algorithms**
- **Minimum Spanning Tree Algorithm**
- **Shortest Path Algorithm**
- **Quick Sort Algorithm**

## Sorting Problems and Algorithms

- **Sorting Problem**: Arrange data according to specified order (e.g., numeric, alphabetic).
- **Important Sorting Algorithms**:
    - Selection Sort
    - Straight Selection Sort
    - Heap Sort
    - Exchange Sort
    - Straight Bubble Sort
    - Quick Sort
    - Insertion Sort
    - Straight Insertion Sort
    - Shell Sort

## What is an Algorithm?

- A finite sequence of well-defined, computer-implementable instructions to solve problems or perform computations.

## General Sort Concepts

- **Sorting Algorithms**: Order data by keys.
- **Performance**: Time and space complexity considerations.
    - **Time Complexity**: Estimated by the number of comparisons and moves.
    - **Space Complexity**: Estimation of memory required.
- **Performance Assessment**: Worst case, best case, average case (default is worst case).

## Comparison of Sorting Algorithms

- **Data Size vs. Time (ms)**:

```
| Data Size | Bubble Sort | Selection | Insertion | Shell Sort | Quick Sort |
|-----------|-------------|-----------|-----------|------------|------------|
| 10,000    | 2,198       | 943       | 615       | 45         | 0          |
| 15,000    | 4,895       | 2,159     | 1,378     | 55         | 10         |
| 20,000    | 8,985       | 3,883     | 2,478     | 99         | 11         |
| 25,000    | 13,898      | 6,037     | 3,895     | 156        | 5          |
| 30,000    | 23,356      | 11,270    | 6,773     | 213        | 27         |
| ...       | ...         | ...       | ...       | ...        | ...        |
| 1,000,000 | 1,775       | ...       | ...       | ...        | ...        |
```

- Time unit: Milliseconds, data randomly generated on a Pentium III 800 laptop.

## Complexity of Simple Sorting Algorithms

- Common complexities for basic sorts:
    - **Bubble Sort**: O(n²)
    - **Selection Sort**: O(n²)
    - **Insertion Sort**: O(n²)

## Selection Sort

- **Process**:
    - Select the smallest element from the array and swap with the first position.
    - Repeat for subsequent positions.
- **Time Complexity**: O(n²).

## From Selection to Heap Sort

- **Building an AVL Tree**:
    - Insert items: O(log₂n) in the worst case.
    - Total complexity for n items: O(n log₂n).
- **Conducting in-order traversal**: O(n log₂n).

## Heap Definition

- **Properties**:
    - Complete or nearly complete binary tree.
    - Root node key is greater/less than or equal to its descendants.
    - All subtrees are heaps.

## Heap Sort Process

- Convert array to heap using `reheapUP`.
- Exchange root with last element.
- Reduce array size and `reheapDown`.

```c
void heapSort(int list[], int last) {
    int sorted, holdData, walker;
    
    // Create a heap
    for (walker = 1; walker &lt;= last; walker++) 
        reheapUp(list, walker);
    
    // Sort with the heap
    sorted = last;
    while (sorted &gt; 0) {
        holdData = list[0];
        list[0] = list[sorted];
        list[sorted] = holdData;
        reheapDown(list, 0, --sorted);
    }
    return;
}
```

## Quick Sort

- **Divides the list** into two partitions using a pivot:
    - Elements less than pivot on one side.
    - Elements greater than or equal on the other.
- **Performance**: Quick sort is typically faster than heapsort for random data, but requires careful pivot selection.

```c
void quickSort(int array[], int low, int high) {
    if (low < high) {
        int pivotIndex = partition(array, low, high);
        quickSort(array, low, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, high);
    }
}
```

## Shell Sort Algorithm

- Creates segments based on increments and sorts them using insertion sort.
- The segments are gradually reduced until sorted completely.

```c
void shellSort(int list[], int last) {
    int hold, k, walker;
    k = last / 2; // increment is half of the list length
    
    while (k != 0) {
        // Run each initial sort until k=1
        for (int i = k; i &lt;= last; i++) {
            // Insertion sort for each group
            hold = list[i];
            walker = i - k;
            while (walker &gt;= 0 &amp;&amp; hold &lt; list[walker]) {
                list[walker + k] = list[walker];
                walker = walker - k;
            }
            list[walker + k] = hold;
        }
        k = k / 2; // halve the increment
    }
}
```

## Summary of Complexity

- **Sorting Algorithms Complexity**:

```
| Algorithm        | Worst Case | Average Case         |
|------------------|------------|----------------------|
| Selection Sort   | O(n²)     | O(n²)               |
| Insertion Sort    | O(n²)     | O(n²)               |
| Bubble Sort      | O(n²)     | O(n²)               |
| Heap Sort        | O(n log₂n)| O(n log₂n)          |
| Quick Sort       | O(n²)     | O(n log₂n)          |
| Shell Sort       | O(n³/2)   | O(n^(3/2))          |
```

## Recommended Reading

- Textbook Chapter 10
- Sorting algorithms visualizations:
    - [CS Visualization](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
    - [Sorting Algorithms](http://www.sorting-algorithms.com/)
- Further resources on YouTube and practical assignments.