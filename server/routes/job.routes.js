import express from "express";
import {
  applyToJob,
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  getUserJobPosts,
  updateJob,
} from "../controllers/job.controllers.js";
import { validateToken } from "../middleware/verifyUserToken.js";

const router = express.Router();

// GET ALL JOB POSTS
router.get("/", getAllJobs);

// CREATE A JOB
router.post("/", validateToken, createJob);

// APPLY TO JOB
router.patch("/apply", applyToJob);

// GET ALL MY JOB POSTS
router.get("/my-job-posts/", validateToken, getUserJobPosts);

// GET JOB BY JOB-ID
router.get("/:jobId", getJob);

// UPDATE JOB BY JOB-ID
router.patch("/:jobId", validateToken, updateJob);

// DELETE JOB BY JOB-ID
router.delete("/:jobId", validateToken, deleteJob);

// add protected routes to create, get my posts , update details and delete

export default router;
