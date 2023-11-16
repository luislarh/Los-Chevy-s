import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useCarrito } from '../Carrito/CarritoContext';
import Swal from 'sweetalert2';
import CardProducto from '../CardProducto/CardProducto';

import './DetallesProducto.css';

const endpoint = 'http://localhost:8000/api';

const DetallesProducto = () => {
    const { id } = useParams();
    const { agregarAlCarrito } = useCarrito(); // Accessing agregarAlCarrito from CarritoContext
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        if (id) {
            obtenerDetallesProducto();
        }
    }, [id]);

    const obtenerDetallesProducto = async () => {
        try {
            const response = await axios.get(`${endpoint}/producto/${id}`);
            console.log('Respuesta del servidor:', response.data);
            setProducto(response.data);
        } catch (error) {
            console.error('Error al obtener detalles del producto:', error);
        }
    };

    if (!producto) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div id="detalles-producto">
            <div className="detalles-producto-container">
                <div className="detalles-producto-card">
                    <img className="detalles-producto-imagen" src={producto.urlfoto} alt={producto.nombre} />
                </div>
                <div className="detalles-producto-info">
                    <h2>{producto.nombre}</h2>
                    <p className='descrip'>{producto.descripcion}</p>
                    <p className='precio'>Precio: ${producto.precio}</p>
                    <button onClick={() => {
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
                        Agregar al carrito
                    </button>
                </div>
            </div>
            <br></br>
            <CardProducto></CardProducto>
        </div>
    );
};

export default DetallesProducto;
