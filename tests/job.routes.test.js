import { expect } from "chai";
import sinon from "sinon";
import { JobCollection } from "../server/models/job.js";
import {
  getAllJobs,
  // Other imported functions
} from "../server/controllers/job.controllers.js"; // Replace with the actual path

describe("Job Controllers", () => {
  describe("getAllJobs", () => {
    it("should get all jobs successfully", async () => {
      // Stub JobCollection.find to return some sample jobs
      const sampleJobs = [{ title: "Job 1" }, { title: "Job 2" }];
      const findStub = sinon.stub(JobCollection, "find").resolves(sampleJobs);

      const req = {};
      const res = {
        status: sinon.stub().returnsThis(),
        send: sinon.stub(),
      };
      const next = sinon.stub();

      await getAllJobs(req, res, next);

      // Assertions using Chai
      expect(res.status).to.not.have.been.called;
      expect(res.send).to.have.been.calledWith({
        jobs: sampleJobs,
        message: "Success",
      });

      // Restore the stub after the test
      findStub.restore();
    });

    // Add more test cases for different scenarios...
  });

  // Similar tests for other functions (createJob, updateJob, deleteJob, getJob, getUserJobPosts, applyToJob)
});
