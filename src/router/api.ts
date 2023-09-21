import express from 'express';
import clientApiRouter from './clientApiRouter';

const apiRouter = express.Router();

apiRouter.use(express.json());
apiRouter.use("/client", clientApiRouter);

export default apiRouter;