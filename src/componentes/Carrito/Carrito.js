import React from 'react';
import Swal from 'sweetalert2';
import { useCarrito } from './CarritoContext';

import './Carrito.css';

const Carrito = () => {
  const { productosEnCarrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito, comprar, cantidadEnCarrito } = useCarrito();


  const quitarProducto = (id) => {
    // Utiliza la función proporcionada por el contexto para quitar productos del carrito
    quitarDelCarrito(id);
    console.log("Productos en el carrito después de quitar:", productosEnCarrito);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto quitado del carrito",
      showConfirmButton: false,
      timer: 1000
    });
  };
  const vaciarCarritoAlerta = () => {
    vaciarCarrito();

    Swal.fire({
      position: "top-end",
      icon: "info",
      title: "Carrito vaciado",
      showConfirmButton: false,
      timer: 1000
    });
  };

  console.log("Productos en el carrito en el render:", productosEnCarrito);


  return (
    <div className="carrito-container">
      <h2>Carrito de Compras</h2>

      {productosEnCarrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul className="carrito-lista">
            {productosEnCarrito.map((producto) => (
              <li key={producto.id} className="carrito-item">
                <img src={producto.urlfoto} alt={producto.nombre} className="carrito-imagen" />
                <div className="carrito-detalle">
                  <h3>{producto.nombre}</h3>
                  <p>Precio: ${producto.precio}</p>
                  <p>Cantidad: {producto.cantidad}</p>
                </div>
                <div className="carrito-botones">
                  <button className='carrito-botones-borrar' onClick={() => quitarProducto(producto.id)}>
                    <i className="fas fa-minus"></i>
                  </button>
                  <button className="carrito-botones-agregar" onClick={() => {
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
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="carrito-total">
            <p>Total: ${calcularTotal(productosEnCarrito)}</p>
            <button onClick={vaciarCarritoAlerta}>Vaciar Carrito</button>
            <button onClick={comprar}>Comprar</button>
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
