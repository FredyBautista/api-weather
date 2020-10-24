const express = require("express");
const request = require("supertest");
const errorHandler = require("./errorHandler");

const app = express();
app.use("/nowhere", errorHandler);

describe("Returning Not found", () => {
  it("GET /nowhere", async () => {
    const { body } = await request(app).get("/nowhere");
    expect(body).toEqual({ status: 404, error: "Not Found" });
  });
});
