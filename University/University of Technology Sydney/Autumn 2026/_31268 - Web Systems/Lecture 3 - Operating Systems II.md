
> [!faq] About this Lecture 
> Class: 31268
> Subject: #webSystems
> Date: 12/03/2025 
> Topics: #web #html #css

## Key Definitions (Glossary)

|Term|Definition|
|---|---|
|**OS**|Core software installed on device hardware; sits between all programs and the hardware|
|**Kernel**|Core OS program that controls hardware and provides resource access to applications|
|**Shell**|Layer on top of Kernel; enables user communication with Kernel via CLI commands|
|**CLI**|Command interpreter enabling user interaction with the Kernel via commands and scripts|
|**Applications**|Top-most layer consisting of software, services, and utilities|
|**Filesystem**|Structure used by OS to organise and manage files on a storage device|
|**Server**|Central computer providing information to multiple client computers|
|**Client**|Computer operated by a user that connects to a server to acquire information|
|**Big O Notation**|Method used to compare the efficiency of different algorithms or data structures|
|**Inode**|Index node — a data structure storing metadata and pointers for a file/directory in Unix|
|**Partition**|A logical division of a hard-drive, managed independently by the OS|

---

## Unix Operating System

### What is Unix?

- Unix has existed since **1969**
- Popular for networked computers: workstations and servers
- Unix CLI requires expert knowledge — not beginner-friendly for ordinary users
- **Unix-based** — family of multi-tasking OSes that _directly derive_ from Unix (e.g., macOS, Solaris, HP-UX)
- **Unix-like** — systems that _behave_ like Unix but do **not** meet the Single Unix Specification (SUS) (e.g., Linux, Android)
- ⚠️ **Exam hint:** For this subject, treat Unix and Unix-like as the same

### Unix Family Tree (Major Variants)

|Variant|Description|
|---|---|
|**System V**|Original AT&T version, first released 1983|
|**BSD**|Berkeley Software Distribution — developed by CSRG at UC Berkeley|
|**SUS**|Single Unix Specification — OS standard for C interfaces, shell, and commands|

**Unix-based examples:** HP-UX, AIX, IRIX, Solaris, macOS **Unix-like examples:** GNU/Linux, Android, Chrome OS, FreeBSD, NetBSD, OpenBSD, Minix

### Historical Timeline

|Period|Event|
|---|---|
|1960s–1990s|Original AT&T Unix — required a commercial license|
|1980s|BSD became a popular Unix variant|
|Early 1990s|GNU project launched for open-source Unix-like OS; Linus Torvalds released the Linux Kernel|
|**1992**|Linux Kernel integrated with GNU system → first complete Unix-like OS|
|Through 1990s|Early Linux distros: Slackware and Debian released|
|Early 2000s|Red Hat Enterprise Linux (RHEL) released as commercial distribution|
|**2004**|Ubuntu released by Canonical — significantly improved Linux accessibility|
|Today|Hundreds of Linux distributions catering to different user types|

### Why Unix Survived

Unix has many version irregularities (unregulated commands confused users), yet it persisted because:

|Reason|Detail|
|---|---|
|**Open ideas**|No single owner — anyone is free to implement it|
|**Simple concepts**|Everything is represented as a file|
|**Portable**|Written in C — any device with a C compiler can run it|
|**Free versions**|Linux/FreeBSD have been free since 1993|
|**Stable & secure**|Unix systems rarely crash; designed for security from the ground up|
|**Powerful CLI**|Commands can be piped, chained, or scripted together|

---

## Unix Filesystem

### Overview

A **filesystem** is the way an OS manages and organises data storage and access.

Two classifications:

- **Logical Filesystem** — how items are _viewed_: partitions, directories, subdirectories, files
- **Physical Filesystem** — how items are _physically stored_ on storage media

The OS sits between the application layer and hardware, managing the filesystem.

```
User
  ↕
Application
  ↕
Operating System  ←── OS manages filesystem
  ↕
Hardware
```

### Three Components of the Unix Logical Filesystem

**Files**

- In Unix, _everything_ is treated as a file: devices, scripts, data, network sockets
- This is a fundamental Unix design philosophy

**Directories**

- Store files in a hierarchical tree structure
- All directories start from the root: `/`

**Partitions**

- A logical division of a hard-drive (often multiple partitions per physical drive)
- Managed independently by the OS
- Removable partitions (e.g., USB) can be mounted/unmounted
- Operations like backup and quota changes can be done on one partition in isolation
- Windows equivalent: "drives" (C:, D:, I:)

### Tree Data Structure (How the Filesystem is Organised)

The Unix filesystem is conceptually a **hierarchical tree** rooted at `/`

```
         /  (root)
        / \
      home  etc
      / \
   user1  user2
    /
documents
```

Key terminology:

|Term|Meaning|
|---|---|
|**Root node**|The only node with no parent — in Unix this is `/`|
|**Branch / Edge**|Connection between nodes: A → B|
|**Parent**|If A → B, then A is the parent of B|
|**Child**|If A → B, then B is the child of A|
|**Leaf node**|Edge node with no children (files are typically leaf nodes)|
|**Siblings**|Nodes that share the same parent|
|**Subtree**|A node and all its descendants|
|**Height**|Number of levels in the tree|

Rules:

- A child node can have **only one parent**
- A parent node can have **multiple children**
- Every node has one parent **except the root**

### Filesystem Navigation (CLI Commands)

Path notation:

bash

```bash
/        # Root directory
/home    # Home branch (absolute path from root)
.        # Current directory
..       # Parent of the current directory
```

Navigation commands:

bash

```bash
cd /           # Traverse to the root directory
cd ~/home      # Navigate to the home branch
cd ..          # Move up one level (to parent directory)
cd ../..       # Move up two levels in the tree
cd ../../..    # Move up three levels in the tree
```

---

## File Storage

### Scale of the Internet

The web is massive and growing daily:

- **1.13 billion** websites as of 2024
- **5.3 billion** users as of 2024
- Total internet data: **64 ZB** as of 2020 — estimated to reach **175 ZB by 2025**

1 ZB (Zettabyte)=1015 MB=1021 Bytes=1,000,000,000,000,000,000,000 Bytes1 \text{ ZB (Zettabyte)} = 10^{15} \text{ MB} = 10^{21} \text{ Bytes} = 1{,}000{,}000{,}000{,}000{,}000{,}000{,}000 \text{ Bytes}1 ZB (Zettabyte)=1015 MB=1021 Bytes=1,000,000,000,000,000,000,000 Bytes

### Where is Data Stored?

All data is ultimately stored on **hard drives**. Three categories:

|Type|Description|Examples|
|---|---|---|
|**Local hard drives**|Physically attached to the motherboard; accessible locally or remotely|HDD, SSD, Magnetic, USB|
|**Network storage drives**|Dedicated file storage enabling multiple users to access shared data|DAS, SAN, NAS|
|**Servers**|Provide file/data/media access over LAN or WAN (the Internet)|Database server, Web server, Email server|

### Data Centres and Distributed Computing

**Data Centre**

- Building(s) housing many servers
- Servers work together to provide large-scale storage and compute power
- Includes all networking devices and configurations needed to leverage a network

**Distributed Computing**

- Methods and practices of making multiple servers work together to achieve a goal
- Makes a network of servers (data centre) _appear_ as a single powerful computer
- Used by private data centres and cloud providers

### Real-World Example: AWS Australia

> AWS (Amazon Web Services) is a prime example of distributed computing

- AWS has **two regions** in Australia, each with multiple **availability zones**
- Each availability zone = one or more data centres
- Each data centre contains **50,000 to 80,000 servers**

|Region|Availability Zones|Servers per DC|
|---|---|---|
|Sydney|3|50,000 – 80,000|
|Melbourne|3|50,000 – 80,000|

Total estimate for Australia alone:

50,000×6≤Total Servers≤80,000×650{,}000 \times 6 \leq \text{Total Servers} \leq 80{,}000 \times 650,000×6≤Total Servers≤80,000×6 300,000≤Total≤480,000 servers300{,}000 \leq \text{Total} \leq 480{,}000 \text{ servers}300,000≤Total≤480,000 servers

---

## Storage Management

### Three Ways a Hard Drive is Managed

1. **Disk physical structure** — how data is kept on the tangible storage medium (HDD/SSD)
2. **Disk logical structure** — how the disk is organised into partitions for specific purposes
3. **File allocation methods** — how files are stored on a disk in blocks

### HDD Physical Structure

A hard-drive (HDD) is a stack of magnetic platters held by an assembly arm:

|Component|Description|
|---|---|
|**Tracks**|Concentric rings on each platter|
|**Head**|Reads/writes data from a platter|
|**Cylinder**|Collection of all tracks at the same position across all platters|
|**Spindle**|Central rod that the platters revolve around|
|**Sectors**|Smallest physical unit of an HDD track — mostly **512 bytes**|

> **Note:** SSDs have no moving parts but logically emulate a rotating hard disk

### Disk Formatting

A hard drive must be **formatted** before use in a computer.

- Formatting = preparing the disk by setting up a file system and creating partitions
- Enables the OS to read and write data efficiently
- Marks the disk surface into tracks, sectors, and cylinders

**Linux formatting steps (step-by-step):**

bash

```bash
# Step 1: Identify disk
lsblk

# Step 2: Unmount the disk
umount /dev/sdX

# Step 3: Format with ext4 filesystem
mkfs.ext4 /dev/sdX

# Step 4: Mount the partition
mount /dev/sdX /mnt
```

**Windows formatting steps:**

```
Open Disk Management
→ Right-click partition
→ Select Format
→ Choose filesystem (NTFS, FAT32, exFAT)
→ Click OK
```

### Disk Logical Structure

Disk logical structure defines how data is organised, accessed, and managed within a storage device:

|Element|Description|
|---|---|
|**Partitions**|Divisions of the disk into independent sections that can hold file systems|
|**Filesystem**|Defines how data is stored, named, and retrieved (e.g., NTFS, ext4)|
|**Sector**|Smallest _addressable_ storage unit on a disk|
|**Cluster**|A group of sectors combined to optimise storage allocation|
|**Block**|Smallest _fixed-size_ unit used by file systems to read, write, and manage data|

---

## File Allocation Methods

File allocation methods define how files are stored on a disk and accessed by the OS.

### Contiguous Allocation

Files are stored in **consecutive (sequential) blocks** on disk.

```
/home/Documents/report.txt  →  occupies 5 blocks

[ Block 0 ][ Block 1 ][ Block 2 ][ Block 3 ][ Block 4 ]
  --------   --------   --------   --------   --------
  (data)     (data)     (data)     (data)     (data)
```

- Directory acts like a table storing the file name, starting block, and length
- To access any block: jump directly to `start_block + offset`

|Advantages|Disadvantages|
|---|---|
|**Simplicity** — easy to implement|**Fragmentation** — leads to fragmented free space over time|
|**Speed** — fast read/write; O(1)O(1) O(1) access time|**Fixed size** — predefined maximum file size|
|**Low overhead** — minimal management needed|**Limited flexibility** — difficult to resize files|

**Complexity:** O(1)O(1) O(1)

---

### Linked Allocation

Each file is a **linked list of disk blocks**. Each block stores part of the file _plus a pointer_ to the next block. The last block's pointer points to `NULL`.

```
/home/Documents/data.txt  →  3 blocks: Block 0, Block 2, Block 5

[ Block 0          ]        [ Block 2          ]        [ Block 5          ]
| Part of file | ptr→ | ──→ | Part of file | ptr→ | ──→ | Part of file | ptr→ | ──→ NULL
```

- Blocks can be scattered anywhere on the disk
- To read block nn n: must traverse all previous n−1n-1 n−1 blocks following pointers

|Advantages|Disadvantages|
|---|---|
|**No fragmentation** — efficient disk use|**Slow access** — pointer chasing required|
|**Dynamic size** — file grows by adding blocks|**Overhead** — each block must store a pointer|
|**Flexibility** — blocks stored anywhere on disk|**Complexity** — harder to manage|

**Complexity:** O(n)O(n) O(n) where nn n = number of blocks

---

### Indexed Allocation

Each file has a dedicated **index block** (also called a pointer indexed block) containing direct pointers to all of the file's data blocks.

```
/home/Documents/data.txt  →  3 blocks: Block 0, Block 1, Block 2

              [ Pointer Indexed Block ]
              [ Ptr 0 | Ptr 1 | Ptr 2 ]
                 ↓        ↓        ↓
           [Data Blk 0] [Data Blk 1] [Data Blk 2]
```

- Combines advantages of contiguous (fast access) and linked (no fragmentation)
- Access any block directly via its pointer in the index block

|Advantages|Disadvantages|
|---|---|
|**No fragmentation** — efficient disk use|**Index block overhead** — extra space needed|
|**Fast access** — direct access to data blocks|**Fixed size limit** — index block limits max file size|
|**Flexibility** — blocks stored non-contiguously|**Complexity** — more complex than contiguous|

**Complexity:** O(log⁡k(n))O(\log_k(n)) O(logk​(n)) where kk k = pointers per block, nn n = number of blocks

---

## Inodes (Index Nodes)

### What is an Inode?

An **inode** (index node) is a data structure in Unix-like OSes that stores all information (metadata + pointers) about a file or directory.

- Every file and directory has a **unique inode number**
- The inode does **not** store the filename or the actual file content
- It stores _where_ the content is located and _metadata_ about the file

### Inode Fields

|Field|Description|
|---|---|
|**File type**|Integer value: regular file, directory, symbolic link, etc.|
|**Permissions**|Access control: read, write, execute for owner / group / others|
|**Owner (UID)**|User ID of the file's owner|
|**Group (GID)**|Group ID associated with the file|
|**Size**|Total file size in bytes|
|**Timestamps**|Date/time created, last modified, last accessed|
|**Link count**|Number of hard links pointing to this inode|
|**Pointers to data blocks**|Usually **15 pointers** pointing to the actual data on disk|

### Inode Pointer Structure (15 Pointers)

The inode uses a multi-level pointer system to locate file content:

```
inode
├── Mode (permissions + file type)
├── Owner (UID)
├── Size (bytes)
├── Timestamps
├── Direct Pointers × 12       ──→ each points directly to a Data Block
├── Single Indirect Pointer    ──→ points to a block of pointers → Data Blocks
├── Double Indirect Pointer    ──→ 2 levels of indirection → → Data Blocks
└── Triple Indirect Pointer    ──→ 3 levels of indirection → → → Data Blocks
```

|Pointer #|Type|How it works|
|---|---|---|
|1–12|**Direct**|Each pointer holds the physical address of a data block|
|13th|**Singly indirect**|Points to a block that contains pointers to data blocks|
|14th|**Doubly indirect**|Points to a block of pointers, each pointing to another block of pointers|
|15th|**Triply indirect**|Three levels of single indirection|

### Viewing Inodes in the CLI

bash

```bash
# Show inode number alongside file details
ls -il

# Example output:
# 14184167 -rw-r--r-- 1 user user 0 Oct 18 17:24 file1
# 14184169 -rw-r--r-- 1 user user 0 Oct 18 17:24 file3.txt
# 14184235 -rw-r--r-- 1 user user 0 Oct 18 17:24 file5.txt
# 14184236 -rw-r--r-- 1 user user 0 Oct 18 17:24 file6.txt
#
# Column 1 = inode number
# Column 2 = permissions
# Column 3 = link count
# Column 4 = owner
# Column 5 = group
# Column 6 = size (bytes)
# Column 7–9 = timestamp
# Column 10 = filename
```

---

## Complexity & Big O Notation

### What is Complexity?

In file storage, **complexity** refers to the resources required (time or space) to access, manipulate, or store data as a function of the data size.

Expressed using **Big O notation** — classifies worst-case/upper-bound performance as input size grows:

|Notation|Name|Meaning|
|---|---|---|
|O(1)O(1) O(1)|Constant|Time is independent of input size|
|O(n)O(n) O(n)|Linear|Time grows proportionally with input|
|O(log⁡k(n))O(\log_k(n)) O(logk​(n))|Logarithmic|Steps grow much slower than input; very efficient|

### File Reading Examples

- **Sequential read** (every byte from start to end): O(n)O(n) O(n) — must read every byte
- **Direct index access** (jump to a specific block): O(1)O(1) O(1) — jump straight to location

### Complexity of File Allocation Methods

Where: n=number of blocks,k=number of pointers per block\text{Where: } n = \text{number of blocks},\quad k = \text{number of pointers per block}Where: n=number of blocks,k=number of pointers per block

|Allocation Method|Access Complexity|
|---|---|
|Contiguous Allocation|O(1)O(1) O(1)|
|Linked Allocation|O(n)O(n) O(n)|
|Indexed Allocation|O(log⁡k(n))O(\log_k(n)) O(logk​(n))|
|inode Structure|O(log⁡k(n))O(\log_k(n)) O(logk​(n))|

### Worked Example 1 — Laptop (178 GB storage)

**Given:** Laptop with 400,000 files, total size = 178 GB

**Contiguous allocation:**

O(1)≈1 readO(1) \approx 1 \text{ read}O(1)≈1 read

> Works well on SSD… _except_ for fragmentation issues

**Linked allocation:**

O(n): to reach the 98 millionth block⇒98,000,000 reads required!O(n): \text{ to reach the 98 millionth block} \Rightarrow 98{,}000{,}000 \text{ reads required!}O(n): to reach the 98 millionth block⇒98,000,000 reads required!

**Indexed / inode allocation:**

O(log⁡10(n))=log⁡10(178×109)≈log⁡10(1.78×1011)≈11 readsO(\log_{10}(n)) = \log_{10}(178 \times 10^9) \approx \log_{10}(1.78 \times 10^{11}) \approx 11 \text{ reads}O(log10​(n))=log10​(178×109)≈log10​(1.78×1011)≈11 reads

---

### Worked Example 2 — Google Filesystem (15 ExaBytes)

**Given:** Google filesystem = 15 ExaBytes

15 EB=15×1021 bytes=150,000,000 TB15 \text{ EB} = 15 \times 10^{21} \text{ bytes} = 150{,}000{,}000 \text{ TB}15 EB=15×1021 bytes=150,000,000 TB

**Contiguous allocation:**

O(1)≈1 read (in theory)O(1) \approx 1 \text{ read (in theory)}O(1)≈1 read (in theory)

> Impractical — must know _exactly_ where the block is across over 10 million disk drives

**Linked allocation:**

O(n): to reach the 987 millionth block⇒987,000,000 reads required!O(n): \text{ to reach the 987 millionth block} \Rightarrow 987{,}000{,}000 \text{ reads required!}O(n): to reach the 987 millionth block⇒987,000,000 reads required!

**Indexed / inode allocation:**

O(log⁡10(n))=log⁡10(15×1021)≈log⁡10(1.5×1022)≈21 reads only!O(\log_{10}(n)) = \log_{10}(15 \times 10^{21}) \approx \log_{10}(1.5 \times 10^{22}) \approx 21 \text{ reads only!}O(log10​(n))=log10​(15×1021)≈log10​(1.5×1022)≈21 reads only!

> ⚠️ **Key conclusion (exam emphasis):** The Indexed/inode structure wins decisively for large file systems. Even at Google-scale (15 ExaBytes), only ~21 reads are needed compared to hundreds of millions for linked allocation.

### Complexity Comparison Summary

```
Complexity (reads needed)
^
|      O(n) ← Linked: grows linearly — terrible at scale
|     /
|    /
|   /    O(log_k(n)) ← Indexed/inode: grows very slowly
|  /   __--
| / __--
|/__--  O(1) ← Contiguous: flat but fragmentation issues
+-------------------------------------------> File System Size
   Contiguous   Linked    Indexed    i-node
```

---

## VIM Text Editor

### What is VIM?

- Vim = Vi IMproved — a fast, highly customisable text editor for Unix-based systems
- Ideal for efficient coding and text manipulation directly in the terminal
- Supports multiple modes and plugins for advanced functionality
- Open using: `vim filename` (creates or opens the file in Normal mode)

bash

```bash
vim filename    # Creates file if it doesn't exist; opens if it does
```

### VIM Modes

Vim has **four main modes**. You must understand which mode you are in at all times.

|Mode|Purpose|How to Enter|
|---|---|---|
|**Normal**|Default mode — navigate and run commands|Press `ESC` from any other mode|
|**Insert**|Type text directly into the file|`i`, `I`, `A`, or `o` from Normal|
|**Visual**|Select regions of text|`v` or `V` from Normal|
|**CLI**|Execute shell/file commands|`:` from Normal|

> ⚠️ **Critical:** Press `ESC` to exit Insert, Visual, or CLI mode and return to Normal mode

### Normal Mode Commands

```
Navigation:
  h    ← move cursor left
  j    ↓ move cursor down
  k    ↑ move cursor up
  l    → move cursor right

Editing:
  dd   delete (cut) the current line
  yy   yank (copy) the current line
  p    paste below the cursor
```

### Insert Mode Commands

```
i    Insert before the cursor
I    Insert at the beginning of the line
A    Append at the end of the line
o    Create a new line below and enter insert mode
```

### Visual Mode Commands

```
v          Select character-wise (then move cursor to extend selection)
V          Select line-wise
v + w      Select a word
```

### CLI Mode Commands

```
:w         Save the file
:q         Exit Vim (quit)
:wq        Save and exit
:q!        Quit without saving (force quit)
:!command  Run a shell command (e.g., :!ls)
```

### VIM Quick-Reference Workflow

```
Open file:        vim filename
Enter insert:     i
Type your text:   (type normally)
Exit insert:      ESC
Save & quit:      :wq  then ENTER
Quit no save:     :q!  then ENTER
```

---

## Comparison Table — All Allocation Methods

|Feature|Contiguous|Linked|Indexed / inode|
|---|---|---|---|
|**Access complexity**|O(1)O(1) O(1)|O(n)O(n) O(n)|O(log⁡k(n))O(\log_k(n)) O(logk​(n))|
|**Fragmentation**|Yes — major issue|No|No|
|**Dynamic file growth**|No — fixed size|Yes|Yes (within index limit)|
|**Storage overhead**|Low|Medium (pointers per block)|Medium (index block)|
|**Implementation complexity**|Simple|Medium|Complex|
|**Best for**|Small, fixed-size files / SSDs|Dynamic files|Large-scale file systems|
|**Real-world use**|Limited|FAT (older systems)|ext4, Unix inodes|

---

## Quick-Reference Summary Cards

### Unix OS Family

```
Unix (1969)
├── Unix-based (direct descendants)
│   ├── System V family: HP-UX, AIX, IRIX, Solaris, UnixWare
│   └── BSD family: FreeBSD, NetBSD, OpenBSD, macOS (via Darwin)
└── Unix-like (SUS non-compliant)
    ├── GNU/Linux (thousands of distros)
    ├── Android, Chrome OS
    └── Minix, QNX, Xenix
```

### Filesystem Path Notation

```
/           Root of the entire filesystem
/home       Absolute path from root
.           Current directory
..          Parent directory
cd ..       Move up 1 level
cd ../..    Move up 2 levels
cd /        Go to root
```

### inode Structure

```
inode (unique per file)
├── metadata: type, permissions, UID, GID, size, timestamps, link count
└── 15 pointers:
    ├── 12 × Direct pointers        → Data Blocks
    ├── 1 × Single indirect         → [ptr block] → Data Blocks
    ├── 1 × Double indirect         → [ptr block] → [ptr block] → Data Blocks
    └── 1 × Triple indirect         → [ptr] → [ptr] → [ptr] → Data Blocks
```

### Big O for Storage

Contiguous: O(1)Linked: O(n)Indexed/inode: O(log⁡kn)\text{Contiguous: } O(1) \quad \text{Linked: } O(n) \quad \text{Indexed/inode: } O(\log_k n)Contiguous: O(1)Linked: O(n)Indexed/inode: O(logk​n)

---

## References & Further Reading

|Source|URL|
|---|---|
|Unix (Wikipedia)|[https://en.wikipedia.org/wiki/Unix](https://en.wikipedia.org/wiki/Unix)|
|Single Unix Specification|[https://unix.org/what_is_unix/single_unix_specification.html](https://unix.org/what_is_unix/single_unix_specification.html)|
|UNIX System V (Wikipedia)|[https://en.wikipedia.org/wiki/UNIX_System_V](https://en.wikipedia.org/wiki/UNIX_System_V)|
|BSD (Wikipedia)|[https://en.wikipedia.org/wiki/Berkeley_Software_Distribution](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution)|
|History of Unix|[https://en.wikipedia.org/wiki/History_of_Unix](https://en.wikipedia.org/wiki/History_of_Unix)|
|Filesystem (Wikipedia)|[https://en.wikipedia.org/wiki/File_system](https://en.wikipedia.org/wiki/File_system)|
|The Unix Filesystem (online text)|[https://homepages.uc.edu/~thomam/Intro_Unix_Text/File_System.html](https://homepages.uc.edu/~thomam/Intro_Unix_Text/File_System.html)|
|UTS HPC Training|[https://hpc.research.uts.edu.au/getting_started/training](https://hpc.research.uts.edu.au/getting_started/training)|
|Interactive Vim Training|[https://openvim.com/index.html](https://openvim.com/index.html)|
|**Book (UTS Library)**|_Unix System Administration Handbook_, Nemeth, Evi. (3rd ed., 2001)|