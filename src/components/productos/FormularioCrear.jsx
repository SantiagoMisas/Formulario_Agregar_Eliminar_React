import React from "react";
import Header from "../layout/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const apiProductos = "http://localhost:3100/productos";

const FormularioCrear = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate()

  const guardarProducto = async(e) => {
    e.preventDefault()
    const producto = {
      nombre: nombre,
      descripcion: descripcion
    }
    await axios.post(apiProductos, producto)
    navigate('/productos')
  }

  return (
    <section>
      <Header />
      <section className="row">
        <section className="col-3"></section>
        <section className="col-6">
          <form onSubmit={guardarProducto} className="form-control w-100 mt-5 p-5">
            <h1 className="m-5 text-4xl">Crear nuevo Producto</h1>
            <input
              value={nombre}
              onChange={(e)=> setNombre(e.target.value)}
              placeholder="Nombre"
              className="form-control mt-3"
              type="text"
            />
            <input
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Descripcion"
              className="form-control mt-3 mb-3"
              type="text"
            />
            <section className="">
              <input
                value={"Guardar"}
                className="btn bg-orange-600 form-control"
                type="submit"
              />
              <Link
                className="btn bg-orange-600 form-control"
                to={"/productos"}
              >
                Cancelar
              </Link>
            </section>
          </form>
        </section>
        <section className="col-3"></section>
      </section>
    </section>
  );
};

export default FormularioCrear;
