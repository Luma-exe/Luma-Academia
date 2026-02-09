
> [!faq] About this Lecture
> Class: INFS3019
> Subject: #projectManagement
> Topics: #it
> Date: 2025-09-14 at 22:35

## Introduction and Importance

### The Critical Challenge of Project Scheduling

- **Primary Challenge**: Managers often cite delivering projects on time as one of their biggest challenges
- **Time's Inflexibility**: Time has the least amount of flexibility; it passes no matter what happens on a project
- **Cultural Factors**: Individual work styles and cultural differences may cause schedule conflicts
- Different cultures and entire countries have different attitudes about schedules

### Project Manager's Key Responsibilities

**Core Duties:**

- **Resist Pressure**: Don't dictate unrealistic schedules under stakeholder pressure
- **Determine Feasibility**: Create schedules that are actually possible to achieve
- **Stakeholder Buy-in**: Persuade stakeholders that the proposed schedule makes logical sense
- **Delivery Commitment**: Deliver the project according to the agreed-upon schedule

**Iterative Considerations:**

- Within each iteration, teams must consider level of uncertainty and complexity with desired outcomes
- Number of team members as resources is often the primary limitation

## Project Schedule Management Processes

### Seven Key Processes

1. **Plan Schedule Management**
2. **Define Activities**
3. **Sequence Activities**
4. **Estimate Activity Resources**
5. **Estimate Activity Durations**
6. **Develop Schedule**
7. **Control Schedule**

## Defining Activities

### Core Components

**Activity Definition:**

- Involves identifying specific actions that will produce project deliverables
- Must be detailed enough to determine resource and schedule estimates

**Activity List Elements:**

- Activity name
- Activity identifier or number
- Brief description of the activity

**Activity Attributes (Extended Information):**

- Predecessors and successors
- Logical relationships
- Leads and lags
- Resource requirements
- Constraints
- Imposed dates
- Assumptions related to the activity

### Milestones

**Definition**: A significant event that normally has no duration

**Key Characteristics:**

- Takes several activities and substantial work to complete
- Useful tools for setting schedule goals and monitoring progress
- **Examples**:
    - Obtaining customer sign-off on key documents
    - Completion of specific products

**SMART Criteria for Milestones:**

- **S**pecific
- **M**easurable
- **A**ssignable
- **R**ealistic
- **T**ime-framed

## Sequencing Activities

### Types of Dependencies

**Mandatory Dependencies:**

- Inherent in the nature of the work being performed
- Also called "hard logic"
- Cannot be avoided due to physical or technical constraints

**Discretionary Dependencies:**

- Defined by the project team
- Also called "soft logic"
- Should be used with care as they may limit later scheduling options

**External Dependencies:**

- Involve relationships between project and non-project activities
- Outside the direct control of the project team

### Network Diagrams

**Purpose**: Schematic display of logical relationships among project activities

#### Arrow Diagramming Method (ADM)

- **Also Known As**: Activity-on-Arrow network diagrams
- **Representation**: Activities are represented by arrows
- **Nodes**: Circles are the starting and ending points of activities
- **Limitation**: Only show finish-to-start dependencies

#### Precedence Diagramming Method (PDM)

- **Also Known As**: Activity on Node (AON)
- **More Common**: The preferred method for displaying work activities
- **Representation**: Scheduled activities with nodes connected by logical relationships
- **Flow**: Sequences of performance from left to right
- **Arrow Meaning**: Denotes predecessor–successor relationship only (length is irrelevant)

### Predecessor and Successor Activities

**Predecessor Activity**: An activity that logically precedes another activity or activities

**Successor Activity**: An activity that logically follows another activity or activities

### Leads and Lags

**Lead**:

- A modification of a logical relationship that allows acceleration of the successor activity
- Allows the successor to start before the predecessor is completely finished

**Lag**:

- A modification of a logical relationship that directs a delay in the successor activity
- Forces a waiting period between the predecessor and successor

### Example Activity List

**Product Upgrade Project Activities:**

- Determine product features
- Acquire prototype materials
- Produce prototype
- Design marketing campaign
- Design graphics
- Conduct marketing
- Perform sales calls

## Estimating Activity Durations

### Key Concepts

**Duration vs. Effort:**

- **Duration**: Includes actual time worked + elapsed time
- **Effort**: Number of workdays/work hours required to complete a task
- **Important**: Effort does not normally equal duration

### Best Practices for Estimation

**Who Should Estimate:**

- People doing the work should help create estimates
- An expert should review all estimates

**Three-Point Estimate:**

- Includes optimistic, most likely, and pessimistic estimates
- Required for PERT and Monte Carlo simulations

### Example Time Estimates

|Activity Name|Time Estimate (Workdays)|
|---|---|
|Determine new product features|5|
|Acquire prototype materials|20|
|Produce prototype|10|
|Design marketing campaign|10|
|Design graphics|10|
|Conduct marketing|30|
|Perform sales calls|25|

### Program Evaluation and Review Technique (PERT)

**Purpose**: Address variability in duration of individual activities and impact on entire project schedule

**Process:**

1. Sequence activities into a network
2. Create three estimates of time to complete each activity

**PERT Formula:**

```
Expected Time = (Optimistic + 4 × Most Likely + Pessimistic) ÷ 6
```

#### PERT Example Calculation

|Activity|Optimistic|Most Likely|Pessimistic|Expected|
|---|---|---|---|---|
|Determine new product features|4|5|12|6|
|Acquire prototype materials|16|20|30|21|
|Produce prototype|8|10|12|10|
|Design marketing campaign|9|10|14|10.5|
|Design graphics|6|10|20|11|
|Conduct marketing|28|30|50|33|
|Perform sales calls|20|25|30|25|

**PERT Advantages:**

- Reinforces uncertainty that exists in project schedules
- Calculations often indicate expected time is longer than "most likely" time

**PERT Difficulties:**

- Takes more effort to create three estimates
- No guarantee of estimate quality
- May underestimate the risk of schedule overruns

**Reality Check**: Infrequently used by Project Managers in practice

- PMs may informally use three time estimates for key activities
- PMs may use Monte Carlo simulation instead

### Monte Carlo Simulation

**Definition**: A computerized mathematical technique that allows people to account for risk in quantitative analysis and decision making, providing a range of possible outcomes and their probabilities

**Advantages:**

- Flexibility allows more realistic estimates
- Provides extensive information about possible outcomes

**Disadvantages:**

- Significant time requirement
- Requires specialized software and skills

### Professional Development Advice

**Estimation Skills Development:**

- Practice estimating duration for different activities
- Take actual measurements to compare with estimates
- Define activities in detail to improve estimate accuracy
- Communicate estimate concerns early to allow for project adjustments

## Developing Project Schedules

### Critical Questions to Answer

**Project Timeline Questions:**

- When will the project be complete?
- What is the earliest date a particular activity can start/end?
- What activities must be complete before another can start?
- What happens if material delivery is late?

**Resource Questions:**

- Can a key worker take vacation during their critical activity?
- If a person has two activities, which should be done first?
- How many hours are needed from each worker next week/month?
- Which worker/resource creates a bottleneck?

**Change Management Questions:**

- What's the impact of adding an additional module?
- How much faster can the project be completed with extra $10,000?
- Are all scheduled activities actually completed on time?
- How many resources are required and are they available?

### Critical Path Method (CPM)

**Definition**: Network diagramming technique used to predict total project duration

**Critical Path**: The sequence of schedule activities determining the duration of the project; generally the longest path through the project

**Key Characteristics:**

- Series of activities that determine the earliest project completion time
- Longest path through the network diagram
- Has the least amount of slack or float
- **Slack/Float**: Amount of time an activity may be delayed without delaying succeeding activities or project finish date

#### Calculating Critical Path

**Steps:**

1. Develop a good network diagram
2. Add duration estimates for all activities on each path
3. Identify the longest path (this is the critical path)

**Critical Insight**: If any critical path activities take longer than planned, the entire project schedule will slip unless corrective action is taken

#### Important Critical Path Concepts

**Common Misconception**: The name "critical" doesn't mean it includes all critical activities

- Only accounts for time constraints
- Can have multiple critical paths if path lengths are equal
- Critical path can change as the project progresses

**Management Focus**: Project managers should closely monitor critical path activities to avoid late project completion

### Two-Pass Method

**Purpose**: Determine the amount of slack each activity has

**Process**: Make two logical passes through the network:

**Forward Pass:**

- Critical path method technique for calculating early start and early finish dates
- Works forward through the schedule model from project start date

**Backward Pass:**

- Critical path technique for calculating late start and late finish dates
- Works backward through the schedule model from project end date

### Float Calculations

**Total Float:**

- Amount of time a schedule activity may be delayed from its early start date without delaying the project end date
- Formula: `Late Start - Early Start` OR `Late Finish - Early Finish`

**Free Float:**

- Amount of time a schedule activity can be delayed without delaying the early start of immediately following activities
- More restrictive than total float

#### Example Float Calculations

|Task|Start|Finish|Late Start|Late Finish|Free Slack|Total Slack|
|---|---|---|---|---|---|---|
|A|8/3/15|8/3/15|8/5/15|8/5/15|0d|2d|
|B|8/3/15|8/4/15|8/3/15|8/4/15|0d|0d|
|C|8/3/15|8/5/15|8/5/15|8/7/15|0d|2d|
|D|8/4/15|8/7/15|8/6/15|8/11/15|2d|2d|
|E|8/5/15|8/11/15|8/5/15|8/11/15|0d|0d|
|F|8/5/15|8/10/15|8/14/15|8/17/15|7d|7d|
|G|8/6/15|8/13/15|8/10/15|8/17/15|0d|2d|
|H|8/12/15|8/19/15|8/12/15|8/19/15|0d|0d|
|I|8/14/15|8/17/15|8/18/15|8/19/15|2d|2d|
|J|8/20/15|8/24/15|8/20/15|8/24/15|0d|0d|

**Critical Path Activities**: Activities with 0d Total Slack (B, E, H, J in this example)

## Gantt Charts

### Purpose and Benefits

- Provide standard format for displaying project schedule information
- List project activities with corresponding start and finish dates in calendar form
- Easy-to-understand horizontal bar chart tool

### Gantt Chart Symbols

- **Black Diamond**: Milestones
- **Thick Black Bars**: Summary tasks
- **Light Gray Horizontal Bars**: Durations of individual tasks
- **Arrows**: Dependencies between tasks

### Gantt Chart Limitations

- Does not show critical path
- Does not show predecessor–successor relationships clearly
- Does not show late start and finish dates
- **Recommendation**: Use scheduling software for comprehensive analysis

### Work Breakdown Structure Integration

**Example: College Fundraiser Project Structure**

**Major Categories:**

1. Project Management
2. Location
3. Promotion
4. Entertainment
5. Safety
6. Parking
7. Food
8. Sanitation
9. Volunteers

**Sample Activities with Milestones:**

- **Location**: Contact university → Determine ideal location → Weather contingency → **LOCATION CONFIRMED**
- **Entertainment**: Research noise ordinances → Contact bands → Set up equipment → **BAND CONTRACT SIGNED** → **ENTERTAINMENT ARRANGED**
- **Safety**: Determine lighting → Contact EMS/Police → Get walkie-talkie permits → Set up first aid → **SAFETY REQUIREMENTS COMPLETED**

## Schedule Optimization Techniques

### Shortening Project Schedules

**Main Techniques:**

**1. Duration Shortening:**

- Add more resources to critical activities
- Change scope of critical activities
- Focus only on activities that will impact overall project duration

**2. Crashing:**

- Obtain greatest amount of schedule compression for least incremental cost
- Analyze cost-benefit ratio of adding resources

**3. Fast Tracking:**

- Perform activities in parallel instead of sequence
- Overlap activities that were originally planned sequentially
- **Risk**: May increase project risk due to rework if parallel activities need adjustment

### Critical Path Analysis for Trade-offs

**Free Slack Applications:**

- Activities can be delayed without impacting following activities
- Provides flexibility in resource allocation
- Allows for contingency planning

**Total Slack Applications:**

- Activities can be delayed without impacting project end date
- Critical for understanding overall project flexibility
- Helps prioritize management attention

## Advanced Scheduling Concepts

### Critical Chain Scheduling

**Philosophy**: Considers limited resources when creating project schedules and includes buffers to protect project completion date

**Theory of Constraints (TOC):**

- Management philosophy by Eliyahu M. Goldratt
- Attempts to minimize multitasking when resources work on multiple tasks simultaneously
- Focuses on identifying and managing bottleneck resources

#### Critical Chain Key Concepts

**Buffer Types:**

- **Project Buffer**: Additional time added before the project's due date
- **Feeding Buffers**: Additional time added before tasks on the critical path

**Related Laws:**

- **Murphy's Law**: If something can go wrong, it will
- **Parkinson's Law**: Work expands to fill the time allowed

**Buffer Management Strategy:**

- Protects project completion date from uncertainty
- Accounts for resource limitations in scheduling
- Provides systematic approach to handling variability

### Updating and Monitoring

**Importance of Real-Time Updates:**

- Update schedule with actual activity durations as completed
- Revise estimates for activities in progress
- Monitor changes to make informed decisions
- **Critical**: Early identification of problems allows for proactive management

## Schedule Control

### Goals of Schedule Control

1. **Know Status**: Understand current schedule performance
2. **Influence Factors**: Address causes of schedule changes
3. **Detect Changes**: Identify when schedule has changed
4. **Manage Changes**: Handle schedule modifications when they occur

### Main Inputs to Schedule Control

- **Project Management Plan**: Baseline schedule and procedures
- **Project Documents**: Current project information
- **Work Performance Data**: Actual progress measurements
- **Organizational Process Assets**: Company policies and historical data

### Reality Checks and Discipline

**Critical Activities:**

1. **Review Initial Estimates**: Check draft schedule against project charter
2. **Detailed Team Planning**: Prepare comprehensive schedule with project team
3. **Realism Check**: Ensure schedule is realistic and achievable
4. **Early Warning System**: Alert management in advance of schedule problems

## Adaptive Environment Considerations

### Agile and Scrum Differences

**Traditional vs. Agile Scheduling:**

- **Traditional Projects**: Heavily rely on critical path method and meeting estimated completion dates
- **Agile Projects**: May not need detailed activity duration estimates or comprehensive project schedules
- **Agile Focus**: Overall project completion time is less important than iterative value delivery

**Key Distinction**: Schedule management is radically different in adaptive environments compared to traditional waterfall approaches

## Key Takeaways and Best Practices

### Project Time Management Challenges

- Often cited as main source of conflict on projects
- Most IT projects exceed initial time estimates
- Requires careful balance of stakeholder expectations and realistic planning

### Success Factors

1. **Realistic Estimation**: Base estimates on actual work requirements and resource availability
2. **Stakeholder Communication**: Keep all parties informed of schedule realities
3. **Continuous Monitoring**: Regular updates and adjustments based on actual performance
4. **Risk Management**: Build appropriate buffers and contingencies
5. **Team Involvement**: Include people doing the work in estimation process

### Professional Development

- Develop strong estimation skills through practice and measurement
- Learn to communicate schedule constraints effectively
- Understand the difference between optimistic estimates and realistic commitments
- Master scheduling tools and techniques for professional credibility

## Tools and References

### Recommended Scheduling Software

- Microsoft Project
- Primavera P6
- Various online project management tools
- **Key Feature**: Look for tools that clearly show critical path and dependencies

### Further Learning

- Practice with real project examples
- Study historical project data for estimation improvement
- Understand organizational culture and its impact on scheduling
- Develop skills in both traditional and agile scheduling approaches