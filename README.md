<img src="https://images.credly.com/images/1c2c86e1-16ce-4e4d-a425-d1ac96bb026d/express.png" alt="technology" width="120" height="120" /> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png" alt="database" width="120" height="120" /> 


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
