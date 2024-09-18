import * as Svgs from "@assets/icons";
import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGElement> {
  name: keyof typeof Svgs;
}

function Icon({ name, ...props }: IconProps) {
  const SvgIcon = Svgs[name];

  return <SvgIcon {...props} />;
}

export default Icon;
