import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./exports/en";
import arTranslations from "./exports/ar";
import heTranslations from "./exports/he";

i18n
  .use(initReactI18next) // Initialize react-i18next
  .init({
    debug: true,
    fallbackLng: "ar", //default language
    interpolation: {
      escapeValue: false, //  disable HTML escaping, react escapes the output
    },
    resources: {
      en: {
        translation: enTranslations,
      },
      ar: {
        translation: arTranslations,
      },
      he: {
        translation: heTranslations,
      },
    },
  });

export default i18n;
