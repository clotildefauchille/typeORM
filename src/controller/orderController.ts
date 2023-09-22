import orderRepository from '../repository/orderRepository';
import handleErrorResponse from '../utility/errorApiHandler';
import { Request, Response } from 'express';
import { Order } from '../entity/Order';

const orderController = {
    createOneOrder : async (req: Request, res: Response) => {
        try {
            const clientId = req.params.id;
            const order : Order = req.body;
            const clientIdNum = Number(clientId);
            const result = await orderRepository.createOneOrder(
              order,
              clientIdNum
            );
            res.status(200).json(result);
        } catch (error) {
            const type = 'Cette commande';
            handleErrorResponse(res, error, type);
        }
    }
}
export default orderController;