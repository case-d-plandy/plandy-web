import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import Button from "@components/atoms/Button";
import Container from "@components/atoms/Container";
import Icon from "@components/atoms/Icon";
import Select, { Option } from "@components/atoms/Select";
import useThemeStore from "@stores/theme";
import { GoogleFirebase } from "@utils/google-firebase";

import { matchSupportLanguage, SupportLanguage } from "@utils/i18n";

import { Adornment, HeaderInner, Logo, StyledHeader } from "./Header.styles";

function Header() {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { country } = useParams();

  const mode = useThemeStore((state) => state.mode);
  const updateTrigger = useThemeStore((state) => state.updateTrigger);
  const updateMode = useThemeStore((state) => state.updateMode);

  const prefixUrlCountry = country ? `/${country}` : "";

  const handleClick = () => {
    updateTrigger("manual");
    updateMode(mode === "dark" ? "light" : "dark");
    handleLogEvent("theme");
  };

  const handleChangeLang = (newLang?: string) => {
    navigate(`/${matchSupportLanguage(newLang).country}${pathname.replace(prefixUrlCountry, "")}`);
  };

  const handleLogEvent = (label: string) => {
    GoogleFirebase.logEvent("click_top_nav", {
      item_name: label
    });
  };

  return (
    <StyledHeader id="header">
      <Container>
        <HeaderInner>
          <Link to={`${prefixUrlCountry}/`} onClick={() => handleLogEvent("logo")}>
            <Button variant="text" size="small">
              <Logo>
                <img width={30} height={30} src="/icons/apple-icon.png" alt="Plandy Logo" />
              </Logo>
            </Button>
          </Link>
          <Adornment>
            <Link to={`${prefixUrlCountry}/faq`} onClick={() => handleLogEvent("faq")}>
              <Button variant="text" size="small">
                {t("faq")}
              </Button>
            </Link>
            <Link to={`${prefixUrlCountry}/guide`} onClick={() => handleLogEvent("guide")}>
              <Button variant="text" size="small">
                {t("guide")}
              </Button>
            </Link>
            <Select
              id="language-button"
              data-testid="language-button"
              aria-label={matchSupportLanguage(i18n.resolvedLanguage).name}
              size="small"
              onChange={handleChangeLang}
              value={i18n.resolvedLanguage}
              endIcon={<Icon name="ArrowDownBold" width={14} height={14} />}
              placeholder="Language"
            >
              {Object.values(SupportLanguage).map(({ name, value, langCode }) => (
                <Option
                  key={`language-option-${value}`}
                  data-testid={`language-option-${value}`}
                  value={langCode}
                >
                  {name}
                </Option>
              ))}
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
