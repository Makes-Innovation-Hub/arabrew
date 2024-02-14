import mongoose from "mongoose";

const MeetupSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    time: {
      type: String,
      required: [true, "Time is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userCollection",
      required: [true, "Owner is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: String,
      required: [true, "Price is required"],
    },
    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userCollection",
        default: [],
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

const Meetup = mongoose.model("meetupCollection", MeetupSchema);

export default Meetup;
