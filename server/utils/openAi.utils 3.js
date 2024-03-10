import { sendPromptToOpenAi } from "./util.js";

export const checkProfanity = async (msg) => {
  const prompt = `is the text profanity? answer only "true" or "false" : ${msg}`;
  const response = await sendPromptToOpenAi(prompt);
  const isProfanity = response.data.choices[0].message.content
    .toLowerCase()
    .includes("true");
  return isProfanity;
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
