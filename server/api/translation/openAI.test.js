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
      assert.equal(result, "مرحبا (Marhaba)" || "مرحبا (Marhaban)" || "مرحبا");
    });
  });
  describe("profanity test", () => {
    it("should return : true", async function () {
      const result = await checkProfanity("good morning ass hole");
      console.log("result", result);
      assert.equal(result, true);
    });
  });
});
