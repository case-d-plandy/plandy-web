import styled from "basic-styled";

import type { OptionProps } from "./Option";

export const StyledOption = styled.div<Pick<OptionProps, "selected">>`
  padding: ${({ theme: { spacing } }) => `${spacing(1)}px`};
  cursor: pointer;

  ${({ theme: { palette }, selected }) => ({
    color: selected ? palette.primary : undefined
  })};
`;
