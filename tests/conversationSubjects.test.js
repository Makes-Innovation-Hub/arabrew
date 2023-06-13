import assert from "assert";
import fetch from "node-fetch";
import mongoose from "mongoose";
import User from "../server/api/user/user.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: __dirname + "/../server/.env" });

describe("generate topics api end-point test", async function () {
  const myHeaders = { "Content-Type": "application/json" };
  const subIdArr = [];

  this.beforeAll(async function () {
    subIdArr[0] = Math.round(Math.random() * 100) * -1;
    subIdArr[1] = Math.round(Math.random() * 100) * -1;

    while (subIdArr[0] === subIdArr[1]) {
      subIdArr[1] = Math.round(Math.random()) * 100 * -1;
    }

    const body1 = {
      subId: subIdArr[0] + "",
      name: "testuser1",
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
    };
    const requestOptions1 = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body1),
    };
    const body2 = {
      subId: subIdArr[1] + "",
      name: "testuser2",
      avatar: "456",
      userDetails: {
        nativeLanguage: "HE",
        interests: [
          "basketball",
          "programming",
          "sleeping",
          "soccer",
          "fishing",
        ],
        yearOfBirth: "1995",
        nationality: "Italy",
        address: "Haifa",
        gender: "Male",
        occupation: "Dog Doctor",
        bio: "I Love People and pets",
      },
    };
    const requestOptions2 = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body2),
    };
    const res1 = await fetch(
      `${process.env.BASE_URL}:${process.env.PORT}/api/user/register`,
      requestOptions1
    );
    const res2 = await fetch(
      `${process.env.BASE_URL}:${process.env.PORT}/api/user/register`,
      requestOptions2
    );
  });

  it("should GET conversation topics", async function () {
    this.timeout(5000);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    const testUser1 = "testuser1";
    const testUser2 = "testuser2";
    const res = await fetch(
      `${process.env.BASE_URL}:${process.env.PORT}/api/user/generate-topics/${testUser1}/${testUser2}`,
      requestOptions
    );
    const data = await res.json();
    assert.equal(true, data.data[0].suggestion.length > 0);
  });

  this.afterAll(async function () {
    let conn;
    try {
      conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await User.findOneAndDelete({ subId: subIdArr[0] + "" });
      await User.findOneAndDelete({ subId: subIdArr[1] + "" });
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      await conn.disconnect();
    }
  });
});
