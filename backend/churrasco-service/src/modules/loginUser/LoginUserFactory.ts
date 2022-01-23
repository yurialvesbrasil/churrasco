import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";
import { LoginUserController } from "./LoginUserController";
import { LoginUserService } from "./LoginUserService";

export const createUserFactory = () => {
    const usersRepository = new PrismaUsersRepository();
    const loginUser = new LoginUserService(usersRepository);
    const loginUserController = new LoginUserController(loginUser);
    return loginUserController;
};