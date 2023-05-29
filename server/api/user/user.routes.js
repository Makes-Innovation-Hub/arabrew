import express from "express";

import { registerUser, getUser } from "./user.controllers.js";

const router = express.Router();
router.route("/user-data").post(registerUser);
router.route("/:subId").get(getUser);

export default router;
