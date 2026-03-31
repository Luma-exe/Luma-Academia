
> [!faq] About this Lecture 
> Class: 31268
> Subject: #webSystems
> Date: 31/03/2025 
> Topics: #web #html #css

## Key Terminology

- **OS (Operating System)** — Core software installed on device hardware that sits between all programs and the device hardware
- **Kernel** — Core OS program that controls the hardware and provides access to resources for other applications
- **Shell** — Layer on top of the Kernel that enables users to communicate with the Kernel using CLI commands
- **Applications** — Top-most layer consisting of software, services, and utilities
- **CLI** — Commands interpreter enabling users to interact with the Kernel using commands and scripts
- **Filesystem** — Structure used by OS to organise and manage files on a storage device
- **VM (Virtual Memory)** — The logical address space; physically = RAM + Disk
- **Swap File** — Part of the hard disk used for virtual memory
- **Page** — The amount of data that can swap between RAM and Disk at a given time
- **Page Table** — Maps logical addresses to either physical or virtual memory
- **Paging** — The action of swapping a page between RAM and Disk
- **Page Fault** — When data to be accessed is not in RAM and needs to be swapped back from Disk
- **Thrashing** — When the OS spends more time paging than running applications

---

## Operating Systems

An **Operating System** is system software that manages hardware and software resources on a computer, enabling efficient use and providing a platform for running applications.

OS handles:
- Device control
- Filesystem management
- Unix CLI and scripting
- Process management
- Memory management

The OS acts as an **intermediary** between users and computer hardware. The layer hierarchy is:
```
User → Application → Operating System → Hardware
```

### Remote Access via OS

Unix-like OS on server machines enable remote connection via:

- **SSH** — Provides a secure, encrypted connection for remote command-line access and file transfer
```bash
  ssh username@server_ip
```
- **HTTP** — Used to access web content on a server through a browser
```
  http://server_ip
```

---

## Process Management

### Program vs Process

- **Program** — A *passive* set of instructions stored on disk; not executing, not running. Defines what tasks should be performed. Only becomes a process when loaded into memory
- **Process** — An *active* execution instance of a program. Has a unique **Process ID (PID)** and operates in its own address space

> A program is like a blueprint; a process is the actual building created from it.

**Example:**
- `backup_script.sh` sitting on disk → **Program** (doing no work)
- Running `./backup_script.sh` → **Process** (active, has a PID, consuming resources)

The relationship between program and process is **one-to-many** — multiple processes can run from the same program, each with its own execution context.

### OS Responsibilities for Process Management

- Starting / Terminating a process
- Scheduling processes
- Performing IPC (Inter-Process Communication)
- Resource allocation for processes

### Types of Processes

- **System Processes** — Core processes started by the OS at boot (e.g., `init` in Unix)
- **User Processes** — Initiated by users via applications or CLI (e.g., `python script.py`)
- **Daemon Processes (Services)** — Background processes providing services; start automatically at boot and don't interact directly with users (e.g., `httpd` for web servers, `sshd` for SSH)
- **Background Tasks** — Processes running in background for scheduled/repetitive tasks (e.g., backups)
- **Interactive Processes** — Directly initiated and controlled by users with continuous I/O (e.g., `vim`, mouse input)
- **Zombie Processes** — Defunct processes that have completed execution but remain in the process table until the parent process reads their exit status

---

## Process Lifecycle

The process lifecycle refers to the various states a process can be in during its execution. These states help ensure CPU time is utilised efficiently while maintaining system stability.

### States

| State | Description |
|---|---|
| **New** | Process is being created; resources are allocated but not yet ready to execute |
| **Ready** | Has all necessary resources; waiting for CPU time |
| **Running** | Actively executing on the CPU — *one process per core* at any given time |
| **Waiting (Blocked)** | Paused, waiting for an event (e.g., I/O operation or resource availability) |
| **Suspended** | Temporarily halted and moved out of the ready queue; awaiting resumption |
| **Interrupted** | Pre-empted or interrupted; potentially moves back to Ready when it resumes |
| **Terminated** | Process has finished execution and is removed from the system |

### Interrupted vs Suspended State

| Attribute | Interrupted | Suspended |
|---|---|---|
| **Purpose** | Temporary pause to handle an urgent event | Long-term pause when not needed or lacks resources |
| **Duration** | Very brief; resumes almost immediately | Indefinite; resumes only when OS decides |
| **Resources** | Remains loaded in memory | May be moved to disk to free resources |
| **Example** | Keyboard input interrupts process; resumes after input processed | Background task suspended to free memory for active apps |

### Interrupt State Transitions

The **Interrupt** state is not a standalone state — it triggers *transitions* between existing states, primarily affecting **Running**.

Interrupts can be triggered by:
- **Hardware** — pressing a key, network activity
- **Software** — system calls, exceptions

Transition paths from Interrupted:
- **→ Ready** — process is pre-empted, saved by OS, rejoins ready queue
- **→ Terminated** — interrupted due to error or exit condition
- **→ Suspended** — OS needs to free resources or manage priorities

### Suspended State Transitions

- **Waiting (Blocked) → Suspended** — OS moves blocked process to suspended to free resources until required resource is available
- **Ready → Suspended** — OS decides to free resources or prioritise other tasks
- **Suspended → Ready** — Resource becomes available or scheduling priority changes
- **Suspended → Terminated** — Process no longer needed or has completed its tasks

### Scheduling Types

| Type | Also Known As | Role |
|---|---|---|
| **Long-term** | Job Scheduler | Decides which processes are admitted to the system; handles New → Ready transition |
| **Short-term** | CPU Scheduler | Selects from Ready queue to run on CPU; handles Ready → Running |
| **Medium-term** | — | Swaps processes in/out of memory; affects Ready, Running, and Suspended states |

### Scheduling Algorithms

Algorithms determine the order and CPU time given to processes. Choice depends on goals: throughput, fairness, or responsiveness.

- **FCFS (First-Come, First-Served)** — Runs processes in arrival order; simple but may delay short jobs
- **SJF (Shortest Job First)** — Non-preemptive; runs the shortest job to completion; efficient but requires accurate job time estimates
- **SRTF (Shortest Remaining Time First)** — Preemptive version of SJF; always runs the job with the shortest remaining time
- **Round Robin (RR)** — Gives each process a fixed time slice; fair but can cause overhead
- **Priority Scheduling** — Runs based on priority levels; risks starving low-priority jobs

Selection factors considered by OS: system goals, process characteristics, system load, fairness.

---

## Process Concurrency

Process concurrency enables efficient system resource use by running multiple operations simultaneously. Each type uses specific OS mechanisms and hardware to maximise CPU utilisation.

| Type | Overview | Method | Example OS | Example Hardware |
|---|---|---|---|---|
| **Multi-Programming** | Keeps CPU busy by allowing multiple programs in memory | Job scheduling (FCFS or priority-based) | Early UNIX, IBM OS/360 | IBM System/360; modern PCs with sufficient RAM |
| **Multi-Tasking** | Executes multiple tasks by rapidly switching between them, creating illusion of simultaneity | Time-slicing and preemptive scheduling (Round Robin) | Windows 10, macOS | Standard CPU (Intel Core i5, AMD Ryzen) |
| **Multi-Threading** | Concurrent execution within a single program | Lightweight threads managed within a single process; synchronise using locks or semaphores | Linux (POSIX threads), Windows NT | Multi-core CPUs (Intel i7, AMD Ryzen) |
| **Multi-Processing** | True parallelism; multiple processes execute simultaneously on multiple processors | OS uses load balancing and assigns processes across processors | Modern Linux, Windows Server | Systems with multiple processors or multi-core (Intel Xeon, AMD EPYC) |

---

## Inter-Process Communication (IPC)

**IPC** refers to mechanisms allowing processes to communicate and synchronise actions. It is crucial for enabling concurrent execution, data exchange, and resource sharing.

### IPC Methods

| Method | Overview | Mechanism | Example |
|---|---|---|---|
| **File Sharing** | Processes share data via reading/writing to the same files on disk | Access files concurrently | Multiple processes logging to a shared log file |
| **Shared Memory** | Multiple processes access the same memory region | Shared memory segments | Processes accessing a common segment via `shmget` |
| **Signals** | Asynchronous notifications sent to a process to indicate events | Send signals via system calls | `SIGINT` to interrupt a running process |
| **Sockets** | Facilitate communication between processes over a network | Establish TCP or UDP connections | Web server and client exchanging data |
| **Messages** | Processes send and receive messages in a queue | Message queue APIs | Sending messages in a POSIX message queue |
| **Pipes** | Unidirectional data channel between processes | Implement pipes to transfer data | Command pipeline in shell: `cmd1 \| cmd2` |
| **Semaphores** | Control access to shared resources to prevent conflicts | Semaphore operations | Managing access in concurrent programming |
| **Locks** | Ensure exclusive access to shared resources | Mutexes or other locking mechanisms | `pthread_mutex_lock` in multithreaded apps |

### Unix Pipes Example

In Unix/Linux, pipes allow the output of one command to be used as the input of another using `|`.
```bash
ps aux | grep httpd | wc -l
```

- `ps aux` — Lists all running processes with detailed information (Process A)
- `|` — Pipe operator; feeds output of `ps aux` into `grep`
- `grep httpd` — Searches process list for instances of `httpd` (Process B)
- `|` — Second pipe; feeds `grep` output into `wc`
- `wc -l` — Counts lines; gives total number of `httpd` processes running (Process C)

### Two-Way (Bidirectional) IPC

Allows processes to both send and receive messages. Essential for coordinating tasks, sharing data, and synchronising in concurrent applications.

Methods supporting two-way communication:
- **Sockets** — Network communication over TCP/IP
- **Pipes** — Named pipes allow bidirectional read/write
- **Messages** — Asynchronous communication via queues readable by different processes
- **Shared Memory** — Common memory space for reading and writing

**Example: Client-Server Two-Way Sockets IPC (Bash)**

Server script listens on a port using `socat`:
```bash
#!/bin/bash
PORT=9091
echo "Starting server on PORT $PORT"
socat TCP-LISTEN:$PORT,fork - | while read line; do
    echo "Client: $line"
    case "$line" in
        "Hello server")
            echo "Server: Hello from server" ;;
        "How are you server")
            echo "Server: I'm doing well, thank you!" ;;
        "Goodbye server")
            echo "Server: Goodbye!"
            break ;;
        *)
            echo "Server: Unknown message" ;;
    esac
done
```

Client script connects and sends messages:
```bash
#!/bin/bash
HOST="127.0.0.1"
PORT=9091
echo "Connecting with the server on port: $PORT"
{
    echo "Hello server"
    sleep 1
    echo "How are you server"
    sleep 1
    echo "Goodbye server"
} | socat - TCP:$HOST:$PORT | while read line; do
    echo "$line"
done
```

---

## Resource Management

**Resources** are the things processes need to run. Resource management in the OS ensures processes operate smoothly and fairly, optimising system performance.

In Unix-like OS, the **Kernel** manages system resources efficiently, ensuring fair access while maintaining isolation and security.

### Kernel Resource Management Areas

- **CPU Scheduling** — Schedules processes to share CPU time using algorithms (round-robin, priority)
- **Memory Management** — Allocates memory for each process and ensures process isolation
- **File Management** — Manages access to files and directories for safe read/write
- **I/O Management** — Manages access to devices (printers, disks) for I/O operations
- **Networking** — Manages process communication over networks; protocol handling and data transfer

### Resource Contention

**Resource contention** occurs when multiple processes or threads compete to access shared resources, leading to delays and conflicts.

| Contention Type | Description |
|---|---|
| **CPU Contention** | Multiple processes compete for CPU time, slowing task execution |
| **Memory Contention** | Processes vie for memory allocation, causing delays or insufficient memory errors |
| **I/O Contention** | Processes compete for disk or network access, leading to slower read/write |
| **Lock Contention** | Threads/processes wait to acquire a lock, causing delays and potential deadlocks |
| **Network Contention** | Multiple processes seek network bandwidth, reducing transmission speed |
| **Cache Contention** | Processes compete for CPU cache, causing frequent cache misses |

### Deadlocks

A **deadlock** occurs when two or more processes become stuck, each waiting for a resource held by the other, creating a cycle of dependencies. None of the processes can proceed, effectively halting the system.

**Example Scenario:**
- Process 1 holds Resource 1 and needs Resource 2 to proceed
- Process 2 holds Resource 2 and needs Resource 1 to proceed
- Both wait indefinitely → **deadlock**

### Deadlock Management Strategies

**Deadlock Prevention:**

| Strategy | Description |
|---|---|
| **Resource Ordering** | Establish a strict sequence for acquiring locks; all processes request locks in this predetermined order, preventing circular dependencies |
| **Lock Timeout** | Set a maximum wait time; if exceeded, the process releases all held locks and retries |
| **Avoid Mutual Locking** | Design processes to avoid requesting additional locks while holding others |

**Deadlock Detection and Recovery:**

| Strategy | Description |
|---|---|
| **Detection Algorithms** | Monitor system state, identifying cycles in resource allocation graphs that indicate deadlocks |
| **Process Termination** | Forcefully terminate one of the deadlocked processes, releasing its held resources |
| **Rollback** | Revert one or more processes to a previous state, allowing lock release and potentially avoiding deadlock |

---

## Memory Management

**Memory management** controls and optimises how memory is allocated, used, and freed by processes.

### Why Memory Management Matters

Memory management allows the OS to:
- Run more processes than fit into physical memory
- Optimise use of expensive RAM
- Track which processes own which blocks of memory
- Provide access control to memory
- Decide where a process is loaded into memory

### Physical vs Logical Memory

- The **Kernel** can directly access physical memory (RAM) using **physical addressing**
- Physical memory size is fixed (e.g., 32 GB RAM)
- The **Unix OS Kernel hides physical memory from processes** — processes only see **logical memory**
- The OS allocates **pages** (e.g., 4 KB blocks of RAM) to processes
- The OS translates logical addresses to physical addresses — this is called **logical/virtual addressing**

**Logical/Virtual Addressing** — Abstracts memory addresses from actual physical RAM addresses, giving each process its own separate memory space. Enables process isolation and efficient memory management.

### How Logical/Virtual Addressing Works

1. **Logical Address Access** — Program accesses `data[10]`; OS provides this as a logical address, e.g., `0x400010`
2. **Translation to Physical Address** — The **Memory Management Unit (MMU)** translates the logical address to a physical address via the page table (e.g., `0x400010` → `0xABC010` in RAM)
3. **Use of Logical Addressing** — Each program only "sees" its own logical addresses; two programs can both use `0x400010` logically but map to completely different physical locations

**Example:**
- Program A: logical `0x400010` → physical `0xABC010`
- Program B: logical `0x400010` → physical `0xDEF010`

Both programs function independently without interference — neither can access the other's data directly.

### Virtual Memory

**Virtual memory** extends physical RAM by using a portion of the hard disk as additional memory. Enables running larger applications or multiple applications simultaneously even when physical RAM is limited.

Memory hierarchy (fastest → slowest):
```
Registers → L1 Cache → L2 Cache → Main Memory (RAM) → Hard Disk (Swap)
                                                        ↑
                                              Virtual Memory lives here
```

**Example: 4 GB RAM, application needs 6 GB**

1. **Initial Execution** — OS loads as much of the application as possible into the 4 GB RAM
2. **Memory Overflow** — When more memory is needed, OS pages out inactive data to the hard disk's **swap space**
3. **Page Fault** — If paged-out data is needed again, OS triggers a **page fault**, retrieves data from swap space, and loads it back into RAM

### Page Tables

Each process has a page table mapping its logical pages to physical frames (or swap):

**Process A page table example:**

| Page | Frame | Valid |
|---|---|---|
| 0 | 1 | T |
| 1 | — | F |
| 2 | — | F |
| 3 | 3 | T |
| 4 | 0 | T |

**Process B page table example:**

| Page | Frame | Valid |
|---|---|---|
| 0 | — | F |
| 1 | 2 | T |
| 2 | — | F |
| 3 | — | F |
| 4 | — | F |
| 5 | — | F |
| 6 | — | F |

- **Valid = T** → page is currently in RAM
- **Valid = F** → page is in swap space or not yet loaded

Programs can *appear* to have far more memory than is physically available.

### Benefits and Downsides of Virtual Memory

**Benefits:**
- **Extended Memory Capacity** — Run larger applications than physical RAM permits
- **Process Isolation** — Prevents processes from directly accessing each other's memory space
- **Efficient Multitasking** — Manages memory dynamically for multiple applications

**Downsides:**
- **Performance Cost** — Accessing data on hard disk is significantly slower than RAM
- **Disk Wear** — Heavy paging increases wear on hard drives (SSDs have somewhat mitigated this)

### Locality in Virtual Memory

Virtual memory leverages **locality** — patterns in program access where certain memory regions are accessed more frequently than others.

**Temporal Locality** — Recently accessed memory locations are likely to be accessed again soon
- Example: A loop accesses the same memory repeatedly
- Virtual memory keeps frequently used pages in RAM to reduce repeated disk access

**Spatial Locality** — Memory locations near each other are often accessed close in time
- Example: Accessing sequential array elements `arr[0]`, `arr[1]`, `arr[2]`
- Virtual memory loads entire pages with nearby addresses, minimising page faults

**Example — Array Processing:**
1. OS loads a page containing the array's starting elements into RAM (e.g., `array[7]`)
2. Sequential access (`arr[0]`, `arr[1]`, `arr[2]`) — **spatial locality** means the OS doesn't retrieve each element separately from disk
3. If the program iterates the array multiple times — **temporal locality** keeps the page in RAM across iterations, reducing costly disk accesses

**Benefits of locality exploitation:**
- Improves memory access efficiency
- Minimises **thrashing** (excessive paging that severely degrades performance)
- Provides smoother performance and better multitasking even when physical memory is limited

---

## Connections to Other Topics

- **Filesystem** — covered in Lecture 4 (how OS organises storage)
- **Unix CLI** — covered in Lecture 4 (interacting with the kernel)
- **Device Control** — covered in Lectures 3 & 4
- **Inode structure** — relates to how the OS tracks file ownership and permissions (file management)
- **Docker / containerisation** — each container is effectively an isolated process namespace leveraging OS process and memory management

---

## References and Further Reading

- **Online** — Process Management Tutorial: https://www.tutorialspoint.com/unix/unix-processes.htm
- **UTS Library** — Wang, K.C., *Systems Programming in Unix/Linux*, 2018, pp. 101–140 (Process Management in Unix/Linux)
- **UTS Library** — Liu, Yukun; Yue, Yong; Guo, Liwei, *UNIX Operating System*, pp. 81–122 (UNIX Process Management)
- **Wikipedia** — https://en.wikipedia.org/wiki/Operating_system