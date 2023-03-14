import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend";

i18n.use(Backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "es"],
    backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json", // locale files path
    },
    defaultNS: "common",
    fallbackLng: ["en", "es"],
  });

  export default i18n;