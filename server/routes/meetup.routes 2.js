import express from "express";
import {
  attendMeetup,
  createMeetup,
  deleteMeetup,
  getMeetupById,
  getAllMeetups,
  getUserMeetups,
  updateMeetup,
} from "../controllers/meetup.controller.js";
import { validateToken } from "../middleware/verifyUserToken.js";

const router = express.Router();

// Create Meetup
router.post("/", validateToken, createMeetup);

// Get All Meetups
router.get("/", getAllMeetups);

// get user's created meetups
router.get("/my-meetups", validateToken, getUserMeetups);

// Get Meetup by ID
router.get("/:id", getMeetupById);

// isAuthenticated, isMeetupOwner
// Update Meetup
router.patch("/:id", validateToken, updateMeetup);

// Delete Meetup
router.delete("/:id", validateToken, deleteMeetup);

// Register for Meetup
router.patch("/:id/attend", validateToken, attendMeetup); // add id to attendees array

export default router;
