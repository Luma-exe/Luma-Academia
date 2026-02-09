
> [!faq] About this Lecture
> Class: COMP1014
> Subject: #thinkingAboutData 
> Topics: #math
> Date: 2025-06-05 at 11:17

## Normal Theory Tests and Confidence Intervals

- Emphasizes computational methods (e.g., randomization) for hypothesis testing and estimating confidence intervals.
- Revisits concepts from a Normal theory perspective.

## Chi-Squared Tests

### Goodness of Fit

- **Objective**: Assess if observed counts across K categories stem from a specified set of probabilities $p_1, \ldots, p_K$.
- **Observed Counts**: $x_1, \ldots, x_K$.
- **Probabilities**: $q_k$ (derived from counts); $N = \sum_{k=1}^{K} x_k$.
- **Hypotheses**:
    - $H_0: q_k = p_k$ for $k = 1, \ldots, K$
    - $H_1: q_k \neq p_k$ for at least one $k$.
- **Test Statistic**: $$ \chi^2 = \sum_{k=1}^{K} \frac{(x_k - N p_k)^2}{N p_k} $$
- **Distribution**:
    - If expected frequencies are $\geq 5$, approximated using $\chi^2$ with $K - 1$ degrees of freedom.

### Calculating p-value

- Use the formula: $$ p\text{-value} = 1 - p\text{chisq}(X^2, K - 1) $$
- Use `chisq.test(x, p=p)` function for computations.

### Example: Iraqi Refugees

- Observed counts for Iraqi refugees across 4 categories compared to theoretical distribution.
- Output: $\chi^2 = 1550.1$, degrees of freedom ($df = 3$), and $p\text{-value} < 2.2 \times 10^{-16}$.

### Chi-Squared Test of Independence

- Evaluates independence between rows and columns in a count table.
- **Hypotheses**:
    - $H_0$: Row and Column features are independent.
    - $H_1$: Row and Column features are NOT independent.
- **Expected Values**: $$ e_{ij} = r_j p_i $$
- **Test Statistic**: $$ \chi^2 = \sum_{i,j} \frac{(x_{ij} - r_j p_i)^2}{r_j p_i} $$
- **Distribution**:
    - Similar conditions as for goodness of fit: expected frequencies $\geq 5$, approximate $\chi^2$ with $(C-1)(R-1)$ degrees of freedom.

### Example: Eel Habitat

- Evaluate independence of eel habitat across species using observed counts.
- Function: `chisq.test(eels)` produces Pearson’s Chi-squared test results and outputs.

## Two-Sample t-Test

### Purpose

- Determine if two populations have the same mean.
- **Hypotheses**:
    - $H_0$: $\mu_1 = \mu_2$
    - $H_1$: $\mu_1 \neq \mu_2$ (two-tailed) or one-sided alternatives.

### Test Statistic

- Given sample means ($\bar{x}_1, \bar{x}_2$) and standard deviations ($s_1, s_2$): $$ t = \frac{\bar{x}_1 - \bar{x}_2}{s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} $$
- Where: $$ s_p = \sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}} $$

### Distribution Approximation

- For $n_1 + n_2 \geq 30$, approximate $t$ distribution with $n_1 + n_2 - 2$ degrees of freedom.

### Confidence Interval for Difference in Means

- Given by: $$ (\bar{x}_1 - \bar{x}_2) \pm t_{\alpha/2} s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}} $$
- Where $t_{\alpha/2}$ is found from the $t$-distribution.

### Example: Birth Weight and Smoking

- Observed differences in birth weights based on smoking status used to conduct t-test.
- Function: `t.test(bwt ~ smoke, data=birthwt, var.equal=TRUE)` outputs results.

## Paired Sample t-Test

### Context

- Analyzed when we have two observations from the same unit (e.g., pre- and post-intervention).
- **Hypotheses**:
    - $H_0$: $\mu_d = 0$, where $d_i = x_i - y_i$.
    - $H_1$: $\mu_d \neq 0$ (two-tailed) or one-sided alternatives.

### Test Statistic

$$ t = \frac{\bar{d}}{s_d / \sqrt{n}} $$

- Where $n$ is the number of pairs.

### Confidence Interval for Paired Differences

- Given by: $$ \bar{d} \pm t_{\alpha/2} \frac{s_d}{\sqrt{n}} $$

### Example: Helmet Measurements

- Analyzed differences in helmet measurements using `t.test(Cardboard, Metal, data=helmet, paired=TRUE)`.

## Test and Confidence Intervals for a Single Mean

### Context

- Used to evaluate if a single sample mean matches a specified value.
- **Hypotheses**:
    - $H_0$: $\mu = \mu_0$
    - $H_1$: $\mu \neq \mu_0$ (etc.).

### Test Statistic

$$ t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}} $$

### Memory for Distribution

- Referred to a $t$-distribution with $n - 1$ degrees of freedom.

## Test for Slope in Simple Linear Regression

### Model Framework

- Models the relationship as $y = \alpha + \beta x + e$, assessing if there's a linear correlation between $x$ and $y$.

### Hypotheses

- $H_0$: $\beta = 0$ (no slope).
- $H_1$: $\beta \neq 0$ (exists slope).

### Test Statistic

$$ t = \frac{\hat{\beta}}{s / \sqrt{SS_{XX}}} $$

- Where $SS_{XX} = \sum_{i=1}^{n} (x_i - \bar{x})^2$.

### Example: Crabs Molting

- Analyzed post- and pre-molt sizes using linear regression model; check results with `lm()` and `summary()` functions.

## F Test for ANOVA

### Objective

- Tests if means of several groups differ.
- **Hypotheses**:
    - $H_0$: $\mu_1 = \mu_2 = \ldots = \mu_k$.
    - $H_1$: At least one $\mu_i \neq \mu_j$.

### Test Statistic

$$ F = \frac{SS_B / (K - 1)}{SS_W / (N - K)} $$

- Where $SS_B$ and $SS_W$ represent between-group and within-group sums of squares respectively.

### Example: Hair Colour and Pain Tolerance

- Implemented ANOVA using `aov(Pain ~ HairColour, data=hair)` to demonstrate differences related to hair color.

## Transformations to Normality

### Context

- Assumes data is approximately Normally distributed for valid tests.
- Central Limit Theorem tolerates some non-Normality; however, transformations can help improve normality assumption.

### Common Transformations

- **Anscombe Transformation for Poisson**: $$ y = \sqrt{x + \frac{3}{8}} $$
    
- **Arcsine Transformation for Binomial Data**: $$ y = \sin^{-1}\left(\sqrt{\frac{x}{m}}\right) $$
    

- **Log Transformation for Multiplicative Noise**: $$ \log(y) = \alpha + \beta x + e $$

### Example: Incomes vs. Height

- A log transformation applied to income and height data to better fit assumptions of linear regression models.

## Summary

- Large samples can utilize known distributions for statistical tests.
- Methods include:
    - $\chi^2$ tests (goodness of fit and independence) utilize $\chi^2$ distribution.
    - Two-sample t-tests and confidence intervals apply the t distribution.
    - Paired t-tests, regression slopes, and single mean tests similarly use t distribution.
    - ANOVA employs F distribution.
- Non-Normal data can be improved through transformations:
    - Anscombe for Poisson counts, arcsine for binomial proportions, and log for multiplicative noise contexts.