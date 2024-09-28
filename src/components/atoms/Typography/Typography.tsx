import typography from "@theme/typography";
import { HTMLAttributes } from "react";

import { StyledTypography } from "./Typography.styles";

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof typography;
  size?: keyof (typeof typography)["display"];
  fontSize?: string;
  fontWeight?: number;
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
