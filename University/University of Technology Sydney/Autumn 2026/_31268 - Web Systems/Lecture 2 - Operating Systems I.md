
> [!faq] About this Lecture 
> Class: 31268
> Subject: #webSystems
> Date: 12/03/2025 
> Topics: #web #html #css

## World Wide Web (WWW) Fundamentals

### Key Terminology

- **WWW (World Wide Web)** – an information system enabling content sharing over the Internet
- **Server** – central computer that provides information to multiple client computers
- **Client** – computer operated by a user that connects with a server to acquire information
- **Network** – group of interconnected computers exchanging information
- **Internet** – communication system connecting computers around the world
- **Protocol** – set of rules outlining how computers connect and communicate
- **HTTP (Hypertext Transfer Protocol)** – allows devices to exchange information and media over the Internet
- **Browser** – software application that retrieves and displays content to users
- **Website** – set of web pages identified by a unique domain name, running on a web server
- **Domain name** – unique name that identifies a website and locates it on a server

### How the Web Works

- Multiple connected networks (and sub-networks) of computers and devices
- Computers communicate with servers using protocols like HTTP
- Clients request and retrieve websites from servers
- Browsers display website content
- Servers are large central computers running the websites
- Servers run operating systems that host the websites
- Servers accept, process, and respond to client requests

### Content Shared via WWW

- Documents, Music, Video, Databases, Images
- Websites, Files, Emails, Software

---

## Servers

### What is a Server?

A server is a central computer connecting multiple devices, built from **hardware** and running **software**

#### Hardware Components

- **Core Devices:** CPU, RAM, Motherboard, Hard drives, Power supply
- **Peripheral Devices:** Printers, Keyboards, Projectors, IP Cameras

#### Software Components

- **Operating Systems:** Windows, Linux/Unix, macOS
- **Types of Servers:** Web servers, Application servers, Database servers, Email servers

### Server Architecture (Layered)

```
Websites (web pages, files, media)
        ↑
HTTP Server / Web Server (Apache, Node.js, Nginx, MS IIS, Lighttpd...)
        ↑
Server OS (Windows, Linux, macOS)
        ↑
Server Hardware (motherboard, CPU, RAM, Storage, power supply)
```

### Client-Server Request-Response Cycle

1. Client types URL in web browser (e.g. `http://index.html`)
2. Browser uses the URL to build an HTTP request
3. Server accepts and reads the request
4. Server returns a response (the requested website)
5. Browser reads and displays the response

> **Reference:** [https://en.wikipedia.org/wiki/Request-response](https://en.wikipedia.org/wiki/Request-response)

### How Web Servers Respond (3 Methods)

- **Static** – selecting from existing static files (HTML, CSS, JS, Images, PDF, Video…)
- **Dynamic** – generating files using programs like PHP, Spring Boot, etc.
- **CMS-based** – generating files via Content Management Systems like Joomla, Drupal, WordPress

---

## Operating Systems

### Definition

> An **OS** is software installed on device hardware that manages computer hardware and software resources

### Key Roles of an OS

- Sits **between hardware and all other programs** – enabling software interaction with the device
- Provides an **interface** for users to interact with hardware
- Manages basic tasks: files, processes, memory, input/output, peripheral devices

### Common Operating Systems

- Windows
- Linux / Unix ← **focus of this subject**
- macOS
- Many others (embedded, specialised)

### OS by System Type

|System Type|Description|Common OS|
|---|---|---|
|**Large Systems**|Mainframes (1 trillion web transactions/day), Supercomputers (101810^{18} 1018 FLOPS)|Linux|
|**Minicomputer Systems**|Smaller than mainframes, handles simultaneous users|Unix/Linux, OpenVMS, IBM OS/400, RSX-15|
|**Personal Computers**|Laptops and desktops for home/office use|Linux, Windows, macOS|
|**Embedded Systems**|Drones, Satellites, ATMs, military/telecom devices|Linux, QNX, VxWorks, FreeRTOS|

### OS Architecture – The "Onion" Model

```
┌─────────────────────────────┐
│        Applications         │  ← outermost layer
├─────────────────────────────┤
│           Shell             │
├─────────────────────────────┤
│           Kernel            │
├─────────────────────────────┤
│          Hardware           │  ← innermost layer
└─────────────────────────────┘
```

---

## OS Layers – Detail

### Hardware Layer

- **CPU** – central processing unit
- **Memory** – RAM (DRAM, SRAM)
- **Storage** – Hard drives (SATA, NVMe), SSD, DVD, USB
- **I/O Devices** – mouse, keyboard, monitor, printer, webcam, microphone, speakers

### Kernel Layer

The **core OS program** – first loaded after the bootloader on startup

- Controls hardware **directly** through drivers and firmware
- Responsible for: disk management, task scheduling, memory management, resource access
- Loaded into an **isolated memory area** – protected from other applications
- Provides resources to other applications: CPU, Memory, I/O, storage, etc.

### Shell Layer

Sits on top of Kernel – the **communication bridge between user and Kernel**

- Shell is a **Command Line Interpreter (CLI)**
- Allows users to interact with the Kernel using CLI commands
- Used for: file management, data processing, permissions, etc.
- Shell types: **C Shell, KornShell, Bourne Shell, GNU Bourne-Again Shell (bash)**, etc.

### Applications Layer

The **topmost layer** – software applications, utilities, and services

- Includes software bundled with OS installation AND software installed by users
- Communicates with hardware **through the Kernel**
- Interacts with users **through the Shell**
- Provides **GUI (Graphical User Interface)** software for user-friendly Shell interaction

---

## GUI vs CLI

### Brief History

|Interface|Milestone|Year|
|---|---|---|
|CLI|`sh` (predecessor to bash)|1969|
|CLI|CPM (predecessor to MS-DOS)|1973|
|CLI|MS-DOS|1981|
|GUI|Apple macOS|1983|
|GUI|Unix – Gnome, KDE|1984|
|CLI|**bash** (Bourne Again Shell)|1988|
|GUI|Windows Shell|1995|
|GUI|Mac OS X, Windows XP|2001|
|GUI|Windows 7|2007|
|GUI|Windows 10|2015|
|GUI|Windows 11|2021|

### How They Differ

Both CLI and GUI access hardware through the **Kernel** and interact with users through the **Shell**. The difference is _how_ that interaction is achieved.

#### CLI (Command Line Interface)

- Provides **Shell commands** typed by the user to interact with the Kernel
- Example workflow:

bash

````bash
user@home$ mkdir ws        # create directory
user@home$ cd ws           # enter directory
user@home/ws$ touch file.txt   # create a file
```

#### GUI (Graphical User Interface)
- Provides **WIMP components** for interaction:
  - **W**indows – interact using the monitor
  - **I**cons – interact by clicking/selecting
  - **M**enu – interact by selecting menu items
  - **P**ointer – interact using the mouse

### Strengths & Weaknesses

#### CLI
| Strengths | Weaknesses |
|---|---|
| Very flexible through commands | Complex, hard to learn |
| Allows parameterised commands | Multiple options for a single task |
| Faster, less overhead, runs multiple tasks | Outputs often cryptic |
| Runs on simple hardware | Inconsistent across OS versions |
| Can run remotely | No graphics |
| Robust, difficult to crash | No safety net – expert mode |

#### GUI
| Strengths | Weaknesses |
|---|---|
| Little experience required | Can't do all tasks; slow for repetitive work |
| Friendly graphical interface | Prone to crashes |
| Easy to use | User unaware of OS operations |
| Hides background complexity | Slows device down |
| Provides safety net | Requires capable hardware |

---

## CLI Scripting

### How CLI Works
- User types commands into a terminal (keyboard input)
- Commands execute **sequentially** (one by one, top to bottom)
- OS returns **text results** displayed on the monitor (standard output)

| Platform | CLI Tool |
|---|---|
| Windows | CMD, PowerShell |
| Unix/Linux/macOS | Bash Shell |

### Why CLI Scripting is Powerful
- **Enables automation** – multiple commands grouped into a batch file (script)
- The script itself is treated as a command by CLI
- Scripts are **reusable** and can be **executed remotely**

### Creating and Running a Script (3 Steps)
```
Step 1: Open/Create a file with a text editor
        → Use VIM or Nano

Step 2: Change file permissions to executable
        → chmod u+x file.sh

Step 3: Execute the file
        → ./file.sh
````

> **Convention:** Scripts use `.sh` extension and must begin with `#!/bin/bash`

### Example – Individual Commands vs Script

**Running commands one by one:**

bash

```bash
user@home$ mkdir ws
user@home$ cd ws
user@home$ pwd
/home/user/ws
user@home/ws$ touch file{1..3}
user@home/ws$ ls
file1  file2  file3
user@home/ws$ echo "Welcome `whoami`"
Welcome user
```

**Equivalent script (`script.sh`):**

bash

```bash
#!/bin/bash
mkdir ws
cd ws
pwd
touch file{1..3}
ls
echo "Welcome `whoami`"
```

### Scripting Languages Overview

|Language|Type|Use Cases|
|---|---|---|
|**BASH**|Default Linux scripting|Automating tasks on servers and workstations|
|**PowerShell**|Default Windows scripting|System management automation|
|**Batch**|Default Windows scripting|Routine automation, managing processes|
|**Python**|High-level scripting|Building websites, task automation, data analysis|
|**Perl**|High-level scripting|Data processing, integrating systems and interfaces|
|**R**|Statistical scripting|Statistical analysis, data analysis, graphing|

> All scripting languages include programming features: **logic, arithmetic, variables, input/output**

### Key Characteristics of Scripting Languages

- **Untyped variables** – no type declaration needed; type is inferred at runtime

python

````python
name = "Lucy"   # interpreted as string
name = 4        # now interpreted as integer
```
- **Interpreted code** – commands execute top to bottom; order matters
- **Simple and short** – typically written by a single user for a specific task
  - *Example: a script to upload website files to a server*

---

## Basic Unix Commands

### General Syntax
```
command [option(s)] [argument(s)]
````

### Directory Commands

|Command|Purpose|Syntax|Example|
|---|---|---|---|
|`mkdir`|Create directory|`mkdir [directory]`|`mkdir ws`|
|`cd`|Change directory|`cd [path/directory]`|`cd ws`|
|`pwd`|Show current directory|`pwd`|`pwd`|
|`rmdir`|Delete empty directory|`rmdir [directory]`|`rmdir sub`|

### File Commands

|Command|Purpose|Syntax|Example|
|---|---|---|---|
|`touch`|Create file(s)|`touch [filename(s)]`|`touch file.txt`|
|`ls`|List directory contents|`ls [path/directory]`|`ls` or `ls -l`|
|`cp`|Copy file|`cp [file] [destination]`|`cp file1 sub`|
|`mv`|Move or rename file|`mv [file] [destination]`|`mv file2 sub`|
|`rm`|Delete file|`rm [filename]`|`rm file4.txt`|
|`rm -r`|Delete directory recursively|`rm -r [directory]`|`rm -r sub`|

### Output & User Commands

|Command|Purpose|Syntax|Example|
|---|---|---|---|
|`echo`|Print string to output|`echo "string"`|`echo "Welcome to WS"`|
|`whoami`|Show current logged-in user|`whoami`|`whoami`|

### Help Command

bash

```bash
man [command]      # Display manual pages for a command
man pwd            # Example: manual for pwd
```

**Navigating `man` output:**

- `/text` – search for text
- `b` / `f` – scroll backward / forward
- `p` – jump to next page
- `q` – exit

### Practical Command Workflow Example

bash

```bash
user@home$ mkdir ws          # create directory 'ws'
user@home$ cd ws             # enter directory
user@home/ws$ pwd            # confirm location → /home/user/ws
user@home/ws$ mkdir sub      # create subdirectory
user@home/ws$ cd sub         # enter subdirectory
user@home/ws/sub$ pwd        # confirm → /home/ws/sub
user@home/ws/sub$ cd ..      # go back up one level
user@home/ws$ rmdir sub      # delete empty subdirectory

user@home/ws$ touch file1 file2         # create 2 files
user@home/ws$ touch file{3..6}.txt      # create files 3–6 with .txt extension
user@home/ws$ ls                         # list all files
user@home/ws$ ls -l                      # list with detailed info (permissions, size, date)

user@home/ws$ cp file1 sub              # copy file1 into sub/
user@home/ws$ mv file2 sub              # move file2 into sub/
user@home/ws$ rm file4.txt              # delete a file
user@home/ws$ rm -r sub                 # delete directory and contents
```

---

## Connections to Other Topics

- **HTTP** connects to web development (HTML, CSS, JS)
- **Linux/Unix CLI** is foundational for server administration and DevOps
- **Scripting** connects to automation, deployment pipelines, and backend development
- **OS layers** underpin understanding of how programs run and interact with hardware

---

## Resources

- **UTS Library** – _Linux operating system: a complete Linux guide for beginners_ (Choudhary Ankush)
- **Online** – Linux Journey: [https://linuxjourney.com/](https://linuxjourney.com/)
- **Wikipedia References:**
    - [https://en.wikipedia.org/wiki/World_Wide_Web](https://en.wikipedia.org/wiki/World_Wide_Web)
    - [https://en.wikipedia.org/wiki/Server_(computing)](https://en.wikipedia.org/wiki/Server_\(computing\))
    - [https://en.wikipedia.org/wiki/Request-response](https://en.wikipedia.org/wiki/Request-response)