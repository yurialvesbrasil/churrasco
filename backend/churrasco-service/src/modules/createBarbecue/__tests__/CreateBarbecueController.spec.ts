/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from "../../../app";
import request from "supertest";

describe("Create Barbecue Controller", () => {
  it("Should be able to create a new barbecue", async () => {

    var dataExempole = new Date();
    dataExempole.setHours(dataExempole.getHours() + 2);

    const response = await request(app).post("/barbecues").send({
      description: "Churrasco da Fernanda",
      date_barbecue: dataExempole.toISOString(),
      obs: "Poderá haver novas contribuições para bebidas durante o evento.",
      suggested_val_participant: 35.5,
      addition_for_drinks_val: 20.5
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
  });

  it("Must not be able to create a new barbecue with a date lower than the current date", async () => {

    var dataExempole = new Date();
    dataExempole.setHours(dataExempole.getHours() - 2);

    const response = await request(app).post("/barbecues").send({
      description: "Churrasco da Fernanda",
      date_barbecue: dataExempole.toISOString(),
      obs: "Poderá haver novas contribuições para bebidas durante o evento.",
      suggested_val_participant: 35.5,
      addition_for_drinks_val: 20.5
    });

    expect(response.status).toBe(400);

  });
})