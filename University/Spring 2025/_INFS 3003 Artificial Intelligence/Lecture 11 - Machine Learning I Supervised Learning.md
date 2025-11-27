
> [!faq] About this Lecture
> Class: INFS3003
> Subject: #artificalIntelligence
> Topics: #coding 
> Date: 2025-10-27 at 12:44

## Machine Learning Fundamentals

### Definition of Machine Learning

**Machine Learning**: A machine (agent) is learning if it improves its performance after making observations about the world.

### Why Machine Learning?

- **Cannot anticipate all possible future situations**: Real-world scenarios are too diverse and unpredictable
- **No programmatic solution available**: Some problems cannot be solved using logic-based knowledge representation
- Problems where we don't know how to explicitly program a solution

### Learning Process

**How Agents/Machines Learn:**

1. Obtain new knowledge from intelligent actions and real-world observations
2. Put the new knowledge into its Knowledge Base (KB)

**Learning Pattern Examples:**

- **Observation-based learning**:
    - Observation 1: X is a kind of bird & X can fly
    - Observation 2: Y is not a bird & Y cannot fly
    - Observation 3: Z is a kind of bird & Z can fly
    - Pattern extracted: Birds can fly
- **Logical induction**:
    - P(a) ⇒ Q(a)
    - P(b) ⇒ Q(b)
    - ...
    - P(k) ⇒ Q(k)
    - Therefore: ∀x P(x) ⇒ Q(x)

## Agent Components

### Seven Components of Agents

1. Direct mapping from conditions on current state to actions
2. Means to infer relevant properties of the world from percept sequence
3. Information about world evolution and results of possible actions
4. Utility information indicating desirability of world states
5. Action-value information indicating desirability of actions
6. Goals describing the most desirable states
7. Problem generator, critic, and learning element for system improvement

**Key Point**: Any component can be improved by machine learning

## Learning Factors

### Three Key Factors

- **Goal/Target**: Which component is to be improved
- **Data**: What prior knowledge the agent has (influences the model it builds)
- **Feedback of Data**: What data and feedback on that data are available

## Two Fundamental Learning Problems

### Classification

**Definition**: Assigning objects to a group (with or without guidance)

- Can be supervised or unsupervised
- Discrete output categories
- Examples: spam detection, image recognition, disease diagnosis

### Regression

**Definition**: Estimating relationships between a dependent variable and one or more independent variables

- Example: Estimating salary (dependent variable) based on experience (independent variable)
- Continuous output values
- Examples: price prediction, temperature forecasting, stock market trends

## Three Types of Learning

### Supervised Learning

**Definition**: Agents observe input-output pairs and learn a function that maps from input to output

**Characteristics**:

- Observed inputs (features) and outputs (labels) pairs supervise the learning process
- Labels act as supervisors
- Requires labeled training data
- Training data explicitly tells the model what the correct answer is

### Unsupervised Learning

**Definition**: Agents learn patterns in the input without any explicit feedback

**Characteristics**:

- No input-output pairs
- Only inputs (features) are provided
- Discovers hidden patterns and structures
- No "correct answers" provided during training

### Reinforcement Learning

**Definition**: Agents learn from a series of reinforcements: rewards and punishments

**Characteristics**:

- Uses reinforcements to lead the learning process
- Goal is to maximize rewards (minimize punishments)
- Focuses on pattern of actions rather than pattern of rewards/punishments
- Learns through trial and error

## Supervised Learning Details

### Core Ideas

**Objective**: Learn the pattern behind given inputs/features-outputs/labels pairs

**Iterative Improvement Process**:

1. Model provides a predicted label for each given data sample (feature vector)
2. Model calculates the distance between the real label and predicted label
3. Model updates itself to decrease the distance until minimized

### Formal Definition

**Given**:

- Training set containing N input-output pairs: (xᵢ, yᵢ), where i ∈ [1, N]
- xᵢ is a feature vector
- yᵢ is the ground truth
- Unknown function f produces yᵢ = f(xᵢ)

**Task**: Discover a function h that approximates the true function f

**Key Concepts**:

- **h**: Hypothesis/model about f (real relationship between xᵢ and yᵢ in the real world)
- **H**: Hypothesis space (set of all possible hypotheses)
- **Good algorithm**: Finds the best h from H to approximate f
- The learned hypothesis h should generalize well to unseen data

### Two Phases of Supervised Learning

#### Training Phase Evaluation

**Bias**:

- Measures systematic error
- How much the expected prediction of learned hypothesis h differs from true function f
- How far predictions are, on average, from ground truth
- Represents the error from erroneous assumptions in the learning algorithm
- **High bias → Underfitting**

**Variance**:

- Measures stability of hypothesis
- How much h's predictions change across different training sets from same distribution
- How sensitive the model is to the particular sample
- Represents the error from sensitivity to small fluctuations in training set
- **High variance → Overfitting**

#### Test Phase Evaluation

**Test Set Requirements**:

1. **Same dimension as training set**: Each data sample must contain feature vector and label
    - **Why?** To ensure model can process test data in same format as it was trained
    - Must have the same features/attributes
2. **Disjoint from training set**: No overlap with training data
    - **Why?** To ensure unbiased evaluation of model's generalization ability
    - If test data overlaps with training data, we're just measuring memorization, not learning
    - Need to test on truly unseen data

**Evaluation Metric**: Typically accuracy on test set

### Underfitting vs Overfitting

**Underfitting** (High Bias):

- Model is too simple
- Fails to capture underlying pattern
- Poor performance on both training and test data
- Model hasn't learned enough from the data
- Example: Using a straight line to fit curved data

**Good Fit**:

- Model captures underlying pattern appropriately
- Good performance on both training and test data
- Balances bias and variance
- Model generalizes well to new data

**Overfitting** (High Variance):

- Model is too complex
- Memorizes training data including noise
- Excellent performance on training data
- Poor performance on test data
- Model has learned the noise along with the signal
- Example: Complex curve passing through every training point

**Visual Understanding**:

- **Classification**: Decision boundaries too simple (underfit) vs too complex/wiggly (overfit)
- **Regression**: Line/curve doesn't follow trend (underfit) vs passes through all points including outliers (overfit)

## Decision Trees

### Basic Concepts

**Decision Tree Definition**: A representation of a function that maps a vector of attribute values (features) to a single output value - a "decision" (label)

**Structure**:

- **Root node**: Starting point (first test/attribute)
- **Internal nodes**: Tests on attributes
- **Branches**: Possible values of attributes
- **Leaf nodes**: Final classifications/decisions

**Advantages**:

- Easy to understand and interpret
- Visual representation of decision logic
- Can handle both categorical and numerical data
- Requires little data preparation

### Case Study: Restaurant Waiting Problem

**Problem**: Determine under what conditions we should wait for a table at a restaurant

**Problem Type**: Binary classification (Wait or Not Wait)

**Real-world application**: Decision support system for restaurant patrons

#### Attributes/Features (10 total)

- **Alt** (Alternate): Whether there is a suitable alternative restaurant nearby (Yes/No)
- **Bar**: Whether restaurant has comfortable bar area to wait in (Yes/No)
- **Fri**: Whether it is Friday (Yes/No)
- **Hun** (Hungry): Whether we are hungry (Yes/No)
- **Pat** (Patrons): How many people in restaurant (None, Some, Full)
- **Price**: Restaurant's price range (, $ , $)
- **Rain** (Raining): Whether it is raining outside (Yes/No)
- **Res** (Reservation): Whether we made a reservation (Yes/No)
- **Type**: Kind of restaurant (French, Thai, Burger)
- **Est** (WaitEstimate): Wait estimated by host (0-10 min, 10-30, 30-60, >60)

**Label**: WillWait - Decision about whether to wait (Yes/No)

#### Example Output Pattern

From the decision tree, we can extract rules like:

- For all restaurants r: If Patron(r, Full) AND WaitEstimate(r,10-30) AND Hungry(r, No) then WillWait(r)

### Learning Decision Trees: Step-by-Step Algorithm

#### Step 1: Collect Raw Data

- Collect data samples with all attributes (in this case: 12 samples with 10 attributes each)
- Each sample has feature values and a label (Wait or Not Wait)
- This forms your training dataset

#### Step 2 (Initial Naive Approach - WRONG METHOD)

**Naive Approach**: Simply traverse attributes in fixed order (first attribute, then second attribute, etc.)

**Critical Problems with This Approach**:

- Tree just memorizes observations without extracting general patterns
- Creates overly complex tree
- Many different decision trees possible - no systematic way to choose
- No generalization to unseen data
- Doesn't follow any optimization principle

**Why this fails**: You end up with a trivial tree that works perfectly on training data but has learned nothing useful

#### Occam's Razor Principle

**Principle**: The most likely hypothesis is the simplest one that is consistent with all observations

**Application to Decision Trees**: Find the smallest decision tree that correctly classifies all training examples

**Reasoning**: Simpler models are more likely to generalize well to new data

#### Step 2 (Correct Approach): Follow Specific Order Based on Importance

**Core Strategy**: Always select the "important" attribute that can divide the dataset into subsets where most data samples can be classified

**Key Question**: How do we determine which attribute is most important?

**Answer**: Use the attribute that maximizes immediate classification

**Example Analysis with Patrons Attribute**:

- Using **Patrons** as first attribute:
    - When Patrons = None: All examples classify as "Not Wait" (immediate classification)
    - When Patrons = Some: All examples classify as "Wait" (immediate classification)
    - When Patrons = Full: Mixed results (need further testing)
    - Result: 6 out of 12 samples classified immediately with just one test
    - Only need further testing under "Full" category

**Comparison with Other Attributes**:

- After testing all attributes, Patrons is identified as best
- Provides maximum classification with minimum tree depth
- Most efficient first split

#### Measurement of Attribute Importance

**Formula**: R(A) = M / N

**Where**:

- N = total number of training instances (data samples)
- M = total number of training instances uniquely classified by attribute A
- R(A) = ratio indicating how well attribute A classifies the data

**Selection Process**:

1. Calculate R(A) for each remaining attribute
2. Choose the attribute with highest R(A) value
3. This becomes the next node in the tree

**Example**: If Patrons classifies 6 out of 12 samples: R(Patrons) = 6/12 = 0.5

#### Step 3: Recursive Construction

For leaf nodes where examples have different classifications:

1. Consider only the subset of training data that reaches this node
2. Calculate the most important attribute for that subset using R(A)
3. Insert it as a root for that subtree
4. Create branches for each possible value of that attribute
5. Each branch leads to a new subset of data

**Example Process**:

- After selecting Patrons as root, the "Full" branch has mixed classifications
- For the "Full" subset only, calculate R(A) for remaining attributes
- Might find that "Hungry" is most important for this subset
- Add "Hungry" as node under "Full" branch

#### Step 4: Continue Until Completion

**Stopping Condition**: Continue the procedure until for each leaf node, all examples are in the same classification

**Characteristics of Complete Tree**:

- Pure leaf nodes (all Wait or all Not Wait)
- Every path from root to leaf represents a complete decision rule
- Tree correctly classifies all training examples
- No leaf contains mixed classifications

#### Step 5: Generate Patterns (Hypotheses/Model)

Extract logical rules from decision tree by tracing paths from root to leaves:

**Example Rules Generated**:

- Rule 1: For all restaurants r: If Patrons(r, Some) then WillWait(r)
- Rule 2: For all restaurants r: If Patrons(r, Full) AND Hungry(r, No) AND Type(r, French) then WillWait(r)
- Rule 3: For all restaurants r: If Patrons(r, Full) AND Hungry(r, No) AND Type(r, Burger) then WillWait(r)
- Rule 4: For all restaurants r: If Patrons(r, Full) AND Hungry(r, No) AND Type(r, Thai) AND Fri/Sat(r) then WillWait(r)

**Interpretation**: Each path from root to leaf becomes an IF-THEN rule

**Usage**: These rules can now be applied to new, unseen restaurant scenarios

#### Step 6: Test the Model

**Testing Process**:

- Use a test dataset that is disjoint from training dataset
- Apply learned rules to each test example
- Compare predicted labels with actual labels
- Calculate accuracy and other performance metrics

**Why Separate Test Set**:

- Measures model's ability to generalize
- Identifies if model has overfit to training data
- Provides unbiased performance estimate

## Key Takeaways

### Critical Principles

1. **Simplicity (Occam's Razor)**: Prefer simpler models that still explain the data
    - Simpler models generalize better
    - Smaller decision trees are preferred
2. **Generalization over Memorization**: Model should work on unseen data, not just memorize training data
    - Avoid overfitting
    - Test on separate dataset
3. **Balance Bias and Variance**: Avoid both underfitting and overfitting
    - High bias = too simple = underfitting
    - High variance = too complex = overfitting
    - Goal: sweet spot in the middle
4. **Proper Evaluation**: Always test on separate test set
    - Never test on training data
    - Test set must be disjoint from training set
5. **Systematic Attribute Selection**: Choose attributes that maximize information gain/classification ratio
    - Don't use arbitrary order
    - Use R(A) metric or similar measures
    - Greedy approach: best attribute at each step

### Decision Tree Advantages

- **Interpretable**: Easy to understand and explain to non-technical users
- **Versatile**: Handles both categorical and numerical data
- **No preprocessing**: No need for feature scaling or normalization
- **Non-linear**: Can capture non-linear relationships between features and labels
- **Visual**: Can be drawn and understood visually

### Common Pitfalls to Avoid

1. **Building trivial trees that memorize data**: Using attributes in arbitrary order without optimization
2. **Not following systematic attribute selection**: Ignoring importance metrics
3. **Using same data for training and testing**: Leads to overly optimistic performance estimates
4. **Ignoring the bias-variance tradeoff**: Creating trees that are too simple or too complex
5. **Stopping too early**: Tree doesn't capture all patterns (high bias)
6. **Growing tree too large**: Tree memorizes noise (high variance)

### Practical Considerations

**When to use Decision Trees**:

- Need interpretable model
- Have mixture of categorical and numerical features
- Want quick training and prediction
- Don't have too many features (curse of dimensionality)

**Limitations**:

- Can overfit if not controlled (need pruning)
- Sensitive to small variations in data
- Biased toward features with more levels
- Not ideal for capturing linear relationships

**Real-world Applications**:

- Medical diagnosis (interpretable rules)
- Credit approval decisions
- Customer segmentation
- Fraud detection
- Any domain requiring explainable AI