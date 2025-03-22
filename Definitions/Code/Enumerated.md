
> [!faq] About this Definition
> Subject: #systemsProgramming1 #dataStructuresAndAlgorthims 
> Topics: #definition  #coding/language/c #coding/language/cpp 
> Date: 2025-03-21 at 18:20

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/oW5UusoWEY0" frameborder="0" allowfullscreen></iframe>
</div>

# **Understanding Enums in C**

An **enum** (short for **enumeration**) is a user-defined data type in C that allows you to assign names to a set of integer values. It helps make your code more readable and easier to understand by giving meaningful names to constant values.

---

### **1. Declaring an Enum**
To declare an enum, you use the `enum` keyword followed by the enum name and a list of possible values.

```c
enum color {
    RED,
    GREEN,
    BLUE
};
```

- `enum color`: Declares a new enum type called `color`.
- `{ RED, GREEN, BLUE }`: These are the **possible values** (members) of the enum `color`. By default, the values will be assigned integers starting from 0.

---

### **2. Default Values**

By default, the first member of an enum is assigned the integer value `0`, and each subsequent member gets the next integer value.

For example:

```c
enum color {
    RED = 0,    // RED is 0
    GREEN = 1,  // GREEN is 1
    BLUE = 2    // BLUE is 2
};
```

If you don't explicitly assign values, they will automatically be assigned as follows:

```c
enum color {
    RED,    // 0
    GREEN,  // 1
    BLUE    // 2
};
```

### **3. Using Enums in Code**

You can declare variables of an enum type and assign values from the enum to them.

```c
#include <stdio.h>

enum color {
    RED,
    GREEN,
    BLUE
};

int main() {
    enum color c1, c2;

    c1 = RED;    // Assign RED to c1
    c2 = BLUE;   // Assign BLUE to c2

    printf("c1 = %d\n", c1);  // Output: c1 = 0
    printf("c2 = %d\n", c2);  // Output: c2 = 2

    return 0;
}
```

**Output:**

```c
c1 = 0
c2 = 2
```

In the example above:

- `c1` is assigned the value `RED` (which is `0`).
- `c2` is assigned the value `BLUE` (which is `2`).

Enums are internally stored as integers, so the values are printed as integers.

---

### **4. Assigning Custom Values**

You can assign specific integer values to the enum members. For example:

```c
enum color {
    RED = 10,    // RED is 10
    GREEN = 20,  // GREEN is 20
    BLUE = 30    // BLUE is 30
};
```

This way, the members of the enum are explicitly assigned the values you define.

---

### **5. Enum Size and Memory**

- Enums are typically stored as integers (usually `int` type) in memory.
- The actual size can vary depending on the platform and compiler, but it’s typically the size of an integer (4 bytes).

---

### **6. Advantages of Using Enums**

- **Improved Code Readability:**  
    Instead of using raw numbers like `0`, `1`, and `2` to represent colors, using meaningful names like `RED`, `GREEN`, and `BLUE` makes your code more readable and easier to maintain.
    
- **Prevent Invalid Values:**  
    By using enums, you restrict the values a variable can take, which reduces the chance of errors. For example, a variable of type `enum color` can only hold one of the values defined in `enum color` (e.g., `RED`, `GREEN`, or `BLUE`), so there are fewer mistakes.
    
- **Better Maintenance:**  
    If you need to change the value associated with `RED` (for example, from `0` to `10`), you only need to change it in the enum definition, instead of finding and replacing all occurrences of `0` in your code.

---

### **7. Example: Using Enums with Switch Statement**

You can use enums in control structures like `switch` statements to perform different actions based on the enum value.

```c
#include <stdio.h>

enum color {
    RED,
    GREEN,
    BLUE
};

void printColor(enum color c) {
    switch(c) {
        case RED:
            printf("Red\n");
            break;
        case GREEN:
            printf("Green\n");
            break;
        case BLUE:
            printf("Blue\n");
            break;
        default:
            printf("Unknown color\n");
            break;
    }
}

int main() {
    enum color c = GREEN;
    printColor(c);  // Output: Green

    return 0;
}
```

In this example:

- The `switch` statement checks the value of the enum `c` and prints the corresponding color name.

---

### **Summary of Enums**

- An **enum** is a **data type** with **named integer constants**.
- **Improves code readability** and makes it easier to manage values.
- Can assign **custom values** to the members.
- Helps prevent **invalid values** by restricting the variable to only the defined members.

Enums are especially useful when you have a fixed set of related values (like days of the week, months, colors, etc.), and you want to use **meaningful names** instead of hardcoding numbers.