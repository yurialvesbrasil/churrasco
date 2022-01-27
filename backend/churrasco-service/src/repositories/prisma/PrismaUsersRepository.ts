import { prisma } from "../../database/client";
import { User } from "../../entities/User";
import { ICreateUserRequest } from "../../modules/createUser/CreateUserService";
import { IUsersRepository } from "../IUsersRepository";

class PrismaUsersRepository implements IUsersRepository {
  async exists(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return !!user ? user : null;
  }

  async create({ name, email, password }: ICreateUserRequest): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }

  async findByIdUser(idUser: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: idUser,
      },
    });
    return !!user ? user : null;
  }

}

export { PrismaUsersRepository };
