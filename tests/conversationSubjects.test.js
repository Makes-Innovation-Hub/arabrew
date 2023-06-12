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

describe("generate topics api end-point test", function () {
  before(async function () {
    const myHeaders = { "Content-Type": "application/json" };

    const body1 = {
      subId: "-1",
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

    const res1 = await fetch(
      `${process.env.URL}:${process.env.PORT}/api/user/user-data`,
      requestOptions1
    );

    const body2 = {
      subId: "-2",
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

    const res2 = await fetch(
      `${process.env.URL}:${process.env.PORT}/api/user/user-data`,
      requestOptions2
    );
  });

  after(async function () {
    let conn;
    try {
      conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await User.findOneAndDelete({ subId: -1 });
      await User.findOneAndDelete({ subId: -2 });
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      await conn.disconnect();
    }
  });

  it("should GET conversation topics", async function () {
    this.timeout(5000);

    const requestOptions = {
      method: "GET",
    };

    const testUser1 = "testuser1";
    const testUser2 = "testuser2";

    const res = await fetch(
      `${process.env.URL}:${process.env.PORT}/api/user/generate-topics/${testUser1}/${testUser2}`,
      requestOptions
    );

    const data = await res.json();
    console.log("data", data);
    assert.equal(true, data.data[0].suggestion.length > 0);
  });
});
