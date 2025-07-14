
> [!faq] About this Lecture
> Class: COMP1014
> Subject: #thinkingAboutData
> Topics: #math
> Date: 2025-04-09 at 13:45

## 5.1 Kidney Cancer in the US

### High Kidney Cancer Rates

- Map highlights the top 10% of US counties with the highest adjusted kidney cancer rates.
- **Observation**: Concentration in the mid-west.
    - Suggests investigation into potential causes for high rates.

### Low Kidney Cancer Rates

- Map highlights the bottom 10% of US counties with the lowest adjusted kidney cancer rates.
- **Observation**: Similar geographic trends in both highest and lowest rates.
- **Simulation Setup**:
    - Simulate disease occurrence in fictional cities (A–J) with a disease rate of 10%.
    - Each individual has a 10% chance of getting the disease.
    - Repeat simulation ten times for better estimation of rates.

### Simulated Disease Rates

- After 10 simulations, rates tend to show minimum and maximum estimates in the left half of the “cities”.
- Further simulation with 1000 trials is suggested.

## 5.2 The Binomial Model

### Introduction to the Binomial Model

- Fundamental for answering various probabilistic questions related to independent events.

### Coin Tossing Examples

- Complete example of tossing a coin 3 times yields outcomes: TTT, TTH, THT, HTT, THH, HTH, HHT, HHH.
- Distribution of heads counts:
    - 0 heads: 1 way
    - 1 head: 3 ways
    - 2 heads: 3 ways
    - 3 heads: 1 way
- **Probabilities**:
    - Probability of 0 heads: $P(0) = \frac{1}{8}$
    - Probability of 1 head: $P(1) = \frac{3}{8}$
    - Probability of 2 heads: $P(2) = \frac{3}{8}$
    - Probability of 3 heads: $P(3) = \frac{1}{8}$

### Binomial Distribution

- Conditions:
    - $n$ independent events with same probability $p$ of success.
- Probability of $k$ successes from $n$ trials: $$ P(k) = \binom{n}{k} p^k (1-p)^{n-k} $$

### Expected Value and Variance

- Expected Value: $$ E[X] = n \cdot p $$
- Variance: $$ Var[X] = n \cdot p \cdot (1 - p) $$

## 5.3 Chi-Squared Revisited

### Comparing Proportions

- Example using two counties (Trump and Clinton) to evaluate disease rate differences.
- Data structured in contingency form for Chi-squared test.

### Chi-Squared Test Representation

- Calculation based on disease presence in both populations:
    - Trump: 12 with disease out of 100 total
    - Clinton: 188 with disease out of 1000 total
- **Result**:
    - $\chi^2$ statistic and corresponding p-value.

## 5.4 Poisson Distribution

### Introduction to Poisson Distribution

- Used for counting occurrences of events over intervals (e.g., number of cars passing an intersection).
- Poisson probability formula: $$ P(k) = \frac{\lambda^k e^{-\lambda}}{k!} $$
    - where $\lambda$ is the expected count.

### Expected Value and Variance

- For Poisson:
    - Expected value: $$ E[X] = \lambda $$
    - Variance: $$ Var[X] = \lambda $$

## 5.5 Poisson and Binomial Confidence Intervals

### Confidence Intervals for Binomial Proportions

- Point estimate computed from sample proportion $\hat{p}$.
- Approximate 95% confidence interval formula: $$ \hat{p} - 1.96 \sqrt{\frac{\hat{p}(1 - \hat{p})}{n}} < p < \hat{p} + 1.96 \sqrt{\frac{\hat{p}(1 - \hat{p})}{n}} $$

### Bootstrap Confidence Intervals

- Resampling method to derive confidence intervals either for Binomial or Poisson distributions based on observations.
- Steps for Bootstrap:
    1. Resample with replacement.
    2. Compute means.
    3. Repeat to get distribution of bootstrap proportions.

## 5.6 Choropleth Maps

### Choropleth Mapping

- Used for visualizing geographic data related to disease rates.
- R code example provided for generating state level maps using US data.
- Data formatting and coloring based on statistical measures (e.g., percent of high school graduates).

## Summary

- Binomial model used for successes in independent trials, parameterized by $p$ and $n$.
- Key methodology for hypothesis testing of proportions and reliance on both Binomial and Poisson distributions.
- Various methods (bootstrap and analytical) for constructing confidence intervals provide flexibility in statistical analysis.
- Visualization through choropleth maps facilitates comprehension of geographic disparities related to health outcomes.

