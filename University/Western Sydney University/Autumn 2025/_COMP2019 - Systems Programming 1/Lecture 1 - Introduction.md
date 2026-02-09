
> [!faq] About this Lecture
> Class: COMP2019
> Subject: #systemsProgramming1
> Topics: #coding/language/c
> Date: 21/02/2025 at ~11:00AM

## Assessments

- Five tutorials/practical's: 4% each.
- Two assignments: 15% each.
- Final exam: two hours, worth 50%.
- Details available in learning guides.

## About Systems Programming 1

- Focus on systems programming within Unix/Linux environments.
- Programming language used: C.

## What is an Operating System (OS)?

- Definition: A software collection managing and protecting computer resources and providing services.
- Examples include:
    - Microsoft Windows
    - Unix/Linux
    - Android, iOS
    - Mac OS X
- Notably, all but Windows are Unix-based.

## What is Systems Programming?

- Goal: Efficient management of hardware resources and system services.
- Involves:
    - Operating System development
    - Device drivers
    - Programming tools (Compilers, Assemblers, Interpreters, Editors)
- Requires a deep understanding of kernel services.
- Distinction between systems programming and applications programming.

## Characteristics of Systems Programming

- May run continuously.
- Often involves concurrent processes.
- Usually utilizes system calls.
- May not be user-initiated.
- Manages character stream I/O rather than user-oriented GUIs.
- Deals with resource sharing, locking, and synchronization.

## Overview of Unix

- An interactive system for multiple processes and users.
- Originated at Bell Labs in 1969.
- Evolved through commercial development in the 1980s.
- Core structure and functions remain consistent across various versions.

## Notable Unix Principles

- Principle of least surprise.
- Flexibility and power, following the client-server model.
- The foundation for modern internet applications (multitasking and multi-user).
- Used widely in servers and workstations (e.g., iPhone OS is Unix-based).

## Kernel and System Resources

- The kernel manages:
    - Processors
    - I/O
    - Processes
    - Memory
    - Devices
    - Files
    - Timers
    - Networking

## Understanding Processes

- Defined as programs in execution.
- Includes program components like PC value, resources needed for execution.
- OS handles creation, scheduling, and termination of processes, facilitating communication.

## Input/Output Management

- All I/O is routed through the OS.
- Processes handle I/O as character streams (console, files).
- Streams can be configured for waiting, editing, etc.

## Memory Management

- Memory consists of user space (user programs) and system space (OS).
- Memory management involves allocation, protection, and sharing.
- Systems programmers focus on object sizes and memory locations.

## File System Functionality

- Acts as long-term information storage, surviving process termination.
- Manages significant amounts of information and diverse storage devices.
- Abstracts physical storage properties through files.

## System Calls and Commands

- System calls: Functions for programmers to interact with the OS.
- System commands: User-level interactions via commands like:
    - `date`, `who`
    - Directory commands: `ls`, `cd`, `pwd`, `mkdir`, `rmdir`
    - File commands: `cat`, `more`, `cp`, `rm`, `mv`
    - Compiling C programs: `cc/gcc`
    - Online manual access: `man`

## Overview of C Programming Language

- A general-purpose programming language.
- Supports various data types and control flow structures.
- Features include few keywords, structures, unions, pointers, and a standard library.

## Variable Declaration in C

- All variables must be declared before use.

```c
/* first c program first.c */
#include <stdio.h>
main() /*entry point for C program*/
{
    int i=5</stdio.h>, j=6;
    printf("The value of i+j is %d\n", i+j);
}
```

## Compiling C Programs

- Using a Unix shell or Linux terminal:
    - Create source code: `first.c`
    - Compile with:
        
        ```bash
        cc/gcc first.c
        ./a.out
        ```
        
    - Or specify output executable name:
        
        ```bash
        cc/gcc -o first first.c
        ./first
        ```
        
- Recommended IDEs: Bloodshed Dev-C++, CodeBlocks, Visual C/C++, Eclipse.

## Data Types in C

- Strongly typed languages require declarations prior to usage, while C is weakly typed.
- Basic data types include:
    - `char` (1 byte)
    - `int` (integer)
    - `float` (single-precision)
    - `double` (double-precision)

## Type Qualifiers

- Modifications to basic types:
    - `short`: 16 bits for integers
    - `long`: 32 bits for integers
    - `unsigned` for chars: values from 0 to 255
    - `signed` for chars: values from -128 to 127

## Data Type Sizes

- Use the `sizeof` operator to determine size:

```c
sizeof(int)
```

## Complex Data Types

- Structs, unions, enums, and arrays (e.g., `int b[30];`).

## Type Conversions

- Different types in expressions require conversions (implicit/explicit).
- Forced conversion syntax:

```c
(type name) expression
```

## Predefined Operators

- C operators can be polymorphic, e.g., `/` for division of `int` and `float`.

## Arithmetic and Assignment Operators

- Examples on how operations modify values:
- Initial condition `b=1` led to:
    - `a = b++`
    - `a = ++b`
    - Other arithmetic assignments (`+=`, `-=`, `*=`, `/=`, `%=`).

## Bitwise Operators

- Six operators for bit manipulation:
    - `&amp;` (AND), `|` (inclusive OR), `^` (exclusive OR).
    - Shift operations: `&lt;&lt;` (left shift), `&gt;&gt;` (right shift).
    - One’s complement: `~`.

## Basic Selection: If Statement

```c
if (expression) statement
```

- Example:

```c
if (a &gt; b) 
    printf("a is greater than b\n");
else if (a == b) 
    printf("a is equal to b\n");
else 
    printf("a is less than b\n");
```

## Multiple Cases: Switch Statement

```c
switch (expression) {
    case constant:
        statement-1;
        ...
    case constant:
        statement-k;
        break;
    default:
        statement list;
}
```

## While and Do-While Statements

- While loop example:

```c
while (EOF != (c = getchar()))
    buf[k++] = c;
```

- Do-While example:

```c
do {
    printf("Enter a value: ");
    scanf("%d", &val);
} while (val != 0);
```

## For Loop Example

```c
for (expression1; expression2; expression3)
    statement;
```

- Pseudocode for evaluation:
    - Evaluate expression 1.
    - While expression 2, perform statement, evaluate expression 3.

## Example: Temperature Conversion C Program

```c
#include <stdio.h>
main() {
    int fah, cel;
    int lower, upper, step;
    lower=0; /* lower limit */
    upper=220; /* upper limit */
</stdio.h>    step=20; /* step size */
    for (fah=lower; fah<=upper; fah=fah+step) {
        cel=5*(fah-32)/9;
        printf("%d\t%d\n", fah, cel);
    }
}
```

## Example with Function Call

```c
#include <stdio.h>
int celc(int);
main() {
    int temp;
    printf("\nPlease enter temp F ");
    scanf("%d", &amp;temp);
    printf("\n%dF to centigrade is %d</stdio.h>C\n", temp, celc(temp));
    exit(0);
}
int celc(int f) {
    return 5*(f - 32)/9;
}
```

## Pseudocode Insights

- Using structured English to describe algorithms without syntax distractions.
- Example for determining pass/fail based on student marks.

## Recommended C Resources

- MIT Open Courseware: Practical Programming in C
    - [OCW MIT Link](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-087-practical-programming-in-c-january-iap-2010/)