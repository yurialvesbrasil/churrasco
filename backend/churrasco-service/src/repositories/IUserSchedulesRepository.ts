import { UserSchedule } from "../entities/UserSchedule";

interface IUserSchedulesRepository {
    create(userSchedule: UserSchedule, haveAdditionForDrinks: boolean): Promise<boolean>;
}

export { IUserSchedulesRepository };