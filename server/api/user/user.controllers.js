import asyncHandler from "../../middleware/asyncHandler.js";
import User from "./user.js";

Array.prototype.sortByMatching = function () {
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

export const getUsersByInterests = asyncHandler(async (req, res, next) => {
  if (!req.interests) return next();
  const { subId } = req.params;
  const interests = req.interests || null;
  const usersInterests = interests
    ? { "userDetails.interests": { $in: interests } }
    : {};
  const matchingUsers = await User.find({
    subId: { $ne: subId },
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
    .sortByMatching();
  sorted_matchingUsers.forEach((user) => {
    delete user.sortBy;
    delete user._id;
  });
  res.status(200).json({
    success: true,
    data: sorted_matchingUsers,
  });
});

export const getAllUsers = asyncHandler(async (req, res, next) => {
  console.log("its me again&&");
  const { subId } = req.params;
  let allUsers = await User.find({
    subId: { $ne: subId },
  }).lean();
  if (!allUsers || allUsers.length < 1)
    return next(new Error("Db is Empty, or minor Error"));
  allUsers = allUsers.map((user) => {
    delete user._id;
    return user;
  });
  allUsers = allUsers.sort(() => Math.random() - 0.5);
  res.status(200).json({
    success: true,
    data: allUsers,
  });
});
