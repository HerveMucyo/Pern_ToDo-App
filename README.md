---

# PERN Todo List App

A simple todo list application built using the PERN (PostgreSQL, Express, React, Node.js) stack.

## Features

- Add new todos
- View all todos
- Edit existing todos
- Delete todos

## Technologies Used

- PostgreSQL: A powerful, open-source relational database system used for storing todo data.
- Express.js: A minimal and flexible Node.js web application framework used for building the backend API.
- React.js: A JavaScript library for building user interfaces used for creating the frontend interface.
- Node.js: A JavaScript runtime environment used for running the backend server.
- CORS: A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

## Getting Started

To get started with the todo list app, follow these steps:

1. **Clone the repository:**

```
git clone <repository_url>
```

2. **Install Dependencies:**

Navigate to the project directory and install the required dependencies for both the frontend and backend:

```
cd pern-todo-app
cd client
npm install
cd ..
cd server
npm install
```

3. **Set Up the Database:**

Create a PostgreSQL database named `pern_todo`. You can use the following command:

```
createdb pern_todo
```

Then, import the `todo.sql` file located in the `server/database` directory to set up the `todo` table.

4. **Configure Environment Variables:**

Create a `.env` file in the `server` directory and add the following environment variables:

```
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=pern_todo
```

5. **Start the Development Servers:**

Start the backend server and frontend development server separately:

For the backend:

```
cd server
npm start
```

For the frontend:

```
cd client
npm start
```

6. **Access the Application:**

Open your web browser and navigate to `http://localhost:3000` to access the todo list app.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
