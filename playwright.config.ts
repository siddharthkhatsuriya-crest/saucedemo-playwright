import { defineConfig } from '@playwright/test';

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
    }
  ],
});