import { ThemeProvider } from "styled-components";
import Glass from "../assets/Glass";
import { PagesStyle } from "../styles";
import StyledButton from "../styles/StyledButton";
import { StyledTitle } from "../styles/StyledTitle";
import { StyledSpan } from "../styles/StyledSpan";
import { StyledDiv } from "../styles/StyledDiv";
import { StyledMargin } from "../styles/StyledMargin";
import { StyledParagraph } from "../styles/StyledParahraph";

const theme = {
  colors: {},
  mobile: "798px",
};

const Intro = () => {
  return (
    <ThemeProvider theme={theme}>
      ;
      <PagesStyle style={{ marginTop: "20%" }}>
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
        <StyledButton text="Lets do it" />
      </PagesStyle>
    </ThemeProvider>
  );
};
export default Intro;
