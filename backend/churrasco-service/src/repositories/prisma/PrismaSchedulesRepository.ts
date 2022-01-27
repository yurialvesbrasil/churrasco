import { prisma } from "../../database/client";
import { Schedule } from "../../entities/Schedule";
import { User } from "../../entities/User";
import { ISchedulesRepository } from "../ISchedulesRepository";

class PrismaSchedulesRepository implements ISchedulesRepository {

  async findByIdSchedule(idSchedule: string): Promise<Schedule | null> {
    const schedule = await prisma.schedule.findUnique({
      where: {
        id: idSchedule,
      },
    });
    return !!schedule ? schedule : null;
  }

  async create({ description, dateBarbecue, obs, suggestedValParticipant, additionForDrinksVal }: Schedule): Promise<Schedule> {

    //const users: User[] = await prisma.user.findMany();

    const schedule = await prisma.schedule.create({
      data: {
        description,
        dateBarbecue,
        obs: (obs != null) ? obs : "",
        suggestedValParticipant,
        additionForDrinksVal,
      },
    });

    return schedule;
  }

  async findAll(): Promise<Schedule[]> {
    const schedules = await prisma.schedule.findMany();

    return schedules;
  }


}

export { PrismaSchedulesRepository };
