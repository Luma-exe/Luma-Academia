
> [!faq] About this Lecture
> Class: COMP2019
> Subject: #systemsProgramming1
> Topics: #coding/language/c 
> Date: 2025-05-29 at 15:59

# Lecture 10: I/O Redirection & Pipes

## Standard Input, Output & Error

- Standard streams used by UNIX:
    - Standard Input (`stdin`): File descriptor 0
    - Standard Output (`stdout`): File descriptor 1
    - Standard Error (`stderr`): File descriptor 2

## I/O Redirection Notation

- **Output Redirection:**
    
    - `&gt;`: Redirect output to a file (overwrites)
    - `&gt;&gt;`: Append output to a file
    - Example:
        
        ```bash
        ls &gt; myfile
        a.out &gt;&gt; result.txt
        ```
        
- **Input Redirection:**
    
    - `&lt;`: Redirect input from a file
    - Example:
        
        ```bash
        wc < myfile
        ```
        

- **Pipe:**
    - `|`: Connects the output of one command to the input of another
    - Example:
        
        ```bash
        date | grep Fri
        ```
        

## How I/O Redirection Works

- The shell directs a program's output to files or other programs.
- It utilizes standard streams to manage input, output, and error messages.

## Example Code Snippet

- **C Code Example: Print args and send error to stderr**
    
    ```c
    #include <stdio.h>
    main(int ac, char *av[]) {
    </stdio.h>        int i;
        printf("Number of args: %d, Args are:\n", ac);
        for(i=0; i<ac; i++)
            printf("args[%d] %s\n", i, av[i]);
        fprintf(stderr,"This message is sent to stderr.\n");
    }
    ```
    

## Redirection Facts

- The shell is responsible for redirecting I/O; the command itself does not handle redirection.
- Redirection symbols can appear anywhere in the command.

## Redirecting I/O in C

### Basic Operations

- **Attach stdout to a file**:
    
    ```bash
    who &gt; userlist
    ```
    
- **Attach stdin to a file**:
    
    ```bash
    sort &lt; data
    ```
    
- **Attach stdout to stdin**:
    
    ```bash
    who | sort
    ```
    

### Lowest-Available-FD Principle

- Each process has an array of opened files, and a file descriptor is an index in that array.
- When a file is opened, it takes the lowest available file descriptor.

## Methods to Attach stdin to a File

### Method One: Close-Then-Open Technique

- Steps:
    
    ```c
    close(0);                           // Close stdin
    int fd = open("file.txt", O_RDONLY); // Open file, attaches to stdin
    ```
    

- **Code Example for Method One**:
    
    ```c
    #include <stdio.h>
    #include <fcntl.h>
    main() {
        int fd;
        char line[100];
        fgets(line, 100, stdin); // Read from stdin
        printf("%s", line); // Output read line
        close(0); // Redirect input</fcntl.h></stdio.h>
        fd = open("stdinredir1.c", O_RDONLY);
        if(fd != 0) {
            fprintf(stderr,"Could not open data as fd 0\n");
            exit(1);
        }
        fgets(line, 100, stdin); // Read from opened file
        printf("%s", line); // Output read line
    }
    ```
    

### Method Two: Using `dup`

- Use the `dup` system call to duplicate a file descriptor.
- Steps:
    
    ```c
    int fd = open("file.txt", O_RDONLY);
    close(0);
    int newfd = dup(fd); // Duplicate fd
    close(fd); // Close original fd
    ```
    

- **Code Example for Method Two**:
    
    ```c
    #include <stdio.h>
    #include <fcntl.h>
    main() {
        int fd, newfd;
        char line[100];
        fgets(line, 100, stdin);
        printf("%s", line);
        fd = open("stdinredir1.c", O_RDONLY);
    ```
    

</fcntl.h></stdio.h> close(0); newfd = dup(fd); // Duplicate fd to use as stdin if (newfd != 0) { fprintf(stderr,"Could not duplicate fd 0\n"); exit(1); } close(fd); fgets(line, 100, stdin); printf("%s", line); } ```

### Method Three: Using `dup2`

- Similar to Method Two but uses `dup2` to assign the new file descriptor directly.
- Steps:
    
    ```c
    newfd = dup2(fd, 0); // Set fd as stdin
    ```
    

- **Code Example for Method Three**:
    
    ```c
    #include <stdio.h>
    #include <fcntl.h>
    main() {
        int fd, newfd;
        char line[100];
        fgets(line, 100, stdin);
        printf("%s", line);
        fd = open("stdinredir1.c", O_RDONLY</fcntl.h></stdio.h>);
        newfd = dup2(fd, 0); // Redirect stdin
        if (newfd != 0) {
            fprintf(stderr,"Could not duplicate fd 0\n");
            exit(1);
        }
        close(fd);
        fgets(line, 100, stdin);
        printf("%s", line);
    }
    ```
    

## Redirecting stdout of a Child Process

- To redirect output of a child process:
    - Create the child with `fork()`.
    - Close the current `stdout`.
    - Open/create a new file.
    - Execute the desired command.

- **Code Example**:
    
    ```c
    #include <stdio.h>
    main() {
        int pid;
        int fd;
        printf("About to run who into a file\n");
        if ((pid = fork()) == -1) {
            perror("fork");
            exit(1);
        }
        if</stdio.h> (pid == 0) { // Child process
            close(1);
            fd = creat("userlist", 0644);
            execlp("who", "who", NULL);
            perror("execlp");
            exit(1);
        }
        if (pid != 0) { // Parent process
            wait(NULL);
            printf("Done running who. results in userlist\n");
        }
    }
    ```
    

## Pipes

- Used to connect the output of one process to the input of another process.
- A pipe creates a channel with:
    - A reading end
    - A writing end

### Creating a Pipe

- **System Call**:
    
    ```c
    int pipefd[2];
    pipe(pipefd); // Create a pipe
    ```
    
- Returns two file descriptors:
    - `pipefd[0]`: Reading end
    - `pipefd[1]`: Writing end

### Using Fork to Share a Pipe

- A parent process creates a pipe and then forks a child process.
- Both processes can read and write to the same pipe.
- The pipe is effective for communication; one writing and one reading.

### Pipe Example Code

```c
#include <stdio.h>
#include <string.h>
#include <unistd.h>
#define CHILD_MESS "I want a cookie\n"
#define PAR_MESS "testing..\n"
#define oops(m, x) { perror(m); exit(x); }


main() { int pipefd[2]; // Pipe int len; char buf[BUFSIZ]; int read_len;

if (pipe(pipefd) == -1) oops("cannot get a pipe", 1);

switch (fork()) {
    case -1: oops("cannot fork", 2);
    case 0: // Child writes
        len = strlen(CHILD_MESS);
        while (1) {
            if (write(pipefd[1], CHILD_MESS, len) != len) oops("write", 3);
            sleep(5);
        }
    default: // Parent reads
        len = strlen(PAR_MESS);
        while (1) {
            if (write(pipefd[1], PAR_MESS, len) != len) oops("write", 4);
            sleep(1);
            read_len = read(pipefd[0], buf, BUFSIZ);
            if (read_len <= 0) break;
            write(1, buf, read_len); // Write to stdout
        }
}
```
