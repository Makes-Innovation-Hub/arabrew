import Meetup from "../models/meetup.js";
import {
  controllerLogger,
  timingLogger,
  successLogger,
  errorLogger,
} from "../middleware/logger.js";
import { User } from "../utils/index.js";

/**
 * @description get all meetups
 * @route   GET /api/meetup/
 * ! @access  NOT SET YET
 */
export const getAllMeetups = async (req, res, next) => {
  controllerLogger("getMeetups", {}, "starting to fetch all meetups");
  const startTime = Date.now();
  try {
    const meetups = await Meetup.find();
    // if no meetups found
    if (!meetups || meetups.length < 1)
      return errorLogger("Db is Empty, or minor Error", req, res, next);
    // sort meetups by date
    meetups.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    // populate owner details
    await Meetup.populate(meetups, { path: "owner" });
    // populate attendees details
    await Meetup.populate(meetups, { path: "attendees" });
    successLogger("getMeetups", "Meetups retrieval succeeded");
    timingLogger("getMeetups", startTime);
    return res.status(200).json({
      success: true,
      data: meetups,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @description Create meetup
 * @route   POST /api/meetup/
 * ! @access  NOT SET YET
 */
export const createMeetup = async (req, res, next) => {
  controllerLogger("createMeetup", req.body, "starting to create new meetup");
  const startTime = Date.now();
  // retrieve meetup data from request body
  const meetup = req.body;
  // empty meetup object
  if (!meetup) return errorLogger("No meetup data", req, res, next);

  const newMeetup = new Meetup(meetup);
  try {
    await newMeetup.save();
    // populate owner details
    await Meetup.populate(newMeetup, { path: "owner" });
    successLogger("createMeetup", "Meetup creation succeeded");
    timingLogger("createMeetup", startTime);
    return res.status(201).json({
      success: true,
      data: newMeetup,
    });
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};

/**
 * @description get meetup by id
 * @route   GET /api/meetup/:id
 * ! @access  NOT SET YET
 */
export const getMeetupById = async (req, res, next) => {
  controllerLogger(
    "getMeetupById",
    req.params,
    "starting to fetch meetup by id"
  );
  const startTime = Date.now();
  const { id } = req.params;
  try {
    const meetup = await Meetup.findById(id);
    if (!meetup) return errorLogger(`No meetup with id ${id}`, req, res, next);
    // populate owner details
    await Meetup.populate(meetup, { path: "owner" });
    // populate attendees details
    await Meetup.populate(meetup, { path: "attendees" });
    successLogger("getMeetupById", "Meetup retrieval succeeded");
    timingLogger("getMeetupById", startTime);
    return res.status(200).json({
      success: true,
      data: meetup,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

/**
 * @description user attend meetup by id
 * @route   POST /api/meetup/:id/attend
 * ! @access  NOT SET YET
 */
export const attendMeetup = async (req, res, next) => {
  controllerLogger(
    "attendMeetup",
    req.params,
    "starting to attend meetup by id"
  );
  const startTime = Date.now();
  const { id } = req.params;
  try {
    const meetup = await Meetup.findById(id);
    // check if meetup exists
    if (!meetup)
      return errorLogger("No meetup found with this id", req, res, next);
    const { userId } = req.body;
    // check if user exists
    const user = await User.findById(userId);
    if (!user) return errorLogger("No user found with this id", req, res, next);
    // check if user already attending
    if (meetup.attendees.includes(userId))
      return errorLogger("User already attending", req, res, next);
    // add user to attendees and save
    meetup.attendees.push(userId);
    await meetup.save();
    //todo: add meetup to attending user's meetups

    successLogger("attendMeetup", "Meetup attendance succeeded");
    timingLogger("attendMeetup", startTime);
    return res.status(200).json({
      success: true,
      data: meetup,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

/**
 * @description delete meetup by id
 * @route   DELETE /api/meetup/:id
 * ! @access  NOT SET YET
 */
export const deleteMeetup = async (req, res, next) => {
  controllerLogger(
    "deleteMeetup",
    req.params,
    "starting to delete meetup by id"
  );
  const startTime = Date.now();
  const { id } = req.params;
  try {
    const meetup = await Meetup.findByIdAndDelete(id);
    if (!meetup)
      return errorLogger("No meetup found with this id", req, res, next);
    successLogger("deleteMeetup", "Meetup deletion succeeded");
    timingLogger("deleteMeetup", startTime);
    return res.status(200).json({
      success: true,
      data: meetup,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
