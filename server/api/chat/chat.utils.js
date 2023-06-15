export const newestMessage = (messagesArr, name) => {
  messagesArr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return messagesArr[0].sender === name
    ? messagesArr[0].contentOriginal
    : messagesArr[0].contentTranslated;
};
