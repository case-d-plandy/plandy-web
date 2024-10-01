import ErrorBoundary from "@components/utils/ErrorBoundary";
import Error404Page from "@pages/error/404/page";
import Error500Page from "@pages/error/500/page";
import HowToConnectPage from "@pages/faq/how-to-connect/page";
import FaqPage from "@pages/faq/page";
import ConvenientSchedulingMethodPage from "@pages/guide/convenient-scheduling-method/page";
import GuidePage from "@pages/guide/page";
import HomePage from "@pages/page";
import PrivacyPage from "@pages/privacy/page";
import TermsPage from "@pages/terms/page";
import ThemeProvider from "@providers/ThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ErrorBoundary fallback={<Error500Page />}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path={"/faq/how-to-connect"} element={<HowToConnectPage />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route
              path={"/guide/convenient-scheduling-method"}
              element={<ConvenientSchedulingMethodPage />}
            />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path={"*"} element={<Error404Page />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
