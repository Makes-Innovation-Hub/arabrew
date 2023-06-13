// import assert from "assert";
// import {
//   checkProfanity,
//   translateMsg,
// } from "../server/api/translation/openAI.js";

// describe("open ai api tests", () => {
//   describe("translation test", () => {
//     it("should translate from hebrew to arabic : שלום", async function () {
//       this.timeout(5000);
//       const result = await translateMsg("שלום", "hebrew", "arabic");
//       console.log("result", result);
//       assert.equal(
//         true,
//         result.includes("مرحبا") ||
//           result.includes("السلام") ||
//           result.includes("Salam")
//       );
//     });
//   });
//   describe("profanity test", () => {
//     it("should return : true", async function () {
//       const result = await checkProfanity("good morning stupid ass hole");
//       assert.equal(result, true);
//     });
//   });
// });
