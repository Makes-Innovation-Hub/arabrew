import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap'); */

@font-face {
  font-family: 'Poppins';
  src: url('../assets/fonts/Poppins-Medium.ttf') format('truetype'),
       url("../assets/fonts/Poppins-Bold.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; 
    font-family: 'Poppins', sans-serif
  }

  body {
    font-size: 1.6rem; 
  }

  p{
    line-height: 1.5;
  }


  `;
export default GlobalStyles;
