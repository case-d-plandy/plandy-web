import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import translationEN from "@assets/locales/en/translation.json";
import translationJA from "@assets/locales/ja/translation.json";
import translationKO from "@assets/locales/ko/translation.json";

export const resources = {
  en: {
    translation: translationEN
  },
  ko: {
    translation: translationKO
  },
  ja: {
    translation: translationJA
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
