declare namespace NodeJS {
  interface ProcessEnv {
    // Env
    isCI: "true" | "false";
    NODE_ENV: "development" | "production" | "test";
    // Analytics
    VITE_FIREBASE_API_KEY: string;
    VITE_FIREBASE_PROJECT_ID: string;
    VITE_FIREBASE_MESSAGING_SENDER_ID: string;
    VITE_FIREBASE_APP_ID: string;
    VITE_FIREBASE_MEASUREMENT_ID: string;
    VITE_GTAG_MANAGER: string;
    VITE_GTAG_ADS: string;
    VITE_NAVER_WEBMASTER: string;
    VITE_NAVER_ANALYTICS: string;
  }
}
