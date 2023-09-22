import { Response } from "express";

const handleErrorResponse = (res: Response, error: Error, type: string) => {
    console.log('=========>' , error.message)
  if (error.message.includes("duplicate key")) {
    return res
      .status(409)
      .json({ error: `${type} existe déjà en base de données.` });
  } else {
    return res.status(500).json({
      error: `Une erreur s'est produite lors de la création. ${error.message}`,
    });
  }
}

export default handleErrorResponse;