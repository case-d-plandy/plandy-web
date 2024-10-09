import Container from "@components/atoms/Container";
import { PropsWithChildren, ReactNode } from "react";

import { Main, StyledGeneralLayout } from "./GeneralLayout.styles";

interface GeneralLayoutProps {
  header?: ReactNode;
  footer?: ReactNode;
}

function GeneralLayout({ children, header, footer }: PropsWithChildren<GeneralLayoutProps>) {
  return (
    <StyledGeneralLayout>
      {header}
      <Main>
        <Container>{children}</Container>
      </Main>
      {footer}
    </StyledGeneralLayout>
  );
}

export default GeneralLayout;
