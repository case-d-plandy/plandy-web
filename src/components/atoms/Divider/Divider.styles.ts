import styled from "basic-styled";

export const StyledDivider = styled.div`
  height: 1px;
  min-height: 1px;
  background-color: ${({ theme: { palette } }) => palette.box.border};
`;
