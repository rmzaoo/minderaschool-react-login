import { Prisma, PrismaClient } from "@prisma/client";
import { verify } from "crypto";
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const saltRounds = 10;

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
 * POST /emails/send - send email contact
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

  const hash = bcrypt.hashSync(password, saltRounds);

  const user = await prisma.users.create({
    data: {
      username,
      email,
      password: hash,
      name,
    },
  });

  console.info(`Created user with id ${user.id}`);
  const { password: _, ...userWithoutPassword } = user;
  res
    .status(200)
    .json({ error: false, message: "User created", userWithoutPassword });
});

app.post("/users/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(200).json({
      error: true,
      message: "Username or password is incorrect",
    });
  }

  let user = await prisma.users.findFirst({
    where: {
      username
    },
  });

  if (!user) {
    return res.status(200).json({
      error: true,
      message: "Username or password is incorrect",
    });
  }

  const verifyPassword= bcrypt.compareSync(password, user.password); 

  const { password: _, ...userWithoutPassword } = user;

  if (!verifyPassword) {
    return res.status(200).json({
      error: true,
      message: "Username or password is incorrect",
    });
  }

  jwt.sign(
    { user: userWithoutPassword },
    "secretkey",
    (err: any, token: any) => {
      res.status(200).json({
        error: false,
        message: "User logged in",
        user: token,
      });
    }
  );
});

app.get("/users/checklogin", verifyToken, async (req, res) => {
  res.status(200).json({
    error: false,
    message: "User logged in",
    user: req.body.token,
  });
});

app.post("/emails/send", async (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(200).json({
      error: true,
      message: "Email, subject or message is incorrect",
    });
  }

  //implementation of email sending, but I dont have a mail server, so let's just return a message ¯\_(ツ)_/¯
  console.info(`Email sent to ${email}`);
  res.status(200).json({ error: false, message: "Email sent" });
});

function verifyToken(req: any, res: any, next: any) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.body.token = bearerToken;
    jwt.verify(bearerToken, "secretkey", (err: any, decoded: any) => {
      if (err) {
        return res.status(200).json({
          error: true,
          message: "User not logged in",
        });
      } else {
        next();
      }
    });
  } else {
    return res.status(200).json({
      error: true,
      message: "User not logged in",
    });
  }
}

const server = app.listen(3094, () =>
  console.log(`
🚀 Server ready at: http://localhost:3094`)
);
