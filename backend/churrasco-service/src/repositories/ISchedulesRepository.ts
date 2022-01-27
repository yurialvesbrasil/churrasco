import { Schedule } from "../entities/Schedule";

interface ISchedulesRepository {
    create(schedule: Schedule): Promise<Schedule>;
    findAll(): Promise<Schedule[]>;
    findByIdSchedule(idSchedule: string): Promise<Schedule | null>;
}

export { ISchedulesRepository };