import { NextFunction, Request, Response } from "express";

import * as userService from "../services/userService";

import CustomError from "../misc/CustomError";

export const createUser = (req: Request, res: Response, next: NextFunction) => {
  const { first_name, last_name, contact, email, password } = req.body;

  userService
    .createUser({ first_name, last_name, contact, email, password })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(new CustomError("Bad request!", 400));
    });
};
