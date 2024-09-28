import styled from "basic-styled";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: ${({ theme: { spacing } }) => `${spacing(10)}px ${spacing(3)}px ${spacing(3)}px`};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: ${({ theme: { spacing } }) => `${spacing(8)}px 0 ${spacing(3)}px`};
  background-color: ${({ theme: { palette } }) => palette.subText};
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: { spacing } }) => `${spacing(2)}px`};
`;

export const Copyright = styled.span`
  ${({
    theme: {
      typography: { body },
      palette
    }
  }) => ({
    fontSize: body.small.size,
    fontWeight: body.small.weight,
    letterSpacing: body.small.letterSpacing,
    color: palette.subText
  })}
`;

export const PolicyButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => `${spacing(1)}px`};
`;
