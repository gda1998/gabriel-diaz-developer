import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    backend: {
        // eslint-disable-next-line no-path-concat
        loadPath: 'locales/{{lng}}/{{ns}}.json',
        // eslint-disable-next-line no-path-concat
        addPath: 'locales/{{lng}}/{{ns}}.missing.json'
    },
    fallbackLng: 'en',
});