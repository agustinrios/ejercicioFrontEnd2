import React, { Fragment } from 'react';
import Header from './componentes/Header';
import Router from './componentes/Router';
import Footer from './componentes/Footer';


function App() {
  return (
    <Fragment>
      <Header />
      <Router />
      <Footer />
    </Fragment>
  );
}

export default App;
