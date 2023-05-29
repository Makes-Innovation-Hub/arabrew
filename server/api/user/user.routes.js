import express from "express";

import {
  registerUser,
  getUser,
  deleteUser,
  getUserByName,
} from "./user.controllers.js";

const router = express.Router();
router.route("/user-data").post(registerUser);

router.route("/id/:id").get(getUser).delete(deleteUser);

router.route("/name/:name").get(getUserByName);

export default router;
