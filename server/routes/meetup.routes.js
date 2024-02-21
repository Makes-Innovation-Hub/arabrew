import express from "express";
import {
  attendMeetup,
  createMeetup,
  deleteMeetup,
  getMeetupById,
  getAllMeetups,
  getUserMeetups,
} from "../controllers/meetup.controller.js";
import { validateToken } from "../middleware/verifyUserToken.js";

const router = express.Router();

// Create Meetup
router.post("/", validateToken, createMeetup);

// Get All Meetups
router.get("/", getAllMeetups);

// Get Meetup by ID
router.get("/:id", getMeetupById);
// isAuthenticated, isMeetupOwner
// Update Meetup
router.put("/:id");

// Delete Meetup
router.delete("/:id", validateToken, deleteMeetup);

// Register for Meetup
router.patch("/:id/attend", attendMeetup); // add id to attendees array

// Cancel Registration for Meetup
router.delete("/:id/attend");

// get user's created meetups
router.get("/my-meetups", validateToken, getUserMeetups);
export default router;
