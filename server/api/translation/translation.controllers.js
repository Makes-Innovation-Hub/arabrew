import asyncHandler from "../../middleware/asyncHandler.js";
import runPrompt from "./openAI.js";

export const translateMsg = asyncHandler(async (req, res, next) => {
  const PROFANITY_MSG =
    "ההודעה שלך נחסמה, נא שמור על שיח נימוסי ומתקשר .تم حظر رسالتك ، يرجى إبقاء المحادثة مهذبة ومتصلة";
  const translated = runPrompt(
    req.body,
    req.params.original_lang,
    req.params.target_lang
  );

  if (translated === "Profanity") {
    return next(new Error(PROFANITY_MSG));
  }

  return res.status(200).json({
    success: true,
    data: translated,
  });
});
