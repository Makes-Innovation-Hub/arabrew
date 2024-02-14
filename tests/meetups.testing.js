import assert from "assert";
import fetch from "node-fetch";
import mongoose from "mongoose";
// import chai from 'chai';
import { describe, it } from "mocha";
// import Meetup from "../server/models/meetup";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: __dirname + "../.env" });
const PORT = process.env.PORT;
const meetingId = Math.floor(Math.random() * 1000 + 1000);

describe("get all meeting from db test", () => {
  it("should GET All  meetings ", async function () {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    const res = await fetch(
      `http://localhost:${PORT}/api/meetup`,
      requestOptions
    );
    assert.equal(res.status, 200);
  });
});
