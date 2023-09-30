import React, { useState } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

import './Pacientes.css';

function Pacientes() {
  return (
    <div >
      <Header pag={'Pacientes'}/>
        <div className='pacientesList'>
          <span className='pacientesInfo'>
            Paciente 1
          </span>
        </div>
      <Footer/>
    </div>
  );
}

export default Pacientes;
