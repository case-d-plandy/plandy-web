import HomePage from "@pages/page";
import PrivacyPage from "@pages/privacy/page";
import TermsPage from "@pages/terms/page";
import ThemeProvider from "@providers/ThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
