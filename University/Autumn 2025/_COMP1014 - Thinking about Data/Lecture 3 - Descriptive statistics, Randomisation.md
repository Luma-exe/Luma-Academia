
> [!faq] About this Lecture
> Class: COMP1014
> Subject: #thinkingAboutData
> Date: 2025-03-21 at 12:00
> Topics: #coding/language/r  #math 

## Overview

- This topic explores the relationship between maternal smoking during pregnancy and the birth weight of infants.
- It discusses data summarization techniques, visualization methods, and hypothesis testing to determine the effect of smoking on birth weight.

## Maternal Smoking Data

- Dataset includes birth weights of over 1200 babies along with the smoking status of the mothers (yes or no).
- Variables:
    - **bwt**: Birth weight in grams (continuous/quantitative).
    - **smoke**: Smoking status (categorical/qualitative).

## Summarizing Data

- **Qualitative Variable**: Use counts to summarize (smokers vs non-smokers).
- **Quantitative Variable**: Use metrics like mean and median to summarize birth weights.

### Terminology

- **Variable**: Measurement on a subject (e.g., bwt, smoke).
- **Continuous Variable**: Can take any positive value (e.g., birth weight).
- **Categorical Variable**: Limited set of values (e.g., smoking status).

## Histograms

- Visualize the distribution of continuous data.
- Steps to create a histogram:
    1. Examine the range of the data.
    2. Split the range into bins.
    3. Plot counts of observations assigned to each bin.

```plaintext
# Example of a histogram creation
1. data_range = max(data) - min(data)
2. bins = define_bins(data_range)
3. counts = count_observations_in_bins(data, bins)
4. plot_histogram(bins, counts)
```

## Box Plots

- Provide a graphical summary of data including:
    - Minimum
    - First quartile (Q1)
    - Median
    - Third quartile (Q3)
    - Maximum

### Creating Box Plots

- Compare groups (e.g., smokers vs non-smokers).
- Interpret:
    - Central box shows the interquartile range (IQR).
    - Whiskers extend to points within 1.5 times the IQR.

## Simple Comparison of Two Groups (Smoking Data)

### Summary Statistics

- For smokers (yes):
    - Min: 1657 g
    - 1st Qu: 2914 g
    - Median: 3286 g
    - Mean: 3260.3 g
    - 3rd Qu: 3600 g
    - Max: 4657 g
- For non-smokers (no):
    - Min: 1571 g
    - 1st Qu: 3229 g
    - Median: 3514 g
    - Mean: 3515.6 g
    - 3rd Qu: 3829 g
    - Max: 5029 g

### Conclusion

- Initial analysis shows lower average birth weights for infants of smoking mothers. This analysis requires statistical testing to confirm significance.

## Hypothesis Testing

1. **Null Hypothesis**: Smoking does not affect birth weight.
2. **Alternative Hypothesis**: Smoking affects birth weight.

### Steps to Test Hypothesis

- Calculate the difference in means from the actual data.
- Shuffle labels (smoking status) and compute new differences.
- Perform this process multiple times to establish a distribution (e.g., 10,000 shuffles).
- Compare the original difference with the shuffled distribution to compute a p-value.

```plaintext
# Example steps for hypothesis testing
1. original_mean_difference = calculate_mean_difference(data)
2. for i in range(10000): 
    a. shuffled_data = shuffle_labels(data)
    b. mean_difference[i] = calculate_mean_difference(shuffled_data)
3. p_value = proportion_of_random_mean_differences_greater_than(original_mean_difference)
```

### Results Interpretation

- P-value indicates the likelihood of observing the data under the null hypothesis.
- A significant p-value (commonly ≤ 0.05) suggests rejecting the null hypothesis.

## Summary Statistics

- **Mean**: $\text{Mean} = \frac{1}{n} \sum_{i} x_i$
- **Variance**: $s^2 = \frac{1}{n-1} \sum_{i} (x_i - \bar{x})^2$
- **Standard Deviation**: $SD = \sqrt{s^2}$
- **Median**: The middle value in the dataset when ordered.

## Conclusion

- The study concludes that maternal smoking is associated with lower birth weights.
- Further analysis methods include sales data comparisons and continued examination of statistical differences between groups.

## Two-Sided Tests

- Alternative to compare differences in two groups without directional bias.
- Adjustments are made in calculating p-values to incorporate both tails in the distribution.

## Final Thoughts

- Hypothesis testing is crucial to ascertain the influence of categorical variables on continuous outcomes.
- Label shuffling provides a robust method to simulate null hypothesis scenarios in order to evaluate observed outcomes.