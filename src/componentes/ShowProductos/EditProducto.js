import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/producto/';

export const EditProducto = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [resumen, setResumen] = useState('');
    const [precio, setPrecio] = useState(0);
    const [urlfoto, setUrlfoto] = useState(null); // Usamos un estado para la imagen
    const navigate = useNavigate();
    const { id } = useParams();
    
        const update = async (e) => {
            e.preventDefault();
    
            // Validación simple de campos requeridos
            if (!nombre || !descripcion || !resumen || !precio) {
                alert('Por favor, complete todos los campos requeridos.');
                return;
            }
    
            // Crea un objeto con los datos del producto
            const productData = {
                nombre,
                descripcion,
                resumen,
                precio,
                urlfoto, // No enviamos la imagen directamente en este objeto
            };
    
            await axios.put(`${endpoint}${id}`, productData);
            console.log(productData);
            navigate('/ShowProductos');
        }
    

    useEffect(() => {
        const getProductoById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setNombre(response.data.nombre);
            setDescripcion(response.data.descripcion);
            setResumen(response.data.resumen);
            setPrecio(response.data.precio);
            setUrlfoto(response.data.urlfoto);
            // La imagen se actualiza correctamente
        }
        getProductoById();
    }, [])

    return (
<div className="container">
    <div className="row justify-content-center">
    <div className="col-lg-6">
        <div className="card">
        <div className="card-body">
            <h3 className="card-title text-center">Insertar Producto</h3>
            <form onSubmit={update} encType="multipart/form-data">
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Descripción</label>
                <input
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                type="text"
                className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Resumen</label>
                <input
                value={resumen}
                onChange={(e) => setResumen(e.target.value)}
                type="text"
                className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Precio</label>
                <input
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                type="number"
                className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Foto</label>
                <input
                onChange={(e) => setUrlfoto(e.target.files[0])}
                type="file"
                className="form-control"
                />
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
            </form>
        </div>
        </div>
    </div>
    </div>
</div>
    )
}

