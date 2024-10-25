import express from "express";
import { getAdminJobs, postJob } from "../controllers/jobs.controller.js";

 
const router = express.Router();

router.route("/post").post(postJob);
router.route("/getadminjobs").get(getAdminJobs);

export default router;