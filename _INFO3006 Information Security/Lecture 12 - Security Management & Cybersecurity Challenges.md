
> [!faq] About this Lecture
> Class: INFO3006
> Subject: #informationSecurity 
> Topics: #coding 
> Date: 2025-10-27 at 13:08

## Overview

This lecture covers security management principles, cybercrime impacts on business, access control mechanisms, firewalls, intrusion detection systems, and emerging AI-related security challenges.

---

## Cybercrime Impact on Business

### Global Breach Statistics (2024)

**Cost Projections:**

- **2015**: $3 trillion USD annually
- **2025**: Expected to reach $10.5 trillion USD annually
- **Growth rate**: 15% per year over five years
- Cost exceeds damage from natural disasters annually
- More profitable than global trade of all major illegal drugs combined

**Business Impact:**

- Market perception directly linked to security management quality
- Average breach costs reach millions of dollars
- Affects company reputation and financial stability

### Most Affected Sectors (2024)

- Healthcare
- Finance
- Technology
- Government
- Education
- Retail

---

## Business Security Fundamentals

### Evolution of Security

- **From**: Static computer security
- **To**: Dynamic information security

### Definitions

- **Security**: Freedom from danger or damage
- **Business Security**: Protection of enterprise assets, data, and operations from cyber threats

### Technology Enablement

- General businesses are increasingly technology-enabled
- Security must adapt to dynamic business environments

---

## Why Security Management Matters

### Core Benefits

**1. Proven Foundation**

- Provides reliable groundwork for infrastructure protection
- Protects against loss, theft, and disruption

**2. Proactive Risk Management**

- Enhances security performance
- Manages risks, threats, gaps, and vulnerabilities
- Prevents negative enterprise impacts

**3. Comprehensive Protection**

- Safeguards sensitive data
- Maintains operational integrity
- Mitigates financial impacts of cyber attacks
- Protects organizational reputation

---

## Management Fundamentals

### Definition

**Management**: The process of achieving objectives using a given set of resources

### Three Roles of Management

**1. Informational Role**

- Collecting relevant information
- Processing data
- Using information to affect objective completion

**2. Interpersonal Role**

- Interacting with superiors
- Managing subordinates
- Engaging outside stakeholders
- Managing parties that influence or are influenced by tasks

**3. Decisional Role**

- Selecting from alternative approaches
- Resolving conflicts
- Making strategic choices

---

## Information Security Management Process

### Five-Step Methodology

**Step 1: Recognize and Define the Problem**

- Identify security issues
- Clearly articulate challenges

**Step 2: Gather Facts and Make Assumptions**

- Collect relevant data
- Document assumptions
- Establish baseline understanding

**Step 3: Develop Possible Solutions**

- Brainstorm alternatives
- Consider multiple approaches
- Evaluate options

**Step 4: Analyze and Compare Solutions** Analysis includes:

- **Economic feasibility**: Cost-benefit analysis
- **Technological feasibility**: Technical capability
- **Behavioral feasibility**: User acceptance
- **Operational feasibility**: Implementation practicality

**Step 5: Select, Implement, and Evaluate**

- Choose optimal solution
- Execute implementation
- Monitor results
- Adjust as needed

---

## The Six P's of Information Security Management

### 1. Planning

**Definition**: Activities necessary to support design, creation, and implementation of InfoSec strategies

**Types of InfoSec Plans:**

- **Incident Response Planning**: Procedures for handling security incidents
- **Business Continuity Planning**: Maintaining operations during disruptions
- **Disaster Recovery Planning**: Restoring systems after catastrophic events
- **Policy Planning**: Developing security policies
- **Personnel Planning**: Staffing and training security teams
- **Technology Rollout Planning**: Implementing new security technologies
- **Risk Management Planning**: Identifying and mitigating risks
- **Security Program Planning**: Overall security strategy

### 2. Policy

**Definition**: Organizational guidelines that dictate certain behaviors

**Three General Policy Categories:**

**Enterprise Information Security Policy (EISP)**

- Sets the tone for InfoSec department
- Establishes overall security philosophy
- High-level strategic document

**Issue-Specific Security Policy (ISSP)**

- Rules defining acceptable behavior
- Focused on specific technologies
- Examples: Email policy, acceptable use policy

**System-Specific Policies (SysSPs)**

- Control configuration of equipment/technology
- Technical implementation details
- Specific to particular systems

### 3. Programs

**Definition**: InfoSec operations managed as separate entities

**Examples:**

**Security Education Training and Awareness (SETA) Program**

- Employee security training
- Awareness campaigns
- Ongoing education

**Physical Security Program**

- Fire protection
- Physical access controls
- Gates and guards
- Perimeter security

**Privacy and Awareness Programs**

- Client/customer privacy protection
- Data handling awareness

### 4. Protection

**Implementation**: Executed through risk management activities

**Key Components:**

- Risk assessment and control
- Protection mechanisms
- Technologies
- Tools
- Management of specific controls in overall InfoSec plan

### 5. People

**Critical Importance**: Most critical link in InfoSec program

**Scope:**

- Security personnel
- All employees
- Contractors and vendors
- End users

**Note**: Human factor often weakest link but also most important asset

### 6. Projects

**Definition**: Discrete sequences of activities with defined start and end points

**Characteristics:**

- Starting points and completion points clearly defined
- Temporary activity (unlike ongoing processes)
- Creates specific product, service, or end result
- Each InfoSec process should be managed as a project

**Example**: Implementing a new firewall

---

## Project Management in InfoSec

### Key Concepts

**Project vs. Process:**

- **Project**: Temporary with defined endpoints
- **Process**: Ongoing continuous activity

### Project Management Components

**Core Activities:**

- Identifying and controlling resources
- Measuring progress
- Adjusting processes as progress is made

**Team Structure:**

- Temporary assembly of group
- Members released after completion
- Reassigned to other projects

**Types of Projects:**

- **Iterative projects**: Occur regularly (e.g., budgeting)
- **Sequential projects**: Series with periodic grouped deliverables

### Benefits of Project Management

**Methodology Benefits:**

- Ensures no steps are missed
- Creates common reference blueprint
- Improves productivity

**Responsibility Benefits:**

- Reduces ambiguity
- Identifies specific responsibilities
- Clarifies accountability

**Quality Benefits:**

- Defines project constraints
- Establishes minimum quality requirements
- Increases likelihood of staying within parameters

**Monitoring Benefits:**

- Establishes performance measures
- Creates project milestones
- Simplifies monitoring
- Enables early deviation identification
- Allows early problem correction

### Project Success Criteria

A project is successful when:

1. **Completed on time or early**
2. **Completed at or below budget**
3. **Meets all specifications** in approved project definition
4. **All deliverables accepted** by end user

### Applying PM to InfoSec

**Best Practice**: Project Management Body of Knowledge (PMBoK)

- Industry standard
- Widely recognized methodology
- Other approaches exist but PMBoK most common

---

## Leadership vs. Management

### Leadership

**Definition**: Process of influencing others and gaining willing cooperation

**Components:**

- Providing purpose
- Giving direction
- Motivating team members

### Management

**Definition**: Process of achieving objectives by appropriately applying resources

**Note**: Both leadership and management skills necessary for effective InfoSec

---

## Access Controls

### Definition

Mechanisms that regulate admission of users into trusted areas of the organization

### Four Processes of Access Control

#### 1. Identification

**Definition**: Mechanism providing information about an unverified entity seeking access

**Key Terms:**

- **Supplicant**: Unverified entity requesting access
- **Identifier (ID)**: Label applied to supplicant
- **Requirement**: ID must be unique value mappable to one entity within security domain

#### 2. Authentication

**Definition**: Process of validating a supplicant's purported identity

**Four Types of Authentication Mechanisms:**

**Something You Know**

- **Password**: Secret word or character combination
- **Passphrase**: Plain-language phrase deriving virtual password
    - Example: "May The Force Be With You Always" → Virtual password: "MTFBWYA"
- **PIN**: Personal Identification Number
- **Authentication codes**

**Password Management:**

- Password memory support software (e.g., eWallet from Ilium Software)
- Helps create and manage strong passwords

**Something You Have**

- **Dumb card**: Magnetic strip cards
    - Contains digital PIN
    - Input compared against stored PIN
- **Smart card**: Contains computer chip
    - Verifies and validates information
    - More secure than dumb cards
- **Synchronous tokens**:
    - Synchronized with server
    - Generates authentication number
    - Entered during user login
- **Asynchronous tokens**:
    - Server challenges user with number
    - User calculates response

**Something You Are (Biometrics)**

- **Fingerprints** (truly unique)
- **ID cards with face representations**
- **Facial recognition**
- **Hand geometry**
- **Retina scan** (truly unique)
- **Iris scan** (truly unique)
- **Voice recognition**
- **Palm vein authentication**

**Something You Produce**

- Signature
- Voice pattern
- Behavioral characteristics

**Strong Authentication:**

- **Definition**: Minimum of two different authentication mechanisms
- **Example**: ATM system
    - Requires bank card (something you have)
    - Plus PIN (something you know)

### Biometric Evaluation Criteria

**Definition**: Biometric means "life measurement"

**Three Basic Evaluation Criteria:**

1. **False Reject Rate (FRR)**
    - Percentage of authorized users denied access
    - Type I error
    - Lower is better
2. **False Accept Rate (FAR)**
    - Percentage of unauthorized users allowed access
    - Type II error
    - Lower is better
3. **Crossover Error Rate (CER)**
    - Point where false rejections equal false acceptances
    - Used to compare biometric systems
    - Lower CER indicates better system

#### 3. Authorization

**Definition**: Granting appropriate access rights after authentication

**Three Authorization Approaches:**

1. **Authorization for Each Authenticated User**
    - Individual user permissions
    - Granular control
2. **Authorization for Group Members**
    - Role-based access control
    - Simplified management
3. **Authorization Across Multiple Systems**
    - Central authentication and authorization system
    - Verifies entity identity
    - Grants set of credentials to verified entity
    - Examples: Single Sign-On (SSO), LDAP

#### 4. Accountability

**Purpose**: Tracking user actions for audit and compliance

---

## Firewalls

### Definition

Any device preventing specific information types from moving between:

- **Outside world**: Untrusted network
- **Inside world**: Trusted network

### Firewall Implementations

**Physical Forms:**

- Separate computer system
- Service on existing router or server
- Separate network with supporting devices

---

## Firewall Types

### 1. Packet Filtering Firewalls

**Characteristics:**

- Simple networking devices
- Examine every incoming and outgoing packet header
- First generation firewall

**Filtering Criteria:**

- IP address (source/destination)
- Type of packet
- Port request
- Other packet header elements

**Advantages:**

- Simple implementation
- Low overhead
- Fast processing

**Limitations:**

- No state tracking
- Cannot inspect packet contents
- Vulnerable to certain attacks

### 2. Application-Level Firewalls

**Architecture:**

- Dedicated computers separate from filtering
- **Edge Router**: First filtering router
- **Proxy Server**: Internal filtering router (second router)

**Key Concepts:**

**Demilitarized Zone (DMZ)**

- Intermediate area between trusted and untrusted networks
- Hosts public-facing services
- Additional security layer

**Cache Server**

- Type of proxy server or application-level firewall
- Stores recently accessed web content
- Improves performance
- Reduces bandwidth usage

**Advantages:**

- Deep packet inspection
- Application-aware filtering
- Better security than packet filtering

### 3. Stateful Inspection Firewalls

**Mechanism:**

- Track each network connection
- Use **state table** to maintain connection information

**State Table Functions:**

- Tracks state and context of exchanged packets
- Records which station sent which packet
- Timestamps packet exchanges
- Monitors connection lifecycle

**Advantages:**

- Context-aware decisions
- Better security than static filtering
- Understands connection patterns

### 4. Dynamic Packet Filtering Firewalls

**Operation:**

- Allow specific packets with exact parameters
- Must match:
    - Specific source
    - Specific destination
    - Specific port address

**Advantages:**

- Highly granular control
- Adaptive to traffic patterns
- Enhanced security

---

## Intrusion Detection and Prevention Systems (IDPS)

### Definition

Specialized hardware/software working like burglar alarms

### Core Functions

**Detection:**

- Identifies security violations
- Monitors network/system activity
- Recognizes attack patterns

**Alerting:**

- Activates alarms when intrusion detected
- Notifies administrators via:
    - Email
    - Numerical paging
    - Text paging
    - Dashboard alerts

**Response:**

- Under certain circumstances, reacts to intrusion
- Automated countermeasures

### Configuration Requirements

- Complex configurations needed
- Must balance detection sensitivity
- Appropriate response levels
- Minimize false positives/negatives

### Intrusion Prevention Methods

**1. Stopping the Attack**

- Terminate network connection
- End attacker's user session
- Block malicious traffic

**2. Changing Security Environment**

- Reconfigure network devices
- Block access to targeted system
- Update firewall rules dynamically
- Isolate compromised systems

**3. Changing Attack Content**

- Modify attack to make it benign
- Strip malicious payloads
- Sanitize input

---

## Modern Security Management Challenges

### Digitalization Impact

**Technology Trends:**

- Rapid adoption of ML and AI tools
- Increasing software dependency
- Hardware dependency
- Cloud infrastructure reliance

**5G and IoT Impact:**

- Rise of 5G networks
- Internet of Things (IoT) proliferation
- Smart systems integration
- Expanded attack surface

**Supply Chain Concerns:**

- Concentration of few global technology providers
- Multiple entry points for cybercriminals
- Complex digital supply chain vulnerabilities

### Jurisdictional Challenges

**Regulatory Issues:**

- Cyber adversaries ignore country borders
- Non-compliance with different jurisdictions
- Difficult to regulate internationally
- Legal framework gaps

---

## AI and Cybersecurity Threats

### ChatGPT Overview

**Background:**

- Developed by OpenAI
- First released: November 2022
- Fastest-growing app ever
- Reached 1 million users in 2 months (January 2023)

**Capabilities:**

- Human-like conversations
- Answer questions
- Assist with tasks (planning, essays, code)
- Natural language processing

### AI-Enabled Cyber Threats

#### 1. AI-Generated Phishing Scams

**Threat:**

- Game changer from hacker perspective
- Seamless conversations without errors
- No spelling mistakes
- Perfect grammar
- Correct verb tenses
- Appears like real person communicating

**Impact:**

- Harder to detect phishing
- More convincing social engineering
- Increased success rates

#### 2. ChatGPT Writing Malicious Code

**Evidence:**

- Harvard Business Review reported incidents
- Hackers trick AI into generating hacking code

**Example:**

- Israeli security firm Check Point discovered:
    - Thread on underground hacking forum
    - Hacker testing chatbot
    - Successfully recreated malware strains

#### 3. Deepfake Technology

**Definition:**

- Use of AI techniques
- Craft or manipulate audio content
- Manipulate visual content
- Appears authentic

**Applications:**

- Identity theft
- Fraud
- Misinformation campaigns
- Social engineering

#### 4. AI-Supported Password Guessing

**Threat:**

- Cybercriminals employ ML
- Improve password guessing algorithms
- Pattern recognition
- Dictionary attack enhancement

**Impact:**

- Faster password cracking
- More successful brute force attacks

#### 5. Human Impersonation on Social Networks

**Mechanism:**

- AI imitates human behavior
- Creates fake accounts
- Generates realistic interactions

**Monetization:**

- Generate fraudulent streams
- Create fake traffic
- Manipulate metrics for specific artists/content

### WormGPT

**Characteristics:**

- Cybercriminal AI tool
- Sold on dark web via underground markets
- Significant danger according to researchers

**Key Difference from Legitimate AI:**

- **No ethical boundaries**
- **No hard-coded limitations**
- Unlike ChatGPT or Google Bard
- Purpose-built for malicious use

**Threat Level:**

- Produces "unsettling" results
- Designed specifically for cybercrime
- No safety guardrails

---

## Ransomware and Cybercrime Economics

### Detection and Prosecution Challenges

**Low Risk for Criminals:**

- Likelihood of detection: **0.05% in the US**
- Likelihood of prosecution: Extremely low
- High rewards with minimal consequences

### Ransomware Growth

**Status:**

- Fastest-growing cybercrime
- Accelerated by COVID-19 pandemic
- Increased remote work vulnerabilities
- Healthcare sector particularly targeted

**Business Model:**

- Encrypt victim data
- Demand ransom payment
- Cryptocurrency payments (anonymous)
- Ransomware-as-a-Service (RaaS) models

---

## Course Context

### Subject Focus

**Technology Protection:**

- This subject teaches technology protection aspect of security management
- Covers techniques and algorithms used in security mechanisms

**Key Security Mechanisms Covered:**

- **Access Control**: Authentication, authorization, accountability
- **Firewalls**: Network perimeter defense
- **Intrusion Detection**: Monitoring and alerting systems

**Practical Application:**

- Implementing technical controls
- Understanding security technologies
- Applying algorithms to real-world scenarios

---

## Additional Resources

### Cybersecurity Trends

**Video Resource:**

- "Cybersecurity Trends 2026: What CTOs & CISOs Need to Know"
- URL: [https://www.youtube.com/watch?v=ciMvTwIH7Eg](https://www.youtube.com/watch?v=ciMvTwIH7Eg)

### Data Breach Information

**IT Governance Resources:**

- Global data breaches and cyber attacks in 2024
- URL: [https://www.itgovernance.co.uk/blog/global-data-breaches-and-cyber-attacks-in-2024#top-stats](https://www.itgovernance.co.uk/blog/global-data-breaches-and-cyber-attacks-in-2024#top-stats)

### Industry Standards

**Project Management:**

- PMBoK (Project Management Body of Knowledge)
- Industry best practice for InfoSec projects

**Documentation Resources:**

- Claude Code documentation: [https://docs.claude.com/en/docs/claude-code](https://docs.claude.com/en/docs/claude-code)

---

## Key Takeaways

### Critical Success Factors

1. **Proactive approach** to security management essential
2. **People are the most critical link** in security
3. **Project management skills** improve security implementation
4. **Multi-layered defense** (defense in depth) necessary
5. **Continuous adaptation** to evolving threats required

### Emerging Priorities

1. Monitor **AI-enabled threats**
2. Address **supply chain vulnerabilities**
3. Prepare for **ransomware attacks**
4. Implement **strong authentication** everywhere
5. Maintain **comprehensive security programs**

### Management Principles

- Security is not just technology—it's **people, process, and technology**
- **Balance** between security and usability
- **Risk-based approach** to resource allocation
- **Continuous improvement** through monitoring and evaluation