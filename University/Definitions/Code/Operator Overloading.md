
> [!faq] About this Definition
> Subject: #dataStructuresAndAlgorthims 
> Topics: #definition #coding/language/cpp 
> Date: 20/03/2025 at 1:18PM

## Definition  
**Operator overloading** allows us to redefine how operators work for user-defined types (classes). This makes it possible to use operators (`+`, `-`, `*`, `==`, etc.) with objects just like with built-in types.

## Syntax  
```cpp
return_type operator symbol (arguments) {
    // Define operation
}```

- The keyword `operator` is followed by the symbol we want to overload.
- It must be a **member function** or a **friend function**.
- Some operators (`=`, `()`, `[]`, `->`) **must be member functions**.
- The overloaded operator must have at least one user-defined type operand.

## Example: Overloading `+` for a Class

```cpp
#include <iostream>
using namespace std;

class Complex {
public:
    double real, imag;

    // Constructor
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}

    // Overloading the + operator
    Complex operator+(const Complex& other) {
        return Complex(real + other.real, imag + other.imag);
    }

    // Display function
    void display() {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(3, 2), c2(1, 7);
    Complex c3 = c1 + c2;  // Calls the overloaded + operator

    cout << "Result: ";
    c3.display();
    return 0;
}
```

## Output

```cpp
Result: 4 + 9i
```

## Example: Overloading `<<` (Stream Insertion Operator)

The `<<` operator is overloaded using a **friend function** to enable `cout` to work with objects.

```cpp
#include <iostream>
using namespace std;

class Complex {
public:
    double real, imag;
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}

    // Friend function for << operator
    friend ostream& operator<<(ostream& out, const Complex& c) {
        out << c.real << " + " << c.imag << "i";
        return out;
    }
};

int main() {
    Complex c(3, 5);
    cout << "Complex number: " << c << endl;  // Calls overloaded <<
    return 0;
}
```

## Output

```cpp
Complex number: 3 + 5i
```

## Key Points

- Operator overloading allows intuitive use of operators with objects.
- Cannot create new operators, only existing ones can be overloaded.
- Some operators cannot be overloaded (e.g., `::`, `.*`, `sizeof`).
- Stream operators (`<<`, `>>`) are overloaded using friend functions.