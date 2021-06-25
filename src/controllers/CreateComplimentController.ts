import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

export class CreateComplimentController {

  async handle(request: Request, response: Response){
    try {
      const { tag_id, user_receiver, message } = request.body;
      const { user_id } = request;

      const createComplimentService = new CreateComplimentService();

      const compliment = await createComplimentService.execute({tag_id, user_receiver, user_sender: user_id, message});

      return response.json(compliment);

    } catch (err) {
      return response.status(400).json({error:err.message})
    }

  }
}