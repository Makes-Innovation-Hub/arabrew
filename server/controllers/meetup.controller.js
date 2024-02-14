import Meetup from "../models/meetup.js";

/**
 * @description get all meetups
 * @route   GET /api/meetup/
 * ! @access  NOT SET YET
 */
export const getMeetups = async (req, res, next) => {
  try {
    const meetups = await Meetup.find();
    // if no meetups found
    if (!meetups || meetups.length < 1)
      return next(new Error("Db is Empty, or minor Error"));
    // sort meetups by date
    meetups.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    // populate owner details
    await Meetup.populate(meetups, { path: "owner" });
    // populate attendees details
    await Meetup.populate(meetups, { path: "attendees" });
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
export const createMeetup = async (req, res) => {
  // retrieve meetup data from request body
  const meetup = req.body;
  // empty meetup object
  if (!meetup) return next(new Error("No meetup data found"));

  const newMeetup = new Meetup(meetup);
  try {
    await newMeetup.save();
    // populate owner details
    await Meetup.populate(newMeetup, { path: "owner" });
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
export const getMeetupById = async (req, res) => {
  const { id } = req.params;
  try {
    const meetup = await Meetup.findById(id);
    if (!meetup) return next(new Error("No meetup found with this id"));
    // populate owner details
    await Meetup.populate(meetup, { path: "owner" });
    // populate attendees details
    await Meetup.populate(meetup, { path: "attendees" });
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
  const { id } = req.params;
  try {
    const meetup = await Meetup.findById(id);
    // check if meetup exists
    if (!meetup) return next(new Error("No meetup found with this id"));
    const { userId } = req.body;
    // check if user exists
    if (!userId) return next(new Error("No user found with this id"));
    // check if user already attending
    if (meetup.attendees.includes(userId))
      return next(new Error("User already attending this meetup"));
    // add user to attendees and save
    meetup.attendees.push(userId);
    await meetup.save();
    //todo: add meetup to attending user's meetups

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
  const { id } = req.params;
  try {
    const meetup = await Meetup.findByIdAndDelete(id);
    if (!meetup) return next(new Error("No meetup found with this id"));
    return res.status(200).json({
      success: true,
      data: meetup,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
