
# Express.js Practice: GET and POST Routes

This repository provides examples and practice exercises for handling GET and POST routes in an Express.js application. Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Features

- **GET Routes**: Learn how to define and handle GET requests to retrieve data from the server.
- **POST Routes**: Understand how to define and handle POST requests to submit data to the server.
- **Request Handling**: Examples of parsing request parameters, query strings, and request bodies.
- **Response Handling**: Learn how to send different types of responses, including JSON, HTML, and status codes.
- **Modular Structure**: Organize routes into separate modules for better maintainability.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/likhithkp/expressjs-practice-get-post-route.git
   ```
2. Navigate to the project directory:
   ```bash
   cd expressjs-practice-get-post-route
   ```
3. Install the dependencies:
   ```bash
   yarn
   ```

### Usage

1. Start the server:
   ```bash
   yarn local
   ```
2. Open your browser or API client and navigate to `http://localhost:3001`.

### Example Routes

- `GET /` - Home route
- `GET /api/items` - Retrieve a list of items
- `POST /api/items` - Add a new item
- `GET /api/items/:id` - Retrieve a specific item by ID
- `POST /api/contact` - Submit contact form data

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.
