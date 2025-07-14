
> [!faq] About this Definition
> Subject: #dataStructuresAndAlgorthims 
> Topics: #definition #coding/language/cpp 
> Date: 2025-03-26 at 14:34

# **Understanding Vectors in C++**

Vectors in C++ are **dynamic arrays** that can **resize automatically** when elements are added or removed. They are part of the **Standard Template Library (STL)** and provide many useful functions.

---

### **1. What is a Vector?**
A `vector` is a **dynamic array** that:
- Can **grow and shrink** in size automatically.
- Allows **random access** to elements like an array.
- Provides built-in functions for easy manipulation.

**Including Vectors in C++:**
```cpp
#include <vector>  // Required for using vectors
#include <iostream>
using namespace std;
```

---

### **2. Declaring a Vector**

```cpp
vector<int> numbers;  // Declares an empty vector of integers
vector<string> words; // Declares an empty vector of strings
```

You can also initialize a vector with values:

```cpp
vector<int> numbers = {1, 2, 3, 4, 5};
```

---

### **3. Adding & Removing Elements**

```cpp
vector<int> v;
v.push_back(10);  // Adds 10 to the end
v.push_back(20);  // Adds 20 to the end
v.pop_back();     // Removes last element (20)
```

---

### **4. Accessing Elements**

```cpp
vector<int> nums = {5, 10, 15};

cout << nums[0];      // Access element at index 0 (Output: 5)
cout << nums.at(1);   // Safer way to access index 1 (Output: 10)
cout << nums.front(); // First element (Output: 5)
cout << nums.back();  // Last element (Output: 15)
```

---

### **5. Looping Through a Vector**

Using a `for` loop:

```cpp
for (int i = 0; i < nums.size(); i++) {
    cout << nums[i] << " ";
}
```

Using a range-based `for` loop:

```cpp
for (int num : nums) {
    cout << num << " ";
}
```

---

### **6. Checking Size & Capacity**

```cpp
cout << nums.size();      // Number of elements
cout << nums.capacity();  // Current allocated space
cout << nums.empty();     // Checks if vector is empty (returns true/false)
```

---

### **7. Clearing & Resizing**

```cpp
nums.clear();   // Removes all elements
nums.resize(10, 0); // Resizes vector to 10 elements, filling new ones with 0
```

---

### **8. Summary of Vectors**

- **Vectors are dynamic arrays** that grow/shrink automatically.
- **Use `push_back()` to add** and **`pop_back()` to remove** elements.
- **Use `.size()`, `.empty()`, and `.clear()`** for vector properties.
- **Safer to use `.at(index)`** instead of `[]` for accessing elements.