import { prisma } from "../../database/client";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepositories";

class PrismaUsersRepository implements IUsersRepository {
  async exists(email: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return !!user;
  }

  async create({ name, email, password }: User): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }
}

export { PrismaUsersRepository };
