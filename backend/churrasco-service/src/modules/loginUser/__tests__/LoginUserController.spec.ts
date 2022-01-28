/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from "../../../app";
import request from "supertest";


describe("Login a user controller", () => {
    it("should be able to login a user", async () => {

        await request(app).post("/users").send({
            email: "testIntegration@test.com.br",
            name: "Test Integration Login User",
            password: "Yu123456*",
        });

        const response = await request(app).post("/login").send({
            email: "testIntegration@test.com.br",
            password: "Yu123456*",
        });

        expect(response.status).toBe(200);

    });

});