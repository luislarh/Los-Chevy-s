// CardProducto.js

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import { useCarrito } from '../Carrito/CarritoContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Cardproducto.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const endpoint = 'http://localhost:8000/api';

export const CardProducto = () => {
  const { i18n } = useTranslation("global");
  const navigate = useNavigate();
  const { agregarAlCarrito, cantidadEnCarrito } = useCarrito();

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
      <h1> {i18next.t('h1Productos')}</h1>
      <h3 style={cantidadEnCarrito > 0 ? { color: '#E9967A' } : { color: '#333' }}>
        ({cantidadEnCarrito} {i18next.t('h3Productos')})
      </h3>
      <div className="cards">
        {productos.map((producto) => (
          <div className="cardP" key={producto.id}>
            <div className="cardP-image">
              <img src={producto.urlfoto} alt={producto.nombre} />
            </div>
            <div className="cardP-content">
              <Link to={`/producto/${producto.id}`}>
                <h3 className='nombreh3'>{producto.nombre}</h3>
              </Link>
              <p className="pcolor">{producto.resumen}</p>
              <span className="price">${producto.precio}</span>
              <Link
                to={`/producto/${producto.id}#detalles-producto`}
                className="ver-mas-button"
                onClick={() => {
                  navigate(`/producto/${producto.id}#detalles-producto`);
                }}
              >
                <i className="fas fa-eye"></i> {i18next.t('buttoVer')}
              </Link>
              <button className="agregar-button" onClick={() => {
                agregarAlCarrito(producto);
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Agregado al carrito',
                  showConfirmButton: false,
                  timer: 1000,
                  customClass: {
                    popup: 'tamaño-personalizado',
                  },
                });
              }}>
                <i className="fas fa-cart-plus"></i> {i18next.t('buttoAgregar')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardProducto;
