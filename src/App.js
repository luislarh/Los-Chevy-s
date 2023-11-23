import React, { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';



import "./App.css";
import Header from "./componentes/Header/Header";
import CardProducto from "./componentes/CardProducto/CardProducto";
import Carrusel from "./componentes/Carrusel/Carrusel";
import Footer from "./componentes/Footer/footer";
import Somos from "./Pages/Somos";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from "./componentes/Contacto/Contacto";
import Index from "./componentes/index";
import SplashScreen from "./componentes/Splash/splash";
import Carrito from "./componentes/Carrito/Carrito";
import CarritoBoton from "./componentes/Carrito/CarritoBoton";

// CRUDS
import ShowProductos from "./componentes/ShowProductos/ShowProductos";
import { CreateProducto } from "./componentes/ShowProductos/CreateProducto";
import { EditProducto } from "./componentes/ShowProductos/EditProducto";
import DetallesProducto from "./componentes/DetallesProducto/DetallesProducto";




<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>


function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { isAuthenticated, isLoading } = useAuth0();
  const [productos, setProductos] = useState([]);



  useEffect(() => {
    // Registra el Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registrado con éxito:', registration);
        })
        .catch((error) => {
          console.log('Error al registrar el Service Worker:', error);
        });
    }
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);


  return (
    <Router>
      <div className="App">

        {/* { Header() } */}
        {/* Header */}
        {showSplash ? (
          <SplashScreen />
        ) : (
          <>
            <Header></Header>
          </>
        )}
        <Carrusel></Carrusel>
      </div>

      <Routes>
        <Route path="/Somos" element={<Somos></Somos>}></Route>
        <Route path="/Productos" element={<CardProducto></CardProducto>}></Route>
        <Route path="/producto/:id" element={<DetallesProducto />} />
        <Route path="/Contacto" element={<Contacto></Contacto>}></Route>
        <Route path="/Carrito" element={<Carrito></Carrito>}></Route>
        <Route path="/" element={<Index></Index>}></Route>



        {/* Rutas para los Cruds */}
        <Route path="/ShowProductos" element={<ShowProductos></ShowProductos>}></Route>
        <Route path="/CreateProductos" element={<CreateProducto></CreateProducto>}></Route>
        <Route path="/EditProductos/:id" element={<EditProducto></EditProducto>}></Route>
      </Routes>
      <CarritoBoton />
      <Footer></Footer>
    </Router>
  );
}

export default App;
