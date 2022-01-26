
/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
 
import { app } from "../../../app";
import request from "supertest";
import listOfSchedules from './listOfSchedules.json'

describe("Find All Barbecue Controller", () => {
    it("Should be able to return all barbecue schedules", async () => {

        const response = await request(app).get("/barbecues");

        expect(response.status).toBe(200);
    
    });

});