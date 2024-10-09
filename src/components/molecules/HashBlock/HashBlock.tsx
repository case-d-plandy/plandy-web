import Button from "@components/atoms/Button";
import Divider from "@components/atoms/Divider";
import Icon from "@components/atoms/Icon";
import Typography from "@components/atoms/Typography";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { HashTag, HashTitle, StyledHashBlock, TitleWrapper } from "./HashBlock.styles";

interface HashBlockProps {
  title: ReactNode;
  description?: ReactNode;
  to?: string;
}

function HashBlock({ children, title, description, to }: PropsWithChildren<HashBlockProps>) {
  const { pathname, hash } = useLocation();

  const [isHover, setIsHover] = useState(false);

  const isMatched = `${pathname}${hash}` === to;

  const handleClick = () => {
    if (isMatched) {
      const hashBlockElement = document.getElementById(`hash-block-${to}`);
      const headerElement = document.getElementById("header");

      if (hashBlockElement) {
        window.scrollTo({
          top: hashBlockElement.offsetTop - (headerElement?.offsetHeight || 0),
          behavior: "smooth"
        });
      }
    }
  };

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => setIsHover(false);

  useEffect(() => {
    if (isMatched) {
      const hashBlockElement = document.getElementById(`hash-block-${to}`);
      const headerElement = document.getElementById("header");

      if (hashBlockElement) {
        window.scrollTo({
          top: hashBlockElement.offsetTop - (headerElement?.offsetHeight || 0),
          behavior: "smooth"
        });
      }
    }
  }, [pathname, hash]);

  return (
    <StyledHashBlock id={`hash-block-${to}`}>
      {title && (
        <TitleWrapper>
          <HashTitle onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {title}
            {to && isHover && (
              <HashTag>
                <Link to={to || "#"}>
                  <Button variant="text" onClick={handleClick}>
                    <Icon name="HashTagBold" width={30} height={30} />
                  </Button>
                </Link>
              </HashTag>
            )}
          </HashTitle>
          <Divider />
        </TitleWrapper>
      )}
      <Typography display="flex" flexDirection="column" gap={2} pt={2} pb={2}>
        {description}
        {children}
      </Typography>
    </StyledHashBlock>
  );
}

export default HashBlock;
