import { sendPromptToOpenAi } from "../../utils/openAi.utils.js";

export const translateMsg = async (msg, original_lang, target_lang) => {
  const prompt = `translate from language ${original_lang} to language ${target_lang} this text: ${msg}. return only the translated message`;

  const response = await sendPromptToOpenAi(prompt);
  const translatedText = response.data.choices[0].message.content;
  return translatedText;
};
