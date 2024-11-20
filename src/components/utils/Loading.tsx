import styled from "basic-styled";

function Loading() {
  return (
    <StyledSpinner>
      <Bounce1 />
      <Bounce2 />
      <Bounce3 />
    </StyledSpinner>
  );
}

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  flex: 1 1 0;
  transform: translateY(50%);

  & > div {
    width: 18px;
    height: 18px;
    background-color: ${({ theme: { palette } }) => palette.tertiary};
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bounceDelay 1.4s infinite ease-in-out both;
    animation: bounceDelay 1.4s infinite ease-in-out both;
  }
`;

const Bounce1 = styled.div`
  -webkit-animation-delay: -0.32s !important;
  animation-delay: -0.32s !important;
`;

const Bounce2 = styled.div`
  -webkit-animation-delay: -0.16s !important;
  animation-delay: -0.16s !important;
`;

const Bounce3 = styled.div`
  -webkit-animation-delay: -1.4s !important;
  animation-delay: -1.4s !important;
`;

export default Loading;
