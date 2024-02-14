import express from "express";
import {
  attendMeetup,
  createMeetup,
  deleteMeetup,
  getMeetupById,
  getAllMeetups,
} from "../controllers/meetup.controller.js";

const router = express.Router();

// Create Meetup
router.post("/", createMeetup);

// Get All Meetups
router.get("/", getAllMeetups);

// Get Meetup by ID
router.get("/:id", getMeetupById);
// isAuthenticated, isMeetupOwner
// Update Meetup
router.put("/:id");

// Delete Meetup
router.delete("/:id", deleteMeetup);

// Register for Meetup
router.patch("/:id/attend", attendMeetup); // add id to attendees array

// Cancel Registration for Meetup
router.delete("/:id/attend");

export default router;
