import React from 'react';
import Swal from 'sweetalert2';
import { useCarrito } from './CarritoContext';
import { useState, useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import axios from 'axios';



import './Carrito.css';

const Carrito = () => {
  const {
    productosEnCarrito,
    agregarAlCarrito,
    quitarDelCarrito,
    vaciarCarrito,
    cantidadEnCarrito,
  } = useCarrito();
  const { i18n } = useTranslation("global");

  // Estado local del carrito (obtenido de localStorage)
  const [productosEnCarritoLocalStorage, setProductosEnCarritoLocalStorage] = useState(() => {
    const productosEnCarritoString = localStorage.getItem('productosEnCarrito');
    return productosEnCarritoString ? JSON.parse(productosEnCarritoString) : [];
  });

  useEffect(() => {
    // Actualizar el estado del carrito con el estado almacenado en localStorage
    setProductosEnCarritoLocalStorage(productosEnCarrito);
  }, [productosEnCarrito]);

  // Estado para mercado pago
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago('TEST-0180d2e6-902e-4f5b-9905-4813dc86a62c');

  // Funcion para pagar con mercado pago
  const createPreference = async () => {
    try {
      const response = await axios.post('http://localhost:8080/create_preference', {
        productosEnCarrito,
        quantity: 1,
        currency_id: 'MXN',
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  const quitarProducto = (id) => {
    quitarDelCarrito(id);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto quitado del carrito',
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const vaciarCarritoAlerta = () => {
    vaciarCarrito();

    Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: 'Carrito vaciado',
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div className="carrito-container">
      <h2>{i18next.t('h2Carrito')}</h2>

      {productosEnCarritoLocalStorage.length === 0 ? (
        <p>{i18next.t('pCarritoVacio')}</p>
      ) : (
        <div>
          <ul className="carrito-lista">
            {productosEnCarritoLocalStorage.map((producto) => (
              <li key={producto.id} className="carrito-item">
                <img src={producto.urlfoto} alt={producto.nombre} className="carrito-imagen" />
                <div className="carrito-detalle">
                  <h3>{producto.nombre}</h3>
                  <p>{i18next.t('pPrecio')}: ${producto.precio}</p>
                  <p>{i18next.t('pCantidad')}: {producto.cantidad}</p>
                </div>
                <div className="carrito-botones">
                  <button className="carrito-botones-borrar" onClick={() => quitarProducto(producto.id)}>
                    <i className="fas fa-minus"></i>
                  </button>
                  <button
                    className="carrito-botones-agregar"
                    onClick={() => {
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
                    }}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="carrito-total">
            <p>{i18next.t('pTotal')}: ${calcularTotal(productosEnCarrito)}</p>
            <button onClick={vaciarCarritoAlerta}>{i18next.t('buttonVaciarCarrito')}</button>
            <button onClick={handleBuy}>{i18next.t('buttonComprar')}</button>
            {preferenceId && <Wallet initialization={{ preferenceId }} />}
          </div>
        </div>
      )}
    </div>
  );
};

// Función para calcular el total de los productos en el carrito
const calcularTotal = (productos) => {
  return productos.reduce((total, producto) => {
    const precio = producto.precio || 0;
    const cantidad = producto.cantidad || 0;
    return total + precio * cantidad;
  }, 0).toFixed(2);
};

export default Carrito;
