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
    messages: [{ role: "assistant", content: prompt }],
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
  console.log("msg", msg);
  console.log("original_lang", original_lang);
  console.log("target_lang", target_lang);
  const openai = new OpenAIApi(
    new Configuration({ apiKey: process.env.OPEN_AI_API_KEY })
  );
  const response = await sendPromptToOpenAi(
    openai,
    `translate from language ${original_lang} to language ${target_lang} this text: ${msg}. return only the translated message`
  );

  console.log(
    "response.data.choices[0].message.content",
    response.data.choices[0].message.content
  );

  return response.data.choices[0].message.content;
};
