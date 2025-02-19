import styled from "basic-styled";

export const StyledBlock = styled.div`
  & ul {
    list-style: disc;
    padding: ${({ theme: { spacing } }) => `0 ${spacing(2.5)}px`};
    & li {
      padding: ${({ theme: { spacing } }) => `${spacing(0.5)}px 0`};
      line-height: 1.5;
      & ul {
        list-style: circle;
      }
    }
  }

  a {
    text-decoration: underline;
  }
`;

export const TitleWrapper = styled.div``;

export const Title = styled.div`
  position: relative;
  margin-bottom: ${({ theme: { spacing } }) => `${spacing(1)}px`};
  max-width: fit-content;

  ${({
    theme: {
      typography: { headline }
    }
  }) => ({
    fontSize: headline.small.size,
    fontWeight: 700,
    letterSpacing: headline.small.letterSpacing
  })}
`;
