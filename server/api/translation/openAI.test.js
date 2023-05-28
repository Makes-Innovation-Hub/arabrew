import assert from "assert";
import { checkProfanity, translateMsg } from "./openAI.js";

describe("open ai api tests", () => {
  describe("translation test", () => {
    it("should translate from hebrew to arabic : שלום", async function () {
      const result = await translateMsg(
        "please translate from hebrew to arabic : שלום",
        "hebrew",
        "arabic"
      );
      console.log("result", result);
      assert.equal(true, result.includes("مرحبا") || result.includes("السلام"));
    });
  });
  describe("profanity test", () => {
    it("should return : false", async function () {
      const result = await checkProfanity("good morning");
      console.log("result", result);
      assert.equal(result, false);
    });
  });
});
