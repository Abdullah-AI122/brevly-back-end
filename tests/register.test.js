const request = require("supertest");
const app = require("../server");

describe("POST /api/auth/register", () => {
  test("should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Muzmail",
        email: "muzamal12570@gmail.com",
        password: "Pass123!"
      });

    console.log(res.statusCode);
    console.log(res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});