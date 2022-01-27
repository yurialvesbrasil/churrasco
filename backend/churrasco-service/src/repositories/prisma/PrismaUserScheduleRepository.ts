import { Prisma } from "@prisma/client";
import { prisma } from "../../database/client";
import { UserSchedule } from "../../entities/UserSchedule";
import { IUserSchedulesRepository } from "../IUserSchedulesRepository";

class PrismaUserSchedulesRepository implements IUserSchedulesRepository {
    async create(userSchedule: UserSchedule, haveAdditionForDrinks: boolean): Promise<boolean> {

        let assingments: Prisma.Enumerable<Prisma.UserScheduleCreateManyInput> = [];
        assingments.push({
            userId: userSchedule.user.id ?? "",
            scheduleId: userSchedule.schedule.id ?? "",
            haveAdditionForDrinks: false,
        })

        await prisma.userSchedule.createMany({ data: assingments });

        return true;
    }
}

export { PrismaUserSchedulesRepository };