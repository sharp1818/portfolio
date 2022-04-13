
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   :root {
      --white: #fff;
      --black: #202020;
      --blue: #98a4ca;
      --red: #f35858;
   }
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
   }
   body {
      background-color: var(--white);
      font-family: 'Quicksand', sans-serif;
   }
   a {
      text-decoration: none;
      color: unset;
   }
   button,
   input {
      outline: 0;
   }
   ul {
      list-style-type: none;
   }
   img {
      max-width: 100%;
   }
`;