import { JobCollection } from "../models/job.js";

// description Get all jobs
// GET /api/job/
const getAllJobs = async (req, res, next) => {
  try {
    const jobs = await JobCollection.find();
    if (!jobs) {
      res.status(404);
      throw new Error("No jobs were posted yet");
    }
    res.send({ jobs, message: "Success" });
  } catch (error) {
    next(error);
  }
};

// description Post new job
// Post /api/job/
const createJob = async (req, res, next) => {
  try {
    const newJob = await JobCollection.create(req.body);
    if (!newJob) {
      res.status(500);
      throw new Error("Job couldn't be created");
    }
    res.send({ newJob, message: "Job created!" });
  } catch (error) {
    next(error);
  }
};

// description Update existing job
// PATCH /api/job/:jobId
const updateJob = async (req, res, next) => {
  try {
    const jobId = req.params.jobId;
    let job = await JobCollection.findOneAndUpdate(
      {
        _id: jobId,
      },
      {
        ...req.body,
      },
      { new: true }
    );
    if (!job) {
      res.status(404);
      throw new Error("Job couldn't be found");
    }

    res.send({ job, message: "Job updated!" });
  } catch (error) {
    next(error);
  }
};

// description Delete existing job
// DELETE /api/job/:jobId
const deleteJob = async (req, res, next) => {
  try {
    const jobId = req.params.jobId;
    const job = await JobCollection.findByIdAndDelete(jobId);
    if (!job) {
      res.status(404);
      throw new Error("Job couldn't be found");
    }
    res.send({ job, message: `Job with id ${req.params.jobId} was deleted!` });
  } catch (error) {
    next(error);
  }
};

// description Get existing job by id
// GET /api/job/:jobId
const getJob = async (req, res, next) => {
  try {
    const jobId = req.params.jobId;
    const job = await JobCollection.findById(jobId)
      .populate("postedBy")
      .populate("applicants.user");
    if (!job) {
      res.status(404);
      throw new Error("Job couldn't be found");
    }
    res.send({ job, message: `Job sent successfully` });
  } catch (error) {
    next(error);
  }
};

// description Get my job posts
// GET /api/job/my-job-posts
const getUserJobPosts = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const jobPosts = await JobCollection.find().where({ postedBy: userId });
    if (!jobPosts) {
      res.status(404);
      throw new Error("You have not posted any jobs yet");
    }
    res.send({
      jobPosts,
      message: `Job posts sent successfully!`,
    });
  } catch (error) {
    next(error);
  }
};

// description Apply to job
// Patch /api/job/apply/
const applyToJob = async (req, res, next) => {
  try {
    const { userId, resume, jobId } = req.body;
    const job = await JobCollection.findById(jobId);
    if (!job) {
      res.status(404);
      throw new Error("Job couldn't be found");
    }
    const applicant = { user: userId, resume };
    job.applicants.push(applicant);
    await job.save();
    res.send({
      job,
      message: `Application was sent successfully!`,
    });
  } catch (error) {
    next(error);
  }
};

export {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
  getJob,
  getUserJobPosts,
  applyToJob,
};
