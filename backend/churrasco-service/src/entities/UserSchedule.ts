import { Schedule } from "./Schedule";
import { User } from "./User";

class UserSchedule {
    user: User;
    schedule: Schedule;

    private constructor({ user, schedule }: UserSchedule) {
        return Object.assign(this, {
            user,
            schedule
        });
    }

    static create({ user, schedule }: UserSchedule) {
        const schedulesOnUser = new UserSchedule({ user, schedule });
        return schedulesOnUser;
    }
}

export { UserSchedule };