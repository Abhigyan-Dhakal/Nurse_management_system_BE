import { Router } from "express";
import * as nurseController from "../controllers/nurseController";
import storage from "../config/multer";

const router = Router();

// Nurse Routes
router.get("/", nurseController.getAllNurses);
router.get("/:nurseId", nurseController.getNurse);
router.post("/", storage.single("photograph"), nurseController.addNurse);
router.put(
  "/:nurseId",
  storage.single("photograph"),
  nurseController.updateNurse
);
router.delete("/:nurseId", nurseController.removeNurse);

export default router;
