import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { CarritoProvider } from './componentes/Carrito/CarritoContext';


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
        <App />
      </CarritoProvider>
    </Auth0Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
