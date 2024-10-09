import styled from "basic-styled";

import type { IconProps } from "./Icon";

export const StyledIcon = styled.svg<Pick<IconProps, "color">>`
  ${({ theme: { palette }, color }) => ({
    color: palette[color as keyof typeof color] || color || {}
  })};
`;
