# Book CRUD Project

This project is a full-stack CRUD (Create, Read, Update, Delete) application for managing books, built with Next.js and Docker Compose. It allows you to manage a collection of books through a backend API and a frontend interface, all containerized using Docker.

## Features

- **Create** a new book.
- **Read** book details.
- **Update** book information.
- **Delete** a book.
- Full-stack application with both frontend and backend within the same Next.js project.
- Database and server containerized using Docker Compose.

## Technologies Used

- **Frontend & Backend**: Next.js (React.js for the frontend and API routes for the backend)
- **Database**: PostgreSQL
- **Docker**: Docker Compose for containerization

## Requirements

- Docker
- Docker Compose

## Getting Started

### 1. Clone the repository

```bash
git clone [Your GitHub Repository URL]
cd crud 
```
### 2. Set up the project with Docker Compose
Ensure that Docker and Docker Compose are installed. Then, run the following command to build and start the containers:

```bash
docker-compose up --build
```

### 3. Access the application
Once the containers are up and running, you can access the frontend application by navigating to:

Frontend: http://localhost:3000

### 4. Stopping the application
To stop the containers, run:

```bash
docker-compose down
```
