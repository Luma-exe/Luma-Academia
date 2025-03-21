
> [!faq] About this Lecture
> Class: COMP2009
> Subject: #dataStructuresAndAlgorthims
> Date: 21/02/2025 at ~11:00AM
> Topics: #coding #coding/language/cpp 

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/oz9cEqFynHU" frameborder="0" allowfullscreen></iframe>
</div>


## Unit Introduction
## Components of Learning

- **Lectures:** 2 hours per week (13 lectures)
- **On-Campus Practical:** 2 hours per week
    - Assessable practical tasks: 5 sets (2 marks each)
    - Non-assessable practical tasks: 5 sets
- **Online Tutorial:** Completed during the week
    - Assessable exercises: 5 sets (2 marks each)
    - Non-assessable exercises: 5 sets
- Some tasks may be marked on vUWS or during practical sessions.

## Assessments

- **Components:**
    - Assignment 1: 15%
    - Assignment 2: 15%
    - Practical and tutorial: 20%
    - Final exam: 50%
- **Deadlines:**
    - Late assignments penalized by 10% per day.
    - Notify tutor for late submissions with documentation.

## Surveys

- Two additional surveys (Pre-semester and Post-semester).
- Complete pre-semester survey by the deadline.
- Post-semester survey is available after the final exam.

# Part B Abstract Data Types and Algorithm Design

## Main Content

- Abstract data types
- Algorithm design
- Complexity of algorithms

## Abstract Data Types (ADT)

- Comprehensive collection of data values and operations.
- **Components:**
    - Declaration of data items
    - Declaration of operations
    - Encapsulation of data and operations

## Example of ADT in C++

```cpp
template <class type="">
class Stack {
private:
    Node<type> *top</type></class>;
public:
    Stack(void);
    ~Stack(void);
    bool push(TYPE dataIN);
    TYPE pop();
    TYPE top();
    bool empty(void);
    bool full(void);
    ...
};
```

template struct Node { TYPE data; Node *next; }; ```

## Algorithm Design Example

- Problem: Deliver packages to 100 houses along a road.
- Initial distance calculation:
    - Total distance = 200 km.
    - Profit = $960 after expenses.
- Car constraint leads to revised distance:
    - Total distance = 10,100 km.
    - Profit becomes negative.

### Algorithm Complexity

- Measuring differences between algorithms:
    - Linear vs Quadratic transformations as data size increases (n).

## Growth Rates of Functions

- Complexity growth rates examined with sample algorithms.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc1zCjy-FqK0DYaI22V28-F-MI-WGe_yGemNdHouOk_eXRLsx8C7mNp6PP2osQImC0MH1mnlcR2nKqWFDtZFXkROPvsgzZTbJ0-ZHAd4kHYOwT9sVAHsgRFZv8bIJU2GCBiu58dbw?key=L6wHD48Fb3S7gs4Q_KW4FSod)**
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfL0gae6i5cPSv13cwWr8rKcdH6tAen1gZaMq6I5Z-Znb2K2uZmBiCWxEKuIi5VQ45ULD3aiocn1O5ZbOusI3zbOjGg6hDmueQMsS5Yqlv588qXlrZ3KHK75knm2aqKWZoENXqpCQ?key=L6wHD48Fb3S7gs4Q_KW4FSod)**