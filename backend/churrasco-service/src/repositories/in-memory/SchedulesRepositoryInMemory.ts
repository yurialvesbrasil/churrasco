import { Schedule } from "../../entities/Schedule";
import { ISchedulesRepository } from "../ISchedulesRepository";
import listOfSchedules from "../../modules/findBarbecue/__tests__/listOfSchedules.json";
import { v4 as uuid } from "uuid";


class SchedulesRepositoryInMemory implements ISchedulesRepository {
    private schedules: Schedule[] = [];

    async create(schedule: Schedule): Promise<Schedule> {
        Object.assign(schedule, {
            id: uuid(),
        });

        this.schedules.push(schedule);
        return schedule;
    }

    async findAll(): Promise<Schedule[]> {
        const schedules = Object.assign([], listOfSchedules);

        return schedules;
    }

    async findByIdSchedule(idSchedule: string): Promise<Schedule | null> {
        const schedule = this.schedules.find((schedule) => schedule.id === idSchedule);
        return schedule != undefined ? schedule : null;
    }

}

export { SchedulesRepositoryInMemory };