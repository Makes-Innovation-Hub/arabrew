import { ThemeProvider } from "styled-components"
import Glass from "../assets/Glass"
import { Flex } from "../components/styles/Flex"

const theme = {
  colors: {

  },
  mobile: "798px"
}

const Intro = () => {
  return (
    <ThemeProvider theme={theme}>
    <Flex>
      <Glass/>
    </Flex>
    </ThemeProvider>
  )
}
export default Intro