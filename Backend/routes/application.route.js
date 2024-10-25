import express from "express";
import { applyJob, updateStatus } from "../controllers/application.controller.js";

const router = express.Router();

router.route("/applying/:id").post(applyJob);
router.route("/postupdate").post(updateStatus);

export default router;