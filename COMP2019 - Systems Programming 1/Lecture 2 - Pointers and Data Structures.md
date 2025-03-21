
> [!faq] About this Lecture
> Class: COMP2019
> Subject: #systemsProgramming1
> Date: 21/02/2025 at ~11:00AM
> Topics: #coding #coding/c

## Pointers

- Memory addresses of variables.
- Access and modify addresses.
- Declaration syntax: `t *` refers to the address of a variable of type `t`.

```c
int x = 10;
int *px = &x;
```

- Dereferencing:

```c
*px = 20;
```

## Pointer Operations

- `&amp;` : address of a variable.
- `*` : dereferencing, fetches contents of a pointer.
- `=` : assignment.
- `==`, `!=` : equality checks.
- `++`, `--`, `+`, `-` : incrementing and decrementing.
- Pointer arithmetic examples:
    - `p = p + n;`: moves pointer `p` to point to the n-th object.

## Predefined Pointer

- Only predefined pointer constant is `(void *)0`, often defined as `NULL`.
- Represents no reference to anything.

## Example of Pointer

```c
#include <stdio.h>
```

int main() { int x = 100; // x is an integer variable int *ptr = &x; // ptr is a pointer to an integer x printf("x = %d\n", x); printf("ptr = %p\n", ptr); } ```

## Pointer Examples

```c
int x = 10, y = 20, z[5];
int *p; // p is a pointer to int
p = &amp;x; // p now points to x
y = *p; // y is now 10
*p = 100; // x is now 100
p = &z[0]; // p now points to z[0]
p++; // p now points to z[1]
```

## Why Pointers?

- Represent linked data structures (binary trees, linked lists, etc).
- Access dynamically allocated memory.
- Useful for function pointers.

> [!faq] Recap
> Quick Recap on [[Binary Tree]] and [[Linked List]]?

## Data Constructors

- Group associated data.
- Provide abstraction, essential for high-level programming.

## Arrays

- Declaration syntax: `elementType Name[noOfElements];`

```c
float A[30];
```

- Zero-based indexing: `A[0], A[1], ..., A[29]`.
- Whole array assignment possible only in declaration:

```c
int counters[] = {0, 0, 0, 0, 0};
```

## Pointers and Arrays

- An array is represented as a constant pointer.

```c
int p[10]; // p is a constant pointer to p[0]
```

- Accessing elements using pointer arithmetic:

```c
p[k] = *(p + k);
```

## Multi-dimensional Arrays

- Declared as arrays of arrays.

```c
int x[2][4]; // 2D array of integers
```

- Stored by row:

```c
int x[2][4] = {{3, 4, 5, 6}, {7, 8, 9, 10}};
```

## Pointers & Multi-dimensional Arrays

- Use of pointers with multi-dimensional arrays.

```c
*x = &x[0][0];
```

- Accessing elements:

```c
*( *(x + i) + j ) = x[i][j];
```

## Structures in C

- `struct` defines a new user-defined data type.
- Groups related variables (members) of different data types.

```c
struct point {
    int x;
    int y;
};
```

## Structure Operations

- Accessing members:

```c
sp1student[j].age = 18; // Using member operator `.`
student_ptr->age = 18; // Using member operator `->`
```

## Recursive Structures

- Structures can reference themselves.

```c
struct node {
    int num;
    struct node *next;
};
```

- Example of dynamic memory allocation:

```c
ptr1 = (struct node *)malloc(sizeof(struct node));
ptr1->next = (struct node *)0; // Represents an empty list
```

## Unions

- Union defines a new data type with members sharing the same memory location.

```c
union mark {
    int i;
    char s[10];
};
```

- Members can only hold one value at a time.

## Enumerated Types

- Defines a new data type with integral constants.

```c
enum colour { red, blue, green };
```

- Allows better readability and abstraction.

## typedef

- Create a synonym for existing data types.

```c
typedef struct node {
    int nodeval;
    struct node *next;
} *linkedlist;
```

### Note

- `typedef` doesn’t create a new data type; it just creates an alias.

## Exercise Sample Code

- Assume contiguous storage allocation.

```c
int x, y, *p, *q;
x = 10; 
y = 25; 
p = &amp;y; 
q = p; // Values after this point
++*p; // Increment y
*p--; // Post-decrement p
(*q)++; // Increment value at q
*q = 15; // Assign 15 to y
*(p + 2); // Invalid operation
**(p + 2); // Invalid operation
```