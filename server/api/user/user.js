import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    subId: {
      type: String,
      unique: [
        true,
        ":cold_face::cold_face: id already exists in DB! :cold_face::cold_face:",
      ],
    },
    name: {
      type: String,
      trim: true,
      required: [
        true,
        ":boom::boom: registeration failed, please provide a name :boom::boom:",
      ],
    },
    avatar: {
      type: String,
    },
    userDetails: {
      nativeLanguage: {
        type: String,
        required: [
          true,
          ":no_entry::no_entry: user Language missing :no_entry::no_entry:",
        ],
      },
      interests: {
        type: [
          {
            type: String,
            required: [
              true,
              ":no_entry::no_entry: user Language missing :no_entry::no_entry:",
            ],
          },
        ],
        validate: [
          isFive,
          ":no_entry::no_entry: every user MUST have 5 Interests :no_entry::no_entry:",
        ],
      },
      yearOfBirth: {
        type: String,
        required: [
          true,
          ":no_entry::no_entry: user year Of Birth missing :no_entry::no_entry:",
        ],
      },
      nationality: {
        type: String,
        required: [
          true,
          ":no_entry::no_entry: user nationality missing :no_entry::no_entry:",
        ],
      },
      address: {
        type: String,
        required: [
          true,
          ":no_entry::no_entry: user address missing :no_entry::no_entry:",
        ],
      },
      gender: {
        type: String,
        required: [
          true,
          ":no_entry::no_entry: user gender missing :no_entry::no_entry:",
        ],
      },
      occupation: {
        type: String,
        maxlength: [30, "max length"],
        trim: true,
        required: [
          true,
          ":no_entry::no_entry: occupation missing :no_entry::no_entry:",
        ],
      },
      bio: {
        type: String,
        trim: true,
        required: [
          true,
          ":no_entry::no_entry: bio missing :no_entry::no_entry:",
        ],
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
        delete ret._id;
        delete ret.__v;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);
function isFive(intArr) {
  return intArr.length === 5;
}
const userModel = mongoose.model("userModel", UserSchema);
export default userModel;
