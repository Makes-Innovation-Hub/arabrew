import React from "react";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { useGetLoggedUserQuery } from "../../features/userDataApi";
=======
import {
  useGetLoggedUserQuery,
  useGetUserByIdQuery,
} from "../../features/userDataApi";
>>>>>>> ed91ad338034e87d291fedae6fa4fc9591763a8d
import {
  StyledProfilePage,
  ProfileDescriptionTitle,
  ProfileDescriptionText,
  InterestTextStyle,
  HobbiesDisplay,
  HobbyBackground,
  ProfileWorkFieldContainer,
  ProfileWorkField,
  ProfileWorkFieldData,
  ProfileWorkResumeContainer,
  ProfileWorkResume,
  ProfileWorkResumeData,
  StyledPage,
} from "../../styles";
import { StyledProfileRenderPage } from "./ProfilePageStyles";

function ProfileFieldsComponent({ profileType, userId }) {
<<<<<<< HEAD
  const { data: loggedUser } = useGetLoggedUserQuery(userId);
=======
  const { data: loggedUser } = useGetUserByIdQuery(userId);
>>>>>>> ed91ad338034e87d291fedae6fa4fc9591763a8d
  if (!loggedUser || !loggedUser.data) return null;
  const renderProfileComponents = () => {
    if (profileType === "hobbies") {
      return (
        <>
          <div>
            <ProfileDescriptionTitle>About me</ProfileDescriptionTitle>
            <ProfileDescriptionText>
              {loggedUser?.data?.userDetails?.bio}
            </ProfileDescriptionText>
          </div>
          <InterestTextStyle>My Interest</InterestTextStyle>
          <HobbiesDisplay>
            {loggedUser?.data?.userDetails?.interests.map((hobby, i) => (
              <HobbyBackground key={i}>{hobby}</HobbyBackground>
            ))}
          </HobbiesDisplay>
        </>
      );
    } else if (profileType === "work") {
      return (
        <>
          <ProfileWorkFieldContainer>
            <ProfileWorkField>Work Field</ProfileWorkField>
            <ProfileWorkFieldData>
              {loggedUser?.data?.userDetails?.workField}
            </ProfileWorkFieldData>
          </ProfileWorkFieldContainer>
          <ProfileWorkResumeContainer>
            <ProfileWorkResume>Work Resume</ProfileWorkResume>
            <ProfileWorkResumeData>
              {loggedUser?.data?.userDetails?.resume}
            </ProfileWorkResumeData>
          </ProfileWorkResumeContainer>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <StyledProfileRenderPage>
      <StyledProfilePage>{renderProfileComponents()}</StyledProfilePage>
    </StyledProfileRenderPage>
  );
}

export default ProfileFieldsComponent;
