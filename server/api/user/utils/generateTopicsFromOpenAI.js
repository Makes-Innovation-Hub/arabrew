import { conversationGenerator } from "../../translation/openAI.js";

const generateTopicsFromOpenAI = async (user1, user2) => {
  const allInterests = [
    ...user1.userDetails.interests,
    ...user2.userDetails.interests,
  ];
  const commonInterests = findDuplicates(allInterests);
  return await conversationGenerator(commonInterests);
};

function findDuplicates(arr) {
  const duplicates = arr.reduce((acc, hobby) => {
    if (acc.hasOwnProperty(hobby)) {
      acc[hobby]++;
    } else {
      acc[hobby] = 1;
    }
    return acc;
  }, {});

  return Object.keys(duplicates).filter((hobby) => duplicates[hobby] > 1);
}

export default generateTopicsFromOpenAI;
