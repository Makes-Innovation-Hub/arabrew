import { Link } from "react-router-dom";
import Header from "../components/Header";
import {
  Flex,
  StyledPage,
  StyledMargin,
  StyledProfilePage,
  ProfileImg,
  ProfileTitle,
} from "../styles";
import { ArrowLeft, LanguageIcon } from "../assets";
import Profile from "../assets/prf.webp";
const ProfilePage = () => {
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
          <ProfileImg src={Profile} alt="profile" />
          <ProfileTitle>
            <p>Fatina</p>
            <LanguageIcon letter={"E"} />
          </ProfileTitle>
        </StyledProfilePage>
      </StyledPage>
    </div>
  );
};
export default ProfilePage;
