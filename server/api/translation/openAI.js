const dotenv = require("dotenv");
import { Configuration, OpenAIApi } from "openai";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: __dirname + "/../.env" });

const init = () => {
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  });
  return new OpenAIApi(config);
};

const openAiInit = async (openai, prompt) => {
  return await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 2048,
    temperature: 1,
  });
};

const checkRTL = (question, parsableJSONresponse) => {
  if (
    question.includes("from english to hebrew") ||
    question.includes("from english to arabic")
  ) {
    return parsableJSONresponse.split("").reverse().join("");
  } else {
    return parsableJSONresponse;
  }
};

const runPrompt = async (question, from, to) => {
  const openai = init();
  const prompt = question;
  const isProfanity = await openAiInit(
    openai,
    `is the text profanity: <text>${prompt}</text> answer only "true" or "false"`
  );
  if (isProfanity === "true") {
    return "Profanity";
  }
  const response = await openAiInit(
    openai,
    `translate from ${from} to ${to}: ${prompt}`
  );
  const parsableJSONresponse = response.data.choices[0].text;

  return checkRTL(question, parsableJSONresponse);
};

export default runPrompt;
