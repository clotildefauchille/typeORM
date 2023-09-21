import express from 'express';
import clientApiRouter from './clientApiRouter';
import productApiRouter from './productApiRouter';
const apiRouter = express.Router();

apiRouter.use(express.json());
apiRouter.use("/client", clientApiRouter);
apiRouter.use("/product", productApiRouter);
export default apiRouter;