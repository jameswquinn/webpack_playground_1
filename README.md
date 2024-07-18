# Preact Multi-Page App with Lazy Loading and Wouter Routing

This project demonstrates a multi-page web application built using Preact with lazy loading for improved performance and Wouter for routing.

## Features

- **Preact**: A fast 3kB alternative to React with the same modern API.
- **Wouter**: A small, fast router for Preact and React.
- **Lazy Loading**: Pages are dynamically loaded to improve initial load time.
- **Webpack**: Bundling assets and optimizing the build for production.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed on your machine.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/preact-multi-page-lazy-loading.git
   cd preact-multi-page-lazy-loading
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
   or
      ```bash
   yarn install
   ```

## Usage
### Development Mode

   To start the development server with hot-reloading:



   ```bash
   npm start
   ```
This will start the development server at http://localhost:9000. Open this URL in your browser to view the app.
### Production Build

To build the app for production:

   ```bash
   npm run build
   ```
This will create a production-ready build in the dist directory.
### File Structure

   ```bash
/your-project
  /dist        # Compiled files (auto-generated on build)
  /src         # Source files
    /components  # React components
    /pages       # Page components
    index.js     # Entry point
    index.html   # HTML template
  webpack.common.js   # Common Webpack configuration
  webpack.dev.js      # Development Webpack configuration
  webpack.prod.js     # Production Webpack configuration
  webpack.config.js   # Webpack configuration selector
  package.json        # Project dependencies and scripts
  .babelrc            # Babel configuration
  .eslintrc.js        # ESLint configuration
  postcss.config.js   # PostCSS configuration
  README.md           # Project information (you are here)
  ```
### Addition Notes

- This project uses Webpack for bundling assets and configuring development/production builds.
- ESLint is configured to ensure code quality and consistency.
- PostCSS with Autoprefixer is used for styling.
- Ensure Node.js and npm/yarn are up to date to avoid compatibility issues.
### License
This project is licensed under the MIT License - see the LICENSE file for details.
### Acknowledgments
- Preact
- Wouter
- Webpack
### Contributing
Contributions are welcome! Please feel free to submit issues and pull requests.


