import express from 'express';
import productController from '../controller/productController';

const productRouter = express.Router();
productRouter.post('/', productController.createOneProduct)

export default productRouter;