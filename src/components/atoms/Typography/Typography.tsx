import { HTMLAttributes } from "react";

import typography from "@theme/typography";

import { StyledTypography } from "./Typography.styles";

import type { BoxFlexibleProps, BoxSpacingProps } from "@components/atoms/Box";
import type { BasicTheme } from "basic-styled";
import type { Properties } from "csstype";

export interface TypographyProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
    BoxFlexibleProps,
    BoxSpacingProps {
  variant?: keyof typeof typography;
  size?: keyof (typeof typography)["display"];
  fontSize?: string;
  fontWeight?: number;
  color?:
    | Extract<keyof BasicTheme["palette"], "primary" | "secondary" | "tertiary">
    | Properties["color"];
}

function Typography({
  children,
  variant = "body",
  size = "medium",
  fontSize,
  fontWeight,
  ...props
}: TypographyProps) {
  return (
    <StyledTypography
      variant={variant}
      size={size}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...props}
    >
      {children}
    </StyledTypography>
  );
}

export default Typography;
