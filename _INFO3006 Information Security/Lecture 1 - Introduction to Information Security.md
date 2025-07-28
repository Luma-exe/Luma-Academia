
> [!faq] About this Lecture
> Class: INFO3006
> Subject: #informationSecurity
> Topics: #coding 
> Date: 2025-07-29 at 03:16

## Course Information

### Teaching Team
- **Lecturer & Penrith Tutor**: A/Prof. Yun Bai
  - Email: y.bai@westernsydney.edu.au
- **Parramatta Tutor**: Dr. Linh Pham
  - Email: linh.pham@westernsydney.edu.au

### Teaching Approach

#### Delivery Format
- **Lectures**: Via Zoom (information on vUWS site)
  - Two hours per week from Week 1
- **Practicals**: In-lab on campus
  - Two hours combined tutorial & practical per week from Week 2

#### Course Structure
- **Lectures**: Present and explore theory and practice of cryptography and information security protocols
- **Tutorials**: Complement lectures, explain content on demand
- **Lab Practicals**: Implement security algorithms through programming
  - No specific programming language requirement
  - Use any language supported by school lab

#### Important Requirements
- Check vUWS site and email **at least twice a week** for materials and announcements
- Tutorial/lab attendance not compulsory BUT **MUST present for practical assignment demonstrations**
- Lecture attendance highly recommended but not compulsory

### Course Content Focus

**Subject Scope**: Studies cryptography algorithms and security protocols based on these algorithms

**Core Purpose**: 
- Encrypt data to format only authorized users can decrypt
- Obtain original data securely
- Address increased dependence on cryptography due to internet information transmission
- Most algorithms are **mathematics-based**

### Study Guidelines

#### Essential Study Practices
- Read lecture notes **in conjunction with textbook**
- Use terminology defined by textbook and lecture notes
- **DO NOT just Google** - stick to authoritative sources

#### Textbook
**Stallings, W. (2017). Cryptography and Network Security: Principles and Practice (7th ed.). Boston. Pearson.**

**7th Edition Updates**:
- Clarified narrative and improved illustrations
- Security design principles listed as fundamentals
- Included more mathematics coverage
- Updated cloud security to reflect current developments

**Older Editions**: Acceptable - contain fundamental content taught in course

### Assessment Structure

#### Assessment Components
- **Tutorial/Practical Questions**: Weekly from Week 2
- **Two Assignments**: Based on weekly tutorial questions - **25%**
- **One Practical Assignment**: **25%**
- **Final Exam**: Two hours - **50%**

#### Pass Requirements
- **50% overall** AND **50% in final exam** needed to pass
- Same threshold rule applies to all grades (e.g., 65% overall AND 65% final exam for Credit)

#### Important Grading Notes
- Final marks may be **scaled** to reflect threshold rule
- Example: Student with 45% continuous assessment + 10% final exam ≠ 55% final mark
- Would be scaled back to reflect F grade due to failing final exam threshold

### Important Course Issues

#### Administrative
- **Contact**: Academic staff via email
- **Student Support**: Available
- **Census Date**: Friday, August 22
- **Study Progression**: Monitor carefully
- **Time Management**: Critical for success
- **Plagiarism**: Serious academic offense

#### Professional Standards
- **Class Rules**: Mobile phone policies apply
- **References**: Don't just Google - use authoritative sources
- **Communication**: Professional communication with staff required
- **Special Consideration**: Available when needed

## Chapter 1: Introduction to Information Security

### Security History

#### Origins and Evolution
**Historical Context**:
- Security began with valuable data collection and transmission needs
- **Old Age**: Crucial data included food sources, water locations (tribe survival)
- **Wartime**: Information could decide fate of tribes, regions, or countries
- **Modern Era**: Crucial data stored digitally

#### Technology Evolution
**Pre-Computer Era**:
- Information security achieved through **physical & administrative means**
- Example: Filing cabinet with lock

**Computer Introduction**:
- Shared systems created need for automated file protection tools
- **Computer Security**: Generic name for tools protecting data from hackers

**Distributed Systems Era**:
- Network and communications affected security landscape
- **Internet Security**: Term introduced for networked environments

### Current Security Landscape

#### Are We Safe? - 2024 Australian Data

**ACCC Scam Watch Statistics**:
- Significant financial losses and high number of reports
- Top 10 scams identified by amount lost and number of reports
- Age group breakdown shows vulnerability across demographics

**Source**: https://www.scamwatch.gov.au/research-and-resources/scam-statistics

#### Major 2024 Australian Data Breaches

**February 2024 - Tangerine Telecom**:
- Telecommunications provider breach
- **232,000 customers** affected

**April 2024 - Telstra**:
- **47,000 customers** personal information exposed

**May 2024 - MediSecure**:
- Prescription delivery services breach
- **12.9 million individuals** affected

**August 2024 - Early Settler**:
- Australian furniture retailer breach
- **1.1 million customers** affected

**Global Context**: Australia ranked **6th most targeted nation** by ransomware operators in 2024 (Check Point Software Technologies report)

#### Cyber Warfare

**Definition**: Using technology to attack a nation

**2024 Examples**:
- **Ukraine Operations**: HUR and SBU cyberattacks on Russian technology and infrastructure
  - Targets: Banking sector, internet providers
- **Russian Retaliation**: Attacks on Ukraine government databases and critical infrastructure

### Cyber Security Fundamentals

#### Core Challenges
**Cyberspace Characteristics**:
- **Intangible**: No physical boundaries
- **Borderless**: Global reach
- **Anonymous**: Identity concealment possible
- **Faceless**: Remote mischief capabilities worldwide

**Impact**: Electronic information critical to culture; cyberspace events have tangible life impacts

#### Best Practices Framework
**Organizational Protection**:
- **Data Security**: Protect information assets
- **Systems and Application Security**: Secure technology infrastructure
- **Incident Management**: Response and recovery procedures
- **IT Security Training and Awareness**: Education programs
- **IT System Operation and Maintenance**: Ongoing security management

### CIA Triad - Three Key Security Objectives

#### 1. Confidentiality
- **Data Confidentiality**: Information accessible only to authorized parties
- **Privacy**: Personal information protection

#### 2. Integrity
- **Data Integrity**: Protection from unauthorized modification
- **System Integrity**: Prevention of alteration, insertion, or deletion
- Maintains information accuracy and completeness

#### 3. Availability
- **Accessibility**: Assets available to legitimate users when needed
- **Reliability**: Consistent system access

**Note**: These three concepts form the **CIA Triad** - fundamental security framework

### Security Challenges and Trends

#### The Challenge of Security
**Complexity Factors**:
- Security involving communications and networks not simple
- Must consider potential attacks on security features
- Need to address unexpected weaknesses
- Requires various countermeasures for intuitive procedures
- Must decide where to implement security mechanisms
- Usually involves more than single algorithm or protocol

#### Current Security Trends
**Increased Vulnerabilities**:
- Internet vulnerabilities in OS of attached computers
- Vulnerabilities in internet routers and network devices

**Increased Security Incidents**:
- **IP Spoofing**: False IP address usage
- **Eavesdropping**: Unauthorized interception
- **Packet Sniffing**: Network traffic monitoring

**Attack Evolution**: More sophisticated attacks requiring less skill and knowledge to mount

### Security Mechanisms

**Definition**: Any process designed to detect, prevent, or recover from security attack

#### Types of Security Mechanisms
- **Digital Signature**: Authentication and non-repudiation
- **Encipherment**: Data encryption
- **Access Control**: Resource access management
- **Data Integrity**: Information accuracy assurance
- **Authentication Exchange**: Identity verification
- **Traffic Padding**: Communication pattern hiding
- **Routing Control**: Network path management
- **Notarization**: Third-party verification

### Security Goals and Requirements (Extended)

#### Core Requirements

**Confidentiality**:
- Information in computer systems accessible only by authorized parties
- Transmitted information protection

**Integrity**:
- Protection from unauthorized modification
- Prevention of alteration, insertion, or deletion

**Availability**:
- Assets accessible to authorized parties when needed

**Authentication**:
- Correct message origin identification
- Assurance of genuine identity (not false)

#### Additional Requirements

**Non-repudiation**:
- Neither sender nor receiver can deny message transmission
- Legal accountability for communications

**Anonymity**:
- User name/ID not revealed in process
- Privacy protection in transactions

**Access Control**:
- Information resource access controlled by/for target system
- Systematic permission management

### Methods to Achieve Security Goals

#### Access Control Types

**Discretionary Access Controls**:
- Resource owner makes access decisions
- User-controlled permissions
- Flexible but relies on user judgment

**Nondiscretionary Access Controls**:
- Strict automated rules control access
- System-controlled permissions
- Consistent but less flexible

#### Encryption Methods

**Classical/Symmetric Encryption**:
- **Secret Key Cryptosystem**
- **Examples**: DES, IDEA, RC5
- Same key for encryption and decryption

**Asymmetric Encryption**:
- **Public Key Cryptosystem**
- **Examples**: RSA, ElGamal
- Different keys for encryption and decryption

### Information Security Certifications

#### Top 2025 Certifications (Cyber Magazine)
1. **CISSP**: Certified Information Systems Security Professional
2. **CEH**: Certified Ethical Hacker
3. **CompTIA Security+**: Entry-level certification
4. **CISM**: Certified Information Security Manager
5. **CISA**: Certified Information Security Auditor
6. **GSEC**: GIAC Security Essentials Certification
7. **CCSP**: Certified Cloud Security Professional
8. **OSCP**: Offensive Security Certified Professional
9. **SSCP**: Systems Security Certified Practitioner
10. **CRISC**: Certified in Risk and Information Systems Control

### Cryptology Fundamentals

#### Definitions

**Cryptology**: Study of techniques ensuring information secrecy and/or authenticity
- **Two Main Branches**: Cryptography and Cryptanalysis

**Cryptography**: Study of design techniques for information security

**Cryptanalysis**: Defeating security techniques to:
- Recover information
- Forge information accepted as authentic

#### Cryptography in Daily Life

**Password Protection**: Passwords protected by encryption

**Internet Security**: SSL (Secure Socket Layer) provides website encryption for private information protection

### Cryptography vs. Steganography

#### Core Differences

**Cryptography**: 
- **Scrambles** message so it cannot be understood
- Makes message unreadable

**Steganography**: 
- **Hides** message so it cannot be seen
- Conceals message existence

**Etymology**: Steganography derived from Greek, literally means "covered writing"

**Relationship**: Cousins in the spycraft family

#### Modern Steganography Applications
- Hiding information in digital images
- Digital watermarking
- Covert communications

### History of Steganography

#### Ancient Methods
**Ancient Greeks**: Wrote text on wax-covered tablets for hidden messages

**Early WWII**: 
- Technology consisted almost exclusively of invisible ink
- Common form of invisible writing

**Document Methods**: 
- Hidden messages through null cipher (unencrypted message)
- Character arrangement techniques

#### Historical Figure: Johannes Trithemius
**Background**: Monk considered founder of modern cryptography

**Work**: "Steganographia" (written around 1500)
- Three-volume system for concealing secret messages within safe texts
- Messages hidden in angel name invocations
- Secret message appeared as letter patterns within words

**Example**:
```
Text: padiel aporsy mesarpon omeuas peludyn malpreaxo
Hidden Message: prymus apex (every other letter in every other word)
```

#### World War I Example
**German Spy Message**:
```
Original Text:
"Apparently neutral's protest is thoroughly discounted and ignored. Isman hard hit. Blockade issue affects pretext for embargo on by-products, ejecting suets and vegetable oils."

Hidden Message (2nd letter of each word):
"Pershing sails from NY June I."
```

### Modern Steganography Technology

#### Software Capabilities
**Modern Tools**: New and effective software enabling information hiding in:
- Graphic files
- Sound files
- Apparently "blank" media

#### Digital Image Techniques

**Requirements**: Two files needed:
1. Innocent-looking image (holds hidden information)
2. Message to be hidden

#### Common Approaches

**1. Least Significant Bit (LSB) Insertion**
- **Method**: Common, simple approach for embedding information
- **Capability**: Data hidden in least and 2nd least significant bits
- **Human Perception**: Eye cannot discern changes

**LSB Example**: Hiding letter "G" across 8 bytes

```
Original Carrier Bytes:
10010101 00001101 11001001 10010110
00001111 11001011 10011111 00100000

"G" in ASCII: 01000111

Modified Carrier Bytes (LSB changed):
10010100 00001101 11001000 10010110
00001110 11001011 10011111 00010001

Result: Only half of LSBs actually changed
```

**2. Masking and Filtering**
- **Restriction**: Usually limited to 24-bit and grey-scale images
- **Method**: Hide information by marking image (similar to paper watermarking)
- **Application**: Digital watermarking techniques

**3. Algorithms and Transformations**
**JPEG-Jsteg Tool**: Integrates compression algorithm for hiding information
- **JPEG Compression**: Uses discrete cosine transform
- **Additional Processing**: 
  - Fast Fourier transformation
  - Wavelet transformation

### Current Cybersecurity Resources

#### Educational Videos

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/zUAGigi9ww8" frameborder="0" allowfullscreen></iframe>
</div>

<div style="display: flex; justify-content: center; align-items: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/KfL0ingAz_o" frameborder="0" allowfullscreen></iframe>
</div>

## Key Takeaways

### Essential Concepts
1. **CIA Triad**: Confidentiality, Integrity, Availability - fundamental security objectives
2. **Security Evolution**: From physical locks to digital protection systems
3. **Dual Approaches**: Cryptography (scramble) vs. Steganography (hide)
4. **Modern Threats**: Sophisticated attacks requiring less technical skill
5. **Mathematics Foundation**: Most security algorithms based on mathematical principles

### Practical Applications
- Password protection systems
- SSL/TLS web security
- Digital watermarking
- Covert communications
- Data breach prevention
- Incident response management

### Professional Development
- Industry certifications provide career advancement
- Practical implementation skills essential
- Continuous learning required due to evolving threats
- Mathematical foundation crucial for advanced understanding

