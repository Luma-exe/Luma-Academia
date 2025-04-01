
> [!faq] About this Lecture
> Class: COMP2019
> Subject: #systemsProgramming1
> Topics: #coding/language/c 
> Date: 2025-04-01 at 09:19

## Directory Overview

- **Directory Contains:**
    - Name
    - Modification time
    - Type
    - Address, size, organization
    - Ownership and access rights
- **Mapping:**
    - Maps file names to files
- **Ownership:**
    - Directories are owned by the operating system and must be accessed via system calls

## Directory Structure

- **Hierarchical Structure:**
    - Directories can be nested in a tree-like structure
- **Never Empty:**
    - Contains at least two items: `.` (current directory) and `..` (parent directory)

## List Command (`ls`)

- Lists contents of directories and displays file information.
- **Common Arguments:**
    
    ```bash
    ls
    ls /tmp
    ls hello.c
    ls -l
    ls -l /tmp
    ls -l hello.c
    ls -a
    ls -R
    ```
    

## Directory Access

- **Open Directory:**
    
    ```c
    DIR *opendir(const char *name);
    ```
    
    - Returns a pointer to `DIR` structure.
    - Returns `NULL` on error.

- **Read Directory:**
    
    ```c
    struct dirent *readdir(DIR *dir);
    ```
    
    - Reads the next entry from the directory.
    - Returns a pointer to `struct dirent`.

- **Close Directory:**
    
    ```c
    int closedir(DIR *dir);
    ```
    
    - Closes the connection to the directory.
    - Returns `0` on success; `-1` on error.

## Struct `dirent`

- Defined in header file `<dirent.h>`.
- Contains:
    
    ```c
    struct dirent {
        ino_t d_ino;    // inode number
        char *d</dirent.h>_name;   // filename
    };
    ```
    

## `ls` Implementation Example

```c
#include <stdio.h>
#include <sys/types.h>
#include <dirent.h>


void do_ls(char []); main(int ac, char *av[]) { if (ac == 1) do_ls("."); else while (--ac) { printf("%s:\n", *++av); do_ls(*av); } }

void do_ls(char dirname[]) { DIR *dir_ptr; struct dirent *direntp;


if ((dir_ptr = opendir(dirname)) == NULL)
    fprintf(stderr, "ls1: cannot open %s\n", dirname);
else {
    while ((direntp = readdir(dir_ptr)) != NULL)
        printf("%s\n", direntp->d_name);
    closedir(dir_ptr);
}
} ```

## File Properties and `stat` Call

- **`stat` Function:**
    
    ```c
    int stat(const char *pathname, struct stat *buf);
    ```
    
- **Purpose:**
    - Reads file properties and stores them in `buf`.
    - `struct stat` is defined in `<sys/stat.h>`.

## `struct stat` Contents

- Members include:
    - `st_mode`: type and permission
    - `st_uid`: ID of owner
    - `st_gid`: ID of group
    - `st_size`: size of file in bytes
    - `st_nlink`: number of links to the file
    - `st_mtime`: last modification time
    - `st_atime`: last access time
    - `st_ctime`: last status change time

## File Size Example

```c
#include <stdio.h>
#include </stdio.h>/stat.h>
```

main() { struct stat infobuf; if (stat("/etc/passwd", &infobuf) == -1) perror("/etc/passwd"); else printf("The size of /etc/passwd is %d\n", infobuf.st_size); } ```

## File Mode and Permission Strings

- File type and access coding structured as:
    - First 4 bits: file type
    - Middle 3 bits: special attributes
    - Last 3 bits: access rights for owner, group, and others
- Example of creating a file with permissions:
    
    ```c
    fd = creat("newfile", 0744);  // rwxr--r--
    ```
    

## Masking

- Use bitwise AND to mask unwanted bits:

```c
100664 &amp; 000260 = 000024  // Example of masking
```

## Decoding File Types

- Definitions:
    
    ```c
    #define S_IFMT   0170000
    #define S_IFREG  0100000
    #define S_IFDIR  0040000
    #define S_IFBLK  0060000
    #define S_IFCHR  0020000
    #define S_IFIFO  0010000
    #define S_IFLNK  0120000
    #define S_IFSOCK 0140000
    ```
    
- Check file type:

```c
if ((info.st_mode &amp; 0170000) == 0040000) 
    printf("this is a directory.");
```

## Unix File System

- Types of files include:
    - Regular
    - Directory
    - Device file
    - Socket
    - Symbolic link
    - Named pipe
- Organized in a tree structure.

## Disk and Blocks

- Disk specifics:
    - Organized into tracks and sectors (blocks).
    - Each sector is the basic storage unit.

## Unix File System Structure

- Divided into three main sections:
    - Superblock: the file system’s organization
    - Inode table: properties of files
    - Data area: contents of files

## Inode

- Records file properties:
    - Owner, access permissions, timestamps, and disk addresses.
- Each file has one corresponding inode.

## File System Structure and Inode Links

- Inodes may appear in multiple locations via hard links.
- Reference count keeps track of inodes; deleted when the count is zero.

## Handling Large Files

- Allocation lists stored in data blocks with pointers in the inode.

## Creating Directories

- **`mkdir` Command:**
    - Uses `mkdir()` system call.
    - Creates directory, allocates block for contents, installs entries `.` and `..`.

## Other Commands and System Calls

- **Commands:**
    - `rmdir`, `rm`, `ln`, `mv`, `cd`
- **System Calls:**
    - `rmdir()`, `unlink()`, `link()`, `rename()`, `chdir()`

## Getting Current Path

- Uses recursive traversal to retrieve path information.

## Example: `pwd` Implementation

```c
#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <dirent.h>
#include <string.h>

ino_t get_inode(char *);
void printpathto(ino_t);
void inum_to_name(ino_t, char *, int);

int main() {
    printpathto(get_inode("."));
    putchar('\n');
    return 0;
}

void printpathto(ino_t this_inode) {
    ino_t my_inode;
    char its_name[BUFSIZ];

    if (get_inode("..") != this_inode) {
        chdir("..");
        inum_to_name(this_inode, its_name, BUFSIZ);
        my_inode = get_inode(".");
        printpathto(my_inode);
        printf("/%s", its_name);
    }
}

void inum_to_name(ino_t inode_to_find, char *namebuf, int buflen) {
    DIR *dir_ptr;
    struct dirent *direntp;

    dir_ptr = opendir(".");
    if (dir_ptr == NULL) {
        perror(".");
        exit(1);
    }

    while ((direntp = readdir(dir_ptr)) != NULL) {
        if (direntp->d_ino == inode_to_find) {
            strncpy(namebuf, direntp->d_name, buflen);
            namebuf[buflen - 1] = '\0';  // Ensure null termination
            closedir(dir_ptr);
            return;
        }
    }

    fprintf(stderr, "Error looking for inum %ld\n", (long)inode_to_find);
    exit(1);
}

ino_t get_inode(char *fname) {
    struct stat info;
    if (stat(fname, &info) == -1) {
        fprintf(stderr, "Cannot stat ");
        perror(fname);
        exit(1);
    }
    return info.st_ino;
} 
```

## Multiple File Systems

- Supports multiple disks, each with its own file system tree.
- Trees are grafted into a seamless directory structure.

## Tree Grafting

- Grafting two file system trees into a larger unified tree structure.
