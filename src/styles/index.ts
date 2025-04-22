import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFF;
    --black: #000;
    --background: #EAF3FF;

    --primary-main: #4F45E4;

    --purple-900: #16009B;
    --purple-500: #6A63EB;
    --purple-100: #dfe7ff;

    --gray-primary: #cccccc;
    --gray-900: #727886;
    --gray-800: #67707F;
    --gray-700: #9aa2ae;
    --gray-600: #d9d9dd;
    --gray-200: #e7e9ed;
    --gray-100: #f9fafb;

    --dark-gray: #444444;

    --green-primary: #52C41A;

    --red-primary: #FF4D4E;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: var(--gray-100);
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
