import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useGetLoggedUserQuery } from "../features/userDataApi";
import {
  ProfileName,
  InterestTextStyle,
  StyledPage,
  StyledMargin,
  StyledProfilePage,
  ProfileImg,
  ProfileTitle,
  HobbyBackground,
  HobbiesDisplay,
  CircleIcon,
  StyledNationalityContainer,
  ProfileDetails,
  ProfileDescriptionTitle,
  ProfileDescriptionText,
  ProfileOccupation,
  ProfileOccupationContainer,
  ProfileOccupationData,
  ProfileWorkField,
  ProfileWorkFieldContainer,
  ProfileWorkFieldData,
  FlagImg,
  ProfileAgeData,
  FlagContainer,
  ProfileWorkResume,
  ProfileWorkResumeData,
  ProfileWorkResumeContainer,
} from "../styles";
import {
  ArrowLeft,
  LanguageIcon,
  ChatIcon,
  LocationIcon,
  UserIcon,
} from "../assets";
import flags from "../assets/countriesAndFlags/by-code.json";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const profileData = useSelector((state) => state.userRegister);
  console.log("profileData :", profileData);
  const { data: loggedUser } = useGetLoggedUserQuery(profileData.subId);
  console.log("loggedUser:", loggedUser);

  // Check if the profile being viewed is the logged-in user's own profile
  const isOwnProfile = loggedUser?.data?.subId === profileData?.subId;
  console.log("isOwnProfile :", isOwnProfile);
  // Render the ChatIcon only if the profile is not the logged-in user's own profile
  const renderChatIcon = !isOwnProfile ? (
    <CircleIcon>
      <Link to="/">
        <ChatIcon />
      </Link>
    </CircleIcon>
  ) : null;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const age = currentYear - profileData?.userDetails?.yearOfBirth;

  return (
    <div>
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <Link to="/">
              <ArrowLeft />
            </Link>
          }
          title="Profile"
          rightIcon={renderChatIcon}
        />
      </StyledMargin>
      <StyledPage>
        <StyledProfilePage>
          <ProfileImg src={profileData?.avatar} alt="profile" />
          <ProfileTitle>
            <ProfileName>{profileData?.name}</ProfileName>
            <LanguageIcon
              letter={
                profileData?.lang === "Arabic"
                  ? "ع"
                  : profileData?.lang === "Hebrew"
                  ? "He"
                  : "En"
              }
            />
            {/* adding details */}
            <StyledNationalityContainer>
              <FlagContainer>
                <FlagImg
                  src={flags[profileData?.userDetails?.nationality]?.image}
                />
              </FlagContainer>

              <UserIcon />
              <ProfileAgeData>{age}</ProfileAgeData>
            </StyledNationalityContainer>
          </ProfileTitle>
          <ProfileDetails>
            <div>{profileData?.userDetails?.gender}</div>
            <div>
              <LocationIcon />
              {profileData?.userDetails?.address},{" "}
              {flags[profileData?.userDetails?.nationality]?.name}
            </div>
          </ProfileDetails>
          <ProfileOccupationContainer>
            <ProfileOccupation>Occupation</ProfileOccupation>
            <ProfileOccupationData>
              {profileData?.userDetails?.occupation}
            </ProfileOccupationData>
          </ProfileOccupationContainer>
          <div>
            <ProfileDescriptionTitle>About me</ProfileDescriptionTitle>
            <ProfileDescriptionText>
              {profileData?.userDetails?.bio}
            </ProfileDescriptionText>
          </div>
          <InterestTextStyle>My Interest</InterestTextStyle>
          <HobbiesDisplay>
            {profileData?.userDetails?.interests.map((hobby, i) => {
              return <HobbyBackground key={i}> {hobby}</HobbyBackground>;
            })}
          </HobbiesDisplay>
          <ProfileWorkFieldContainer>
            <ProfileWorkField>Work Field </ProfileWorkField>
            <ProfileWorkFieldData>
              {" "}
              {profileData?.userDetails?.workField}
            </ProfileWorkFieldData>
          </ProfileWorkFieldContainer>
          <ProfileWorkResumeContainer>
            <ProfileWorkResume>Work Resume</ProfileWorkResume>
            <ProfileWorkResumeData>
              {profileData?.userDetails?.resume}
            </ProfileWorkResumeData>
          </ProfileWorkResumeContainer>
        </StyledProfilePage>
      </StyledPage>
    </div>
  );
};
export default ProfilePage;
