export const newestMessage = (messagesArr) => {
  return messagesArr.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )[0];
};

export const latestMessage = (messagesArr) => {
  return messagesArr.sort((a, b) => a.date - b.date)[0];
};
