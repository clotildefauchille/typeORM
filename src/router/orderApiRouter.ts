import express from 'express';
import orderController from '../controller/orderController';

const orderApiRouter = express.Router();

orderApiRouter.post('/:id', orderController.createOneOrder)

export default orderApiRouter;