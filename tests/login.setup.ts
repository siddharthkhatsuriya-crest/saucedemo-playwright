import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/page/loginpage';
import { standardUser } from '../src/auth/user';

test('Login Page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(standardUser.username, standardUser.password);
    await expect(page).toHaveTitle('Swag Labs'); 
    await expect(page).toHaveURL(/\/inventory\.html$/); // Checking login was successful
});