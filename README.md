# Cypress E2E Testing

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npx cypress open` to open the Cypress Test Runner.

## Running Tests

- **All Tests**: `npx cypress run`
- **Specific Test**: `npx cypress run --spec "cypress/integration/login_spec.js"`
- **Headless Mode**: `npx cypress run --headless`

## Reporting

- Reports are generated in the `cypress/reports/mochawesome-report/` directory.

## CI/CD

- The project is configured to run Cypress tests in GitHub Actions on every push to the main branch.
