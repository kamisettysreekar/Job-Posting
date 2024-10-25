import express from "express";
import { getCompany, getCompanyById, registerCompany,} from "../controllers/company.controller.js";
 
const router = express.Router();

router.route("/register").post(registerCompany);
router.route("/get").get(getCompany);
router.route("/get/:id").get(getCompanyById);
export default router;