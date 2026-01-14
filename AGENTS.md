## Overview

This is the Adyen Node.js API Library, providing Node.js developers with an easy way to interact with the Adyen API. The library is a wrapper around the Adyen API, generated from OpenAPI specifications.

## Code Generation

A significant portion of this library, particularly the API services and data models, is automatically generated.

- **Engine**: We use [OpenAPI Generator](https://openapi-generator.tech/) with custom [Mustache](https://mustache.github.io/) templates to convert Adyen's OpenAPI specifications into TypeScript code.
- **Templates**: The custom templates are located in the `/templates-v7/typescript` directory. These templates are tailored to fit our custom HTTP client and model structure.
- **Automation**:
    - **Centralized**: The primary generation process is managed in a separate repository, [`adyen-sdk-automation`](https://github.com/Adyen/adyen-sdk-automation). Changes to the OpenAPI specs trigger a GitHub workflow in that repository, which generates the code and opens Pull Requests in this library.
    - **Local**: For development and testing, you must use the [`adyen-sdk-automation`](https://github.com/Adyen/adyen-sdk-automation) repository.

### Local Code Generation

To test new features or changes to the templates, you must run the generation process from a local clone of the `adyen-sdk-automation` repository.

1.  **Clone the automation repository**:
    ```bash
    git clone https://github.com/Adyen/adyen-sdk-automation.git
    ```

2.  **Link this library**: The automation project needs to target your local clone of `adyen-node-api-library`. From inside the `adyen-sdk-automation` directory, run the following commands. This will replace the `node/repo` directory with a symlink to your local project.
    ```bash
    rm -rf node/repo
    ln -s /path/to/your/adyen-node-api-library node/repo
    ```

3.  **Run the generator**: You can now run the Gradle commands to generate code.
    - **To generate all services for the Node.js library**:
      ```bash
      ./gradlew :node:services
      ```
    - **To generate a single service (e.g., Checkout)**:
      ```bash
      ./gradlew :node:checkout
      ```
    - **To clean the repository before generating**:
      ```bash
      ./gradlew :node:cleanRepo :node:checkout
      ```

## Core Components

- **`src/client.ts`**: The central class for configuring the library (API key, environment, etc.) and accessing API services.
- **`src/service.ts`**: The base class for all API services, containing the generic HTTP client logic.
- **`src/services/`**: This package contains the generated service classes (e.g., `CheckoutAPI`, `Management`) that expose methods for specific API endpoints.
- **`src/typings/`**: This package contains the generated TypeScript types (models) used for API requests and responses.
  - `src/typings/index.ts`: Re-exports all models. This file must be manually updated to export models from any new service.

## Development Workflow

This is a standard Node.js/TypeScript project.

### Building

To compile the TypeScript source code into JavaScript, run:

```bash
npm run build
```

### Running Tests

To execute the unit tests using Jest:

```bash
npm test
```

### Code Style & Formatting

We use ESLint for linting.

- **Check for style violations**:
  ```bash
  npm run lint
  ```
- **Apply automatic fixes**:
  ```bash
  npm run lint:fix
  ```

The build will fail if there are any linting errors. Run `npm run lint:fix` and fix any remaining issues before committing.

## Release Process

The release process is automated via GitHub Actions. When a release is triggered:
1.  A script determines the next version number (major, minor, or patch).
2.  The `package.json` and other version files are updated.
3.  A pull request is created with the version bump.
4.  Once merged, a GitHub release is created, and the new version is published to npm.
