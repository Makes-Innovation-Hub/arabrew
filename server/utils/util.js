import { newestMessage } from "../api/index.js";
export const isAddMessageSuccess = (messagesHistory, content_HE) => {
  const newestMsg = newestMessage(messagesHistory);
  let isSame = newestMsg === content_HE ? newestMsg.content_HE : false;
  if (isSame) {
    isSame = JSON.parse(JSON.stringify(isSame));
    isSame.id = isSame._id;
    delete isSame._id;
  }
  return isSame;
};

export const unionObj = (obj1, obj2) => {
  const commonKeys = Object.keys(obj1).filter((key) =>
    obj2.hasOwnProperty(key)
  );
  const commonObj = {};
  for (const key of commonKeys) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      commonObj[key] = obj1[key].filter((val) => obj2[key].includes(val));
    } else if (
      obj1[key].toLowerCase().trim() === obj2[key].toLowerCase().trim()
    ) {
      commonObj[key] = obj1[key];
    }
  }
  return commonObj;
};
