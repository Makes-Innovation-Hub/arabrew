import { ThemeProvider } from "styled-components";
import Glass from "../assets/Glass";
// import { Flex } from "../components/styles/Flex"
import { PagesStyle } from "../style";
const theme = {
  colors: {},
  mobile: "798px",
};

const Intro = () => {
  return (
    <ThemeProvider theme={theme}>
      <PagesStyle>
        <Glass />
      </PagesStyle>
    </ThemeProvider>
  );
};
export default Intro;
