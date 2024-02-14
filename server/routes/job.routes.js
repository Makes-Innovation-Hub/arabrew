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

router.get("/", getAllJobs);
router.post("/", validateToken, createJob);
router.patch("/apply", applyToJob);
router.get("/my-job-posts/", validateToken, getUserJobPosts);
router.get("/:jobId", getJob);
router.patch("/:jobId", validateToken, updateJob);
router.delete("/:jobId", validateToken, deleteJob);

// add protected routes to create, get my posts , update details and delete

export default router;
