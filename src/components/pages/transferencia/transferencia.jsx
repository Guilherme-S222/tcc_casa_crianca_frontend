import React, { useState } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Transferencia() {
  return (
    <div >
      <Header pag={'Transferencia'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Tela de Transferência
        </p>
      <Footer/>
    </div>
  );
}

export default Transferencia;
