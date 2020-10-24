const express = require("express");
const request = require("supertest");
const weather = require("./weather");

const app = express();
app.use("/api/weather/:city", weather);

describe("Returning a greeting", () => {
  it("GET /weather/Guadalajara - success", async () => {
    const { status } = await request(app).get("/api/weather/Guadalajara");
    expect(status).toEqual(200);
  });

  it("GET /weather/Guadalajara in °C", async () => {
    const { status } = await request(app)
      .get("/api/weather/Guadalajara")
      .query({ units: "metrics" });
    expect(status).toEqual(200);
  });
});
