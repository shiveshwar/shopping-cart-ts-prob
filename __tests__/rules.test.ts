import { FlatPriceRule } from "../src/models/rules/FlatPriceRule";
import { BOGORule } from "../src/models/rules/BOGORule";
import { ThreeForTwoRule } from "../src/models/rules/ThreeForTwoRule";

describe("Pricing Rules", () => {
  it("FlatPriceRule calculates correctly", () => {
    const rule = new FlatPriceRule();
    expect(rule.calculateTotal(3, 35)).toBe(105);
  });

  it("BOGORule calculates correctly", () => {
    const rule = new BOGORule();
    expect(rule.calculateTotal(1, 50)).toBe(50);
    expect(rule.calculateTotal(2, 50)).toBe(50);
    expect(rule.calculateTotal(3, 50)).toBe(100);
  });

  it("ThreeForTwoRule calculates correctly", () => {
    const rule = new ThreeForTwoRule();
    expect(rule.calculateTotal(1, 15)).toBe(15);
    expect(rule.calculateTotal(3, 15)).toBe(30);
    expect(rule.calculateTotal(4, 15)).toBe(45);
    expect(rule.calculateTotal(6, 15)).toBe(60);
  });
});
