import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

import Button from "@components/atoms/Button";
import Container from "@components/atoms/Container";
import { GoogleFirebase } from "@utils/google-firebase";

import { Copyright, Divider, InfoBox, PolicyButtonGroup, StyledFooter } from "./Footer.styles";

function Footer() {
  const { t } = useTranslation();
  const { lang } = useParams();

  const prefixUrlLang = lang ? `/${lang}` : "";

  const handleLogEvent = (label: string) => {
    GoogleFirebase.logEvent("click_top_nav", {
      item_name: label
    });
  };

  return (
    <StyledFooter>
      <Container>
        <Divider />
        <InfoBox>
          <Copyright>Copyright © {new Date().getFullYear()} Plandy</Copyright>
          <PolicyButtonGroup>
            <Link to={`${prefixUrlLang}/terms`} onClick={() => handleLogEvent("terms")}>
              <Button variant="text" size="small">
                {t("terms")}
              </Button>
            </Link>
            <Link to={`${prefixUrlLang}/privacy`} onClick={() => handleLogEvent("privacy")}>
              <Button variant="text" size="small">
                {t("privacy")}
              </Button>
            </Link>
          </PolicyButtonGroup>
        </InfoBox>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
