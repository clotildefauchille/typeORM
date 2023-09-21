import express from 'express';
import clientController from "../controller/clientControlleur";

const clientApiRouter = express.Router();

clientApiRouter.post("/", clientController.createOneClient);


export default clientApiRouter;