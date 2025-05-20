
> [!faq] About this Lecture
> Class: COMP2019
> Subject: #systemsProgramming1
> Topics: #coding 
> Date: 2025-04-09 at 14:09

## Device Overview

- Unix systems have various data sources and destinations, including devices.
- Example devices:
    - Modems
    - Printers
    - Scanners
    - Mice
    - Speakers
    - Terminals (keyboard and display)
- Devices are represented as special files in Unix.

## Properties of Device Files

- Every device file has:
    - File name
    - Inode number
    - Owner
    - Permission bits
    - Last modified time
- Found in the `/dev` directory.

## Devices and System Calls

- Device files support file-related system calls:
    - `open`, `read`, `write`, `lseek`, `close`, `stat`
- Example code to read from a magnetic tape:

```c
int fd;
fd = open("/dev/tape", O_RDONLY); /* connect to tape drive */
lseek(fd, (long)4096, SEEK_SET); /* fast forward 4096 bytes */
n = read(fd, buf, buflen); /* read data from the tape */
close(fd); /* disconnect */
```

- Not all devices support all file operations (e.g. writing to a mouse).

## Type of File

- Directories store file names and inode numbers but don’t specify file types.
- The file type is confirmed at the inode level.
- Each inode connects to a `struct stat`, with the type stored in the `st_mode` member.

## Terminal Connection

- The `open` system call establishes a connection to files/devices.
- Disk file connections use kernel buffering, while terminal connections require quick data delivery.
- Echoing is a crucial terminal connection attribute.

## Connection Attributes of Devices

- Attributes can affect behavior and performance.
- Current attributes can be examined and changed.

## Attributes of Disk Connection

- **Buffering attribute:** `O_SYNC` (wait until bytes are written to hardware).
- **Auto-append mode:** `O_APPEND` (automatically appends data at the end).
- Attributes are stored as bits in integers, manipulated using `fcntl`.

### Setting Auto Append

```c
#include <fcntl.h>
```

int s; s = fcntl(fd, F_GETFL); // Get flags s |= O_APPEND; // Set O_APPEND bit result = fcntl(fd, F_SETFL, s); // Set flags if (result == -1) // If error perror("setting APPEND"); // Report error else write(fd, &rec, 1); // Write record at end ```

## Attributes of Terminal Connections

- The terminal driver handles data between processes and terminals.
- Attributes and settings include:
    - Input mode flags
    - Output mode flags
    - Control mode flags
    - Local mode flags
    - Control characters array (`struct termios`)

### Struct termios

```c
struct termios {
    tcflag_t c_iflag; /* input mode flag */
    tcflag_t c_oflag; /* output mode flag */
    tcflag_t c_cflag; /* control mode flag */
    tcflag_t c_lflag; /* local mode flag */
    cc_t c_cc[NCCS];  /* control characters */
    speed_t c_ispeed; /* input speed */
    speed_t c_ospeed; /* output speed */
}
```

## Bit Operation

- **Test a bit:**
    
    ```c
    if (flagset &amp; MASK)
    ```
    
- **Set a bit:**
    
    ```c
    flagset |= MASK
    ```
    
- **Clear a bit:**
    
    ```c
    flagset &amp;= ~MASK
    ```
    

## Example: Echo State

```c
#include <stdio.h>
#include <stdlib.h>     // for exit()
#include <termios.h>
#include <unistd.h>     // for STDIN_FILENO

int main() {
    struct termios info;
    int rv;

    rv = tcgetattr(STDIN_FILENO, &info);  // Get values from driver

    if (rv == -1) {
        perror("tcgetattr");
        exit(1);
    }

    if (info.c_lflag & ECHO)
        printf("echo is ON, since its bit is 1\n");
    else
        printf("echo is OFF, since its bit is 0\n");

    return 0;
}
```

## Example: Set Echo

```c
#include <stdio.h>
#include <stdlib.h>     // for exit()
#include <termios.h>    // for terminal I/O settings
#include <unistd.h>     // for STDIN_FILENO

#define oops(s, x) { perror(s); exit(x); }

int main(int ac, char *av[]) {
    struct termios info;

    if (ac == 1)
        exit(0);

    if (tcgetattr(STDIN_FILENO, &info) == -1)
        oops("tcgetattr", 1);

    if (av[1][0] == 'y')
        info.c_lflag |= ECHO;    // Turn on echo
    else
        info.c_lflag &= ~ECHO;   // Turn off echo

    if (tcsetattr(STDIN_FILENO, TCSANOW, &info) == -1)
        oops("tcsetattr", 2);

    return 0;
}
```

## Other Devices: ioctl

- `ioctl` provides access to device attributes and operations.
- Every device file supports the `ioctl` system call, defined in `<sys/ioctl.h>`.

## Software Tools

- Tools read from standard input (fd:0), process data, and write to standard output (fd:1) or standard error (fd:2).
- Examples: `who`, `ls`, `sort`.
- Device-specific programs are written to interact with certain devices.

## User Programs

- Terminal-oriented programs are commonly device-specific.
- Examples: `vi`, `emacs`, `pine`, `nano`.
- Concerns include:
    - Immediate response to keys
    - Limited input set
    - Timeout on input
    - Resistance to Ctrl-C

## Canonical Mode

- Also known as cooked mode; buffering and editing are enabled.
- Noncanonical mode has no buffering, suitable for certain applications.

## Buffering & Editing Example

```c
#include <stdio.h>
#include</stdio.h> <ctype.h>
```

int main() { int c; while ((c = getchar()) != EOF) { if (c == 'z') c = 'a'; else if (islower(c)) c++; putchar(c); } } ```

## Writing a User Program Example

```c
#include <stdio.h>
#include <termios.h>  // Correct include for terminal control

#define QUESTION "Do you want another transaction?"

int get_response(char *question);

int main() {
    int response;

    response = get_response(QUESTION);  // Get answer

    return response;
}

int get_response(char *question) {
    printf("%s (y/n)? ", question);

    while (1) {
        switch (getchar()) {
            case 'y':
            case 'Y':
                return 0;
            case 'n':
            case 'N':
            case EOF:
                return 1;
        }
    }
}
```

## Blocking & Nonblocking Input

- User programs benefit from a timeout feature.
- Nonblocking mode can be enabled/disabled using `fcntl`.
- Flag: `O_NDELAY`.

## Signals

- Ctrl-C interrupts the currently running program by sending a signal.
- Signals are single-word messages, each identified by a numerical code.

## Signal Sources

- Sources include:
    - Users
    - Kernel
    - Processes

## Types of Signals

- **Synchronous signals:** Caused by a process’s actions (e.g., dividing by zero).
- **Asynchronous signals:** Caused by external events (e.g., pressing the interrupt key).

## Response to Signals

- A process can:
    - Accept the default action (usually terminating).
    - Ignore the signal.
    - Call a function (signal handler).

## Signal Handling

- Install a signal handler:

```c
signal(signum, action);
```

- `action` can be:
    - Name of a function
    - `SIG_IGN` to ignore
    - `SIG_DFL` for default action

## Example of Signal Handling

```c
#include <stdio.h>
#include <signal.h>
#include <unistd.h>  // for sleep()

// Signal handler function
void f(int signum) {
    printf("SIGINT received from signal handler.\n");
}

int main() {
    int i;

    // Install the signal handler
    signal(SIGINT, f);

    for (i = 0; i < 10; i++) {
        printf("Hello from main program.\n");
        sleep(1);
    }

    return 0;
}
```

## Signal Handling Exercise

- Replace `f` in `signal(SIGINT, f)` with `SIG_IGN` or `SIG_DFL` to see how the program behaves.

