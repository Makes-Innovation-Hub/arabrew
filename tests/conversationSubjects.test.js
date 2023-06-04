import assert from "assert";
import fetch from "node-fetch";

describe("generate topics api end-point test", function () {
  it("should GET conversation topics array", async function () {
    this.timeout(5000);

    const requestOptions = {
      method: "GET",
    };

    const res = await fetch(
      `http://localhost:5090/api/user/generate-topics/Benny/Sean`,
      requestOptions
    );

    const data = await res.json();

    assert.equal("Reading", data.data[0].interest);
  });
});
