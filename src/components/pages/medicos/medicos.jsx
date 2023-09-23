import React, { useState } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Medicos() {
  return (
    <div >
      <Header pag={'Medicos'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Tela de Médicos
        </p>
      <Footer/>
    </div>
  );
}

export default Medicos;
