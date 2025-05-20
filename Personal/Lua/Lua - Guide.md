# 🧠 Object-Oriented Programming (OOP) in Lua for FiveM

## 📘 What is OOP?

**Object-Oriented Programming (OOP)** is a way to organize code by grouping related data and functions into **objects**. Each object is a self-contained unit that can manage its own state and behavior.

In Lua (especially in FiveM), we simulate OOP using **tables** and **metatables**.

---

## 💡 Why Use OOP in Lua?

OOP is useful because it allows you to:

- Group related data and behavior (e.g., Race, Vehicle, Player).
- Avoid passing variables like `vehicleId` between multiple functions.
- Keep code modular and organized.
- Reuse and extend logic easily.
- Track and manage state (e.g., checkpoints, plate changes) in one place.

---

## 🔧 How OOP Works in Lua

Lua doesn’t have classes, but we fake it using:

- **Tables** to hold data and methods
- **Metatables** to simulate inheritance and prototypes
- The **`:` (colon)** to define methods that automatically receive `self`

---

## 🧱 Basic OOP Pattern in Lua

```lua
MyClass = {}
MyClass.__index = MyClass

function MyClass:new()
    local obj = setmetatable({}, MyClass)
    obj.example = "Hello"
    return obj
end

function MyClass:printExample()
    print(self.example)
end

-- Usage
local instance = MyClass:new()
instance:printExample() -- prints "Hello"
