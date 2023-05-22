import asyncHandler from "../../middleware/asyncHandler.js";
import runPrompt from "./openAI.js";

export const translateMsg = asyncHandler(async (req, res, next) => {
  let translated = await runPrompt(
    req.body.data,
    req.params.original_lang,
    req.params.target_lang
  );

  return res.status(200).json({
    success: true,
    data: translated,
  });
});
