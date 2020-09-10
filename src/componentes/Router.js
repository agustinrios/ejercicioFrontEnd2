import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from './inicio/Inicio';
import Estadisticas from './estadisticas/Estadisticas';



const Router = () => {
    return (
        <Fragment>
          <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Inicio} />
                <Route path='/inicio' component={Inicio} />
                <Route path='/estadisticas' component={Estadisticas} />
            </Switch>
          </BrowserRouter>
        </Fragment>
      );
    }

export default Router;