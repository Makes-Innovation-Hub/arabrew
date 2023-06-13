// import assert from "assert";
// import fetch from "node-fetch";
// import mongoose from "mongoose";
// import User from "../server/api/user/user.js";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// dotenv.config({ path: __dirname + "/../server/.env" });
// const PORT = process.env.PORT;

// describe("user creations tests", function () {
//   this.timeout(10000);
//   describe("save user in db test", () => {
//     it("should return a 201 status code", async function () {
//       const myHeaders = { "Content-Type": "application/json" };

//       const body = {
//         subId: -10,
//         name: "testUser",
//         avatar: "123",
//         userDetails: {
//           nativeLanguage: "HE",
//           interests: [
//             "swimming",
//             "programming",
//             "sleeping",
//             "playing",
//             "resting",
//           ],
//           yearOfBirth: "2000",
//           nationality: "Israel",
//           address: "Haifa",
//           gender: "Male",
//           occupation: "Doctor",
//           bio: "I Love People",
//         },
//       };

//       const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: JSON.stringify(body),
//       };

//       const res = await fetch(
//         `${process.env.URL}:${process.env.PORT}/api/user/register`,
//         requestOptions
//       );
//       assert.strictEqual(res.status, 201);
//     });
//   });

//   describe("get user from db test", () => {
//     it("should GET the specific user by subId", async function () {
//       const myHeaders = { "Content-Type": "application/json" };

//       const requestOptions = {
//         method: "GET",
//         headers: myHeaders,
//       };

//       const res = await fetch(
//         `${process.env.URL}:${process.env.PORT}/api/user/-10`,
//         requestOptions
//       );
//       assert.equal(res.status, 200);
//     });
//   });

//   describe("delete user from db test", () => {
//     it("should DELETE the specific user ", async function () {
//       let conn;
//       try {
//         conn = await mongoose.connect(process.env.MONGO_URI, {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//         });
//         await User.findOneAndDelete({ subId: "-10" });
//       } catch (error) {
//         console.error("Error deleting user:", error);
//       } finally {
//         await conn.disconnect();
//       }
//     });
//   });
// });
