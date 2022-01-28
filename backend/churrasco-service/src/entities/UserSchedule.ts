import { Schedule } from "./Schedule";
import { User } from "./User";

class UserSchedule {
    userId: String;
    scheduleId: String;
    haveAdditionForDrinks: boolean;

    private constructor({ userId, scheduleId, haveAdditionForDrinks }: UserSchedule) {
        return Object.assign(this, {
            userId,
            scheduleId,
            haveAdditionForDrinks
        });
    }

    static create({ userId, scheduleId, haveAdditionForDrinks }: UserSchedule) {
        const schedulesOnUser = new UserSchedule({ userId, scheduleId, haveAdditionForDrinks });
        return schedulesOnUser;
    }
}

export { UserSchedule };