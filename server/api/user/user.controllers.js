import User from "./user.js";
import { asyncHandler } from "../index.js";

Array.prototype.sortRandomly = function () {
  return this.sort((a, b) => b.sortBy - a.sortBy);
};

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

export const getUsersByInterests = asyncHandler(async (req, res, next) => {
  if (!req.interests) return next();
  const { userId } = req.params;
  const interests = req.interests || null;
  const usersInterests = interests
    ? { "userDetails.interests": { $in: interests } }
    : {};
  const matchingUsers = await User.find({
    _id: { $ne: userId },
    ...usersInterests,
  }).lean();
  if (!matchingUsers || matchingUsers.length < 1) return next();

  let sorted_matchingUsers = matchingUsers
    .map((user) => {
      const { userDetails } = user;
      const matching_interests_number = interests.reduce((total, current) => {
        return userDetails.interests.includes(current)
          ? (total += 1)
          : total + 0;
      }, 0);

      return {
        sortBy: matching_interests_number,
        ...user,
      };
    })
    .sortRandomly();
  sorted_matchingUsers.forEach((user) => {
    delete user.sortBy;
  });
  res.status(200).json({
    success: true,
    data: sorted_matchingUsers,
  });
});

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const { userId } = req.params;
  const allUsers = await User.find({
    _id: { $ne: userId },
  });
  if (!allUsers || allUsers.length < 1)
    return next(new Error("Db is Empty, or minor Error"));
  res.status(200).json({
    success: true,
    data: allUsers,
  });
});
