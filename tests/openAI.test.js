import assert from "assert";
import { conversationGenerator } from "../server/api/translation/openAI.js";

describe("conversation subjects test", async function () {
  it("should array of objects that the first key is interest and the second key is subject ", async function () {
    this.timeout(5000);
    const result = await conversationGenerator(["Reading"]);
    const objectResult = JSON.parse(result);

    assert.equal("Reading", objectResult[0].interest);
  });
  it("should return at least one subject ", async function () {
    this.timeout(5000);
    const result = await conversationGenerator(["Reading"]);
    const objectResult = JSON.parse(result);

    assert.equal(true, objectResult[0].subject.length > 4);
  });
});
