const runPrompt = require('./utils/OpenAI.js');

const question_EN_HE = `translate from english to hebrew : "Hello World 1"`;

const getResult = async () => {
  const result = await runPrompt(question_EN_HE);
  console.log(result);
};

getResult();