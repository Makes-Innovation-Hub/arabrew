import { Link } from "react-router-dom";
import { MessageIcon } from "../assets";
import {
  Flex,
  StyledHeaderTitle,
  StyledHobbiesContainer,
  StyledHobby,
  StyledImage,
  StyledMargin,
} from "../styles";

const Friend = ({ name, flag, img, hobbies }) => {
  console.log(hobbies);

  return (
    <>
      <Flex width="100%">
        <StyledImage src={img} />
        <StyledMargin direction="horizontal" margin="1rem" />
        <img src={`https://flagsapi.com/${flag}/shiny/16.png`} />
        <StyledMargin direction="horizontal" margin="1rem" />
        <StyledHeaderTitle color="#161616">{name}</StyledHeaderTitle>
        <Link>
          <MessageIcon />
        </Link>
      </Flex>
      <StyledHobbiesContainer>
        {hobbies.map((hobby) => (
          <StyledHobby key={hobby}>{hobby}</StyledHobby>
        ))}
      </StyledHobbiesContainer>
    </>
  );
};
export default Friend;
