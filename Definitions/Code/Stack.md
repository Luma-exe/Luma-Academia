
> [!faq] About this Definition
> Subject: #systemsProgramming1 
> Topics: #definition  #coding/language/c #coding/language/cpp 
> Date: 2025-04-03 at 12:08

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/KInG04mAjO0" frameborder="0" allowfullscreen></iframe>
</div>

# **Understanding Stack in C**

A **stack** is a data structure that follows the **Last In, First Out (LIFO)** principle. It means the **last element added** is the **first one removed**.

---

### **1. How a Stack Works**
- **Push** → Add an element to the top.
- **Pop** → Remove the top element.
- **Peek (Top)** → View the top element.
- **IsEmpty** → Check if the stack is empty.

---

### **2. Implementing a Stack in C**
C does not have a built-in stack, so we use an **array** or **linked list**.

#### **Stack using an Array**
```c
#include <stdio.h>
#define MAX 5  // Stack size

int stack[MAX], top = -1;

// Push operation
void push(int value) {
    if (top == MAX - 1) {
        printf("Stack Overflow\n");
        return;
    }
    stack[++top] = value;
}

// Pop operation
int pop() {
    if (top == -1) {
        printf("Stack Underflow\n");
        return -1;
    }
    return stack[top--];
}

// Peek operation
int peek() {
    if (top == -1) {
        printf("Stack is Empty\n");
        return -1;
    }
    return stack[top];
}

int main() {
    push(10);
    push(20);
    printf("Top element: %d\n", peek());
    printf("Popped element: %d\n", pop());
    printf("Top element after pop: %d\n", peek());
    return 0;
}
```

**Output:**

```c
Top element: 20
Popped element: 20
Top element after pop: 10
```

---

### **3. Stack using a Linked List**

A **linked list-based stack** dynamically allocates memory.

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

// Push operation
struct Node* push(struct Node* top, int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = top;
    return newNode;
}

// Pop operation
struct Node* pop(struct Node* top) {
    if (top == NULL) {
        printf("Stack Underflow\n");
        return NULL;
    }
    struct Node* temp = top;
    top = top->next;
    free(temp);
    return top;
}

// Peek operation
int peek(struct Node* top) {
    if (top == NULL) {
        printf("Stack is Empty\n");
        return -1;
    }
    return top->data;
}

int main() {
    struct Node* top = NULL;
    top = push(top, 10);
    top = push(top, 20);
    printf("Top element: %d\n", peek(top));
    top = pop(top);
    printf("Top element after pop: %d\n", peek(top));
    return 0;
}
```

---

### **4. Why Use a Stack?**

- **Used in function calls (recursion).**
- **Undo/Redo operations.**
- **Expression evaluation (infix to postfix).**

---

### **5. Summary of Stacks**

- **LIFO**: Last In, First Out.
- **Push()**: Add an element.
- **Pop()**: Remove an element.
- **Peek()**: Check the top element.
- **Two ways to implement**: **Array (fixed size)** and **Linked List (dynamic size).**