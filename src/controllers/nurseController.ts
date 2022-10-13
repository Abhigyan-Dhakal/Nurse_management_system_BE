import { NextFunction, Response } from "express";

import { AuthRequest } from "../domain/User";

import * as nurseService from "../services/nurseService";

/**
 * Get all the nurses details.
 * @param {AuthRequest} req
 * @param {Response} res
 * @param {NextFunction} next
 */

export const getAllNurses = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  nurseService
    .getAllNurses(req.authUser)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
};

/**
 * Fetch a nurse's details
 * @param {AuthRequest} req
 * @param {Response} res
 * @param {NextFunction} next
 */

export const getNurse = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { nurseId } = req.params;

  nurseService
    .getNurse(+nurseId, req.authUser)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
};

/**
 * Create a new nurse details
 * @param {AuthRequest} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export const addNurse = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const photograph = req.file?.path + "";
  const currentUser = req.authUser;

  const {
    name,
    isRoundingManager,
    workingDays,
    dutyStartTime,
    dutyEndTime,
    address,
    contact,
    email,
  } = req.body;

  nurseService
    .addNurse({
      name,
      photograph,
      user_id: currentUser,
      isRoundingManager,
      workingDays,
      dutyStartTime,
      dutyEndTime,
      address,
      contact,
      email,
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
};

/**
 * Remove a nurse
 * @param {AuthRequest} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export const removeNurse = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { nurseId } = req.params;

  nurseService
    .removeNurse(+nurseId, req.authUser)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
};

/**
 * Update a nurse's details
 * @param {AuthRequest} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export const updateNurse = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { nurseId } = req.params;
  const photograph = req.file?.path + "";
  const currentUser = req.authUser;
  const {
    name,
    isRoundingManager,
    workingDays,
    dutyStartTime,
    dutyEndTime,
    address,
    contact,
    email,
  } = req.body;

  nurseService
    .updateNurse({
      nurse_id: +nurseId,
      name,
      photograph,
      isRoundingManager,
      user_id: currentUser,
      workingDays,
      dutyStartTime,
      dutyEndTime,
      address,
      contact,
      email,
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
};
