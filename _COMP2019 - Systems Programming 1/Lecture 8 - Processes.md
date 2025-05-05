
> [!faq] About this Lecture
> Class: COMP2019
> Subject: #systemsProgramming1
> Topics: #coding 
> Date: 2025-05-05 at 12:51

## Overview of Processes

- A process is:
    - An executing program, encompassing:
        - Code and current execution point (memory, Program Counter)
        - Variables (registers, memory)
        - Other state (special processor registers)
- Each process owns a virtual CPU; the CPU rapidly switches from process to process, termed **multiprogramming**.

## Process Attributes

- Each process has multiple attributes:
    - Unique Process ID (PID)
    - Parent Process ID (PPID)
    - User ID
    - Size
    - Starting time
    - Elapsed time
    - Priority and niceness
- Connection to a terminal, can be running or sleeping.

## Exploring Process Info

- Use the command `ps` to explore user space:
    
    ```bash
    ps -al
    ```
    

## System Processes

- System processes are managed by Unix for tasks such as:
    - Memory management
    - Log files management
    - Login management
    - Scheduling
- Use `ps -ax` to list all processes, including system ones.

## Process and File Management

- The kernel handles:
    - Space allocation for processes
    - Memory management of multiple processes
    - Tracking memory usage

## Memory Management

- Memory is split into:
    - **User space** (user processes)
    - **Kernel space** (system processes)
- Memory allocation is managed in chunks, similar to files on a disk.

## Executing a New Program

- To run a program:
    
    ```c
    execvp(comm, arglist)
    ```
    
    - `comm`: program to run
    - `arglist`: array of command-line strings
    - If successful, it does not return; returns on failure.
- Execution replaces the current process's code and data:
    - Kernel loads new program, copies `arglist` into process as `argv`.

## Example of execvp()

```c
/* exec1.c */
main() {
    char *arglist[3];
    arglist[0] = "ls";
    arglist[1] = "-l";
    arglist[2] = 0;
    printf("* * * About to exec ls -l\n");
    execvp("ls", arglist);
    printf("* * * ls is done. bye\n");
}
```

## Exec Family Functions

- Functions for loading new executables:
    
    ```c
    #include &gt;
    int execl (const char *path, const char *arg, ...);
    int execlp(const char *file, const char *arg, ...);
    int execle(const char *path, const char *arg,..., char * const envp[]);
    int execv (const char *path, char *const argv[]);
    int execvp(const char *file, char *const argv[]);
    int execve(const char *filename, char *const argv[], char *const envp[]);
    ```
    
- Different formats indicate how arguments are passed:
    - `l`: list of strings
    - `v`: array of strings
    - `p`: searches the PATH for executable
    - `e`: allows specifying environment.

## Creating a New Process

- To replicate the current process:
    
    ```c
    fork()
    ```
    
    - Allocates new memory and kernel data structure.
    - Copies the original process.
    - Returns control back to both processes.

## Example of Fork

```c
/* forkdemo1.c */
#include <stdio.h>
#include <unistd.h>
```

main() { int ret_from_fork, mypid; mypid = getpid(); printf("Before: my pid is %d\n", mypid); ret_from_fork = fork(); sleep(1); printf("After: my pid is %d, fork() said %d\n", getpid(), ret_from_fork); } ```

## Distinguishing Parent from Child

```c
/* forkdemo3.c */
#include <stdio.h>
```

main() { int fork_rv; printf("Before: my pid is %d\n", getpid()); fork_rv = fork(); if (fork_rv == -1) perror("fork"); else if (fork_rv == 0) printf("I am the child. my pid=%d\n", getpid()); else printf("I am the parent. my child is %d\n", fork_rv); } ```

## Waiting for Child Process

- To pause the parent process until the child finishes:
    
    ```c
    pid_t result = wait(int *statusptr);
    ```
    
- Returns PID of completed child and updates `statusptr` with exit value passed by child.

## Process Exit States

- A process can end in three ways:
    - Success: `exit(0)` or `return 0`
    - Failure: `exit(nonzero value)`
    - Death: killed by a signal
- Kernel maintains termination status in an integer.

## Example of Parent Getting Child Status

```c
/* waitdemo2.c */
#include <stdio.h>
#include <unistd.h>
```

#define DELAY 5

void child_code(int delay) { printf("child %d here. will sleep for %d seconds\n", getpid(), delay); sleep(delay); printf("child done. about to exit\n"); exit(17); }

void parent_code(int childpid) { int wait_rv; int child_status; wait_rv = wait(&child_status); printf("done waiting for %d. Wait returned: %d\n", childpid, wait_rv); printf("status: exit=%d\n", child_status >> 8); }

main() { int newpid; printf("before: mypid is %d\n", getpid()); if ((newpid = fork()) == -1) perror("fork"); else if (newpid == 0) child_code(DELAY); else parent_code(newpid); } ```

## Exit System Call

- The exit argument is stored until the parent retrieves with `wait`.
- If the parent is not waiting, the process becomes a **zombie**.

## Death and Cleanup of a Process

- `exit` deletes a process, performing:
    - Cleanup tasks
    - Memory deallocation
    - Closing all files
    - Freeing kernel-managed data structures.

## Writing a Shell

- A shell implementation includes:
    - Process creation
    - Program execution
    - Waiting for termination

## Main Loop of a Shell

- A shell runs in a loop:
    
    ```c
    while (!end_of_input) {
        get_command();
        execute_command();
        wait_for_command_to_finish();
    }
    ```
    
- Shell loop integrates `fork()`, `exec()`, and `wait()` for process management.