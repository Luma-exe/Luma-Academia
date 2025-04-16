
> [!faq] About this Lecture
> Class: COMP2019
> Subject: #systemsProgramming1
> Topics: #coding/language/c  
> Date: 2025-04-16 at 11:10

## Video Game Basics

- **Space**: Draw images at specific locations on the screen.
- **Time**: Manage different movement speeds for images.
- **Interruptions**: Make images respond to user actions.
- **Concurrency**: Keep multiple objects moving simultaneously.

## A Simple Game

- Objective: Keep a ball bouncing around on the screen.
- Ball mechanics:
    - Continues moving at a defined speed.
    - Bounces off walls and a paddle.
- User interaction: Use keys to move the paddle vertically.
- Requires knowledge of screen management, time handling, and interruptions.

## The Curses Library

- Screen treated as a grid of character cells identified by (row, column) coordinates.
- Origin point is at the upper left corner.

### Basic Curses Functions

- `initscr()`: Initialize the curses library and terminal.
- `endwin()`: Turn off curses and reset terminal.
- `refresh()`: Update the screen to reflect any changes.
- `move(r, c)`: Move the cursor to screen position (r, c).
- `addstr(s)`: Draw string `s` at the current cursor position.
- `addch(c)`: Draw character `c`.
- `clear()`: Clear the screen.
- `standout()`: Turn on standout mode for text.
- `standend()`: Turn off standout mode.

## Example: hello1.c

```c
#include <stdio.h>
#include <curses.h>

int main() {
    initscr();              // turn on curses
    clear();                // clear screen
    move(10, 20);           // row 10, col 20
    addstr("Hello, world"); // add a string
    move(LINES - 1, 0);     // move to lower left
    refresh();              // update the screen
    getch();                // wait for user input
    endwin();               // turn off curses
    return 0;
}
```

## Virtual & Real Screen

- Two internal screen versions:
    - **Workspace**: Records changes.
    - **Real Screen**: Displays the current output.
- Functions modify the workspace screen; `refresh()` updates the real screen.

## The Sleep Function

- `sleep(n)`: Suspends the current process for `n` seconds.
- Useful for adding delays in animations.

## Example: hello4.c

```c
#include <stdio.h>
#include <unistd.h>   // for sleep()
#include <curses.h>

int main() {
    int i;
    initscr();        // turn on curses
    clear();          // clear the screen

    for (i = 0; i < LINES; i++) {
        move(i, i + i);                // move to (i, 2i)
        if (i % 2 == 1) standout();    // highlight odd rows
        addstr("Hello, world");       // print message
        if (i % 2 == 1) standend();    // end highlight
        refresh();                    // update the screen
        sleep(1);                     // pause for 1 second

        move(i, i + i);               // move back
        addstr("             ");      // erase line (same length as "Hello, world")
    }

    endwin();         // turn off curses mode
    return 0;
}
```

## The Alarm Function

- Used to set a timer which generates the `SIGALRM` signal.
- Three steps:
    1. Use `signal()` to install a handler for `SIGALRM`.
    2. Call `alarm(num_seconds)` to set the timer.
    3. Use `pause()` to halt execution until the alarm triggers.

## Example: sleep1.c

```c
#include <stdio.h>
#include <signal.h>   // for signal() and SIGALRM
#include <unistd.h>   // for alarm() and pause()

void wakeup(int signum) {
    printf("Alarm received from kernel\n");
}

int main() {
    printf("About to sleep for 4 seconds\n");

    signal(SIGALRM, wakeup);   // Catch alarm signal
    alarm(4);                  // Set an alarm for 4 seconds
    pause();                   // Wait here until a signal is caught

    printf("Morning so soon?\n"); // Back to work

    return 0;
}
```

## Interval Timers

- Each process has three timers:
    - **ITIMER_REAL**: Real time.
    - **ITIMER_VIRTUAL**: Time spent in user mode.
    - **ITIMER_PROF**: Time spent in both user and kernel modes.
- Use `usleep(n)` for more precise delays in microseconds.

## Managing Interruptions

- Handling interruptions is crucial in OS and applications.
- Unix utilizes signals to manage interruptions.

## Handling Multiple Signals

- Signals can arrive simultaneously, e.g., `SIGINT` (Ctrl-C) or `SIGQUIT` (Ctrl-).
- Considerations:
    - Disable or manage signal handlers after use.
    - Handle nested signal cases safely.

## Example: sigdemo3.c

```c
#include <stdio.h>
#include <signal.h>
#include <string.h>   // for strncmp
#include <unistd.h>   // for read() and sleep()

#define INPUTLEN 100

void inthandler(int);
void quithandler(int);

int main(int ac, char *av[]) {
    char input[INPUTLEN];
    int nchars;

    signal(SIGINT, inthandler);    // Ctrl-C
    signal(SIGQUIT, quithandler);  // Ctrl-\

    do {
        printf("\nType a message: ");
        fflush(stdout);  // ensure prompt shows immediately

        nchars = read(0, input, INPUTLEN - 1);  // read from stdin
        if (nchars == -1)
            perror("read returned an error");
        else {
            input[nchars] = '\0';  // null-terminate the string
            printf("You typed: %s", input);
        }
    } while (strncmp(input, "quit", 4) != 0);

    return 0;
}

void inthandler(int s) {
    printf("\nReceived signal %d .. waiting\n", s);
    sleep(2);
    printf("Leaving inthandler\n");
}

void quithandler(int s) {
    printf("\nReceived signal %d .. waiting\n", s);
    sleep(3);
    printf("Leaving quithandler\n");
}
```

## Signal Handling

- The kernel passes the signal number to the handler.
- Handlers can manage multiple signals, provided they know the cause.

## POSIX Function `sigaction`

- `sigaction()` is more comprehensive for handling signals.

```c
int sigaction(int signum, const struct sigaction *action, const struct sigaction *prevaction);
```

### Structure `sigaction`

```c
struct sigaction {
    void (*sa_handler)(int); /* Signal handler */
    void (*sa_sigaction)(int, siginfo_t *, void *); /* New handler */
    sigset_t sa_mask; /* Signals to block during handling */
    int sa_flags; /* Enable various behaviors */
};
```

## Data Protection

- **Critical Section**: Code section modifying a shared data structure.
- Protect critical sections from interruptions:
    - Determine critical sections.
    - Block signals that may affect them.

## Blocking Signals

- Use `sigaction` to set `sa_mask` for the handler.
- Process level: Modify the signal mask with `sigprocmask`.

## Example: sigactdemo.c

```c
#include <stdio.h>
#include <signal.h>
#include <unistd.h>

#define INPUTLEN 100

// Declare the handler function before main
void inthandler(int);

int main() {
    struct sigaction newhandler;
    sigset_t blocked;
    char x[INPUTLEN];

    newhandler.sa_handler = inthandler;
    newhandler.sa_flags = SA_RESETHAND | SA_RESTART;

    sigemptyset(&blocked);
    sigaddset(&blocked, SIGQUIT);      // block SIGQUIT while handling SIGINT
    newhandler.sa_mask = blocked;

    if (sigaction(SIGINT, &newhandler, NULL) == -1)
        perror("sigaction");
    else
        while (1) {
            fgets(x, INPUTLEN, stdin);
            printf("input: %s", x);
        }

    return 0;
}

void inthandler(int s) {
    printf("Called with signal %d\n", s);
    sleep(s);
    printf("Done handling signal %d\n", s);
}
```

## Kill System Call

- Use `kill` to send a signal to another process.
- Both processes must share the same user ID.

## User Defined Signals

- Signals `SIGUSR1` and `SIGUSR2` are available for custom use in IPC.

## Summary of Signals

- Processes can be interrupted by signals from various sources.
- Signals can arrive at any time and in any order.
- Use `signal` for basic handling and `sigaction` for comprehensive management.
- `kill` allows sending signals to other processes.
- Signals can be blocked to prevent interruptions.

## Signal Numbers

- Defined in `/usr/include/signal.h`:

```c
#define SIGHUP 1    /* Hangup */
#define SIGINT 2    /* Interrupt */
#define SIGQUIT 3   /* Quit */
#define SIGILL 4    /* Illegal instruction */
#define SIGABRT 6   /* Abort */
#define SIGFPE 8    /* Floating point exception */
#define SIGKILL 9   /* Kill (cannot be caught or ignored) */
#define SIGBUS 10   /* Bus error */
#define SIGSEGV 11  /* Segmentation violation */
#define SIGSYS 12   /* Bad argument to system call */
#define SIGPIPE 13  /* Write to a pipe with no reader */
#define SIGALRM 14  /* Alarm clock timeout */
#define SIGTERM 15  /* Software termination signal */
#define SIGUSR1 30  /* User-defined signal 1 */
```

This structured summary provides an easy reference for understanding event-driven programming concepts discussed in Lecture 7.