import React from "react";
import { StyledMargin, StyledPage, StyledTitle } from "../../../styles";
import { Header } from "../../../components";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "../../../assets";
import {
  StyledMyJobPage,
  Title,
  StyledJobText,
  ContentWrapper,
  Center,
  FirstSection,
  StyledImg,
  StyledName,
  StyledUnderName,
  ProfileSection,
  SecondSection,
  DescriptionSection,
  AppliedSection,
} from "./StyledMyJobPage";
import {
  useGetAllJobsQuery,
  useGetJobByIdQuery,
} from "../../../features/jobStore/jobAPI";

function MyPostedJob() {
  // console.log(useGetJobByIdQuery("65d35a882633d68103c82279"))
  const { id } = useParams();
  // const id = "65d4c668d59fe68dd752aa21";
  // console.log(id)
  const { data: job, isLoading, isError, isSuccess } = useGetJobByIdQuery(id);
  // const { data } =  useGetAllJobsQuery();
  // console.log("all:",data)
  // console.log(job.job)

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error fetching job details</div>;
  }

  // console.log(job)

  return (
    <div>
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <Link to="/">
              <ArrowLeft />
            </Link>
          }
          title={"My Posted Job Page"}
        />
      </StyledMargin>
      {isSuccess && (
        <StyledMyJobPage>
          <Center>
            <Title>{job?.job.title}</Title>
          </Center>
          <StyledMargin direction="vertical" margin="1.8rem" />

          <FirstSection>
            <StyledJobText>{job?.job.company}</StyledJobText>
            <StyledJobText>{job?.job.city}</StyledJobText>
            <StyledJobText>({job?.job.model})</StyledJobText>
            <StyledMargin direction="vertical" margin="1.8rem" />
          </FirstSection>
          <StyledMargin direction="vertical" margin="1.8rem" />

          <SecondSection>
            <StyledImg src={job?.job.postedBy.avatar} alt="Description" />
            <ProfileSection>
              <StyledName>{job?.job.postedBy.name}</StyledName>
              <StyledUnderName>
                {job?.job.postedBy.userDetails.occupation}
              </StyledUnderName>
            </ProfileSection>
          </SecondSection>
          <DescriptionSection>
            {job?.job.description}
            <StyledMargin direction="vertical" margin="1.8rem" />
          </DescriptionSection>
          <StyledMargin direction="vertical" margin="1.8rem" />
          <AppliedSection>{job?.job.applicants.length} Applied</AppliedSection>
        </StyledMyJobPage>
      )}
    </div>
  );
}

export default MyPostedJob;
