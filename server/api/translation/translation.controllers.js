import asyncHandler from "../../middleware/asyncHandler.js";
import { checkProfanity, translateMsg } from "./openAI.js";
import {
  PROFANITY_MSG_HE,
  PROFANITY_MSG_AR,
  CHAT_BASE_URL,
} from "../../utils/constants.js";
import { saveMsgToDB } from "./utils.js";
import {
  controllerLogger,
  timingLogger,
  successLogger,
  errorLogger,
  eventLogger,
} from "../../middleware/logger.js";

export const messageController = asyncHandler(async (req, res, next) => {
  // Logging controller event
  controllerLogger("messageController", req.params, "Handling message");

  const startTime = Date.now();
  try {
    const isProfanity = await checkProfanity(req.body.data);
    if (isProfanity) {
      eventLogger("found profanity", req.body.data);

      //logging timing
      timingLogger("messageController", startTime);

      // Logging after the service ends successfully
      successLogger("messageController", {
        foundProfanity: isProfanity,
        message: req.body.data,
        originLanguage: req.params.original_lang,
      });

      return res.status(200).json({
        success: true,
        data:
          req.params.original_lang === "hebrew"
            ? PROFANITY_MSG_HE
            : PROFANITY_MSG_AR,
      });
    }

    let translatedMsg = await translateMsg(
      req.body.data,
      req.params.original_lang,
      req.params.target_lang
    );

    saveMsgToDB(
      CHAT_BASE_URL,
      req.params.user1,
      req.params.user2,
      req.body.data,
      translatedMsg
    );

    // Logging timing
    timingLogger("messageController", startTime);

    // Logging after the service ends successfully
    successLogger("messageController", {
      originalLang: req.params.original_lang,
      targetLang: req.params.target_lang,
      originalMsg: req.body.data,
      translatedMsg,
    });
    return res.status(200).json({
      success: true,
      data: translatedMsg,
    });
  } catch (error) {
    // Logging error
    errorLogger(error, req, res, next);

    next(error);
  }
});
