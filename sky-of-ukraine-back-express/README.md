# Sky of Ukraine Backend
This backend server is built with Express.js, MySQL, and TypeORM to support the project and report management website. The server includes migrations and seeds for easy database setup.

## Features

- **Express.js**: The server is built using Express.js, providing a robust and scalable backend architecture.

- **MySQL Database**: Data is stored in a MySQL database, and TypeORM is used for efficient database interactions.

- **Migrations**: Database migrations are implemented to manage schema changes over time.

- **Seed Data**: Seed data is provided to populate the database with initial values.

## Installation

Provide step-by-step instructions on how to install your project.

Before you begin, make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MySQL](https://www.mysql.com/)


1. Install dependencies:

```bash
npm install
```

2. Database Setup (only first time):

- In **sky-of-ukraine-back/config/config.json**, insert your database password and database name according to your preferences.

- In **sky-of-ukraine-back/app/config/db.config.js**, duplicate the database configuration data.

3. Run the following commands to create the database, run migrations, and seed data (only first time):

```bash
# Create the database
npx sequelize-cli db:create

# Run migrations
npx sequelize-cli db:migrate

# Seed the database
npx sequelize-cli db:seed:all
```

4.Run the Project

```bash
npm run start:backend
```