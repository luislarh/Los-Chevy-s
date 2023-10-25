import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


import "./App.css";
import Header from "./componentes/Header/Header"; 
// import Formulario from './componentes/Formulario/Formulario';
// import Formulario2 from './componentes/Formulario2/Formulario2';
import CardProducto from "./componentes/CardProducto/CardProducto";
import Carrusel from "./componentes/Carrusel/Carrusel";
import Somos from "./Pages/Somos";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


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
  return (
    <Router>
    <div className="App">
      {/* { Header() } */}
      {/* Header */}
      <Header></Header>
      <Carrusel></Carrusel>
      
    </div>

    <Routes>
      <Route path="/Somos" element={<Somos></Somos>}></Route>
      <Route path="/Productos" element={<CardProducto></CardProducto>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
