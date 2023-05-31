import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&display=swap');
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

@media only screen and (max-width: 800px) {
  html {
    font-size: 50%;
  }
}

body {

  font-family: 'ABeeZee', sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

`;

export default GlobalStyles;
