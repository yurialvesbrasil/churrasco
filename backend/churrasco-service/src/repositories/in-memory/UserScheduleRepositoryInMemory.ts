import { UserSchedule } from "../../entities/UserSchedule";
import { IUserSchedulesRepository } from "../IUserSchedulesRepository";


class UserScheduleRepositoryInMemory implements IUserSchedulesRepository {
    private userSchedules: UserSchedule[] = [];

    async create(userSchedule: UserSchedule): Promise<boolean> {
        Object.assign(userSchedule);

        this.userSchedules.push(userSchedule);
        return true;
    }
}

export { UserScheduleRepositoryInMemory };
