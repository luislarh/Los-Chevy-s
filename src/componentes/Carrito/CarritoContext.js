import React, { createContext, useContext, useState, useEffect } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => {
    const context = useContext(CarritoContext);
    if (!context) {
        throw new Error('useCarrito debe ser utilizado dentro de un CarritoProvider');
    }
    return context;
};

export const CarritoProvider = ({ children }) => {
    // Estado global del carrito
    const [productosEnCarrito, setProductosEnCarrito] = useState(() => {
        const productosEnCarritoString = localStorage.getItem('productosEnCarrito');
        return productosEnCarritoString ? JSON.parse(productosEnCarritoString) : [];
    });
    const [cantidadEnCarrito, setCantidadEnCarrito] = useState(() => {
        const cantidadEnCarritoString = localStorage.getItem('cantidadEnCarrito');
        return cantidadEnCarritoString ? parseInt(cantidadEnCarritoString, 10) : 0;
    });

    useEffect(() => {
        // Guardar datos del carrito en localStorage cada vez que cambien
        localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
        localStorage.setItem('cantidadEnCarrito', cantidadEnCarrito.toString());
    }, [productosEnCarrito, cantidadEnCarrito]);

    const agregarAlCarrito = (producto) => {
        const productoExistente = productosEnCarrito.find((p) => p.id === producto.id);

        if (productoExistente) {
            const nuevosProductos = productosEnCarrito.map((p) =>
                p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
            );
            setProductosEnCarrito(nuevosProductos);
        } else {
            setProductosEnCarrito([...productosEnCarrito, { ...producto, cantidad: 1 }]);
        }

        setCantidadEnCarrito((prevCantidad) => prevCantidad + 1);
    };

    const quitarDelCarrito = (id) => {
        const nuevosProductos = productosEnCarrito
            .map((producto) => {
                if (producto.id === id) {
                    producto.cantidad = producto.cantidad > 1 ? producto.cantidad - 1 : 0;
                }
                return producto;
            })
            .filter((producto) => producto.cantidad !== 0);

        setProductosEnCarrito(nuevosProductos);
        setCantidadEnCarrito((prevCantidad) => (prevCantidad > 0 ? prevCantidad - 1 : 0));
    };

    const vaciarCarrito = () => {
        setProductosEnCarrito([]);
        setCantidadEnCarrito(0);
        localStorage.removeItem('productosEnCarrito');
        localStorage.removeItem('cantidadEnCarrito');
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
