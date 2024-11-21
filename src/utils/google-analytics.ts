import {
  type Analytics,
  type AnalyticsCallOptions,
  getAnalytics,
  logEvent
} from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.firebasestorage.app`,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

let analytics: Analytics | undefined;

export const GoogleAnalytics = {
  initialize() {
    const app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
  },
  pageView(title: string) {
    if (analytics === undefined) return;

    logEvent(analytics, "page_view", {
      page_title: title,
      page_location: window.location.pathname,
      page_referrer: encodeURIComponent(document.referrer)
    });
  },
  logEvent(
    eventName: string,
    eventParams?: { [p: string]: string | number },
    options?: AnalyticsCallOptions
  ) {
    if (analytics === undefined) return;

    logEvent<string>(analytics, eventName, eventParams, options);
  }
};
