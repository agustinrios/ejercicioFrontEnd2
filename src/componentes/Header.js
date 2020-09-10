import React, { Fragment } from 'react';
import "./header.css"
import IMG from "./img/reddit.svg"

const Header = () => {
    return (
        <Fragment>
            <div className="header">
            <div className="container-fluid">
                <div className="nav">
                    <h4 className="navegacion"><a href="/inicio"><img src={IMG} className="logo" alt="logo"></img></a></h4>
                    <h4 className="navegacion pading1"><a href="/Inicio">Inicio</a></h4>
                    <h4 className="navegacion pading2"><a href="/Estadisticas">Estadisticas</a></h4>
                </div>
                </div>
            </div>
        </Fragment>
      );
    }

export default Header;