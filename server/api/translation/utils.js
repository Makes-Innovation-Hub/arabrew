import fetch from "node-fetch";

export const saveMsgToDB = async (
  url,
  userId1,
  userId2,
  originalMsg,
  translatedMsg
) => {
  const response = await fetch(`${url}/${userId1}/${userId2}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      originalMsg: originalMsg,
      translatedMsg: translatedMsg,
    }),
  });
};
