
> [!faq] About this Lecture
> Class: COMP2009
> Subject: #dataStructuresAndAlgorthims
> Topics: #coding/language/cpp 
> Date: 2025-04-09 at 14:01

## Main Content of the Last Lecture

- Recursion techniques
- Implementation of recursion
- Case studies:
    - Monte Carlo Tree Search
    - Minimax Tree Search

## The CS/AI Miracles

- Binary search: Reduced complexity from 1 billion to 30.
- DFS & BFS: Unbelievably easy and powerful techniques.
- Heuristic Search: Mimics human intelligence in coding.
- A* search: Guarantees the best pathfinding.
- Monte Carlo Tree Search: Extremely versatile algorithm.
- Recursion: Enables simple code to solve complex problems (e.g., Hanoi Tower, MCTS, Minimax, Quick Sort, binary trees).

## Main Content of This Lecture

- Hashing techniques
    - Hash function
    - Collision resolution
        - Closed hashing
        - Open hashing
- Example of space-time tradeoff
- Difficulty factor: 4.5 stars

## Motivation of Hashing

- Efficient searching algorithms in various real-world applications:
    - Finding a book in a library: Use category number.
    - Finding a seat in a cinema: Use seat number.
    - Locating a medical record: Use Medicare number.
    - Shopping in a supermarket: Use aisle/shelve numbers.
- Objective: Achieve searching complexity of O(1).

## Hashing Keys

### Key Concepts

- **Naive Idea**: Use the address of the data item as the key, but keys may become unstable upon deletions or movements.
- **Better Idea**: Use logical keys that stay relatively stable over time (e.g., car registration numbers, student IDs).

### Hashing Basics

- Hashing is a technique for storing and retrieving data associated with keys.
- A **hash function** maps each key to an address for data storage.
- A hash function ( f(x) ) can be many-to-one (multiple keys mapping to the same bucket).

### Hash Tables

- A **hash table** maps keys to addresses for efficient data storage and retrieval.
- Uses a hash function to compute an index or hash code.
- Ideal average search complexity: O(1).
- Challenge: The number of possible keys often exceeds the storage capacity.

### Hashing Problems

- **Collision**: Multiple keys hashing to the same location (synonyms).
- **Overflow**: More keys hash to a bucket than it can contain.

## Hash Functions

### Aspects of Hash Technology

- Creation of hash function
- Collision resolution based on keys' characteristics and randomness.

### Common Hash Functions

- **Direct Method**: The key is the address directly; only suitable for small, stable data.
- **Digit-Extraction Method**: Use selected digits from the key.
- **Midsquare Method**: Square the key and select the middle digits.
- **Rotation Method**: Rotate key digits to improve distribution.

### Typical Hash Method (Division)

- **Division Hash Function**: [ f(k) = k \mod D ]
    - ( k ): the key
    - ( D ): the storage size (preferably a prime number)

### Example of Modulo Division Hash Function

- If ( D = 12 ):
    - Hashing keys: 34, 67, 82, 6, 122, 37, 30 results in ( f(k) = 10, 7, 10, 6, 2, 1, 6 ).
- If ( D = 13 ):
    - Hashing results in ( f(k) = 8, 2, 4, 6, 5, 11, 4 ).

## Collision Resolution

### Two Types of Collision Resolution

- **Closed Hashing**: Resolves collisions within the array.
- **Open Hashing** (Chaining): Uses a linked list to store collisions.

### Open Hashing (Chaining)

- Separate area for collision storage.
- Contains pointers to linked lists where synonyms are stored.

### Closed Hashing (Open Addressing)

- Searches for unoccupied locations within the array when collisions occur.
- Typical approaches:
    - Linear Probing
    - Quadratic Probing

#### Linear Probing

- Upon collision, checks for the next free spot.
- Problem: Primary clustering (advancing to the next free index).

##### Example of Linear Probing

- **Insert Keys**:
    - ( k = 33, 44, 22 ) hashed to positions.
    - If position 0 is occupied, check 1, then 2, etc.

#### Quadratic Probing

- The increment is the square of the probe number (e.g., +1², +2²).
- Can still lead to clustering but is generally better than linear probing.

### Search Operations in Hash Tables

- **Linear Probing**:
    
    - Check home address, then next addresses until found or an empty cell is reached.
- **Quadratic Probing**:
    
    - Check home address, then using quadratic increments until found or an empty cell is encountered.

### Deleting from a Hash Table

- **Closed Hashing**:
    - Mark slots as occupied, deleted, or empty.
    - Allow new elements to fill deleted slots.

### Average Search Complexity in a Hash Table

- **Load Factor (( \alpha ))**: Represents the average number of comparisons.

## STL Implementation of Hashtable

### C++

```cpp
#include <map>
```

unordered_map<keytype, datatype=""> my</keytype,>Map; myMap.insert(pair<string, int>("Down", 5)); myMap.insert(pair<string, int>("Left", -2)); ```

### Java

```java
Hashtable<String, Integer> myHashtable = new Hashtable<>();
myHashtable.put("Down", 5);
myHashtable.put("Left", -2);
```

### Finding and Removing Data

- Finding:

```cpp
unordered_map<string, int>::iterator it;
it = myMap.find("Down");
if (it != myMap.end()) cout << "Found!" << endl;
else cout << "Not Found!" << endl;
```

- Traversal:

```cpp
for (it = myMap.begin(); it != myMap.end(); ++it) {
    cout << it->first << " " << it->second;
}
```

## Readings

- Read Chapter 9 of the textbook.
- Review the code presented in this lecture.
- Assignment 1 is due next week. Late submissions incur penalties.