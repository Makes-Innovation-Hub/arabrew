import path from "path";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: __dirname + "/../../.env" });

const sendPromptToOpenAi = async (openai, prompt) => {
  return await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
};

export const checkProfanity = async (msg) => {
  const openai = new OpenAIApi(
    new Configuration({ apiKey: process.env.OPEN_AI_API_KEY })
  );
  const isProfanity = await sendPromptToOpenAi(
    openai,
    `is the text profanity? answer only "true" or "false" : ${msg}`
  );

  if (
    isProfanity.data.choices[0].message.content.toLowerCase().includes("true")
  ) {
    return true;
  } else {
    return false;
  }
};

export const translateMsg = async (msg, original_lang, target_lang) => {
  const openai = new OpenAIApi(
    new Configuration({ apiKey: process.env.OPEN_AI_API_KEY })
  );
  const response = await sendPromptToOpenAi(
    openai,
    `translate from ${original_lang} to ${target_lang}: ${msg}`
  );

  return response.data.choices[0].message.content;
};
