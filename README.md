# SauceDemo Playwright Tests

Small Playwright + TypeScript project for automating core SauceDemo user flows.

## Project overview

- Uses Playwright Test with TypeScript
- Uses page objects and shared fixtures
- Includes a login setup flow and an authenticated cart test
- Saves authenticated browser state to `.auth/state.json` so dependent tests can reuse it

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

The suite runs the `setup` project first to create auth state, then runs the authenticated `chromium` project.

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
- The cart test reuses that stored session through the Playwright project dependency setup.
- `.auth/`, `playwright-report/`, and `test-results/` are generated locally and ignored by git.
