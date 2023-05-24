import express from "express";
import { filterByInterests } from "./user.middleware.js";
import {
  registerUser,
  getUserBySubId,
  getUsersByInterests,
  getAllUsers,
} from "./user.controllers.js";
const router = express.Router();
router.use(express.urlencoded({ extended: true }));

router.route("/").post(registerUser);
router.route("/:subId").get(getUserBySubId);
router
  .route("/find-users/:userId")
  .get(filterByInterests, getUsersByInterests, getAllUsers);
export default router;
