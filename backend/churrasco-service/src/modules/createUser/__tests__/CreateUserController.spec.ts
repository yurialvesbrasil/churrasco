/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from "../../../app";
import request from "supertest";
import invalidPasswordResponse from './invalidPasswordResponse.json'

describe("Create User Controller", () => {
  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      email: "testIntegration@test.com.br",
      name: "Test Integration",
      password: "Yu23145*",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
  });

  it("Should not be able to create an existing user", async () => {
    await request(app).post("/users").send({
      email: "testIntegrationExisting@test.com.br",
      name: "Test Integration Exist User",
      password: "Yu123456*",
    });

    const response = await request(app).post("/users").send({
      email: "testIntegrationExisting@test.com.br",
      name: "Test Integration Exist User",
      password: "Yu123456*",
    });

    expect(response.status).toBe(400);
  });

  it("Shouldn't be able to create a user with a weak password", async () => {
    const response = await request(app).post("/users").send({
      email: "testIntegration2@test.com.br",
      name: "Test Integration2",
      password: "12345678",
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toEqual(invalidPasswordResponse);
  })
});
