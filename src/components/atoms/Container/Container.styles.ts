import styled from "basic-styled";

import type { ContainerProps } from "./Container";

export const StyledContainer = styled.div<Pick<ContainerProps, "maxWidth">>`
  width: 100%;
  max-width: ${({ theme: { breakpoints }, maxWidth = "lg" }) => `${breakpoints[maxWidth]}px`};
`;
