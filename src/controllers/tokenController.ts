import { NextFunction, Response } from "express";

import { AuthRequest } from "../domain/User";

import * as tokenService from "../services/tokenService";

export const generateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { refreshToken, userId } = req.body;

  tokenService
    .generateToken(refreshToken, +userId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
};
