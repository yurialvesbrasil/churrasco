import { PrismaSchedulesRepository } from "../../repositories/prisma/PrismaSchedulesRepository";
import { CreateBarbecueController } from "./CreateBarbecueController";
import { CreateBarbecueService } from "./CreateBarbecueService";

export const createBarbecueFactory = () => {
  const schedulesRepository = new PrismaSchedulesRepository();
  const createBarbecueService = new CreateBarbecueService(schedulesRepository);
  const createBarbecueController = new CreateBarbecueController(createBarbecueService);
  return createBarbecueController;
};