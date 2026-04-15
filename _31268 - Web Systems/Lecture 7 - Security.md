
> [!faq] About this Lecture 
> Class: 31268
> Subject: #webSystems
> Date: 11/04/2025 
> Topics: #web #html #css

## Introduction to Security

> **Security** (Cybersecurity) is the methods, practices, tools and technologies adopted to protect computers, networks, programs and data from threats. It provides protection against malicious and unwanted access to ensure **continuity of business operations**.

---

## The CIA Triad

The three core perspectives used to evaluate security in industry and organisations. All security decisions map back to one or more of these.

```
         Confidentiality
              /\
             /  \
            /    \
           / DATA \
          /________\
   Integrity      Availability
```

### Confidentiality

Implementing control measures to ensure **only authorised users** can access data and perform **permitted tasks**.

Evaluated by asking:

- **Who?** → Who can access the data?
- **What?** → What are they authorised to do with their access?
- **How?** → How was the data accessed? (Location: onsite/remote, Protocol: SSH/HTTP, Transmission Path)
- **Where? / When?** → What resource was accessed (DB server, web server…)? What was the access timestamp?

### Integrity

Implementing measures to safeguard the **accuracy and completeness** of data exchange over a network.

Evaluated by verifying:

- Data is only altered by authorised user(s)
- Data is secured **at rest** (in storage) and **in transit** (during transfer)
- Data is verified at source and compared at destination → **Hashing, Checksum**
- Data transfer trail is audited for regulatory compliance

**Relevant Standards:**

|Standard|Description|
|---|---|
|HIPAA|U.S. Health Insurance Portability and Accountability Act (1996)|
|GDPR|EU General Data Protection Regulation|
|FINRA|U.S. Financial Industry Regulatory Authority|

### Availability

Implementing measures to ensure data is **available for access** to perform operations and tasks.

Evaluated by verifying:

- Degree of availability during system failures (redundant systems, backups)
- Authorisation of user access from **validated locations** (IP-based)
- Degree of system **resilience** against cyber-attacks while maintaining operations

**Common Attacks Against Availability:**

|Attack|Description|
|---|---|
|**DoS** (Denial of Service)|Overwhelms a server/service with excessive traffic to make it unavailable|
|**Phishing**|Tricks individuals into revealing sensitive info by posing as a trustworthy entity|
|**MitM** (Man-in-the-Middle)|Attacker intercepts and alters communication between two parties|
|**SQL Injection**|Web app uses unvalidated user input to construct SQL queries|

---

## Attack Examples

### Man-in-the-Middle (MitM) Attack

```
Step 1 — Setup:     Attacker creates a fake WiFi hotspot (e.g., coffee shop)
Step 2 — Connect:   Unsuspecting users connect to the rogue hotspot
Step 3 — Intercept: Attacker intercepts transmitted data over the network
Step 4 — Manipulate: Attacker alters data → steals usernames, passwords, credit cards
```

**Flow:**

```
User ──X──► Web Application   (original connection blocked)
User ──────► Attacker ────────► Web Application   (new intercepted path)
```

### SQL Injection Attack

```
Step 1 — Locate: Find a vulnerable input field (Login Form, Search Bar, URL Param, Sign Up Form)

Step 2 — Inject: Instead of a valid username, attacker enters:
    ' OR '1'='1

Step 3 — Breach: '1'='1' is always TRUE → query always returns results

Step 4 — Access: Query becomes:
    SELECT * FROM users;    ← returns ALL user records
```

**Normal query:**

```sql
SELECT * FROM users WHERE username = 'user_input' AND password = 'user_input';
```

**Injected query:**

```sql
SELECT * FROM users WHERE username = '' OR '1'='1' AND password = '';
```

**Final altered query:**

```sql
SELECT * FROM users;
```

---

## Types of Security

|Type|Description|
|---|---|
|**Physical Security**|Protects physical assets (servers, buildings, hardware) with locks, surveillance, controlled access|
|**Network Security**|Secures network infrastructure via firewalls, VPNs, encryption|
|**System Security**|Protects devices/systems from malware, unauthorised access, data breaches|
|**Software Security**|Identifies and fixes software vulnerabilities (injection attacks, buffer overflows)|
|**Data Security**|Safeguards sensitive data using encryption, backups, secure storage|
|**Access Management**|Controls who has access using authentication, authorisation, and auditing|

---

## Security Lifecycle

> ⚠️ **Key Insight:** 100% security is unattainable. The goal is to adopt best practices that **effectively minimise risks**.

The lifecycle is a **continuous cycle** of six phases:

```
Prevention ──► Detection ──► Response ──► Recover ──► Review ──► Improve
     ▲                                                               │
     └───────────────────────────────────────────────────────────────┘
```

|Phase|Description|
|---|---|
|**Prevention**|Implementing measures to safeguard systems and data from threats|
|**Detection**|Identifying security incidents and vulnerabilities|
|**Response**|Addressing and mitigating security breaches when they occur|
|**Recover**|Restoring systems and data after an incident to ensure business continuity|
|**Review**|Evaluating incidents and responses to identify lessons learned|
|**Improve**|Enhancing security measures based on reviews and evolving threats|

---

## Prevention

### Physical Security

Protects personnel, hardware, software, and data from **physical threats** (unauthorised access, theft, damage, environmental hazards).

|Control|Description|
|---|---|
|**Credential Control**|Valid key-cards, biometrics, PIN codes issued to appropriate personnel|
|**Physical Barriers**|Gates, doors, turnstiles to prevent unauthorised entry to data centres|
|**Monitoring**|Security guards, surveillance cameras, alarm sensors|
|**Tailgating Prevention**|Methods to prevent impersonation or "piggybacking" through secured doors|

**Biometric options:** Fingerprint, IRIS scan, Face Recognition, Key Card

---

### Network Security

Protects data and ensures the CIA of data as it **moves across or interacts with a network**.

#### Firewalls

Used to block unauthorised access, filter traffic, and maintain security between trusted and untrusted networks.

|Type|Example|Function|
|---|---|---|
|**Hardware Firewall**|Cisco ASA|Physical device; monitors/controls incoming & outgoing traffic based on security rules|
|**Software Firewall**|Windows Defender|Application installed on devices; regulates network traffic|

**Traffic flow:**

```
Internet ──► Hardware Firewall ──► Router ──► Software Firewall ──► Trusted Data ──► User
              (blocks malware)                  (device-level protection)
```

#### IDS vs IPS

|System|Role|
|---|---|
|**IDS** (Intrusion Detection System)|Monitors network traffic for suspicious activity; **alerts** administrators|
|**IPS** (Intrusion Prevention System)|Detects potential threats and **acts to prevent** them in real time|

Both are deployed at **critical points** within network architecture.

#### VPN (Virtual Private Network)

A service that creates a **secure encrypted connection** over a less secure network (e.g., the Internet).

**Use cases:**

- **Remote Access:** Employees securely connect to internal company network from remote locations
- **Bypassing Restrictions:** Access geo-restricted content

**VPN components:** Identity certificate + Username/Password → Clientless TLS VPN → Internal resources (Cisco ISE, Active Directory, Local DB)

#### Network Segmentation

Dividing a larger network into smaller **subnets** (subnetworks).

**Benefits:**

- Enhances security, improves performance, simplifies management
- Each subnet can have its own **security policies and controls**
- **Limits spread of threats** within internal systems

```
[Subnet A: devices A, B] ──R1──[Transit Subnet]──R2──[Subnet B: device C]
```

---

### System Security

Safeguards individual **devices and systems** from unauthorised access, cyberattacks, and vulnerabilities.

|Control|Description|
|---|---|
|**System Hardening**|Disable unnecessary services/processes; configure secure settings|
|**Antivirus / Anti-malware**|Use accredited programs to protect against malicious software|
|**Patching & Updates**|Regularly update OS to fix vulnerabilities and improve security|
|**Backup Solutions**|Periodic system backups for data recovery in case of breach or failure|

```
         Backup
        /       \
  Anti-Virus   Patching
        \       /
      System Hardening
```

---

### Software Security

Protecting software applications from vulnerabilities and attacks throughout the **Software Development Lifecycle (SDLC)**.

|Practice|Description|
|---|---|
|**Secure Coding Practices**|Follow approved standards and guidelines|
|**Static & Dynamic Analysis**|Analyse code for flaws both at rest and during execution|
|**Regular Security Testing**|Penetration testing and vulnerability assessments|
|**Patch Management**|Apply updates and fixes for known vulnerabilities|

**Software Development Best Practices (ordered):**

1. **Input Validation** — Validate all form inputs for existence, types, values, size, format
2. **Software Design** — Adopt secure app architecture following organisational design policies
3. **Data Protection** — Encrypt application data at rest and in transit; never share credentials
4. **Error Handling** — Handle errors through debugging and logging via trusted systems
5. **Access Control** — Enforce authentication and restrict access
6. **System Configuration** — Ensure servers run latest versions with latest compatible dependencies

---

### Data Security

Protecting data from unauthorised access, corruption, or theft **throughout its lifecycle**.

|Method|Description|
|---|---|
|**Encryption**|Converts data to unreadable format using keys; only authorised users can decrypt|
|**Hashing**|Generates a fixed-size value to ensure data integrity|
|**Checksum**|Value generated from data; used to verify transmitted data on arrival|
|**Masking**|Hides sensitive data by replacing with altered values|
|**Auditing**|Assesses compliance and identifies vulnerabilities (internal or third-party)|
|**Non-Repudiation**|Ensures actions/messages cannot be denied; uses digital signatures and secure logs|

#### Encryption

**Symmetric Encryption:**

- Uses the **same key** to encrypt and decrypt
- Key is a **shared secret** between sender and receiver
- ✅ Fast, reliable, used for **bulk data**

```
Plaintext ──[Secret Key]──► Ciphertext ──[Secret Key]──► Plaintext
```

**Asymmetric Encryption:**

- Uses a **key pair**: public key (encrypt) + private key (decrypt)
- Every user in the conversation has their own key pair
- ✅ Better key management
- ❌ More complex and **much slower** than symmetric

```
Plaintext ──[Public Key]──► Ciphertext ──[Private Key]──► Plaintext
```

**Hybrid Encryption:** Combines both methods for improved **data confidentiality**.

```
User A wants to send a message to User B:

1. User A encrypts message with SHARED SECRET KEY  ← symmetric encryption
2. User A then encrypts with USER B's PUBLIC KEY    ← asymmetric encryption
3. Encrypted message sent to User B
4. User B decrypts with their PRIVATE KEY           ← asymmetric decryption
5. User B decrypts with SHARED SECRET KEY           ← symmetric decryption
```

#### Hashing & Checksum

Both aim to achieve **data integrity**.

**SHA-256 Hashing example:**

```
Input:  "Hello"
Output: 2cf24dba5fb0a30e26e83b2ac5b0d3e4
```

**Unix Checksum example:**

```bash
echo -n "hello" | cksum
# Output: 3287646509 5
```

**Checksum verification flow:**

```
Server ──(file + Checksum Value-A)──► User
User generates Checksum Value-B from downloaded file
Verify: Value-A == Value-B  →  integrity confirmed
```

#### Data Masking Techniques

|Technique|Description|Example|
|---|---|---|
|**Substitution**|Replace original data with random/predefined values|SSN: `555-12-5555` → `XXX-XX-5555`|
|**Shuffling**|Rearrange data elements within a dataset|IDs reordered while maintaining format|
|**Redacting**|Alter specific characters with default characters|`06B-76D-365` → `XXX-XXX-XXX`|
|**Nulling**|Replace sensitive info with null/default values|Value replaced with `NULL`|

#### Auditing

Systematically reviewing systems and processes to ensure **compliance with security policies**.

**Purpose:**

- Verify adherence to data security standards
- Detect misconfigurations or weak access controls
- Support regulatory compliance (GDPR, HIPAA, PCI DSS)
- Provide evidence in incident investigations

**Audit checks:**

- All operating systems are patched and updated
- Access logs are properly maintained and reviewed
- Data encryption is applied for sensitive information
- Employees follow password and authentication policies

#### Non-Repudiation

Ensures a party **cannot deny** the authenticity of a message, transaction, or action they performed.

**Purpose:**

- Proof of origin — confirms who sent/initiated the data
- Ensures data integrity — content has not been tampered with
- Prevents denial in legal, financial, or secure communication contexts

**Common use cases:** Secure Email, Digital Contracts, Financial Transactions, Blockchain/Smart Contracts, Audit Trails & Logging

**Example — Digitally Signed Email:**

```
Alice (Sender)
  │ signs with Private Key
  ▼
Signed Message ──────────────────────► Bob (Receiver)
                                        │ verifies with Alice's Public Key
                                        ├─ Came from Alice ✓
                                        ├─ Was not altered ✓
                                        └─ Alice cannot deny sending it ✓
```

---

### Access Management

Controlling who has access to resources, data, or systems. Goal: only **authorised users** can access necessary information.

The four components (AAIA):

|Component|Description|
|---|---|
|**Authentication**|Verifying that the identity provided can access the system/resources/data|
|**Authorisation**|Defining what users can do with their role using access policies|
|**Accountability**|Tracking and auditing user activities using monitoring and logging|
|**Identification**|Determining the identity of users accessing the system|

#### Authentication — Three Factors

|Factor|Examples|
|---|---|
|**Something you know**|Password, PIN number, Passphrase|
|**Something you have**|Keys, USB, Smart Card, Certificate, Token, Virtual Card|
|**Something you are**|Fingerprint reader, Retina scanner, Facial recognition|

#### Authorisation — Access Control Models

|Model|Description|Example|
|---|---|---|
|**RBAC** (Role-Based Access Control)|Access granted based on predefined roles assigned to users|Admin role has full access; viewer has read-only|
|**ABAC** (Attribute-Based Access Control)|Access based on user attributes, resource, and context|HR user can access employee records **only during work hours**|
|**PBAC** (Policy-Based Access Control)|Access controlled by policies dictating allowed actions|Employees access docs remotely based on security policies|
|**DAC** (Discretionary Access Control)|Resource owners control who can access/modify the resource|File owner decides who can read or write to a document|

#### Accountability — Auditing Types

|Audit Type|Description|Example|
|---|---|---|
|**System Auditing**|Examines security of systems (software, hardware, configs) to detect anomalies|Checking if servers have latest security patches|
|**Access Auditing**|Monitors who has access to what resources and tracks actions|Reviewing logs for unauthorised access to sensitive files|
|**Compliance Auditing**|Ensures adherence to regulations (GDPR, HIPAA, PCI DSS)|Verifying customer data is encrypted as required by law|
|**Operational Auditing**|Checks efficiency and effectiveness of operational procedures|Evaluating software deployment processes for security checks|

#### Identification — Identity Management

|Component|Description|Example|
|---|---|---|
|**User Provisioning**|Creating, managing, deleting user accounts across systems|Creating employee accounts in HR, project mgmt on joining|
|**Identity Governance**|Policies/procedures for managing identities for compliance|Regularly reviewing access rights for current employees|
|**Group Management**|Organising users into groups for permission management|"Sales" group auto-receives CRM access permissions|
|**Federated Users**|Managing identities across multiple domains/organisations|SSO access to partner's system using existing credentials|

#### Identity Management in Unix (CLI)

```bash
# Create new user account
sudo useradd -m newuser

# Set/Change user password
sudo passwd newuser

# Create a new group
sudo groupadd developers

# Add user to a group
sudo usermod -aG developers newuser

# Verify user (shows UID and GID)
id newuser

# Check groups a user belongs to
groups newuser

# Delete a user (with home directory)
sudo userdel -r newuser

# Delete a group
sudo groupdel developers
```

#### Permission Management in Unix

Unix file permissions apply to three entities: **user (u)**, **group (g)**, **others (o)**

**Permission values:**

|Permission|Alphabetical|Numerical|
|---|---|---|
|Read|`r`|`4`|
|Write|`w`|`2`|
|Execute|`x`|`1`|

**Alphabetical Method:**

```bash
# Syntax
chmod <entity><operator><permission> <file>
# Operators: + (add)  - (remove)  = (set exactly)

# Example
chmod u+x,g-r,g+w,o=w file.txt
# Result: -rwx-w--w-+ (user: rwx, group: -w-, others: -w-)
```

**Numerical Method:**

```bash
# Syntax
chmod <user_val><group_val><other_val> <file>
# Values are sums: r=4, w=2, x=1

# Example
chmod 471 file.txt
# user=4 (r--), group=7 (rwx), others=1 (--x)
# Result: -r--rwx--x+
```

**Reading permissions from `ls -l`:**

```
-rw-r--r--+ 1 George None 0 Oct 25 13:38 file.txt
 │││││││││
 │││├┤├┤└─── others permissions
 │││ │ └──── group permissions
 │││ └────── user permissions
 ││└──────── file type (- = regular file, d = directory)
```

---

## Detection

Identifying potential security **threats or breaches** in a system or network. Goal: detect malicious activity **early enough to minimise damage**.

|Detection Type|Description|Example|
|---|---|---|
|**Signature-Based**|Compares activities against known attack signature database|Antivirus scans files for signatures of known malware|
|**Anomaly-Based**|Identifies deviations from normal behaviour to detect unknown threats (IDS)|Network monitoring tool flags unusual spikes in traffic|
|**Heuristic-Based**|Uses rules/algorithms to identify suspicious activities based on behaviour patterns|Firewall blocks traffic matching suspicious packet behaviours|
|**Behavioural Detection**|Monitors user/system behaviour to flag irregularities (IPS)|Login system alerts when a user logs in from an unusual location|

---

## Response

Immediate actions taken **after detecting** a security threat or incident to: eradicate, contain, mitigate, recover, learn, and improve.

> A **Response Plan** outlines predefined actions and procedures to follow during a security incident. A well-documented plan reduces confusion and ensures a swift, effective response.

### Response Process (6 Steps)

```
1. Preparation  ──► 2. Identification ──► 3. Containment
                                               │
2. Post-Incident ◄── 5. Recovery ◄──────── 4. Eradication
   Analysis                                          └── Lesson Learned
```

|Step|Name|Action|
|---|---|---|
|1|**Preparation**|Develop and train on a comprehensive incident response plan; conduct regular drills|
|2|**Identification**|Detect and confirm incidents through system monitoring and alert analysis|
|3|**Containment**|Isolate affected systems to prevent further damage while maintaining operations|
|4|**Eradication**|Identify and eliminate the root cause; remove malware and close vulnerabilities|
|5|**Recovery**|Restore systems to normal using backups; monitor for residual threats|
|6|**Post-Incident Analysis**|Review the incident response; update security measures based on lessons learned|

---

## Recover

Processes and actions to **restore systems and operations to normal** following an incident (data breach, system failure).

Recovery involves two key plans: **BCP** and **DRP**

### BCP — Business Continuity Plan

- Focuses on maintaining and restoring **essential functions** during and after a crisis
- Ensures the organisation **can continue operating** even during disruptions
- Outlines different disaster scenarios and what the business will do to keep running

**BCP components:**

- **Critical Functions** — Identify essential operations that must be maintained
- **Response Strategies** — Develop procedures for maintaining operations (including alternative work)
- **Training** — Conduct regular staff training and drills
- **Recovery Procedures** — Outline steps to restore servers and applications

### DRP — Disaster Recovery Plan

- A **subset of BCP** specifically addressing recovery of **IT systems and data** following a disaster
- Provides a detailed roadmap for restoring business functionalities with minimum threat impact
- Provides follow-on steps to **learn, adapt and prevent** disaster from happening again

**DRP components:**

- **RTO and RPO** — Establishing Recovery Time and Recovery Point Objectives
- **Backup Solutions** — Implementing strategies to ensure quick data recovery

### Key Metrics

$$\text{RTO} = \text{Maximum allowable downtime of a system after disruption}$$

$$\text{RPO} = \text{Maximum acceptable data loss or system unavailability in time}$$

$$\text{MTD} = \text{Maximum Tolerable Downtime of a system}$$

$$\text{WRT} = \text{Work Time needed for system recovery}$$

$$\boxed{MTD \geq RTO + WRT}$$

**Example:** $$MTD = 12 \text{ hours}, \quad RTO = 6 \text{ hours}, \quad WRT = 4 \text{ hours}$$ $$RTO + WRT = 6 + 4 = 10 \text{ hours} \leq MTD = 12 \text{ hours} \quad \checkmark$$ $$\therefore \text{Acceptable recovery time for the organisation}$$

---

## Review

Assessing the effectiveness of **security measures and incident responses** to enhance future strategies. Uses monitoring logs and audits to identify vulnerabilities.

|Activity|Description|
|---|---|
|**Incident Review**|Analyse incidents and investigate monitoring logs to reveal security weaknesses|
|**Policy Evaluation**|Assess current security policies/procedures to ensure they remain effective and relevant|
|**Auditing**|Regular security audits to reveal compliance issues or weaknesses in existing controls|
|**Reporting**|Document findings, updates, and recommendations for future reference and compliance|

> **Post-Incident Analysis:** After an attack, a company conducts a thorough review to identify exploited vulnerabilities and prepare reports/documentation for the **Improve** phase.

---

## Improve

Enhancing security measures based on insights from the **Review phase**. Continuous improvement ensures organisations adapt to evolving threats.

|Action|Description|
|---|---|
|**Assessment of Findings**|Evaluate review phase insights to identify specific areas needing enhancement|
|**Implementation of Changes**|Apply necessary changes to policies, procedures, or technologies based on identified needs|
|**Training & Awareness**|Conduct programs to inform staff about new policies, tools, and security practices|
|**Monitoring & Evaluation**|Continuously monitor effectiveness of implemented changes; make further adjustments|
|**Documentation & Reporting**|Document all changes made during the improve phase; communicate to relevant stakeholders|

**Full Lifecycle Example:**

```
Prevention      → Deployed counter-measures to eliminate the threat
Detection       → Identified the type of threats and collected necessary logs
Response        → Followed the response plan to handle the threat
Recover         → Followed BCP and implemented the DRP plan
Review          → Analysed logs and audits about the incident
Improve         → Evaluated the analysis reports about the incident
```

---

## Security Best Practices

|Practice|Description|
|---|---|
|**Implement AAA**|Establish strong authentication, implement RBAC for authorisation, maintain detailed logs for accountability|
|**Principle of Least Privilege**|Grant users the **minimum level of access** necessary for their roles; limits exposure to sensitive info|
|**Review Access Permissions**|Conduct periodic audits of user access rights; remove/modify access when no longer required|
|**Strong Password Policies**|Enforce complex passwords with regular updates; consider password managers|
|**Monitor User Activity**|Use monitoring tools to detect suspicious behaviour; implement account lockout mechanisms|
|**Secure Remote Access**|Use VPNs and other secure methods; ensure remote access is tightly controlled and monitored|

---

## Summary — Key Concept Map

```
SECURITY
├── CIA Triad
│   ├── Confidentiality (who/what/how/where/when)
│   ├── Integrity (hashing, checksum, standards)
│   └── Availability (resilience, redundancy, anti-attack)
│
├── Security Types
│   ├── Physical · Network · System · Software · Data · Access Mgmt
│
└── Security Lifecycle
    ├── Prevention
    │   ├── Physical Security
    │   ├── Network Security (Firewall, IDS/IPS, VPN, Segmentation)
    │   ├── System Security (Hardening, AV, Patching, Backup)
    │   ├── Software Security (Secure coding, Testing, Patching)
    │   ├── Data Security (Encryption, Hashing, Masking, Audit, Non-repudiation)
    │   └── Access Management (AAA+I, RBAC/ABAC/PBAC/DAC, Unix permissions)
    ├── Detection (Signature/Anomaly/Heuristic/Behavioural)
    ├── Response (6-step process + Response Plan)
    ├── Recover (BCP + DRP, RTO/RPO/MTD/WRT)
    ├── Review (Incident/Policy/Audit/Report)
    └── Improve (Assess/Implement/Train/Monitor/Document)
```

---

## References & Further Reading

|Resource|Link|
|---|---|
|Australian Signals Directorate (ACSC)|https://www.cyber.gov.au/learn-basics|
|UTS Library — Cyber Security|https://search.lib.uts.edu.au/permalink/61UTS_INST/19joism/alma991006771958505671|
|Ryan's Tutorial — Linux Permissions|https://ryanstutorials.net/linuxtutorial/permissions.php|
