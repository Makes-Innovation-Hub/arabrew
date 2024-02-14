import express from "express";

const router = express.Router();

// Create Meetup
router.post("/meetups");

// Get All Meetups
router.get("/meetups");

// Get Meetup by ID
router.get("/meetups/:id");
// isAuthenticated, isMeetupOwner
// Update Meetup
router.put("/meetups/:id");

// Delete Meetup
router.delete("/meetups/:id");

// Register for Meetup
router.post("/meetups/:id/register");

// Get Meetups by User
router.get("/meetups/user/:userId");

// Get Meetups Attending by User
router.get("/meetups/user/:userId/attending");

// Cancel Registration for Meetup
router.delete("/meetups/:id/register");

export default router;
