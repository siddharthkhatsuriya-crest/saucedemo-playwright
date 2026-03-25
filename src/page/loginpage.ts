import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './basepage';

class LoginPage extends BasePage {
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    protected readonly path: string = '/';

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.getByTestId('username');
        this.passwordInput = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-button');
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click(); 
    }

    async expectLoaded(): Promise<void> {
        await expect(this.page).toHaveTitle('Swag Labs');
    }
}

export { LoginPage };