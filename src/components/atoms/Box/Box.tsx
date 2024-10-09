import { HTMLAttributes } from "react";

import { StyledBox } from "./Box.styles";

import type { Properties } from "csstype";

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

export interface BoxSpacingProps {
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
}

export interface BoxProps
  extends HTMLAttributes<HTMLDivElement>,
    BoxSpacingProps,
    BoxFlexibleProps {
  css?: Properties;
}

function Box({ children, ...props }: BoxProps) {
  return <StyledBox {...props}>{children}</StyledBox>;
}

export default Box;
