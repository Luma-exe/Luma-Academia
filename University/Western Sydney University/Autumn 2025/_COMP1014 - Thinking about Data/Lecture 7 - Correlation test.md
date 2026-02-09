
> [!faq] About this Lecture
> Class: COMP1014
> Subject: #thinkingAboutData 
> Topics: #math
> Date: 2025-04-16 at 11:28

# Do Taller People Earn More?

## Overview

- Investigation of the relationship between height and income.
- Focus on observational data to identify associations, not causation.
- Reference to previous studies, notably Steckel's work on stature and living standards.
- Dataset includes 1376 observations relating to height and income.

## Analyzing Crab Molting Data

### Dataset Details

- Contains measurements before and after molting for 472 female Dungeness crabs.
- Crabs grow by molting, shedding old shells to allow for growth.

### Observations from Boxplots

- Comparison of pre-molt size ($\text{presz}$) and post-molt size ($\text{postsz}$).
- Average growth post-molt is about 15 mm.
- Assessment of whether smaller crabs grow more or less than larger crabs.

## Scatter Plots

### Purpose of Scatter Plots

- Visual representation of relationships between two quantitative variables.
- Allows us to assess the relationship between pre-molt size and post-molt size.

### Insights from Scatter Plots

- Strong relationship observed: larger pre-molting size correlates with larger post-molting size.
- The strength of the relationship can be qualitatively assessed.

## Correlation

### Definition and Calculation

- Correlation quantifies the linear relationship between two variables.
- For two variables $x$ and $y$ with observations $(x_i, y_i)$, the correlation is calculated as: $$ r = \frac{1}{n-1} \sum_{i=1}^{n} \frac{(x_i - \bar{x})}{s_x} \frac{(y_i - \bar{y})}{s_y} $$ where:
- $\bar{x}$, $\bar{y}$ are sample means.
- $s_x$, $s_y$ are sample standard deviations.
- $n$ is the number of observations.

### Interpretation of Correlation Coefficients

- $r = 1.00$: Perfect increasing linear relationship.
- $r = 0.70$: Strong increasing linear relationship.
- $r = 0.50$: Some increasing linear relationship.
- $r = 0.00$: No detectable relationship.
- $r = -0.50$: Some decreasing linear relationship.
- $r = -0.70$: Strong decreasing linear relationship.
- $r = -1.00$: Perfect decreasing linear relationship.

## Fisher's Exact Test and Confidence Intervals

### Testing the Correlation Hypothesis

- To check if the correlation is statistically different from zero:
    - Null Hypothesis $(H_0)$: $\rho = 0$
    - Alternative Hypothesis $(H_A)$: $\rho \neq 0$

### Simulation Approach

- Permutation test: Randomly reorder one variable to simulate a zero correlation scenario.
- Estimation of p-value based on the distribution of correlations from permutations.

### Confidence Interval for Correlation

- Calculate confidence intervals for correlation coefficients using bootstrap methods:
    - Resample observations while maintaining pairs.
    - Compute correlation for each bootstrap sample.
    - Determine the 95% confidence interval from the bootstrap estimates.

## Relationship Between Height and Income

### Data Overview

- Sample correlation ($r = 0.302$) indicates a weak linear relationship between height and income.

### Hypothesis Testing and P-value Estimation

- Assessing if the correlation coefficient is significantly different from zero through permutation tests.

### Confidence Intervals

- A 95% confidence interval for the true correlation between height and income: $(0.257, 0.352)$.

## Key Takeaways

- Scatterplots are essential for visualizing the relationship between two quantitative variables.
- Correlation quantifies strength and direction of linear relationships.
- Correlation coefficients are limited to the interval $[-1, 1]$, with 0 indicating no correlation.
- Statistical methods like hypothesis testing and bootstrapping can be used to evaluate and confirm correlations in observed data.
- It's crucial to remember that correlation does not imply causation.