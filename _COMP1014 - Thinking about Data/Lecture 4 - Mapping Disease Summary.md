
> [!faq] About this Lecture
> Class: COMP1014
> Subject: #thinkingAboutData
> Topics: #math
> Date: 2025-03-27 at 10:30

## Kidney Cancer in the US

- Highest kidney cancer rates are concentrated in certain regions.
- Lowest kidney cancer rates are also found in similar regions.
- This observation raises questions about statistical reasoning and population sizes.
- Simulated experiments show that small populations tend to have more extreme variations.

## The Binomial Model

- A binomial experiment satisfies:
    - $n$ independent trials.
    - Each trial has the same probability $p$ of success.
    - We count the number of successes.
- Formula for binomial probability: where:
    - $\binom{n}{k} = \frac{n!}{(n-k)!k!}$ is the number of ways to choose $k$ successes from $n$ trials.

### Expected Value and Variance

- **Expected value**: $E(X) = np$
- **Variance**: $Var(X) = np(1 - p)$

### From Counts to Rates

- Converting counts to rates: $ \frac{k}{n} $.
- Expected value for rate: $p$.
- Variance for rate: $\frac{p(1 - p)}{n}$.
- Larger populations yield smaller variance.

## Chi-Squared Revisited

- Used to test independence between categorical variables.
- Example: Disease rates in different counties.
- Chi-squared test statistic: where:
    - $O$ = observed frequency.
    - $E$ = expected frequency.

## Poisson Distribution

- Used for modelling count data over a given interval.
- Probability mass function: where:
    - $\lambda$ = expected number of occurrences.
- **Expected value**: $E(X) = \lambda$.
- **Variance**: $Var(X) = \lambda$.

### Poisson Approximation to Binomial

- If $n$ is large and $p$ is small, then $X \sim \text{Bin}(n, p)$ can be approximated by $\text{Poisson}(\lambda = np)$.

## Confidence Intervals

### Binomial Confidence Intervals

- **Bootstrap method**: Resample with replacement, compute confidence intervals.
- **Standard error method**:

### Poisson Confidence Intervals

- **Bootstrap method**: Resample, compute mean.
- **Standard error method**:

### General Confidence Intervals

- For any parameter $\beta$: where $z_{\alpha/2}$ is the critical value:
    - 95% CI: $1.96$
    - 90% CI: $1.645$
    - 99% CI: $2.576$

## Choropleth Maps

- Used to visualize spatial distributions of data.
- Example: Mapping disease rates by county.
- Requires matching data names to geographic regions.
- Colours represent intensity of the variable being mapped.

## Summary

- Binomial model describes number of successes in independent trials.
- Chi-squared test helps compare proportions between groups.
- Poisson distribution models count data with an expected rate.
- Confidence intervals estimate population parameters.
- Choropleth maps provide visual representation of spatial data trends.
