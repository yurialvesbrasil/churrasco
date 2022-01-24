import { ScheduleOnUser } from "../entities/ScheduleOnUser";

interface ISchedulesOnUserRepository {
    create(scheduleOnUser: ScheduleOnUser): Promise<ScheduleOnUser>;
}

export { ISchedulesOnUserRepository };