import { prisma } from "../../database/client";
import { Schedule } from "../../entities/Schedule";
import { ISchedulesRepository } from "../ISchedulesRepository";

class PrismaSchedulesRepository implements ISchedulesRepository {

  async create({ description, data, obs, suggestedValParticipant, additionForDrinks }: Schedule): Promise<Schedule> {
    const schedule = await prisma.schedule.create({
      data: {
        description,
        data,
        obs,
        suggestedValParticipant,
        additionForDrinks
      },
    });

    return schedule;
  }
}

export { PrismaSchedulesRepository };
