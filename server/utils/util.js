import { newestMessage } from "../api/index.js";

export const isAddMessageSuccess = (messagesHistory, content) => {
  const newestMsg = newestMessage(messagesHistory);
  let isSame = newestMsg.content === content ? newestMsg : false;
  if (isSame) isSame = JSON.parse(JSON.stringify(isSame));

  isSame.id = isSame._id;
  delete isSame._id;
  console.log(isSame);

  return isSame;
};
