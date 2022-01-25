
import { app } from "../../../app";
import request from "supertest";
import listOfSchedules from './listOfSchedules.json'

describe("Find All Barbecue Controller", () => {
    it("Should be able to return all barbecue schedules", async () => {

        const response = await request(app).get("/barbecues");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(listOfSchedules);
    });

});