import { asyncHandler } from "../index.js";
import { controllerLogger } from "../../middleware/logger.js";

export const filterByInterests = asyncHandler(async (req, res, next) => {
  const { interests } = req.query;
  const startTime = Date.now();

  // Logging before the service starts
  controllerLogger(
    "filterByInterests",
    { interests },
    "Filtering by interests"
  );
  if (!interests) return next();
  const interestsArr = JSON.stringify(interests);
  req.interests = JSON.parse(interestsArr).split(",");
  delete req.query;
  // Logging timing
  timingLogger("filterByInterests", startTime);
  next();
});
