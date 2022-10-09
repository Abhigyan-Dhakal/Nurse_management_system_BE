import { Router } from "express";

import userRoutes from "./userRoutes";
import loginRoutes from "./loginRoutes";
import nurseRoutes from "./nurseRoutes";
import tokenRoutes from "./tokenRoutes";

import { authorize } from "../middlewares/authorize";

const router = Router();

router.use("/users", userRoutes);
router.use("/login", loginRoutes);
router.use("/generate-token", tokenRoutes);

// Middleware for user authorization
router.use(authorize);

// Add protected/private routes here
router.use("/nurses", nurseRoutes);

export default router;
