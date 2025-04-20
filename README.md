# 📘 Library Management System
Advance Software Engineering System
A full-stack web application for managing library operations, developed as part of the MSc Software Engineering program at the University of West London.
# 🚀 Features

User Authentication: Secure login functionality with session management.

User Management: Create, read, update, and delete user profiles.

Book Management: Add, view, update, and delete book records.

User Types: Manage different user roles and permissions.

RESTful API: Backend API built with Express.js and PostgreSQL.

Frontend Interface: Responsive UI developed using React.js.

Dockerized Deployment: Containerized applications for consistent environments.

# 🛠️ Technologies Used
Backend
Node.js: JavaScript runtime environment.

Express.js: Web framework for Node.js.

PostgreSQL: Relational database management system.

TypeScript: Typed superset of JavaScript.

Docker: Containerization platform.

PM2: Production process manager for Node.js applications.

Frontend
React.js: JavaScript library for building user interfaces.

HTML5 & CSS3: Markup and styling.

Bootstrap: Frontend component library for responsive design.

# 📦 Installation & Setup
Prerequisites
Node.js and npm installed on your machine.

PostgreSQL database setup.

Docker installed (optional, for containerized deployment).

Backend Setup
Navigate to the server directory:

bash
Copy
Edit
cd server
Install dependencies:

bash
Copy
Edit
npm install
Configure environment variables:

Create a .env file in the server directory with the following content:

env
Copy
Edit
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=library_management
Run database migrations and seed data (if applicable).

Start the backend server:

bash
Copy
Edit
npm start
Frontend Setup
Navigate to the client directory:

bash
Copy
Edit
cd client
Install dependencies:

bash
Copy
Edit
npm install
Start the frontend development server:

bash
Copy
Edit
npm start
The application should now be running at http://localhost:3000.

# 📬 API Endpoints
Authentication
POST /Login: User login.

PUT /Logout: User logout (requires authorization).

Users
GET /Users: Retrieve all users.

GET /Users/:userId: Retrieve a specific user by ID.

POST /Users: Create a new user.

PUT /Users/:userId: Update an existing user.

DELETE /Users/:userId: Delete a user.

Books
GET /Books: Retrieve all books.

GET /Books/:bookId: Retrieve a specific book by ID.

POST /Books: Add a new book.

PUT /Books/:bookId: Update an existing book.

DELETE /Books/:bookId: Delete a book.

User Types
GET /UserTypes: Retrieve all user types.

# 📄 License
This project is licensed under the MIT License.

# 🙋‍♂️ Author
Anjan Ghising Tamang
📍 London, UK
📧 anjaantamang28@gmail.com
