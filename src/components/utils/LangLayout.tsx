import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

import { resources } from "@utils/i18n";

function LangLayout() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { lang = LangCode.EN } = useParams();

  useEffect(() => {
    if (lang in resources) {
      i18n.changeLanguage(lang);
    } else {
      navigate(pathname.replace(`/${lang}`, ""), { replace: true });
    }
  }, [lang]);

  return <Outlet />;
}

export default LangLayout;
