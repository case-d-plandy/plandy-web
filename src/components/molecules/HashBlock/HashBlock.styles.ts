import styled from "basic-styled";

export const StyledHashBlock = styled.div`
  & ul {
    list-style: disc;
    padding: ${({ theme: { spacing } }) => `0 ${spacing(2.5)}px`};
    & li {
      padding: ${({ theme: { spacing } }) => `${spacing(0.5)}px 0`};
      & ul {
        list-style: square;
      }
    }
  }
`;

export const TitleWrapper = styled.div``;

export const HashTitle = styled.div`
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

export const HashTag = styled.div`
  position: absolute;
  top: 50%;
  left: -50px;
  transform: translateY(-50%);

  & svg {
    color: ${({ theme: { palette } }) => palette.primary};
  }

  @media (max-width: ${({ theme: { breakpoints } }) => `${breakpoints.lg + 70}px`}) {
    left: auto;
    right: -50px;
  }
`;
