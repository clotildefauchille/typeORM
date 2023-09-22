import { Order } from "../entity/Order";
import { Client } from "../entity/Client";
import { Product } from "../entity/Product";
import orderService from "../service/orderService";

const orderRepository = {
  createOneOrder: async (order: Order, clientId: number) => {
    try {
      const client = await Client.findOne({ where: { id: clientId } });
      if (!client) {
        throw new Error("Pas d'utilisateur trouvé");
      }
      const { date, type, cart, state } = order;
      const productsIds = cart.map((item) => Number(item.product));
      const productRepository = Product.getRepository();
      const products = await productRepository
        .createQueryBuilder("product")
        .where("product.id IN (:...ids)", { ids: productsIds })
        .getMany();

      if (products.length !== productsIds.length) {
        throw new Error("Le ou les produits ne sont pas disponibles");
      }

      const cartCopy = [...cart];
      const cartCost: number = orderService.getCartPrice(cartCopy, products);

      const orderToSave = Order.create({
        date,
        type,
        cart,
        state,
        client,
      });
      const orderSaved = await orderToSave.save();
      return { orderSaved, cartCost };
    } catch (error) {
      console.log("error");
      throw error;
    }
  },
};

export default orderRepository;
