import React from "react";
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
import { StyledMargin } from "../../../styles";

function MyJobPostsComponent({ jobTitle, company, city, model, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <ContainerSection onClick={handleClick}>
      <StyledMargin direction="vertical" margin="5rem" />
      <StyledText>{jobTitle}</StyledText>
      <StyledJobText>{company}</StyledJobText>
      <StyledJobText>{city}</StyledJobText>
      <StyledJobText> ({model})</StyledJobText>
      <StyledMargin direction="vertical" margin="1.8rem" />
    </ContainerSection>
  );
}

export default MyJobPostsComponent;
