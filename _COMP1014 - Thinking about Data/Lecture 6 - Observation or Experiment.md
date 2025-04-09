
> [!faq] About this Lecture
> Class: COMP1014
> Subject: #thinkingAboutData
> Topics: #math
> Date: 2025-04-09 at 13:45

## 6.1 What is Data?

### Introduction

- Data is essential across various fields, used to collect information about individuals or objects.
- Categories of data collection:
    - For operational purposes (e.g., customer details, transaction records).
    - For specific purposes (e.g., scientific experiments, surveys).

### What is Data?

- Data can be classified into different types:
    - **Quantitative**: Numerical measurements (e.g., bank balances, item costs).
    - **Qualitative**: Non-numerical categories (e.g., hair color, group memberships).
    - **Unstructured Data**: Text, audio, images, etc. (e.g., tweets, video content).

## 6.2 Populations and Samples

### Populations and Samples

- Data commonly consists of observations on variables:
    
    - Observations: Cases or records.
    - Variables: Attributes or features.
- **Data Matrix**: Organized data, such as student demographics and scores in various subjects.
    

### Definitions

- **Population**: The complete set of individuals of interest.
- **Sample**: A subset of the population, often used for inference and estimation.
- **Census**: Data collection from all individuals in the population.

### Inference and Estimation

- **Inference**: Drawing conclusions about a population based on sample data.
    - Example: Determining if smoking affects birth weight.
- **Estimation**: Calculating population parameters (e.g., mean birth weight).

## 6.3 Types of Studies

### Experiments vs. Observational Studies

- **Observational Studies**:
    
    - No intervention; simply observe the data.
    - Include surveys and environmental monitoring.
- **Experiments**:
    
    - Involve interventions (e.g., administering drugs).
    - Allow observations to establish causal relationships.

### Random Sampling

- Essential for obtaining a representative sample.
- The method of **Random Sampling** ensures every individual has an equal chance of selection, preventing bias.

### Random Allocation

- Used in experiments to assign treatments randomly to establish causality (e.g., comparing drug effects).

### Observational Studies Breakdown

- Include surveys and comparisons (e.g., contaminated vs pristine sites).
- **Prospective Studies**: Follow outcomes over time (e.g., clinical trials).
- **Retrospective Studies**: Analyze existing data to identify associations.

## 6.4 Study Design

### Bias, Variance, and Confounding

- **Bias**: Non-representative samples leading to skewed estimates.
    
    - Example: Using biased sampling methods like convenience sampling.
- **Regression to the Mean**: A statistical phenomenon where extreme measurements are followed by more typical outcomes.
    

### Variability

- Sources of variability include:
    - Population average.
    - Genetic/environmental differences.
    - Temporal changes.
    - Measurement errors.

### Confounding

- Occurs when variables are associated with each other, potentially skewing results (e.g., location affecting outcomes).

### Placebo Effect

- The psychological impact of believing one is receiving treatment may confound results.
- Control groups often receive a placebo to gauge actual treatment efficacy.

### Sampling Methods

- Methods to prevent bias:
    - **Simple Random Sampling**: Every member has an equal chance.
    - **Cluster Sampling**: Sampling clusters rather than individuals.
    - **Stratified Sampling**: Dividing population based on specific criteria.
    - **Blocking**: Organizing subjects to reduce known variability.

### Additional Sampling Methods

- **Convenience Samples**: Select based on availability.
- **Snowball Sampling**: Uses referrals from initial subjects.
- **Responder Bias**: Participants who choose to respond may have stronger opinions.

### Principles of Study Design

- **Randomization**: Reduces bias.
- **Controlling Variation**: Detects subtle effects.
- **Replication**: Addresses unknown sources of variation.
- **Blocking**: Addresses known sources of variation.

## 6.5 Paired Data

### Paired Data

- Involves two measurements per block, simplifying analysis (e.g., measuring head sizes with two types of calipers).

### Paired t-statistic

- Differences between pairs calculated as $d_i = x_i - y_i$.
- The t-statistic formula: $$ t = \frac{\bar{d}}{s_d / \sqrt{n}} $$ where $\bar{d}$ is the mean of the differences, and $s_d$ is the standard deviation.

### Comparison of Paired vs. Unpaired Data

- Using paired data increases the ability to detect differences by controlling for variation among subjects.
- **Power**: The likelihood of finding a true effect when it exists.

### Hypothesis Testing Revisitation

- **Type I Error**: Incorrectly rejecting a true null hypothesis.
- **Type II Error**: Failing to reject a false null hypothesis.
- **Power**: One minus the probability of Type II error, indicating the test's ability to detect a true effect.

## Summary

- Data takes many forms; fundamentally classified as quantitative or qualitative.
- The population encompasses all items of interest; a sample represents a portion of this.
- Inference and estimation allow us to draw conclusions about populations from samples.
- Experimental design plays a crucial role in understanding variability, bias, and relationships.
- Paired hypothesis tests show greater statistical power than unpaired tests, improving the validity of findings.



