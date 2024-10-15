
# NestJS CRUD Application with Bun

This project is a simple CRUD (Create, Read, Update, Delete) application built with [NestJS](https://nestjs.com/) and [Bun](https://bun.sh/). The application provides a RESTful API for managing products, including endpoints for adding, retrieving, updating, and deleting products.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create new products
- Retrieve a list of products
- Retrieve a single product by ID
- Update existing products
- Delete products

## Technologies

- **NestJS** - A progressive Node.js framework for building efficient and scalable server-side applications.
- **Bun** - A modern JavaScript runtime that allows for faster installations and builds.
- **TypeScript** - A typed superset of JavaScript that compiles to plain JavaScript.
- **Express** - A minimal and flexible Node.js web application framework for building APIs.
- **In-Memory Data Store** - The application uses a simple in-memory array to store product data.

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Bun](https://bun.sh/)

### Clone the Repository

```bash
git clone https://github.com/your-username/nestjs-crud-bun.git
cd nestjs-crud-bun
```

### Install Dependencies

Use Bun to install the necessary dependencies:

```bash
bun install
```

## Usage

### Running the Application

To start the application, use the following command:

```bash
bun run start
```

The application will be running on `http://localhost:3000`.

### Testing

To run the tests for this application, you can use the following command:

```bash
bun test
```

## API Endpoints

### Products

| Method | Endpoint         | Description                              |
|--------|------------------|------------------------------------------|
| GET    | `/product`       | Retrieve all products                    |
| GET    | `/product/:id`   | Retrieve a single product by ID          |
| POST   | `/product/add`   | Add a new product                        |
| PUT    | `/product/update/:id` | Update an existing product          |
| DELETE | `/product/delete/:id` | Delete a product by ID              |

### Example Requests

1. **Retrieve all products**
   ```bash
   curl -X GET http://localhost:3000/product
   ```

2. **Add a new product**
   ```bash
   curl -X POST http://localhost:3000/product/add \
   -H "Content-Type: application/json" \
   -d '{"name": "Product 4", "price": 400, "description": "Product 4 description"}'
   ```

3. **Update a product**
   ```bash
   curl -X PUT http://localhost:3000/product/update/0 \
   -H "Content-Type: application/json" \
   -d '{"name": "Updated Product", "price": 150, "description": "Updated description"}'
   ```

4. **Delete a product**
   ```bash
   curl -X DELETE http://localhost:3000/product/delete/0
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to discuss changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

### Penjelasan:

- **Judul dan Deskripsi**: Memberikan gambaran umum tentang proyek.
- **Tabel Konten**: Memudahkan navigasi dalam README.
- **Fitur dan Teknologi**: Menyediakan informasi tentang apa yang dilakukan proyek dan alat yang digunakan.
- **Instalasi dan Penggunaan**: Langkah-langkah jelas untuk menginstal dan menjalankan aplikasi.
- **API Endpoints**: Menguraikan endpoint yang tersedia dan memberikan contoh permintaan.
- **Kontribusi dan Lisensi**: Menyediakan informasi tentang cara berkontribusi dan lisensi proyek.
