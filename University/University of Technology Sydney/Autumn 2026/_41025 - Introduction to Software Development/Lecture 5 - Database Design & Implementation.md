
> [!faq] About this Lecture 
> Class: 41025
> Subject: #introductionToSoftwareDevelopment
> Date: 19/03/2025 
> Topics: 

## Database

Databases are used to permanently store data, which is often required in a full-stack web application. Databases typically run on their own servers, separate from the backend application. Communication between the backend and the database server is handled through a database driver or client library using a database-specific protocol (unlike HTTP requests). For commercial use, there are hosted (managed) database services such as Azure SQL and many more.

### Relational Database

A relational database stores data in tables that are related to each other. Each row represents an entity (or record), and each column represents an attribute defined by the table’s schema. The schema describes the structure of the table, including the attributes, data types, and constraints, and is often documented in a data dictionary. Relationships between tables can be expressed using an Entity–Relationship Diagram (ERD).

Non-relational (NoSQL) databases do not require a strict, fixed schema and often store data in formats such as JSON documents or graphs. NoSQL databases are out of scope for ISD.

### [SQLite](https://sqlite.org/)

SQLite is a lightweight SQL database that does not require a dedicated database server. It stores the entire database in a single file, which makes it suitable for the development stage of software. The query syntax is mostly the same as that of other SQL databases, with small differences in specific areas. For example, in traditional SQL databases (e.g., MySQL, PostgreSQL), defining a column as VARCHAR(50) enforces a maximum length of 50 characters; while SQLite ignores the length in types like VARCHAR(50), treating it as TEXT without enforcing a maximum length.

As the database is file-based, the same file can be shared within a group, allowing each student to work on different features while updating the same database during testing.

The Python module `sqlite3` provides methods to connect to a SQLite database, create tables, and perform CRUD (create, read, update, delete) operations. 

> Connect to a database with the following core syntax (defined as a function `get_connection()`). You'll need to specify the path and name of your db file.

``` python
def get_connection():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn
```

`conn.row_factory = sqlite3.Row` affects the result representation. By default the rows are returned as tuples, e.g., `("Alice Y", "a.y@example.com")`; with `sqlite3.Row` we return dictionary-like objects and we can access the fields with `u["name"]`, `u["email"]` where `u` is a `sqlite3.Row` object. The returning data format affects how you implement the backend.

The returned `conn` represents a connection session to the db, during which you can create cursors (objects that enable interactions with the database), execute queries, the session lasts until you close it with `conn.close()`.

> Creating a table 

``` python
conn = get_connection()
cursor = conn.cursor()
cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        gender TEXT,
        favcol TEXT
    )
""")
conn.commit()
```

`cursor = conn.cursor()` creates a cursor for this connection session. `conn.commit()` applies all changes made during a transaction (actually modifies the db), with a transaction representing a sequence of one or more database operations (or database-modifying SQL statement, e.g., `INSERT`, `UPDATE`, `DELETE`). 

Relating it back to what we briefly covered in Week 2-database query protocols are stateful. When you connect to a database, the connection maintains the state. This state can include current transaction state (started, uncommitted changes), temporary tables, prepared statements, and cursor position in a query result. 

When a transaction is started (automatically when the first database-modifying SQL statement is executed), it temporarily holds the intermediate state of the database until it is finalised (or committed, e.g., with `conn.commit()`). If you call `conn.close()` without committing, SQLite will automatically roll back uncommitted changes (stored in memory), and no actual modifications are made on your db. 

> Think: How would you design your tests when testing databases? Choices to make between temporily or permanently changing the database state. 

## Database Design

### Primary Key & Foreign Key

A primary key uniquely identifies each row in a table; it is `UNIQUE` and `NOT NULL` (required).

A foreign key links one table to another; it is a column that refers to a primary key in another table.

### Data Types & Constraints

Data types define what kind of data can go into a column, e.g., `INT`, `VARCHAR/TEXT`, `DATE`, `BOOLEAN`.

Constraints are rules that control what data is allowed.

> Common constraints

| Constraint | Description |
|----|----------|
| PRIMARY KEY | unique + required |
| FOREIGN KEY | must match and existing primary key value in another table |
| NOT NULL | cannot be empty |
| UNIQUE | no duplicate values |
| CHECK | must satisfy a condition |
| DEFAULT | use the default value if none is provided |

### No Multi-Valued Fields

Referred to as *First Normal Form (1NF)* in database design theory. Simplified in ISD.

> Bad: multi-valued cells

| Student | Subjects |
|---|---------|
| Alice | Math, Science |
| Bob | English |

> Bad : repeating column names

| Student | Subject1 | Subject2 |
|---|-------|-------|
| Alice | Math | Science |
| Bob | English | Literature |

> Good: only single-valued cells

| Student | Subject |
|---|-------|
| Alice | Math |
| Alice | Science |
| Bob | English | 

### Entity-Relationship-Diagram (ERD)
To enable the above, we now need to extend our data model for it to capture project and allocation. You can refer to the [Example ERD](https://studentutsedu-my.sharepoint.com/:f:/g/personal/yining_hu_uts_edu_au/IgASfeLMaVrsRbJqYaubMP1NAe0HFMJDZ-jYJL4U1IPzCTU?e=Ud5XlC). 

More diagramming rules can be found [here](https://www.visual-paradigm.com/tutorials/how-to-model-relational-database-with-erd.jsp).

> Many-to-many relationships

For subject enrolment, one student can enrol in multiple subjects, and one subject can have multiple students enrolled at a time. There is a many-to-many relationship between student and subject. However, a many-to-many relationship cannot be directly stored in relational tables. Therefore, we introduce a junction table, "Enrolment", to store the mappings between student and subject, which has a compound key that contains the primary keys of both the student and subject tables.

> Workshop case study

Note that there is a one-to-many relationship between projects and students, meaning that one project can have multiple students allocated. Since each student is uniquely assigned to a project, you can add a column in the student table that refers to the project table using a foreign key.

In the sample source code, we have created a new table "Allocations". Allocations are uniquely identified pairs combining a student and a project, and can include additional columns, such as a role column to indicate the role of a student on a project.

For simplicity we are not storing the admin details in the database, but only on the backend hard-coded in `models/admin.py`. 

### Data Flow Diagram (DFD)
A DFD is used to illustrate the flow of data in a system. It focuses on processes, data stores, and data flow; not the implementation. One dataflow may cover multiple user stories. We have provided an [Example DFD](https://miro.com/app/board/uXjVGCAiuyA=/?share_link_id=10398528666) that illustrates the process of students self-assigning or administrators assigning students to projects.

There are four main components in a DFD, i.e., external entities including users and systems outside the system that send or receive data, processes, data stores, and data flows. Use different notations to represent external entities, processes and data stores. Use arrows to show the direction of data movements; entities don't directly connect to data stores; data goes through processes to reach data stores. 

A more comprehensive diagramming guide can be found [here](https://www.visual-paradigm.com/guide/data-flow-diagram/what-is-data-flow-diagram/).

## Extensions
- [Normal Forms](https://www.geeksforgeeks.org/dbms/normal-forms-in-dbms/) in database design.