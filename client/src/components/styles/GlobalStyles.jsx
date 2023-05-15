import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
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
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

`

export default GlobalStyles