import { UserSchedule } from "./UserSchedule";

class Schedule {
    id?: string;
    description: string;
    dateBarbecue: Date;
    obs?: string | undefined;
    suggestedValParticipant: number;
    additionForDrinksVal: number;
    participants?: UserSchedule[];

    private constructor({ id, description, dateBarbecue, obs, suggestedValParticipant, additionForDrinksVal, participants }: Schedule) {
        return Object.assign(this, {
            id,
            description,
            dateBarbecue,
            obs,
            suggestedValParticipant,
            additionForDrinksVal,
            participants
        });
    }

    static create({ id, description, dateBarbecue, obs, suggestedValParticipant, additionForDrinksVal, participants }: Schedule) {
        const schedule = new Schedule({ id, description, dateBarbecue, obs, suggestedValParticipant, additionForDrinksVal, participants });
        return schedule;
    }
}

export { Schedule };