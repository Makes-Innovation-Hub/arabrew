import React, { useEffect } from "react";
import { StyledButton, StyledMargin } from "../../../styles";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "../../../assets";
import {
  AppliedSection,
  Center,
  DescriptionSection,
  FirstSection,
  OtherPageButton,
  ProfileSection,
  SecondSection,
  StyledImg,
  StyledJobText,
  StyledMyJobPage,
  StyledName,
  StyledUnderName,
  Title,
} from "../myPostedJobspage/StyledMyJobPage";
import { Header } from "../../../components";
import {
  useApplyToJobMutation,
  useGetJobByIdQuery,
} from "../../../features/jobStore/jobAPI";

function OtherJob() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: job, isLoading, isError, isSuccess } = useGetJobByIdQuery(id);
  const storedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
  const [applyToJob] = useApplyToJobMutation();

  const handleApplyButton = async () => {
    try {
      const { data } = await applyToJob({
        userId: storedUser.id,
        resume: storedUser.userDetails.resume,
        jobId: job.job.id,
      });
      console.log("Job application successful:", data);
      //   navigate('')
    } catch (error) {
      console.log("error applying to job", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error fetching job details</div>;
  }
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
            <Title>{job?.job?.title}</Title>
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
            <StyledImg src={job?.job?.postedBy?.avatar} alt="Description" />
            <ProfileSection>
              <StyledName>{job?.job?.postedBy?.name}</StyledName>
              <StyledUnderName>
                {job?.job?.postedBy?.userDetails?.occupation}
              </StyledUnderName>
            </ProfileSection>
          </SecondSection>
          <DescriptionSection>
            {job?.job?.description}
            <StyledMargin direction="vertical" margin="1.8rem" />
          </DescriptionSection>
          <StyledMargin direction="vertical" margin="1.8rem" />
          <AppliedSection>
            {job?.job?.applicants?.length} Applied
          </AppliedSection>

          <StyledMargin direction="vertical" margin="35rem" />

          <OtherPageButton onClick={handleApplyButton}>
            Send Resume
          </OtherPageButton>
        </StyledMyJobPage>
      )}
    </div>
  );
}

export default OtherJob;
