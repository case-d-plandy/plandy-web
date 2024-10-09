import styled from "basic-styled";

export const StyledMessageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => `${spacing(3)}px`};
  margin: auto;

  & > svg {
    color: ${({ theme: { palette } }) => palette.tertiary};
  }
`;
