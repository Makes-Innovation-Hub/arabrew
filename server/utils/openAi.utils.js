import { Configuration, OpenAIApi } from "openai";
import { PROFANITY_MSG_AR, PROFANITY_MSG_HE } from "./constants.js";
import { eventLogger } from "../middleware/logger.js";

export const sendPromptToOpenAi = async (prompt) => {
  const openai = new OpenAIApi(
    new Configuration({ apiKey: process.env.OPEN_AI_API_KEY })
  );
  return await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
};

export const checkProfanity = async (msg, origin_lang) => {
  eventLogger(`checking profanity in msg: ${msg}`);
  const prompt = `
  You are developing a text moderation system and need to implement a function that checks a given text for any form of profanity or hate speech. Your task is to create a function that takes a text input and returns True if the text contains any form of profanity, swear words, curse words, sexual content, racist or sexist messages, or hate speech, and False otherwise. The function should be able to handle a wide range of offensive language, including explicit words, derogatory slurs, and offensive phrases.
To accomplish this, your algorithm should consider the following factors when determining whether a text contains profanity or hate speech:
Explicit Profanity: Check for commonly known explicit profane words and their variations, including mild and strong expletives, vulgar terms, and sexually explicit language. It's crucial to account for creative spellings or substitutions, such as using symbols or numbers in place of letters (e.g., "f*ck" or "sh1t"). Maintain a comprehensive list of such words and variations.
Derogatory Slurs: Identify derogatory slurs or offensive terms targeting specific racial, ethnic, religious, or gender groups. Stay updated with commonly recognized slurs, but also be aware that offensive language can evolve rapidly. Regularly review and update your list of derogatory slurs to ensure accuracy.
Offensive Phrases: Detect offensive phrases that may include hate speech, discriminatory remarks, threats, or violent language. Consider both straightforward phrases and disguised or subtle expressions that convey harmful intentions. Maintain a database of known offensive phrases and keep it up to date to improve detection accuracy.
Contextual Analysis: Take into account the context in which certain words or phrases are used. While some words may be considered profane or offensive on their own, they may be used differently in certain contexts (e.g., medical or technical discussions). Analyze the surrounding words and sentence structure to reduce false positives and improve accuracy.
False Positive Reduction: Implement techniques to minimize false positives and avoid mistakenly flagging innocent or harmless content. Fine-tune your algorithm to account for innocuous words that may be flagged due to partial matches or coincidental letter combinations. Consider using advanced techniques like machine learning or natural language processing to improve accuracy and reduce false positives while maintaining a high detection rate.
the text can be in english, arabic or hebrew, so check profanity in any form in all 3 languages.
if the text includes profanity or hate speech - return only the word "true". else - return only the ward "false.
no explanations or descriptions needed other that just true/false as a result.
the text to check is: ${msg}`;

  // const prompt = `is there any profanity, swear words, curse words, rudeness or sexual topics, or hate speech of any kind in the following text? answer only "true" or "false".
  // the text can be in hebrew, arabic or english, so check in all 3 languages.
  // the text to check is: ${msg}`;
  const response = await sendPromptToOpenAi(prompt);
  eventLogger("profanity results: ", response.data.choices[0].message.content);
  const isProfanity = response.data.choices[0].message.content
    .toLowerCase()
    .includes("true");
  const profanity_alert_lang =
    origin_lang === "HE" ? PROFANITY_MSG_HE : PROFANITY_MSG_AR;
  const profanity_alert = isProfanity && profanity_alert_lang;
  return profanity_alert;
};

export const generateChatTopics = async (usersData) => {
  try {
    const prompt = `go over each key and value of this JSON: ${JSON.stringify(
      usersData
    )}.
        for each key and value in the object generate a conversation topic suggestion for people chatting 
        for the first time, and this key:value is the only thing they have in common. keep the suggestion short, but mention within it the key and values from the original object,
        for example: if the JSON includes a key called interests and a value of "reading", start the suggestion like so: "since both
        of your are interested in reading, why don't you talk about <suggestion specifics>".
        once you generated a suggestion, store it as is without any extra details or explanations inside js array.
        If the JSON is just an empty object - generate 5 general conversation topics.
        return the array once it has at least 5 values.
        `;
    const response = await sendPromptToOpenAi(prompt);
    return response.data.choices[0];
  } catch (error) {
    console.log("error generateChatTopics", error);
    return "";
  }
};
