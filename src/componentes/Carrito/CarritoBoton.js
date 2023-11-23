// CarritoBoton.js
import React from 'react';
import { useCarrito } from './CarritoContext';
import { Link } from 'react-router-dom';
import './CarritoBoton.css';

const CarritoBoton = () => {
    const { cantidadEnCarrito } = useCarrito();

    return (
        <div className="carrito-boton-container">
            <Link to="/Carrito" className="carrito-boton">
                <i className="fas fa-shopping-cart"></i>
                <span className="carrito-cantidad">{cantidadEnCarrito}</span>
            </Link>
        </div>
    );
};

export default CarritoBoton;
