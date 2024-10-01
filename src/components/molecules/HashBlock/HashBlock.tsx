import Button from "@components/atoms/Button";
import Divider from "@components/atoms/Divider";
import Icon from "@components/atoms/Icon";
import Typography from "@components/atoms/Typography";
import { PropsWithChildren, ReactNode, useState } from "react";

import { HashTag, HashTitle, StyledHashBlock, TitleWrapper } from "./HashBlock.styles";

interface HashBlockProps {
  title: ReactNode;
  description?: ReactNode;
  onClick?: () => void;
}

function HashBlock({ children, title, description, onClick }: PropsWithChildren<HashBlockProps>) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => setIsHover(false);

  return (
    <StyledHashBlock>
      {title && (
        <TitleWrapper>
          <HashTitle onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {title}
            {isHover && (
              <HashTag onClick={onClick}>
                <Button variant={"text"}>
                  <Icon name={"HashTagBold"} width={30} height={30} />
                </Button>
              </HashTag>
            )}
          </HashTitle>
          <Divider />
        </TitleWrapper>
      )}
      <Typography display={"flex"} flexDirection={"column"} gap={2} pt={2} pb={2}>
        {description}
        {children}
      </Typography>
    </StyledHashBlock>
  );
}

export default HashBlock;
