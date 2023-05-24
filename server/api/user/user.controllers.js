import asyncHandler from "../../middleware/asyncHandler.js";
import User from "./user.js";

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
