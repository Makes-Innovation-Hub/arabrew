import { ThemeProvider } from "styled-components";
import Glass from "../assets/Glass.jsx";
import { Flex } from "../components/styles/Flex.jsx";

const theme = {
  colors: {},
  mobile: "798px",
};

const Intro = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex>
        <Glass />
      </Flex>
    </ThemeProvider>
  );
};
export default Intro;
