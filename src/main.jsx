import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
import { I18nextProvider } from 'react-i18next'

import App from './App'
import './index.css'
import i18next from "./translations"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)
