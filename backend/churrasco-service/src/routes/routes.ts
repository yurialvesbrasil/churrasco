import { Router } from "express";
import { createUserFactory } from "../modules/createUser/CreateUserFactory";
import { createBarbecueFactory } from "../modules/createBarbecue/CreateBarbecueFactory";

const routes = Router();

routes.post("/users", (request, response) =>
  createUserFactory().handle(request, response)
);

routes.post("/barbecues", (request, response) =>
  createBarbecueFactory().handle(request, response)
);

export { routes };
