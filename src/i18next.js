import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Подключаем плагин для загрузки файлов
  .use(LanguageDetector) // Автоматическое определение языка
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru', // Язык по умолчанию, если перевод не найден
    supportedLngs: ['ru', 'en', 'tj'], // Список поддерживаемых языков
    interpolation: {
      escapeValue: false // React сам защищает от XSS
    },
    backend: {
      // Путь, откуда будут скачиваться JSON файлы с переводами
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    }
  });

export default i18n;
