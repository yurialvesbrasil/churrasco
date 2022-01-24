import { ScheduleOnUser } from "./ScheduleOnUser";

class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  schedulesOnUsers?: ScheduleOnUser[];

  private constructor({ name, email, password, schedulesOnUsers }: User) {
    return Object.assign(this, {
      name,
      email,
      password,
      schedulesOnUsers
    });
  }

  static create({ name, email, password, schedulesOnUsers }: User) {
    const user = new User({ name, email, password, schedulesOnUsers });
    return user;
  }
}

export { User };
