import { Link } from "react-router-dom";
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
const ProfilePage = ({ profileDate }) => {
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
          <ProfileImg src={profileDate.img} alt="profile" />
          <ProfileTitle>
            <ProfileName>{profileDate.name}</ProfileName>
            <LanguageIcon
              letter={
                profileDate.lang === "Arabic"
                  ? "ع"
                  : profileDate.lang === "Hebrew"
                  ? "He"
                  : "En"
              }
            />
          </ProfileTitle>
          <InterestTextStyle>
            My Interest
            <HobbiesDisplay>
              {profileDate.hobbies.map((hobby, i) => {
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
