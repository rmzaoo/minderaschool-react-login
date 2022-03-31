import { Prisma, PrismaClient } from "@prisma/client";
import express from "express";

var cors = require("cors");
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.json({
    message: "Hello World",
  });
});

/** endpoints
 * POST /users/ - create user and return user  | feito
 * GET /users/login - login user and return user
 */

app.post("/users", async (req, res) => {
  const { username, email, password, name } = req.body;

  const verifyUser = await prisma.users.findFirst({
    where: {
      OR: [{ username: username }, { email: email }],
    },
  });

  if (verifyUser) {
    return res.status(200).json({
      error: true,
      message: "User already exists",
    });
  }

  const user = await prisma.users.create({
    data: {
      username,
      email,
      password,
      name,
    },
  });

  console.info(`Created user with id ${user.id}`);
  res.status(200).json({ error: false, message: "User created", user });
});

app.post("/users/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(200).json({
      error: true,
      message: "Username or password is incorrect",
    });
  }

  const user = await prisma.users.findFirst({
    where: {
      username,
      password
    },
  });

  if (!user) {
    return res.status(200).json({
      error: true,
      message: "Username or password is incorrect",
    });
  }
});

const server = app.listen(3094, () =>
  console.log(`
🚀 Server ready at: http://localhost:3094`)
);
