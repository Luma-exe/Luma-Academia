
> [!faq] About this Definition
> Subject: #systemsProgramming1 #dataStructuresAndAlgorthims 
> Topics: #definition  #coding/language/c #coding/language/cpp 
> Date: 2025-03-21 at 17:49

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ObUUe9ujYoY" frameborder="0" allowfullscreen></iframe>
</div>

# **Understanding `struct` in C**

A **`struct` (structure)** in C is a way to group **multiple variables** of different types under one name. It's useful when you need to store related data together.

---

## **1. Declaring a `struct`**
A structure is defined using the `struct` keyword:

```c
struct Car {
    char brand[20];  // String (array of characters)
    int speed;       // Integer
    float price;     // Float
};
```

This `struct` groups **brand, speed, and price** into one entity called `Car`.

---

## **2. Creating and Accessing a `struct`**

To use a `struct`, you **declare a variable** of that type:

```c
struct Car myCar;  // Create a Car variable

// Assign values to the fields
strcpy(myCar.brand, "Toyota");
myCar.speed = 200;
myCar.price = 25000.50;

// Print values
printf("Brand: %s\n", myCar.brand);
printf("Speed: %d km/h\n", myCar.speed);
printf("Price: $%.2f\n", myCar.price);
```

**Accessing fields:**  
Use the `.` (dot) operator:

- `myCar.brand` → Access **brand**
- `myCar.speed` → Access **speed**
- `myCar.price` → Access **price**

---

## **3. Using `struct` with Pointers**

You can use **pointers** to access struct members:

```c
struct Car *ptr = &myCar; // Pointer to myCar

// Access fields using '->' (arrow operator)
printf("Brand: %s\n", ptr->brand);
printf("Speed: %d km/h\n", ptr->speed);
printf("Price: $%.2f\n", ptr->price);
```

- `ptr->brand` is the same as `(*ptr).brand`
- The `->` operator is used to access members via pointers.

---

## **4. Initializing a `struct`**

Instead of assigning values separately, you can initialize the struct directly:

```c
struct Car myCar = {"Tesla", 300, 59999.99};
```

---

## **5. `typedef` for Simplified Structs**

Using `typedef`, you can create an alias for the struct type:

```c
typedef struct {
    char name[30];
    int age;
} Person;
```

Now you can declare variables without `struct`:

```c
Person p1 = {"Alice", 25};
printf("%s is %d years old.\n", p1.name, p1.age);
```

![[Lecture 2 - Pointers and Data Structures#typedef]]

---
## **6. `struct` Inside Another `struct`**

You can nest structures:

```c
struct Engine {
    int horsepower;
    float fuelCapacity;
};

struct Car {
    char brand[20];
    struct Engine engine; // Nested struct
};

struct Car myCar = {"Ford", {350, 50.5}};
printf("Car: %s, HP: %d\n", myCar.brand, myCar.engine.horsepower);
```

This allows **complex data grouping**.

---

## **7. `struct` in Arrays**

You can create an array of structs:

```c
struct Car cars[2] = {
    {"BMW", 250, 40000},
    {"Mercedes", 280, 55000}
};

printf("First car: %s\n", cars[0].brand);
```

---

### **Summary**

| Feature           | Example                                      |
| ----------------- | -------------------------------------------- |
| Declare struct    | `struct Car { char brand[20]; int speed; };` |
| Create variable   | `struct Car myCar;`                          |
| Access fields     | `myCar.speed = 200;`                         |
| Pointer to struct | `ptr->brand` instead of `(*ptr).brand`       |
| Nested struct     | `struct Car { struct Engine engine; };`      |
| Use `typedef`     | `typedef struct { int x; } Point;`           |
| Struct array      | `struct Car cars[10];`                       |