import { NextFunction, Response } from "express";
import CustomError from "../misc/CustomError";
import jwt from "jsonwebtoken";
import { AuthRequest, TokenData } from "../domain/User";

export const authorize = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  try {
    const payload = (await jwt.verify(
      accessToken as string,
      process.env.ACCESS_TOKEN_SECRET as string
    )) as TokenData;

    req.authUser = payload.user_id;

    next();
  } catch (err) {
    next(new CustomError("Invalid Access Token!", 401));
  }
};
