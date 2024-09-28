import { PropsWithChildren } from "react";

import { StyledTitle } from "./Title.styles";

function Title({ children }: PropsWithChildren) {
  return <StyledTitle>{children}</StyledTitle>;
}

export default Title;
