# Stockify – Inventory Management Backend

Stockify is an inventory management backend project built with **Node.js, Express.js, and MongoDB**. It provides REST APIs for managing products, tracking stock levels, and maintaining stock movement history.

## Features

- Product CRUD operations
- Stock IN and Stock OUT management
- Stock movement history
- Low-stock product tracking
- Search, filtering, sorting, and pagination
- Product image uploads using Multer
- Request validation and error handling

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- dotenv

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd Stokify_Backend_Project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

Replace the MongoDB URI with your own connection string.

### 4. Start the server

```bash
npm start
```

For development, if your project has a development script:

```bash
npm run dev
```

## API Overview

| Method | Purpose |
|---|---|
| POST | Create a product |
| GET | Retrieve products |
| GET | Retrieve a single product |
| PATCH | Update product or stock |
| DELETE | Delete a product |
| GET | Retrieve low-stock products and movement history |

Refer to the project routes for the exact endpoint paths.

## Project Status

🚧 **In Development**

This project is being developed as a practical backend learning project, with plans to expand authentication, authorization, security, and dashboard functionality.

## Author

**M. Waleed Rehman**

- GitHub: [Your GitHub Profile](https://github.com/)
- Portfolio: [VoidCoderX Portfolio](https://waleedrehmandeveloper.github.io/voidcoderx.github.io/)

---

Built to practice REST API development, database relationships, and inventory management with Node.js and MongoDB.
