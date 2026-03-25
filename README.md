# SauceDemo Playwright Tests

Small Playwright + TypeScript project for automating the SauceDemo login flow.

## Project overview

- Uses Playwright Test with TypeScript
- Contains a login setup test for the SauceDemo standard user
- Saves authenticated browser state to `.auth/state.json` after login so future authenticated tests can reuse it

## Prerequisites

- Node.js 18 or later
- npm

## Setup

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

## Commands

Run the test suite:

```bash
npm test
```

Run the TypeScript compiler check:

```bash
npm run type-check
```

Open the Playwright HTML report after a run:

```bash
npm run report
```

## Notes

- The login setup test writes auth state to `.auth/state.json`.
- `.auth/`, `playwright-report/`, and `test-results/` are generated locally and ignored by git.
