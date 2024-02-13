import { Configuration, OpenAIApi } from "openai";

const sendPromptToOpenAi = async (prompt) => {
  const openai = new OpenAIApi(
    new Configuration({ apiKey: process.env.OPEN_AI_API_KEY })
  );
  return await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "assistant", content: prompt }],
  });
};

export const checkProfanity = async (msg) => {
  const prompt = `is the text profanity? answer only "true" or "false" : ${msg}`;
  const response = await sendPromptToOpenAi(prompt);
  const isProfanity = response.data.choices[0].message.content
    .toLowerCase()
    .includes("true");
  return isProfanity;
};

export const translateMsg = async (msg, original_lang, target_lang) => {
  const prompt = `translate from language ${original_lang} to language ${target_lang} this text: ${msg}. return only the translated message`;

  const response = await sendPromptToOpenAi(prompt);
  const translatedText = response.data.choices[0].message.content;
  return translatedText;
};
