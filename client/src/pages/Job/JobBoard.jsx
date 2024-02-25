import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllJobsQuery } from "../../features/jobStore/jobAPI";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { StyledMargin, StyledPage } from "../../styles";

import { useNavigate } from "react-router-dom";

export default function JobBoardPage() {
  const navigate = useNavigate();
  const [isSideBar, setIsSideBar] = useState(false);
  // const [isError, setIsError] = useState (false);
  // const [isLoading, setIsLoading]= useState (true);

  // Fetch all jobs
  // const   jobs  = useGetAllJobsQuery();
  const { data, isLoading, isError, isSuccess } = useGetAllJobsQuery();
  // console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }
  const jobs = Array.isArray(data.data) ? data.data : [];
  console.log(jobs);

  // useEffect(() => {
  //   refetch(); // refetch jobs when the component updated.....
  // }, [refetch]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching jobs</div>;

  //  to navigate to job details....
  const goToJobDetails = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  return (
    <div>
      {isSideBar && <SideBar openSideBar={setIsSideBar} />}
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <div onClick={() => setIsSideBar(true)}>
              <ArrowLeft />
            </div>
          }
          title={"Job Board"}
        />
      </StyledMargin>
      <StyledPage>
        <h1>Open Jobs</h1>
        <JobList>
          {jobs.map((job) => (
            <JobItem key={job._id} onClick={() => goToJobDetails(job._id)}>
              <h2>{job.title}</h2>
              <p>{job.company}</p>
              <p>{job.city}</p>
              <p>({job.model})</p>
            </JobItem>
          ))}
        </JobList>
      </StyledPage>
    </div>
  );
}
