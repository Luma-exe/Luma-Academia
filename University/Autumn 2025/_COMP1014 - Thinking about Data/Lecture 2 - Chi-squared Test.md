
> [!faq] About this Lecture
> Class: COMP1014
> Subject: #thinkingAboutData
> Date: 21/02/2025 at ~11:00AM
> Topics: #coding/language/r #math

## 2.1 Iraqi Refugees

### Overview

- Study by Uribe Guajardo et al. (2016) assessed distress levels in 443 Iraqi refugees.
- Distress levels measured using the K10 psychological instrument, categorized as:
    - Low
    - Moderate
    - High
    - Very High

### Distress Levels Summary

- Count data for Iraqi refugees (in number of individuals):
    - Low: 123
    - Moderate: 70
    - High: 93
    - Very High: 157

### Comparison with Australian Population

- AIHW data using K10:
    - Low: 70.65%
    - Moderate: 18.50%
    - High: 7.41%
    - Very High: 3.43%

## 2.2 Bar Plots

### Purpose of Bar Plots

- Ideal for visualizing counts associated with categorical data.
- Provides clearer interpretation compared to tables.

### Types of Bar Plots

- Vertical and Horizontal representations of data:

```plaintext
Vertical Barplot
low moderate high very high
0 50 100 150        (Iraqi Refugee Distress)
```

Horizontal Barplot low moderate high very high 0 50 100 150 (Iraqi Refugee Distress) ```

### Comparison Bar Plots

- Utilize percentages for refugee distress compared to AIHW:

```plaintext
Refugees vs. Australian Population
low moderate high very high
0 10 20 30 40 50 60 70  (AIHW Refugees)
```

## 2.3 Comparison to Population

### Question of Interest

- Is there a difference in distress distribution between Iraqi refugees and the Australian population?

### Simulation Technique

- Randomly allocate 443 individuals across four distress categories based on AIHW proportions.
- Calculate expected counts based on AIHW percentages.

### χ² Distance Calculation

- Formula:

$χ² = ∑ (O_i - E_i)² / E_i$


### Expected Counts

- Calculated for refugee categories based on AIHW percentages:
    - Low: 312.99
    - Moderate: 81.96
    - High: 32.84
    - Very High: 15.20

### Analysis of Simulated Data

- Simulate counts and calculate χ² distance to compare against actual displaced person's distress counts.

## 2.4 Eels - Comparing Two Sets of Counts

### Overview of Eel Species

- Two species observed in three habitats:
    - G.moringa
    - G.vicinus

### Eel Counts Summary

```plaintext
Habitat Counts:
Border: G.moringa 264, G.vicinus 161
Grass: G.moringa 127, G.vicinus 116
Sand: G.moringa 99, G.vicinus 67
```

### Chi-Square Analysis

- Need to validate if species distributions differ across habitats via simulation and expected counts.

### Expected Counts

- Derived from aggregating counts across species and calculating proportional distributions across habitats.

### Chi-Squared Distance for Eel Data

- Conduct multiple simulations to generate expected counts and calculate χ² distance for actual versus expected counts.

## 2.5 Chi Square Distributions

### Summary of Chi-Square Hypothesis Testing

1. Compute summary statistics (e.g., χ² distance).
2. Generate simulations under the null hypothesis.
3. Compare observed statistic to simulation results.

### Types of Chi-Square Tests

- For comparing to a known distribution:
    - Use df = number of categories - 1.
- For two categorical distributions:
    - df = (number of rows - 1) * (number of columns - 1).


## How to write Conclusions

### Example of how to write a conclusion:
Based on the sample data and p-value being (0) calculated, with significance level of 5%, we can reject the null hypothesis that the distribution of a refugee's distress (levels) DO differ from that of the Australian Population

## Conclusion

- Categorical data analysis is crucial for interpreting distributions and comparing datasets.
- Using visualizations like bar plots alongside statistical methods such as chi-square tests can effectively reveal insights about categorical data populations.