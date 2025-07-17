import { PricingRule } from "../PricingRule";

export class BOGORule extends PricingRule {
  calculateTotal(quantity: number, unitPrice: number): number {
    const chargeable = Math.floor(quantity / 2) + (quantity % 2);
    return chargeable * unitPrice;
  }
}
