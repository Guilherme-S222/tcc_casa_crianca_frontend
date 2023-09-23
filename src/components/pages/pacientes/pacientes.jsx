import React, { useState } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Pacientes() {
  return (
    <div >
      <Header pag={'Pacientes'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Tela de Pacientes
        </p>
      <Footer/>
    </div>
  );
}

export default Pacientes;
