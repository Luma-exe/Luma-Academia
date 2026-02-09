
> [!faq] About this Lecture
> Class: COMP2009
> Subject: #dataStructuresAndAlgorthims
> Date: 13/03/2025 at 12:03AM
> Topics: #coding #coding/language/cpp 

### Program Complexity

- Program complexity is based on executed operations.
- Count operations consistently (1 for each).
- Dominant operations are key in determining complexity (e.g., `5 * n + 14` where `n` is loop count).

### Searching Algorithms

#### Linear Search

```cpp
bool linearSearch(int list[], int size, int target) {
    for (int i = 0; i &lt; size; i++) {
        if (target == list[i]) {
            return true;
        }
    }
    return false;
}
```

- Complexity: Worst-case scenario of `3 * n + 1`.

#### Bubble Sort

```cpp
void bubbleSort(int list[], int size) {
    for (int i = 0; i &lt; size; i++) {
        for (int j = size; j &gt; i; j--) {
            if (list[j] &lt; list[j - 1]) {
                int temp = list[j];
                list[j] = list[j - 1];
                list[j - 1] = temp;
            }
        }
    }
    return;
}
```

- Complexity: At worst, `3n^2 + 6n + 1`.

### Measuring Complexity

- Importance of Big-O notation.
- Dominant terms dominate function growth.

### Big-O Notation

- Estimate operations over algorithm execution.
- Focus on dominant components.
- Examples of dominant components:
    - `n + 14` leads to `O(n)`.
    - `3n^2 + 5n` leads to `O(n^2)`.

> [!faq] Notes
> More in-depth notes on [[Big O Notation]]

### Acknowledging Growth Rates

- Growth rates from constant time to exponential: fastest to slowest
    - `O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n)`.

### Complexity with Multiple Variables

- Example: Nested loops result in `O(mn)`.

## Linear List Concepts

> [!faq] Notes
> More in-depth notes on [[Linear List]]

### Operations on Linear Lists

- Insertion
    - Random and Ordered lists.
- Deletion
    - Requires search algorithm for locating the element.
- Retrieval
    - Uses search operations, faster for ordered lists.
- Traversal
    - Efficient for linear lists.

### Array-Based Lists

- Requires:
    - An array holding elements.
    - Length of the list.
    - Maximum capacity of the array.

## Searching Algorithms

### Sequential Search

```cpp
template <class type="">
int seqSearch(Type arr[], int size, const Type target) {
    int loc = 0;
    bool found = false</class>;
    for (; loc &lt; size; loc++) {
        if (target == arr[loc]) {
            found = true;
            break;
        }
    }
    return found ? loc : -1;
}
```

- Efficiency:
    - Best case: `O(1)`.
    - Worst/Average case: `O(n)`.

### Binary Search

```cpp
int binarySearch(int list[], int last, int target) {
    int first = 0;
    int mid = -1;
    while (first &lt;= last) {
        mid = (first + last) / 2;
        if (target == list[mid]) return mid;
        else if (target &gt; list[mid]) first = mid + 1;
        else if (target &lt; list[mid]) last = mid - 1;
    }
    return -1;
}
```

- Complexity: `O(log n)` due to halving the search area on each iteration.

## Efficiency of Searching Algorithms

- Sequential Search: `O(n)`.
- Binary Search: `O(log n)`.

## After Class Activities

- Study textbook Chapters 1, 2, 3, & 4.
- Download and run all code from this lecture.
- Attend practical class this week—attendance is compulsory.
- Complete online tutorial 2 due next Sunday.