import { expect, Locator, Page } from '@playwright/test';

export abstract class BasePage {
  protected abstract readonly path: string;

  protected constructor(protected readonly page: Page) {
    this.page = page;
  }

  abstract expectLoaded(): Promise<void>

  protected get title() {
        return this.getByTestId('title');
    }

  protected getByTestId(testId: string): Locator {
    return this.page.getByTestId(testId);
  }

  async goto(path = this.path): Promise<void> {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }

  async expectUrl(url: RegExp | string): Promise<void> {
    await expect(this.page).toHaveURL(url);
  }

}