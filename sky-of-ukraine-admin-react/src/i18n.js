import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: process.env.REACT_APP_BACKEND_LINK + "/{{lng}}",
      parse: (data, url) => {
        const parsedData = JSON.parse(data);
        const translations = {};

        // Получаем языковой код из URL
        const langCode = url.split("/").pop();

        parsedData.forEach((item) => {
          // Используем языковой код для выбора нужного значения
          translations[item.keyi18n] = item[`value_${langCode}`];
        });

        return translations;
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
  });

export default i18n;

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import HttpBackend from "i18next-http-backend";

// i18n
//   .use(HttpBackend)
//   .use(initReactI18next)
//   .init({
//     lng: "en",
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false, // not needed for React as it escapes by default
//     },
//   });
