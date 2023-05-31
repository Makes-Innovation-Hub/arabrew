import { Link } from "react-router-dom";
import Header from "../components/Header";
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
} from "../styles";
import { ArrowLeft, LanguageIcon } from "../assets";
import Profile from "../assets/prf.webp";
const ProfilePage = () => {
  let myProfile = [
    {
      name: "Fatima",
      img: Profile,
      lang: "Arabic",
      hobbies: [
        "Beaches",
        "Mountains",
        "City sightseeing",
        "international destinations",
        "Road trips",
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
            <Link to="/">
              <ArrowLeft />
            </Link>
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
