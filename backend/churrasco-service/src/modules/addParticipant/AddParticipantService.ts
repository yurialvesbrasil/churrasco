
import { Schedule } from "../../entities/Schedule";
import { User } from "../../entities/User";
import { ISchedulesRepository } from "../../repositories/ISchedulesRepository";
import { IUserSchedulesRepository } from "../../repositories/IUserSchedulesRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IParticipantRequest {
    idUser: string;
    idSchedule: string;
    haveAdditionForDrinks: boolean;
}

class AddParticipantService {
    constructor(
        private schedulesRepository: ISchedulesRepository,
        private userRepository: IUsersRepository,
        private userScheduleRepository: IUserSchedulesRepository
    ) { }

    async execute({ idUser, idSchedule, haveAdditionForDrinks }: IParticipantRequest) {
        //Localiza usuário
        const user: User | null = await this.userRepository.findByIdUser(idUser);

        //Localiza schedule
        const schedule: Schedule | null = await this.schedulesRepository.findByIdSchedule(idSchedule);

        if ((user != null) && (schedule != null)) {
            const barbecue = await this.userScheduleRepository.create({
                userId: user.id as string,
                scheduleId: schedule.id as string,
                haveAdditionForDrinks: haveAdditionForDrinks
            });
            return barbecue;
        } else {
            throw new Error("Participant or barbecue not found!");
        }
    }
}

export { AddParticipantService };