import React from "react";
import axios from "axios";
import Header from "../layout/Header";
import { useState, useEffect } from "react";

const apiProductos = "http://localhost:3100/productos";

const ListadoProductos = () => {

  const [productos, setProductos] = useState([])

  useEffect(()=>{
    listarProductos()
  }, [])

  const listarProductos = async () => {
    const response = await axios.get(apiProductos)
    setProductos(response.data)
    console.log(response.data)
  }

  return (
    <section>
      <Header />
      <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          productos.map((producto)=> (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>
                <a href="">Editar</a> {'| '}
                <a href="">Eliminar</a>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </section>
  );
};

export default ListadoProductos;
