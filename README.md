# Lightweight MERN Task Manager

A simple task management application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **User Authentication**: Register and Login with password hashing (bcrypt).
- **JWT Authentication**: Secure access to tasks.
- **Task Management**: Create, Read, Update, and Delete tasks.
- **User-specific Data**: Users only see their own tasks.

## Prerequisites

- Node.js installed
- MongoDB installed and running locally

## Setup Instructions

### 1. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

The backend is pre-configured with a `.env` file for local development:
- Port: 5050
- MongoDB URI: `mongodb://127.0.0.1:27017/taskmanager`
- JWT Secret: `supersecretkey`

Start the server:

```bash
npm run dev
```

The server will run on `http://localhost:5050`.

### 2. Frontend Setup

Open a new terminal, navigate to the frontend directory, and install dependencies:

```bash
cd frontend
npm install
```

Start the React application:

```bash
npm start
```

The application will run on `http://localhost:3000`.

## API Endpoints

- **Auth**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login and receive a token

- **Tasks**
  - `GET /api/tasks` - Get all tasks
  - `POST /api/tasks` - Create a task
  - `PUT /api/tasks/:id` - Update a task
  - `DELETE /api/tasks/:id` - Delete a task
