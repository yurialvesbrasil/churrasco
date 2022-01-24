import { User } from "../../../entities/User";
import { UsersRepositoryInMemory } from "../../../repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { CreateUserService } from "../CreateUserService";

describe("Create user", () => {
  let usersRepository: IUsersRepository;
  let createUserService: CreateUserService;

  beforeAll(() => {
    usersRepository = new UsersRepositoryInMemory();
    createUserService = new CreateUserService(usersRepository);
  });

  it("should be able to create a new user", async () => {
    const userData: User = {
      name: "Test Name",
      email: "test@test.com.br",
      password: "12345678",
    };

    const user = await createUserService.execute(userData);

    expect(user).toHaveProperty("id");
    expect(user.email).toBe("test@test.com.br");
  });

  it("should not be able to create an existing user", async () => {
    const userData: User = {
      name: "Test Existing Name",
      email: "testexisting@test.com.br",
      password: "12345678",
    };

    await createUserService.execute(userData);

    await expect(createUserService.execute(userData)).rejects.toEqual(
      new Error("User already exists!")
    );
  });
});
