import { Route, Routes } from "react-router-dom";

import ErrorBoundary from "@components/utils/ErrorBoundary";
import LangLayout from "@components/utils/LangLayout";
import Error404Page from "@pages/error/404/page";
import Error500Page from "@pages/error/500/page";
import HowToConnectPage from "@pages/faq/how-to-connect/page";
import FaqPage from "@pages/faq/page";
import GuidePage from "@pages/guide/page";
import HomePage from "@pages/page";
import PrivacyPage from "@pages/privacy/page";
import TermsPage from "@pages/terms/page";

function App() {
  return (
    <ErrorBoundary fallback={<Error500Page />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/faq/how-to-connect" element={<HowToConnectPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/:lang" element={<LangLayout />}>
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
