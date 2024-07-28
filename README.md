
# Simple Form and File Management with Express.js

This repository provides a basic web application built with Express.js that allows users to submit a form and manage files on the server. The application includes a simple form where users can input their name and an issue. Upon submission, the input is saved as a text file on the server. Additionally, the application displays the list of saved files.

## Features

- **Form Submission**: Users can submit a form with their name and issue. The input is saved as a text file on the server.
- **File Management**: The server reads and displays a list of saved files.
- **Error Handling**: Proper error handling for file read and write operations.
- **EJS Templating**: Dynamic rendering of the file list using EJS.

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
