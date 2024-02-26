import express from "express";
import { filterByInterests } from "../middleware/user.middleware.js";
import {
  registerUser,
  getUsersByInterests,
  getAllUsers,
  getUserByName,
  getUser,
  getWorkUsers,
} from "../controllers/user.controllers.js";
import { requestLogger } from "../middleware/logger.js";
import { validateToken } from "../middleware/verifyUserToken.js";
const router = express.Router();
router.use(requestLogger);
router.route("/register").post(registerUser);
router.route("/get-work-users").get(validateToken, getWorkUsers);
router.route("/:subId").get(getUser);
router
  .route("/:subId/get-users")
  .get(filterByInterests, getUsersByInterests, getAllUsers);
router.route("/:userName").get(getUserByName);
export default router;
