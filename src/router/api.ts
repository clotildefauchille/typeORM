import express from 'express';
import clientApiRouter from './clientApiRouter';
import productApiRouter from './productApiRouter';
import orderApiRouter from './orderApiRouter';

const apiRouter = express.Router();

apiRouter.use(express.json());
apiRouter.use("/client", clientApiRouter);
apiRouter.use("/product", productApiRouter);
apiRouter.use("/order", orderApiRouter);
export default apiRouter;