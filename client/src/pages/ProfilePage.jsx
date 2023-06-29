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
} from "../styles";
import { ArrowLeft, LanguageIcon, ChatIcon } from "../assets";
import { useContext } from "react";
import { UserContext } from "../contexts/loggedUser.context";
import { useSelector } from "react-redux";
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
          </ProfileTitle>
          <InterestTextStyle>
            My Interest
            <HobbiesDisplay>
              {profileData.userDetails.interests.map((hobby, i) => {
                return <HobbyBackground key={i}> {hobby}</HobbyBackground>;
              })}
            </HobbiesDisplay>
          </InterestTextStyle>
        </StyledProfilePage>
      </StyledPage>
    </div>
  );
};
export default ProfilePage;
