
> [!faq] About this Definition
> Class: COMP2019
> Subject: #systemsProgramming1 #dataStructuresAndAlgorthims 
> Date: 21/02/2025 at ~11:00AM
> Topics: #definition  #coding/c #coding/cpp 

## Definition  
`malloc` (**memory allocation**) is a function in C that dynamically allocates a block of memory on the **heap**. It allows you to create variables or arrays at runtime instead of defining a fixed size at compile-time.

## Syntax  
```c
void* malloc(size_t size);
```

- `size_t size`: The number of bytes to allocate.
- Returns a `void*` pointer to the allocated memory, or `NULL` if allocation fails.
- The allocated memory **is not initialized** (it contains garbage values).

## Example: Allocating an Integer

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int* ptr = (int*)malloc(sizeof(int));  // Allocating memory for one integer

    if (ptr == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    *ptr = 42;  // Assigning a value
    printf("Value: %d\n", *ptr);

    free(ptr);  // Freeing allocated memory
    return 0;
}
```

## Example: Allocating an Array

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 5;
    int* arr = (int*)malloc(n * sizeof(int));  // Allocating memory for 5 integers

    if (arr == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    // Initializing array elements
    for (int i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    // Printing array elements
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    free(arr);  // Freeing allocated memory
    return 0;
}
```

## Key Points

- `malloc` dynamically allocates memory on the heap, allowing flexible memory management.
- Always check if `malloc` returns `NULL` to avoid segmentation faults.
- The allocated memory contains **garbage values** (use `calloc` if you need zero-initialized memory).
- Always **free** allocated memory using `free(ptr)` to avoid memory leaks.