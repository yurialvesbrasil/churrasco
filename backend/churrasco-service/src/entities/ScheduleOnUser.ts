import { Schedule } from "./Schedule";
import { User } from "./User";

class ScheduleOnUser {
    user: User;
    schedule: Schedule;

    private constructor({ user, schedule }: ScheduleOnUser) {
        return Object.assign(this, {
            user,
            schedule
        });
    }

    static create({ user, schedule }: ScheduleOnUser) {
        const schedulesOnUser = new ScheduleOnUser({ user, schedule });
        return schedulesOnUser;
    }
}

export { ScheduleOnUser };