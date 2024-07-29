# Express.js File Management App

This repository provides a simple file management application built with Express.js. It demonstrates handling GET and POST requests, displaying and editing files, and implementing a basic form for submitting file data.

## Features

- **GET Routes**: 
  - `/` - Displays a list of files with options to read or edit.
  - `/file/:filename` - Shows the content of a specific file.
  - `/edit/:filename` - Provides a form to rename a file.

- **POST Routes**: 
  - `/submit` - Submits a new file with the provided name and content.
  - `/edit/:filename` - Submits changes to rename an existing file.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/likhithkp/express.js-file-management-system.git

   ```
2. Navigate to the project directory:
   ```bash
   cd express.js-file-management-system
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

- GET / - Home route displaying a list of files.
- GET /file/:filename - View the content of a specific file.
- GET /edit/:filename - Edit the name of a file.
- POST /submit - Submit a new file.
- POST /edit/:filename - Update the file name.

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.
