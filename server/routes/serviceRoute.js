import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import {
  getServices,
  addService,
  deleteService,
  updateService,
} from "../controllers/serviceController.js";

const router = Router();

router.get("/", getServices);
router.post("/", verifyToken, addService);
router.delete("/:id", verifyToken, deleteService);
router.put("/:id", verifyToken, updateService);

export default router;
