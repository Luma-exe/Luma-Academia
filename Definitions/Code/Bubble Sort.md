
> [!faq] About this Definition
> Class: COMP2009
> Subject: #dataStructuresAndAlgorthims 
> Topics: #definition  #coding/language/c #coding/language/cpp 
> Date: 21/03/2025 at 12:50PM

## How does the bubble sort work?

```cpp
// Bubble Sort Example (O(n²))
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]); // Swap adjacent elements
            }
        }
    }
}
```

We subtract 1 (n-1) because we don't need to compare the last element in the array during the first pass. Here's why:

Imagine you have a row of blocks with numbers on them, like this:

`[5, 3, 8, 2]`

Bubble sort works by comparing two blocks at a time and swapping them if they're in the wrong order. For example:

1. Compare the first two blocks (`5` and `3`). Swap them: `[3, 5, 8, 2]`.
2. Compare the next two blocks (`5` and `8`). No swap needed. `[5, 3, 8, 2]`
3. Compare the last two blocks (`8` and `2`). Swap them: `[3, 5, 2, 8]`.

Now, the biggest block (`8`) is already in the correct spot at the end. So, in the next pass, we don't need to check it again. We only need to sort the first three blocks (`[3, 5, 2]`).

This is why we subtract 1 from to skip the last block that is already sorted. On the next pass, we subtract even more (n - i - 1) to skip all the blocks that are already in the right place.

### How It Goes Through Every Element

1. In the first pass (i = 0), the inner loop runs (n - 1) times, comparing and swapping adjacent elements if needed.
2. In the second pass (i = 1), the inner loop runs (n - 2) times, ignoring the last element because it's already sorted.
3. This process continues until the second-to-last pass (i = n - 2), where the inner loop runs just once.

### Why It Works

The key idea is that each pass ensures the largest unsorted element moves to its correct position. This is why the inner loop decreases in size (n - i - 1) there's no need to recheck elements that are already sorted.

### Visualization

Imagine sorting `[5, 3, 8, 4]`:

1. **First Pass**: Compare and swap all adjacent pairs:
    - Compare `5` and `3` → Swap → `[3, 5, 8, 4]`
    - Compare `5` and `8` → No swap → `[3, 5, 8, 4]`
    - Compare `8` and `4` → Swap → `[3, 5, 4, 8]`
2. **Second Pass**: Ignore the last element (`8`) and repeat:
    - Compare `3` and `5` → No swap → `[3, 5, 4, 8]`
    - Compare `5` and `4` → Swap → `[3, 4, 5, 8]`
3. **Third Pass**: Ignore the last two elements (`5, 8`) and repeat:
    - Compare `3` and `4` → No swap → `[3, 4, 5, 8]`