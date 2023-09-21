import { Request, Response } from "express";
import { Product } from "../entity/Product";
import productRepository from "../repository/productRepository";
import handleErrorResponse from "../utility/errorApiHandler";

const productController = {
  createOneProduct: async (req: Request, res: Response) => {
    try {
      const product: Product = req.body;
      const result = await productRepository.createOneProduct(product);
      res.status(201).json(result);
    } catch (error) {
      const type = "Ce Produit";
      handleErrorResponse(res, error, type);
    }
  },
};

export default productController;
