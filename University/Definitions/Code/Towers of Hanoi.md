
> [!faq] About this Definition
> Subject: #systemsProgramming1 #dataStructuresAndAlgorthims 
> Topics: #definition  #coding/language/c #coding/language/cpp 
> Date: 2025-03-22 at 14:36

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ffExyVn83UQ" frameborder="0" allowfullscreen></iframe>
</div>

### **Explanation of the Towers of Hanoi Algorithm**

The **Towers of Hanoi** is a classic **recursion** problem where we move **n disks** from one peg to another following **specific rules**:

1. Only **one disk** can be moved at a time.
2. A **larger disk cannot be placed on a smaller disk**.
3. The goal is to move all disks from the **source peg (`A`) to the destination peg (`C`)**, using an auxiliary peg (`B`) as needed.

---

```c
#include <stdio.h> // Include the correct header file for printf()

void hanoi(int n, char from, char aux, char to) {
    if (n == 1) { 
        printf("Move disk 1 from %c to %c\n", from, to);
        return;
    }
    
    hanoi(n - 1, from, to, aux); // Move n-1 disks from 'from' to 'aux'
    printf("Move disk %d from %c to %c\n", n, from, to);
    hanoi(n - 1, aux, from, to); // Move n-1 disks from 'aux' to 'to'
}

int main() {
    int num_disks = 3; // Number of disks
    hanoi(num_disks, 'A', 'B', 'C'); // Solve for 3 disks
    return 0;
}
```

---

### **Breakdown of the Code**

- **Base Case (`n == 1`)**:
    
    - If there is only **one disk**, move it directly from `from` to `to`.
- **Recursive Case (`n > 1`)**:
    
    - Move `n-1` disks from `from` → `aux` (temporary storage).
    - Move the **largest disk (`n`)** from `from` → `to`.
    - Move the `n-1` disks from `aux` → `to`.

---

### **Example Output for 3 Disks (`hanoi(3, 'A', 'B', 'C')`)**

```c
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
```

This sequence **correctly solves the puzzle**, moving 3 disks from `A` to `C` while following the rules.

---

### **Key Takeaways**

- The function **recursively moves smaller stacks** until it reaches the base case.
- **Recursive calls mimic the problem-solving process**, breaking it into smaller steps.
- The **largest disk moves last** in each recursive step.