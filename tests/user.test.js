import assert from "assert";
import fetch from "node-fetch";

describe("user creations tests", () => {
  describe("save user in db test", () => {
    it("should return a 201 status code", async function () {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = {
        subId: "17",
        name: "JohnDoe17",
        avatar: "123",
        userDetails: {
          nativeLanguage: "HE",
          interests: [
            "swimming",
            "programming",
            "sleeping",
            "playing",
            "resting",
          ],
          yearOfBirth: "2000",
          nationality: "Israel",
          address: "Haifa",
          gender: "Male",
          occupation: "Doctor",
          bio: "I Love People",
        },
        friends: ["A", "B", "C"],
      };

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      };

      const res = await fetch(
        "http://localhost:5050/api/user/user-data",
        requestOptions
      );
      assert.strictEqual(res.status, 201);
    });
  });

  describe("get user from db test", () => {
    it("should GET the specific user by id", async function () {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      const res = await fetch(
        "http://localhost:5050/api/user/id/6474785f4365ae70e2011061",
        requestOptions
      );
      assert.strictEqual(res.status, 200);
    });
  });

  describe("delete user from db test", () => {
    it("should DELETE the specific user ", async function () {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
      };

      const res = await fetch(
        `http://localhost:5050/api/user/id/6474785f4365ae70e2011061`,
        requestOptions
      );
      assert.strictEqual(res.status, 200);
    });
  });
});
