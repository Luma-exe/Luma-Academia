> [!faq] About this Definition
> Class: COMP2009
> Subject: #dataStructuresAndAlgorthims 
> Date: 21/02/2025 at ~11:00AM
> Topics: #definition  #coding/c #coding/cpp 

## What is a Linear List?  
A **linear list** (or linear data structure) is a collection of elements **arranged in a sequential order**. Each element has a unique **predecessor** (except the first) and a **successor** (except the last). The order of elements in the list is **determined by their logical relationships**, not by physical memory locations.

### Key Characteristics  
- **Sequential arrangement** – Elements follow a specific order.  
- **Single connection per element** – Each element (except the first and last) has exactly one predecessor and one successor.  
- **Fixed or dynamic size** – Some implementations (like arrays) have fixed sizes, while others (like linked lists) can grow dynamically.  

---

## Types of Linear Lists  

### 1. **Array-Based Lists**  
- Uses an **array** to store elements in contiguous memory locations.  
- Allows **random access** (direct access to any element using an index).  
- **Fixed size** (cannot grow dynamically unless using dynamic memory allocation).  
- **Operations:**
  - **Insertion** – Can be expensive if elements must be shifted.  
  - **Deletion** – Requires shifting elements to maintain order.  
  - **Traversal** – Very efficient (`O(n)`).  
  - **Searching** – `O(1)` for direct indexing, `O(n)` for unordered search, `O(log n)` for binary search in ordered lists.  

### 2. **Linked Lists**  
- Uses **nodes** where each node contains **data** and a pointer to the next node.  
- Elements **do not need contiguous memory locations**.  
- **Dynamic size** – Can grow or shrink as needed.  
- **Operations:**
  - **Insertion** – More efficient than arrays (`O(1)` at the beginning).  
  - **Deletion** – More efficient than arrays but requires traversal (`O(n)`).  
  - **Traversal** – `O(n)`, since nodes are accessed sequentially.  
  - **Searching** – `O(n)` in an unordered list.  

---

## Operations on Linear Lists  

### 1. **Insertion**  
- Adding an element to the list at a specific position.  
- In **arrays**, inserting at the end is `O(1)`, but inserting in the middle is `O(n)`.  
- In **linked lists**, inserting at the beginning or end is `O(1)`, while inserting in the middle requires traversal (`O(n)`).  

### 2. **Deletion**  
- Removing an element from the list.  
- Requires **searching** for the element first (`O(n)`).  
- In **arrays**, deletion requires shifting elements (`O(n)`).  
- In **linked lists**, deletion is `O(1)` if the node is already found but `O(n)` if searching is required.  

### 3. **Retrieval (Searching)**  
- Finding an element in the list using **linear search (`O(n)`)** or **binary search (`O(log n)`, only for sorted arrays)**.  
- Linked lists require **sequential searching (`O(n)`)**, as they do not support direct indexing.  

### 4. **Traversal**  
- Visiting every element in the list.  
- Arrays use **index-based traversal (`O(n)`)**, while linked lists require **pointer-based traversal (`O(n)`)**.  

---

## Comparison of Array-Based and Linked Lists  

| Feature          | Array-Based List | Linked List |
|-----------------|----------------|------------|
| **Memory Allocation** | Static (fixed size) | Dynamic (grows as needed) |
| **Access Time** | `O(1)` (random access) | `O(n)` (sequential access) |
| **Insertion (Beginning)** | `O(n)` (shifting required) | `O(1)` |
| **Insertion (Middle)** | `O(n)` | `O(n)` |
| **Insertion (End)** | `O(1)` (if space available) | `O(1)` |
| **Deletion (Beginning)** | `O(n)` (shifting required) | `O(1)` |
| **Deletion (Middle)** | `O(n)` | `O(n)` |
| **Deletion (End)** | `O(1)` | `O(n)` (traversal required) |
| **Search (Unordered)** | `O(n)` | `O(n)` |
| **Search (Ordered)** | `O(log n)` (binary search) | `O(n)` |

---

## When to Use Which?  

- **Use Arrays if:**
  - You need **fast random access** (`O(1)` indexing).
  - The number of elements is **fixed or small**.
  - You do not need frequent insertions/deletions in the middle.

- **Use Linked Lists if:**
  - You need **dynamic memory allocation** (no fixed size).
  - Insertions and deletions happen **frequently** in the middle of the list.
  - Memory usage is a concern (linked lists reduce memory wastage in certain cases).
