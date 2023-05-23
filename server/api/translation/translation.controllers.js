import asyncHandler from "../../middleware/asyncHandler.js";
import { checkProfanity, translateMsg } from "./openAI.js";
import {
  PROFANITY_MSG_HE,
  PROFANITY_MSG_AR,
  CHAT_BASE_URL,
} from "../../utils/constants.js";
import { saveMsgToDB } from "./utils.js";

export const messageController = asyncHandler(async (req, res, next) => {
  const isProfanity = await checkProfanity(
    req.body.data,
    req.params.original_lang,
    req.params.target_lang
  );

  if (isProfanity) {
    return res.status(200).json({
      success: true,
      data: original_lang === "hebrew" ? PROFANITY_MSG_HE : PROFANITY_MSG_AR,
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
    translated
  );

  return res.status(200).json({
    success: true,
    data: translatedMsg,
  });
});
