import { createGlobalStyle, css } from "styled-components";
import { normalize } from "./normalize";
import { reset } from "./reset";

const GlobalStyles = createGlobalStyle`
  ${normalize};
  ${reset}; 
  @font-face {
    font-family: "Rubik", sans-serif;
    src: url("https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Rubik", sans-serif;
    src: url("https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900");
    font-weight: 500;
    font-style: semibold;
  }
  @font-face {
    font-family: "Rubik", sans-serif;
    src: url("https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900");
    font-weight: 700;
    font-style: bold;
  }
  body {
    font-family: "Rubik", sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    ${({ theme }) => css`
      background-color: ${theme.body.background};
      color: ${theme.body.color};
      font-size: ${theme.body.fontSize};
      font-weight: 400;
    `}

    .app {
      background-color: ${({ theme }) => theme.color.white};
      max-width: 600px;
      margin: 0 auto;

      .infinite-scroll-component {
        -ms-overflow-style: none; 
        scrollbar-width: none;
      
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
`;

export default GlobalStyles;
