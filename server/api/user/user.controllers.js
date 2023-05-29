import asyncHandler from "../../middleware/asyncHandler.js";
import User from "./user.js";

export const registerUser = asyncHandler(async (req, res, next) => {
  const userInfo = req.body;
  const newUser = await User.create(userInfo);
  if (!newUser) {
    return next(new Error("error registering user", newUser));
  }
  return res.status(201).json({
    success: true,
    data: newUser,
  });
});

export const deleteUser = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;

  const deletedUser = await User.findByIdAndDelete(userId);

  if (!deletedUser) {
    return next(new Error("User not found"));
  }

  return res.status(200).json({
    success: true,
    data: deletedUser,
  });
});

export const getUser = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;

  const user = await User.findById(userId);

  if (!user) {
    return next(new Error("User not found"));
  }

  return res.status(200).json({
    success: true,
    data: user,
  });
});

export const getUserByName = asyncHandler(async (req, res, next) => {
  const name = req.params.name;

  const user = await User.findOne(name);

  if (!user) {
    return next(new Error("User not found"));
  }

  return res.status(200).json({
    success: true,
    data: user,
  });
});
