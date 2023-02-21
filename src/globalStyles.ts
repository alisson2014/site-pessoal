import { createGlobalStyle } from "styled-components"

export const ResetCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
        animation: fadeIn 0.8s both;
        font-family: "Inter", sans-serif;
    }

  body * {
    color: #252525;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`
