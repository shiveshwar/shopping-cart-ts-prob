export abstract class PricingRule {
    abstract calculateTotal(quantity: number, unitPrice: number): number;
  }
