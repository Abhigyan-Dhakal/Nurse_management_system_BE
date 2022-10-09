import { NextFunction, Request, Response } from "express";
import CustomError from "../misc/CustomError";
import * as loginService from "../services/loginService";

export const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  loginService
    .login({ email, password })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(new CustomError("Bad request!", 400));
    });
};
