import { SchedulesRepositoryInMemory } from "../../../repositories/in-memory/SchedulesRepositoryInMemory";
import { UserScheduleRepositoryInMemory } from "../../../repositories/in-memory/UserScheduleRepositoryInMemory";
import { UsersRepositoryInMemory } from "../../../repositories/in-memory/UsersRepositoryInMemory";
import { ISchedulesRepository } from "../../../repositories/ISchedulesRepository";
import { IUserSchedulesRepository } from "../../../repositories/IUserSchedulesRepository";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { AddParticipantService } from "../AddParticipantService";

describe("Add Participant in Barbecue", () => {
    let usersRepository: IUsersRepository;
    let schedulesRepository: ISchedulesRepository;
    let userSchedulesRepository: IUserSchedulesRepository;
    let addParticipantService: AddParticipantService;

    beforeAll(() => {
        usersRepository = new UsersRepositoryInMemory();
        schedulesRepository = new SchedulesRepositoryInMemory();
        userSchedulesRepository = new UserScheduleRepositoryInMemory();
        addParticipantService = new AddParticipantService(schedulesRepository, usersRepository, userSchedulesRepository);
    });

    it("should be possible to add a participant in a barbecue", async () => {
        const user = await usersRepository.create({
            name: "Fernanda",
            email: "fernanda@hotmail.com",
            password: "123456"
        });

        const schedule = await schedulesRepository.create({
            description: "Churrasco da Fernanda",
            dateBarbecue: new Date(),
            obs: "Poderá haver novas contribuições para bebidas durante o evento.",
            suggestedValParticipant: 35.5,
            additionForDrinksVal: 20.5
        });

        let isAddParticipante: boolean = false;
        if (user.id && schedule.id) {
            isAddParticipante = await addParticipantService.execute({ idUser: user.id, idSchedule: schedule.id, haveAdditionForDrinks: true });
        }

        expect(isAddParticipante).toEqual(true);

    });

});