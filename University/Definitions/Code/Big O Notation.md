
> [!faq] About this Definition
> Subject: #dataStructuresAndAlgorthims
> Topics: #definition #coding/language/cpp #coding/language/c 
> Date: 21/03/2025 at 11:10AM

## What is Big O Notation?

Big O notation is a way to describe how fast (or slow) an algorithm is as the size of the input grows. It helps us compare different algorithms and decide which one is best for a given problem.

Think of it like this: If you had to count all the students in a school, would you count them one by one, or would you divide them into classrooms and count faster? Big O notation helps us describe these differences in counting methods.

o = order of complexity
n = the amount of data (its a variable like numOfRepairs)

---
![[Pasted image 20250320105548.png]]
![[Pasted image 20250320110616.png]]

> [!faq] Recap
> Quick Recap on [[Logarithms]]

## Common Big O Complexities

### O(1): Constant Time Complexity

- **What it means:** No matter how big the input gets, the time taken remains the same.
    
- **Example:** Accessing an element in an array by its index.
    

```cpp
// Constant Time Example (O(1))
int getFirstElement(int arr[]) {
    return arr[0]; // Always takes the same amount of time
}
```

---

### O(n): Linear Time Complexity

- **What it means:** As the input size grows, the time taken grows at the same rate.
    
- **Example:** Searching for a number in an unsorted list (linear search).
    

```cpp
// Linear Search Example (O(n))
bool linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return true; // Found the target
        }
    }
    return false; // Target not found
}
```

---

### O(log n): Logarithmic Time Complexity

- **What it means:** The time grows much slower compared to the input size. Doubling the input size only adds a small number of extra steps.
    
- **Example:** Binary search in a sorted array (dividing the array in half each time).
    

```cpp
// Binary Search Example (O(log n))
bool binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            return true; // Found the target
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return false; // Target not found
}
```

---

### O(n²): Quadratic Time Complexity

- **What it means:** If the input size doubles, the time taken becomes **four times** longer. This is usually slow for large inputs.
    
- **Example:** Bubble sort (comparing every element with every other element).
    

```cpp
// Bubble Sort Example (O(n²))
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]); // Swap adjacent elements
            }
        }
    }
}
```

> [!faq] Recap
> Quick Recap on [[Bubble Sort]]

---

## Why Does Big O Matter?

Big O notation helps us:

- Predict how an algorithm will perform on large inputs.
    
- Choose the best algorithm for a problem.
    
- Save time and resources when working with large data.
    

### Analogy:

Imagine you are at a concert and trying to find a friend. Would you:

1. **O(n)**: Check every person one by one? (Linear Search)
    
2. **O(log n)**: Divide the crowd into sections and check smaller groups? (Binary Search)
    
3. **O(1)**: Call them and ask where they are? (Instant Access)
    

Big O notation helps us choose the fastest way to solve problems efficiently!