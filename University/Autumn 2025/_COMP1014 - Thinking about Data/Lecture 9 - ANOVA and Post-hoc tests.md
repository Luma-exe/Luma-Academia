
> [!faq] About this Lecture
> Class: COMP1014
> Subject: #thinkingAboutData 
> Topics: #math
> Date: 2025-06-05 at 11:17

## Introduction

- The chapter explores the relationship between hair color and pain tolerance.
- Previous studies considered:
    - One qualitative variable (e.g., Iraqi Refugees)
    - Two qualitative variables (e.g., Eel species and habitat)
    - One quantitative and one qualitative variable (e.g., Birth weight and smoking)
    - Two quantitative variables (e.g., Height and income)

## Redhead Pain Threshold Analysis

- The section focuses on whether average pain tolerance varies by hair color, specifically for redheads compared to other hair colors.

### Pain Tolerance and Hair Color

- Data presented in a dot chart displays pain tolerance scores across individuals with different hair colors.
- The main question posed: Does pain tolerance vary by hair color?

### Formalizing the Question

- To test whether pain tolerance varies across groups, we establish:
    - Null hypothesis: $H_0: \mu_1 = \mu_2 = \cdots = \mu_K$ (all group means are equal)
    - Alternative hypothesis: $H_1: \mu_i \neq \mu_j$ for at least one pair of groups (i, j).

## F-statistic and t-statistic

- **Standardized Difference for Two Groups**:
    - The t-statistic is calculated as: $$ t = \frac{\bar{x_1} - \bar{x_2}}{s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} $$
    - Where pooled variance is defined as: $$ s^2_p = \frac{(n_1 - 1) s^2_1 + (n_2 - 1) s^2_2}{n_1 + n_2 - 2} $$

### Extending to Multiple Groups

- For ( K ) groups, with group sample size ( n_k ), sample means ( \bar{x_k} ), and sample standard deviations ( s_k ):
- Global mean: $$ \bar{x} = \frac{1}{n} \sum_{k=1}^{K} n_k \bar{x_k} $$

### Sum of Squares

- **Between Groups**: $$ SS_B = \sum_{i=1}^{K} n_k (\bar{x_k} - \bar{x})^2 $$
- **Within Groups**: $$ SS_W = \sum_{i=1}^{K} (n_k - 1) s^2_k $$

### F-statistic Calculation

- Standardized F-statistic is: $$ F = \frac{SS_B / (K - 1)}{SS_W / (n - K)} $$
    
- For two groups, transitions to: $$ F = t^2 $$
    

## Example and Analysis

- **Data Summary** for Hair Color Pain Tolerance:
    
    - Group means and variances for different hair colors are outlined.
    - Example output:
        - (SS_B = 1360.73), (SS_W = 1001.8)
        - Degrees of freedom ( K = 4 ), total sample size ( n = 19 )
- **Computed F-statistic**: $$ F = \frac{1001.8 / (4 - 1)}{1360.73 / (19 - 4)} \approx 6.791 $$
    

### Using R for F-statistic

- R command:

```R
oneway.test(Pain ~ HairColour, data=hair, var.equal=TRUE)
```

### Permutation-based F-test

- Procedure involves:
    - Randomly permuting group labels
    - Calculating empirical distribution of the F-statistics under the null hypothesis.

## ANOVA Table Representation

- Traditional representation of results:

```plaintext
| Source          | df  | Sum Sq | Mean Sq | F Value | Pr(&gt;F)   |
|------------------|-----|--------|---------|---------|----------|
| Between groups    | K-1 | SS_B   | SS_B / (K-1) | F value | p-value   |
| Within groups     | N-K | SS_W   | SS_W / (N-K) |         |          |
```

## Post-hoc Testing

- **Tukey's Honest Significant Difference (HSD)** test:
    - Identifies which specific pairs differ after ANOVA.
    - Uses: $$ t_{ij} = \frac{\bar{x_i} - \bar{x_j}}{\sqrt{MSE \left(\frac{1}{n_i} + \frac{1}{n_j}\right)}} $$

### Permutation Approach for Tukey’s HSD

- Similar to F-statistic, calculate maximum t-statistic for each permuted dataset.

## Summary

- To test if one or more categories from a set have different means, we calculate the F-statistic.
- ANOVA results are presented in an ANOVA table.
- To identify which pairs have different means, we apply Tukey’s HSD test.

