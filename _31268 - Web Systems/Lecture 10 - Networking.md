
> [!faq] About this Lecture 
> Class: 31268
> Subject: #webSystems
> Date: 30/04/2025 
> Topics: #web #html #css

## Basics — Key Terminology

|Term|Definition|
|---|---|
|**Server**|Central computer that provides information to multiple "client" computers|
|**Client**|Computer operated by a user that connects with a server to acquire information|
|**Network**|Group of interconnected computers exchanging information|
|**HTTP/HTTPS**|Standard protocols for web data transfer; HTTPS adds encryption|
|**Domain Name**|Unique name identifying a website, used to locate it on a server|
|**TCP/IP**|Foundational internet protocol suite — TCP for reliable transfer, IP for routing|
|**NIC**|Network Interface Card — direct connection to a local area network|
|**HUB**|Broadcasts data to all ports without filtering|
|**Switch**|Connects devices within a LAN; forwards data to specific devices using MAC addresses|
|**Subnet**|Smaller segmented portion of a larger network|
|**LAN**|Local Area Network — connects devices within a limited area|
|**WAN**|Wide Area Network — connects devices over large geographical areas|
|**Firewall**|Security device monitoring/controlling incoming and outgoing network traffic|

---

## Network Fundamentals

### Core Definitions

- **Network** — system of interconnected devices communicating over wired or wireless connections
- **Node** — any device on a network (servers, switches, modems, computers, printers, etc.)
- **Host** — a node with a unique function; other devices connect to it to access data or services
    - A **server** is an example of a host
- **Client** — a computer node that accesses data or services managed by a server

### Network Elements (Hardware)

- **Router** — connects multiple network segments into one network
- **Switch** — connects devices within the same network; manages data flow using **MAC addresses** between transmitter and receiver
- **Hub** — broadcasts data to all ports; only the intended recipient listens
- **Cables** — physical wired connections (Ethernet); three common types:
    - Coaxial
    - Twisted-Pair
    - Fiber-Optic
- **NIC (Network Interface Card)** — connects a computer to a network via cable; each NIC has a unique **MAC address** (hardware identifier assigned by manufacturer)
- **Access Points** — allow wireless devices to connect to a wired network (Wi-Fi)
- **Modems** — convert digital data ↔ analogue for transmission over telephone/cable lines
- **Firewalls** — monitor and control incoming/outgoing traffic for security

---

## Network Concepts

### LAN vs WAN

|Feature|LAN|WAN|
|---|---|---|
|Geolocation|Small and local area|Wide area — cities, countries|
|Speed|High speed data transfer|Slower than LAN|
|Latency|Low latency|High latency due to distance|
|Ownership|Single entity|Multiple entities|
|Cost|Low setup cost|Higher infrastructure cost|
|Security|Higher central control|Greater risk due to Internet|

#### LAN — Local Area Network

- **Limited range** — typically up to a few kilometres
- **High speed** — uses Ethernet standard at high data-transfer rates
- **Wireless option** — Wi-Fi commonly used
- **Ownership** — often one organisation/individual; greater security control
- **Low latency** — data doesn't travel far

#### WAN — Wide Area Network

- **Wide coverage** — spans cities, countries, or continents
- **Slower speed** — due to distances and reliance on public infrastructure
- **Higher latency** — data packets travel longer distances
- **Ownership** — collaboration with ISPs or telcos required
- **Complexity** — needs routers, switches, leased lines

---

## Network Architecture

### Client-Server Model

- A **centralised server** hosts resources and data
- **Clients** (PCs, laptops, phones) request and access those resources
- Server handles processing, storage, authentication
- Communication uses protocols like **HTTP, FTP, SQL** depending on service

### Peer-to-Peer (P2P) Model

- Devices act as **both clients and servers**
- Resources shared directly — no centralised server
- Each peer manages its own data and services
- Protocols: **BitTorrent**, Napster (historical); **blockchain** networks use P2P
- Communication is direct between peers — no central coordination

---

## Network Topologies

> A **topology** is a pattern showing how nodes connect to each other.
> 
> - **Physical topology** → physical layout of wires
> - **Logical topology** → how data moves through the network

### Bus Topology

- All devices connected to a **single central cable** (the bus)
- Data sent along the bus; all devices receive it, only intended recipient processes it

|Advantages|Disadvantages|
|---|---|
|Simple and cost-effective|Limited scalability — overloading causes collisions|
|Easy to implement|Data collisions on simultaneous transfer|
||Network failure if bus cable fails|

### Star Topology

- All devices connected to a **central hub or switch**
- Hub manages all communication

|Advantages|Disadvantages|
|---|---|
|Easy to manage|Single point of failure (hub/switch)|
|Scalable — add devices without disruption|Requires more cabling|
|Reduced risk — one failure doesn't affect others|Central hub/switch can be expensive|

### Mesh Topology

- Each device connected to **every other device**
- Creates multiple paths for data transmission

|Advantages|Disadvantages|
|---|---|
|High reliability — alternate paths if one fails|Complex to manage|
|Improved performance — traffic routed via multiple paths|Requires more hardware|
|Scalable|Higher cost for multiple connections|

### Hybrid Topology

- Combines **two or more topologies** (e.g. star-bus, star-mesh)
- Flexibility and optimisation based on specific needs

|Advantages|Disadvantages|
|---|---|
|Fault tolerant (integrates mesh resilience)|Complex to implement and maintain|
|Flexible — combines strengths of different topologies|Troubleshooting is more difficult|
|Scalable|Higher setup and maintenance cost|

---

## OSI Model

The **OSI (Open Systems Interconnection)** model is a conceptual framework with **7 layers**, each performing specific communication/data transfer functions.

|Layer|Name|Function|
|---|---|---|
|7|**Application**|Interface for applications to access the network|
|6|**Presentation**|Ensures data is in usable format; handles encryption/decryption|
|5|**Session**|Ensures data is synchronised and organised during transfer|
|4|**Transport**|Establishes logical connection between source and destination; specifies protocol|
|3|**Network**|Manages logical addressing, routing, and forwarding across a physical path|
|2|**Data Link**|Defines data format on the network; responsible for node-to-node connection|
|1|**Physical**|Transmits raw packets (bit-stream) over the physical network|

> **IP operates at Layer 3 (Network Layer)**

---

## Network Protocols

Protocols can be:

- **Connection-oriented** — establish a connection before data transmission (reliable)
- **Connectionless** — data sent without setting up a connection (faster)

### TCP vs UDP

|Feature|TCP|UDP|
|---|---|---|
|Connection|Connection-oriented|Not connection-oriented|
|Reliability|Reliable (order maintained, retransmission)|Unreliable|
|Overhead|Higher|Low|
|Flow control|Yes (based on network)|No implicit flow control|
|Error detection|Retransmits erroneous packets|Discards erroneous packets, no notification|
|Congestion control|Yes|No|
|Use cases|HTTP/HTTPS, file transfer, mail|Streaming, VoIP, DNS queries, gaming|

### Connection-Oriented Protocols

- **TCP/IP** — fundamental suite for internet communication; used for web browsing, email, file transfers
- **HTTP/HTTPS** — transfer web data; HTTPS encrypts for secure communication; core for loading web pages
- **SMTP/POP/IMAP** — email protocols
    - **SMTP** — sends emails
    - **IMAP** — retrieves emails; keeps and syncs them on server
    - **POP** — retrieves and downloads emails, deletes from server
- **RDP/SSH** — remote access
    - **RDP** — remote desktop (Windows)
    - **SSH** — secure command-line access to remote systems
- **FTP/FTPS** — file transfer between client and server; FTPS encrypts using SSL/TLS

### Connectionless Protocols

- **UDP** — fast, low-overhead; ideal for streaming, online gaming, real-time apps
- **DHCP** — assigns IP addresses and network configurations dynamically
- **ICMP** — sends error messages and diagnostics (e.g. `ping` command)
- **DNS** — translates human-readable domain names into IP addresses

---

## Network Utilities

### Ping

- **Function** — checks if a device is reachable by sending ICMP echo requests and measuring response time
- **Usage** — test connectivity and latency

```bash
# Windows & Unix/Linux
ping google.com
```

Example output: shows reply time in ms, packets sent/received/lost, min/max/average round trip times.

---

### nslookup (Name Server Lookup)

- **Function** — queries DNS records to find the IP address of a domain or verify DNS configurations
- **Usage** — diagnose domain resolution issues, confirm DNS settings

```bash
# Windows & Unix/Linux
nslookup google.com
```

Example output: shows server, address, and resolved IP(s) — both IPv4 and IPv6.

---

### Traceroute

- **Function** — traces the route packets take to a destination, showing each hop and delay
- **Usage** — diagnose routing issues, identify bottlenecks

```bash
# Windows
tracert google.com

# Unix/Linux
traceroute google.com
```

Example output: lists each hop (router) with 3 timing columns, shows "Request timed out" for blocked hops.

---

## Network Segmentation

**Network segmentation** — dividing a larger network into smaller, isolated subnetworks.

Benefits:

|Benefit|Description|
|---|---|
|**Enhanced Security**|Isolating segments restricts sensitive data from unauthorised users|
|**Improved Performance**|Fewer devices per segment → less congestion → faster transfer|
|**Simplified Management**|Smaller segments easier to manage; quicker issue isolation|
|**Compliance**|Creates designated secure areas for sensitive data processing|

---

## Internet Protocol (IP)

IP is the foundational protocol governing how data is **sent, addressed, and routed** across networks.

Key facts:

- Operates at **OSI Layer 3** (Network Layer)
- Each device on a network gets a **unique IP address**
- Supports **subnetting** to subdivide networks
- Identifies both **host** and **network**
- IP addresses are represented by more readable **URLs**
- **DNS** translates URLs into IP addresses

### IP Address Classes

|Class|Range|Use|Networks|Hosts/network|
|---|---|---|---|---|
|**A**|`0.0.0.0` – `127.255.255.255`|Extremely large networks (ISPs)|Up to 126|Up to 16,777,214|
|**B**|`128.0.0.0` – `191.255.255.255`|Medium-large networks (enterprises)|Up to 16,384|~65,000|
|**C**|`192.0.0.0` – `233.255.255.255`|Small networks (home/small business)|Up to 2,097,150|Up to 254|

### Reserved IP Addresses

|Address|Name|Purpose|
|---|---|---|
|`0.0.0.0`|Unknown IP|Represents unknown/unroutable request or any address on a server|
|`127.0.0.1`|Loopback|Returns message to originating device; used for testing/debugging|
|`255.255.255.255`|Broadcast|Sends data to every device on the network|

### IPv4 vs IPv6

- **IPv4** — 32-bit addresses, ~4.3 billion unique addresses (limited)
    - Format: four 8-bit octets in decimal, e.g. `65.103.15.100`
- **IPv6** — 128-bit addresses, nearly unlimited unique addresses
    - Format: eight 16-bit groups in hexadecimal, e.g. `FEDC:0000:0000:0089:0245:78FF:FE45:BA98`
    - Sections: Prefix | Subnet | Interface

### Public vs Private IP

||Public IP|Private IP|
|---|---|---|
|Assigned by|ISP|Local router or DHCP server|
|Globally unique|Yes|No|
|Internet routable|Yes|No|
|Purpose|Internet communication|Internal LAN communication|

**Common private IP ranges:**

```
10.0.0.0     – 10.255.255.255
172.16.0.0   – 172.31.255.255
192.168.0.0  – 192.168.255.255
```

### Static vs Dynamic IP

||Static IP|Dynamic IP|
|---|---|---|
|Assignment|Manually configured|Auto-assigned by DHCP server|
|Permanence|Permanent|Temporary (changes on reconnect)|
|Use case|Servers, routers, services requiring consistent addressing|Consumer devices|

---

## CIDR — Classless Inter-Domain Routing

**CIDR** is a method for allocating IP addresses and specifying subnet IP address ranges using a shorthand notation.

**CIDR Notation:**

$$\text{IP/suffix}$$

- **IP** — base network address (starting point of the address range)
- **suffix (prefix)** — number of bits (from the left) fixed for the network portion

**Example:** `192.168.1.11/24`

- First **24 bits** are the network portion
- Remaining $32 - 24 = 8$ bits available for hosts/subnetting

---

## Subnetting

**Subnetting** divides a network into smaller segments using CIDR.

### Key Formulas

**Number of usable hosts in a subnet:**

$$\text{Hosts} = 2^{(32 - \text{prefix length})} - 2$$

> The $-2$ accounts for the **network address** and **broadcast address**, which cannot be assigned to hosts.

**Number of subnets:**

$$\text{Subnets} = 2^{n}$$

where $n$ = number of **borrowed bits** (bits taken from the host portion to create subnets).

> Borrowed bits are determined by how many subnets the organisation requires.

---

## Subnetting — Worked Example

**Problem:** An organisation with network CIDR `192.168.111.105/20` has 90 departments. Determine:

1. The subnet mask
2. The required number of subnets (sufficient for 90 departments)
3. The new subnet mask
4. The number of hosts per subnet

---

### Step 1 — Understand the Network Address and Prefix

- Network address: `192.168.111.105`
- Prefix `/20` → first **20 bits** are fixed for the network
- Remaining bits for hosts: $32 - 20 = 12$ bits

Binary representation:

```
192.168.111.105/20
= 11000000.10101000.01101111.01100110 /20
  |<---- 20 fixed bits ---->|<- 12 host bits ->|
```

---

### Step 2 — Subnet Mask Calculation

To find the subnet mask for `/20`:

1. Convert network address to binary
2. Set first 20 bits to `1`
3. Set remaining 12 bits to `0`
4. Convert back to decimal

```
Binary IP:   11000000.10101000.01101111.01100110
Step 2a:     11111111.11111111.11110000.00000000
                       (first 20 bits = 1, rest = 0)
Decimal:     255      .255     .240     .0
```

$$\text{Subnet Mask} = 255.255.240.0$$

---

### Step 3 — Number of Subnets Required

Need enough subnets for **90 departments**. Find smallest $n$ where $2^n \geq 90$:

$$2^6 = 64 \quad \text{(not enough)}$$ $$2^7 = 128 \quad \checkmark \text{ (sufficient)}$$

$$\boxed{\text{Number of subnets} = 128, \quad n = 7 \text{ borrowed bits}}$$

---

### Step 4 — New Subnet Mask

With $n = 7$ borrowed bits:

$$\text{New prefix} = 20 + 7 = 27$$

Set first 27 bits to `1`, remaining 5 bits to `0`:

```
11111111.11111111.11111111.11100000
= 255    .255    .255    .224
```

$$\boxed{\text{New Subnet Mask} = 255.255.255.224}$$

---

### Step 5 — Number of Hosts per Subnet

- Host bits available: $h = 32 - 27 = 5$

$$\text{Hosts} = 2^{h} - 2 = 2^{5} - 2 = 32 - 2 = 30$$

$$\boxed{\text{Each of the 128 subnets can support 30 hosts}}$$

---

## File Sharing — SSH

**SSH (Secure Shell)** — protocol for secure communication between a local machine (client) and a remote machine (host).

- Uses **encryption** to keep data confidential
- Commonly used for: logging into remote Unix-like servers, executing commands, transferring files

### Basic SSH Connection

```bash
ssh username@hostname_or_ip
```

### Authenticated SSH Connection (with private RSA key)

```bash
ssh -i /path-to-local/private_key username@hostname_or_ip
```

> The `-i` flag specifies the path to the local private key file.

---

### SCP — Secure Copy (via SSH)

`scp` copies files between local and remote host using SSH.

**Upload a file to remote:**

```bash
scp -i /path/to/PK /path/to/local/file username@hostname:/path/to/remote/directory
```

**Download a file from remote:**

```bash
scp -i /path/to/PK username@hostname:/remote/file /path/to/local/directory
```

> In both commands, specify the **exact file location** on both local and host devices.

---

## File Sharing — SFTP

**SFTP (SSH File Transfer Protocol)** — transfers files securely over SSH; more interactive than SCP (can browse directories).

### Full SFTP Workflow

**Step 1 — Start session:**

```bash
sftp -i /path/to/private_key username@hostname
```

**Step 2 — Upload file:**

```bash
put /path/to/local/file /path/to/remote/directory
```

**Step 3 — Download file:**

```bash
get /path/to/remote/file /path/to/local/directory
```

**Step 4 — End session:**

```bash
exit
```

---

## Quick Reference — Formula Summary

|Concept|Formula|
|---|---|
|Usable hosts in subnet|$\text{Hosts} = 2^{(32 - \text{prefix})} - 2$|
|Number of subnets|$\text{Subnets} = 2^{n}$ where $n$ = borrowed bits|
|New prefix after borrowing|$\text{New prefix} = \text{original prefix} + n$|
|Host bits after subnetting|$h = 32 - \text{new prefix}$|

---

## Connections to Other Topics

- **OSI Model** → IP operates at Layer 3; TCP/UDP at Layer 4; HTTP at Layer 7
- **DNS** → translates domain names to IP (relevant to web systems and URL routing)
- **DHCP** → automatic IP assignment in private networks (relevant to server setup)
- **SSH/SFTP** → used in server administration; builds on Unix knowledge from earlier lectures