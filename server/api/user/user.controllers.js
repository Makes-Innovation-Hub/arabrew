import asyncHandler from "../../middleware/asyncHandler.js";
import User from "./user.js";
import { log } from "../../helpers/logger.js";

export const registerUser = asyncHandler(async (req, res, next) => {
  //! all logger options use instead of console.log or console.le error or etc...
  //! becasue console.<options>  are synchronous while pino is asynchronous
  log.info("log.info");
  log.debug("log.debug");
  log.warn(" log.warn");
  log.error(" log.error");

  const userInfo = req.body;
  const newUser = await User.create(userInfo);
  if (!newUser) {
    return next(new Error("error registering user", newUser));
  }
  return res.status(200).json({
    success: true,
    data: newUser,
  });
});
