> [!faq] About this Note
>
> Class: COMP1014
> Subject: #thinkingAboutData
> Topics: #coding/language/r #math
> Date: 2025-06-20 at 14:00

## Table of Contents

1. [[#Chapter 0: Introduction to R Programming]]
2. [[#Chapter 1: What is Data Science & Randomness]]
3. [[#Chapter 2: Chi-squared Test (Comparing Categories)]]
4. [[#Chapter 3: Descriptive Statistics & Randomisation]]
5. [[#Chapter 4: T-tests, Confidence Intervals & Bootstrapping]]
6. [[#Chapter 5: Binomial & Poisson Distributions]]
7. [[#Chapter 6: Experimental Design (How to Plan Studies)]]
8. [[#Chapter 7: Correlation (Measuring Relationships)]]
9. [[#Chapter 8: Simple Linear Regression (Drawing Lines Through Data)]]
10. [[#Chapter 9: ANOVA & Post-hoc Tests (Comparing Multiple Groups)]]
11. [[#Chapter 10: Normal Distribution & Approximations]]
12. [[#Chapter 11: Testing for Normality & Data Transformations]]
13. [[#Chapter 12: Case Studies & Common Pitfalls]]

---

## Chapter 0: Introduction to R Programming

**What is R?** R is a free programming language designed specifically for statistics and data analysis. Think of it like a calculator, but much more powerful.

### Getting Started with RStudio
1. **Open RStudio** (the program that makes R easier to use)
2. **Create a new script**: File → New File → R Script
3. **Set your working directory**: This tells R where to find your files
   - Go to Files pane (bottom-right) → More → Set As Working Directory
4. **Save your work**: Save scripts with `.R` extension (like `homework1.R`)

### Basic R Rules
- **Case sensitive**: `Data` and `data` are different things
- **Comments**: Use `#` to write notes that R ignores
- **Assignment**: Store values using `<-` or `=`

```r
# This is a comment - R ignores this line
age <- 25        # Store the number 25 in a variable called 'age'
name = "John"    # Store text in a variable called 'name'
```

### Basic Calculations
```r
1 + 3           # Addition → 4
10^2            # Power (10 squared) → 100
sqrt(16)        # Square root → 4
10 / 3          # Division → 3.333...
```

### Data Types (What Kind of Information?)
- **Numeric**: Numbers like `3.14`, `100`, `-5`
- **Integer**: Whole numbers specifically (`5L` means 5 as an integer)
- **Character**: Text like `"hello"`, `"John Smith"`
- **Logical**: True/False values (`TRUE`, `FALSE`)

```r
height <- 175.5      # Numeric (can have decimals)
age <- 25L          # Integer (whole number)
name <- "Sarah"     # Character (text in quotes)
is_student <- TRUE  # Logical (TRUE or FALSE)
```

### Vectors (Lists of Similar Things)
A vector is like a list that holds multiple values of the same type:

```r
ages <- c(23, 25, 19, 31)           # List of numbers
names <- c("John", "Sarah", "Mike") # List of names
grades <- c(TRUE, FALSE, TRUE)      # List of pass/fail

# Create sequences easily
numbers1to10 <- 1:10                    # 1, 2, 3, ..., 10
even_numbers <- seq(0, 20, by=2)        # 0, 2, 4, 6, ..., 20
```

### Getting Values from Vectors
```r
ages <- c(23, 25, 19, 31)
ages[1]        # Get first value → 23
ages[c(1,3)]   # Get 1st and 3rd values → 23, 19
ages[ages > 25] # Get all values greater than 25 → 31
```

### Data Frames (Like Excel Spreadsheets)
Data frames store different types of data in columns:

```r
students <- data.frame(
  Name = c("John", "Sarah", "Mike"),
  Age = c(23, 25, 19),
  Grade = c(85, 92, 78),
  Passed = c(TRUE, TRUE, TRUE)
)
```

### Factors (Categories)
Use factors for categorical data like survey responses:

```r
satisfaction <- factor(c("high", "low", "medium", "high"))
# R knows these are categories, not just text
```

---

## Chapter 1: What is Data Science & Randomness

**Data Science Definition**: Using computer programming and statistics to extract useful information from data.

### Where is Data Science Used?
- **Business**: Banks analyzing credit risk, stores tracking customer behavior
- **Healthcare**: Analyzing patient data to improve treatments
- **Science**: Astronomy (finding new planets), genetics (understanding DNA)
- **Government**: Detecting tax fraud, improving public services

### The Pi Randomness Question
**Question**: Are the digits of π (3.14159...) random?

**Why This Matters**: If digits are truly random, each digit (0-9) should appear equally often.

**How We Test**:
1. Take first 500 digits of π
2. Count how many 0's, 1's, 2's, etc.
3. If random, we expect about 50 of each digit
4. Compare actual counts to expected counts

**Real-World Application**: This same technique helps detect fraud (unusual patterns in financial data) or test random number generators.

### What Makes Data Random?
- **Uniformity**: All outcomes equally likely
- **Unpredictability**: Can't predict next value from previous ones
- **No Pattern**: No hidden structure or bias

---

## Chapter 2: Chi-squared Test (Comparing Categories)

**What is the Chi-squared test?** It answers the question: "Are the differences I observe real, or just due to random chance?"

### When to Use Chi-squared Tests
- Comparing categories (like hair color, satisfaction levels, disease presence)
- Testing if proportions are equal across groups
- Checking if two categorical variables are independent

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/7_cs1YlZoug" frameborder="0" allowfullscreen></iframe>
</div>

### Type 1: Goodness-of-Fit Test
**Question**: Does my data match what I expected?

**Example**: You roll a die 60 times. If it's fair, you expect each number (1-6) to appear 10 times. You get:
- 1's: 8 times
- 2's: 12 times  
- 3's: 9 times
- 4's: 11 times
- 5's: 10 times
- 6's: 10 times

**Is this difference significant or just random variation?**

**Formula**: χ² = Σ (Observed - Expected)² / Expected

```r
# In R:
observed <- c(8, 12, 9, 11, 10, 10)
expected_prob <- c(1/6, 1/6, 1/6, 1/6, 1/6, 1/6)  # Each should be 1/6 dice
chisq.test(observed, p = expected_prob)
```

**Interpretation**:
- **Low p-value (< 0.05)**: The difference is probably real, not random
- **High p-value (≥ 0.05)**: The difference could easily be due to random chance

### Type 2: Test of Independence

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/y5nxiL6civU" frameborder="0" allowfullscreen></iframe>
</div>

**Question**: Are two categorical variables related?

**Example**: Do men and women prefer different types of movies?

|        | Action | Romance | Comedy |
|--------|--------|---------|--------|
| Men    | 40     | 10      | 20     |
| Women  | 15     | 35      | 25     |

```r
# In R:
movie_data <- matrix(c(40, 15, 10, 35, 20, 25), nrow=2)
chisq.test(movie_data)
```

**How It Works**:
1. Calculate what you'd expect if there was NO relationship
2. Compare actual counts to expected counts
3. Large differences suggest the variables ARE related

### Understanding Results
- **Chi-squared statistic**: How far your data is from what you'd expect by chance
- **Degrees of freedom (df)**: Related to how many categories you're comparing

> [!faq] Notes
> More in-depth notes on Degrees of freedom (df) below

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Cm0vFoGVMB8" frameborder="0" allowfullscreen></iframe>
</div>

- **p-value**: Probability that the difference is just random chance

**Rule of Thumb**: 
- p < 0.05: "Statistically significant" - probably a real effect
- p ≥ 0.05: "Not significant" - could be random chance

---
## Chapter 3: Descriptive Statistics & Randomisation

**Purpose**: Summarize and describe your data before doing complex analyses.

### Describing Data with Numbers

#### Measures of Central Tendency (Where is the "center"?)
- **Mean (Average)**: Add all values, divide by count
  - Formula: x̄ = (x₁ + x₂ + ... + xₙ)/n
  - Example: Ages 20, 25, 30 → Mean = (20+25+30)/3 = 25
  
- **Median**: Middle value when sorted
  - Example: Ages 20, 25, 30 → Median = 25
  - Better than mean when you have extreme values (outliers)

#### Measures of Spread (How scattered is the data?)
- **Variance**: How much values differ from the mean (squared)
  - Formula: s² = Σ(xᵢ - x̄)²/(n-1)
  
- **Standard Deviation**: Square root of variance (same units as original data)
  - Formula: s = √(variance)
  - Example: If standard deviation of heights is 5cm, most people are within 5cm of the average height

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/5wJUUgnMGWA" frameborder="0" allowfullscreen></iframe>
</div>

### Visualizing Data

#### Histograms (For Continuous Data)
Shows the distribution shape of your data:
```r
hist(data$height)  # Shows how heights are distributed
```
**What to Look For**:
- **Normal (bell-shaped)**: Most values in middle, few at extremes
- **Skewed**: Long tail on one side
- **Bimodal**: Two peaks (might be two different groups)

#### Box Plots (Comparing Groups)
Shows median, quartiles, and outliers:
```r
boxplot(height ~ gender, data=students)  # Compare heights by gender
```
**Parts of a Box Plot**:
- **Box**: Middle 50% of data
- **Line in box**: Median
- **Whiskers**: Most of remaining data
- **Dots**: Outliers (unusual values)

### Randomisation Tests (The Core Idea)
**Question**: Is the difference I observed real, or just random chance?

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/3zIaY2EwzN4" frameborder="0" allowfullscreen></iframe>
</div>

**The Method**:
1. **Observe**: Calculate difference between groups
2. **Shuffle**: Randomly reassign group labels many times
3. **Compare**: How often do shuffled differences exceed observed difference?
4. **Conclude**: If rarely (< 5%), the difference is probably real

**Example**: Do smokers have lower birth weight babies?
1. Observe: Smokers average 2900g, non-smokers 3200g (difference = 300g)
2. Shuffle smoking labels randomly 10,000 times
3. Count how many shuffled differences are ≥ 300g
4. If only 50 out of 10,000 (0.5%), then smoking probably does affect birth weight

```r
# In R (simplified):
observed_diff <- mean(nonsmoker_weights) - mean(smoker_weights)
# ... shuffle labels many times ...
p_value <- sum(shuffled_diffs >= observed_diff) / 10000
```

### Types of Variables
- **Quantitative**: Numbers that mean something (height, income, test scores)
- **Categorical**: Categories or groups (gender, color, yes/no)
- **Continuous**: Can take any value (height: 170.5cm, 170.53cm, etc.)
- **Discrete**: Only specific values (number of children: 0, 1, 2, 3...)

---

## Chapter 4: T-tests, Confidence Intervals & Bootstrapping

**What are t-tests?** They answer: "Is this difference in averages real, or just random variation?"

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/MUD390jtgQs" frameborder="0" allowfullscreen></iframe>
</div>

### One-Sample t-test
**Question**: Is my sample average different from a specific value?

**Example**: A factory claims light bulbs last 1000 hours on average. You test 25 bulbs and get an average of 950 hours. Is this significantly different from 1000?

**Formula**: t = (sample_mean - claimed_value) / (standard_error)
- Standard error = standard_deviation / √n

```r
# In R:
t.test(bulb_lifetimes, mu = 1000)  # Test against 1000 hours
```

**When to Use**: Comparing one group to a known standard or expected value.

### Two-Sample t-test
**Question**: Do two groups have different averages?

**Example**: Do men and women have different average heights?

**Types**:
1. **Independent samples**: Different people in each group
2. **Paired samples**: Same people measured twice (before/after)

```r
# Independent samples:
t.test(height ~ gender, data = students)

# Paired samples (before/after):
t.test(before_scores, after_scores, paired = TRUE)
```

**How It Works**:
1. Calculate difference between group means
2. Account for variability within each group
3. Larger differences and smaller variability → more significant result

### Confidence Intervals

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/DT-fPG0Hff8" frameborder="0" allowfullscreen></iframe>
</div>

**What They Tell You**: "I'm 95% confident the true population mean is between X and Y"

**Example**: If 95% CI for average height is [170cm, 175cm], we're quite confident the true population average height is somewhere in that range.

**Common Confidence Levels**:
- 90%: We're wrong 10% of the time
- 95%: We're wrong 5% of the time (most common)
- 99%: We're wrong 1% of the time (very conservative)

```r
# In R:
t.test(heights)  # Gives mean and 95% confidence interval
```

### Bootstrapping (The "Resampling Trick")

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Xz0x-8-cgaQ" frameborder="0" allowfullscreen></iframe>
</div>

**Problem**: Sometimes we can't use traditional formulas (data not normal, small sample, etc.)

**Solution**: Bootstrap - resample your data many times to estimate uncertainty.

**How Bootstrapping Works**:
1. From your original sample, randomly select n observations WITH replacement
2. Calculate the statistic (mean, median, etc.) for this bootstrap sample
3. Repeat 1000-10000 times
4. Use the distribution of bootstrap statistics to estimate confidence intervals

**Example**:
- Original sample: [10, 12, 8, 15, 11] (n=5)
- Bootstrap sample 1: [10, 10, 15, 8, 12] (randomly selected with replacement)
- Bootstrap sample 2: [11, 8, 10, 15, 15]
- ... repeat 1000 times
- Calculate mean of each bootstrap sample
- 95% CI: 2.5th to 97.5th percentile of bootstrap means

```r
# Bootstrap in R (simplified concept):
bootstrap_means <- replicate(1000, {
  boot_sample <- sample(original_data, length(original_data), replace = TRUE)
  mean(boot_sample)
})
confidence_interval <- quantile(bootstrap_means, c(0.025, 0.975))
```

### Interpreting Results
- **p-value < 0.05**: Difference is "statistically significant"
- **p-value ≥ 0.05**: No strong evidence of a difference
- **Confidence intervals that don't include 0**: Suggests a real difference
- **Confidence intervals that include 0**: No strong evidence of difference

---

## Chapter 5: Binomial & Poisson Distributions

**What are probability distributions?** They tell us how likely different outcomes are.

### Binomial Distribution
**Used for**: Counting successes in a fixed number of independent trials.

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/6YzrVUVO9M0" frameborder="0" allowfullscreen></iframe>
</div>

**Examples**:
- Flipping a coin 10 times, counting heads
- Testing 100 light bulbs, counting how many work
- Surveying 50 people, counting how many agree

**Requirements**:
1. Fixed number of trials (n)
2. Each trial has only two outcomes (success/failure)
3. Probability of success (p) is the same for each trial
4. Trials are independent

**Formula**: P(X = k) = C(n,k) × p^k × (1-p)^(n-k)
- Where C(n,k) = "n choose k" = combinations

**Key Values**:
- **Mean**: μ = n × p
- **Variance**: σ² = n × p × (1-p)

**Example**: Flip fair coin 10 times
- n = 10, p = 0.5
- Mean = 10 × 0.5 = 5 heads expected
- What's probability of exactly 7 heads?

```r
# In R:
dbinom(7, size=10, prob=0.5)  # Probability of exactly 7
pbinom(7, size=10, prob=0.5)  # Probability of 7 or fewer
```

### Poisson Distribution
**Used for**: Counting rare events in a fixed time/space interval.

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/m0o-585xwW0" frameborder="0" allowfullscreen></iframe>
</div>

**Examples**:
- Number of car accidents per day at an intersection
- Number of typos per page in a book
- Number of customers arriving per hour

**Requirements**:
1. Events occur randomly and independently
2. Average rate (λ) is constant
3. Two events can't occur at exactly the same time

**Formula**: P(X = k) = (λ^k × e^(-λ)) / k!
- Where λ = average number of events

**Key Values**:
- **Mean**: μ = λ
- **Variance**: σ² = λ (mean equals variance!)

**Example**: Average 3 car accidents per day at intersection
- λ = 3
- What's probability of exactly 5 accidents tomorrow?

```r
# In R:
dpois(5, lambda=3)  # Probability of exactly 5
ppois(5, lambda=3)  # Probability of 5 or fewer
```

### When to Use Which Distribution

| Use Binomial When: | Use Poisson When: |
|-------------------|-------------------|
| Fixed number of trials | Counting events over time/space |
| Two outcomes per trial | Rate is small relative to opportunities |
| Know probability of success | Events are rare |
| Example: 100 coin flips | Example: Phone calls per hour |

### Normal Approximation

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/rTPoXiQHI6M" frameborder="0" allowfullscreen></iframe>
</div>

**When sample size is large**, both distributions can be approximated by normal distribution:

**Binomial → Normal**: When n×p ≥ 5 and n×(1-p) ≥ 5
- Mean = np, Standard deviation = √(np(1-p))

**Poisson → Normal**: When λ ≥ 5
- Mean = λ, Standard deviation = √λ

### Confidence Intervals

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/DT-fPG0Hff8" frameborder="0" allowfullscreen></iframe>
</div>

**For proportions** (from binomial data):
```r
# Exact method:
binom.test(successes, total)

# Normal approximation:
prop.test(successes, total)
```

**For rates** (from Poisson data):
```r
poisson.test(count, time_period)
```

---

## Chapter 6: Experimental Design (How to Plan Studies)

**Why is this important?** Bad study design = unreliable results. Good design = trustworthy conclusions.

### Key Concepts

#### Population vs Sample
- **Population**: Everyone you want to know about (all university students)
- **Sample**: The people you actually study (200 students from your university)
- **Goal**: Use sample to make conclusions about population

#### Types of Studies

**Observational Study**: Just observe and measure, don't interfere
- Examples: Survey people about smoking habits and health
- Pros: Ethical, can study long-term effects
- Cons: Can't prove causation (correlation ≠ causation)

**Experiment**: Actively assign treatments to see what happens  
- Examples: Give some people new drug, others placebo
- Pros: Can prove causation
- Cons: May be unethical, artificial conditions

### Sampling Methods

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/pTuj57uXWlk" frameborder="0" allowfullscreen></iframe>
</div>

#### Random Sampling
**Goal**: Every person in population has equal chance of being selected
**Why**: Prevents bias, makes sample representative

```r
# In R:
sample(population, size = 100)  # Randomly select 100 people
```

**Bad Sampling Examples**:
- Convenience sampling: Only survey people walking by
- Voluntary response: Only people who choose to respond
- Both create bias!

#### Other Sampling Methods
- **Stratified**: Divide population into groups, sample from each group
- **Cluster**: Randomly select entire groups
- **Systematic**: Select every nth person

### Experimental Design Principles

#### 1. Randomization
**Randomly assign** treatments to subjects
- Prevents selection bias
- Makes groups similar on average

#### 2. Control
Use **control group** for comparison
- Control gets placebo or standard treatment
- Treatment group gets new intervention

#### 3. Blocking
Group similar subjects together
- Example: Separate men and women, then randomize within each group
- Reduces variability, increases power to detect effects

#### 4. Replication
Use adequate sample size
- Larger samples → more reliable results
- Calculate needed sample size before starting

### Common Sources of Bias

#### Selection Bias
- Non-representative sample
- Example: Phone survey excludes people without phones

#### Response Bias
- People lie or give socially desirable answers
- Example: People underreport alcohol consumption

#### Confirmation Bias
- Researcher unconsciously influences results
- Solution: Blinding (subjects/researchers don't know treatment)

#### Confounding
- Other variables affect the outcome
- Example: Ice cream sales and drowning both increase in summer (temperature is confounding variable)

### Types of Variables

#### Independent vs Dependent
- **Independent** (predictor): What you manipulate or measure as input
- **Dependent** (response): What you measure as outcome
- Example: Study effect of study time (independent) on test scores (dependent)

#### Quantitative vs Categorical
- **Quantitative**: Numbers with meaning (height, income)
- **Categorical**: Groups or categories (gender, treatment type)

### Avoiding Common Mistakes

#### Pseudo-replication
**Problem**: Treating non-independent observations as independent
**Example**: Measuring same person multiple times but analyzing as if different people
**Solution**: Use appropriate statistical methods for repeated measures

#### Multiple Testing
**Problem**: Testing many hypotheses increases chance of false positives
**Example**: Test 20 different comparisons, expect 1 false positive even if no real effects
**Solution**: Adjust p-values or plan specific hypotheses in advance

### Planning Your Study

1. **Define research question clearly**
2. **Identify population of interest**
3. **Choose appropriate study type**
4. **Plan sampling method**
5. **Calculate required sample size**
6. **Consider potential confounding variables**
7. **Plan statistical analysis in advance**

---

## Chapter 7: Correlation Test

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/11c9cs6WpJU" frameborder="0" allowfullscreen></iframe>
</div>

### Correlation Coefficient
- r = Σ ((x_i - x̄)/s_x)((y_i - ȳ)/s_y)/(n-1)
- Range [-1,1]

### Testing H0: ρ=0
- t = r√(n-2)/√(1-r²), df=n-2
- R: `cor.test(x,y)`

---

## Chapter 8: Simple Linear Regression

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/WWqE7YHR4Jc" frameborder="0" allowfullscreen></iframe>
</div>

### Model: y = a + b x + ɛ
- b̂ = Σ(x_i - x̄)(y_i - ȳ)/Σ(x_i - x̄)²
- â = ȳ - b̂ x̄

### Inference
- SE_b = s/√Σ(x_i - x̄)², t = (b̂ - b0)/SE_b
- R: `lm(y~x)` and `summary()`

### Diagnostics
- Residuals, QQ-plot, R², RSS

---

## Chapter 9: ANOVA & Post-hoc Tests

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/oOuu8IBd-yo" frameborder="0" allowfullscreen></iframe>
</div>


<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/F2R63oTqXRg" frameborder="0" allowfullscreen></iframe>
</div>

### One-Way ANOVA
- H0: μ1=…=μK
- SS_B/df_B ÷ SS_W/df_W = F
- df_B = K-1, df_W = N-K
- R: `aov()`

### Tukey HSD
- Pairwise comparisons with familywise error control
- R: `TukeyHSD()`

---

## Chapter 10: Normality & Approximations

### Normal Distribution
- f(x)=1/(σ√2π) e^{-(x-μ)²/(2σ²)}
- Standard normal Z=(X-μ)/σ
- R: `pnorm`, `qnorm`

### CLT
- x̄ ~ approx N(μ,σ²/n) for large n

### Continuity Correction
- P(B>k)≈P(X>k+0.5)

### χ², t, F Dist
- χ²: Σ Z_i²
- t: Z/√(χ²/df)
- F: (χ²_k/k)/(χ²_m/m)

---

## Chapter 11: Normality Tests & Transformations

### Shapiro–Wilk Test
- H0: data normal
- R: `shapiro.test(x)`

### QQ-Plot
- Compare sample quantiles vs theoretical
- R: `qqnorm(x); qqline(x)`

### Data Transformations
- Log, sqrt, Box–Cox to stabilize variance/normalize data

---

## Chapter 12: Case Studies

### Power Analysis
- Power = 1-β; β=Type II error
- Factors: effect size, sample size, α, σ
- R: `power.t.test()`

### Pseudo-replication
- Avoid treating non-independent measures as independent

### Base Rate Fallacy & Multiple Testing
- Familywise error inflation
- Adjust with Bonferroni, FDR (e.g., `p.adjust()`)

---

## EXAM-SPECIFIC SECTIONS

### Box Plot Interpretation (Key Exam Skill)

**What Box Plots Show**:
- **Box**: Interquartile range (IQR) - middle 50% of data
- **Line in box**: Median (50th percentile)
- **Whiskers**: Extend to furthest points within 1.5×IQR
- **Dots**: Outliers beyond whiskers

**Comparing Two Groups**:
```r
boxplot(length ~ species, data=fish)
```

**How to Interpret**:
- **Central tendency**: Compare medians (lines in boxes)
- **Spread**: Compare box widths and whisker lengths
- **Outliers**: Look for dots beyond whiskers
- **Skewness**: If median isn't centered in box

**Example Description**: "Species Y has a higher median than Species X. Species X shows much greater variability, with a wider interquartile range and longer whiskers. Species Y appears more consistent in measurements."

### Bootstrap vs Permutation (Critical Distinction)

| Bootstrap | Permutation |
|-----------|-------------|
| **Purpose**: Estimate variability of a statistic | **Purpose**: Test if groups are different |
| **Method**: Resample WITH replacement from original data | **Method**: Shuffle group labels WITHOUT replacement |
| **Preserves**: Original data structure | **Breaks**: Any relationship between variables |
| **Centered**: Around observed statistic | **Centered**: Around 0 (null hypothesis) |
| **Use for**: Confidence intervals | **Use for**: p-values |

**Bootstrap Example**:
```r
# Estimating uncertainty in mean difference
boot <- replicate(1000, {
  s <- sample(fish$length, size=50, replace=TRUE)
  mean(s)
})
# Results center around observed mean
```

**Permutation Example**:
```r
# Testing if species have different means
sim <- replicate(1000, {
  shuffled_species <- sample(fish$species)
  # Calculate difference with shuffled labels
})
# Results center around 0 if no real difference
```

### Common R Code Errors (Exam Focus)

#### Bootstrap Error Pattern:
```r
# WRONG:
boot = replicate(1000, {
  s = sample(1:n, size = n, replace = TRUE)
  mean(s)  # This calculates mean of ROW NUMBERS, not data!
})

# CORRECT:
boot = replicate(1000, {
  s = sample(data$variable, size = length(data$variable), replace = TRUE)
  mean(s)  # This calculates mean of actual data values
})
```

#### Permutation Error Pattern:
```r
# WRONG:
sim = replicate(1000, {
  s = sample(data$group)  # Shuffled but never used
  mean(data$variable[data$group == "A"]) - mean(data$variable[data$group == "B"])
  # Still using original groups!
})

# CORRECT:
sim = replicate(1000, {
  shuffled_groups = sample(data$group)  # Shuffle labels
  mean(data$variable[shuffled_groups == "A"]) - mean(data$variable[shuffled_groups == "B"])
  # Use shuffled labels
})
```

### Linear Regression - Complete Exam Guide

#### Setting Up Regression
```r
# Basic regression
model <- lm(final_exam ~ assignment, data=students)
summary(model)
```

#### Reading Regression Output
```
Coefficients:
                Estimate Std. Error t value Pr(>|t|)    
(Intercept)      2.24023    2.04669   1.095     0.28    
assignment       0.67210    0.06284  10.695 3.69e-13 ***
```

### EXAM PRACTICE PROBLEMS

#### Problem Type 1: Box Plot Analysis
**Given**: Two box plots comparing fish lengths by species
**Skills Tested**:
- Compare central tendency (medians)
- Compare variability (IQR, whiskers)
- Identify outliers
- Write clear comparisons

**Sample Answer Format**: "Species A has a higher median length than Species B (approximately X vs Y). Species B shows greater variability with a wider interquartile range and longer whiskers, suggesting more diverse lengths within this species."

#### Problem Type 2: Bootstrap Code Debugging
**Common Errors**:
1. `mean(s)` where `s` contains row indices instead of actual data
2. Not using `replace=TRUE` in sampling
3. Sampling wrong variable or wrong size

**Sample Problem**: 
```r
# Find the error:
boot = replicate(1000, {
  s = sample(1:nrow(data), size = nrow(data), replace = TRUE)
  mean(s)  # ERROR: This is mean of row numbers!
})

# Fix:
boot = replicate(1000, {
  s = sample(data$variable, size = length(data$variable), replace = TRUE)
  mean(s)  # Correct: mean of actual data values
})
```

#### Problem Type 3: Permutation vs Bootstrap
**Question**: "Explain when to use bootstrap vs permutation"
**Answer**: 
- **Bootstrap**: When estimating uncertainty in a statistic (confidence intervals)
- **Permutation**: When testing hypotheses (p-values)
- **Key difference**: Bootstrap preserves relationships, permutation breaks them

#### Problem Type 4: ANOVA Application
**Scenario**: Comparing difficulty of multiple quizzes
**Steps**:
1. Identify this as comparing 3+ group means → ANOVA
2. H₀: All quiz means are equal
3. H₁: At least one quiz mean differs
4. Interpret F-statistic and p-value
5. If significant, use post-hoc tests to find which pairs differ

#### Problem Type 5: Regression Interpretation
**Given**: R regression output
**Must explain**:
- Slope meaning in context
- Significance of relationship (p-value)
- R-squared interpretation
- Sample size effects

**Sample Answer**: "There is a significant linear relationship between assignment and final exam marks (p < 0.001). For each additional assignment point, final exam marks increase by 0.67 points on average. Assignment marks explain 74.6% of the variation in final exam performance."

#### Must-Know R Functions for Exam
```r
# Summary statistics
summary(data)
mean(), median(), sd(), var()

# Visualization  
boxplot(variable ~ group, data=data)
hist(variable)
plot(x, y)

# Testing
t.test(variable ~ group, data=data)
aov(variable ~ group, data=data)
lm(y ~ x, data=data)

# Bootstrap/Permutation
replicate(n, {...})
sample(..., replace=TRUE)  # Bootstrap
sample(...)  # Permutation

# Data manipulation
data.frame()
c()  # Combine vectors
rep()  # Repeat values
```

#### Key Phrases for Full Marks
- "There is strong evidence that..." (when p < 0.05)
- "No evidence of difference..." (when p ≥ 0.05)  
- "On average, [interpret slope] in context"
- "X explains Y% of variation in..."
- "The 95% confidence interval is..."

Remember: Always interpret results in the context of the problem, not just statistically!
