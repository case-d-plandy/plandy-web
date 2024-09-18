import styled from "basic-styled";

function GlobalStyle() {
  return <StyledGlobal globalStyle />;
}

const StyledGlobal = styled.style`
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
    height: 100%;
  }
`;

export default GlobalStyle;
