import { Cart } from "../type/generalType";
import { Product } from "../entity/Product";

const orderService = {
  getCartPrice: (cart: Cart[], products: Product[]): number => {
    const cost: number = cart.reduce((totalCost, cartItem) => {
      const sameProduct = products.find(
        (product) => Number(product.id) === Number(cartItem.product)
      );
      if (sameProduct) {
        totalCost += cartItem.quantity * Number(sameProduct.price);
      }
      return totalCost;
    }, 0);
    return cost;
  },
};

export default orderService;
