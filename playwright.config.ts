import { defineConfig } from '@playwright/test';

const authFile = '.auth/state.json';

export default defineConfig({
  testDir: './tests',
  timeout: 15 * 1000,
  fullyParallel: true,
  retries: 2,
  workers: 2,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    testIdAttribute: 'data-test',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'chromium',
      dependencies: ['setup'],
      use: { browserName: 'chromium', storageState: authFile },

    }
  ],
});