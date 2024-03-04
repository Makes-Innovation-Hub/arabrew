import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { useGetLoggedUserQuery } from "../../features/userDataApi";
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
  FlagImg,
  ProfileAgeData,
  FlagContainer,
} from "../../styles";
import {
  ArrowLeft,
  LanguageIcon,
  ChatIcon,
  LocationIcon,
  UserIcon,
} from "../../assets";
import flags from "../../assets/countriesAndFlags/by-code.json";
import { useSelector } from "react-redux";

function ProfileDetailsComponent({ userId }) {
  const profileData = useSelector((state) => state.userRegister);
  const { data: loggedUser } = useGetLoggedUserQuery(userId);
  const isOwnProfile = loggedUser?.data?.subId === profileData?.subId;
  const handleBack = () => {
    window.history.back();
  };
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
  const age = currentYear - loggedUser?.data?.userDetails?.yearOfBirth;
  return (
    <div>
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <div onClick={handleBack}>
              <ArrowLeft />
            </div>
          }
          title="Profile"
          rightIcon={renderChatIcon}
        />
      </StyledMargin>
      <StyledPage>
        <StyledProfilePage>
          <ProfileImg src={loggedUser?.data?.avatar} alt="profile" />
          <ProfileTitle>
            <ProfileName>{loggedUser?.data?.name}</ProfileName>
            <LanguageIcon
              letter={
                loggedUser?.data?.lang === "Arabic"
                  ? "ع"
                  : loggedUser?.data?.lang === "Hebrew"
                  ? "He"
                  : "En"
              }
            />
            {/* adding details */}
            <StyledNationalityContainer>
              <FlagContainer>
                <FlagImg
                  src={flags[loggedUser?.data?.userDetails?.nationality]?.image}
                />
              </FlagContainer>

              <UserIcon />
              <ProfileAgeData>{age}</ProfileAgeData>
            </StyledNationalityContainer>
          </ProfileTitle>
          <ProfileDetails>
            <div>{loggedUser?.data?.userDetails?.gender}</div>
            <div>
              <LocationIcon /> {loggedUser?.data?.userDetails?.address},{" "}
              {flags[loggedUser?.data?.userDetails?.nationality]?.name}
            </div>
          </ProfileDetails>

          <ProfileOccupationContainer>
            <ProfileOccupation>Occupation</ProfileOccupation>
            <ProfileOccupationData>
              {loggedUser?.data?.userDetails?.occupation}
            </ProfileOccupationData>
          </ProfileOccupationContainer>
        </StyledProfilePage>
      </StyledPage>
    </div>
  );
}

export default ProfileDetailsComponent;
