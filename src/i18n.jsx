import i18n, { init, use } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";
import uzTranslation from "../public/languages/uz.json";
import ruTranslation from "../public/languages/ru.json";
import engTranslation from "../public/languages/eng.json";


i18n
.use(Backend)
.use(languageDetector)
.use(initReactI18next);
init({
  fallbackLng :'eng',
  lng: 'i18n.language',
  debug: true,
  resources: {
    eng: { translation: engTranslation },
    uz: { translation: uzTranslation },
    ru: { translation: ruTranslation },
  },
});

export default i18n;
