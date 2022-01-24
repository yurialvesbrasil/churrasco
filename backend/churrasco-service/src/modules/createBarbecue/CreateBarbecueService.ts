import { Schedule } from "../../entities/Schedule";
import { ISchedulesRepository } from "../../repositories/ISchedulesRepository";

interface IBarbecueRequest {
    description: string;
    dateBarbecue: Date;
    obs: string;
    suggestedValParticipant: number;
    additionForDrinks: number;
}

class CreateBarbecueService {
    constructor(private scheduleRepository: ISchedulesRepository) { }

    async execute({ description, dateBarbecue, obs, suggestedValParticipant, additionForDrinks }: IBarbecueRequest) {
        const barbecueCreate = Schedule.create({ description, dateBarbecue, obs, suggestedValParticipant, additionForDrinks });
        const barbecue = await this.scheduleRepository.create(barbecueCreate);
        return barbecue;
    }
}

export { CreateBarbecueService };