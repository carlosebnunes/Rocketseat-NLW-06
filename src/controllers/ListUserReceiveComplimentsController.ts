import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";
import { Request, Response } from "express";


export class ListUserReceiveComplimentsController{
  async handle(request: Request, response: Response){

    const { user_id } = request;

    const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

    const compliments = await listUserReceiveComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}