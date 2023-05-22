import path from "path";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROFANITY_MSG = `ההודעה שלך נחסמה, נא שמור על שיח נימוסי ומתקשר تم حظر رسالتك ، يرجى إبقاء المحادثة مهذبة ومتصلة`;

dotenv.config({ path: __dirname + "/../.env" });

const init = () => {
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  });
  return new OpenAIApi(config);
};

const openAiInit = async (openai, prompt) => {
  return await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
};

const runPrompt = async (prompt, from, to) => {
  const openai = init();
  const isProfanity = await openAiInit(
    openai,
    `is the text profanity? answer only "true" or "false" : ${prompt}`
  );

  if (
    isProfanity.data.choices[0].message.content.toLowerCase().includes("true")
  ) {
    return PROFANITY_MSG;
  }

  const response = await openAiInit(
    openai,
    `translate from ${from} to ${to}: ${prompt}`
  );

  return response.data.choices[0].message.content;
};

export default runPrompt;
