# node-startpage

A simple Node.js-based startpage that provides a customizable start page where users can quickly access their favorite websites and applications.

## Features

- Easy-to-customize start page layout
- Simple to configure with a `sites.json` file for managing links
- Lightweight Node.js application with Docker support for deployment

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/13/node-startpage.git
   cd node-startpage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
2. Run the application:
   ```bash
    npm start
   ```

3. Docker Deployment

To deploy using Docker, use the provided Dockerfile and docker-compose.yml:
  ```bash
  docker-compose up --build
  ```

4. Configuration
```bash
    Modify the sites.json file to add/remove your favorite links.
```
