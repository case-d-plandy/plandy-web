import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

import Error404Page from "@pages/error/404/page";
import { CountryCode, hasSupportLanguage, LangCode, matchSupportLanguage } from "@utils/i18n";

function CountryLayout() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { country = CountryCode.US } = useParams();

  useEffect(() => {
    if (hasSupportLanguage(country)) {
      const langCode = matchSupportLanguage(country).langCode;
      i18n.changeLanguage(langCode);

      if (langCode === LangCode.EN) {
        navigate(pathname.replace(`/${country}`, ""), { replace: true });
      }
    }
  }, [country]);

  return hasSupportLanguage(country) ? <Outlet /> : <Error404Page />;
}

export default CountryLayout;
