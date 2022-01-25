
import { UsersRepositoryInMemory } from "../../../repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { CreateUserService, ICreateUserRequest } from "../../createUser/CreateUserService";
import { ILoginUserRequest, LoginUserService } from "../LoginUserService";

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
        const userData: ICreateUserRequest = {
            name: "John Doe",
            email: "testIntegrationExisting@test.com.br",
            password: "Yu23145*",
        };

        const userRequestData: ILoginUserRequest = {
            email: "testIntegrationExisting@test.com.br",
            password: "Yu23145*",
        };

        const user = await createUserService.execute(userData);
        const tokenJson = await loginUserService.execute(userRequestData);

        expect(tokenJson).toHaveProperty("token");
    });

    it("must be able to reject a user", async () => {
        const userRequestData: ILoginUserRequest = {
            email: "testIntegrationExisting@test.com.br",
            password: "Yu54321*",
        };

        await loginUserService.execute(userRequestData);

        await expect(loginUserService.execute(userRequestData)).rejects.toEqual(
            new Error("Email or password is invalid!")
        );
    });
});