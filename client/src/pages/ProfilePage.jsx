import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import userRegisterSlice from "../features/userRegister/userRegisterSlice";
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
  FlagForLang,
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
} from "../styles";
import {
  ArrowLeft,
  LanguageIcon,
  ChatIcon,
  LocationIcon,
  UserIcon,
} from "../assets";
import { useContext } from "react";
import { UserContext } from "../contexts/loggedUser.context";
import { useSelector } from "react-redux";
import flags from "../assets/countriesAndFlags/by-code.json";
const ProfilePage = () => {
  const { userData: profileData1 } = useContext(UserContext);
  const { userData: profileData2 } = useSelector((state) => state.userRegister);
  const profileData = profileData1 || profileData2;
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
          rightIcon={
            <>
              {userRegisterSlice.name !== "userRegister" && (
                <CircleIcon>
                  <Link to="/">
                    <ChatIcon />
                  </Link>
                </CircleIcon>
              )}
            </>
          }
        />
      </StyledMargin>
      <StyledPage>
        <StyledProfilePage>
          <ProfileImg src={profileData.avatar} alt="profile" />
          <ProfileTitle>
            <ProfileName>{profileData.name}</ProfileName>
            <LanguageIcon
              letter={
                profileData.lang === "Arabic"
                  ? "ع"
                  : profileData.lang === "Hebrew"
                  ? "He"
                  : "En"
              }
            />
            <StyledNationalityContainer>
              <FlagForLang
                flag={flags[profileData?.userDetails?.nationality]?.image}
              />
              <UserIcon />
            </StyledNationalityContainer>
          </ProfileTitle>
          <ProfileDetails>
            <div>{profileData?.userDetails?.gender}</div>
            <div>
              <LocationIcon /> {profileData?.userDetails?.address},{" "}
              {flags[profileData?.userDetails?.nationality]?.name}
            </div>
          </ProfileDetails>
          <ProfileOccupationContainer>
            <ProfileOccupation>Occupation</ProfileOccupation>
            <ProfileOccupationData>
              {profileData.userDetails?.occupation}
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
        </StyledProfilePage>
      </StyledPage>
    </div>
  );
};
export default ProfilePage;
