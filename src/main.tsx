import { StrictMode, Suspense } from "react";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import "@utils/i18n";

import { createRoot } from "react-dom/client";

import Loading from "@components/utils/Loading";
import ThemeProvider from "@providers/ThemeProvider";
import { GoogleAnalytics } from "@utils/google-analytics";

import App from "./App";

GoogleAnalytics.initialize();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <HelmetProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
    </Suspense>
  </StrictMode>
);
