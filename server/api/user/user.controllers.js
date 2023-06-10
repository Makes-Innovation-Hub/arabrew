import asyncHandler from "../../middleware/asyncHandler.js";
import User from "./user.js";
import {
  controllerLogger,
  databaseLogger,
  timingLogger,
  successLogger,
  errorLogger,
} from "../../middleware/logger.js";

Array.prototype.sortByMatching = function () {
  return this.sort((a, b) => b.sortBy - a.sortBy);
};

//$ @desc    register new User
//$ @route   POST /api/user/register
//! @access  NOT SET YET
export const registerUser = asyncHandler(async (req, res, next) => {
  const userInfo = req.body;
  controllerLogger("registerUser", { userInfo }, "Registering new user");

  const startTime = Date.now();
  try {
    const newUser = await User.create(userInfo);
    if (!newUser) {
      errorLogger("error registering user", req, res, next);
      return next(new Error("error registering user", newUser));
    }
    successLogger("registerUser", "User registration succeeded");

    timingLogger("registerUser", startTime);
    return res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (err) {
    errorLogger(err, req, res, next);
    next(err);
  }
});

export const getUser = asyncHandler(async (req, res, next) => {
  const { subId } = req.params;

  const user = await User.findOne({ subId: subId });

  if (!user) {
    return next(new Error("User not found"));
  }

  return res.status(200).json({
    success: true,
    data: user,
  });
});

//$ @desc    find friends by interests Array, (user id to execlude him )
//$ @route   GET /api/user/:subId/get-users?interests=Dancing,Gaming...
//! @access  NOT SET YET
export const getUsersByInterests = asyncHandler(async (req, res, next) => {
  controllerLogger(
    "getUsersByInterests",
    req.params,
    "Finding users by interests"
  );
  const startTime = Date.now();
  try {
    if (!req.interests) {
      // Logging timing
      timingLogger("getUsersByInterests", startTime);
      return next();
    }
    const { subId } = req.params;
    const interests = req.interests || null;
    const usersInterests = interests
      ? { "userDetails.interests": { $in: interests } }
      : {};

    // Logging database query
    databaseLogger("Service: getUsersByInterests, Find by subId", req.params);
    const matchingUsers = await User.find({
      subId: { $ne: subId },
      ...usersInterests,
    }).lean();
    if (!matchingUsers || matchingUsers.length < 1) {
      // Logging timing
      timingLogger("getUsersByInterests", startTime);
      return next();
    }

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

    // Logging timing
    timingLogger("getUsersByInterests", startTime);

    // Logging after the service ends successfully
    successLogger("getUsersByInterests", {
      interests: interests,
      matchingUsers: sorted_matchingUsers,
    });

    res.status(200).json({
      success: true,
      data: sorted_matchingUsers,
    });
  } catch (err) {
    errorLogger(err, req, res, next);
    next(err);
  }
});

//$ @desc    get all users in random order (execlude the logged user)
//$ @route   GET /api/user/:subId/get-users
//! @access  NOT SET YET
export const getAllUsers = asyncHandler(async (req, res, next) => {
  // Logging before the service starts
  controllerLogger("getAllUsers", req.params, "Getting all users");
  const startTime = Date.now();
  try {
    const { subId } = req.params;

    // Logging database query
    databaseLogger("Service: getAllUsers, User.find by subID", req.params);
    let allUsers = await User.find({
      subId: { $ne: subId },
    }).lean();
    if (!allUsers || allUsers.length < 1) {
      errorLogger("Db is Empty, or minor Error", req, res, next);
      return next(new Error("Db is Empty, or minor Error"));
    }
    allUsers = allUsers.map((user) => {
      delete user._id;
      return user;
    });
    allUsers = allUsers.sort(() => Math.random() - 0.5);

    // Logging timing
    timingLogger("getAllUsers", startTime);

    // Logging after the service ends successfully
    successLogger("getAllUsers", "All users fetched");
    res.status(200).json({
      success: true,
      data: allUsers,
    });
    next();
  } catch {
    errorLogger(err, req, res, next);
    next(err);
  }
});
