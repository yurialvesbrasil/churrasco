import { ISchedulesRepository } from "../../repositories/ISchedulesRepository";

class FindAllBarbecueService {
    constructor(private schedulesRepository: ISchedulesRepository) { }

    async execute() {
        const burbecues = await this.schedulesRepository.findAll();

        return burbecues;
    }
}

export { FindAllBarbecueService };