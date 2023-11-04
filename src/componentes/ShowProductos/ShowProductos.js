// Mostrar productos desde api de laravel

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


// Consante para la api
const endpoint = 'http://localhost:8000/api';

const ShowProductos = () => {
  const [productos, setProductos] = useState([])
  useEffect ( ()=>{
    getAllProductos();
  }, [])

  // Funcion para traer todos los productos
  const getAllProductos = async () =>{
    const response = await axios.get(`${endpoint}/productos`);
    setProductos(response.data);
  }
  // Funcion para eliminar un producto
  const deleteProducto = async (id) =>{
    await axios.delete(`${endpoint}/producto/${id}`);
    getAllProductos();
  }
  return(
    <div>
      <div className='d-grid gap-2 '>
        <Link to="/CreateProductos" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        <div className='table-responsive'>
        <table className='table table-striped'>
          <thead className='bg-primary text-white'>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Resumen</th>
                <th>Precio</th>
                <th>Foto</th>
                <th>Acciones</th>
              </tr>
          </thead>
          <tbody>
            {productos.map((producto)=>(
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.resumen}</td>
                <td>{producto.precio}</td>
                <td>
                <img
                  src={producto.urlfoto}
                  // Utiliza la URL de la imagen
                  alt={producto.nombre} // Puedes proporcionar un texto alternativo
                  style={{ maxWidth: '100px', maxHeight: '100px' }} // Establece el tamaño máximo de la imagen
                />
                </td>
                <td>
                  <Link to={`/EditProductos/${producto.id}`} className='btn btn-warning'>Editar</Link>
                  <button onClick={()=>deleteProducto(producto.id)} className='btn btn-danger'>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
  
}
export default ShowProductos;