import assert from "assert";
import fetch from "node-fetch";
import mongoose from "mongoose";
import Chat from "../server/api/chat/chat.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: __dirname + "../.env" });
const PORT = process.env.PORT;
const userId = Math.floor(Math.random() * 1000 + 1000);

describe("get user from db test", () => {
  it("should GET the specific user by subId", async function () {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    const res = await fetch(
      `http://localhost:${PORT}/api/chat/logged/user/${userId}`,
      requestOptions
    );
    assert.equal(res.status, 200);
  });
});
