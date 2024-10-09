import Button from "@components/atoms/Button";
import Container from "@components/atoms/Container";
import Icon from "@components/atoms/Icon";
import Select, { Option } from "@components/atoms/Select";
import useThemeStore from "@stores/theme";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Adornment, HeaderInner, Logo, StyledHeader } from "./Header.styles";

function Header() {
  const mode = useThemeStore((state) => state.mode);
  const updateTrigger = useThemeStore((state) => state.updateTrigger);
  const updateMode = useThemeStore((state) => state.updateMode);

  const [language, setLanguage] = useState("english");

  const handleClick = () => {
    updateTrigger("manual");
    updateMode(mode === "dark" ? "light" : "dark");
  };

  const handleChange = (newValue?: string) => setLanguage(newValue || "english");

  return (
    <StyledHeader id="header">
      <Container>
        <HeaderInner>
          <Link to="/">
            <Button variant="text" size="small">
              <Logo>
                <img width={30} height={30} src="/icons/apple-icon.png" alt="Plandy Logo" />
              </Logo>
            </Button>
          </Link>
          <Adornment>
            <Link to="/faq">
              <Button variant="text" size="small">
                FAQ
              </Button>
            </Link>
            <Link to="/guide">
              <Button variant="text" size="small">
                Guide
              </Button>
            </Link>
            <Select
              data-testid="language-button"
              aria-label={language}
              size="small"
              onChange={handleChange}
              value={language}
              endIcon={<Icon name="ArrowDownBold" width={14} height={14} />}
            >
              <Option data-testid="language-option-korea" value="korea">
                한국어
              </Option>
              <Option data-testid="language-option-english" value="english">
                English
              </Option>
            </Select>
            <Button
              data-testid="theme-button"
              aria-label={mode}
              variant="text"
              onClick={handleClick}
            >
              {mode === "dark" ? (
                <Icon name="SunBold" width={18} height={18} />
              ) : (
                <Icon name="MoonBold" width={18} height={18} />
              )}
            </Button>
          </Adornment>
        </HeaderInner>
      </Container>
    </StyledHeader>
  );
}

export default Header;
