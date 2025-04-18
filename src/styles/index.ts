import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFF;
    --black: #000;
    --background: #EAF3FF;

    --primary-main: #4F45E4;
    --secondary-main: #006699;

    --purple-900: #16009B;
    --purple-500: #6A63EB;

    --gray-primary: #cccccc;
    --gray-800: #9aa2ae;
    --gray-600: #d9d9dd;

    --red-primary: #FF4D4E;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    background-color: var(--gray-100);
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
