
> [!faq] About this Lecture
> Class: COMP2019
> Subject: #systemsProgramming1
> Topics: #coding/language/c
> Date: 21/02/2025 at ~11:00AM

## Source Files (.c)

- Contain function definitions
- May include header files
- Programs can consist of one or more source files
- Compilation commands:
    
    ```bash
    cc main.c hello.c -o newhello
    cc -c hello.c
    cc main.c hello.o -o newhello
    ```
    
- Source files can be compiled separately

## Header Files (.h)

- Contain function declarations/prototypes, constants, global variables, macros
- Two types: system-defined and user-defined
- Request to use a header file:
    
    ```c
    #include <header.h>
    ```
    
- Acts as a less error-prone way to include content

> [!faq] Notes
> More in-depth notes on [[Header Files]]

## Basics of Functions

- Collection of statements to perform a specific task
- Every C program includes at least `main()`
- Functions are not nested
- Encourages breaking large tasks into smaller, manageable functions

## Function Prototypes

- Declaration format:
    
    ```c
    return_type function_name(parameter list);
    
	// e.g. int returnNum(int input)
    ```
    
- Parameter names are optional but types are required
- Default return type is `int`, use `void` for no return value

## Function Definition

- Defines the body of the function:
    
    ```c
    return_type function_name(parameter list) {
        // body of the function
    }
    ```
    
- Parameters are called formal or dummy parameters
- Return value assigned via a return expression

## Calling a Function

- Call a function by passing required parameters:
    
    ```c
    function_name(actual_parameter_list);
    ```
    
- Arguments and parameters matched by order
- Program control returns to the caller upon reaching the return statement or the closing brace

## Visibility

- Functions are visible from (so not before) their declaration throughout the program
- `static` qualifier makes a function invisible outside its source file
- C standard library provides many built-in functions

## A Function Example

```c
#include <stdio.h>

void swapit(int, int); // we do this so we can call the function in main as it is declared after main

int main() {
    int a = 1, b = 2;

    printf("main: a is %d and b is %d\n", a, b);
    swapit(a, b);
    printf("main: after change, a is %d and b is %d\n", a, b);

    return 0;
}

void swapit(int a, int b) {
    int temp;
    
    temp = a;
    a = b;
    b = temp;

    printf("swapit: a is %d and b is %d\n", a, b);
}
```

## Pass by Value

- Arguments are passed by value; original arguments remain unchanged
- Function parameters allocated on the stack
- Reference parameters require pointers

## Passing by Reference

- Passing by reference means passing the memory address of a variable to a function instead of its value.
- This allows the function to modify the original variable directly.
- In C, this is done using pointers (`*`) and the address-of operator (`&`).


```c
#include <stdio.h>

void swapit(int *, int *);

int main() {
    int a = 1, b = 2;

    printf("main: a is %d and b is %d\n", a, b);
    swapit(&a, &b);
    printf("main: after change, a is %d and b is %d\n", a, b);

    return 0;
}

void swapit(int *a, int *b) {
    int temp;

    temp = *a;
    *a = *b;
    *b = temp;

    printf("swapit: a is %d and b is %d\n", *a, *b);
} 
```

## Recursive Functions

- A function that calls itself

```c
void RecursiveFun() {
    printf("This is a recursive function\n");
    RecursiveFun();
}
int main() {
    RecursiveFun();
}
```

- Example with summation:

```c
int sum(int n) {
    if(n==0) return n; // base case
    else return n + sum(n-1); // recursive call
}
```

## Towers of Hanoi Example

- Problem with rules for moving disks

```c
#include <stdio.h> // Include the correct header file for printf()

void hanoi(int n, char from, char aux, char to) {
    if (n == 1) { 
        printf("Move disk 1 from %c to %c\n", from, to);
        return;
    }
    
    hanoi(n - 1, from, to, aux); // Move n-1 disks from 'from' to 'aux'
    printf("Move disk %d from %c to %c\n", n, from, to);
    hanoi(n - 1, aux, from, to); // Move n-1 disks from 'aux' to 'to'
}

int main() {
    int num_disks = 3; // Number of disks
    hanoi(num_disks, 'A', 'B', 'C'); // Solve for 3 disks
    return 0;
}
```

> [!faq] Notes
> More in-depth notes on [[Towers of Hanoi]]

## Binary Tree

- Tree structure with nodes having at most two children
- Nodes: left child, right child, parent, and root

> [!faq] Notes
> More in-depth notes on [[Binary Tree]]

### Binary Tree Structure

```c
#include<stdio.h>
struct tree_el {
   </stdio.h> int val;
    struct tree_el * right, * left;
};
typedef struct tree_el node;
```

### Insertion and Printout Functions

```c
void insert(node ** tree, node * item) {
    if(!(*tree)) {
        *tree = item;
        return;
    }
    if(item->val <= (*tree)->val)
        insert(&(*tree)->left, item);
    else
        insert(&(*tree)->right, item);
}


void printout(node * tree) { 
	if(tree->left) 
		printout(tree->left); 
	printf("%d\n", tree->val); 
	if(tree->right) 
		printout(tree->right); 
} 
```

## Function Pointer

- A variable that stores the address of a function

```c
int (*pf)();
```

- Assign function to pointer:

```c
pf = scanf;
```

## Passing Function as Pointers

```c
#include <stdio.h>

int square(int num) { 
    return num * num; 
} 

void printSquare(int (*f)(int)) { 
    for (int i = 0; i < 5; i++) { 
        printf("The square of %d is %d\n", i, f(i)); 
    } 
} 

int main() { 
    printSquare(square); 
    return 0; 
}
```

## Function Arrays

- Example of an array holding function pointers:

```c
int (*action[MAX])();
```

## Memory Organisation

- Each process has virtual memory addresses
- Segments:
    - Text Segment (code)
    - Data Segment (externally declared objects)
    - Stack Segment (internally declared objects)
    - Dynamic Storage (above Data Segment)

## Storage Classes for Variables

- Automatic: Local, runtime stack
- External: Global, entire program lifetime
- Static: Extends lifetime for local variables, restricts scope for external variables

## Name Spaces

- Different meanings for the same name in different contexts
- Essential for avoiding conflicts

## Command Line Arguments

- Parameters passed to a program upon execution

```c
#include <stdio.h>

int main(int argc, char *argv[]) {
    int i;
    for (i=1; i<argc; i++) 
        printf("%s ", argv[i]);
    printf("\n");
}
```