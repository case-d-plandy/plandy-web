import styled from "basic-styled";

import type { ContainerProps } from "./Container";

export const StyledContainer = styled.div<Pick<ContainerProps, "maxWidth">>`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  max-width: ${({ theme: { breakpoints }, maxWidth = "lg" }) => `${breakpoints[maxWidth]}px`};
`;
