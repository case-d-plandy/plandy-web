import { PropsWithChildren, ReactNode } from "react";

import Divider from "@components/atoms/Divider";
import Typography from "@components/atoms/Typography";

import { StyledBlock, Title, TitleWrapper } from "./Block.styles";

interface HashBlockProps {
  title: ReactNode;
  description?: ReactNode;
}

function Block({ children, title, description }: PropsWithChildren<HashBlockProps>) {
  return (
    <StyledBlock>
      <TitleWrapper>
        <Title>{title}</Title>
        <Divider />
      </TitleWrapper>
      <Typography display="flex" flexDirection="column" gap={2} pt={2} pb={2}>
        {description}
        {children}
      </Typography>
    </StyledBlock>
  );
}

export default Block;
