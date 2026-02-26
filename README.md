

# ⚡ CipherSQLStudio

A browser-based SQL learning platform where students can practice SQL queries against pre-configured assignments with real-time execution and intelligent hints.

---

## 🎯 Objective

CipherSQLStudio provides a secure SQL sandbox where users can:

* View pre-configured SQL assignments
* Write and execute SQL queries
* Get intelligent hints (not solutions) using an LLM
* View real-time query results
* Practice SQL in a controlled PostgreSQL environment

This project focuses on user experience, query execution, validation, and architecture clarity.

---

# 🏗️ System Architecture

## 🔹 High-Level Architecture

```
Frontend (React)
        ↓
Backend API (Express)
        ↓
PostgreSQL (Query Execution)
        ↓
MongoDB (Assignments Storage)
        ↓
LLM API (Hint Generation)
```

---

# 🔄 Data Flow

## 🟢 Query Execution Flow

1. User writes SQL in Monaco Editor
2. User clicks **Execute**
3. Frontend sends `POST /api/execute`
4. Backend validates SQL query (security layer)
5. PostgreSQL executes safe query
6. Results returned to frontend
7. React updates state
8. Results displayed in formatted table

---

## 🟣 Hint Generation Flow

1. User clicks **Get Hint**
2. Frontend sends `POST /api/hint`
3. Backend constructs controlled prompt
4. Gemini API generates conceptual hint
5. Hint returned to frontend
6. Hint displayed in UI

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vanilla SCSS (mobile-first)
* Monaco Editor

## Backend

* Node.js
* Express.js

## Databases

* PostgreSQL (Sandbox execution)
* MongoDB Atlas (Assignments storage)

## LLM Integration

* Google Gemini API
* Prompt engineering ensures hints only (no full solutions)

---

# 🎨 Styling Approach (SCSS)

The project follows a **mobile-first SCSS architecture**.

### Implemented SCSS Features:

* Variables
* Mixins
* Nesting
* Partials
* BEM naming convention
* Responsive breakpoints

### Breakpoints:

* 320px (Mobile)
* 641px (Tablet)
* 1024px (Laptop)
* 1281px (Desktop)

### SCSS Folder Structure:

```
styles/
 ├── abstracts/
 ├── base/
 ├── layout/
 ├── components/
 └── main.scss
```

---

# 🔐 Security Strategy

To maintain sandbox safety:

* Only `SELECT` queries are allowed
* Dangerous queries (`CREATE`, `DROP`, `DELETE`, `UPDATE`, `ALTER`, etc.) are blocked
* Query validation occurs before PostgreSQL execution
* No schema mutation allowed
* Query timeout and length restrictions applied

Since only read operations are permitted, a single PostgreSQL sandbox database is sufficient for isolation.

---

# 🗄️ MongoDB Schema

## 📘 Assignments Collection

```json
{
  "_id": "ObjectId",
  "title": "String",
  "difficulty": "String",
  "description": "String",
  "schemaInfo": "String",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

Assignments are pre-inserted by administrators.

---

# 📦 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <your-repo-link>
cd CipherSQLStudio
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file using `.env.example`:

```
PORT=
MONGO_URI=
PG_URI=
GEMINI_API_KEY=
QUERY_TIMEOUT_MS=
MAX_QUERY_LENGTH=
```

Start backend:

```bash
npm run server
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

# 🌱 Environment Variables

Use `.env.example` for reference.

---

# 🧠 LLM Prompt Strategy

The LLM is instructed to:

* Provide conceptual guidance
* Avoid giving full SQL solutions
* Encourage thinking about `WHERE`, `GROUP BY`, `ORDER BY`, etc.
* Focus on hinting logic instead of answering directly

This ensures learning-oriented assistance.

---

# 📁 Folder Structure

```
CipherSQLStudio/
 ├── backend/
 │    ├── routes/
 │    ├── controllers/
 │    ├── models/
 │    ├── middleware/
 │    └── .env.example
 │
 ├── frontend/
 │    ├── components/
 │    ├── pages/
 │    ├── styles/
 │    ├── services/
 │    └── .env.example
 │
 ├── .gitignore
 └── README.md
```

---

# 🚀 Core Features Implemented

* ✅ Assignment Listing Page
* ✅ Assignment Attempt Interface
* ✅ Monaco SQL Editor
* ✅ Real-time Query Execution
* ✅ Secure Query Validation
* ✅ LLM Hint Integration
* ✅ Mobile-First SCSS
* ✅ Loader States
* ✅ Error Handling

---

# 📊 Future Improvements

* User authentication
* Save query attempts
* Automatic result comparison
* Per-user schema isolation
* Leaderboard system

---

# 📜 Conclusion

CipherSQLStudio provides a secure and interactive SQL practice environment with intelligent guidance.

The system emphasizes:

* Clean architecture
* Secure query execution
* Mobile-first responsive design
* Effective prompt engineering
* Clear separation of concerns

--