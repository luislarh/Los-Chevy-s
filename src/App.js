import React, { useEffect, useState   } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';



import "./App.css";
import Header from "./componentes/Header/Header"; 
// import Formulario from './componentes/Formulario/Formulario';
// import Formulario2 from './componentes/Formulario2/Formulario2';
import CardProducto from "./componentes/CardProducto/CardProducto";
import Carrusel from "./componentes/Carrusel/Carrusel";
import Footer from "./componentes/Footer/footer";
import Somos from "./Pages/Somos";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from "./componentes/Contacto/Contacto";
import Index from "./componentes/index";
import SplashScreen from "./componentes/Splash/splash";
// CRUDS
import ShowProductos from "./componentes/ShowProductos/ShowProductos";
import { CreateProducto } from "./componentes/ShowProductos/CreateProducto";
import { EditProducto } from "./componentes/ShowProductos/EditProducto";




<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>


// let equipos = [
//   {
//     index: 1,
//     puesto: "Frontend",
//   },
//   { index: 2, puesto: "Backend" },
//   { index: 3, puesto: "DevOps" },
//   { index: 4, puesto: "Tester" },
// ];

function App() {
  const [showSplash, setShowSplash] = useState(true);


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
    }, 3000); 
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
      <Carrusel></Carrusel>
      </>
        )}
      
    </div>

    <Routes>
      <Route path="/Somos" element={<Somos></Somos>}></Route>
      <Route path="/Productos" element={<CardProducto></CardProducto>}></Route>
      <Route path="/Contacto" element={<Contacto></Contacto>}></Route>
      <Route path="/" element={<Index></Index>}></Route>


      {/* Rutas para los Cruds */}
      <Route path="/ShowProductos" element={<ShowProductos></ShowProductos>}></Route>
      <Route path="/CreateProductos" element={<CreateProducto></CreateProducto>}></Route>
      <Route path="/EditProductos/:id" element={<EditProducto></EditProducto>}></Route>
    </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
