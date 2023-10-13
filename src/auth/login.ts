// protect routes
import jwt from "jsonwebtoken";
import express, { Router, Request, Response, NextFunction } from "express";
import process, { env } from "node:process";
import bcrypt from "bcrypt";

const router = Router();

// a default fake user
// in real world, this will be a database!
const user = {
  id: "d4wd3hd3ew",
  name: "John Doe",
  email: "johndoe@mail.com",
  password: "_123456Z",
};

// register route
router.post("/register", (req: Request, res: Response) => {
  res.send("Register");
});

// login route
router.post("/login", async (req: Request, res: Response) => {
  const email = req.body?.email as string;
  const password = req.body?.password as string;

  // if not email or password return error or they are shorter than 6 characters
  if (!email || !password || password.length < 6) {
    return res.status(400).json({
      error: "Email and Password required",
    });
  }

  // check if the user exists
  if (email !== user.email || password !== user.password) {
    return res.status(400).json({
      error: "User not found",
    });
  }

  // create token
  const token_secret = process.env.TOKEN_SECRET as string;
  const token = jwt.sign(
    // payload data
    {
      name: user.email,
      id: user.id,
    },
    token_secret
  );

  res.header("auth-token", token).json({
    error: null,
    data: {
      token,
    },
  });
});

module.exports = router;
