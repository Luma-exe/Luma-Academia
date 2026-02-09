
> [!faq] About this Lecture
> Class: COMP2019
> Subject: #systemsProgramming1
> Topics: #coding/language/c 
> Date: 2025-05-29 at 15:59

## The Shell

- A shell is a program that runs programs.
- Various shells are available for Unix.
- General functions of all shells:
    - Run programs.
    - Manage input and output.
    - Programmable.

## Unix Shell

- An essential part of the Unix system.
- Provides a traditional user interface for Unix.
- Acts as a programming language through shell scripts.

## Shell Script

- A Unix shell is an interpreter for commands.
- Interprets commands from the keyboard and sequences in shell scripts.
- Example of a simple shell script (script0):
    
    ```bash
    ls
    echo "the current date/time is"
    date
    echo "my name is"
    whoami
    ```
    

## Running a Shell Script

- Execute by passing the script name to the shell:
    
    ```bash
    $ sh script0
    ```
    
- Set executable attribute and run directly:
    
    ```bash
    $ chmod +x script0
    $ ./script0
    ```
    

## Which Shell to Use

- Many shells have been developed; each with unique features.
- The main shell used is the Bourne Shell (sh).
- Syntax studied is common across several shells like sh, bash, ksh.

## Programming Features of sh

- Example of a script (script2):
    
    ```bash
    #!/bin/sh
    BOOK=$HOME/phonebook.data
    echo "find what name in phonebook"
    read NAME
    if grep $NAME $BOOK &gt; /tmp/pb.tmp; then
        echo "Entries for $NAME"
        cat /tmp/pb.tmp
    else
        echo "No entries for $NAME"
    fi
    rm /tmp/pb.tmp
    ```
    
- Components:
    - `BOOK` and `NAME` are variables.
    - `$` prefix retrieves variable values.
    - `HOME` is an environment variable.
    - `read` reads user input.
    - `echo` prints strings.

## Shell Variables

- Variable names: combination of characters, digits, and underscores.
- The first character cannot be a digit.
- Case-sensitive.
- Variable values are strings (no numerical values).
- All operations on variables are string operations.

## Local & Environment Variables

- Two types of variables:
    - Local Variables.
    - Environment Variables (like global variables, accessible to child processes).

## Shell Variable Operations

- Assign values: `var=value` (no spaces).
- Reference values: `$var`.
- Delete a variable: `unset var`.
- Input from stdin: `read var` (can read multiple: `read var1 var2 ...`).
- List variables: `set`.
- Make a variable global: `export var`.

### Examples

```bash
$ age=7
$ echo age      # Output: age
$ echo $age     # Output: 7
$ echo $age+$age # Output: 7+7
$ read name     # Input: Bob
$ echo "hello, $name" # Output: hello, Bob
```

## Built-in Command

- `set` is a built-in command, not an executable program.
- Assignment statements are also built-in commands:
    
    ```bash
    varname=value
    ```
    

## Storage for Variables

- Must distinguish local from environment variables.
- Implemented using structures like linked lists, hash tables, trees, etc.
- Example for storage structure:
    
    ```c
    struct var {
        char *str;    // Name=val string
        int global;   // Boolean indicating if it's a global variable
    };
    static struct var tab[MAXVARS];
    ```
    

## Personalized Environment

- Personalize systems (home directory, username, terminal type, favorite editor).
- Preferences stored as environment variables (not part of the shell).

## How Environment Works

- An array of pointers to strings.
- String format: `var=value`.
- Accessible via the global variable `environ`.
- Use command `env` to list variables.

### Print the Environment

- Example C code to print environment:
    
    ```c
    extern char **environ; // Points to the array of strings
    int main() {
        int i;
        for(i = 0; environ[i]; i++) {
            printf("%s\n", environ[i]);
        }
    }
    ```
    

## Environment Variables

- Example script showing environment variable usage:
    
    ```bash
    # script3 - Environment variable passing
    echo "The time in Boston is"
    TZ=EST5EDT
    export TZ
    date
    
    echo "The time in Chicago is"
    TZ=CST6CDT
    date
    ```
    

````
echo "The time in LA is"
TZ=PST8PDT
date
```
````

## Command Line Argument

- Example script handling command line arguments:
    
    ```bash
    # script myecho
    echo $0 $1 $2 $3
    echo $argv[$1]
    echo $argv[$*]
    echo $#
    ```
    
- `$n` refers to the nth command line argument.
- `$0` is the command name.
- `$#` is the number of arguments.

## if Statement

- Executes commands based on test condition results.
- Command execution success (exit status 0) means test is positive.
- Syntax:
    
    ```bash
    if &lt;test command>; then
        <commands>
    fi
    ```
    

### Example of if Statement

```bash
if date | grep Fri; then
    echo "time for backup. Insert tape and press enter"
    read x
    tar cvf /dev/tape/home
fi
```

## else Statement

- The if structure can include an else block for alternative execution paths.

## Summary of if Structure

- Check the exit status of the command following if.
- 0 indicates success, nonzero indicates failure.
- Blocks after `then` execute on success; those after `else` execute on failure.
- `fi` marks the end of the if block.

## Example of Shell Interaction Program

```bash
# converse: Simple program to show shell program interaction
while true; do
    echo -n "Enter a word: "
    read inpt
    if [ "$inpt" = "hi" ]; then
        echo "hi yourself"
        exit 0
    fi
    case $inpt in
        stop | quit)
            exit 0;;
        hello)
            echo "pleased to meet you";;
        *)
            echo "$inpt?"
    esac
done
```

## Background Process

- Shell allows running processes in the background.
- End command with an ampersand (&) to run in the background.

## Improving a Shell

- Enhancements can include:
    - Command line parsing for multi-argument input.
    - Control flow (if...then).
    - Local and environment variable handling.