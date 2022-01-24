import { Schedule } from "../../../entities/Schedule";
import { SchedulesRepositoryInMemory } from "../../../repositories/in-memory/SchedulesRepositoryInMemory";
import { ISchedulesRepository } from "../../../repositories/ISchedulesRepository";
import { CreateBarbecueService } from "../CreateBarbecueService";

describe("Create barbecue", () => {
  let schedulesRepository: ISchedulesRepository;
  let createBarbecueService: CreateBarbecueService;

  beforeAll(() => {
    schedulesRepository = new SchedulesRepositoryInMemory();
    createBarbecueService = new CreateBarbecueService(schedulesRepository);
  });


  it("should be possible to schedule a new barbecue", async () => {
    const scheduleData: Schedule = {
      description: "Churrasco da Fernanda",
      dateBarbecue: new Date(),
      obs: "Poderá haver novas contribuições para bebidas durante o evento.",
      suggestedValParticipant: 35.5,
      additionForDrinks: 20.5
    };

    const barbecue = await createBarbecueService.execute(scheduleData);

    expect(barbecue).toHaveProperty("id");
    expect(barbecue.description).toBe("Churrasco da Fernanda");
  });

})