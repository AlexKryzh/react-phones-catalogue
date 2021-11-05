import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          page: {
            title: 'Phones Catalogue',
            home: 'Home',
            changeLang: 'Change Language',
            langChanged: 'Language Changed',
            serverError: 'Server Error'
          },
          phone: {
            title: 'Available Phones',
            seeInfo: 'Show {{phone}} Details',
            details: 'Details',
            figCaption: 'Image of {{phone}}',
            manufacturer: 'manufacturer',
            color: 'color',
            screen: 'screen',
            processor: 'processor',
            ram: 'ram',
            notFound: 'Item not Found'
          }
        }
      },
      es: {
        translation: {
          page: {
            title: 'Catálogo de Teléfonos',
            home: 'Inicio',
            changeLang: 'Cambiar Idioma',
            langChanged: 'Idioma cambiado',
            serverError: 'Error de Servidor'
          },
          phone: {
            title: 'Teléfonos Disponibles',
            seeInfo: 'Mostrar Detalles de {{phone}}',
            details: 'Detalles',
            figCaption: 'Imagen de {{phone}}',
            manufacturer: 'fabricante',
            color: 'color',
            screen: 'pantalla',
            processor: 'procesador',
            ram: 'ram',
            notFound: 'Item no encontrado'
          }
        }
      }
    }
  });

export default i18n;