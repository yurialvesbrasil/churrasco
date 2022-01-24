import { ScheduleOnUser } from "../../entities/ScheduleOnUser";
import { ISchedulesOnUserRepository } from "../ISchedulesOnUserRepository";


class ScheduleOnUsersRepositoryInMemory implements ISchedulesOnUserRepository {
    private scheduleOnUser: ScheduleOnUser[] = [];

    async create(scheduleOnUser: ScheduleOnUser): Promise<ScheduleOnUser> {
        Object.assign(scheduleOnUser);

        this.scheduleOnUser.push(scheduleOnUser);
        return scheduleOnUser;
    }
}

export { ScheduleOnUsersRepositoryInMemory };
