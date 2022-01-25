import { ScheduleOnUser } from "./ScheduleOnUser";

class Schedule {
    id?: string;
    description: string;
    dateBarbecue: Date;
    obs?: string | undefined;
    suggestedValParticipant: number;
    additionForDrinks: number;
    schedulesOnUsers?: ScheduleOnUser[];

    private constructor({ id, description, dateBarbecue, obs, suggestedValParticipant, additionForDrinks, schedulesOnUsers }: Schedule) {
        return Object.assign(this, {
            id,
            description,
            dateBarbecue,
            obs,
            suggestedValParticipant,
            additionForDrinks,
            schedulesOnUsers
        });
    }

    static create({ id, description, dateBarbecue, obs, suggestedValParticipant, additionForDrinks, schedulesOnUsers }: Schedule) {
        const schedule = new Schedule({ id, description, dateBarbecue, obs, suggestedValParticipant, additionForDrinks, schedulesOnUsers });
        return schedule;
    }
}

export { Schedule };