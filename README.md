# juice-shop-ui-tests

This project contains automated UI tests using TypeScript and Playwright. The tests follow best practices in code style and design patterns to ensure maintainability and readability.

## Key Features

- **Parallel Test Runs:** Execute tests in parallel to save time and resources.
- **Page Object Pattern:** Encapsulate page interactions within classes to promote reuse and reduce code duplication.
- **Page Elements Pattern:** Manage UI elements efficiently to simplify test scripts.

## Requirements

- **Node.js** version 20 or higher.

## Installation

To install the project dependencies, run the following command:

`$ npm install`
`$ npx playwright install`

### Code Style
 To check the code style, run:
 `$ npm run lint`

### Debug
 To debug specific tests, run:
 `$ npm run debug`

### Running All Tests

To run all tests using Docker, follow these steps:

1. Build the Docker image:
   `$ docker build -t juice-shop-ui-tests .`
2. Run the Docker container for macOS and Windows:
   ``` 
    docker run \
   -e "BASE_URL=http://host.docker.internal:3000" \
   -e "USER_EMAIL=your_email@example.com" \
   -e "USER_PASSWORD=your_password" \
   juice-shop-ui-tests
   ```
   For Linux:
   ``` 
   docker run \
   -e "BASE_URL=http://<HOST_IP>:3000" \
   -e "USER_EMAIL=your_email@example.com" \
   -e "USER_PASSWORD=your_password" \
   juice-shop-ui-tests
    ```
Make sure to replace BASE_URL with the address of your local project, and provide the appropriate user email and password.