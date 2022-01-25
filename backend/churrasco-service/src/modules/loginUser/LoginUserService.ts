import { IUsersRepository } from "../../repositories/IUsersRepository";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export interface ILoginUserRequest {
  email: string;
  password: string;
}

class LoginUserService {
  constructor(private usersRepository: IUsersRepository) { }

  private generateToken(sub: string, expiresIn: number = 1800): string {
    return jwt.sign({ sub }, String(process.env.SECRET), {
      expiresIn: expiresIn,
    });
  }

  async execute({ email, password }: ILoginUserRequest) {
    const userExists = await this.usersRepository.exists(email);

    if ((!userExists) || (!userExists.id)) {
      throw new Error("Email or password is invalid!");
    }

    //Compare bank password with password sent by user
    if (await bcrypt.compare(password, userExists.password ?? "") == false) {
      throw new Error("Email or password is invalid!");
    }

    return { token: `Bearer ${this.generateToken(userExists.id)}` };
  }
}

export { LoginUserService };