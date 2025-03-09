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

export enum LangCode {
  EN = "en",
  KO = "ko",
  JA = "ja"
}

export enum CountryCode {
  US = "us",
  KR = "kr",
  JP = "jp"
}

export type Language = {
  name: string;
  value: string;
  keywords: string[];
  country: (typeof CountryCode)[keyof typeof CountryCode];
  fullLangCode: string;
  langCode: (typeof LangCode)[keyof typeof LangCode];
};

export const SupportLanguage: Record<"ENGLISH" | "KOREAN" | "JAPANESE", Language> = {
  ENGLISH: {
    name: "English",
    value: "english",
    keywords: ["english", "en", "en-us", "us"],
    country: CountryCode.US,
    fullLangCode: "en-US",
    langCode: LangCode.EN
  },
  KOREAN: {
    name: "한국어",
    value: "korean",
    keywords: ["korean", "ko", "ko-kr", "kr"],
    country: CountryCode.KR,
    fullLangCode: "ko-KR",
    langCode: LangCode.KO
  },
  JAPANESE: {
    name: "日本語",
    value: "japanese",
    keywords: ["japanese", "ja", "ja-jp", "jp"],
    country: CountryCode.JP,
    fullLangCode: "ja-JP",
    langCode: LangCode.JA
  }
};

export function hasSupportLanguage(value: string): boolean {
  return value
    ? Object.values(SupportLanguage).some(({ keywords }) => keywords.includes(value.toLowerCase()))
    : false;
}

export function matchSupportLanguage(value = SupportLanguage.ENGLISH.value): Language {
  return (
    Object.values(SupportLanguage).find(({ keywords }) => keywords.includes(value.toLowerCase())) ||
    SupportLanguage.ENGLISH
  );
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: LangCode.EN,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
