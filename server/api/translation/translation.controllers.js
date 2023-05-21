import asyncHandler from "../../middleware/asyncHandler.js";
import runPrompt from "./openAI.js";

export const translateMsg = asyncHandler(async (req, res, next) => {
  const PROFANITY_MSG =
    "ההודעה שלך נחסמה, נא שמור על שיח נימוסי ומתקשר .تم حظر رسالتك ، يرجى إبقاء المحادثة مهذبة ومتصلة";

  // console.log("req.body.data", req.body.data);
  // console.log("req.params.original_lang", req.params.original_lang);
  // console.log("req.params.target_lang", req.params.target_lang);

  const translated = await runPrompt(
    req.body.data,
    req.params.original_lang,
    req.params.target_lang
  );

  // console.log("translated", translated);

  if (translated === "Profanity") {
    return next(new Error(PROFANITY_MSG));
  }

  return res.status(200).json({
    success: true,
    data: translated,
  });
});
