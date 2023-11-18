import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  :root {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  * {
    font-family: "Lato";
  }

  ul {
    padding: 0
  }
`