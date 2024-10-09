import { StrictMode } from "react";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";

import ThemeProvider from "@providers/ThemeProvider";
import { GoogleAnalytics } from "@utils/google-analytics.ts";

import App from "./App";

GoogleAnalytics.initialize();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
