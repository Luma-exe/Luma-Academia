
> [!faq] About this Lecture 
> Class: 41025
> Subject: #introductionToSoftwareDevelopment
> Date: 07/04/2025 
> Topics: 

## Model-View-Controller (MVC)

MVC is an architectural pattern that enables **modular design** and enforces **separation of concerns** by dividing an application into three components:

- **View** — the interface that presents information to users and accepts input from them
- **Model** — represents application data, enforces business rules, and manages database access
- **Controller** — orchestrates requests from the View to the Model; interprets requests, invokes business logic, and decides how Model responses are rendered in the View

In ISD, a **hybrid frontend-backend MVC** is used, where the frontend acts as the View. With pure server-side rendering (SSR), the entire MVC pattern can live entirely in the backend.

---

## Data Access Layer (DAL)

The DAL is implemented as part of the **Model** component of MVC. In the project structure, it lives in `db_crud.py` inside the `/backend/model/` folder.

**Responsibilities of the DAL:**
- Handles database connections
- Executes queries and commands
- Maps database records to application data structures

> **Note:** This DAL passes raw SQL queries directly — it is *not* considered an ORM, even though it performs similar functions.

### Example — `add_user()` Function
```python
def add_user(name, email, password, gender, favcol):
    """Insert a new user into the database."""
    conn = get_connection()
    cursor = conn.cursor()
    try:
        cursor.execute("""
            INSERT INTO users (name, email, password, gender, favcol)
            VALUES (?, ?, ?, ?, ?)
        """, (name, email, password, gender, favcol))
        conn.commit()
    except sqlite3.IntegrityError as e:
        raise ValueError(f"Email '{email}' already exists.") from e
    finally:
        conn.close()
```

**Key points:**
- Uses `get_connection()` to open a database connection (defined in a prior week)
- `cursor.execute()` runs a parameterised SQL INSERT statement (the `?` placeholders prevent SQL injection)
- `sqlite3.IntegrityError` is raised when a database constraint is violated — in this case, the `UNIQUE` constraint on the `email` field in `db_init.py`
- The error is caught and re-raised as a human-readable `ValueError` — this improves usability and debugging
- `conn.close()` is always called in `finally` to release the connection, even if an error occurs

### Data Access Object (DAO)

The DAL here is written in **plain functions** (not classes). Wrapping functions into DAO classes is optional and more common in enterprise applications. For ISD projects, **function-based DAL is sufficient**.

---

## Flask Blueprints

Flask Blueprints organise routes into **modular, reusable components**. Each Blueprint represents a group of related routes that can be developed, tested, and maintained independently.

**Project structure — two route modules in `/backend/routes/`:**
- `auth.py` — authentication routes (login, registration)
- `users.py` — user management routes (primarily admin use)

**Registering Blueprints in `app.py`:**
```python
app.register_blueprint(users_bp, url_prefix="/users")
app.register_blueprint(auth_bp, url_prefix="/auth")
```

This means all routes defined in `auth.py` are accessible under `/auth/...`, and all routes in `users.py` under `/users/...`.

---

## Endpoint Functions

An **endpoint** defines a URL + HTTP method pair. An **endpoint function** defines the behaviour when that endpoint is called.

### Example — `POST /auth/login`
```python
auth_bp = Blueprint("auth", __name__)

@auth_bp.route('/login', methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    # Server-side validation
    if not email or not password:
        return jsonify({"status": "error", "message": "Email and password required"}), 400

    user_row = get_user_by_email(email)  # returns a tuple, not an object
    if user_row is None:
        return jsonify({"status": "error", "message": "Email doesn't exist. Please register."}), 404

    if user_row[3] != password:
        return jsonify({"status": "error", "message": "Incorrect password."}), 401

    return jsonify({
        "status": "success",
        "message": "Login successful",
        "user": {
            "name": user_row[1],
            "email": user_row[2],
            "gender": user_row[4],
            "favcol": user_row[5]
        }
    }), 200
```

**Breakdown of this endpoint:**

| Element | Description |
|---|---|
| `Blueprint("auth", __name__)` | Creates a Blueprint object named `"auth"` |
| `@auth_bp.route('/login', methods=["POST"])` | Registers the function as a route under the `auth` Blueprint |
| `request.json` | Parses the JSON body of the incoming POST request |
| `data.get("email")` | Safely retrieves a field from the request payload |
| Server-side validation | Checks that required fields are present before querying the DB |
| `get_user_by_email(email)` | DAL function that returns a `sqlite3.Row` tuple (or `None`) |
| `user_row[3]` | Password field — tuple index-based access (no ORM object) |
| Unified response format | All endpoints return `{"status": "error"\|"success", "message": ...}` with an HTTP status code |

**HTTP status codes used:**

| Code | Meaning |
|---|---|
| `200` | OK — successful login |
| `400` | Bad Request — missing fields |
| `401` | Unauthorised — incorrect password |
| `404` | Not Found — email doesn't exist |

---

## API Key Authentication

Certain endpoints (e.g., user management) should only be accessible to admins. A common approach is an **API Key** — a secret token only the authorised user knows.

### `require_api_key` Decorator
```python
ADMIN_API_KEY = "admin-secret-key"

def require_api_key(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        api_key = request.headers.get("x-api-key")
        if api_key != ADMIN_API_KEY:
            return jsonify({"status": "error", "message": "Invalid or missing API key"}), 401
        return f(*args, **kwargs)
    return decorated
```

**How it works:**
- The client must include an `x-api-key` header in its request
- The decorator checks whether the provided key matches `ADMIN_API_KEY`
- If the key is missing or incorrect, the request is rejected with a `401` response
- If valid, the original endpoint function `f` is called normally

**Applying the decorator:**
```python
@users_bp.route('/all', methods=["GET"])
@require_api_key
def get_all_users():
    ...
```

Place `@require_api_key` directly above the endpoint function definition.

> **Real-world note:** In production, API keys would be generated and managed dynamically rather than hardcoded as a string in the source code.

---

## Unit Testing the DAL

Tests are defined in a `TestDBCRUD` class located at `backend/tests/test_db.py`.

**Test lifecycle:**
```python
def setUp(self):
    # Drop existing users table and create a fresh one
    # Ensures a clean state before each test
    ...

def tearDown(self):
    # Drop the users table created during the test
    ...
```

> ⚠️ **Never drop tables against a production database.** This pattern is only safe in a dedicated test environment.

**Important behaviour:** Because `conn.commit()` is called inside all DAL functions in `db_crud.py`, changes made during tests **are persisted to disk** until explicitly reset (e.g., in `setUp()` or `tearDown()`).

**Running the tests:**
```bash
python -m unittest backend.tests.test_db
```

---

## Architecture Overview