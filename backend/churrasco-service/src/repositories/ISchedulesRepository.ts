import { Schedule } from "../entities/Schedule";

interface ISchedulesRepository {
    create(schedule: Schedule): Promise<Schedule>;
}

export { ISchedulesRepository };