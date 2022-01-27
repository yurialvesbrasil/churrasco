import { UserSchedule } from "./UserSchedule";

class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  schedules?: UserSchedule[];

  private constructor({ name, email, password, schedules }: User) {
    return Object.assign(this, {
      name,
      email,
      password,
      schedules
    });
  }

  static create({ name, email, password, schedules }: User) {
    const user = new User({ name, email, password, schedules });
    return user;
  }
}

export { User };
