import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import App from './App'
import './index.css'
import global_en from "./translations/en/global.json"
import global_es from "./translations/es/global.json"

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)
