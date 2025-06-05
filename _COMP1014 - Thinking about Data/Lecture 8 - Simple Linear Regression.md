
> [!faq] About this Lecture
> Class: COMP1014
> Subject: #thinkingAboutData
> Topics: #math
> Date: 2025-05-05 at 12:57

## ## Crabs Molting

### Overview

- Examines crabs' size differences before and after molting.
- Data includes multiple samples (n = 5, 8, 20, 100).
- Adjustments in size appear correlated with pre-molt size.

### Correlation Discussion

- Possible correlation types to consider:
    - Constant increase: e.g., a fixed increase of 5 mm.
    - Percentage increase: e.g., a 10% increase relative to pre-molt size.
- Visualization: Pre-molt size vs. Post-molt size suggests a linear relationship near $y = x$.

## Straight Lines

### Mathematical Concept

- A straight line can be described using the equation $y = a + bx$.
    - $a$: y-intercept.
    - $b$: slope (change in $y$ per unit change in $x$).
- Not all lines fit this equation (e.g., vertical lines).

### Problem: Estimating Line Parameters

- Determine values for $a$ and $b$ for a straight line given data.

## Simple Linear Regression

### Goal

- Estimate the line representing the relationship between dependent ($y$) and independent ($x$) variables.

### Regression Equation

- The general form is: $$ y = a + bx + \epsilon $$
    - Where $\epsilon$ is the error term.

### Least Squares Method

- Objective: Minimize the Residual Sum of Squares (RSS): $$ RSS = \sum_{i=1}^{n} e_i^2 = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 $$
- Residuals $e_i$: Differences between observed and predicted values.

### Estimating Parameters

- Best fit parameters: $$ \hat{b} = \frac{SS_{XY}}{SS_{XX}}, \quad \hat{a} = \bar{y} - \hat{b} \bar{x} $$
- Where:
    - $SS_{XY} = \sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})$
    - $SS_{XX} = \sum_{i=1}^{n} (x_i - \bar{x})^2$

### Example Calculation: Malting Crabs Data

- Given:
    - $\bar{x} = 129.21$, $SS_{XX} = 118542.69$,
    - $\bar{y} = 143.9$, $SS_{YY} = 100957.55$,
    - $n = 472$, $SS_{XY} = 108343.84$.
- Calculate:
    - $\hat{b} = \frac{108343.84}{118542.69} = 0.914$.
    - $\hat{a} = 143.9 - 0.914 \times 129.21 = 25.803$.

## Slope and Intercept Interpretation

### Slope Interpretation

- Indicates expected change in $y$ with a unit change in $x$.
    - E.g., For crabs, every mm in pre-molt size relates to an average post-molt increase of 0.914 mm.

### Intercept Interpretation

- Represents expected $y$ value when $x = 0$.
    - Note: Sometimes may have no physical meaning (e.g., pre-molt size of zero).

### Example Predictions

- Given $\hat{a}$ and $\hat{b}$, estimate $y$ for specific $x$ values.
    - For $x = 120$: $\hat{y} = 25.803 + 0.914 \cdot 120 = 135.48$ mm.

## Hypothesis Testing

### Slope Testing

- Tests whether slope $b$ differs from zero (indicating no relationship) or one.
- For crabs, examine:
    - $H_0: b = 1$ vs. $H_a: b \neq 1$.
- Calculate $p$ value using the permutation approach.

### Example Data Analysis

- For heights and earnings, least squares slope is $1571.05$, suggesting earnings increase by $1571$ for every inch of height.
- Hypothesis testing occurs to validate if this relationship holds in the population.

## Confidence Intervals

### Calculation of Confidence Intervals for Slope

- Use bootstrap resampling for CI estimation of the slope.
- Confidence intervals can indicate more about relationship significance.

### Example Bootstrap Method

- Sample with replacement from pairs of $(x_i, y_i)$.
- Compute slopes from resampled data to generate a CI.

## Residuals & Diagnostics

### Understanding Residuals

- Define $e_i = y_i - \hat{y}_i$ as the difference between actual and fitted values.
- Examine residuals to ensure they are randomly scattered.

### Common Residual Issues

- Patterns such as funneling indicate model inadequacies or heteroscedasticity.

### Residual Sum of Squares (RSS)

- RSS measures how well the model captures variability.

### R-squared Explanation

- $R^2$ indicates the proportion of variation in y explained by x: $$ R^2 = 1 - \frac{RSS}{SS_{Total}}, \quad SS_{Total} = \sum_{i=1}^{n} (y_i - \bar{y})^2 $$

## Prediction and Normal Theory Approximations

### Predicting Values

- Use fitted line parameters to predict new values of $y$ for specified $x$ values.

### Confidence Intervals for Predictions

- Construct CI for predictions using a bootstrap approach.

### Normal Theory Approximations

- The slope estimator $\hat{b}$ follows a t-distribution under normality assumptions.
- Confidence intervals and tests are based on this approximation: $$ \hat{b} \pm t_{n-2, \alpha/2} \cdot \frac{s}{\sqrt{SS_{XX}}} $$

## Summary

- Simple linear regression establishes a statistical relationship between two variables.
- Key measures such as slope, intercept, confidence intervals, and residual diagnostics provide analytical insights.
- Model evaluation should include R-squared as a measure of fit and residuals for model adequacy.
