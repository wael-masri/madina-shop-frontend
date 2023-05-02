import styled, { createGlobalStyle } from "styled-components";
//GLOBAL STYLE
export const GlobaleStyles = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: Poppins,sans-serif;
    min-height: 100vh;
  }
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #ea1c26;
  border-radius: 40px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
.react-confirm-alert-overlay {
  background: rgba(0, 0, 0, 0.7);
  z-index: 12212132;
}
`;
export const LoadButton = styled.img`
width: 25px;
height: auto;
margin-left: 3px;
`;