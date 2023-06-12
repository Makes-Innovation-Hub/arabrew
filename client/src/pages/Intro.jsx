import { Glass } from "../assets";
import {
  Flex,
  StyledButton,
  StyledTitle,
  StyledSpan,
  StyledDiv,
  StyledMargin,
  StyledParagraph,
} from "../styles";
import { useSelector } from "react-redux";

const Intro = () => {
  const isAuthenticated = useSelector(
    (state) => state.userStatus.isAuthenticated
  );
  const hasOnBoarded = useSelector((state) => state.userStatus.hasOnBoarded);

  let path = "";

  if (!isAuthenticated) {
    path = "/tempAuth";
  } else if (!hasOnBoarded) {
    path = "/lang";
  } else {
    path = "/conversation";
  }

  return (
    <Flex direction="column" height="100vh">
      <Glass />
      <StyledMargin direction="vertical" margin="2rem" />
      <StyledTitle>AraBrew</StyledTitle>
      <StyledMargin direction="vertical" margin="2rem" />
      <StyledSpan>Hi!</StyledSpan>
      <StyledDiv>
        <StyledParagraph>
          Please answer some quick question so we can find you relevant people
          to chat with
        </StyledParagraph>
      </StyledDiv>
      <StyledButton to={path} text={"Lets Do It"} />
    </Flex>
  );
};
export default Intro;
