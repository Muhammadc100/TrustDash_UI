import React from "react";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";

export function PolarisProvider({ children }) {
  // For local development, just use AppProvider without App Bridge
  if (window.location.hostname === 'localhost') {
    return (
      <AppProvider i18n={enTranslations}>
        {children}
      </AppProvider>
    );
  }

  // Dynamic import App Bridge Provider only when not in local development
  const { Provider } = require("@shopify/app-bridge-react");
  const config = {
    apiKey: import.meta.env.VITE_SHOPIFY_API_KEY,
    host: new URLSearchParams(window.location.search).get("host"),
    forceRedirect: true
  };

  return (
    <Provider config={config}>
      <AppProvider i18n={enTranslations}>{children}</AppProvider>
    </Provider>
  );
}
