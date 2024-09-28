import styled from "basic-styled";

import type { TypographyProps } from "./Typography";

export const StyledTypography = styled.div<
  Pick<TypographyProps, "variant" | "size" | "fontSize" | "fontWeight" | "color">
>`
  ${({
    theme: { palette, typography },
    variant = "body",
    size = "medium",
    fontSize,
    fontWeight,
    color
  }) => ({
    fontSize: fontSize || typography[variant][size].size,
    fontWeight: fontWeight || typography[variant][size].weight,
    letterSpacing: typography[variant][size].letterSpacing,
    color: palette[color as keyof typeof color] || color
  })};
`;
