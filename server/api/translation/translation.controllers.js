import asyncHandler from "../../middleware/asyncHandler.js";
import { checkProfanity, translateMsg } from "./translation.services.js";
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
  controllerLogger("messageController", req.params, "Handling message");

  const startTime = Date.now();
  try {
    const isProfanity = await checkProfanity(req.body.data);
    if (isProfanity) {
      eventLogger("found profanity", req.body.data);

      timingLogger("messageController", startTime);

      successLogger("messageController", {
        foundProfanity: isProfanity,
        message: req.body.data,
        originLanguage: req.params.original_lang,
      });

      return res.status(200).json({
        success: true,
        isProfanity: true,
        data:
          req.params.original_lang === "hebrew"
            ? PROFANITY_MSG_HE
            : PROFANITY_MSG_AR,
      });
    }

    const translatedMsg = await translateMsg(
      req.body.data,
      req.params.original_lang,
      req.params.target_lang
    );

    timingLogger("messageController", startTime);

    successLogger("messageController", {
      originalLang: req.params.original_lang,
      targetLang: req.params.target_lang,
      originalMsg: req.body.data,
      translatedMsg,
    });
    return res.status(200).json({
      success: true,
      isProfanity: false,
      data: translatedMsg,
    });
  } catch (error) {
    errorLogger(error, req, res, next);

    next(error);
  }
});
