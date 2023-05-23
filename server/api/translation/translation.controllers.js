import asyncHandler from "../../middleware/asyncHandler.js";
import runPrompt from "./openAI.js";
import { PROFANITY_MSG_HE, PROFANITY_MSG_AR } from "../../utils/constants.js";

export const translateMsg = asyncHandler(async (req, res, next) => {
  let translated = await runPrompt(
    req.body.data,
    req.params.original_lang,
    req.params.target_lang
  );

  const url = "http://localhost:5050/arabrew/chat";

  const saveMsgToDB = async () => {
    const response = await fetch(
      `${url}/${req.params.user1}/${req.params.user2}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          originalMsg: req.body.data,
          translatedMsg: translated,
        }),
      }
    );

    const data = await response.json();
  };

  if (
    !translated.includes(PROFANITY_MSG_HE) &&
    !translated.includes(PROFANITY_MSG_AR)
  ) {
    saveMsgToDB();
  }

  return res.status(200).json({
    success: true,
    data: translated,
  });
});
