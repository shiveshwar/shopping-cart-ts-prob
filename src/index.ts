import { CheckoutService } from "./services/CheckoutService";

const basket = ["Apple", "Apple", "Banana", "Melon", "Melon", "Melon", "Lime", "Lime", "Lime"];
const checkoutService = new CheckoutService();
console.log(checkoutService.checkout(basket));
