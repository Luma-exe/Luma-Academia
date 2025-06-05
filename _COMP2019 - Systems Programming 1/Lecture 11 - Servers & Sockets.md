
> [!faq] About this Lecture
> Class: COMP2019
> Subject: #systemsProgramming1
> Topics: #coding/language/c 
> Date: 2025-05-29 at 16:01

## Client/Server Concept

- Client/server programming involves inter-process data flow.
- Unix pipes carry data from one process to another.
- Communication can be one-way or bi-directional.
- Processes and pipes can simulate an assembly line, mirror the production in a service industry.

## Unix Calculator (bc and dc)

- **bc**: A user interface that interacts with the calculator service dc.
    - Called a client of dc.
- **dc**: A stack-based calculator using Reverse Polish Notation (RPN).
    - Values followed by the operator (e.g., `2 2 +`).

## Client-Server Model with bc and dc

- bc/dc demonstrates the client/server model:
    - Completely separate programs.
    - Two-way communication.
    - Requires both stdin and stdout communication.
    - Two pipes:
        - One for commands from `bc` to `dc`.
        - One for responses from `dc` back to `bc`.

## Co-routines

- A single process running on dc can be reused.
- Commands are sent to dc in response to user input continuously.

## Coding bc

- **Parent Process**:
    - Reads and parses user input.
    - Creates two pipes.
    - Spawns a process to run dc.
    - Writes commands to `pipe1` (to dc).
    - Reads responses from `pipe2` (from dc).
- **Child Process**:
    - Redirects stdin to pipe1 and stdout to pipe2.
    - Executes dc.

```c
// tinybc.c
#include <stdio.h>
#define oops(m,x) { perror(m); exit(x); }   


main() {  
int pid, todc[2], fromdc[2]; /* make two pipes */ if ( pipe(todc) == -1 || pipe(fromdc) == -1 ) oops("pipe failed", 1);


/* get a process for user interface */
if ( (pid = fork()) == -1 ) 
    oops("cannot fork", 2);

if ( pid == 0 ) 
    be_dc(todc, fromdc);
else { 
    be_bc(todc, fromdc); /* parent is ui */ 
    wait(NULL); 
} 
```

} ```

## Functions in tinybc.c

### be_dc

Sets up stdin and stdout for the dc process.

```c
be_dc(int in[2], int out[2]) { 
    if ( dup2(in[0],0) == -1 ) 
        oops("dc: cannot redirect stdin",3);
    
    close(in[0]); /* moved to fd 0 */ 
    close(in[1]); /* won't write here */
    
    if ( dup2(out[1], 1) == -1 ) 
        oops("dc: cannot redirect stdout",4);
    
    close(out[1]); /* moved to fd 1 */ 
    close(out[0]); /* won't read from here */
    
    execlp("dc", "dc", "-", NULL ); 
    oops("Cannot run dc", 5); 
}
```

### be_bc

Handles user interactions and sends commands to dc.

```c
be_bc(int todc[2], int fromdc[2]) { 
    int num1, num2; 
    char operation[BUFSIZ], message[BUFSIZ]; 
    FILE *fpout, *fpin; 
    
    /* setup */
    close(todc[0]); 
    close(fromdc[1]); 
    
    fpout = fdopen(todc[1, 1) == -1 )
    /* dupe write end to 1 */
    oops("dc: cannot redirect stdout",4);
  close(out[1]);
  /* moved to fd 1 */
  close(out[0]);
  /* won't read from here */
  /* now execl dc with the - option */
  execlp("dc", "dc", "-", NULL );
  oops("Cannot run dc", 5);
}
```

## tinybc.c-continued

```c
be_bc(int todc[2], int fromdc[2])
/* * read from stdin and convert into to RPN, send down pipe * then read from other pipe and print to user * Uses fdopen() to convert a file descriptor to a stream */
{
  int num1, num2;
  char operation[BUFSIZ], message[BUFSIZ], *fgets();
  FILE *fpout, *fpin, *fdopen();
  /* setup */
  close(todc[0]);
  /* won't read from pipe to dc */
  close(fromdc[1]);
  /* won't write to pipe from dc*/
  fpout = fdopen( todc[1], "w" );/* convert file desc-*/
  fpin = fdopen( fromdc[0], "r" );/* riptors to streams */
  if ( fpout == NULL || fpin == NULL )
    fatal("Error converting pipes to streams");
}
```

## tinybc.c-continured

```c
/* main loop */
while ( printf("tinybc: "), fgets(message,BUFSIZ,stdin) != NULL ){
  /* parse input */
  if ( sscanf(message,"%d%[-+*/^]%d",&amp;num1,operation,&amp;num2)!=3){
    printf("syntax error\n");
    continue;
  }
  if ( fprintf( fpout , "%d\n%d\n%c\np\n", num1, num2, *operation ) == EOF )
    fatal("Error writing");
  fflush( fpout );
  if ( fgets( message, BUFSIZ, fpin ) == NULL )
    break;
  printf("%d %c %d = %s", num1, *operation , num2, message);
}
fclose(fpout);
/* close pipe */
fclose(fpin);
/* dc will see EOF */
}
fatal( char *mess ) {
  fprintf(stderr, "Error: %s\n", mess);
  exit(1);
}
```

## fopen

- Open something with a file name
- Open device file as well as regular disk file
- Return `FILE *`
- Examples
    - `fp=fopen("file1", "r");`
    - `c=getc(fp); /*read char by char*/`
    - `fgets(buf, len, fp); /*line by line*/`
    - `fclose(fp);`

## fdopen

- Open with a file descriptor
- Used when there is a file descriptor but no name
- e.g. pipe
- Convert the connection into a `FILE *`
- So we can use standard buffered I/O operations
- Make file descriptors look like files
- Make a remote process feel like a file
    - `fpout = fdopen(todc[1], "w");`
    - `fpin = fdopen(fromdc[0], "r");`

## popen

```c
FILE *fp;
fp=popen("ls","r");
```

- First argument is the name of the command, second argument can be `"r"` or `"w"`
- Can be any shell command
- Opens a buffered connection to a process
- Make processes look like files
- Works like `fopen`

## A popen Example

```c
/* popendemo.c */
main() {
  FILE *fp;
  char buf[100];
  int i = 0;
  fp = popen( "who|sort", "r" );
  /* open the command */
  while ( fgets( buf, 100, fp ) != NULL )
    /* read, print */
    printf("%3d %s", i++, buf );
    /* from command */
  pclose( fp );
  /* IMPORTANT!*/
}
```

## Sockets

- Pipes have significant limitations:
    - Can only connect to related processes
    - Can only connect processes on the same machine
- Sockets allow processes to create connection to:
    - Unrelated processes
    - Processes on different machines

## socket Connecting to a remote process

## A Time Service

Many cities have a time service: You dial a number, the machine that picks up your call tells you the time of that city.

## A Time Service

To set up such a service, we need:

1. Get a phone line
2. Get a phone number for that line
3. Arrange for incoming calls

To operate such a service, we need: 4. Wait for a call 5. Provide the service 6. Hang up

## Using the Service

To use the service, we need:

1. Get a phone line
2. Connect to the service number
3. Use the service
4. Hang up

## A time service

## Server & Client

- Server
    - The program that provides a service
    - Waits for a request, processes the request, then loops back to take the next request.
- Client
    - Makes a request, exchanges some data with the server, then continues
    - Does not need to loop.

## Hostname & Port

- A server is a process running on some computer
- The computer is called the host
- The name is called hostname
- The server has a port number on that host
- The combination of hostname and port identifies a server

## Address family & Protocal

- Address family
    - The time service has a telephone number
    - It may also have a street address and postcode, or has a longitude and latitude.
    - Each of these addresses belongs to an address family
- Protocol
    - The rules of interaction between the client & the server.

## A Time Server

The telephone based time server involves six steps. Each step corresponds to a system call.

1. Get a phone line `socket`
2. Assign a number `bind`
3. Allow incoming calls `listen`
4. Wait for a call `accept`
5. Transfer data `read/write`
6. Hang up `close`

## socket()

Creates a socket

```
sockid=socket(int domain, int type, int protocol)
```

- `domain`: communication domain, `PF_INET` is for internet socket
- `type`: type of socket, `SOCK_STREAM`
- `protocol`: protocol used, `0` is default
- `sockid`: returns an ID or `-1` on error

## bind()

Bind address to a socket

```
result=bind(int sockid, struct sockaddr *addrp, socklen_t addrlen)
```

- `sockid`: the id of the socket
- `addrp`: a pointer to a struct containing the address
- `addrlen`: the length of the struct
- `result`: `0` on success or `-1` on error

## listen()

Listen for connection on a socket

```
result=listen(int sockid, int qsize)
```

- `sockid`: socket that will accept calls
- `qsize`: the size of the queue for incoming calls
- `Result`: `0` on success or `-1` on error

## accept()

Accept a connection on a socket

```
fd=accept(int sockid, struct sockaddr *callerid, socklen_t *addrlenp)
```

- `sockid`: accept a call on this socket
- `callerid`: pointer to struct for address of caller
- `addrlenp`: pointer to storage for length of address of caller
- `fd`: returns an ID for the connection or `-1` if error

## A Time Client

The telephone based client uses four steps, each corresponding to a system call

1. Get a phone line `socket`
2. Call the server `connect`
3. Transfer data `read/write`
4. Hang up `close`

## connect()

Purpose: connect to a socket of a server address

```
result=connect(int sockid, struct sockaddr *serv_addrp, socklen_t *addrlen)
```

- `sockid`: socket to use for connection.
- `serv_addrp`: pointer to struct containing server address.
- `addrlen`: length of that struct.
- `Result`: `0` if success or `-1` if error

## Processes on Different Computers

## Test Run

Running `timeserv` and `timeclnt` in two windows: From window 1: `timeserv` From window 2: `timeclnt staff/student 13000`

## Data Source

- Four types of data sources
    - Disk files
    - Device files
    - Pipes
    - Sockets
- The idea of reading data from a process is similar to reading data from a disk file or a device file

## Data Sources

Data sources: disk files, devices, pipes and sockets