> [!faq] About this Note
>
> Class: COMP2019
> Subject: #systemsProgramming1
> Topics: #coding/language/c
> Date: 2025-06-16 at 16:00

## Table of Contents

1. [[#Chapter 1: Introduction]]

2. [[#Chapter 2: Pointers and Data Structures]]

3. [[#Chapter 3: C Functions and More]]

4. [[#Chapter 4: Unix and System Calls]]

5. [[#Chapter 5: Directories and File Systems Overview]]

6. [[#Chapter 6: Devices and Terminal Control]]

7. [[#Chapter 7: Event Driven Programming]]

8. [[#Chapter 8: Processes]]

9. [[#Chapter 9: Shell]]

10. [[#Chapter 10: I/O Redirection & Pipes]]

11. [[#Chapter 11: Servers & Sockets]]

12. [[#Chapter 12: Threads & Concurrency]]

---

## Chapter 1: Introduction

### What is an Operating System (OS)?

- Definition: A software collection managing and protecting computer resources and providing services.
- Examples include:
    - Microsoft Windows
    - Mac OS X
- Notably, all but Windows are Unix-based.

### What is Systems Programming?

- Goal: Efficient management of hardware resources and system services.
- Involves:
    - Operating System development
    - Programming tools (Compilers, Assemblers, Interpreters, Editors)
- Requires a deep understanding of kernel services.
- Distinction between systems programming and applications programming.

### Characteristics of Systems Programming

- May run continuously.
- Often involves concurrent processes.
- Usually utilizes system calls.
- May not be user-initiated.
- Manages character stream I/O rather than user-oriented GUIs.
- Deals with resource sharing, locking, and synchronization.

### Overview of Unix

- An interactive system for multiple processes and users.

- Originated at Bell Labs in 1969.

- Evolved through commercial development in the 1980s.

- Core structure and functions remain consistent across various versions.

### Notable Unix Principles

- Principle of least surprise.

- Flexibility and power, following the client-server model.

- The foundation for modern internet applications (multitasking and multi-user).

- Used widely in servers and workstations (e.g., iPhone OS is Unix-based).

### Kernel and System Resources

- The kernel manages:
    - Processors
    - Networking

### Understanding Processes

- Defined as programs in execution.

- Includes program components like PC value, resources needed for execution.

- OS handles creation, scheduling, and termination of processes, facilitating communication.

### Input/Output Management

---

## Chapter 2: Pointers and Data Structures

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/DplxIq0mc_Y" frameborder="0" allowfullscreen></iframe>
</div>

### Pointers

- Memory addresses of variables.

- Access and modify addresses.

```c

int x = 10;

int *px = &x;

```

- `x` is an integer variable with a value of `10`.

- `&x` gets the memory address of `x`.

- `int *px` declares `px` as a pointer to an integer (`int *`), and it stores the address of `x` (`&x`).

- To get the value of x via pointer: `*px`.

```c
*px = 20;
```

### Pointer Operations

- `&`: address of a variable.
- `*`: dereferencing, fetches contents of a pointer.
- `=`: assignment.
- `==`, `!=`: equality checks.
- `++`, `--`, `+`, `-`: pointer arithmetic.

### Predefined Pointer

- Only predefined pointer constant: `(void *)0`, often `NULL`.
- Represents pointer to nothing.

#### Example of Pointer

```c
#include <stdio.h>

int main() {
    int x = 100; // x is an integer variable
    p++; // p now points to the second element of array z
}
```

### Why Use Pointers?

- Enables dynamic memory management, reference passing, and complex data structures.

---

## Chapter 3: C Functions and More

### Source Files (.c)

- Contain function definitions

- May include header files

- Programs can consist of one or more source files

- Compilation commands:
    ```
    gcc -c file.c
    ```
- Source files can be compiled separately

### Header Files (.h)

- Contain function declarations/prototypes, constants, global variables, macros

- Two types: system-defined and user-defined

- Included via `#include "file.h"`

### Basics of Functions

- Collection of statements to perform a specific task

- Every C program includes at least `main()`

- Functions are not nested

- Encourages modular design

### Function Prototypes

- Declaration format:
    ```c
    return_type function_name(parameter_types);
    ```
- Parameter names optional
- Default return type `int`, use `void` for no return

### Function Definition

- Body of function:
    ```c
    return_type function_name(parameters) {
        // ...

    }
    ```

### Calling a Function

- Pass arguments in order:
    ```c
    function_name(arg1, arg2);
    ```

### Visibility

- Functions visible after declaration

- `static` qualifier limits visibility to source file

### A Function Example

```c
#include <stdio.h>

void swapit(int, int);

int main() {
    int a = 1, b = 2;
    swapit(a, b);
    return 0;
}

void swapit(int a, int b) {
    int temp;
    printf("swapit: a is %d and b is %d\n", a, b);
}
```

### Pass by Value

- Arguments passed by value; originals unchanged

- To modify originals, use pointers

---

## Chapter 4: Unix and System Calls

### Unix Overview

- Unix = user programs + kernel

- Kernel manages resources and services

### Some Unix Commands

- Programs run in a shell

- Examples:

? - `man`: manual

? - `login`: start session

### Command `who`

- Displays logged-in users by reading utmp

### Adding a Unix Command

- Place executable in `/bin` or `/usr/bin`

### Unix I/O Primitives

- `open`, `read`, `write`, `close`

### The `open` System Call

```c

#include <sys/types.h>

#include <sys/stat.h>

#include <fcntl.h>

int open(const char *path, int oflag, mode_t mode);

```

- Flags: `O_RDONLY`, `O_TRUNC`, etc.

- Returns file descriptor or -1

### The `read` System Call

```c

#include <unistd.h>

ssize_t read(int filedes, void *buff, size_t n);

```

- Returns bytes read or -1

### The `write` System Call

```c

#include <unistd.h>

ssize_t write(int filedes, void *buff, size_t n);

```

- Returns bytes written or -1

### The `close` System Call

```c

#include <unistd.h>

int close(int fd);

```

- Returns 0 or -1

---

## Chapter 5: Directories and File Systems Overview

### Directory Overview

- Directories map names to files

- Always contain `.` and `..`

### List Command (`ls`)

- Lists directory contents

- Examples: `ls -l`, `ls -a`

### Directory Access

- `opendir()`, `readdir()`, `closedir()`

### Struct `dirent`

- Defined in `<dirent.h>`

- Contains filename and other data

### `stat` Call

```c

#include <sys/stat.h>

int stat(const char *path, struct stat *buf);

```

- Fills `struct stat` with metadata

---

## Chapter 6: Devices and Terminal Control

### Device Overview

- Devices as special files in `/dev`

- Example: terminals, tapes

### Device System Calls

- `open`, `read`, `write`, `lseek`, `close`, `stat`

### Example: Magnetic Tape

```c

int fd = open("/dev/tape", O_RDONLY);

lseek(fd, 4096, SEEK_SET);

read(fd, buf, buflen);

close(fd);

```

### Connection Attributes

- Disk buffering: `O_SYNC`, `O_APPEND`

- Use `fcntl` to get/set flags

---

## Chapter 7: Event Driven Programming

### Video Game Basics

- Manage space, time, interruptions, concurrency

### Curses Library

- Screen as grid of cells

- Functions: `initscr()`, `endwin()`, `refresh()`, `move()`, `addstr()`, `addch()`, `clear()`, `standout()`, `standend()`

### Example: hello1.c

```c
#include <curses.h>
int main() {
    initscr();
    endwin();
    return 0;
}
```

### Sleep and Alarm

- `sleep(n)`, `alarm(n)` for timing and interrupts

---

## Chapter 8: Processes

### Processes Overview

- Executing program with its own virtual CPU

### Process Attributes

- PID, priority, niceness, terminal, state

### Exploring Processes

- `ps`, `ps -ax`

### Memory Management

- User vs kernel space

### Exec Family

- `execl()`, `execvp()`, etc. Replace process image

### Fork

```c

pid_t pid = fork();

if (pid == 0) { /* child */ } else { /* parent */ }

```

---

## Chapter 9: Shell

### The Shell

- Interpreter for commands and scripts

### Shell Scripts

- Variables, `echo`, `read`, `set`, `export`, `unset`

- Example:

```bash

#!/bin/sh

echo "Hello, $USER"

```

### I/O Redirection & Pipes

- `>`, `<`, `2>`, `|`

---

## Chapter 10: I/O Redirection & Pipes

### Standard Streams

- `stdin` (0), `stdout` (1), `stderr` (2)

### Redirection

```bash

command > out.txt

command < in.txt

command 2> err.txt

command1 | command2

```

### C Redirection Methods

- Close then open

- `dup()`, `dup2()`

---

## Chapter 11: Servers & Sockets

### Client/Server Model

- Data flow via pipes or sockets

### Unix Calculator: bc & dc

- `bc` as client, `dc` as server

### tinybc.c Example

- `pipe()`, `fork()`, `dup2()`, `exec()`

---

## Chapter 12: Threads & Concurrency

### Threads vs Processes

- Threads share memory, processes do not

### pthreads

- `pthread_create()`, `pthread_join()`

- Mutexes and condition variables

### Example: Multithreaded Animation

```c
void *moving_msg(char *msg) {
    while (1) {
        usleep(delay * 1000); // Animation logic...
    }
}
```
