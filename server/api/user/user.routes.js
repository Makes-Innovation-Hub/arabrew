import express from "express";
import { filterByInterests } from "./user.middleware.js";
import {
  registerUser,
  getUsersByInterests,
  getAllUsers,
  getUserByName,
} from "./user.controllers.js";
import { requestLogger } from "../../middleware/logger.js";
const router = express.Router();
router.use(requestLogger);
router.route("/register").post(registerUser);
router
  .route("/:subId/get-users")
  .get(filterByInterests, getUsersByInterests, getAllUsers);
router.route("/:userName").get(getUserByName);
export default router;
