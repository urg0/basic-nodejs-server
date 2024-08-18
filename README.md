# Basic Node.js Server

This is a basic Node.js server built with Express and Sequelize, designed to interact with a PostgreSQL database. The server is structured following the Model-View-Controller (MVC) pattern and is containerized using Docker.

## Features

- RESTful API for user management.
- Sequelize ORM for database operations.
- Docker support for containerization.
- Follows the MVC architecture for clean and maintainable code.

## Project Structure

```plaintext
basic-nodejs-server/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
├── .dockerignore
├── .env.example
├── .gitignore
├── Dockerfile
├── index.js
├── package.json
├── package-lock.json
└── README.md
```
