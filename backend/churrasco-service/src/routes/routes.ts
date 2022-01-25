import { Router } from "express";
import { createUserFactory } from "../modules/createUser/CreateUserFactory";
import { createBarbecueFactory } from "../modules/createBarbecue/CreateBarbecueFactory";
import { findAllBarbecueFactory } from "../modules/findBarbecue/FindAllBarbecueFactory";
import { loginUserFactory } from "../modules/loginUser/LoginUserFactory";

const routes = Router();

routes.post("/users", (request, response) =>
  createUserFactory().handle(request, response)
);

routes.post("/login", (request, response) =>
  loginUserFactory().handle(request, response)
);

routes.post("/barbecues", (request, response) =>
  createBarbecueFactory().handle(request, response)
);

routes.get("/barbecues", (request, response) =>
  findAllBarbecueFactory().handle(request, response)
);



export { routes };
