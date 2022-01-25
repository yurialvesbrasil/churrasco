import { SchedulesRepositoryInMemory } from "../../../repositories/in-memory/SchedulesRepositoryInMemory";
import { ISchedulesRepository } from "../../../repositories/ISchedulesRepository";
import { FindAllBarbecueService } from "../FindAllBarbecueService";
import listOfSchedules from "./listOfSchedules.json";

describe("FindAll schedules", () => {
    let schedulesRepository: ISchedulesRepository;
    let findAllBarbecueService: FindAllBarbecueService;

    beforeAll(() => {
        schedulesRepository = new SchedulesRepositoryInMemory();
        findAllBarbecueService = new FindAllBarbecueService(schedulesRepository);
    });

    it("should be able to fetch all the barbecue schedules", async () => {

        const schedules = await findAllBarbecueService.execute();
        const expected = Object.assign([], listOfSchedules);

        expect(schedules).toEqual(expect.arrayContaining(expected));
    });

})