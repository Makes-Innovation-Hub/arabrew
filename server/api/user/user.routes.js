import express from "express";
import { filterByInterests } from "./user.middleware.js";
import {
  registerUser,
  getUsersByInterests,
  getAllUsers,
  generateTopics,
} from "./user.controllers.js";
import { requestLogger } from "../../middleware/logger.js";
const router = express.Router();
router.use(requestLogger);
router.route("/register").post(registerUser);
router
  .route("/:subId/get-users")
  .get(filterByInterests, getUsersByInterests, getAllUsers);

router.route("/generate-topics/:user1_name/:user2_name").get(generateTopics);

export default router;
