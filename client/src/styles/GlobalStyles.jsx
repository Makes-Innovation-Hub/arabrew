import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; 
    
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem; 
  }

  p{
    line-height: 1.5;
  }


  `;
export default GlobalStyles;
