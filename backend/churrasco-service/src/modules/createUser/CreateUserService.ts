import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepositories";
import bcrypt from 'bcrypt';

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) { }

  async execute({ name, email, password }: IUserRequest) {
    const userAlreadyExists = await this.usersRepository.exists(email);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    // Prepare password for secure storage
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword: string = bcrypt.hashSync(password, salt);

    const userCreate = User.create({ name, email, password:encryptedPassword });
    const user = await this.usersRepository.create(userCreate);
    return user;
  }
}

export { CreateUserService };
