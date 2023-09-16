import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Prorrogacao() {
  return (
    <div >
      <Header pag={'Prorrogacao'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Tela de Prorrogação
        </p>
      <Footer/>
    </div>
  );
}

export default Prorrogacao;
