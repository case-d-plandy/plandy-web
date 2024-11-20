import styled from "basic-styled";

export const StyledIntro = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme: { spacing } }) => `${spacing(4)}px`};
  font-family: "Paperlogy";

  @media (max-width: ${({ theme: { breakpoints } }) => `${breakpoints.sm}px`}) {
    flex-direction: column;
    margin: 0 -24px;
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
    align-items: center;
    text-align: center;
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
    letterSpacing: display.large.letterSpacing,
    lineHeight: "70px"
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
    fontSize: headline.small.size,
    fontWeight: 500,
    letterSpacing: headline.small.letterSpacing
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
  text-align: right;
  flex-grow: 1;
  padding: ${({ theme: { spacing } }) => `${spacing(10)}px 0 ${spacing(10)}px ${spacing(8)}px`};
  background-color: ${({ theme: { palette } }) => palette.grey["100"]};
  border-radius: ${({ theme: { spacing } }) => `${spacing(4)}px`};
  overflow: hidden;

  & > img {
    max-width: 750px;
    width: 100%;
    max-height: 574px;
    height: auto;

    @media (max-width: ${({ theme: { breakpoints } }) => `${breakpoints.sm}px`}) {
      width: 120%;
    }
  }

  @media (max-width: ${({ theme: { breakpoints } }) => `${breakpoints.sm}px`}) {
    text-align: center;
    padding: 0;
    border-radius: 0;
  }
`;
