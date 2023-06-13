export const isAddMessageSuccess = (messagesHistory, createdAt) => {
  messagesHistory.sort((a, b) => b.createdAt - a.createdAt);
  const newestMsgTime = messagesHistory[0].createdAt;
  const isSameTime = newestMsgTime === createdAt ? true : false;
  return isSameTime;
};
