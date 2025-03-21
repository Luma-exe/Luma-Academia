
> [!faq] About this Lecture
> Class: COMP1014
> Subject: #thinkingAboutData
> Date: 21/02/2025 at ~11:00AM
> Topics:  #coding/r 

## Getting Started with R

- Launch RStudio and create a new script
    - Navigate: **File -> New File -> R Script**
- Set your working directory to keep files organized
    - Recommended: Create a folder for each subject (e.g., "Thinking about Data" in My Documents)
    - To set working directory:
        - In RStudio, go to the **Files** section (bottom-right pane)
        - Click on **More**, select the row, and click **Set as Working Directory**
- Save your script with `.R` extension

## R Syntax

- **Case Sensitivity**: `g` is not `G`
- **Comment Lines**: Start with `#`
- **Assignment Operators**: Use `=` or `&lt;-`
    
    ```r
    a = 10 # or
    b <- 20
    print(a) # [1] 10
    ```
    

## Basic Calculations

- Example calculations:
    
    ```r
    1 + 3    # [1] 4
    10ˆ2    # [1] 100
    sqrt(16) # [1] 4
    ```
    

## Data Types

- **Numeric**: Integer or double
- **Character**: Text
- **Logical**: TRUE / FALSE
    
    ```r
    a = 10
    class(a) # [1] "numeric"
    
    b = "word"
    class(b) # [1] "character"
    ```
    

## Data Structures

### Vectors

- Sequence of data elements of the same type
    
    ```r
    vector1 &lt;- c(329, 45, 12, 28, 6, 78, 98)
    ```
    
- Creating sequences:
    
    ```r
    vecnum <- c(10:16) # Creates a sequence from 10 to 16
    ```
    

### Extracting Elements from Vectors

- Accessing elements using indexing:
    
    ```r
    vector1[1]  # First number: [1] 329
    vector1[c(2, 3)]  # Second and third numbers: [1] 45 12
    ```
    
- Reassigning elements:
    
    ```r
    vector1[3] = 15
    ```
    

### Combining Vectors

- Concatenating vectors:
    
    ```r
    v1 = c(vector1, vecnum)
    ```
    

## Logical Operators

- Basic logical comparisons:
    
    - `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, `!=`
    
    ```r
    a = c(1, 2, 3, 4, 5)
    a[a &gt; 2] # [1] 3 4 5
    ```
    

## Factors

- A factor is a vector used for categorical data
    
    ```r
    e &lt;- factor(c("high", "low", "medium", "low"))
    ```
    

## Matrices

- A 2-dimensional array that must have the same type in all columns
    
    ```r
    x &lt;- c(1, 44)
    y &lt;- c(0, 12)
    b &lt;- rbind(x, y)  # Create matrix by row
    ```
    

### Fetching Elements of a Matrix

- Access elements using coordinates:
    
    ```r
    b[3, 2] # Accesses third row, second column
    ```
    

## Data Frames

- A 2-dimensional structure that can hold different data types
    
    ```r
    d &lt;- data.frame(names = c("Maria", "Juan", "Alba"), 
                     values = c(23, 25, 31), 
                     correct = c(TRUE, TRUE, FALSE), 
                     stringsAsFactors = FALSE)
    ```
    

### Working with Data Frames

- Get number of rows and columns:
    
    ```r
    nrow(d)  # Number of rows
    ncol(d)  # Number of columns
    ```
    
- Extracting patient names based on conditions:
    
    ```r
    d$Name[d$Age &gt; 24] # [1] "Juan" "Alba"
    ```
    

### Additional Queries

- Find patients older than or equal to 25 who are vegetarian:
    
    ```r
    d$Name[d$Age >= 25 & d$Vegetarian == TRUE]
    ```