const request = require("supertest");
const app = require("../server");

describe("POST /api/auth/login", () => {
  test("should login successfully", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "mrabdullahamjid33@gmail.com",
        password: "123456789"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.apiToken).toBeDefined();
    expect(res.body.LoginUser).toBeDefined();
  });
});