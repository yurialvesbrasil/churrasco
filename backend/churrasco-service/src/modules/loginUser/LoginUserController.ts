import { Request, Response } from "express";
import { LoginUserService } from "./LoginUserService";
import * as yup from 'yup';


export interface ILoginUserRequest {
  email: string;
  password: string;
}

class LoginUserController {
    constructor(private loginUser: LoginUserService) { }

    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        //Valid input data
        const schema = yup.object().shape({
            email: yup.string().email('Ivalid email').required('No email provided.'),
            password: yup.string().required('No password provided.'),
        });

        try {
            await schema.validate(request.body, { abortEarly: false });
        } catch (error) {
            throw new Error((error as Error).message);
        }

        const tokenJson = await this.loginUser.execute({ email, password });

        return response.json(tokenJson);
    }
}


export { LoginUserController };