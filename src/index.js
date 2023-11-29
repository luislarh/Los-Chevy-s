import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { CarritoProvider } from './componentes/Carrito/CarritoContext';
import i18next from "i18next";
import global_en from './componentes/translation/en/global.json';
import global_es from './componentes/translation/es/global.json';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      translation: global_es,
    },
    en: {
      translation: global_en,
    },
  },

});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Auth0Provider
      domain="dev-2bqjer1cdqvz48qz.us.auth0.com"
      clientId="iuUbyC5nVoipEaS0JYDhw08SQEgjmASz"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >

      <CarritoProvider>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </CarritoProvider>

    </Auth0Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
