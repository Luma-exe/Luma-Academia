
> [!faq] About this Lecture
> Class: INFO3006
> Subject: #informationSecurity 
> Topics: #coding 
> Date: 2025-10-27 at 13:07

## Overview

**User authentication** is the fundamental function and primary line of defense in security. It verifies an identity claim through two steps:

1. **Identification step**: Present an identifier to the security system
2. **Verification step**: Present authentication information that confirms the binding between the identity and the identifier

---

## Means of Authentication

Four primary authentication methods:

- **Something you know**: PIN, password
- **Something you have**: Key, smart card
- **Something you are**: Fingerprint, face (biometric)
- **Something you produce**: Writing pattern, voice pattern

### Strong Authentication

- **Definition**: Use of at minimum two different means of authentication
- **Also known as**: Two-factor or multi-factor authentication
- **Example**: ATM requires both a bank card (something you have) AND a PIN (something you know)

---

## Mutual Authentication

**Purpose**: Allow both parties to authenticate each other so both communication parties can satisfy themselves about each other's identity

### Two Critical Issues

1. **Confidentiality**: Achieved by encryption
2. **Timeliness**: Achieved by timestamps or a nonce (number used once)

---

## Replay Attack

**Definition**: A threat where an opponent copies a message and replays it later

### Types of Replay Attacks

- Opponent copies a message and replays it later
- Opponent replays a timestamped message within the valid time window

### Countermeasures

- **Timestamps**: Add time-based validity to messages
- **Challenge nonce**: Use one-time random numbers to ensure freshness

---

## Authentication in Distributed Systems

### Context

- **Dedicated PC**: Physically protect it
- **Centralized time-sharing system**: OS enforces security on users
- **Modern distributed architecture**: Consists of dedicated user workstations (clients) and distributed or centralized servers requiring new protection services

---

## Kerberos Authentication System

### Overview

**Kerberos** is a network authentication protocol that:

- Works on the basis of "tickets"
- Allows users and servers to communicate securely over a non-secure network
- Provides a secure method for authenticating service requests in a computer network
- Works in a client-server model
- Provides mutual authentication

### History

- **Origin**: Project Athena developed at MIT
- **Encryption**: Relies exclusively on conventional encryption (symmetric encryption), making no use of public-key encryption
- **V4**: First version used beyond MIT
- **V5**: Updated version
- **Distribution**: MIT makes implementation freely available
- **Sponsors**: Oracle, Apple Inc, Google, Microsoft, etc.
- **Commercial versions**: Available from vendors like CyberSafe

### Applications

- **Windows 2000 and later**: Uses Kerberos as default authentication method
- **UNIX and UNIX-like systems**: Including Apple's Mac OS X, Red Hat Enterprise Linux, Oracle's Solaris, IBM's AIX and Z/OS, HP's OpenVMS

---

## Kerberos Notation

````
C         : Client
AS        : Authentication server
V         : Server
TGS       : Ticket granting server
IDc       : Identifier of user on C
IDv       : Identifier of server V
Pc        : Password of user on C
ADc       : Network address of C
Kv        : Secret encryption key shared by AS (or TGS) and V
Ktgs      : Secret encryption key shared by AS and TGS
|| or ,   : Concatenation
````

---

## Simple Authentication Dialogue

### Problem

- In an unprotected network, any client can apply to any server for service
- An opponent can pretend to be another client and obtain unauthorized privileges

### Solution

Use an Authentication Server (AS) that knows the passwords of all users and stores them in a centralized database

### Basic Flow
```
1: C → AS: Request for access to the Server
   AS checks C's information. If okay:
2: AS → C: Ticket for accessing V
3: C → V: Ticket
```

### Password-Based Version
```
1: C → AS: IDc, Pc, IDv
2: AS → C: Ticket
3: C → V: IDc, Ticket

Where: Ticket = EKv[IDc, ADc, IDv]
```

### Analysis of Simple Authentication

**Step 1 Issues**:
- Password is not protected (sent in plaintext)

**Step 2 Features**:
- Ticket is encrypted (provides confidentiality)
- ADc included (cannot be used from another workstation)
- No timestamp (ticket can be re-used indefinitely)

**Step 3 Features**:
- Ticket is encrypted
- IDc is embedded in the ticket

### Limitations

- User must enter password multiple times:
  - Each time accessing a different service
  - Each time accessing the same service multiple times per day
- This can be improved by making tickets reusable

---

## User Authentication by Symmetric Encryption

### Three-Stage Protocol

**Once per user logon session**:
```
1. C → AS: Ekc[IDc, IDtgs]
2. AS → C: EKc[otherInfo, Tickettgs]
```

**Once per type of service**:
```
3. C → TGS: IDc, IDv, Tickettgs
4. TGS → C: Ticketv
```

**Once per service session**:
```
5. C → V: IDc, Ticketv

Where:
Tickettgs = EKtgs[IDc, ADc, IDtgs, TS1, Lifetime1]
Ticketv = EKv[IDc, ADc, IDv, TS2, Lifetime2]
```

### Key Improvements

1. **TGS introduction**: A new server (Ticket Granting Server) issues tickets to users authenticated by AS
2. **Password protection**: Transmission of plain password is avoided
3. **Ticket reusability**: The ticket-granting ticket can be used to request multiple service-granting tickets

### Process Details

1. Client requests a ticket-granting ticket by sending user ID and TGS ID
2. AS responds with a ticket encrypted with key Kc (derived from user's password)
3. Client prompts user for password, generates key, decrypts incoming message
4. Client can use ticket-granting ticket to request multiple service-granting tickets

---

## Kerberos Version 4 Protocol

### Complete Protocol
```
1: C → AS: IDc, IDtgs, TS1
2: AS → C: EKc[Kc,tgs, IDtgs, TS2, Lifetime2, Tickettgs]
3: C → TGS: IDv, Tickettgs, AuthenticatorC
4: TGS → C: EKc,tgs[KC,V, IDv, TS4, TicketV]
5: C → V: TicketV, AuthenticatorC
6: V → C: EKc,v[TS5 + 1]
```

---

## Authentication Service Exchange (Steps 1-2)

**Purpose**: To obtain ticket-granting ticket
```
1: C → AS: Ekc[IDc, IDtgs, TS1]
2: AS → C: EKc[Kc,tgs, IDtgs, TS2, Lifetime2, Tickettgs]

Where:
Tickettgs = EKtgs[Kc,tgs, IDc, ADc, IDtgs, TS2, Lifetime2]
```

### Step-by-Step Process

**Step 0**: User enters password in local machine

**Step 1**: Client sends request to AS
- Message includes timestamp and identities
- **IDc**: Informs AS of the user
- **IDtgs**: Informs AS of the TGS (handles multiple TGSs)
- Message encrypted using key Kc (derived from user's password)

**Step 2**: AS returns response containing:
- **Kc,tgs**: Session key for C and TGS (for secure communication)
- **IDtgs**: Indicates whom the ticket is used for
- **TS2**: Timestamp
- **Lifetime2**: Lifetime of the ticket
- **Tickettgs**: For access to TGS, containing:
  - Session key Kc,tgs
  - IDc (indicates the user)
  - ADc (network address of C)
  - IDtgs
  - TS2
  - Lifetime2

### Security Feature

**Problem**: Captured ticket-granting ticket and verifying ticket presenter is the same client for whom ticket was issued

**Solution**: AS provides both C and TGS a secret piece of information securely: a session key Kc,tgs for C and TGS to communicate

---

## Ticket Granting Service Exchange (Steps 3-4)

**Purpose**: To obtain service-granting ticket
```
3: C → TGS: IDv, Tickettgs, AuthenticatorC
4: TGS → C: EKc,tgs[KC,V, IDv, TS4, TicketV]

Where:
Tickettgs = EKtgs[Kc,tgs, IDc, ADc, IDtgs, TS2, Lifetime2]
TicketV = EKv[Kc,v, IDc, ADc, IDv, TS4, Lifetime4]
AuthenticatorC = EKc,tgs[IDc, ADc, TS3]
```

### Step-by-Step Process

**Step 3**: Client talks to TGS for a server ticket
- **IDv**: Indicates the server
- **Tickettgs**: Ticket-granting ticket
- **AuthenticatorC**: Only C and TGS can open it
  - Used by TGS to authenticate C
  - Contains IDc, ADc, TS3

**Step 4**: TGS returns response with ticket for C to access V
- Message is encrypted (provides confidentiality and authentication)
- **Kc,v**: Key for C to talk to V
- **IDv**: Recipient (the particular server)
- **TS4**: Timestamp
- **TicketV**: Contains:
  - Kc,v (the key for V)
  - IDc, ADc, IDv, TS4, Lifetime4

---

## Client/Server Authentication Exchange (Steps 5-6)

**Purpose**: To obtain service
```
5: C → V: TicketV, AuthenticatorC
6: V → C: EKc,v[TS5 + 1]

Where:
TicketV = EKv[Kc,v, IDc, ADc, IDv, TS4, Lifetime4]
AuthenticatorC = EKc,v[IDc, ADc, TS5]
```

### Step-by-Step Process

**Step 5**: Client talks to V for access
- **TicketV**: Service-granting ticket
- **AuthenticatorC**: Only C and V can open it
  - Used by V to authenticate C
  - Contains IDc, ADc, TS5

**Step 6**: Acknowledgment from V
- Also allows C to authenticate V (mutual authentication)
- V proves it decrypted the ticket and knows the timestamp

---

## Kerberos Realms

**Definition**: A full service Kerberos environment consisting of a Kerberos server, a number of clients, and a number of application servers

### Requirements

1. All users are registered with the Kerberos server
2. All servers are registered with the Kerberos server
3. The Kerberos server must share a secret key with each server

---

## User Authentication by Asymmetric Encryption

### Overview

- Uses public key encryption for remote user authentication
- Central system Key Distribution Centre (KDC) provides public key certificates for authentication service
- KDC is NOT for key distribution but for providing public key certificates

### Complete Protocol
```
1. A → KDC: IDa, IDb
2. KDC → A: EKRauth[IDb, Kub]
3. A → B: EKub[Na, IDa]
4. B → KDC: IDa, IDb, EKUauth[Na]
5. KDC → B: EKRauth[IDa, Kua], EKub[EKRauth[Na, KS, IDb]]
6. B → A: EKua[EKRauth[Na, KS, IDb], Nb]
7. A → B: EKs[Nb]
````

### Step-by-Step Process

**Step 1**: A → KDC

- A informs KDC of its intention to securely talk to B

**Step 2**: KDC → A

- KDC sends B's public key certificate to A

**Step 3**: A → B

- Using B's public key, A informs B of its intention to communicate
- Sends a nonce to B

**Step 4**: B → KDC

- B asks KDC for A's public key certificate and requests a session key
- The nonce is protected by KDC's public key

**Step 5**: KDC → B

- KDC sends B a copy of A's public key certificate
- Plus triple information {Na, KS, IDb}:
    - KS is a secret key generated by KDC
    - Tied with the nonce Na to indicate the key is fresh
- Triple is encrypted by KDC's private key (allows B to verify it's from KDC)
- Also encrypted by B's public key (so no other party can use it to establish fraudulent connection with A)

**Step 6**: B → A

- Triple information is forwarded to A
- Together with a nonce generated by B
- All encrypted by A's public key

**Step 7**: A → B

- This message assures B of A's knowledge of the session key
- Demonstrates successful authentication

---

## Key Concepts Summary

### Authenticator vs Ticket

**Authenticator**:

- Short-lived (contains current timestamp)
- Encrypted with session key
- Proves the client currently possesses the session key
- Generated fresh for each request

**Ticket**:

- Long-lived (has lifetime parameter)
- Encrypted with server's secret key
- Contains session key and client information
- Can be reused within its lifetime

### Session Keys

Multiple session keys are used to minimize exposure:

- **Kc,tgs**: For communication between Client and TGS
- **Kc,v**: For communication between Client and Server V
- Each session key is unique and time-limited

### Security Benefits

1. **Password protection**: User's password never transmitted over network
2. **Single sign-on**: User enters password once per logon session
3. **Ticket reusability**: TGT can be used for multiple services
4. **Mutual authentication**: Both parties verify each other's identity
5. **Replay protection**: Timestamps and authenticators prevent replay attacks