import { User } from "../../../entities/User";
import { UsersRepositoryInMemory } from "../../../repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../../repositories/IUsersRepositories";
import { CreateUserService } from "../../createUser/CreateUserService";
import { LoginUserService } from "../LoginUserService";

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
});