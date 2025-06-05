
> [!faq] About this Lecture
> Class: COMP1014
> Subject: #thinkingAboutData 
> Topics: #math
> Date: 2025-06-05 at 11:17

## Binomial Revisited

- The **Binomial distribution** models events with:
    - Probability of success $p$
    - Number of trials $n$
    - Counting the successes $k$
- For a fair coin toss, $p = \frac{1}{2}$.
- The probability of getting exactly $k$ successes in $n$ trials is given by: $P(k) = \binom{n}{k} p^k (1 - p)^{n - k}$
- **Question**: What is the chance of getting 60 or more heads when flipping a coin 100 times?
    - Requires calculating $P(60)$, $P(61)$, ..., $P(100)$ and summing these probabilities.

### Historical Note

- **de Moivre** discovered a curve modeling Binomial probabilities, which can approximate calculations of probabilities such as 60 or more heads.
- This approximation works even for $p \neq \frac{1}{2}$, e.g., $p = 0.3$.

## Galton Machine

- The **Galton Machine**, designed by **Francis Galton**, illustrates the Binomial distribution.
    - Trials $n$ = number of pins.
    - Probability of success $p$ = chance of the ball bouncing to the right.

## Astronomical Errors

- Errors in astronomical measurements:
    - Symmetrically distributed (positive and negative).
    - More frequently near zero.
    - Frequency declines further from zero.
- **Gauss** proposed the **Normal distribution** to model these errors, also known as the **Gaussian distribution**.

## The Normal Distribution

- The normal density function is: $f(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}}$
- **Key terms**:
    - _Random Variable (X)_: Represents counts or measurements (e.g., heads out of 100 tosses).
    - _Probability of X being k_ (meaningful for discrete distributions).

### Properties of Normal Distribution

- $X$ can take on any real value between $-\infty$ and $\infty$.
- Probability of exact $x$ cannot be directly calculated; we consider:
    - $P(X > a)$ or $P(X < b)$.

## Normal Probabilities

- Cumulative probabilities over intervals, computed via areas under the curve: $P(X < b) = \text{Area under the normal curve up to } b$
- **R Functions**:
    - `pnorm(b)` computes probabilities.

### Example Calculation for Binomial Approximation

- For the question regarding heads in coin toss:
    - Mean $\mu = np = 50$
    - Variance $\sigma^2 = np(1 - p) = 25$
- Transform to Standard Normal: $Z = \frac{(X - \mu)}{\sigma}$
- For $P(X > 60)$, we set: $P(Z > 2)$
    - Computed as: $P(Z > 2) = 1 - pnorm(2) = 0.023$

## Continuity Correction

- To improve Binomial to Normal approximation:
    - Adjust probabilities for $P(B > k)$ and $P(B < k)$ based on continuity: $P(B > k) \approx P(X > k + \frac{1}{2})$ $P(B < k) \approx P(X < k - \frac{1}{2})$

## Central Limit Theorem

- The **Central Limit Theorem** states:
    - If $X_i$ are independent observations from any distribution, the mean: $\bar{X} = \frac{1}{n} \sum_{i=1}^n X_i$
    - Approaches a normal distribution as $n$ increases.

### Examples

- For **Uniform Distributions** and **Exponential Distributions**:
    - As the number of samples increases, the mean converges to a Normal distribution.

## χ², t, and F Distributions

- Derivations from Normal distribution:
    - $Z_i$ being independent standard Normal results in $X = \sum_{i=1}^n Z_i^2$ having a $\chi^2$ distribution with $n$ degrees of freedom.
- **t-distribution**:
    - If $Z$ is standard Normal and $X$ is $\chi^2$, then: $t = \frac{Z}{\sqrt{X/n}}$
- **F-distribution**:
    - If $X \sim \chi^2_k$, $Y \sim \chi^2_m$, then: $F = \frac{X/k}{Y/m}$

## Using R

- R functions can compute probabilities for Normal, χ², t, and F distributions:
    
    - For example:
    
    ```
    P(X &lt; x): pnorm(x, mean, sd)
    P(X &lt; b) - P(X &lt; a): pnorm(b) - pnorm(a)
    ```
    

## Quantile-Quantile Plots (QQ-plots)

- QQ-plots assess if data follows a Normal distribution by plotting quantiles against expected Normal quantiles.
- Comparison helps visualize the fit between empirical data and theoretical distributions.

### Visualizing Normality

- Histogram and QQ-plot comparisons provide rough indications of Normality.
- An effective QQ-plot should resemble a straight line if the data is normally distributed.

## Summary

- Large $n$ and non-small $p$ allow a Binomial distribution to be approximated by a Normal distribution.
- The **Central Limit Theorem** emphasizes the reliability of Normal approximations for sums of random variables.
- Various distributions (χ², t, F) derive from the Normal, crucial in hypothesis testing and confidence intervals.
- QQ-plots serve as a practical method for checking Normality in datasets.