import { PricingRule } from "../PricingRule";

export class ThreeForTwoRule extends PricingRule {
  calculateTotal(quantity: number, unitPrice: number): number {
    const chargeable = quantity - Math.floor(quantity / 3);
    return chargeable * unitPrice;
  }
}
