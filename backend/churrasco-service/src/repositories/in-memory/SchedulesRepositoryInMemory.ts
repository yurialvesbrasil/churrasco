import { Schedule } from "../../entities/Schedule";
import { ISchedulesRepository } from "../ISchedulesRepository";
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

}

export { SchedulesRepositoryInMemory };