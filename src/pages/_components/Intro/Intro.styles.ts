import styled from "basic-styled";

export const StyledIntro = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme: { spacing } }) => `${spacing(4)}px`};
  font-family: "Paperlogy";

  @media (max-width: ${({ theme: { breakpoints } }) => `${breakpoints.sm}px`}) {
    flex-direction: column;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => `${spacing(1)}px`};
  padding: ${({ theme: { spacing } }) => `${spacing(20)}px 0px`};

  & svg {
    color: ${({ theme: { palette } }) => palette.primary};
  }

  @media (max-width: ${({ theme: { breakpoints } }) => `${breakpoints.sm}px`}) {
    padding: 0;
  }
`;

export const Title = styled.h1`
  background: linear-gradient(
    90deg,
    ${({ theme: { palette } }) => palette.secondary} 5%,
    ${({ theme: { palette } }) => palette.primary} 90%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;

  ${({
    theme: {
      typography: { display }
    }
  }) => ({
    fontSize: display.large.size,
    fontWeight: 700,
    letterSpacing: display.large.letterSpacing
  })};

  @media (max-width: ${({ theme: { breakpoints } }) => `${breakpoints.sm}px`}) {
    ${({
      theme: {
        typography: { display }
      }
    }) => ({
      fontSize: display.small.size,
      fontWeight: 700,
      letterSpacing: display.small.letterSpacing
    })};
  }
`;

export const SubTitle = styled.h2`
  ${({
    theme: {
      typography: { headline }
    }
  }) => ({
    fontSize: headline.large.size,
    fontWeight: 500,
    letterSpacing: headline.large.letterSpacing
  })};

  @media (max-width: ${({ theme: { breakpoints } }) => `${breakpoints.sm}px`}) {
    ${({
      theme: {
        typography: { headline }
      }
    }) => ({
      fontSize: headline.small.size,
      fontWeight: 500,
      letterSpacing: headline.small.letterSpacing
    })};
  }
`;

export const ImageBox = styled.div`
  text-align: center;
  flex-grow: 1;
  padding: ${({ theme: { spacing } }) => `${spacing(20)}px ${spacing(10)}px`};
  border: 1px solid ${({ theme: { palette } }) => palette.box.border};
  border-radius: ${({ theme: { spacing } }) => `${spacing(1)}px`};
`;
