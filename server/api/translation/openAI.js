import path from "path";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import { fileURLToPath } from "url";
import { PROFANITY_MSG_HE, PROFANITY_MSG_AR } from "../../utils/constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: __dirname + "/../.env" });

const init = () => {
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  });
  return new OpenAIApi(config);
};

const openAiSetupModel = async (openai, prompt) => {
  return await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
};

const runPrompt = async (prompt, from, to) => {
  const openai = init();
  const isProfanity = await openAiSetupModel(
    openai,
    `is the text profanity? answer only "true" or "false" : ${prompt}`
  );

  if (
    isProfanity.data.choices[0].message.content.toLowerCase().includes("true")
  ) {
    return from === "hebrew" ? PROFANITY_MSG_HE : PROFANITY_MSG_AR;
  }

  const response = await openAiSetupModel(
    openai,
    `translate from ${from} to ${to}: ${prompt}`
  );

  return response.data.choices[0].message.content;
};

export default runPrompt;
