import { PrismaSchedulesRepository } from "../../repositories/prisma/PrismaSchedulesRepository";
import { FindAllBarbecueController } from "./FindAllBarbecueController";
import { FindAllBarbecueService } from "./FindAllBarbecueService";

export const findAllBarbecueFactory = () => {
    const schedulesRepository = new PrismaSchedulesRepository();
    const findAllBarbecue = new FindAllBarbecueService(schedulesRepository);
    const findAllBarbecueController = new FindAllBarbecueController(findAllBarbecue);
    return findAllBarbecueController;
};
