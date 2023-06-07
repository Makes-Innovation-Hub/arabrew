import assert from "assert";
import fetch from "node-fetch";
import mongoose from "mongoose";
import User from "../server/api/user/user.js";

const populateDBData = async () => {
  const body1 = {
    subId: "-1",
    name: "Benny-dev-test",
    avatar:
      "https://i.etsystatic.com/12726817/r/il/ed17fb/1135703162/il_794xN.1135703162_rt3p.jpg",
    userDetails: {
      nativeLanguage: "HE",
      interests: ["Soccer", "Backetball", "Football", "Volleyball", "Tennis"],
      yearOfBirth: 1982,
      nationality: "Israel",
      address: "Ramla",
      gender: "Male",
      occupation: "Fullstack Developer",
      bio: "hi, i'm Benny and this is my bio",
    },
  };

  const body2 = {
    subId: "-2",
    name: "Sean-dev-test",
    avatar:
      "https://i.etsystatic.com/37392344/r/il/6817f8/4232753487/il_794xN.4232753487_d7hk.jpg",
    userDetails: {
      nativeLanguage: "HE",
      interests: ["Painting", "Drawing", "Writing", "Cooking", "Reading"],
      yearOfBirth: 2000,
      nationality: "Israel",
      address: "Beer Sheva",
      gender: "Male",
      occupation: "actor",
      bio: "hi, i'm an actor and this is my bio",
    },
  };

  const body3 = {
    subId: "-3",
    name: "Saleh-dev-test",
    avatar:
      "https://i.etsystatic.com/32299656/r/il/101d33/4998278185/il_794xN.4998278185_m64e.jpg",
    userDetails: {
      nativeLanguage: "AR",
      interests: ["Reading", "Pop", "Rock", "Hip-hop", "Jazz"],
      yearOfBirth: 1995,
      nationality: "Israel",
      address: "Jerusalem",
      gender: "Male",
      occupation: "Programmer",
      bio: "hi, i'm Saleh and this is my bio",
    },
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body1),
  };

  await fetch("http://localhost:5090/api/user/register", requestOptions);

  requestOptions.body = JSON.stringify(body2);
  await fetch("http://localhost:5090/api/user/register", requestOptions);

  requestOptions.body = JSON.stringify(body3);
  await fetch("http://localhost:5090/api/user/register", requestOptions);

  await fetch(
    "http://localhost:5090/api/chat/Sean-dev-test/Saleh-dev-test",
    requestOptions
  );

  requestOptions.method = "PUT";
  requestOptions.body = JSON.stringify({
    sender: "Sean-dev-test",
    contentOriginal: "שלום",
    contentTranslated: "سلام",
  });
  await fetch(
    "http://localhost:5090/api/chat/Sean-dev-test/Saleh-dev-test",
    requestOptions
  );

  requestOptions.body = JSON.stringify({
    sender: "Saleh-dev-test",
    contentOriginal: "ما الأمر؟",
    contentTranslated: "מה המצב",
  });
  await fetch(
    "http://localhost:5090/api/chat/Saleh-dev-test/Sean-dev-test",
    requestOptions
  );
};

populateDBData();
