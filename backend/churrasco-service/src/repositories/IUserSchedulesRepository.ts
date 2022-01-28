import { UserSchedule } from "../entities/UserSchedule";

interface IUserSchedulesRepository {
    create(userSchedule: UserSchedule): Promise<boolean>;
    existUserInSchedule(userSchedule: UserSchedule): Promise<UserSchedule | null>;
}

export { IUserSchedulesRepository };