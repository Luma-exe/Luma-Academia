
> [!faq] About this Lecture
> Class: COMP2019
> Subject: #systemsProgramming1
> Topics: #coding/language/c
> Date: 2025-03-27 at 10:22

## Unix Overview

- A Unix system consists of user programs and the system kernel.
- The kernel is the core of Unix and manages access to resources and all programs.
- Understanding the structure of kernel services is crucial for writing system programs.

## Some Unix Commands

- Commands are programs that run in a shell (command-line interpreter).
- Examples of Unix commands:
    - `man`: Displays the manual for other commands.
    - `who`: Shows currently logged-in users.
    - `cp`: Copies files.
    - `login`: Starts a new user session.

## Command `who`

- Displays current logged-in users by examining the "utmp" file.
- Structure example:
    
    ```c
    struct utmp {
      char ut_user[32]; /* user login name */
      char ut_id[14]; /* id */
      char ut_line[32]; /* device name */
      short ut_type; /* type of entry */
      pid_t ut_pid; /* process id */
      struct exit_status {
        short e_termination; /* process termination status */
        short e_exit; /* process exit status */
      } ut_exit;
      time_t ut_time; /* time entry was made */
      char ut_host[64]; /* host name */
    };
    ```

## Adding a Unix Command

- Write a new program and store its executable in standard directories (e.g., `/bin`, `/usr/bin`).
- Run the program by typing its name in the shell.

## Unix I/O Primitives

- I/O streams are treated uniformly, regardless of their source (files, devices, etc.).
- Main I/O primitives include:
    - `open`: Open a file.
    - `read`: Read data from a file.
    - `write`: Write data to a file.
    - `close`: Close a file.

## The `open` System Call

```c
#include <sys types.h="">
#include <sys stat.h="">
#include <fcntl.h>
int open(const char *path, int oflag, [mode_t mode]);
```

- Example usage:
    
    ```c
    fd = open("data", O_RDONLY); /* open for reading */
    ```
    
- Flags include:
    - `O_RDONLY`: Read only.
    - `O_WRONLY`: Write only.
    - `O_RDWR`: Read and write.
    - `O_CREAT`: Create a file if</fcntl.h> it does not exist.
    - `O_TRUNC`: Truncate the size to 0.
- Upon success, returns a file descriptor; returns `-1` on failure.

## The `read` System Call

```c
#include <unistd.h>
ssize_t read(int filedes, void *buff, size_t n);
```

- Example usage:
    
    ```c
    nread = read(fd, buffer, 1024); /* read</unistd.h> up to 1024 characters */
    ```
    
- Returns:
    - Number of characters read.
    - `0` for end of file.
    - `-1` for error.

## The `write` System Call

```c
#include <unistd.h>
ssize_t write(int filedes, void *buff, size_t n);
```

- Example usage:
    
    ```c</unistd.h>
    w = write(fd, buffer, 1024); /* write up to 1024 characters */
    ```
    
- Returns number of characters written or `-1` for error.

## The `close` System Call

```c
#include >
int close(int fd);
```

- Example usage:
    
    ```c
    close(fd);
    ```
    
- Returns `0` on success, `-1` on failure.

## The `creat` System Call

```c
#include <sys types.h="">
#include <sys stat.h="">
#include <fcntl.h>
int creat(char *filename, int mode);
```

- Example usage:
    
    ```</fcntl.h></sys></sys>c
    fd = creat("data", 0644); /* create file for writing */
    ```
    

## The CP Command Example (`cp1.c`)

```c
/** cp1.c
 * Copy files from source to destination using read and write
 */
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>

#define BUFFERSIZE 4096
#define COPYMODE 0644

void oops(char *, char *);

// Main function
int main(int ac, char *av[]) {
    int in_fd, out_fd, n_chars;
    char buf[BUFFERSIZE];

    // Check for proper usage
    if (ac != 3) {
        fprintf(stderr, "Usage: %s source destination\n", av[0]);
        exit(1);
    }

    // Open source file for reading
    if ((in_fd = open(av[1], O_RDONLY)) == -1)
        oops("Cannot open", av[1]);

    // Create destination file
    if ((out_fd = creat(av[2], COPYMODE)) == -1)
        oops("Cannot create", av[2]);

    // Copy data from source to destination
    while ((n_chars = read(in_fd, buf, BUFFERSIZE)) > 0) {
        if (write(out_fd, buf, n_chars) != n_chars)
            oops("Write error to", av[2]);
    }

    if (n_chars == -1)
        oops("Read error from", av[1]);

    // Close both files
    if (close(in_fd) == -1 || close(out_fd) == -1)
        oops("Error closing files", "");

    return 0;
}

// Error handling function
void oops(char *s1, char *s2) {
    fprintf(stderr, "Error: %s ", s1);
    perror(s2);
    exit(1);
}
```

## Buffering Efficiency

### Buffer size vs Execution time (for copying a 5 MB file)

|Buffer Size|Execution Time (seconds)|
|---|---|
|1|50.29|
|4|12.81|
|16|3.28|
|64|0.96|
|128|0.56|
|256|0.37|
|512|0.27|
|1024|0.22|
|2048|0.19|

## The `lseek` System Call

```c
#include <sys types.h="">
#include <unistd.h>
off_t lseek(int fd, off_t dist, int base);
```

- Changes/query the current read/write pointer.
- `base` options:
    - `SEEK_SET`: Beginning of the file.
    - `SEEK_CUR`: Current position.
    - `SEEK_END</unistd.h></sys>`: End of the file.
- Returns the resulting location or `-1` on error.

## Program Correctness - Assertion

- A boolean expression stating a relevant condition.
- Use after loops, inside loops, and when relying on variable ranges.
- Fails indicate a logically impossible state.

## Using `assert`

- Must include `<assert.h>`.

```c
void assert(int expression);
assert(y != 0);
</assert.h>x / y; // Division is unsafe if y is 0.
```

## Example of `assert` Usage

```c
/* assert_ex.c */
#include <stdio.h>
#include <assert.h>
int main() {
    int a, b;
    printf("Input two integers to divide\n");
    scanf("%d%d", &a, &b);
    assert(b != 0); // Ensures divisor is not zero.
    printf("%d/%d = %.2f\n", a, b, a / (float)b);
    return 0;
}
```

## Program Correctness - Traces

- Non-essential statements for debugging, showing values of variables.
- Removed after debugging.
- Use debuggers like `dbx` or `gdb` for further analysis.

## Error Processing - Failed System Call

- Exceptions can result in failed system calls, returning `-1` instead of aborting.

## Error Processing - `errno`

- Each system call has its own set of errors stored in a global variable `errno`.
- Include `<errno.h>` to access error definitions.

## Using `perror` and `strerror`

```c
void perror(const char *s);
char *strerror(int errnum);
```

- Example usage:

```c
if (-1 == read(fd, &buf, nbytes)) 
    perror("failed read"); // Outputs error message.
```

## Error Processing - Summary

- Programmers must decide how to handle failed system calls or library function failures.
- Prefer to propagate errors back to the caller if it has more context about the error.

## Error Propagation

- C does not have an explicit exception mechanism; errors must be propagated through return values.
- Common practice:

```c
int sample() {
    int fd;
    fd = open("file", O_RDONLY);
    if (fd == -1) {
        perror("Cannot open file");
        return -1; // Error propagated to caller
    }
    // other operations...
}
```

This summary provides an overview of Unix commands, system calls related to I/O operations, program correctness principles, and error processing techniques in Unix systems programming.