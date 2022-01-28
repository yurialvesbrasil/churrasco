import { Prisma } from "@prisma/client";
import { prisma } from "../../database/client";
import { UserSchedule } from "../../entities/UserSchedule";
import { IUserSchedulesRepository } from "../IUserSchedulesRepository";

class PrismaUserSchedulesRepository implements IUserSchedulesRepository {
    async create(userSchedule: UserSchedule): Promise<boolean> {

        let assingments: Prisma.Enumerable<Prisma.UserScheduleCreateManyInput> = [];
        assingments.push({
            userId: userSchedule.userId as string,
            scheduleId: userSchedule.scheduleId as string,
            haveAdditionForDrinks: userSchedule.haveAdditionForDrinks,
        })

        await prisma.userSchedule.createMany({ data: assingments });

        return true;
    }

    async existUserInSchedule(userSchedule: UserSchedule): Promise<UserSchedule | null> {
        const result = await prisma.userSchedule.findFirst({
            where: {
                schedule: {
                    id: userSchedule.scheduleId as string
                },
                user: {
                    id: userSchedule.userId as string
                }
            }
        });
        console.log(" prisma.userSchedule.findFirst: " + JSON.stringify(result))
        return result != undefined ? result : null;

    }
}

export { PrismaUserSchedulesRepository };