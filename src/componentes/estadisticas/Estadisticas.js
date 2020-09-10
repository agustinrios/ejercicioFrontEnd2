import React, { useState, useEffect } from 'react';
import Usuario from './Usuario';
import "./estadisticas.css"
import Resultados from './Resultados';

const Estadisticas = () => {
  // state de usuarios
  const [usuario, guardarUsuario] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://jsonplaceholder.typicode.com/users`;

      const respuesta = await fetch(url);
      const usuario = await respuesta.json();

      guardarUsuario(usuario);
    }
    consultarAPI();
  }, [usuario]);

    return (
      <div className="estadisticas">
        <div className="container ">
          <h1 className="text-center p-3">Usuarios</h1>
          <Usuario
            usuario={usuario}
          />
          <Resultados />
        </div>
      </div>
      );
    }

export default Estadisticas;