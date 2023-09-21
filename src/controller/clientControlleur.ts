import handleErrorResponse from "../utility/errorApiHandler";
import { Client } from "../entity/Client";
import clientRepository from "../repository/clientRepository";
import { Request, Response } from "express";

const clientController = {
  createOneClient: async (req: Request, res: Response) => {
    try {
      const client: Client = req.body;
      const result = await clientRepository.createOneClient(client);
      res.status(201).json(result);
    } catch (error) {
      const type = "Cet utlisateur";
      handleErrorResponse(res, error, type);
    }
  },
};

export default clientController;
