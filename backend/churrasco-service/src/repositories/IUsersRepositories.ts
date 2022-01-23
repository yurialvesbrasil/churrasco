import { User } from "../entities/User";

interface IUsersRepository {
  create(user: User): Promise<User>;
  exists(email: string): Promise<User | null>;
}

export { IUsersRepository };