import { StrictMode, Suspense } from "react";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import "@utils/i18n";

import { createRoot } from "react-dom/client";

import Loading from "@components/utils/Loading";
import ThemeProvider from "@providers/ThemeProvider";
import { GoogleFirebase } from "@utils/google-firebase";

import App from "./App";

GoogleFirebase.initialize();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
