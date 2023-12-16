import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  :root {
    box-sizing: border-box;

    --font-serif: "Noto Serif";
    --font-sans-serif: "Lato";
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  * {
    font-family: var(--font-sans-serif);
  }

  ul {
    padding: 0
  }
`