import Button from "@components/atoms/Button";
import Container from "@components/atoms/Container";
import Icon from "@components/atoms/Icon";
import Select, { Option } from "@components/atoms/Select";
import useThemeStore from "@stores/theme";
import { useState } from "react";

import { Adornment, HeaderInner, Logo, StyledHeader } from "./Header.styles";

function Header() {
  const mode = useThemeStore((state) => state.mode);
  const updateTrigger = useThemeStore((state) => state.updateTrigger);
  const updateMode = useThemeStore((state) => state.updateMode);

  const [value, setValue] = useState("english");

  const handleClick = () => {
    updateTrigger("manual");
    updateMode(mode === "dark" ? "light" : "dark");
  };

  const handleChange = (newValue?: string) => setValue(newValue || "english");

  return (
    <StyledHeader>
      <Container>
        <HeaderInner>
          <Logo>
            <img width={30} height={30} src={"/icons/apple-icon.png"} alt={"Plan Mate Logo"} />
          </Logo>
          <Adornment>
            <Select
              size={"small"}
              onChange={handleChange}
              value={value}
              endIcon={<Icon name={"ArrowDownBold"} width={18} height={18} />}
            >
              <Option value={"korea"}>한국어</Option>
              <Option value={"english"}>English</Option>
            </Select>
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
