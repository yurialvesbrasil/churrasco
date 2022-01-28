import { UserSchedule } from "../../entities/UserSchedule";
import { IUserSchedulesRepository } from "../IUserSchedulesRepository";


class UserScheduleRepositoryInMemory implements IUserSchedulesRepository {
    private userSchedules: UserSchedule[] = [];

    async create(userSchedule: UserSchedule): Promise<boolean> {
        Object.assign(userSchedule);

        this.userSchedules.push(userSchedule);
        return true;
    }

    async existUserInSchedule(userSchedule: UserSchedule): Promise<UserSchedule | null> {
        const result = this.userSchedules.find((userScheduleVar, i) => {
            if ((userSchedule.userId === userScheduleVar.userId)
                && (userSchedule.scheduleId === userScheduleVar.userId)
                && (userScheduleVar.haveAdditionForDrinks === userSchedule.haveAdditionForDrinks))
                return true;
        });

        return result != undefined ? result : null;

    }
}

export { UserScheduleRepositoryInMemory };
