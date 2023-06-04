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
import Profile from "../assets/prf.webp";
const ProfilePage = () => {
  let myProfile = [
    {
      name: "Fatima",
      img: Profile,
      lang: "Arabic",
      hobbies: [
        "🏖️ Beaches",
        "⛰️ Mountains",
        "🌆 City sightseeing",
        "🌍 International destinations",
        "🛣️ Road trips",
      ],
    },
  ];
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
          <ProfileImg src={myProfile[0].img} alt="profile" />
          <ProfileTitle>
            <ProfileName>{myProfile[0].name}</ProfileName>
            <LanguageIcon
              letter={
                myProfile[0].lang === "Arabic"
                  ? "ع"
                  : myProfile.lang === "Hebrew"
                  ? "He"
                  : "En"
              }
            />
          </ProfileTitle>
          <InterestTextStyle>
            My Interest
            <HobbiesDisplay>
              {myProfile[0].hobbies.map((hobby, i) => {
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
