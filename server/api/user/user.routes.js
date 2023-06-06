import express from "express";
import { filterByInterests } from "./user.middleware.js";
import {
  registerUser,
  getUsersByInterests,
  getAllUsers,
} from "./user.controllers.js";
import pino from "pino";

const router = express.Router();

const logger = pino();
router.use((req, res, next) => {
  const { url, method } = req;
  logger.info(`Incoming request - URL: api/user${url}, Method: ${method}`);

  next();
});
router.route("/register").post(registerUser);
router
  .route("/:subId/get-users")
  .get(filterByInterests, getUsersByInterests, getAllUsers);
export default router;
