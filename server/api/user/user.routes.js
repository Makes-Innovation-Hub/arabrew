import express from "express";
import { getUserBySubId, registerUser } from "./user.controllers.js";
const router = express.Router();

router.route("/").post(registerUser);
router.route("/:subId").get(getUserBySubId);

export default router;
