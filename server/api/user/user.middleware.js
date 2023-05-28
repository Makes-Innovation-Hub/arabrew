import { asyncHandler } from "../index.js";

export const filterByInterests = asyncHandler(async (req, res, next) => {
  const { interests } = req.query;

  if (!interests) return next();

  const interestsArr = JSON.stringify(interests);
  req.interests = JSON.parse(interestsArr).split(",");
  delete req.query;
  next();
});
