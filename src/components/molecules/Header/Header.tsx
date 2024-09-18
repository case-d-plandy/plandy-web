import Button from "@components/atoms/Button";
import Container from "@components/atoms/Container";
import Icon from "@components/atoms/Icon";

import { Adornment, HeaderInner, Logo, StyledHeader } from "./Header.styles";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <HeaderInner>
          <Logo>
            <img width={30} height={30} src={"/icons/apple-icon.png"} alt={"Plan Mate Logo"} />
          </Logo>
          <Adornment>
            <Button variant={"text"} size={"small"}>
              Language
            </Button>
            <Button variant={"text"} size={"small"}>
              <Icon name={"SunBold"} width={18} height={18} />
            </Button>
          </Adornment>
        </HeaderInner>
      </Container>
    </StyledHeader>
  );
}

export default Header;
