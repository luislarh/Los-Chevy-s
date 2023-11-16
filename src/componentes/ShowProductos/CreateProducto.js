import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/producto';

export const CreateProducto = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [resumen, setResumen] = useState('');
    const [precio, setPrecio] = useState(0);
    const [urlfoto, setUrlfoto] = useState(null); // Usamos un estado para la imagen
    const navigate = useNavigate();

    const store = async (e) => {
    e.preventDefault();

    // Crear un objeto FormData para enviar la imagen
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    formData.append('resumen', resumen);
    formData.append('precio', precio);
    formData.append('urlfoto', urlfoto);

    // Enviar el formulario con la imagen al servidor
    try {
        await axios.post(endpoint, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        });
    navigate('/ShowProductos');
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
    }
};

    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="card">
                <div className="card-body">
                <h3 className="card-title text-center">Insertar Producto</h3>
                <form onSubmit={store} encType="multipart/form-data">
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
                    <textarea
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
    );
};

