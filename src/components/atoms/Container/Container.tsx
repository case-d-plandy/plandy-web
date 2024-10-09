import type { BasicTheme } from "basic-styled";
import { PropsWithChildren } from "react";

import { StyledContainer } from "./Container.styles";

export interface ContainerProps {
  maxWidth?: keyof BasicTheme["breakpoints"];
}

function Container({ children, maxWidth = "lg" }: PropsWithChildren<ContainerProps>) {
  return <StyledContainer maxWidth={maxWidth}>{children}</StyledContainer>;
}

export default Container;
