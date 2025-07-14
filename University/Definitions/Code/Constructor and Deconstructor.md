
> [!faq] About this Definition
> Subject: #dataStructuresAndAlgorthims 
> Topics: #definition #coding/language/cpp 
> Date: 21/03/2025 at 2:18PM



# Constructors and Destructors in C++

## Definition  
In **C++**, a **constructor** is a special function that is automatically called when an object of a class is created. It is used to initialize objects. A **destructor** is a function that is automatically called when an object is destroyed, used to release resources.

## Constructor  
- A constructor has the **same name as the class**.  
- It **does not have a return type**.  
- It is called automatically when an object is created.  

## Destructor  
- A destructor also has the **same name as the class**, but with a **tilde (~) before it**.  
- It **does not take arguments**.  
- It is called automatically when an object goes out of scope or is explicitly deleted.

## Example: Constructor and Destructor in C++  

```cpp
#include <iostream>
using namespace std;

class MyClass {
public:
    // Constructor
    MyClass() {
        cout << "Constructor called! Object created." << endl;
    }

    // Destructor
    ~MyClass() {
        cout << "Destructor called! Object destroyed." << endl;
    }
};

int main() {
    cout << "Creating object...\n";
    MyClass obj;  // Constructor is called automatically
    
    cout << "End of main function...\n";
    return 0;  // Destructor is called automatically when obj goes out of scope
}```

## Output

```cpp
Creating object...
Constructor called! Object created.
End of main function...
Destructor called! Object destroyed.
```

## Key Points

- Constructors are used for initializing objects (e.g., setting default values).
- Destructors are used for cleanup (e.g., releasing memory).
- Both are automatically called when objects are created or destroyed.
- If no constructor is defined, C++ provides a default constructor automatically.