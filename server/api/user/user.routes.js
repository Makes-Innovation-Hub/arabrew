import express from "express";
import { registerUser, getUser } from "./user.controllers.js";
import { filterByInterests } from "./user.middleware.js";
import {
  registerUser,
  getUsersByInterests,
  getAllUsers,
} from "./user.controllers.js";

const router = express.Router();
router.route("/user-data").post(registerUser);
router.route("/register").post(registerUser);
router.route("/:subId").get(getUser);
router
  .route("/:subId/get-users")
  .get(filterByInterests, getUsersByInterests, getAllUsers);

export default router;
