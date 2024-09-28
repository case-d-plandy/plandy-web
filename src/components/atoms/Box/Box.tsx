import type { Properties } from "csstype";
import { HTMLAttributes, PropsWithChildren } from "react";

import { StyledBox } from "./Box.styles";

export type BoxFlexibleProps = Pick<
  Properties,
  | "display"
  | "alignItems"
  | "justifyContent"
  | "flex"
  | "flexWrap"
  | "flexDirection"
  | "flexGrow"
  | "flexFlow"
  | "flexBasis"
  | "flexShrink"
>;

export interface BoxProps extends HTMLAttributes<HTMLDivElement>, BoxFlexibleProps {
  gap?: number;
  p?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  m?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  css?: Properties;
}

function Box({ children, ...props }: PropsWithChildren<BoxProps>) {
  return <StyledBox {...props}>{children}</StyledBox>;
}

export default Box;
