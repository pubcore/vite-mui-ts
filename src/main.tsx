import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ChainedBackend from "i18next-chained-backend";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import HttpApi from "i18next-http-backend";
import defaultLng from "./default-locale.json";

const I18N_NS = "app";
await i18n
  .use(LanguageDetector)
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    ns: [I18N_NS],
    defaultNS: I18N_NS,
    load: "languageOnly",
    supportedLngs: ["en", "de"],
    backend: {
      backends: [
        resourcesToBackend({ en: { [I18N_NS]: defaultLng } }),
        HttpApi,
      ],
      backendOptions: [{}, { loadPath: "/locales/{{ns}}-{{lng}}.json" }],
    },
    keySeparator: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      bindI18n: false,
      transSupportBasicHtmlNodes: false,
      useSuspense: false,
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider {...{ store }}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
