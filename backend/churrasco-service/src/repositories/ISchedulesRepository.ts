import { Schedule } from "../entities/Schedule";

interface ISchedulesRepository {
    create(schedule: Schedule): Promise<Schedule>;
    findAll(): Promise<Schedule[]>;
}

export { ISchedulesRepository };