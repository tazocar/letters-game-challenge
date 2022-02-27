import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #f7f7f7;
    font-family: Tahoma, Verdana, sans-serif;
  }
`;

export default GlobalStyle;
