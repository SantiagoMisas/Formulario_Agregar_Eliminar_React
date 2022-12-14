import React from "react";
import axios from "axios";
import Header from "../layout/Header";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const apiProductos = "http://localhost:3100/productos";

const ListadoProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    listarProductos();
  }, []);

  const listarProductos = async () => {
    const response = await axios.get(apiProductos);
    setProductos(response.data);
    console.log(response.data);
  };

  return (
    <section>
      <Header />
      <section>
        <Link to={'/crear'} className="mt-5 bg-orange-600 btn">Nuevo producto</Link>
      </section>
      <table className="table mt-5">
        <thead className="bg-orange-600">
          <tr className="text-center">
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr className="text-center" key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>
                <Link className="btn bg-orange-500" href="">Editar</Link> {"| "}
                <Link className="btn bg-red-500" href="">Eliminar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ListadoProductos;
