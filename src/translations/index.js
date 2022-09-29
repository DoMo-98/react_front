import global_en from "./en/global.json"
import global_es from "./es/global.json"

import i18next from 'i18next'

i18next.init({
  interpolation: { escapeValu: false },
  fallbackLng: 'en',
  lng: localStorage.getItem("lng") || navigator.language.split("-")[0], // TODO: get from user
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
})

export default i18next