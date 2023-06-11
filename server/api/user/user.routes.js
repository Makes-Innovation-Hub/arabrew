import express from "express";
import { filterByInterests } from "./user.middleware.js";
import {
  registerUser,
  getUsersByInterests,
  getAllUsers,
  getUser,
} from "./user.controllers.js";
import { requestLogger } from "../../middleware/logger.js";
const router = express.Router();
router.use(requestLogger);
router.route("/user-data").post(registerUser);
router.route("/register").post(registerUser);
router.route("/:subId").get(getUser);
router
  .route("/:subId/get-users")
  .get(filterByInterests, getUsersByInterests, getAllUsers);

export default router;
