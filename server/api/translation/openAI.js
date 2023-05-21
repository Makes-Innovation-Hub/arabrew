import path from "path";
import dotenv from "dotenv";
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
  // if (
  //   question.includes("from english to hebrew") ||
  //   question.includes("from english to arabic")
  // ) {
  //   return parsableJSONresponse.split("").reverse().join("");
  // } else {
  // return JSON.stringify(parsableJSONresponse);
  // }
};

const runPrompt = async (question, from, to) => {
  const openai = init();
  const prompt = `is the text profanity: <text>${question}</text> answer only "true" or "false"`;
  const isProfanity = await openAiInit(
    openai,
    `is the text profanity? answer only "true" or "false" : ${prompt}`
  );
  // console.log(isProfanity.data.choices[0].text.toLowerCase());
  if (isProfanity.data.choices[0].text.toLowerCase().includes("true")) {
    return "Profanity";
  }

  const response = await openAiInit(
    openai,
    `translate from ${from} to ${to}: ${question}`
  );
  const parsableJSONresponse = response.data.choices[0].text;

  return JSON.stringify(parsableJSONresponse.data);

  // return checkRTL(response, parsableJSONresponse);
};

export default runPrompt;
