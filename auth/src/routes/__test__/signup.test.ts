import request from "supertest";
import { app } from "../../app";

it("returns a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
});

it("return a 400 with an invalid email", async () => {
  request(app)
    .post("/app/users/signup")
    .send({
      email: "shsajsksa",
      password: "password",
    })
    .expect(400);
});

it("return a 400 with an invalid password", async () => {
  request(app)
    .post("/app/users/signup")
    .send({
      email: "shsajsksa",
      password: "p",
    })
    .expect(400);
});

it("return a 400 with missing email and password", async () => {
  await request(app)
    .post("/app/users/signup")
    .send({
      email: "shsajsksa",
    })
    .expect(400);

  await request(app)
    .post("/app/users/signup")
    .send({
      password: "pskaskal",
    })
    .expect(400);
});

it("disallows duplicate email", async () => {
  await request(app)
    .post("/app/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  await request(app)
    .post("/app/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(400);
});


it("sets a cookie after a successfull signup", async()=>{
    const response = await request(app)
    .post("/app/users/signup")
    .send({
        email: "test@test.com",
        password: "password"
    })
    .expect(201)

    //pulling out the cookie and checking if it's defined
    expect(response.get('Set-Cookie')).toBeDefined()
})