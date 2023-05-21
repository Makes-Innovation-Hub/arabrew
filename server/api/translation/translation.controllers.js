import asyncHandler from "../../middleware/asyncHandler.js";
import runPrompt from "./openAI.js";

export const translateMsg = asyncHandler(async (req, res, next) => {
  const PROFANITY_MSG =
    "ההודעה שלך נחסמה, נא שמור על שיח נימוסי ומתקשר .تم حظر رسالتك ، يرجى إبقاء المحادثة مهذبة ومتصلة";

  let translated = await runPrompt(
    req.body.data,
    req.params.original_lang,
    req.params.target_lang
  );

  if (translated === "Profanity") {
    translated = PROFANITY_MSG;
  } else {
  }

  return res.status(200).json({
    success: true,
    data: translated,
  });
});
