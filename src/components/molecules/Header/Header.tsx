import Button from "@components/atoms/Button";
import Container from "@components/atoms/Container";
import Icon from "@components/atoms/Icon";
import useThemeStore from "@stores/theme";

import { Adornment, HeaderInner, Logo, StyledHeader } from "./Header.styles";

function Header() {
  const mode = useThemeStore((state) => state.mode);
  const updateTrigger = useThemeStore((state) => state.updateTrigger);
  const updateMode = useThemeStore((state) => state.updateMode);

  const handleClick = () => {
    updateTrigger("manual");
    updateMode(mode === "dark" ? "light" : "dark");
  };

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
            <Button variant={"text"} size={"small"} onClick={handleClick}>
              {mode === "dark" ? (
                <Icon name={"SunBold"} width={18} height={18} />
              ) : (
                <Icon name={"MoonBold"} width={18} height={18} />
              )}
            </Button>
          </Adornment>
        </HeaderInner>
      </Container>
    </StyledHeader>
  );
}

export default Header;
