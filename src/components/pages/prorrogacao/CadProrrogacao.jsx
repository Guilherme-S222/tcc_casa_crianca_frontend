import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function CadProrrogacao() {
  return (
    <div >
      <Header pag={'CadProrrogacao'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Cadastro de Prorrogação
        </p>
      <Footer/>
    </div>
  );
}

export default CadProrrogacao;
