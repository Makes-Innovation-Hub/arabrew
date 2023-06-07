import { conversationGenerator } from "../../translation/openAI.js";

const generateTopicsFromOpenAI = async (user1, user2) => {
  return await conversationGenerator(user1, user2);
};

export default generateTopicsFromOpenAI;
