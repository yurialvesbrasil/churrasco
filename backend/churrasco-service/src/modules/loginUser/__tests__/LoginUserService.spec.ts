import { User } from "../../../entities/User";
import { UsersRepositoryInMemory } from "../../../repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { CreateUserService } from "../../createUser/CreateUserService";
import { LoginUserService } from "../LoginUserService";

interface IUserRequest {
    email: string;
    password: string;
}

describe("Login user", () => {
    let usersRepository: IUsersRepository;
    let loginUserService: LoginUserService;
    let createUserService: CreateUserService;

    beforeAll(() => {
        usersRepository = new UsersRepositoryInMemory();
        loginUserService = new LoginUserService(usersRepository);
        createUserService = new CreateUserService(usersRepository);
    });

    it("should be able to login a user", async () => {
        const userData: User = {
            name: "Test Name",
            email: "testIntegrationExisting@test.com.br",
            password: "Yu23145*",
        };

        const user = await createUserService.execute(userData);
        const tokenJson = await loginUserService.execute(userData);

        expect(tokenJson).toHaveProperty("token");
    });

    it("must be able to reject a user", async () => {
        const userRequestData: IUserRequest = {
            email: "testIntegrationExisting@test.com.br",
            password: "Yu54321*",
        };

        await expect(loginUserService.execute(userRequestData)).rejects.toEqual(
            new Error("Email or password is invalid!")
        );
    });
});