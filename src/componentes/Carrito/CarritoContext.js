// CarritoContext.js
import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => {
    const context = useContext(CarritoContext);
    if (!context) {
        throw new Error('useCarrito debe ser utilizado dentro de un CarritoProvider');
    }
    return context;
};

export const CarritoProvider = ({ children }) => {
    const [productosEnCarrito, setProductosEnCarrito] = useState([]);
    const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0);

    const agregarAlCarrito = (producto) => {
        // Verificar si el producto ya está en el carrito
        const productoExistente = productosEnCarrito.find((p) => p.id === producto.id);

        if (productoExistente) {
            // El producto ya está en el carrito, incrementa la cantidad
            const nuevosProductos = productosEnCarrito.map((p) =>
                p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
            );
            setProductosEnCarrito(nuevosProductos);
        } else {
            // El producto no está en el carrito, agrégalo con cantidad 1
            setProductosEnCarrito([...productosEnCarrito, { ...producto, cantidad: 1 }]);
        }

        setCantidadEnCarrito((prevCantidad) => prevCantidad + 1);
    };


    const quitarDelCarrito = (id) => {
        const nuevosProductos = productosEnCarrito
            .map((producto) => {
                if (producto.id === id) {
                    // Disminuir la cantidad o eliminar el producto si la cantidad es 1
                    producto.cantidad = producto.cantidad > 1 ? producto.cantidad - 1 : 0;
                }
                return producto;
            })
            .filter((producto) => producto.cantidad !== 0); // Filtra los elementos con cantidad igual a 0

        setProductosEnCarrito(nuevosProductos);
        setCantidadEnCarrito((prevCantidad) => (prevCantidad > 0 ? prevCantidad - 1 : 0));
    };


    const vaciarCarrito = () => {
        setProductosEnCarrito([]);
        setCantidadEnCarrito(0);
        localStorage.removeItem('productosEnCarrito');
    };

    const value = {
        productosEnCarrito,
        cantidadEnCarrito,
        agregarAlCarrito,
        quitarDelCarrito,
        vaciarCarrito,
    };

    return <CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>;
};
