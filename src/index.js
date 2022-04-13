import React from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import global_es from "../src/locales/es/global.json";
import global_en from "../src/locales/en/global.json";
import global_pt from "../src/locales/pt/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    pt: {
      global: global_pt,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
