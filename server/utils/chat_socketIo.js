import { Chat } from "../api/index.js";
import { errorLogger, eventLogger } from "../middleware/logger.js";
import { checkProfanity, sendPromptToOpenAi } from "./openAi.utils.js";
export const access_chatCollection = async (usersArr) => {
  try {
    const usersArrSwitched = [usersArr[1], usersArr[0]];
    const findChat = await Chat.findOne({
      $or: [{ users: usersArr }, { users: usersArrSwitched }],
    });
    const isSuccess = findChat ? true : false;
    if (!isSuccess) {
      const newChat = await Chat.create({ users: usersArr });
      const isSuccess = newChat ? true : false;
      return isSuccess;
    }
    return isSuccess;
  } catch (error) {
    throw new Error(error);
  }
};

export const addMessageToChat = async (
  sender,
  reciever,
  content_AR,
  content_HE
) => {
  const { usersArr, usersArrSwitched } = {
    usersArr: [sender, reciever],
    usersArrSwitched: [reciever, sender],
  };
  eventLogger("Add chat msg", {
    sender,
    reciever,
    content_AR,
    content_HE,
  });
  const newMsgObj = {
    sender: sender,
    content_AR: content_AR,
    content_HE: content_HE,
    createdAt: new Date().toLocaleString("en-US", {
      timeZone: "Asia/Jerusalem",
      hour12: false,
      timeZoneName: "short",
    }),
  };
  const options = { new: true, runValidators: true };
  try {
    const updatedChat = await Chat.findOneAndUpdate(
      { $or: [{ users: usersArr }, { users: usersArrSwitched }] },
      { $push: { messagesHistory: newMsgObj } },
      options
    );
    const messagesHistory = updatedChat.messagesHistory;
    return newMsgObj;
  } catch (error) {
    console.log("error", error);
    throw new Error(error);
  }
};

export const CheckAndTranslateMsg = async (msg, origin_lang, target_lang) => {
  eventLogger("Translating msg start", { msg, origin_lang, target_lang });
  try {
    const profanity = await checkProfanity(msg, origin_lang);
    if (profanity) return { isProfanity: true, profanity: profanity };
    const prompt = `translate from language ${origin_lang} to language ${target_lang} this text: ${msg}. return only the translated message`;
    const response = await sendPromptToOpenAi(prompt);
    const translatedText = response.data.choices[0].message.content;
    eventLogger("Translating msg end", { translatedText });
    return { isProfanity: false, translatedMsg: translatedText };
  } catch (error) {
    console.log("error CheckAndTranslateMsg", error);
    console.log("error CheckAndTranslateMsg", error.response.data.error);
    return {};
  }
};
