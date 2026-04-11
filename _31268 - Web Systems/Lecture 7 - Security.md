
> [!faq] About this Lecture 
> Class: 31268
> Subject: #webSystems
> Date: 11/04/2025 
> Topics: #web #html #css

## Introduction to Security

**Security** (Cybersecurity) is the collection of methods, practices, tools, and technologies adopted to protect computers, networks, programs, and data from threats.

- Security is about providing protection against **malicious and unwanted access** to ensure the continuity of business operations
- 100% security is **unattainable** — the goal is to adopt best practices that effectively minimise risks

### The CIA Triad

Security in industry is evaluated across three perspectives, forming the **CIA Triad**:

- **Confidentiality** → Are measures in place to ensure data is private and protected?
- **Integrity** → Are measures in place to ensure data is correct and authentic?
- **Availability** → Are measures in place to manage user-access to data?

---

### Confidentiality

Confidentiality is about implementing control measures so that **only authorised users** can access data and perform permitted tasks.

Evaluated by asking:
- **Who?** → Who can access the data?
- **What?** → What are they authorised to do with their access?
- **How?** → How was the data accessed? (Location, Protocol — SSH/HTTP, Transmission Path)
- **Where / When?** → What was accessed (DB server, web server…)? What was the access timestamp?

---

### Integrity

Integrity is about safeguarding the **accuracy and completeness** of data exchange over a network.

Evaluated by verifying:
- Data is only altered by authorised users
- Data is secured **at rest** (in storage) and **in transit** (during transfer)
- Data is verified at source and compared at destination using **Hashing** or **Checksum**
- Data transfer trails are audited to ensure regulatory compliance

Relevant standards:
- **HIPAA** — U.S. Health Insurance Portability and Accountability Act (1996)
- **GDPR** — European Union General Data Protection Regulation
- **FINRA** — U.S. Financial Industry Regulatory Authority

---

### Availability

Availability is about ensuring data is accessible for operations and tasks when needed.

Evaluated by verifying:
- Degree of availability in the event of system failures (redundant systems, backups)
- Authorisation of user access from validated locations (IP-based)
- System resilience against cyber-attacks while maintaining operations

Common attacks that threaten availability:
- **Denial of Service (DoS)** — overwhelms a server with excessive traffic to make it unavailable
- **Phishing** — tricks users into revealing sensitive information by posing as a trustworthy entity
- **Man-in-the-Middle (MitM)** — attacker intercepts and alters communication between two parties
- **SQL Injection** — malicious SQL code injected via unsanitised user input fields

---

### Attack Examples

#### Man-in-the-Middle (MitM) Attack

1. **Setup** — Attacker creates a fake WiFi hotspot (e.g., at a coffee shop)
2. **Connection** — Unsuspecting users connect to the rogue hotspot
3. **Interception** — Attacker intercepts all transmitted data
4. **Manipulation** — Attacker alters data and captures sensitive info (usernames, passwords, credit cards)

#### SQL Injection Attack

Given a login form that runs:
```sql