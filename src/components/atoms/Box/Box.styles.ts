import styled from "basic-styled";

import type { BoxFlexibleProps, BoxProps } from "./Box";

export const StyledBox = styled.div<
  Pick<BoxProps, "p" | "pt" | "pr" | "pb" | "pl" | "m" | "mt" | "mr" | "mb" | "ml" | "css"> &
    BoxFlexibleProps
>`
  ${({ theme: { spacing }, css, ...props }) => {
    const { p, pt, pr, pb, pl, m, mt, mr, mb, ml, ...flexibleProps } = props;

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

    return {
      ...padding,
      ...margin,
      ...flexibleProps,
      ...css
    };
  }}
`;
