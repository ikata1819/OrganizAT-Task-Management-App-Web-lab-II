# OrganizAT

A full-stack task management application built with Node.js, Express, React, and MySQL.

## Project Description

OrganizAT is a comprehensive task management system developed as part of CSE 362 Web Programming II LAB. It features a RESTful API backend with MySQL database integration and a React frontend for seamless task organization and management.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MySQL (v8.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd organizat
   ```

2. **Install Node.js and npm**
   - Download and install from [nodejs.org](https://nodejs.org/)
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

3. **Install MySQL**
   - Download and install MySQL from [mysql.com](https://www.mysql.com/)
   - Configure MySQL with a root password
   - Verify MySQL is running

4. **Set up the Express server**
   ```bash
   npm init -y
   npm install express mysql2
   ```

5. **Configure MySQL database**
   - Create a database for the project:
     ```sql
     CREATE DATABASE organizat_db;
     USE organizat_db;
     ```

6. **Install additional dependencies** (as needed throughout the labs)
   ```bash
   npm install sequelize
   npm install jsonwebtoken bcrypt
   npm install cors
   ```

## Running the Application

1. **Start MySQL server**
   - Ensure MySQL service is running

2. **Start the Express backend**
   ```bash
   node server.js
   ```
   - Server will run on `http://localhost:3000`

3. **Start the React frontend** (when implemented)
   ```bash
   cd client
   npm start
   ```
   - Frontend will run on `http://localhost:3000` (or alternative port)

## API Endpoints

### Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message / API info |
| GET | `/health` | Health check endpoint |
| GET | `/tasks` | Retrieve all tasks |
| GET | `/task/:id` | Retrieve a specific task by ID |
| POST | `/tasks` | Create a new task |
| PUT | `/task/:id` | Update a specific task |
| DELETE | `/task/:id` | Delete a specific task |

## Lab Progress Checklist

- [x] **LAB 1**: Initialize Task Management Project and Set Up Node.js Express Server
  - [x] Install Node.js and npm
  - [x] Set up an Express server
  - [x] Create basic routes
  - [x] Implement a basic GET tasks route
  - [x] Test the route using Postman

- [x] **LAB 2**: Develop RESTful API Foundations for Task Creation and Retrieval
  - [x] Create RESTful GET route for tasks
  - [x] Create RESTful POST route for tasks
  - [x] Implement route to get task by ID
  - [x] Implement basic JSON responses
  - [x] Add error handling for invalid requests

- [ ] **LAB 3**: Integrate MySQL Database for Basic Task Storage and Operations
  - [ ] Install MySQL
  - [ ] Configure mysql2 package
  - [ ] Set up connection to MySQL
  - [ ] Write raw SQL queries for task CRUD operations
  - [ ] Build a GET route to retrieve tasks from the database

- [ ] **LAB 4**: Basic API and Database Integration Test
  - [ ] Build a POST endpoint for tasks
  - [ ] Connect API to MySQL database
  - [ ] Test task creation and retrieval using Postman

- [ ] **LAB 5**: Implement Sequelize ORM for Task Model Management
  - [ ] Install and set up Sequelize
  - [ ] Define a Task model
  - [ ] Create migrations for task table
  - [ ] Implement CRUD operations using Sequelize ORM
  - [ ] Test ORM integration

- [ ] **LAB 6**: Advance API with Full CRUD Operations and Input Validation
  - [ ] Add DELETE route for removing tasks
  - [ ] Implement input validation with express-validator
  - [ ] Test full CRUD functionality

- [ ] **LAB 7**: Set Up React Frontend for Task Display
  - [ ] Initialize a React app using Vite
  - [ ] Create Task List component
  - [ ] Create TaskCard component
  - [ ] Use Axios to fetch tasks from API
  - [ ] Display tasks in the frontend

- [ ] **LAB 8**: Enable Frontend CRUD Operations with Form Handling
  - [ ] Implement form for creating tasks
  - [ ] Implement form for editing tasks
  - [ ] Handle API calls for CRUD operations
  - [ ] Add client-side validation

- [ ] **LAB 9**: Full-Stack Feature Integration Test
  - [ ] Add API endpoints for categories
  - [ ] Update frontend UI to display categories
  - [ ] Connect frontend and backend for category functionality
  - [ ] Test category feature with Postman and UI

- [ ] **LAB 10**: Implement User Authentication Using JWT
  - [ ] Implement register route
  - [ ] Implement login route
  - [ ] Set up JWT authentication
  - [ ] Protect task routes with JWT middleware
  - [ ] Create a context or hook for user in frontend

- [ ] **LAB 11**: Manage Application State in React Using Context API
  - [ ] Manage task state in frontend
  - [ ] Manage user state in frontend
  - [ ] Ensure state updates reflect API changes
  - [ ] Add undo priority feature to backend model

- [ ] **LAB 12**: Add Advanced Task Features Like Priority and Due Dates
  - [ ] Update API to handle priority and due dates
  - [ ] Update frontend UI to display priority and due dates
  - [ ] Implement sorting and filtering by priority and due date

- [ ] **LAB 13**: Develop Unit Tests for Backend and Frontend Components
  - [ ] Write test API route for unit testing
  - [ ] Set up Jest for backend unit tests (Task Manager, Route Library)
  - [ ] Verify test coverage for critical functionality
  - [ ] Add a new feature such as task status field

- [ ] **LAB 14**: Feature Extension and Testing Validation
  - [ ] Update backend model and API for the feature
  - [ ] Update frontend UI to manage the feature
  - [ ] Write comprehensive tests

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MySQL, Sequelize ORM
- **Frontend**: React, Vite
- **Authentication**: JWT (JSON Web Tokens)
- **HTTP Client**: Axios
- **Testing**: Jest
- **Validation**: Express-validator

## Project Structure

```
organizat/
├── server.js           # Express server entry point
├── models/             # Sequelize models
├── routes/             # API route handlers
├── middleware/         # Custom middleware (auth, validation)
├── config/             # Configuration files
├── client/             # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   └── App.jsx
│   └── package.json
├── tests/              # Test files
├── package.json
└── README.md
```

## Contributing

This is an academic project for CSE 362 Web Programming II LAB.

## License

This project is created for educational purposes.

## Author

```
Anika Tasnim 
JU CSE 21-22
```

---

**Last Updated**: October 30, 2025
