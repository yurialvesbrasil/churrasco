import { ScheduleOnUser } from "./ScheduleOnUser";

class Schedule {
    id: string;
    description: string;
    data: Date;
    obs: string;
    suggestedValParticipant: number;
    additionForDrinks: number;
    schedulesOnUsers?: ScheduleOnUser[];

    private constructor({ id, description, data, obs, suggestedValParticipant, additionForDrinks, schedulesOnUsers }: Schedule) {
        return Object.assign(this, {
            id,
            description,
            data,
            obs,
            suggestedValParticipant,
            additionForDrinks,
            schedulesOnUsers
        });
    }

    static create({ id, description, data, obs, suggestedValParticipant, additionForDrinks, schedulesOnUsers }: Schedule) {
        const schedule = new Schedule({ id, description, data, obs, suggestedValParticipant, additionForDrinks, schedulesOnUsers });
        return schedule;
    }
}

export { Schedule };