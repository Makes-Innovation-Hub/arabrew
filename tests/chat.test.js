import assert from "assert";
import fetch from "node-fetch";

describe("save message in db test", () => {
  it("should return a 200 status code", async function () {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var body = JSON.stringify({
      originalMsg: "mocha test",
      translatedMsg: "בדיקת מוקה",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: body,
    };

    const res = await fetch(
      "http://localhost:5050/api/chat/6469fe15a7083dcee2aa6908/646a044b706f6f3052b38045",
      requestOptions
    );
    console.log(res);
    assert.strictEqual(res.status, 200);
  });
});
