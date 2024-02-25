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
import {
  useGetAllJobsQuery,
  useGetUserJobPostsQuery,
} from "../../../features/jobStore/jobAPI";
import MyJobPostsComponent from "./MyJobPostscomponent";

function MyJobPosts() {
  const storedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
  const navigate = useNavigate();
  if (!storedUser) {
    return <div>User not found. Please log in.</div>;
  }
  const { data, isLoading, isError, isSuccess } = useGetUserJobPostsQuery();
  if (!data) {
    return <div>Loading...</div>;
  }
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
        {data.jobPosts.map((job) => (
          <MyJobPostsComponent
            key={job.id}
            jobTitle={job.title}
            company={job.company}
            city={job.city}
            model={job.model}
            onClick={() => handleClick(job.id)}
          />
        ))}
      </StyledMyJobPage>
    </div>
  );
}

export default MyJobPosts;
