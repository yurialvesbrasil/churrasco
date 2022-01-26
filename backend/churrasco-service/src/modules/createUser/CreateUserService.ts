import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import bcrypt from 'bcrypt';

export interface ICreateUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) { }

  async execute({ name, email, password }: ICreateUserRequest) {
    const userAlreadyExists = await this.usersRepository.exists(email);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    // Prepare password for secure storage
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword: string = bcrypt.hashSync(password, salt);

    const userCreate = User.create({ name, email, password: encryptedPassword });
    const user = await this.usersRepository.create(userCreate);

    //delete user.password;

    return user;
  }
}

export { CreateUserService };
