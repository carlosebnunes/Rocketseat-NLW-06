import { response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

export class ListUsersService{
  async execute(){
    const usersRepositories = getCustomRepository(UsersRepositories);
    const users = usersRepositories.find();

    return classToPlain(users);
  }
}