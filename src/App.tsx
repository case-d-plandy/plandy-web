import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import CountryLayout from "@components/utils/CountryLayout";
import ErrorBoundary from "@components/utils/ErrorBoundary";
import Error404Page from "@pages/error/404/page";
import Error500Page from "@pages/error/500/page";
import FaqPage from "@pages/faq/page";
import GuidePage from "@pages/guide/page";
import HomePage from "@pages/page";
import PrivacyPage from "@pages/privacy/page";
import TermsPage from "@pages/terms/page";
import { hasSupportLanguage, LangCode, matchSupportLanguage } from "@utils/i18n";

function App() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      i18n.resolvedLanguage !== LangCode.EN &&
      hasSupportLanguage(i18n.resolvedLanguage ?? "") &&
      !pathname.startsWith(`/${matchSupportLanguage(i18n.resolvedLanguage).country}`)
    ) {
      navigate(`/${matchSupportLanguage(i18n.resolvedLanguage).country}${pathname}`, {
        replace: true
      });
    }
  }, []);

  useEffect(() => {
    if (
      i18n.resolvedLanguage !== LangCode.EN &&
      !pathname.startsWith(`/${matchSupportLanguage(i18n.resolvedLanguage).country}`)
    ) {
      i18n.changeLanguage(LangCode.EN);
    }
  }, [pathname]);

  return (
    <ErrorBoundary fallback={<Error500Page />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/:country" element={<CountryLayout />}>
          <Route index element={<HomePage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="guide" element={<GuidePage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
