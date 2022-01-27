import { Request, Response } from "express";
import { CreateBarbecueService } from "./CreateBarbecueService";
import * as yup from 'yup';

class CreateBarbecueController {
    constructor(private createBarbecue: CreateBarbecueService) { }

    async handle(request: Request, response: Response) {
        const { description, date_barbecue, obs, suggested_val_participant, addition_for_drinks_val } = request.body;

        function formatDate(date: Date) {
            return new Date(date).toLocaleDateString()
        }

        //Valid input data
        const schema = yup.object().shape({
            description: yup.string().required('No description provided.').min(3, 'Description must be at least 3 characters long.'),
            date_barbecue: yup.date().required("No date provided.").min(new Date(), ({ min }) => `Date needs to be before ${formatDate(new Date())}!!`,),
            suggested_val_participant: yup.number().required('No suggested value provided.').min(1, 'Suggested value must be at least 1.'),
            addition_for_drinks_val: yup.number().required('No addition for drinks provided.').min(0, 'Addition for drinks must be at least 0.'),
        });

        try {
            await schema.validate(request.body, { abortEarly: false });
        } catch (error) {
            throw new Error((error as Error).message);
        }

        const barbecue = await this.createBarbecue.execute({ description, dateBarbecue: date_barbecue, obs, suggestedValParticipant: suggested_val_participant, additionForDrinksVal: addition_for_drinks_val });

        return response.json(barbecue);
    }
}

export { CreateBarbecueController };
