import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './locales/translations.json';  // Importa las traducciones

i18n
  .use(initReactI18next)
  .init({ 
    resources: translations,  // Usa las traducciones desde el archivo JSON
    lng: 'esMX', // Idioma por defecto
    fallbackLng: 'esMX', // Idioma de respaldo
    interpolation: {
      escapeValue: false  // React se encarga de escapar los valores
    }
  });

export default i18n;
