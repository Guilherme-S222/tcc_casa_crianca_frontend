import React, { useState } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Internação() {
  return (
    <div >
      <Header pag={'Internacao'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Tela de Internação
        </p>
      <Footer/>
    </div>
  );
}

export default Internação;
