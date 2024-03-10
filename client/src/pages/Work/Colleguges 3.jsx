// Colleague.jsx
import { Link } from "react-router-dom";
import { MessageIcon } from "../assets";
import {
  Flex,
  StyledHeaderTitle,
  StyledImage,
  StyledMargin,
  StyledBorder,
  Occupation,
} from "../styles";

const Colleague = ({ name, img, occupation, chatPage }) => {
  return (
    <>
      <Flex width="100%">
        <StyledImage src={img} alt="Profile" />
        <StyledMargin direction="horizontal" margin="1rem" />
        <StyledHeaderTitle color="#161616">{name}</StyledHeaderTitle>
        <Occupation>{occupation}</Occupation>
        <StyledBorder>
          <Link to={chatPage}>
            <MessageIcon />
          </Link>
        </StyledBorder>
      </Flex>
    </>
  );
};

export default Colleague;
