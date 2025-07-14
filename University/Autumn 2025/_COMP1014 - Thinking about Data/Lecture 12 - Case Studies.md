
> [!faq] About this Lecture
> Class: COMP1014
> Subject: #thinkingAboutData 
> Topics: #math
> Date: 2025-06-05 at 11:17

## 13.1 Power and Underpowered Tests

### Power

- **Definition**: Power is the probability of correctly rejecting the null hypothesis when it is false.
- In hypothesis testing for a medication, you set a null hypothesis $H_0$: no effect (e.g., medication does not shorten the length of colds).
- **P-value**: Measures the probability of observing an effect at least as extreme as the one observed, assuming $H_0$ is true.

### Sample Size Implications

- Larger sample sizes generally lead to more reliable results.
    - Example with two patients: Low surprise unless result is extreme.
    - Example with 100 patients: More surprising result if a reduction in cold duration is observed.

### Factors Affecting Power

- **Sample Size ($n$)**: Larger samples lead to higher power.
- **Effect Size**: Greater differences will yield more significant results.
- **Variation in Measurements**: Less variation leads to easier detection of real effects.

### Coin Toss Example

- **Hypotheses**:
    - $H_0: p = 0.5$ (fair coin)
    - $H_1: p > 0.5$ (biased coin)
- Determine how many heads you need to see to reject $H_0$.
- For 100 tosses, more than 58 heads leads to a p-value under 5%:  
    $p_{\text{binom}}(58, 100, 0.5, \text{lower=FALSE})$.

### Observations with Increased Tosses

- With 200 tosses, more than 112 heads increases detection probability to 86%.
- With a probability of heads at 0.7, need more than 58 heads with > 99% chance of detection.
- With $p = 0.51$, detection requires about 7000 tosses for > 50% chance.

### Underpowered Tests

- Underpowered tests are quite common:
    - **JAMA 1994**: 2/3 of trials showing no difference had insufficient power.
    - **J Clinical Oncol 2007**: Only half had power to detect even large effects.

### Case Study: Right Turns on Red

- Study showed 308 accidents before and 337 after new regulations with no significance.
- Later research revealed a 20% increase in accidents.

### Confidence Intervals

- Confidence intervals provide more informative estimates than binary yes/no on statistical significance.

## 13.2 Pseudo-replication

### Concept of Pseudo-replication

- Occurs when the same experimental unit is measured multiple times but the analysis doesn't account for the multiple measurements.
- Example: Comparing two medications with 2000 patients split into two groups but measuring blood pressure numerous times per patient.

### Example from Literature

- A researcher studying two antibiotic treatments in cows found significant differences without properly accounting for batch effects, which might bias the results.

### Analytical Approach

- Linear mixed models can be more appropriate, as they consider variation within and between batches.

### Paired T-test as a Solution

- The paired t-test can effectively handle multiple measurements by analyzing only the differences.

## 13.3 Base Rate Fallacy and Multiple Testing

### Base Rate Fallacy

- In testing multiple drugs, a false assumption can be made about the effectiveness guided solely by p-values.
- Even with a low p-value, many "effective" drugs identified might be false positives due to a low base rate of effectiveness.

### Example with Cancer Drugs

- Testing 100 drugs:
    - 10 are truly effective.
    - 5% threshold leads to 13 declared effective.
    - In reality, only 62% of declared effective drugs are truly effective.

### Clarification on p-values

- A p-value of 0.01 does not prove the null hypothesis is false or directly imply the likelihood of the null hypothesis.

### Multiple Testing Problems

- Testing numerous hypotheses increases the likelihood of false positives.
- Example: 10,000 gene tests might yield many false positives, including the detection of some real effects.

### False Discovery Rate (FDR)

- Definition: The proportion of false discoveries among all discoveries (tests with p-values below a certain threshold).
- Estimation methods exist to account for FDR when dealing with large-scale testing.

## 13.4 Double Dipping and Simpson's Paradox

### Regression to the Mean

- When individuals selected for extreme performance are tested again, they tend to regress towards the mean.
- This statistical phenomenon can lead to misleading conclusions in trials.

### Historical Context

- Galton noted regression to the mean in 1869, evidenced through various studies.

### Avoiding Pitfalls

- To prevent bias from regression to the mean, treatment groups should be established without reliance on the measured outcomes.

### Simpson’s Paradox

- Demonstrates how trends can reverse when data is grouped differently.
- **Example**: Gender admission rates at UC Berkeley showed bias when viewed globally but not when disaggregated by department.

### Simple Example of Simpson's Paradox

- Two players across seasons can appear to perform differently in aggregate despite consistent individual performances in each season.

## Conclusions

- Highlights the need for careful design and analysis in data-driven research to avoid common statistical pitfalls.
- Awareness of power, pseudo-replication, base rate fallacy, and Simpson’s paradox is essential in evaluating research validity.