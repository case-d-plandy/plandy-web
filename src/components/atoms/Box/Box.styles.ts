import styled from "basic-styled";

import type { BoxFlexibleProps, BoxProps, BoxSpacingProps } from "./Box";

export const StyledBox = styled.div<
  Pick<BoxProps, "css" | keyof BoxSpacingProps | keyof BoxFlexibleProps>
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
    flexShrink,
    css
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
      flexShrink,
      ...css
    };

    Object.keys(cssObject).forEach((key) => {
      const asKey = key as keyof typeof cssObject;
      if (cssObject[asKey] === undefined) {
        delete cssObject[asKey];
      }
    });

    return cssObject;
  }}
`;
