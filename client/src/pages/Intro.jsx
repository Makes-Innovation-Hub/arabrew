import { ThemeProvider } from "styled-components"
import Glass from "../assets/Glass"
import { Flex } from "../styles/Flex"
import StyledButton from "../styles/StyledButton"
import { TitleWrapper } from "../styles/PageLayoutStyles"
import { StyledTitle } from "../styles/StyledTitle"
import { StyledSpan } from "../styles/StyledSpan"

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
      <StyledTitle>AraBrew</StyledTitle>
      <StyledSpan>Hi!</StyledSpan>
      <p>
      Please answer some quick<br/>
      question so we can find you<br/>
      relevant people to chat with 
      </p>
      <StyledButton children={"Lets Do It"}/>
    </Flex>
    </ThemeProvider>
  )
}
export default Intro