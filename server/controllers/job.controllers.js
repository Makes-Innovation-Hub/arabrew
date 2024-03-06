import { STATUS_CODES } from "../constants/constants.js";
import { JobCollection } from "../models/job.js";
import {
  controllerLogger,
  timingLogger,
  successLogger,
  errorLogger,
} from "../middleware/logger.js";
import { err } from "pino-std-serializers";

// description Get all jobs
// GET /api/job/
const getAllJobs = async (req, res, next) => {
  controllerLogger("getJobs", {}, "Starting to fetch all jobs");
  const startTime = Date.now();
  try {
    const jobs = await JobCollection.find()
      .populate("postedBy")
      .populate("applicants.user")
      .lean();
    if (!jobs || jobs.length < 1) {
      res.status(STATUS_CODES.NOT_FOUND);
      throw new Error("Jobs are yet to be posted");
      // return errorLogger("DB is empty, general error", req, res, next);
    }
    successLogger("getJobs", "Jobs retrieval succeeded");
    timingLogger("getJobs", startTime);
    return res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    errorLogger(error, req, res, next);
    // next(error);

    // res.status(404).json({
    //   success: false,
    //   message: error.message,
    // });
  }
};

// description Post new job
// Post /api/job/
const createJob = async (req, res, next) => {
  controllerLogger("createJob", req.body, "starting to create new job");
  const startTime = Date.now();
  try {
    const newJob = await JobCollection.create(req.body);
    if (!req.user) {
      res.status(STATUS_CODES.UNAUTHORIZED);
      throw new Error("User is not Authorized or token is missing");
    }
    if (!newJob) {
      res.status(STATUS_CODES.SERVER_ERROR);
      throw new Error("Job couldn't be created");
    }
    successLogger("createJob", "job creation succeeded");
    timingLogger("createJob", startTime);
    res.status(STATUS_CODES.CREATED).send({ newJob, message: "Job created!" });
  } catch (error) {
    return errorLogger(error, req, res, next);
  }
};

// description Update existing job
// PATCH /api/job/:jobId
const updateJob = async (req, res, next) => {
  controllerLogger("updateJob", req.body, "updating job");
  const startTime = Date.now();
  try {
    const jobId = req.params.jobId;

    let job = await JobCollection.findOneAndUpdate(
      {
        _id: jobId,
        postedBy: req.user._id,
      },
      {
        ...req.body,
      },
      { new: true }
    );
    if (!job) {
      res.status(STATUS_CODES.NOT_FOUND);
      throw new Error("Job couldn't be found");
    }
    successLogger("updateJob", "Job update succeeded");
    timingLogger("updateJob", startTime);
    res.send({ job, message: "Job updated!" });
  } catch (error) {
    errorLogger(error, req, res, next);
  }
};

// description Delete existing job
// DELETE /api/job/:jobId
const deleteJob = async (req, res, next) => {
  controllerLogger("deleteJob", req.params, "starting to delete job by id");
  const startTime = Date.now();

  try {
    const jobId = req.params.jobId;
    const job = await JobCollection.findById(jobId);
    if (!job) {
      res.status(STATUS_CODES.NOT_FOUND);
      throw new Error("Job couldn't be found");
    }
    if (!job.postedBy.equals(req.user._id)) {
      res.status(STATUS_CODES.FORBIDDEN);
      throw new Error("You are not authorized to remove this job post");
    }
    const deletedJobPost = await JobCollection.deleteOne({ _id: jobId });
    res.send({ deletedJobPost, message: `Job with id ${jobId} was deleted!` });
  } catch (error) {
    errorLogger(error, req, res, next);
  }
};

// description Get existing job by id
// GET /api/job/:jobId
const getJob = async (req, res, next) => {
  controllerLogger("getJob", req.params, "starting to fetch job by id");
  const startTime = Date.now();

  try {
    const jobId = req.params.jobId;
    const job = await JobCollection.findById(jobId)
      .populate("postedBy")
      .populate("applicants.user");
    if (!job) {
      res.status(STATUS_CODES.NOT_FOUND);
      throw new Error("Job couldn't be found");
    }
    successLogger("getJob", "Job retrieval succeeded");
    timingLogger("getJob", startTime);
    res.send({ job, message: `Job sent successfully` });
  } catch (error) {
    errorLogger(error, req, res, next);
  }
};

// description Get my job posts
// GET /api/job/my-job-posts
const getUserJobPosts = async (req, res, next) => {
  controllerLogger("getUserJobPosts", req.body, "Getting user's all job posts");
  const startTime = Date.now();
  try {
    const jobPosts = await JobCollection.find().where({
      postedBy: req.user._id,
    });
    if (!jobPosts) {
      res.status(STATUS_CODES.NOT_FOUND);
      throw new Error("You have not posted any jobs yet");
    }

    successLogger("getUserJobPosts", "retriving  user's job posts success");
    timingLogger("getUserJobPosts", startTime);
    res.send({
      jobPosts,
      message: `Job posts sent successfully!`,
    });
  } catch (error) {
    errorLogger(error, req, res, next);
  }
};

// description Apply to job
// Patch /api/job/apply/
const applyToJob = async (req, res, next) => {
  controllerLogger("applyToJob", req.body, "Applying to a job");
  const startTime = Date.now();
  try {
    const { userId, resume, jobId } = req.body;
    const job = await JobCollection.findById(jobId);
    if (!job) {
      res.status(STATUS_CODES.NOT_FOUND);
      throw new Error("Job couldn't be found");
    }
    const applicant = { user: userId, resume };
    const applicantIndex = job.applicants.findIndex(
      (appl) => appl.userId.toString() === userId
    );

    if (applicantIndex === -1) {
      job.applicants.push(applicant);
    } else {
      job.applicants.splice(applicantIndex, 1);
    }
    await job.save();
    successLogger("applyToJob", "Applying to job succeded");
    timingLogger("applyToJob", startTime);
    res.send({
      job,
      message: `Application was sent successfully!`,
    });
  } catch (error) {
    errorLogger(error, req, res, next);
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
