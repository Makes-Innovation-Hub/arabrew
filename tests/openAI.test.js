// import assert from "assert";
// import {
//   checkProfanity,
//   translateMsg,
// } from "../server/services/translation.services.js";

// describe("open ai api tests", () => {
//   describe("translation test", () => {
//     it("should translate from hebrew to arabic : שלום", async function () {
//       const result = await translateMsg(
//         "please translate from hebrew to arabic : שלום",
//         "hebrew",
//         "arabic"
//       );
//       assert.equal(result, "مرحبا (Marhaba)" || "مرحبا (Marhaban)" || "مرحبا");
//     });
//   });
//   describe("profanity test", () => {
//     it("should return : false", async function () {
//       const result = await checkProfanity("good morning");
//       assert.equal(result, false);
//     });
//     it("should return : true", async function () {
//       const result = await checkProfanity("good morning ass hole");
//       assert.equal(result, true);
//     });
//   });
// });
