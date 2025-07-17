import { ProductCatalog } from "../data/ProductCatalog";

export class CheckoutService {
  checkout(basket: string[]): string {
    const count: Record<string, number> = {};
    basket.forEach(item => {
      count[item] = (count[item] || 0) + 1;
    });

    let total = 0;
    for (const item in count) {
      const product = ProductCatalog[item];
      if (!product) continue;
      total += product.pricingRule.calculateTotal(count[item], product.basePrice);
    }

    return `Total: £${(total / 100).toFixed(2)}`;
  }
}
