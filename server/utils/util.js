import { newestMessage } from "../api/index.js";
import { Configuration, OpenAIApi } from "openai";
import { PROFANITY_MSG_AR, PROFANITY_MSG_HE } from "./constants.js";

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPEN_AI_API_KEY })
);

export const isAddMessageSuccess = (messagesHistory, content_HE) => {
  const newestMsg = newestMessage(messagesHistory);
  let isSame = newestMsg === content_HE ? newestMsg.content_HE : false;
  if (isSame) {
    isSame = JSON.parse(JSON.stringify(isSame));
    isSame.id = isSame._id;
    delete isSame._id;
  }
  return isSame;
};

export const sendPromptToOpenAi = async (prompt) => {
  return await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "assistant", content: prompt }],
  });
};
export const isProfanity = async (msg, origin_lang) => {
  const prompt = `is the text profanity? answer only "true" or "false" : ${msg}`;
  const response = await sendPromptToOpenAi(prompt);
  const isProfanity = response.data.choices[0].message.content
    .toLowerCase()
    .includes("true");
  const profanity_alert_lang =
    origin_lang === "HE" ? PROFANITY_MSG_HE : PROFANITY_MSG_AR;
  const profanity_alert = isProfanity && profanity_alert_lang;
  return profanity_alert;
};
