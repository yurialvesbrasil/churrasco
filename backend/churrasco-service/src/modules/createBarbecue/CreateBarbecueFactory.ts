import { PrismaBarbecueRepository } from "../../repositories/prisma/PrismaBarbecueRepository";
import { CreateBarbecueController } from "./CreateBarbecueController";
import { CreateBarbecueService } from "./CreateBarbecueService";

export const createBarbecueFactory = () => {
  const barbecueRepository = new PrismaBarbecueRepository();
  const createBarbecueService = new CreateBarbecueService(barbecueRepository);
  const createBarbecueController = new CreateBarbecueController(createBarbecueService);
  return createBarbecueController;
};