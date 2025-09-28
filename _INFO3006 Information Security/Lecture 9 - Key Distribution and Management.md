
> [!faq] About this Lecture
> Class: INFO3006
> Subject: #informationSecurity 
> Topics: #coding 
> Date: 2025-09-28 at 16:40

## Overview

This lecture covers the fundamental concepts and methods for distributing and managing cryptographic keys in secure communication systems, including both symmetric and asymmetric approaches.

### Learning Objectives

- Understand symmetric key distribution methods
- Learn asymmetric key distribution mechanisms
- Explore X.509 certificates
- Understand Public Key Infrastructure (PKI)

## Symmetric Key Distribution

### Distribution Methods

Symmetric keys can be distributed through four main approaches:

- **Physically delivered** - Manual key exchange
- **Use previously and recently used key** - Key derivation from existing keys
- **Use Diffie-Hellman key exchange** - Mathematical key agreement
- **Use a trusted third party or key distribution centre (KDC)** - Centralized key management

### Key Hierarchy in KDC Systems

#### Session Key

- **Purpose**: Used by corresponding users to encrypt messages
- **Scope**: Used for one session of communication only
- **Source**: Obtained from KDC
- **Protection**: Transmitted in encrypted form using a master key

#### Master Key

- **Purpose**: Shared between KDC and an end user
- **Function**: Used to encrypt messages and session keys
- **Uniqueness**: Each user shares a unique master key with KDC

### Symmetric Key Distribution Models

#### Model 1: Centralized Distribution via User A

**System Architecture:**

- User A shares master key Ka with KDC
- User B shares master key Kb with KDC
- User A communicates with both KDC and User B
- User B does not communicate with KDC directly

**Notation:**

```
Eka[M]: message M encrypted by key Ka
Ks: session key
Ka: master key shared between A and KDC
Kb: master key shared between B and KDC
```

**Distribution Protocol:**

```
1. A → KDC: Eka[Request, N1]
2. KDC → A: EKa[Ks, Request, N1, EKb[Ks, A]]
3. A → B: EKb[Ks, A]
4. B → A: EKs[N2]
5. A → B: EKs[H(N2)]
```

**Step-by-Step Analysis:**

**Step 1:** A → KDC: Request, N1

- A sends plaintext request to KDC for session key
- Request includes identities of A and B
- N1 is a nonce (timestamp, counter, or random number) unique for each request
- Optional: Encrypt using master key Ka for additional security

**Step 2:** KDC → A: EKa[Ks, Request, N1, EKb[Ks, A]]

- KDC responds with message encrypted using Ka
- Contains:
    - Session key Ks
    - Original request (for verification)
    - Nonce N1 (confirms response matches request from Step 1)
    - EKb[Ks, A] (ticket for B, encrypted with B's master key)

**Step 3:** A → B: EKb[Ks, A]

- A forwards the ticket to B
- A cannot decrypt this message (lacks Kb)
- B decrypts using Kb to obtain session key Ks
- B learns the session key is shared with A

**Step 4:** B → A: EKs[N2]

- B confirms session key agreement with challenge
- B sends nonce N2 encrypted with session key Ks
- A decrypts to obtain N2

**Step 5:** A → B: EKs[H(N2)]

- A proves possession of correct session key
- A computes hash of N2 and encrypts with Ks
- B can verify A has the correct session key

#### Model 2: Direct Communication with KDC

**System Architecture:**

- User A shares master key Ka with KDC
- User B shares master key Kb with KDC
- Both A and B communicate directly with KDC to obtain session key Ks

_Note: Protocol details left as exercise in original lecture_

### Decentralized Key Distribution

**Key Hierarchy:**

#### Session Key

- Used by corresponding users to encrypt messages
- Used for one session of communication only

#### Master Key (MKm)

- Shared between a pair of end users (A and B)
- Used to encrypt session key distribution messages
- Each pair of users shares a unique master key

**Distribution Protocol:**

```
1. A → B: Request, N1
2. B → A: EMKm[Ks, Request, B, H(N1), N2]
3. A → B: EKs[H(N2)]
```

**Step Analysis:**

**Step 1:** A sends request to B for session key with nonce N1

**Step 2:** B responds with message encrypted using shared master key MKm:

- Contains session key Ks
- Includes original request for verification
- Contains B's identity
- Includes hashed N1 to prove message freshness
- Adds new nonce N2

**Step 3:** A confirms session key by computing hash of N2 and encrypting with Ks

## Asymmetric Key Distribution

### Public Key Distribution Methods

#### Public Announcement

**Uncontrolled Distribution:**

- Display on web pages
- Send to newsgroups
- Send to Internet mailing lists

**Major Weakness:** Anyone can forge a public key announcement

#### Publicly Available Directory

**Controlled Distribution:**

- Authority maintains directory with (name, public key) entries
- Users register public keys through authenticated channels
- Users may replace existing keys
- Authority publishes the directory
- Electronic access to directory

### Public Key Authority (PKA) System

**System Components:**

- User A has PKA's public key KUauth
- User B has PKA's public key KUauth
- Both users communicate with PKA to request public keys

**Notation:**

```
KUX: public key for party X
KRX: private key for party X
KUauth: PKA's public key
KRauth: PKA's private key
```

**Key Hierarchy:**

- **Participant's public key**: Used to encrypt messages, obtained from PKA, transmitted using PKA's digital signature
- **PKA's public key**: Distributed by PKA to end users, used to verify PKA signatures

**Distribution Protocol:**

```
1. A → PKA: RequestA, Time1
2. PKA → A: SKRauth[KUb, RequestA, Time1]
3. A → B: EKUb[A, N1]
4. B → PKA: RequestB, Time2  
5. PKA → B: SKRauth[KUa, RequestB, Time2]
6. B → A: EKUa[N1, N2]
7. A → B: EKUb[N2]
```

**Key Steps Analysis:**

**Step 2:** PKA → A: SKRauth[KUb, RequestA, Time1]

- SKRauth indicates digital signature (not encryption) using PKA's private key
- A verifies signature using PKA's public key
- Contains B's public key KUb
- Includes original RequestA for verification
- Timestamp ensures message freshness

**Step 3:** A → B: EKUb[A, N1]

- A encrypts identity and nonce using B's public key
- Only B can decrypt with corresponding private key

**Step 5:** Similar to Step 2, but B receives A's public key KUa

## Public Key Certificates

### Certificate Authority (CA) System

**Key Properties:**

- Only CA can create and update certificates
- Any party can verify certificate validity
- Verification confirms public key ownership

**Certificate Structure:**

```
CA = SKRauth[T, A, KUa]

Where:
T: timestamp
A: Party A's identity  
KUa: A's public key
```

**Verification Process:**

1. Verify CA's signature using CA's public key
2. Confirm timestamp validity
3. Extract and trust the certified public key

### Public Key Distribution Using Certificates

#### Simple Secret Key Distribution

Basic approach vulnerable to man-in-the-middle attacks:

```
A → B: KUa||A
B → A: EKUa[Ks]
```

**Vulnerability:** Eve can substitute her public key KUe for A's public key KUa

#### Man-in-the-Middle Attack

```
A → Eve: KUa||A
Eve → B: KUe||A (Eve impersonates A)
B → Eve: EKUe[Ks] (B thinks encrypting for A)
Eve → A: EKUa[Ks] (Eve forwards to A with different key)
```

#### Secure Protocol Using Certificates

```
A → B: CA, CB
B → A: EKUa[SKRb[Ks]||N1||B], CB
A → B: EKs[N1, A]
```

#### Simplified Authenticated Protocol

```
1. A → B: EKUb[SKRa[Ks]||N1||A], CA
2. B → A: EKs[N1, B]
```

**Step 1 Analysis:**

- A sends B a signed session key Ks
- Includes nonce N1 and A's identity
- Provides A's certificate CA for verification
- B can decrypt, verify certificate, and authenticate signature

**Step 2:** B returns nonce and identity encrypted with session key Ks

**Alternative Design Choice:**

```
2. B → A: EKs[N1, B, SKRb[N2]]
3. A → B: EKs[N2]
```

## X.509 Certificates

### Standard Overview

- **X.509** is the widely accepted standard for formatting public key certificates
- Used in most network security applications:
    - IP Security
    - Transport Layer Security
    - Other network protocols

### X.500 Integration

- X.509 is part of X.500 series recommendations
- X.500 defines directory servers that:
    - Maintain user databases
    - Map usernames to network addresses
- X.509 defines authentication services for X.500 directory users

### Technical Foundation

- Based on public key cryptography
- Uses digital signatures for certificate validation
- Provides standardized certificate format for interoperability

## Public Key Infrastructure (PKI)

### Definition

PKI is the comprehensive framework including:

- **Software**: Certificate management applications
- **Hardware**: Cryptographic devices and secure storage
- **People**: Certificate authorities and administrators
- **Policies**: Governance and operational procedures
- **Procedures**: Certificate lifecycle management

### Primary Objective

Provide reliable, secure, and efficient acquisition of public keys

### Key PKI Elements

#### Core Components

- **End Entity**: Users and devices requiring certificates
- **Certification Authority (CA)**: Issues and manages certificates
- **Registration Authority (RA)**: Verifies identities before certificate issuance
- **Repository**: Stores and distributes certificates and revocation information

#### Key Processes

- **Registration**: Identity verification and certificate request submission
- **Initialization**: Initial certificate generation and distribution
- **Certification**: Certificate creation and digital signing
- **Key Pair Update**: Certificate renewal and key rotation
- **Revocation**: Certificate invalidation and status management

### PKI Workflow

1. **Identity Verification**: RA verifies user identity
2. **Certificate Request**: User submits certificate signing request
3. **Certificate Generation**: CA creates and signs certificate
4. **Certificate Distribution**: Certificate made available through repository
5. **Certificate Usage**: End entities use certificates for authentication/encryption
6. **Certificate Maintenance**: Renewal, update, and revocation as needed

## Key Concepts Summary

### Security Considerations

- **Nonce Usage**: Prevents replay attacks through unique values
- **Timestamp Validation**: Ensures message freshness
- **Certificate Verification**: Confirms public key authenticity
- **Key Hierarchy**: Separates session keys from long-term master keys

### Attack Mitigation

- **Man-in-the-Middle**: Use certificates for key authentication
- **Replay Attacks**: Implement nonces and timestamps
- **Key Compromise**: Use session keys with limited lifetime
- **Impersonation**: Require digital signatures with certificates

### Practical Applications

- Secure communication protocols (TLS/SSL)
- Virtual Private Networks (VPNs)
- Email security (S/MIME)
- Code signing and software distribution
- Smart card and device authentication