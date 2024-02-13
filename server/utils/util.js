import { newestMessage } from "../api/index.js";
import { Configuration, OpenAIApi } from "openai";
import { PROFANITY_MSG_AR, PROFANITY_MSG_HE } from "../constants/constants.js";

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
  const openai = new OpenAIApi(
    new Configuration({ apiKey: process.env.OPEN_AI_API_KEY })
  );
  return await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "assistant", content: prompt }],
  });
};
export const isProfanity = async (msg, origin_lang) => {
  try {
    const prompt = `is the text including profanity? answer only "true" or "false". the text to check is: ${msg}`;
    const response = await sendPromptToOpenAi(prompt);
    const isProfanity = response.data.choices[0].message.content
      .toLowerCase()
      .includes("true");
    const profanity_alert_lang =
      origin_lang === "HE" ? PROFANITY_MSG_HE : PROFANITY_MSG_AR;
    const profanity_alert = isProfanity && profanity_alert_lang;
    return profanity_alert;
  } catch (error) {
    console.log("error isProfanity", error.response.data);
    return {};
  }
};

export const unionObj = (obj1, obj2) => {
  const commonKeys = Object.keys(obj1).filter((key) =>
    obj2.hasOwnProperty(key)
  );
  const commonObj = {};
  for (const key of commonKeys) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      commonObj[key] = obj1[key].filter((val) => obj2[key].includes(val));
    } else if (
      obj1[key].toLowerCase().trim() === obj2[key].toLowerCase().trim()
    ) {
      commonObj[key] = obj1[key];
    }
  }
  return commonObj;
};
