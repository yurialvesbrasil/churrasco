import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { v4 as uuid } from "uuid";

class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    Object.assign(user, {
      id: uuid(),
    });

    this.users.push(user);
    return user;
  }

  async exists(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);
    return user != undefined ? user : null;
  }

  async findByIdUser(idUser: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === idUser);
    return user != undefined ? user : null;
  }

}

export { UsersRepositoryInMemory };
