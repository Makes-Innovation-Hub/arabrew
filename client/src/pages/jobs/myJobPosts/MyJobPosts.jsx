import React from "react";
import { StyledMargin } from "../../../styles";
import { Header } from "../../../components";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, SmallGlass } from "../../../assets";
import {
  Center,
  StyledJobText,
  StyledMyJobPage,
} from "../myPostedJobspage/StyledMyJobPage";
import {
  ContainerSection,
  StyledMyPostJobTitle,
  StyledText,
} from "./StyledMyJobPosts";
import { useGetAllJobsQuery } from "../../../features/jobStore/jobAPI";

function MyJobPosts() {
  const storedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
  const navigate = useNavigate();
  if (!storedUser) {
    return <div>User not found. Please log in.</div>;
  }
  const { data, isLoading, isError, isSuccess } = useGetAllJobsQuery();

  if (!data) {
    return <div>Loading...</div>;
  }
  const jobs = Array.isArray(data.data) ? data.data : [];
  const userJobs = jobs.filter(
    (job) => job.postedBy && job.postedBy._id === storedUser.id
  );

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error fetching job details</div>;
  }

  const handleClick = (jobId) => {
    navigate(`/MyPostedJob/${jobId}`);
  };

  return (
    <div>
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <Link to="/">
              <ArrowLeft />
            </Link>
          }
          title={<SmallGlass />}
        />
      </StyledMargin>
      <StyledMyJobPage>
        <Center>
          <StyledMyPostJobTitle> My Job Posts</StyledMyPostJobTitle>
        </Center>
        <StyledMargin direction="vertical" margin="1.8rem" />
        {userJobs.map((job) => (
          <ContainerSection key={job._id} onClick={() => handleClick(job._id)}>
            <StyledMargin direction="vertical" margin="5rem" />
            <StyledText>{job.title}</StyledText>
            <StyledJobText>{job.company}</StyledJobText>
            <StyledJobText>{job.city}</StyledJobText>
            <StyledJobText> ({job.model})</StyledJobText>
            <StyledMargin direction="vertical" margin="1.8rem" />
          </ContainerSection>
        ))}
      </StyledMyJobPage>
    </div>
  );
}

export default MyJobPosts;
