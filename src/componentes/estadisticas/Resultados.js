import React, { Fragment } from 'react';
import "./resultados.css"
import { v4 as uuidv4 } from 'uuid';
import IMG from "../img/statistics.svg"

const Resultados = () => {
     const datos = [
        { id: uuidv4(), color: 'blue', cantidad: 3 },
        { id: uuidv4(), color: 'green', cantidad: 2 },
        { id: uuidv4(), color: 'orange', cantidad: 1 },
        { id: uuidv4(), color: 'yellow', cantidad:1 },
        { id: uuidv4(), color: 'red', cantidad:1 },
        { id: uuidv4(), color: 'purple', cantidad:1 },
        { id: uuidv4(), color: 'grey', cantidad:0 },
        { id: uuidv4(), color: 'white', cantidad:0 }
    ]
    
    return (
        <Fragment>
            <h1 className="text-center h1">Resultados</h1>
            <div className="container seccion-datos">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <table>
                            <thead>
                                <tr>
                                <th><h4>Color</h4></th>
                                <th><h4>Cantidad</h4></th>
                                </tr>
                            </thead>
                            <tbody>
                                { datos.length > 0 ?
                                    datos.map(dato => (
                                        <tr key={dato.id}>
                                            <td className="parrafo-td">{dato.color}</td>
                                            <td className="parrafo-td">{dato.cantidad}</td>
                                        </tr>
                                        )) : (
                                        <tr>
                                            <td colSpan={3}>No Jobs</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src={IMG} className="imagen"></img>
                    </div>
                </div>
            </div>
        </Fragment>
      );
    }

export default Resultados;