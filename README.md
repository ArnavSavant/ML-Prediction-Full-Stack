# Fullstack Project

This repository contains a fullstack application with a React frontend and a Node.js backend using Sequelize.

## Prerequisites

1. Node.js and npm installed.
2. MySQL (or relevant SQL database) instance running.
3. Git for cloning the repository.

## Getting Started

### 1. Clone the Repository:

```bash
git clone [your-repo-url]
```

### 2. Install Dependencies:

Navigate to both the frontend and backend directories to install their respective dependencies:

```bash
cd frontend
npm install
cd ../backend
npm install
```

Or using the root-level script:

```bash
npm run install:all
```

### 3. Set up the Database:

Ensure you have a running MySQL instance. Create a new database for this project.

### 4. Configure Sequelize:

Copy the `config.json.example` (provided below) to `config.json` and fill with your specific database details:

```bash
cd backend
cp config/config.json.example config/config.json
```

Edit `config/config.json` with the appropriate database details.

### 5. Run Sequelize Migrations and Seeds (if any):

Once the database and config are set up, run any migrations and seed data:

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 6. Configure Environment Variables:

Copy the provided `.env.example` file and fill it with the necessary values:

```bash
cd backend
cp .env.example .env
```

### Important: After copying the content and setting up config.json and .env, it's recommended to delete the example files
```bash
rm config/config.json.example
rm .env.example
```

### 7. Start the Services:

To start both the frontend and backend simultaneously:

```bash
npm start
```

For individual services:

```bash
# For frontend:
cd frontend
npm start

# For backend:
cd backend
npm run dev
```

## License

This project is licensed under the ISC License.
