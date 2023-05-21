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

const Intro = () => {
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
      <StyledButton to="/lang" text={"Lets Do It"} />
    </Flex>
  );
};
export default Intro;
