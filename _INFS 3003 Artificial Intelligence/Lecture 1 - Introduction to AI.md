
> [!faq] About this Lecture
> Class: INFS3003
> Subject: #artificalIntelligence
> Topics: #coding 
> Date: 2025-07-29 at 02:55

## Course Information

### Staff
- **Subject Coordinator & Lecturer**: Dr Zhigang Lu
  - Email: z.lu@westernsydney.edu.au
  - Office: KW-Y.3.32 (Kingswood Campus, Building Y, Level 3, Room 32)
  - Office hours: By appointment
  - Homepage: https://zhigang.lu

- **PS Tutor**: Ms Jieya Zhou (achieved HD in this subject)
  - Email: j.zhou5@westernsydney.edu.au
  - Consultation: By appointment

### Delivery Mode
- **Lectures**: Blended F2F and online
  - **Odd weeks** (1, 3, 5, 7, 9, 11, 13):
    - Kingswood: Live streaming in lecture room
    - Parramatta: Face-to-face
    - vUWS: Lecture recordings (Panopto and Screencast)
  - **Even weeks** (2, 4, 6, 10, 12, 14):
    - Kingswood: Face-to-face
    - Parramatta: Live streaming in lecture room
    - vUWS: Lecture recordings (Panopto and Screencast)
- **Tutorials/Labs**: Face-to-face

### Assessment Structure

#### INFS 3003
- **Lab Practical Demonstration**: 10%
  - Due: Practical sessions in Week 6 and Week 13 (in person)
- **Assignment**: 40%
  - Due: 23:59, Friday of Week 7 and Week 14 (submit to vUWS)
- **Final Exam**: 50%
  - Mandatory
  - Due: Exam period

**Pass Requirements**:
- Achieve 50% in the final exam
- Achieve at least 50% overall marks

#### INFS 3020
- **Lab Practical Demonstration**: 5%
  - Due: Practical sessions in Week 6 and Week 13 (in person)
- **Assignment**: 30%
  - Due: 23:59, Friday of Week 7 and Week 14 (submit to vUWS)
- **Final Exam**: 50%
  - Mandatory
  - Due: Exam period
- **Applied Project**: 15%
  - Mandatory
  - Due: 23:59, Friday of Week 15 (submit to vUWS)

**Pass Requirements**:
- Submit mandatory assessments
- Achieve 50% in the final exam
- Achieve at least 50% overall marks

### Essential Reading
- **Russell S and Norvig P.** (2021). *Artificial Intelligence: A Modern Approach*, 4th global edition. Pearson.
  - Classic textbook used by 1500+ universities in 134 countries/regions
  - Used by all NSW universities and Group of Eight universities
  - Covers all important AI topics

## What are AI and Intelligent Systems?

### Core Definition
**AI Systems**: Systems that can do something intelligently through:
- **Thinking** (cognitive processes)
- **Acting** (behavioral outputs)

### Four Approaches to AI

#### The AI Matrix
|              | **Human-like** | **Rational** |
|--------------|----------------|--------------|
| **Thinking** | Think like humans | Think rationally |
| **Acting**   | Act like humans | Act rationally |

#### Acting Like Humans
**Requirements for AI systems**:
- Knowledge representation
- Automated reasoning
- Machine learning, including:
  - Natural language processing (NLP)
  - Computer vision (CV)
  - Robotics

##### The Turing Test
**Setup**:
- Two rooms with screens
- Room 1: Computer program
- Room 2: Human (woman in example)
- Interrogator asks questions to both

**Process**:
1. Interrogator: asks questions 1, 2, ..., k
2. Computer (Room 1): provides answers 1, 2, ..., k
3. Human (Room 2): provides answers 1, 2, ..., k

**Key Rules**:
- Human always answers truthfully
- Computer can lie
- If interrogator cannot distinguish between human and computer responses, the program **passes the Turing Test**

**Modern Achievement**: ChatGPT has passed the Turing Test

#### Thinking Like Humans
**Approach**: Program thinks like a human
- **Method**: Cognitive science combining Computer Science (AI) and Psychology
- **Process**: Psychology develops theories about human mind → Computer models implement these theories

#### Thinking and Acting Rationally
**Thinking Rationally**:
- Uses formal logic → Computer program → Reasoning
- **Example**: "Socrates is a man; all men are mortal; therefore Socrates is mortal"

**Acting Rationally**:
```
Beliefs + Goals → Inference → Action
Beliefs + Goals → Inference + Rationality → Rational Action
```

## Foundation of AI

### Interdisciplinary Roots
AI draws from multiple disciplines:
- **Philosophy** (428 B.C. - present)
- **Mathematics** (C. 800 - present)
- **Psychology** (1879 - present)
- **Computer Engineering** (1940 - present)
- **Linguistics** (1957 - present)

### Philosophy Base

#### Historical Development
- **Plato** (428 B.C.) and **Aristotle** (384-322 B.C.):
  - Logic of Mind → Reasoning Procedure

- **Leibniz** (1646-1716):
  ```
  Mechanical Device + Physical Laws → Mental Operations
  ```

#### Key Philosophical Questions
```
Mind ↔ Physical Device
Reasoning + Knowledge → Set of Laws
```

**Knowledge Acquisition Methods**:
- Empiricism
- Induction
- Observation

**Connection Between Knowledge and Action**:
```
Knowledge (beliefs) + Goals → Action
```

### Mathematics Base

#### Core Mathematical Areas
```
AI Programs ← Logic + Probability + Computation
```

**Computation**:
- Formal algorithms
- Decidability
- Intractability
- NP-Complete problems

**Logic**:
- Representation
- Reasoning

**Probability**:
- Uncertainty
- Likelihood

**Economic Theories**:
- Game theory
- Operational research

### Psychology Base

#### Behaviorism
- Studies mental constructs (knowledge, beliefs, goals)
- Uses experimental approaches (stimulus-response)

#### Cognitive Psychology
**Question**: How does the human brain possess and process information?

**Process Model**:
```
Stimulus → Internal Representation → New Internal Representation
New Internal Representation → Action (Response)
```

### Computer Engineering Base

#### Famous Early Attempts
- **Heath Robinson** (1940): First operational computer by Alan Turing
- **Z-3** (1941): First operational programmable computer by Konrad Zuse
- **IBM 701** (1952)

#### Unexpected Contributions to AI
- Time sharing
- Interactive interpreters
- Personal computers with windows and mice
- Linked list data type
- Functional programming

### Linguistics Base

#### Connection
```
Language ↔ Thought
```

#### Implementation Requirements
- Language learning
- Language understanding
- Formal description of language

**Result**: AI + Linguistics = Computational Linguistics = Natural Language Processing

## History of AI Research

### Inception of AI (1943-1956)

#### McCulloch & Pitts (1943) - Neural Networks
**Three Sources**:
- Function of neurons in brain
- Propositional logic
- Turing's computational theory

**Artificial Neuron Characteristics**:
- "On": Response
- "Off": No response

**Main Results**:
- Any computable function can be computed by some neural network
- All propositional logical connections (∧, ∨, ¬) can be implemented by simple net structures

#### Key Milestones
- **Minsky & Edmonds (1959)**: First neural network computer
- **Dartmouth Workshop (1956)**: Organized by John McCarthy
  - Worked on automata theory, neural nets, and intelligence

### Early Enthusiasm (1952-1969)

#### General Problem Solver (GPS)
**Developers**: Newell & Simon
- **Approach**: Imitate human problem-solving protocols
- **Method**: Heuristic of means-ends analysis
- **Significance**: First program to embody "thinking humanly" approach

```
Start → Means-Ends Analysis → Goal
```

#### John McCarthy (MIT, 1958)
**Major Contributions**:
- Defined Lisp programming language (dominated AI for 30 years)
- Invented time-sharing
- Proposed Advice Taker (first complete AI system with knowledge base)
- Advanced problem solving & knowledge representation
- Worked on vision, learning, and natural language understanding

#### Minsky (MIT, 1958-1969)
**Microworlds Model**: Limited problems requiring intelligence
- **Blocks World**: Most famous microworld
  - Task: Rearrange blocks on table to expected configuration

```
Initial State:    Goal State:
    B                 C
    C                 B
    A                 A
```

### A Dose of Reality (1966-1973)

#### Herbert Simon's 1957 Predictions (Failed)
- Computer would be chess champion in 10 years
- Important mathematical theorem would be proved by machine
- Machines that think, learn, and create already exist

#### Three Major Difficulties

**Difficulty 1: Lack of Domain Knowledge**
- Early systems used only simple syntactic manipulations
- Example: Machine translation failures

**Difficulty 2: Intractability**
- Problems were computationally infeasible
- Combinatorial explosion in search spaces

**Difficulty 3: Fundamental Structural Limitations**
- Basic structures used were insufficient for intelligent behavior

### Expert Systems (1969-1986)

**Key Insight**: Domain-specific knowledge allows larger reasoning steps

**Examples**:
- **MYCIN**: Diagnose blood infections
- **LUNAR**: Geology applications

### Return of Neural Networks (1986-Present)

#### Connectionist Models
**Features**:
- Connected neurons reflecting brain information processing
- Back-propagation learning algorithms
- Capability to learn from examples

#### Debate: Symbolism vs. Connectionism
- **Symbolism**: Humans manipulate symbols (defining characteristic)
- **Connectionism**: Symbols are the "luminiferous aether of AI"

### Probabilistic Reasoning and Machine Learning (1987-Present)

**New Algorithms**:
- Hidden Markov models
- Bayesian networks
- Deep neural networks

### State of the Art

#### Major Achievements
- **IBM Watson DeepQA (2011)**: Won Jeopardy! with $1 million prize
- **Google AlphaGo**: 
  - **March 2016**: Beat Lee Sedol (9-dan) 4/5 matches
  - **May 2017**: Beat Ke Jie (world #1) 3/3 matches
- **Generative AI**: ChatGPT released end of 2022
- **Autonomous Cars**
- **Advanced Robotics**

## Overview of AI and Intelligent Systems

### AI System Architecture
```
AI
├── AI Foundations
│   ├── Search
│   ├── Knowledge Representation
│   ├── Learning
│   ├── Planning
│   └── Robotics
└── AI Systems
    ├── Natural Language Processing
    ├── Knowledge Based Systems
    └── ...
```

### Practical Example: Christmas Gift Planning

#### Scenario
Peter plans to buy Christmas gifts for:
- Mother
- Father  
- Wife

#### Peter's Knowledge Base
- Mother likes plants → buy plant
- Father learning photography → buy photography book
- Wife enjoys specific perfume → buy the specific perfume

#### AI Tasks

**Task 1: Knowledge Representation**
**Question**: How to encode Peter's knowledge into machine?
**Solution**: Knowledge Representation & Reasoning (not just programming!)

**Task 2: Search Problem**
**Question**: What's the best way to buy these three gifts?

```
Search Space:
Peter's Home → Plant Shop
            → Shopping Mall (Bookstore, Plant Shop)  
            → Chemist
            → Bookstore
```

### Core AI Equation
```
Intelligent Action = Knowledge Representation + Search
```

#### Knowledge Representation Example
```
A: It is raining
B: The road is wet
A ⇒ B: If it is raining, then the road is wet

Given: A, A ⇒ B
Conclusion: B (due to modus ponens - inference rule)
```

### AI System Types

#### Planning System
```
Actions + Goal → Planning System → Sequence of Actions
```

#### Learning System
```
Observations → Learning System → Conceptual Knowledge
```

#### Knowledge-Based Systems (KBS)
- Expert Systems
- Intelligent Systems

**Integration**:
```
Intelligent Action ← Planning + Learning + KBS + ...
```

## Key Takeaways

### Essential Concepts
1. **AI Definition**: Systems that think/act humanly or rationally
2. **Turing Test**: Benchmark for human-like AI behavior
3. **Interdisciplinary Nature**: Philosophy, Mathematics, Psychology, Engineering, Linguistics
4. **Core Components**: Knowledge Representation + Search = Intelligent Action
5. **Historical Evolution**: From symbolic AI → connectionism → modern deep learning

### Practical Applications
- Natural language processing
- Computer vision
- Robotics
- Expert systems
- Game playing (chess, Go)
- Autonomous systems

