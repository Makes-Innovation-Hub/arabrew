import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "Poppins";
    src: url("/src/assets/fonts/Poppins-Medium.ttf") format("truetype");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
    font-size: 62.5%; 
    background-color: red;
  }
  body {
    height: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem; 
    background-color: yellow;
  }

  p{
    line-height: 1.5;
  }
  `;
export default GlobalStyles;
