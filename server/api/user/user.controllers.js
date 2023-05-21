import asyncHandler from "../../middleware/asyncHandler.js";
import User from "./user.js";
import { log } from "../../helpers/logger.js";

export const registerUser = asyncHandler(async (req, res, next) => {
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

export const getUserBySubId = asyncHandler(async (req, res, next) => {
  const { subId } = req.params;

  const userDoc = await User.findOne({ subId: subId });

  if (!userDoc) {
    return next(new Error("user NotFound", userDoc));
  }

  res.status(200).json({
    success: true,
    data: userDoc,
  });
});
