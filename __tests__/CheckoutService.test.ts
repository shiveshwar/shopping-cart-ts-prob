import { CheckoutService } from "../src/services/CheckoutService";

describe("CheckoutService", () => {
  const checkoutService = new CheckoutService();

  it("calculates total with flat pricing (no offers)", () => {
    const total = checkoutService.checkout(["Apple", "Apple", "Banana"]);
    expect(total).toBe("Total: £0.90");
  });

  it("applies BOGO offer for Melons", () => {
    const total1 = checkoutService.checkout(["Melon", "Melon"]);
    const total2 = checkoutService.checkout(["Melon", "Melon", "Melon"]);
    expect(total1).toBe("Total: £0.50");
    expect(total2).toBe("Total: £1.00");
  });

  it("applies 3-for-2 offer for Limes", () => {
    const total1 = checkoutService.checkout(["Lime", "Lime", "Lime"]);
    const total2 = checkoutService.checkout(["Lime", "Lime", "Lime", "Lime"]);
    expect(total1).toBe("Total: £0.30");
    expect(total2).toBe("Total: £0.45");
  });

  it("handles mixed basket with multiple rules", () => {
    const basket = ["Apple", "Apple", "Banana", "Melon", "Melon", "Melon", "Lime", "Lime", "Lime"];
    const total = checkoutService.checkout(basket);
    expect(total).toBe("Total: £2.20");
  });

  it("handles empty basket", () => {
    expect(checkoutService.checkout([])).toBe("Total: £0.00");
  });

  it("ignores unknown items gracefully", () => {
    const total = checkoutService.checkout(["Apple", "InvalidItem", "Banana"]);
    expect(total).toBe("Total: £0.55");
  });
});
