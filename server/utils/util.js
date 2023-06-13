import { newestMessage } from "../api/index.js";

export const isAddMessageSuccess = (messagesHistory, content) => {
  const newestMsgContent = newestMessage(messagesHistory);
  const isSame = newestMsgContent === content ? true : false;
  console.log(newestMsgContent);
  return isSame;
};
