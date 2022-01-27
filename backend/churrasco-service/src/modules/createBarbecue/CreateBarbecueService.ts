import { Schedule } from "../../entities/Schedule";
import { ISchedulesRepository } from "../../repositories/ISchedulesRepository";

class CreateBarbecueService {
    constructor(private scheduleRepository: ISchedulesRepository) { }

    async execute({ description, dateBarbecue, obs, suggestedValParticipant, additionForDrinksVal }: Schedule): Promise<Schedule> {
        const barbecueCreate = Schedule.create({ description, dateBarbecue, obs, suggestedValParticipant, additionForDrinksVal });
        const barbecue = await this.scheduleRepository.create(barbecueCreate);
        return barbecue;
    }
}

export { CreateBarbecueService };