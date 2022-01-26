/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
 
import { app } from "../../../app";
import request from "supertest";


describe("Login a user controller", () => {
    it("should be able to login a user", async () => {

        const response = await request(app).post("/login").send({
            email: "testIntegration@test.com.br",
            password: "Yu23145*",
        });

        expect(response.status).toBe(200);
    
    });

});