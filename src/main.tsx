import "@utils/i18n";

import { StrictMode, Suspense } from "react";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import { hydrateRoot, createRoot } from "react-dom/client";

import Loading from "@components/utils/Loading";
import ThemeProvider from "@providers/ThemeProvider";
import { GoogleFirebase } from "@utils/google-firebase";

import App from "./App";

GoogleFirebase.initialize();

const rootElement = document.getElementById("root")!;
const initialChildren = (
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

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, initialChildren);
} else {
  createRoot(rootElement).render(initialChildren);
}
