import { Link } from "react-router-dom";
import { Header, Friend } from "../components";
import {
  StyledPage,
  StyledMargin,
  StyledPageTitle,
  StyledHobby,
  StyledHobbiesContainer,
  StyledMsgButton,
} from "../styles";
import { ArrowLeft, SmallGlass } from "../assets";

const CommonInterests = () => {
  return (
    <>
      <Header
        leftIcon={
          <Link to="/conversation">
            <ArrowLeft />
          </Link>
        }
        midIcon={<SmallGlass />}
      />
      <StyledPage>
        <StyledMargin direction="vertical" margin="1.75rem" />
        <StyledPageTitle>Search friends</StyledPageTitle>
        <StyledMargin direction="vertical" margin="0.75rem" />
        <StyledPageTitle>by common Interests</StyledPageTitle>
        <StyledMargin direction="vertical" margin="2rem" />
        <StyledHobbiesContainer>
          <StyledHobby>🎸 Rock</StyledHobby>
          <StyledHobby>⚽ Football</StyledHobby>
          <StyledHobby>🎮 Video Games</StyledHobby>
          <StyledHobby>🏀 Basketball</StyledHobby>
          <StyledHobby>✏️ Drawing</StyledHobby>
        </StyledHobbiesContainer>
        <Friend />
      </StyledPage>
    </>
  );
};
export default CommonInterests;
