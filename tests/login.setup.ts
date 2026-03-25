import { test, expect } from '../src/fixtures/fixtures'
import { LoginPage } from '../src/page/loginpage';
import { standardUser } from '../src/auth/user';
import path from 'node:path';
import fs from 'node:fs/promises';

const statefile = path.resolve('.auth/state.json');

test('Login Page', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login(standardUser.username, standardUser.password);
    await expect(page).toHaveTitle('Swag Labs'); 
    await expect(page).toHaveURL(/\/inventory\.html$/); // Checking login was successful

    await fs.mkdir(path.dirname(statefile), { recursive: true });
    await page.context().storageState({ path: statefile }); // Saves the browser context to state file 

});