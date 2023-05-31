import { Link } from "react-router-dom";
import { MessageIcon, HebrewIcon } from "../assets";
import {
  Flex,
  StyledHeaderTitle,
  StyledHobbiesContainer,
  StyledHobby,
  StyledImage,
  StyledMargin,
} from "../styles";

const Friend = ({ name, flag }) => {
  return (
    <div>
      <Flex>
        <StyledImage src="https://lh3.googleusercontent.com/a/AAcHTtc9yeNvTCp5Po3J16D7mw9c64uCY12_gT1yyrdAme4=s96-c" />
        <StyledMargin direction="horizontal" margin="1rem" />
        <img src="https://flagsapi.com/IL/shiny/16.png" />
        <StyledMargin direction="horizontal" margin="1rem" />
        <StyledHeaderTitle color="#161616">{name}</StyledHeaderTitle>
        <StyledMargin direction="horizontal" margin="19rem" />
        <Link>
          <MessageIcon />
        </Link>
      </Flex>
      <StyledHobbiesContainer>
        <StyledHobby>🎸 Rock</StyledHobby>
        <StyledHobby>⚽ Football</StyledHobby>
      </StyledHobbiesContainer>
    </div>
  );
};
export default Friend;
