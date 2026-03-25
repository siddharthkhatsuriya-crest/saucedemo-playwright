import { test as base } from '@playwright/test';

import { LoginPage } from '../page/loginpage';
import { CartPage } from '../page/cartpage';
import { InventoryPage } from '../page/inventorypage';

type AppFixtures = {
  loginPage: LoginPage;
  cartpage: CartPage;
  authenticatedinventoryPage: InventoryPage;
};

export const test = base.extend<AppFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  authenticatedinventoryPage: async ({ page }, use) => {
    var inventorypage = new InventoryPage(page);
    inventorypage.goto();
    await use(inventorypage);
  },
  cartpage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { expect } from '@playwright/test';
