
> [!faq] About this Definition
> Subject: #dataStructuresAndAlgorthims 
> Topics: #definition  #coding/language/cpp 
> Date: 2025-03-26 at 12:50

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/spZd2rNtze8" frameborder="0" allowfullscreen></iframe>
</div>

# **Understanding Templates in C++**

Templates in C++ allow you to write **generic code** that works with **any data type**. They help **reduce code duplication** and make programs more flexible.

---

### **1. What is a Template?**
A **template** is a blueprint for creating functions or classes that work with **multiple data types**.

**Example (Function Template):**
```cpp
#include <iostream>
using namespace std;

template <typename T>
T add(T a, T b) {
    return a + b;
}

int main() {
    cout << add(5, 10) << endl;     // Works with int
    cout << add(2.5, 3.5) << endl; // Works with double
    return 0;
}
```

**Output:**

```cpp
15
6
```

Here, `T` is a **placeholder** for any data type (`int`, `double`, etc.).

---

### **2. Using Multiple Datatypes**

```cpp
#include <iostream>
using namespace std;

template <typename T, typename U>
auto add(T a, U b) { // Setting this to auto will allow for the compiler to determine what datatype the output is.
    return a + b;
}

int main() {
    cout << add(5, 3.5) << endl; // Works with double
    return 0;
}
```

With this we can mix and match datatypes.

---

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/mQqzP9EWu58" frameborder="0" allowfullscreen></iframe>
</div>

### **3. Class Templates**

Templates also work with **classes**.

**Example (Class Template):**

```cpp
#include <iostream>
using namespace std;

template <typename T>
class Box {
    T value;
public:
    Box(T v) : value(v) {} 
    void show() { cout << "Value: " << value << endl; }
};

int main() {
    Box<int> intBox(100);  // Works with int
    Box<double> dblBox(3.14); // Works with double
    
    intBox.show();
    dblBox.show();
    return 0;
}
```

**Output:**

```cpp
Value: 100
Value: 3.14
```

---



### **4. Why Use Templates?**

- **Avoid Code Duplication** – No need to write separate functions for `int`, `double`, etc.
- **Increases Code Reusability** – Works with multiple data types.
- **Useful for Generic Programming** – Used in data structures (like STL `vector`, `map`, etc.).

---

### **5. Summary of Templates**

- **Templates allow functions and classes to work with any type**.
- **Use `template <typename T>`** to define a template.
- **Reduces redundancy and improves flexibility**.