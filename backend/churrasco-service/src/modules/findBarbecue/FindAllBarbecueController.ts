import { Request, Response } from "express";
import { FindAllBarbecueService } from "./FindAllBarbecueService";


class FindAllBarbecueController {
    constructor(private findAllBarbecue: FindAllBarbecueService) { }

    async handle(request: Request, response: Response) {
        const barbecue = await this.findAllBarbecue.execute();

        return response.json(barbecue);
    }
}

export { FindAllBarbecueController };