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
const PORT = process.env.PORT || 5050;
const userId1 = Math.floor(Math.random() * 1000 + 1000);
const userId2 = Math.floor(Math.random() * 1000 + 1000);

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  methods: {
    GET: {
      method: "GET",
      headers: myHeaders,
    },
    POST: {
      method: "POST",
      headers: myHeaders,
    },
    PUT: {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify({ message: "שלום" }),
    },
    DELETE: {
      method: "DELETE",
      headers: myHeaders,
    },
  },
};

describe("user1 creation test", function () {
  this.timeout(10000);
  describe("save user in db test", () => {
    it("should return a 201 status code", async function () {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = {
        subId: userId1,
        name: `RANDOM${userId1}`,
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
        `http://localhost:${PORT}/api/user/register`,
        requestOptions
      );
      assert.strictEqual(res.status, 201);
    });
  });
});

describe("user2 creation test", function () {
  this.timeout(10000);
  describe("save user in db test", () => {
    it("should return a 201 status code", async function () {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = {
        subId: userId2,
        name: `RANDOM${userId2}`,
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
        `http://localhost:${PORT}/api/user/register`,
        requestOptions
      );
      assert.strictEqual(res.status, 201);
    });
  });
});

describe("create chat for two users", () => {
  it("should GET two existing user names and POST a new chat by these user names", async function () {
    const res_user1 = await fetch(
      `http://localhost:${PORT}/api/user/${userId1}`,
      requestOptions.methods.GET
    );

    const {
      data: { name: user_name1 },
    } = await res_user1.json();

    const res_user2 = await fetch(
      `http://localhost:${PORT}/api/user/${userId2}`,
      requestOptions.methods.GET
    );

    const {
      data: { name: user_name2 },
    } = await res_user2.json();

    const res_chat = await fetch(
      `http://localhost:${PORT}/api/chat/${user_name1}/${user_name2}`,
      requestOptions.methods.POST
    );

    assert.equal(res_chat.status, 200);
  });
});

describe("get user chat list with names and last message (if exist)", () => {
  it("should GET a name of an user and GET a list of all his existing chats", async function () {
    const res_user1 = await fetch(
      `http://localhost:${PORT}/api/user/${userId1}`,
      requestOptions.methods.GET
    );

    const {
      data: { name: user_name1 },
    } = await res_user1.json();

    const res = await fetch(
      `http://localhost:${PORT}/api/chat/logged/user/${user_name1}`,
      requestOptions.methods.GET
    );
    assert.equal(res.status, 200);
  });
});

describe("get a chat by names", () => {
  it("should GET both users name and GET their chat", async function () {
    const res_user1 = await fetch(
      `http://localhost:${PORT}/api/user/${userId1}`,
      requestOptions.methods.GET
    );

    const {
      data: { name: user_name1 },
    } = await res_user1.json();

    const res_user2 = await fetch(
      `http://localhost:${PORT}/api/user/${userId2}`,
      requestOptions.methods.GET
    );

    const {
      data: { name: user_name2 },
    } = await res_user2.json();

    const res = await fetch(
      `http://localhost:${PORT}/api/chat/${user_name1}/${user_name2}`,
      requestOptions.methods.GET
    );
    assert.equal(res.status, 200);
  });
});

describe("send a message in an existing chat", () => {
  it("should PUT a message in a chat. first user is the sender and the second user is the receiver", async () => {
    const res_user1 = await fetch(
      `http://localhost:${PORT}/api/user/${userId1}`,
      requestOptions.methods.GET
    );

    const {
      data: { name: user_name1 },
    } = await res_user1.json();

    const res_user2 = await fetch(
      `http://localhost:${PORT}/api/user/${userId2}`,
      requestOptions.methods.GET
    );

    const {
      data: { name: user_name2 },
    } = await res_user2.json();

    const res = await fetch(
      `http://localhost:${PORT}/api/chat/${user_name1}/${user_name2}`,
      requestOptions.methods.PUT
    );
    assert.equal(res.status, 200);
  });
});
