import { asyncHandler } from "../utils/index.js";
import { controllerLogger, timingLogger } from "./logger.js";
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
  timingLogger("filterByInterests", startTime);
  next();
});
