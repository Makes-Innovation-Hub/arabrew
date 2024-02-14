import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "⛔⛔ Job title missing ⛔⛔"],
    },
    company: {
      type: String,
      required: [true, "⛔⛔ Company Name is missing ⛔⛔"],
    },
    city: {
      type: String,
      required: [true, "⛔⛔ Location is missing ⛔⛔"],
    },
    model: {
      type: String,
      required: [true, "⛔⛔ Work model is missing ⛔⛔"],
    },
    description: {
      type: String,
      required: [true, "⛔⛔ Job description is missing ⛔⛔"],
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userCollection",
    },
    applicants: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "userCollection" },
        resume: {
          type: String,
          required: [true, "⛔⛔ Resume is missing ⛔⛔"],
        },
      },
    ],
  },
  {
    timestamps: true,
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

export const JobCollection = mongoose.model("JobCollection", jobSchema);
