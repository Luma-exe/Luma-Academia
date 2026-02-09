
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

**Common flags:**
- `O_RDONLY`: Read only
- `O_WRONLY`: Write only  
- `O_RDWR`: Read and write
- `O_CREAT`: Create file if it doesn't exist
- `O_TRUNC`: Truncate file to zero length
- `O_APPEND`: Append to end of file

**Example:**
```c
int fd = open("file.txt", O_RDWR | O_CREAT, 0644);
if (fd == -1) {
    perror("open failed");
    exit(1);
}
```

### File Operations

**Reading:**
```c
ssize_t read(int fd, void *buf, size_t count);
```

**Writing:**
```c
ssize_t write(int fd, const void *buf, size_t count);
```

**Seeking:**
```c
off_t lseek(int fd, off_t offset, int whence);
// whence: SEEK_SET, SEEK_CUR, SEEK_END
```

**Closing:**
```c
int close(int fd);
```

### File Information

**stat() system call:**
```c
struct stat {
    mode_t st_mode;    // File type and permissions
    off_t st_size;     // File size in bytes
    time_t st_mtime;   // Last modification time
    // ... other fields
};
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

## Curses Library (C Language)

The **curses** library is used to create **text-based User Interfaces (TUIs)** by treating the terminal as a **grid of cells**.

Each cell can hold:
- A **character**
- **Attributes** (e.g. bold, standout)
- **Colors**

---

### Key Concepts

- The screen is a **2D grid** of characters.
- You can **move the cursor**, **draw text**, and **control attributes**.

---

### Common Functions

| Function         | Description |
|------------------|-------------|
| `initscr()`      | Initializes the screen for curses mode. Must be called first. |
| `endwin()`       | Ends curses mode and restores normal terminal behavior. |
| `refresh()`      | Updates the actual screen with changes made in memory. |
| `move(y, x)`     | Moves the cursor to row `y`, column `x`. |
| `addstr("text")` | Writes a string at the current cursor location. |
| `addch('c')`     | Writes a single character at the current cursor location. |
| `clear()`        | Clears the screen. |
| `standout()`     | Turns on standout mode (highlighted text). |
| `standend()`     | Ends standout mode. |

---

### Example Usage

```c
#include <curses.h>

int main() {
    initscr();              // Start curses mode
    clear();                // Clear screen
    move(5, 10);            // Move cursor to (5, 10)
    standout();             // Turn on standout mode
    addstr("Hello World");  // Add highlighted text
    standend();             // End standout mode
    refresh();              // Show changes
    getch();                // Wait for user input
    endwin();               // End curses mode
    return 0;
}

```

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

- A **process** is an executing program with its own **virtual CPU** and **memory space**.
- Processes are isolated — each has its own **PID**, **memory**, and **execution state**.

---

### Process Attributes

- **PID** (Process ID): Unique identifier for each process
- **PPID** (Parent PID): ID of the process that created it
- **State**: Running, Sleeping, Zombie, etc.
- **Priority**: Determines scheduling preference
- **Niceness**: User-assigned priority adjustment
- **Terminal**: Associated terminal device

---

### Exploring Processes

- `ps`: Show current user’s processes  
- `ps -ax`: Show all processes (regardless of user or terminal)

---

### Memory Management

- **User Space**: Process' private memory — code, stack, heap
- **Kernel Space**: Shared system memory — used by the OS

---

### Exec Family

- Replaces the **current process image** with a new program
- Common forms:
  - `execl(path, arg0, arg1, ..., NULL)`
  - `execv(path, argv)`
  - `execvp(file, argv)` — searches `$PATH`

---

### Fork Example

```c
pid_t pid = fork();
if (pid == 0) {
    // Child process
    execl("/bin/ls", "ls", "-l", NULL);
    perror("exec failed");
    exit(1);
} else if (pid > 0) {
    // Parent process
    wait(NULL); // Wait for child
} else {
    // Fork failed
    perror("fork failed");
    exit(1);
}
```

### Process Creation Pattern

1. **`fork()`**
    - Creates a child process as a **copy** of the parent.
    - Both processes continue execution independently.
        
    - Returns:
        - `0` to the child
        - Child’s PID to the parent
        - `-1` if an error occurred
            
2. **`exec()`**
    - Replaces the current process image with a new program.
    - Variants: `execl()`, `execp()`, `execvp()`, etc.
    - If successful, the current code **does not continue** after `exec()`.
        
3. **`wait()`**
    - Parent process waits for a **child** process to finish.
    - Returns child’s PID and stores its exit status.
        
4. **`exit()`**
    - Terminates a process and returns an exit code to the parent.

---

### Key Process Functions

|Function|Description|
|---|---|
|`fork()`|Creates a new process. Returns 0 to child, PID to parent.|
|`exec*()`|Replaces the current process image with a new one.|
|`wait()`|Waits for any child process to terminate.|
|`waitpid()`|Waits for a specific child process to finish.|
|`getpid()`|Returns the current process ID.|
|`getppid()`|Returns the parent process ID.|

---

### Summary

- A typical pattern is: `fork()` → `exec()` → `wait()` in the parent.
    
- If `exec()` fails, handle with `perror()` and exit.
    
- Always use `wait()` in the parent to avoid zombie processes.
---

## Chapter 9: Shell

### The Shell

- The **shell** is a command-line interpreter that allows users to interact with the operating system.
- It executes commands, launches programs, and supports scripting for automation.

---

### Shell Scripts

- A **shell script** is a file containing a series of shell commands.
- It typically starts with a shebang (`#!/bin/sh` or `#!/bin/bash`).
- Scripts can use:
  - **Variables**
  - **Control structures** (`if`, `for`, `while`)
  - **Input/output commands**

#### Common Commands

- `echo`: Print to the terminal
- `read`: Accept user input
- `set`: Set shell options
- `export`: Make variable available to sub-processes
- `unset`: Remove a variable

#### Example:

```bash
#!/bin/sh

echo "Hello, $USER"
read -p "Enter your name: " name
echo "Nice to meet you, $name!"
```

### I/O Redirection & Pipes

|Symbol|Meaning|Example|
|---|---|---|
|`>`|Redirect stdout to file (overwrite)|`ls > files.txt`|
|`>>`|Redirect stdout to file (append)|`echo "done" >> log.txt`|
|`<`|Redirect stdin from file|`sort < input.txt`|
|`2>`|Redirect stderr to file|`./badcmd 2> errors.log`|
|`&>`|Redirect both stdout and stderr|`make &> build.log`|
|`|`|Pipe stdout to another command|

---

### Notes

- Shell scripting is a powerful tool for automating tasks.
    
- Always make your script executable: `chmod +x script.sh`
    
- Run it with `./script.sh`

---

## Chapter 10: I/O Redirection & Pipes

### Standard Streams

- `stdin` (file descriptor 0): Standard input
- `stdout` (file descriptor 1): Standard output  
- `stderr` (file descriptor 2): Standard error

### Shell Redirection

```bash
command > out.txt        # Redirect stdout to file
command < in.txt         # Redirect stdin from file
command 2> err.txt       # Redirect stderr to file
command >> out.txt       # Append stdout to file
command1 | command2      # Pipe stdout of cmd1 to stdin of cmd2
```

### C Redirection Methods

**Method 1: Close and Open**
```c
close(1);                    // Close stdout
open("output.txt", O_CREAT|O_WRONLY, 0644); // Opens as fd 1
printf("This goes to file\n");
```

**Method 2: dup2()**
```c
int fd = open("output.txt", O_CREAT|O_WRONLY, 0644);
dup2(fd, 1);                 // Copy fd to stdout
close(fd);                   // Close original fd
printf("This goes to file\n");
```

### Pipes in C

**Creating Pipes:**
```c
int pipefd[2];
if (pipe(pipefd) == -1) {
    perror("pipe failed");
    exit(1);
}
// pipefd[0] is read end, pipefd[1] is write end
```

**Fork and Pipe Pattern:**
```c
int pipefd[2];
pipe(pipefd);
if (fork() == 0) {
    // Child: close read end, write to pipe
    close(pipefd[0]);
    dup2(pipefd[1], 1);    // Redirect stdout to pipe
    close(pipefd[1]);
    execlp("ls", "ls", NULL);
} else {
    // Parent: close write end, read from pipe
    close(pipefd[1]);
    dup2(pipefd[0], 0);    // Redirect stdin from pipe
    close(pipefd[0]);
    execlp("wc", "wc", "-l", NULL);
}
```

---

## Chapter 11: Servers & Sockets

### Client/Server Model

- Data flow via pipes or sockets
- Clients request services, servers provide them
- Can be on same machine (local) or different machines (network)

### Socket Programming Basics

**Socket Creation:**
```c
int socket(int domain, int type, int protocol);
// domain: AF_INET (IPv4), AF_UNIX (local)
// type: SOCK_STREAM (TCP), SOCK_DGRAM (UDP)
```

**Server Socket Setup:**
```c
int sockfd = socket(AF_INET, SOCK_STREAM, 0);
struct sockaddr_in server_addr;
server_addr.sin_family = AF_INET;
server_addr.sin_port = htons(PORT);
server_addr.sin_addr.s_addr = INADDR_ANY;

bind(sockfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
listen(sockfd, 5); // Queue up to 5 connections
```

**Client Connection:**
```c
int sockfd = socket(AF_INET, SOCK_STREAM, 0);
struct sockaddr_in server_addr;
// ... set up server_addr ...
connect(sockfd, (struct sockaddr*)&server_addr, sizeof(server_addr));
```

**Data Transfer:**
```c
send(sockfd, message, strlen(message), 0);
recv(sockfd, buffer, sizeof(buffer), 0);
```

### Unix Calculator: bc & dc

- `bc` as client, `dc` as server
- Communication through pipes

### tinybc.c Example

- `pipe()`, `fork()`, `dup2()`, `exec()`

---

## Chapter 12: Threads & Concurrency

### Threads vs Processes

- **Threads**: Share memory space, lighter weight, faster communication
- **Processes**: Separate memory spaces, more isolated, heavier weight

### pthreads

**Thread Creation:**
```c
#include <pthread.h>
pthread_t thread;
int pthread_create(&thread, NULL, function, arg);
int pthread_join(thread, NULL); // Wait for thread completion
```

**Mutex (Mutual Exclusion):**
```c
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_mutex_lock(&mutex);
// Critical section
pthread_mutex_unlock(&mutex);
```

**Condition Variables:**
```c
pthread_cond_t cond = PTHREAD_COND_INITIALIZER;
pthread_cond_wait(&cond, &mutex); // Wait for condition
pthread_cond_signal(&cond);       // Signal one waiting thread
pthread_cond_broadcast(&cond);    // Signal all waiting threads
```

### Thread Safety Issues

- **Race Conditions**: Multiple threads accessing shared data
- **Deadlock**: Threads waiting for each other indefinitely
- **Starvation**: Thread never gets access to resources

### Example: Multithreaded Animation

```c
void *moving_msg(char *msg) {
    while (1) {
        usleep(delay * 1000); // Animation logic...
    }
}
```

---

## Summary

### Core Systems Programming Concepts

#### Key System Calls to Remember
- **File Operations**: `open()`, `close()`, `read()`, `write()`, `lseek()`
- **Process Management**: `fork()`, `exec()`, `wait()`, `exit()`
- **Communication**: `pipe()`, `socket()`, `bind()`, `listen()`, `accept()`
- **Thread Management**: `pthread_create()`, `pthread_join()`, `pthread_mutex_lock()`

#### Memory Management Fundamentals
- **Pointers**: Essential for C programming - understand pointer arithmetic, dereferencing, and memory allocation
- **Dynamic Allocation**: `malloc()`, `free()`, `calloc()`, `realloc()` - always check for NULL returns
- **Memory Layout**: Stack (local variables), Heap (dynamic allocation), Data segment, Code segment

#### Process vs Thread Comparison
| Aspect | Processes | Threads |
|--------|-----------|---------|
| Memory | Separate address spaces | Shared memory space |
| Communication | IPC (pipes, sockets, shared memory) | Direct memory access |
| Creation Cost | Expensive (`fork()`) | Lighter (`pthread_create()`) |
| Isolation | High - crash doesn't affect others | Low - crash affects all threads |

### Critical System Programming Patterns

#### Error Handling Best Practices
```c
// Always check system call return values
if (open("file.txt", O_RDONLY) == -1) {
    perror("open failed");
    exit(1);
}

// Use errno for detailed error information
if (result == -1) {
    fprintf(stderr, "Error: %s\n", strerror(errno));
}
```

#### Safe String Handling
- Use `strncpy()` instead of `strcpy()`
- Always null-terminate strings manually with `strncpy()`
- Check buffer bounds to prevent overflow

#### File Descriptor Management
- Always close file descriptors when done
- Use `dup2()` for I/O redirection
- Remember: stdin=0, stdout=1, stderr=2

### Important Unix/Linux Concepts

#### File System Hierarchy
- Everything is a file (devices, directories, regular files)
- Absolute paths start with `/`
- Relative paths are relative to current working directory
- Use `stat()` to get file information

#### Process Lifecycle
1. **Creation**: `fork()` creates identical copy
2. **Execution**: `exec()` family replaces process image
3. **Termination**: `exit()` or return from main
4. **Cleanup**: Parent calls `wait()` to collect exit status

#### I/O Redirection and Pipes
- `>` redirects stdout to file
- `<` redirects stdin from file
- `|` creates pipe between processes
- `dup2()` duplicates file descriptors for redirection

### Network Programming Essentials

#### Socket Programming Flow
**Server**:
1. `socket()` - create socket
2. `bind()` - bind to address/port
3. `listen()` - listen for connections
4. `accept()` - accept client connections
5. `read()`/`write()` - communicate
6. `close()` - cleanup

**Client**:
1. `socket()` - create socket
2. `connect()` - connect to server
3. `read()`/`write()` - communicate
4. `close()` - cleanup

#### Address Structures
```c
struct sockaddr_in server_addr;
server_addr.sin_family = AF_INET;
server_addr.sin_port = htons(port);
server_addr.sin_addr.s_addr = INADDR_ANY;
```

### Concurrency and Synchronization

#### Thread Synchronization Tools
- **Mutexes**: Protect shared resources from race conditions
- **Condition Variables**: Allow threads to wait for specific conditions
- **Semaphores**: Control access to limited resources

#### Race Condition Prevention
```c
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

// Critical section
pthread_mutex_lock(&mutex);
// Access shared resource here
pthread_mutex_unlock(&mutex);
```

### Debugging and Development Tips

#### Common Debugging Tools
- `gdb` - GNU debugger for step-by-step execution
- `valgrind` - memory leak detection
- `strace` - trace system calls
- `ps`, `top` - monitor processes

#### Compilation Flags
```bash
gcc -Wall -Wextra -g -o program program.c  # Enable warnings and debug info
gcc -pthread -o program program.c          # Link pthread library
```

### Exam Preparation Checklist

#### Must-Know Code Patterns
- [ ] Basic `fork()` and `exec()` usage
- [ ] Simple pipe creation and usage
- [ ] Basic socket server/client
- [ ] Thread creation with `pthread_create()`
- [ ] Proper error handling with return value checking

#### Key Concepts to Review
- [ ] Difference between processes and threads
- [ ] How pipes work and when to use them
- [ ] Socket programming basics (TCP)
- [ ] File descriptor manipulation
- [ ] Signal handling basics
- [ ] Memory management (malloc/free)
- [ ] Pointer arithmetic and usage

#### Common Exam Question Types
1. **Code Tracing**: Follow execution of `fork()`, pipe, or thread code
2. **Error Identification**: Find bugs in system call usage
3. **Code Completion**: Fill in missing system calls or error handling
4. **Concept Explanation**: Explain process vs thread, client-server model, etc.
5. **Design Problems**: Design simple client-server or producer-consumer solutions