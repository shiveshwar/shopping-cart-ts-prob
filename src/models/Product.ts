import { PricingRule } from "../models/PricingRule";

export class Product {
  constructor(
    public name: string,
    public basePrice: number,
    public pricingRule: PricingRule
  ) {}
}
