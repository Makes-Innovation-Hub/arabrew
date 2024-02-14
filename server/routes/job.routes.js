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

const router = express.Router();

router.get("/", getAllJobs);
router.post("/", createJob);
router.patch("/apply", applyToJob);
router.get("/my-job-posts/:userId", getUserJobPosts);
router.get("/:jobId", getJob);
router.patch("/:jobId", updateJob);
router.delete("/:jobId", deleteJob);

export default router;
