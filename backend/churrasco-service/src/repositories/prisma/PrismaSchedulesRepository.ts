import { prisma } from "../../database/client";
import { Schedule } from "../../entities/Schedule";
import { ISchedulesRepository } from "../ISchedulesRepository";

class PrismaSchedulesRepository implements ISchedulesRepository {

  async create({ description, dateBarbecue, obs, suggestedValParticipant, additionForDrinks }: Schedule): Promise<Schedule> {
    const schedule = await prisma.schedule.create({
      data: {
        description,
        dateBarbecue,
        obs: (obs != null) ? obs : "",
        suggestedValParticipant,
        additionForDrinks
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
