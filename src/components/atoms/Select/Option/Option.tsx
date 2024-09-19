import { HTMLAttributes } from "react";

import { StyledOption } from "./Option.styles";

export interface OptionProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  selected?: boolean;
}

function Option({ children, ...props }: OptionProps) {
  return <StyledOption {...props}>{children}</StyledOption>;
}

export default Option;
