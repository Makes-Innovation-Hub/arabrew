import { ThemeProvider } from "styled-components"
import Glass from "../assets/Glass"
import { Flex } from "../styles/Flex"
import StyledButton from "../styles/StyledButton"
import { StyledTitle } from "../styles/StyledTitle"
import { StyledSpan } from "../styles/StyledSpan"
import { StyledMargin } from "../styles/StyledMargin"
import { StyledParagraph } from "../styles/StyledParahraph"

const theme = {
  colors: {

  },
  mobile: "798px"
}

const Intro = () => {
  return (
    <ThemeProvider theme={theme}>
    <Flex direction="column">
      <Glass/>
      <StyledMargin direction='vertical' margin='2rem'/>
      <StyledTitle>AraBrew</StyledTitle>
      <StyledMargin direction='vertical' margin='2rem'/>
      <StyledSpan>Hi!</StyledSpan>
      <StyledParagraph>
      Please answer some quick<br/>
      question so we can find you<br/>
      relevant people to chat with 
      </StyledParagraph>
      <StyledButton children={"Lets Do It"}/>
    </Flex>
    </ThemeProvider>
  )
}
export default Intro