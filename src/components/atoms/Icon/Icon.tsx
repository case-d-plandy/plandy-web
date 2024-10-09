import * as Svgs from "@assets/icons";
import type { BasicTheme } from "basic-styled";
import type { Properties } from "csstype";
import { Children, isValidElement, ReactNode, SVGProps } from "react";

import { StyledIcon } from "./Icon.styles";

export interface IconProps extends SVGProps<SVGElement> {
  name: keyof typeof Svgs;
  color?:
    | Extract<keyof BasicTheme["palette"], "primary" | "secondary" | "tertiary">
    | Properties["color"];
}

function Icon({ name, width, height, ...props }: IconProps) {
  const SvgIcon = Svgs[name] as unknown as () => ReactNode;

  return Children.map(SvgIcon(), (child) => {
    if (!isValidElement(child)) {
      return null;
    }

    const newProps = {
      ...props,
      ...child.props
    };

    newProps.width = width ?? newProps.width;
    newProps.height = height ?? newProps.height;

    return <StyledIcon {...newProps} />;
  });
}

export default Icon;
