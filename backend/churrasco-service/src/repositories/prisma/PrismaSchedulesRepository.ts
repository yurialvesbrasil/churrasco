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
}

export { PrismaSchedulesRepository };
