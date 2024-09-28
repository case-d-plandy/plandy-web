import styled from "basic-styled";

export const StyledTitle = styled.h1`
  padding: ${({ theme }) => `${theme.spacing(2)}px 0`};

  ${({
    theme: {
      typography: { headline }
    }
  }) => ({
    fontSize: headline.medium.size,
    fontWeight: 700,
    letterSpacing: headline.medium.letterSpacing
  })}
`;
