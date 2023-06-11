import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    //* the unique subId that auth0 return after login/register
    subId: {
      type: String,
      unique: [true, "🥶🥶 id already exists in DB! 🥶🥶"],
    },
    name: {
      type: String,
      trim: true,
      required: [true, "💥💥 registeration failed, please provide a name 💥💥"],
    },
    avatar: {
      type: String,
    },
    userDetails: {
      nativeLanguage: {
        type: String,
        required: [true, "⛔⛔ user Language missing ⛔⛔"],
      },
      interests: {
        type: [
          { type: String, required: [true, "⛔⛔ user Language missing ⛔⛔"] },
        ],
        validate: [isFive, "⛔⛔ every user MUST have 5 Interests ⛔⛔"],
      },
      yearOfBirth: {
        type: String,
        required: [true, "⛔⛔ user year Of Birth missing ⛔⛔"],
      },
      nationality: {
        type: String,
        required: [true, "⛔⛔ user nationality missing ⛔⛔"],
      },
      address: {
        type: String,
        required: [true, "⛔⛔ user address missing ⛔⛔"],
      },
      gender: {
        type: String,
        required: [true, "⛔⛔ user gender missing ⛔⛔"],
      },
      occupation: {
        type: String,
        maxlength: [30, "max length"],
        trim: true,
        required: [true, "⛔⛔ occupation missing ⛔⛔"],
      },
      bio: {
        type: String,
        trim: true,
        required: [true, "⛔⛔ bio missing ⛔⛔"],
      },
    },
    friends: [
      {
        type: String,
        ref: "userModel",
      },
    ],
  },
  {
    versionKey: false,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

function isFive(intArr) {
  return intArr.length === 5;
}

const userCollection = mongoose.model("userCollection", UserSchema);

export default userCollection;
