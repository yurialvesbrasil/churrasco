import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";
import * as yup from 'yup';

class CreateUserController {
  constructor(private createUser: CreateUserService) {}

  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const user = await this.createUser.execute({ name, email, password });

    //Valid input data
    const schema = yup.object().shape({
      name: yup.string().required('No name provided.'),
      email: yup.string().email('Ivalid email').required('No email provided.'),
      password: yup.string().required('No password provided.').matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      throw new Error(err.message);
    }

    return response.json(user);
  }
}

export { CreateUserController };
