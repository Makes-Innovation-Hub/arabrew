import assert from "assert";
import fetch from "node-fetch";

describe("save message in db test", () => {
  it("should return a 200 status code", async function (done) {
    this.timeout(5000);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var body = JSON.stringify({
      originalMsg: "testing",
      translatedMsg: "בודק",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: body,
    };

    const res = await fetch(
      "http://localhost:5050/api/chat/6469d8f248e79b74fce5a7aa/6469fe15a7083dcee2aa6908",
      requestOptions
    );
    console.log("res", res);
    assert.strictEqual(res.statusCode, 200);
    done();
  });
});
