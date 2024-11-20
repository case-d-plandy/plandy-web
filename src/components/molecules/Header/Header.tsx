import { useState } from "react";

import { Link } from "react-router-dom";

import Button from "@components/atoms/Button";
import Container from "@components/atoms/Container";
import Icon from "@components/atoms/Icon";
import Select, { Option } from "@components/atoms/Select";
import useThemeStore from "@stores/theme";
import { GoogleAnalytics } from "@utils/google-analytics";

import i18n from "@utils/i18n";

import { Adornment, HeaderInner, Logo, StyledHeader } from "./Header.styles";

function Header() {
  const mode = useThemeStore((state) => state.mode);
  const updateTrigger = useThemeStore((state) => state.updateTrigger);
  const updateMode = useThemeStore((state) => state.updateMode);

  const [language, setLanguage] = useState(i18n.language);

  const handleClick = () => {
    updateTrigger("manual");
    updateMode(mode === "dark" ? "light" : "dark");
    handleLogEvent("theme");
  };

  const handleChangeLang = (newLang?: string) => {
    i18n.changeLanguage(newLang);
    setLanguage(newLang || "en");
  };

  const handleLogEvent = (label: string) => {
    GoogleAnalytics.logEvent("click_top_nav", {
      item_name: label
    });
  };

  return (
    <StyledHeader id="header">
      <Container>
        <HeaderInner>
          <Link to="/" onClick={() => handleLogEvent("logo")}>
            <Button variant="text" size="small">
              <Logo>
                <img width={30} height={30} src="/icons/apple-icon.png" alt="Plandy Logo" />
              </Logo>
            </Button>
          </Link>
          <Adornment>
            <Link to="/faq" onClick={() => handleLogEvent("faq")}>
              <Button variant="text" size="small">
                FAQ
              </Button>
            </Link>
            <Link to="/guide" onClick={() => handleLogEvent("guide")}>
              <Button variant="text" size="small">
                Guide
              </Button>
            </Link>
            <Select
              data-testid="language-button"
              aria-label={language}
              size="small"
              onChange={handleChangeLang}
              value={language}
              endIcon={<Icon name="ArrowDownBold" width={14} height={14} />}
            >
              <Option data-testid="language-option-english" value="en">
                English
              </Option>
              <Option data-testid="language-option-korea" value="ko">
                한국어
              </Option>
              <Option data-testid="language-option-japanese" value="ja">
                日本語
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
