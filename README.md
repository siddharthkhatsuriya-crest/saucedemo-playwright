# SauceDemo Playwright Tests

This project contains a Playwright + TypeScript UI test suite for the SauceDemo login flow.

## What this test covers

- Opens `https://www.saucedemo.com`
- Logs in with the standard SauceDemo user
- Verifies the page title is `Swag Labs`
- Verifies the user lands on `/inventory.html`

## Tech stack

- Node.js
- TypeScript
- Playwright Test

## Prerequisites

- Node.js 18 or later
- npm

## Project setup

1. Clone the repository:

   ```bash
   git clone https://github.com/siddharthkhatsuriya-crest/saucedemo-playwright.git
   cd saucedemo-playwright
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers:

   ```bash
   npm run install:browsers
   ```

## Run the tests

Run the full suite:

```bash
npm test
```

## View the HTML report

After a test run, open the Playwright report with:

```bash
npm run report
```

## Notes

- The base URL is configured in `playwright.config.ts`.
- `getByTestId()` is configured to use the SauceDemo `data-test` attribute.
- Login credentials live in `src/auth/user.ts`.
- Screenshots and videos are kept on failure to help with debugging.
