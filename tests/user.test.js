import assert from "assert";
import fetch from "node-fetch";
import mongoose from "mongoose";
import User from "../server/api/user/user.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: __dirname + "../.env" });
const PORT = process.env.PORT;
const userId = Math.floor(Math.random() * 1000 + 1000);

describe("user creations tests", function () {
  this.timeout(10000);
  describe("save user in db test", () => {
    it("should return a 201 status code", async function () {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = {
        subId: userId,
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
        `http://localhost:${PORT}/api/user/user-data`,
        requestOptions
      );
      assert.strictEqual(res.status, 201);
    });
  });

  describe("get user from db test", () => {
    it("should GET the specific user by subId", async function () {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      const res = await fetch(
        `http://localhost:${PORT}/api/user/${userId}`,
        requestOptions
      );
      assert.equal(res.status, 200);
    });
  });

  describe("delete user from db test", () => {
    it("should DELETE the specific user ", async function () {
      let conn;
      try {
        conn = await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        await User.findOneAndDelete({ subId: userId });
      } catch (error) {
        console.error("Error deleting user:", error);
      } finally {
        await conn.disconnect();
      }
    });
  });
});
