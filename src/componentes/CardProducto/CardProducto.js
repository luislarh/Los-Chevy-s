import "./Cardproducto.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Constante para la API
const endpoint = 'http://localhost:8000/api';


const CardProducto= () => {
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      getAllProductos();
    }, []);
  
    const getAllProductos = async () => {
      const response = await axios.get(`${endpoint}/productos`);
      setProductos(response.data);
    };

    return (
      <div className="cardP-container">
      <h1>Catálogo de Productos</h1>
      <div className="cards">
        {productos.map((producto) => (
          <div className="cardP" key={producto.id}>
            <div className="cardP-image">
              <img src={producto.urlfoto} alt={producto.nombre} />
            </div>
            <div className="cardP-content">
              <h3>{producto.nombre}</h3>
              <p className="pcolor">{producto.resumen}</p>
              <span className="price">${producto.precio}</span>
              <button className="ver-mas-button">Ver Más</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  }

export default CardProducto;