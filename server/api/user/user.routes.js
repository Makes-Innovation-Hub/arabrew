import express from "express";
import { log } from "../../helpers/logger.js";
import { getUserBySubId, registerUser } from "./user.controllers.js";
const router = express.Router();

router.param("subId", (req, res, next, value) => {
  log.debug(value);

  next();
});

router.route("/").post(registerUser);
router.route("/:subId").get(getUserBySubId);

export default router;
