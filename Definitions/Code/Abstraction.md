
> [!faq] About this Definition
> Subject: #systemsProgramming1 
> Topics: #definition  #coding/language/c #coding/language/cpp 
> Date: 2025-03-21 at 17:24

**Abstraction** means **hiding unnecessary details** and showing only what is important. It helps simplify complex systems by focusing on what something does rather than how it works.  

### Real-World Example  
Think of a **car**:  
- You turn the steering wheel to change direction.  
- You press the gas pedal to move forward.  
- You don’t need to know how the engine or transmission works to drive the car.  

In programming, abstraction works the same way—**you use something without needing to understand its inner details**.  

### Coding Example (C)  
```c
#include <stdio.h>

// Function to add two numbers (hides the actual addition logic)
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3); // We just call "add" without worrying about how it works
    printf("Sum: %d\n", result);
    return 0;
}
```

### Explanation

- The `add` function **hides** how the numbers are added.
- In `main()`, we **only use** `add(5, 3)`, without worrying about how the addition happens.
- This makes the code **simpler** and **easier to read**.

Abstraction is useful because it reduces complexity and makes code easier to manage!