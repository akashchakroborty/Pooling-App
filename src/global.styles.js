import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: "Open Sans Condensed";
    color: #ffc627;
    padding: 20px 60px;
    @media screen and (max-width: 800px) {
        padding: 10px;
      }
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }

  button {
    color: #ffc627;
    border: 1px solid #ffc627;
    background-color: #0d223f;
    font-size: 12px;
    padding: 10px;
    text-decoration: none;
      
      &:hover,
      &:focus {
        color: #fff;
        background-color: #ffc627;
        border-color: #ffc627;
        cursor: pointer;
      }
  }
`;
