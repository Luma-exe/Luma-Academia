
> [!faq] About this Note
> Subject: #systemsProgramming1 #dataStructuresAndAlgorthims 
> Topics: #coding/language/c #coding/language/cpp 
> Date: 2025-03-21 at 17:28

### 1. **Abstraction**  
- Hides complex details and only shows essential features.  
- Example: Using functions to perform tasks without knowing their internal code.  

```c
int add(int a, int b) { return a + b; } // Function hides the addition logic
```

### 2. **Encapsulation**

- Bundles data and functions together to protect them from unintended access.
- Example: Using `struct` to group related variables.

```c
struct Car {
    char brand[20];
    int speed;
};
```

### 3. **Modularity**

- Breaks code into smaller, reusable parts (functions, files, libraries).
- Example: Using header files (`.h`) to separate function declarations.

```c
// myfunctions.h
void greet();
```

### 4. **Pointers & Memory Management**

> [!faq] Notes
> More in-depth notes on [[Lecture 2 - Pointers and Data Structures]]


- C gives direct access to memory using **pointers**.
- You must **allocate** and **free** memory manually.

```c
int *ptr = malloc(sizeof(int)); // Allocate memory
free(ptr); // Free memory
```

### 5. **Control Structures**

- C provides loops and conditionals for decision-making and repetition.

```c
if (x > 0) { printf("Positive"); }
for (int i = 0; i < 5; i++) { printf("%d", i); }
```

### 6. **Strong Typing**

- Every variable has a **specific type** (int, float, char, etc.).

```c
int age = 25;   // Correct
float pi = 3.14; // Correct
```

### 7. **Procedural Programming**

- C follows a **step-by-step approach** with functions to organize code.
- Example: Using `main()` as the starting point.

```c
void greet() { printf("Hello!"); }

int main() {
    greet(); // Call function
    return 0;
}
```

### 8. **Pre-processor Directives**

- Special commands that run **before compilation** (`#include`, `#define`).

```c
#include <stdio.h>  // Includes standard input/output library
#define PI 3.14159  // Defines a constant
```

### 9. **Manual Memory Handling**

> [!faq] Notes
> More in-depth notes on [[Malloc]]

- Unlike some languages, C **does not** have automatic garbage collection.
- You must manage memory manually using `malloc()` and `free()`.

```c
int *arr = (int *)malloc(5 * sizeof(int)); // Allocate memory
free(arr); // Free memory
```

### 10. **Standard Library Functions**

- C has a powerful standard library for **I/O, math, string handling, and more**.

```c
#include <math.h>
double squareRoot = sqrt(25); // Built-in function
```

