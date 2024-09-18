import styled from "basic-styled";

function GlobalStyle() {
  return <StyledGlobal globalStyle />;
}

const StyledGlobal = styled.style`
  html,
  body {
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
`;

export default GlobalStyle;
