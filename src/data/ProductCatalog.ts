import { Product } from "../models/Product";
import { FlatPriceRule } from "../models/rules/FlatPriceRule";
import { BOGORule } from "../models/rules/BOGORule";
import { ThreeForTwoRule } from "../models/rules/ThreeForTwoRule";

export const ProductCatalog: Record<string, Product> = {
  Apple: new Product("Apple", 35, new FlatPriceRule()),
  Banana: new Product("Banana", 20, new FlatPriceRule()),
  Melon: new Product("Melon", 50, new BOGORule()),
  Lime: new Product("Lime", 15, new ThreeForTwoRule())
};
