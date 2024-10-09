import { BoxFlexibleProps, BoxSpacingProps } from "@components/atoms/Box";
import styled from "basic-styled";

import type { TypographyProps } from "./Typography";

export const StyledTypography = styled.div<
  Pick<
    TypographyProps,
    | "variant"
    | "size"
    | "fontSize"
    | "fontWeight"
    | "color"
    | keyof BoxSpacingProps
    | keyof BoxFlexibleProps
  >
>`
  ${({
    theme: { spacing },
    p,
    pt,
    pr,
    pb,
    pl,
    m,
    mt,
    mr,
    mb,
    ml,
    gap,
    display,
    alignItems,
    justifyContent,
    flex,
    flexWrap,
    flexDirection,
    flexGrow,
    flexFlow,
    flexBasis,
    flexShrink
  }) => {
    const padding = {
      paddingTop: pt ? `${spacing(pt)}px` : p ? `${spacing(p)}px` : undefined,
      paddingRight: pr ? `${spacing(pr)}px` : p ? `${spacing(p)}px` : undefined,
      paddingBottom: pb ? `${spacing(pb)}px` : p ? `${spacing(p)}px` : undefined,
      paddingLeft: pl ? `${spacing(pl)}px` : p ? `${spacing(p)}px` : undefined
    };

    const margin = {
      marginTop: mt ? `${spacing(mt)}px` : m ? `${spacing(m)}px` : undefined,
      marginRight: mr ? `${spacing(mr)}px` : m ? `${spacing(m)}px` : undefined,
      marginBottom: mb ? `${spacing(mb)}px` : m ? `${spacing(m)}px` : undefined,
      marginLeft: ml ? `${spacing(ml)}px` : m ? `${spacing(m)}px` : undefined
    };

    const cssObject = {
      gap: gap ? `${spacing(gap)}px` : undefined,
      ...padding,
      ...margin,
      display,
      alignItems,
      justifyContent,
      flex,
      flexWrap,
      flexDirection,
      flexGrow,
      flexFlow,
      flexBasis,
      flexShrink
    };

    Object.keys(cssObject).forEach((key) => {
      const asKey = key as keyof typeof cssObject;
      if (cssObject[asKey] === undefined) {
        delete cssObject[asKey];
      }
    });

    return cssObject;
  }};

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
    color: palette[color as keyof typeof color] || color || {}
  })};
`;
