import {test, expect} from "../src/fixtures/fixtures";


test('Add product to cart', async ({ authenticatedinventoryPage, cartpage }) => {
    await authenticatedinventoryPage.addProductToCart('sauce-labs-backpack');
    await authenticatedinventoryPage.openCart();
    await cartpage.expectProductPresent('Sauce Labs Backpack');
    await cartpage.expectCheckoutEnabled();

});