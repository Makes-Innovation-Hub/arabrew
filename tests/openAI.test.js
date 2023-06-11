import assert from "assert";
import {
  checkProfanity,
  translateMsg,
} from "../server/api/translation/openAI.js";

describe("open ai api tests", () => {
  describe("translation test", () => {
    it("should translate from hebrew to arabic : שלום", async function () {
      const result = await translateMsg("שלום", "hebrew", "arabic");
      assert.equal(true, result.includes("مرحبا") || result.includes("السلام"));
    });
  });
  describe("profanity test", () => {
    it("should return : false", async function () {
      const result = await checkProfanity("good morning");
      assert.equal(result, false);
    });
    it("should return : true", async function () {
      const result = await checkProfanity("go to hell");
      assert.equal(result, true);
    });
  });
});
