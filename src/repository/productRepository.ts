import {Product } from '../entity/Product';

const productRepository = {
  createOneProduct: async (product: Product) => {
    try {
        const productToSave = Product.create(product);
        const response = await productToSave.save();
        return response;
    } catch (error) { 
        console.log({error})
       throw error;
    }
  },
};

export default productRepository;