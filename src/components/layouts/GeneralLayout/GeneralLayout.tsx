import Container from "@components/atoms/Container";
import { PropsWithChildren, ReactNode } from "react";

import { StyledGeneralLayout } from "./GeneralLayout.styles";

interface GeneralLayoutProps {
  header?: ReactNode;
  footer?: ReactNode;
}

function GeneralLayout({ children, header, footer }: PropsWithChildren<GeneralLayoutProps>) {
  return (
    <StyledGeneralLayout>
      {header}
      <Container>{children}</Container>
      {footer}
    </StyledGeneralLayout>
  );
}

export default GeneralLayout;
