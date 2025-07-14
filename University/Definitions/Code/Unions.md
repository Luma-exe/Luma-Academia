
> [!faq] About this Definition
> Subject: #systemsProgramming1 #dataStructuresAndAlgorthims 
> Topics: #definition  #coding/language/c #coding/language/cpp 
> Date: 2025-03-21 at 18:13

# **Understanding Unions in C**

A **union** in C is a special data type that allows you to store **different types of data** in the **same memory location**. Unlike a **struct**, where each member has its own memory space, all members of a union share the **same memory**.

---

### **1. Declaring a Union**
A union is declared similarly to a `struct`, but the key difference is that all members share the **same memory**.

```c
union mark {
    int i;        // Integer type
    char s[10];   // String (array of characters)
};
```

In this case, the union `mark` can hold either an `int` (`i`) or a string (`s`), but not both at the same time.

---

### **2. Memory Allocation in Unions**

- In a **union**, all members share the same memory.
- The size of the union is determined by the **largest member**.

For example, if `int` requires 4 bytes and the string `char s[10]` requires 10 bytes, the union will use **10 bytes of memory** (the size of the largest member).

---

### **3. Using a Union**

```c
#include <stdio.h>

union mark {
    int i;
    char s[10];
};

int main() {
    union mark m;

    m.i = 5;         // Assigning a value to 'i'
    printf("m.i = %d\n", m.i);

    // Now, assign a string to 's', which will overwrite 'i'
    strcpy(m.s, "Hello");
    printf("m.s = %s\n", m.s);

    // The value of 'i' is now garbage because we overwrote it with 's'
    printf("m.i = %d\n", m.i);

    return 0;
}
```

**Output:**

```c
m.i = 5
m.s = Hello
m.i = 1819043144
```

---

### **4. Key Points About Unions**

- **Shared Memory:**  
    All members of the union use the **same memory** space, meaning they cannot hold multiple values at once.
    
- **Memory Efficiency:**  
    Since unions use the same memory for all their members, they can be more **memory-efficient** than `structs` when you need to store **one of several possible values**.
    
- **One Member at a Time:**  
    You can only use **one member** at a time. If you assign a value to `s` (a string), the value stored in `i` will be overwritten, and vice versa.

---

### **5. Use Case Example**

Unions are useful when you need to store different data types, but **only one of them** will be used at any given time. This is common in scenarios like:

- **Network protocols:** Where a message can be of different types, but only one type will be used in each packet.
- **Memory-mapped devices:** Where the same address might represent different types of data depending on the context.

---

### **6. Comparing Unions and Structs**

- **Union**: All members share the same memory. Only one member can store a value at a time.
- **Struct**: Each member has its own memory. All members can store values independently.

---

### **Summary of Unions**

|Feature|Union|
|---|---|
|Memory Sharing|All members share the same memory|
|Memory Size|Size is determined by the largest member|
|Usage|Only one member can hold a value at a time|
|Best for|Memory-efficient storage of alternative data types|

Unions are useful for situations where **multiple data types** are needed but **only one is used at a time**, helping save memory!