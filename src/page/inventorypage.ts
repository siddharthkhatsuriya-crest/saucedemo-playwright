import { expect, Page } from '@playwright/test';
import { BasePage } from './basepage';

export class InventoryPage extends BasePage {
    protected readonly path: string = '/inventory.html';
    constructor(page: Page) {
        super(page);
    }

    private get cartLink() {
        return this.getByTestId('shopping-cart-link');
    }

    async openCart(): Promise<void> {
        await this.cartLink.click();
        await this.expectUrl(/\/cart\.html$/);
    }

    //todo: add a helper script to convert Product name into selector

    private addToCartButton(productSelectorString: string) {
        return this.getByTestId(
            `add-to-cart-${productSelectorString}`,
        );
    }

    private removeFromCartButton(productSelectorString: string) {
        return this.getByTestId(`remove-${productSelectorString}`);
    }

    async addProductToCart(productName: string): Promise<void> {
        await this.addToCartButton(productName).click();
        await expect(this.removeFromCartButton(productName)).toBeVisible();
    }

    async expectLoaded(): Promise<void> {
        await expect(this.title).toHaveText('Products');
    }

}

