import styled from "basic-styled";

function GlobalStyle() {
  return <StyledGlobal globalStyle />;
}

const StyledGlobal = styled.style`
  @font-face {
    font-family: "Paperlogy";
    font-weight: 800;
    src: url("/fonts/Paperlogy-8ExtraBold.woff2") format("woff");
  }
  @font-face {
    font-family: "Paperlogy";
    font-weight: 700;
    src: url("/fonts/Paperlogy-7Bold.woff2") format("woff");
  }
  @font-face {
    font-family: "Paperlogy";
    font-weight: 500;
    src: url("/fonts/Paperlogy-5Medium.woff2") format("woff");
  }
  @font-face {
    font-family: "Paperlogy";
    font-weight: 400;
    src: url("/fonts/Paperlogy-4Regular.woff2") format("woff");
  }

  html,
  body {
    height: 100%;
    font-family: "Pretendard Variable", serif;
    background-color: ${({
      theme: {
        palette: { background }
      }
    }) => background};
    color: ${({
      theme: {
        palette: { mainText }
      }
    }) => mainText};
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  @-webkit-keyframes bounceDelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes bounceDelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

export default GlobalStyle;
