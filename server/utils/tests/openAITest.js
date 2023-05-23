import assert from "assert";
import runPrompt from "../openAI.js";

describe("open ai api tests", () => {
  describe("translation test", () => {
    it("should translate hello to שלום", async function () {
      const result = await runPrompt(
        "please translate from english to hebrew : hello"
      );
      console.log("result", result);
      assert.equal(result, "שלום");
    });
  });
  describe("profanity test", () => {
    it("should return : ההודעה שלך נחסמה, נא שמור על שיח נימוסי ומתקשר.تم حظر رسالتك ، يرجى إبقاء المحادثة مهذبة ومتصلة", async function () {
      const result = await runPrompt("hello world ass hole");
      console.log("result", result);
      assert.equal(
        result,
        "ההודעה שלך נחסמה, נא שמור על שיח נימוסי ומתקשר.تم حظر رسالتك ، يرجى إبقاء المحادثة مهذبة ومتصلة"
      );
    });
  });
});
