import { expect, Page } from '@playwright/test';
import { BasePage } from './basepage';

class CartPage extends BasePage {
    protected readonly path: string = '/cart.html'
    constructor(page: Page) {
        super(page);
    }
    private get checkoutButton() {
        return this.getByTestId('checkout');
    }

    private cartItemName(productName: string) {
        return this.getByTestId('inventory-item-name').filter({
            hasText: productName,
        });
    }

    async expectProductPresent(productName: string): Promise<void> {
        await expect(this.cartItemName(productName)).toHaveCount(1);
    }

    async expectCheckoutEnabled(): Promise<void> {
        await expect(this.checkoutButton).toBeEnabled();
    }

    async expectLoaded(): Promise<void> {
        await expect(this.title).toHaveText("Your Cart");
    }
}

export { CartPage };