const express = require("express");
const request = require("supertest");
const greeting = require("./greeting");

const app = express();
app.use("/api/greeting", greeting);

describe("Returning a greeting", () => {
  it("GET /greeting - success", async () => {
    const { body } = await request(app).get("/api/greeting");
    expect(body).toEqual({ greeting: "Hello World" });
  });
});
