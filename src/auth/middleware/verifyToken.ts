// protect routes
import jwt from "jsonwebtoken";
import express, { Request, Response, NextFunction } from "express";
import { env } from "node:process";

// we need to extend the Request to add our verified token verification
interface CustomRequest extends Request {
  verified?: string | object;
}

// middleware to validate token
export const verifyToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  next();

  // check if the header has the token
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access Denied" });

  try {
    // verify token
    const token = env.TOKEN_SECRET as string;
    const verified = jwt.verify(token, token);

    // because we are using TS, adding verified propertie will gives a type error "verified does not exist on type Request". To fix this, we need to extend the Request interface
    req.verified = verified;

    // continue to the next middleware
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid Token" });
  }
};

//module.exports = verifyToken;
