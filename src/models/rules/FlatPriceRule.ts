import { PricingRule } from "../PricingRule";

export class FlatPriceRule extends PricingRule {
  calculateTotal(quantity: number, unitPrice: number): number {
    return quantity * unitPrice;
  }
}
